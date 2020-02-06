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
						                label="Sales"
						                horizontal
						                v-model="po.id_sales"
						                :options="sales"
						                @update:value="assignSales"
						              />  
						              <CSelect
						                label="Konsumen"
						                horizontal
						                v-model="po.id_konsumen"
						                :options="konsumen"
						                @update:value="assignKonsumen"
						              />  
						              <CSelect
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
						                label="Tax Rate"
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
							</CRow>
						</CForm>
					</CCardBody>

		          <CCardFooter class="d-flex justify-content-center mt-4">
		            <CButton type="submit" @click.prevent="addPO" color="light" class="mr-2">
		            	<i class="fa fa-plus mr-1"></i>{{label}}
		            </CButton>
		          </CCardFooter>
		        </CCard>
			</CCol>
		</CRow>
	</div>
</template>
<script type="text/javascript">
	import Notif from '@/containers/notif.js'
	export default {
		name: 'AddPO',
		data() {
			return {
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
					id_sales:1,
					id_konsumen:1,
					id_kurir:1,
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
		methods: {
			assignKurir(val) {
				this.po.id_kurir = val
			},
			assignStatus(val) {
				this.po.status = val
			},
			assignKonsumen(val) {
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

				if(!this.errors.length) {
					this.notif = new Notif()
					let PODate = new Date(this.po.date)
					this.notif.add(this.po)

					this.label = 'Loading...'
					postData(this, 'https://young-temple-67589.herokuapp.com/api/po', this.po, {
						method: 'post',
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
		                    this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
		                    return false
		                  })
		                }
		                else if(e.response.status == 500) {
							this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
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
		            this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
		            console.log(e)
		            return false
		          })
		      },
			fetchAll() {
		        let self = this
		        this.getRequest('https://young-temple-67589.herokuapp.com/api/sales', function(data){
		          for(let i = 0;i < data.length;i++) {
		            let obj = {}
		            obj.value = data[i].id
		            obj.label = data[i].nama_karyawan
		            self.sales.push(obj)
		          }
		        })
		        this.getRequest('https://young-temple-67589.herokuapp.com/api/kurir', function(data){
		          for(let i = 0;i < data.length;i++) {
		            let obj = {}
		            obj.value = data[i].id
		            obj.label = data[i].nama_karyawan
		            self.kurir.push(obj)
		          }
		        })
		        this.getRequest('https://young-temple-67589.herokuapp.com/api/konsumen', function(data){
		          for(let i = 0;i < data.length;i++) {
		            let obj = {}
		            obj.value = data[i].id
		            obj.label = data[i].nama
		            self.konsumen.push(obj)
		          }
		        })
	      	}
		},
		created() {
			this.fetchAll()
		}
	}

</script>