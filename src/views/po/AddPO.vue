<template>
	<div>
		<CRow>
			<CCol sm="12">
				<CCard>
					<CCardHeader>
						<p>
							<strong>Tambah</strong> Purchase Order
						</p>
					</CCardHeader>
					<CCardBody>
						<CForm class="mt-4">
							<CRow class="mx-auto d-flex justify-content-center">
								<CCol sm="12" md="8">
									<p v-show="validMsg == true" class="alert alert-success">
				            		  	<small>Penambahan PO berhasil!</small>
				            		  </p>
									<CSelect						                
										placeholder="Pilih Sales"
										label="Sales"
						                horizontal
						                v-model="po.id_sales"
						                :options="sales"
						                @update:value="assignSales"
						              />  
						              <CSelect
						              	placeholder="Pilih Konsumen"
						                label="Konsumen"
						                horizontal
						                v-model="po.id_konsumen"
						                :options="konsumen"
						                @update:value="assignKonsumen"
						              />  
						              <CSelect
						              	placeholder="Pilih Kurir"
						                label="Kurir"
						                horizontal
						                v-model="po.id_kurir"
						                :options="kurir"
						                @update:value="assignKurir"
						              />  
						              <CInput
						                type="text"
						                :description="validator.no_msg"
						                :is-valid="validator.no"
						                @input="po.no.length < 1 ? validator.no = false : validator.no = true"
						                autocomplete="no"
						                label="Nomer PO"
						                horizontal
						                placeholder="Masukan Nomer PO"
						                v-model="po.no"
						              />
						              <CInput
						                type="date"
						                :description="validator.date_msg"
						                :is-valid="validator.date"
						                @input="po.date.length < 1 ? validator.date = false : validator.date = true"
						                autocomplete="date"
						                label="Tanggal PO"
						                horizontal
						                placeholder="Masukan Tanggal PO"
						                v-model="po.date"
						              />
						              <CInput
						                type="date"
						                :description="validator.date_line_msg"
						                :is-valid="validator.date_line"
						                @input="po.date_line.length < 1 ? validator.date_line = false : validator.date_line = true"
						                autocomplete="date_line"
						                label="Tanggal Pengiriman"
						                horizontal
						                placeholder="Masukan Tanggal Pengiriman"
						                v-model="po.date_line"
						              />
						              <div v-if="level != 7 && level == 3">
						              <CInput
						                type="date"
						                :description="validator.jatuh_tempo_msg"
						                :is-valid="validator.jatuh_tempo"
						                @input="po.jatuh_tempo.length < 1 ? validator.jatuh_tempo = false : validator.jatuh_tempo = true"
						                autocomplete="jatuh_tempo"
						                label="TOP"
						                horizontal
						                placeholder="Masukan jatuh_tempo"
						                v-model="po.jatuh_tempo"
						              />
						          	  </div>
						              <CTextarea
						                label="Keterangan"
						                placeholder="Keterangan"
						                horizontal
						                rows="3"
						                v-model="po.keterangan"
						              />
						              <CInput
						                type="number"
						                :description="validator.tax_rate_msg"
						                :is-valid="validator.tax_rate"
						                @input="po.tax_rate.length < 1 ? validator.tax_rate = false : validator.tax_rate = true"
						                autocomplete="tax_rate"
						                label="Tax Rate %"
						                horizontal
						                placeholder="Masukan Tax Rate"
						                v-model="po.tax_rate"
						              />
						              <CInput
						                type="number"
						                :description="validator.sales_fee_msg"
						                :is-valid="validator.sales_fee"
						                @input="po.sales_fee.length < 1 ? validator.sales_fee = false : validator.sales_fee = true"
						                autocomplete="sales_fee"
						                label="Sales Fee"
						                horizontal
						                placeholder="Masukan Sales Fee"
						                v-model="po.sales_fee"
						              />
						              <CInput
						                type="number"
						                :description="validator.other_msg"
						                :is-valid="validator.other"
						                @input="po.other.length < 1 ? validator.other = false : validator.other = true"
						                autocomplete="other"
						                label="Other"
						                horizontal
						                placeholder="Other"
						                v-model="po.other"
						              />
						              <CTextarea
						                label="Catatan"
						                placeholder="Catatan"
						                horizontal
						                rows="3"
						                v-model="po.catatan"
						              />
								</CCol>
								<CCol sm="12" md="2">
									<button class="btn btn-success" @click.prevent="openKonsumenModal = true"><i class="fa fa-search mr-1"></i>Cari Konsumen</button>
								</CCol>
							</CRow>
						</CForm>
					</CCardBody>

		          <CCardFooter class="d-flex justify-content-center mt-4">
		            <CButton type="submit" @click.prevent="addPO" color="primary" class="mr-2">
		            	<i class="fa fa-plus mr-1"></i>{{label}}
		            </CButton>
		          </CCardFooter>
		        </CCard>
			</CCol>
		</CRow>
		<CModal
	      :show.sync="openKonsumenModal"
	      :no-close-on-backdrop="true"
	      title="Cari Konsumen"
	      size="lg"
	      color="dark"
	    >	
	      <CInput
		    type="text"
            description="Ketik minimal 3 huruf untuk melihat hasil"
            label="Cari Konsumen"
            horizontal
            placeholder="Masukan kata"
            v-model="konsumenKeyword"
            class="m-4"
	       />	
	       <v-client-table
			:data="searchKonsumen"
			:columns="searchKonsumenFields"
			:options="searchKonsumenOptions"
			id="search-konsumen-table"
			 class="m-4"
			>
				<div slot="aksi" slot-scope="props">
					<button class="btn btn-primary" @click="assignKonsumen(props.row.id)">Pilih</button>
				</div>
			</v-client-table>
	      <template #header>
	        <h6 class="modal-title">Cari Konsumen</h6>
	        <CButtonClose @click="openKonsumenModal = false" class="text-white"/>
	      </template>
	    </CModal>
	</div>
