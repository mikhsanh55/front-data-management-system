<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Tambah</b> Stock In Out
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol md="8" sm="12">

							<CSelect
				                label="Barang"
				                horizontal
				                :options="barang"
				                @update:value="assignBarang"
				                v-model="stockinout.id_barang"
				              />  
				            <CInput
		                        type="text"
		                        :description="validator.qty_msg"
		                        :is-valid="validator.qty"
		                        @input="stockinout.qty.length < 1 ? validator.qty = false : validator.qty = true"
		                        autocomplete="qty"
		                        label="Quantity Barang"
		                        horizontal
		                        placeholder="Masukan qty Barang"
		                        v-model="stockinout.qty"
		                      />
		                    <CSelect
		                    	label="Type"
				                horizontal
				                :options="type"
				                @update:value="assignType"
				                v-model="stockinout.type"
				              />    
		                    <CInput
		                        type="date"
		                        :description="validator.tanggal_msg"
		                        :is-valid="validator.tanggal"
		                        @input="stockinout.tanggal.length < 1 ? validator.tanggal = false : validator.tanggal = true"
		                        autocomplete="tanggal"
		                        label="Tanggal Stock In Out"
		                        horizontal
		                        placeholder="Masukan tanggal Stock In Out"
		                        v-model="stockinout.tanggal"
		                      />  
		                    <CTextarea
		                        label="Masukan Alasan"
		                        :description="validator.alasan_msg"
			                    :is-valid="validator.alasan"
			                    @input="stockinout.alasan.length < 1 ? validator.alasan = false : validator.alasan = true"
		                        horizontal
		                        rows="3"
		                        v-model="stockinout.alasan"
		                      />    

						</CCol>
						<CCol md="2" sm="12">
            				<div>
            					<button class="btn btn-success" @click.prevent="openBarangModal = true"><i class="fa fa-search mr-1"></i>Cari Barang</button>
            				</div>
            			</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="primary" @click.prevent="addStockInOut">
					<i class="fa fa-plus mr-1"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
		<CModal
	      :show.sync="openBarangModal"
	      :no-close-on-backdrop="true"
	      title="Cari Barang"
	      size="lg"
	      color="dark"
	    >	
	      <CInput
		    type="text"
            description="Ketik minimal 3 huruf untuk melihat hasil"
            label="Cari Barang"
            horizontal
            placeholder="Masukan disc"
            v-model="barangKeyword"
            class="m-4"
	       />	
	       <v-client-table
			:data="searchBarang"
			:columns="searchBarangFields"
			:options="searchBarangOptions"
			id="search-barang-table"
			 class="m-4"
			>
				<div slot="aksi" slot-scope="props">
					<button class="btn btn-primary" @click="assignBarang(props.row.id)">Pilih</button>
				</div>
			</v-client-table>
	      <template #header>
	        <h6 class="modal-title">Cari Barang</h6>
	        <CButtonClose @click="openBarangModal = false" class="text-white"/>
	      </template>
	    </CModal>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:'AddStockInOut',
		data() {
			return {
				barangDetail: [],
				barangKeyword:null,
				openBarangModal:false, // For Modal Barang
				searchBarangFields: ['kode_barang', 'nama_barang', 'stock', 'satuan', 'aksi'],
				searchBarangOptions: {
					headings: {
						kode_barang: 'Kode',
						nama_barang: 'Nama',
						stock: 'Stok',
						satuan: 'Satuan',
						aksi: 'Aksi'
					},
					sortable: ['kode_barang', 'nama_barang', 'stock', 'satuan'],
					filterable: ['kode_barang', 'nama_barang', 'stock', 'satuan'],
					columnsClasses: {
						kode_barang:'align-middle',
						nama_barang:'align-middle',
						stock:'text-center align-middle',
						satuan:'text-center align-middle',
						aksi:'text-center align-middle',
					}
				},
				searchBarang: [],
				barang: [],
				validator: {
					qty:null,
					qty_msg:null,
					tanggal:null,
					tanggal_msg:null,
				},
				stockinout: {
					id_barang:null,
					nama_barang:null,
					type:null,
					qty:0,
					tanggal:null,
					alasan:null
				},
				type: [
					{
						value: '000',
						label: 'Pilih Type'
					},
					{
						value:1,
						label:'In'
					},
					{
						value:2,
						label:'Out'	
					}
				],
				errors: [],
				label: 'Tambah Stock In Out'
			}
		},
		watch: {
			barangKeyword: function(val) {
				if(val.length >= 3)
					if(val != null || val != '') {
						let s = this.barangDetail.filter(item => item.nama_barang.toLowerCase().indexOf(val) > -1)
						if(s.length > 0) {
							this.searchBarang = s
						}
						else {
							this.searchBarang = []
						}
					}
			}
		},
		methods: {
			assignType(val) {
				this.stockinout.type = val
			},
			getBarang() {
				this.barang.push({value:'000', label: 'Pilih Barang'})

				getDatas(this, localStorage.base_api + 'barang', {
					method: 'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					}
				})
				.then(res => {
					this.barangDetail = res
					for(let i = 0;i < res.length;i++) {
						let obj = {}
						obj.value = res[i].id
						obj.label = res[i].nama_vendor + ' - ' + res[i].nama_barang
						this.barang.push(obj)
					}
					
				})
				.catch(e => {
					if(e.response.status == 401) {
	                  this.$store.dispatch('logout')
	                  .then(() => {
	                    let path = window.location.href
	                    path = path.split('/')
	                    localStorage.setItem('prevPath', path[path.length - 1])
	                    alert('Session Login kamu sudah habis! silahkan login kembali')
	                    
	                  })
	                  .then(() => {
	                    this.$router.replace({path: '/login'})
	                  })
	                  .catch(e => {
	                    alert('An error occured when get data :(')
	                    return false
	                  })
	                }
	                else if (e.response.status === 500) {
						this.smallModal = false
						alert('Something wrong with the server')
						return false
					}
				})
			},
	         assignBarang(val) {
	         	if(this.openBarangModal == true)
	         		this.openBarangModal = false
	         	this.stockinout.id_barang = val
	         	this.barang.forEach(function(b) {
	         		if(b.id == val)
	         			this.stockinout.nama_barang = b.nama_barang
	         			return
	         	})
	         },
	         addStockInOut() {
	         	this.errors = []

				if(!this.stockinout.qty) {
	         		this.validator.qty = false
		            this.validator.qty_msg = 'Harap isi quantiy barang'
		            this.errors.push('qty karyawan kosong')
	         	}
	         	if(!this.stockinout.tanggal) {
	         		this.validator.tanggal = false
		            this.validator.tanggal_msg = 'Harap isi tanggal stock in out'
		            this.errors.push('tanggal stock in out kosong')
	         	}

	         	if(!this.stockinout.type || this.stockinout.id_barang == '000') {
					this.errors.push('Harap pilih barang')
					this.$swal('Harap pilih barang', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}

				if(!this.stockinout.type || this.stockinout.type == '000') {
					this.errors.push('Harap pilih type')
					this.$swal('Harap pilih type', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}

	         	if(!this.errors.length) {
	         		this.label = 'Loading...'
	         		this.$http.post(localStorage.base_api + 'stock', this.stockinout, {
	         			headers: {
	         				'Authorization':'bearer ' + localStorage.token
	         			},
	         			redirect:'follow'
	         		})
	         		.then(res => {
	         			this.label = 'Tambah Stock In Out'
	         			this.$swal(res.data.message, 'Mohon tunggu sebentar...', 'success')
	                    setTimeout(() => {
	                      this.$swal.close()
	                      this.$router.push({path: '/stock-in-out'})
	                    }, 2000)
	         		})
	         		.catch(e => {
	         			
	         			if(e.response.status == 401) {
	         				this.$store.dispatch('logout')
			                  .then(() => {
			                    let path = window.location.href
			                    path = path.split('/')
			                    localStorage.setItem('prevPath', path[path.length - 1])
			                    this.$swal('Sesi login kamu udah habis', 'login lagi yah', 'warning')
			                    setTimeout(() => {
			                      this.$swal.close()
			                      this.$router.replace({path: '/login'})
			                    }, 2000)
			                    
			                  })
			                  .catch(e => {
			                    
			                    this.$swal('Tidak bisa menambah data', 'hubungi pengembanya', 'error')
			                    setTimeout(() => {
			                      this.$swal.close()
			                    }, 2000)
			                    return false
			                  })
	         			}
	         			else {
	         				this.label = 'Tambah Barang'
	         				if(e.response) 
	         					console.error(e.response.data.message)	
		         				this.$swal(e.response.data.message, 'hubungi pengembanya', 'error')
			                    setTimeout(() => {
			                      this.$swal.close()
			                    }, 2000)
			                    this.stockinout = {
									id_barang:null,
									nama_barang:null,
									type:null,
									qty:0,
									tanggal:null,
									alasan:null
								}
	         				return false
	         			}
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
	         }
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 4 ) {
				this.$router.push('/')
			}
			this.getBarang()
		}
	}
</script>