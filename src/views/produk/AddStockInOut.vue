<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Tambah</b> Stock In Out
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">

							<CSelect
								placeholder="Pilih Barang"
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
		                    	placeholder="Pilih Type"
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
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="light" @click.prevent="addStockInOut">
					<i class="fa fa-plus mr-1"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'AddStockInOut',
		data() {
			return {
				barangselected:1,
				barang: [
				],
				validator: {
					qty:null,
					qty_msg:null,
					tanggal:null,
					tanggal_msg:null,
				},
				stockinout: {
					id_barang:1,
					nama_barang:null,
					type:1,
					qty:0,
					tanggal:null,
					alasan:null
				},
				type: [
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
		methods: {
			assignType(val) {
				this.stockinout.type = val
			},
			getBarang() {
				this.$http.get(localStorage.base_api + 'barang', {
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					}
				})
				.then(res => {
					for(let i = 0;i < res.data.length;i++) {
						let obj = {}
						obj.value = res.data[i].id
						obj.label = res.data[i].nama_barang
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
	         			console.log(res)
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
			                    
			                    this.$swal('Tidak bisa menambah data', 'hubungi pengembanya', 'danger')
			                    setTimeout(() => {
			                      this.$swal.close()
			                    }, 2000)
			                    return false
			                  })
	         			}
	         			else {
	         				this.label = 'Tambah Barang'
	         				console.error(e)	
	         				this.$swal('Tidak bisa menambah data', 'hubungi pengembanya', 'danger')
		                    setTimeout(() => {
		                      this.$swal.close()
		                    }, 2000)
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