</template>
<script type="text/javascript">
	import Notif from '@/containers/notif.js'
	import {postData} from '@/containers/global-function.js'
	export default {
		name: 'AddPO',
		data() {
			return {
				level: localStorage.level,
				konsumenDetail: [],
				konsumenKeyword:null,
				openKonsumenModal:false, // For Modal Barang
				searchKonsumen:[],
				searchKonsumenFields: ['nama', 'email', 'wa_hp', 'nama_instansi', 'aksi'],
				searchKonsumenOptions: {
					headings: {
						nama: 'Nama',
						email: 'Email',
						wa_hp: 'Whatsapp',
						nama_instansi: 'Perusahaan',
						aksi: 'Aksi'
					},
					sortable: ['nama', 'email', 'wa_hp', 'nama_instansi'],
					filterable: ['nama', 'email', 'wa_hp', 'nama_instansi'],
					columnsClasses: {
						nama: 'align-middle',
						email: 'align-middle',
						wa_hp: 'align-middle text-center',
						nama_instansi: 'align-middle',
						aksi: 'align-middle text-center',
					}
				},
				notif:undefined,
				validMsg:false,
				errors: [],
				label: 'Tambah Purchase Order',
				salesselected:1,
				konsumenselected:1,
				statusselected:1,
				kurir: [],
				sales: [],
				konsumen: [],
				validator: {
					no:null,
					no_msg:null,
					date:null,
					date_msg:null,
					date_line:null,
					date_line_msg:null,
					jatuh_tempo:null,
					jatuh_tempo_msg:null,
					tax_rate: null,
					tax_rate_msg:null,
					sales_fee: null,
					sales_fee_msg: null,
					other: null,
					other_msg: null,
				},
				po: {
					id_sales:null,
					id_konsumen:null,
					id_kurir:null,
					status:1,
					no: null,
					date: null,
					date_line: null,
					jatuh_tempo: null,
					tax_rate: null,
					sales_fee: null,
					other: null,
					catatan: null
				}
			}
		},
		watch: {
			konsumenKeyword: function(val) {
				if(val.length >= 3)
					if(val != null || val != '') {
						let s = this.konsumenDetail.filter(item => item.nama.toLowerCase().indexOf(val) > -1)
						if(s.length > 0) {
							this.searchKonsumen = s
						}
						else {
							this.searchKonsumen = []
						}
					}
			}
		},
		methods: {
			getStringLength(str) {
		          let arrString = str.split(" ")
		          return arrString.length
		    },
		    extractString(val, num = 3) {
		        let arr = val.split(" "),
		            res = ''
		        if(num < 2) {
		          for(let i = 0;i < num;i++) {
		            res += ' ' + arr[i]
		          }
		        }
		        else {
		          if(num <= 3 ) {
		            for(let i = 0;i < num;i++) {
		              res += ' ' + arr[i]
		            }
		          }
		          else {
		            num = 3
		            for(let i = 0;i < num;i++) {
		              res += ' ' + arr[i]
		            }
		          }
		          
		        }
		        return res
		      },
			assignKurir(val) {
				this.po.id_kurir = val
			},
			assignStatus(val) {
				this.po.status = val
			},
			assignKonsumen(val) {
				if(this.openKonsumenModal == true)
					this.openKonsumenModal = false
				this.po.id_konsumen = val
			},
			assignSales(val) {
				this.po.id_sales = val
			},
			addPO() { 	
				this.errors = []

				if(!this.po.no) {
					this.validator.no = false
		            this.validator.no_msg = 'Harap isi nomer PO'
		            this.errors.push('no kosong')
				}

				if(!this.po.date) {
					this.validator.date = false
		            this.validator.date_msg = 'Harap isi Tanggal PO'
		            this.errors.push('date kosong')
				}

				if(!this.po.date_line) {
					this.validator.date_line = false
		            this.validator.date_line_msg = 'Harap isi tanggal pengiriman'
		            this.errors.push('date_line kosong')
				}
				if(!this.po.jatuh_tempo) {
					this.validator.jatuh_tempo = false
		            this.validator.jatuh_tempo_msg = 'Harap isi tanggal jatuh tempo'
		            this.errors.push('jatuh_tempo kosong')
				}

				if(!this.po.tax_rate) {
					this.validator.tax_rate = false
		            this.validator.tax_rate_msg = 'Harap isi Tax Rate'
		            this.errors.push('tax_rate kosong')
				}

				if(!this.po.sales_fee) {
					this.validator.sales_fee = false
		            this.validator.sales_fee_msg = 'Harap isi sales fee'
		            this.errors.push('sales_fee kosong')
				}

				if(!this.po.id_sales || this.po.id_sales == '000') {
					this.errors.push('Harap pilih Sales')
					this.$swal('Harap pilih Sales', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}

				if(!this.po.id_konsumen || this.po.id_konsumen == '000') {
					this.errors.push('Harap pilih konsumen')
					this.$swal('Harap pilih konsumen', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}

				if(!this.po.id_kurir || this.po.id_kurir == '000') {
					this.errors.push('Harap pilih kurir')
					this.$swal('Harap pilih kurir', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}

				if(!this.errors.length) {
					this.notif = new Notif()
					let PODate = new Date(this.po.date)
					this.notif.add(this.po)

					this.label = 'Loading...'
					this.$http.post(localStorage.base_api + 'po', this.po, {
						headers: {
							'Authorization': 'bearer ' + localStorage.token
						},
						redirect:'follow'
					})
					.then(res => {
						// Notif
						this.po.notif_date =  new Date( PODate.setDate(PODate.getDate() - 2) )

						this.label = 'Tambah Purchase Order'
						this.$swal('Purchase Order berhasil ditambah', 'Mohon tunggu sebentar...', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push('/po')
						}, 1500)
					})
					.catch(e => {
						this.label = 'Tambah Purchase Order'
						if(e.response.status == 401) {
		                  this.$store.dispatch('logout')
		                  .then(() => {
		                    let path = window.location.href
		                    path = path.split('/')
		                    localStorage.setItem('prevPath', path[path.length - 1])
		                    this.$swal('Sesi login kamu sudah habis', 'login kagi yah...', 'warning')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    	this.$router.replace({path: '/login'})
		                    }, 1500)
		                    
		                  })
		                  .catch(e => {
		                    this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'error')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
		                    return false
		                  })
		                }
		                else if(e.response.status == 500) {
							this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'error')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
						}
						console.log(e.response)
						return false
					})
				}
				else {
					window.scrollBy({ 
					  top: -500, // could be negative value
					  left: 0, 
					  behavior: 'smooth' 
					})
					return false
				}

			},
			getRequest(url, fallback) {
		        this.$http.get(url, {
		          headers: {
		              'Authorization': 'bearer ' + localStorage.getItem('token')
		            },
		            redirect:'follow'
		          })
		          .then(response => {
		            fallback(response.data)
		          })
		          .catch(e => {
		            this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'error')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
		            console.error(e)
		            return false
		          })
		      },
			fetchAll() {
		        let self = this
		        this.getRequest(localStorage.base_api + 'sales', function(data){
		        	self.sales.push({value: '000', label:'Pilih Sales'})
		          for(let i = 0;i < data.length;i++) {
		            let obj = {}
		            obj.value = data[i].id
		            obj.label = data[i].nama_karyawan
		            self.sales.push(obj)
		          }
		        })
		        this.getRequest(localStorage.base_api + 'kurir', function(data){
		        	self.kurir.push({value: '000', label:'Pilih Kurir'})
		          for(let i = 0;i < data.length;i++) {
		            let obj = {}
		            obj.value = data[i].id
		            obj.label = data[i].nama_karyawan
		            self.kurir.push(obj)
		          }
		        })
		        this.getRequest(localStorage.base_api + 'konsumen', function(data){
		        	self.konsumen.push({value: '000', label:'Pilih Konsumen'})
		        	self.konsumenDetail = data
		          for(let i = 0;i < data.length;i++) {
		            let obj = {}
		            obj.value = data[i].id
		            obj.label = data[i].nama + ' - ' + self.extractString( data[i].alamat, self.getStringLength(data[i].alamat) )
		            self.konsumen.push(obj)
		          }
		        })
	      	}
		},
		created() {
			if(localStorage.level == 5 || localStorage.level == 4) {
				this.$router.push('/')
			}
			this.fetchAll()
		}
	}

</script>
<style type="text/css">
	#search-konsumen-table label {
		display: none;
	}
</style>