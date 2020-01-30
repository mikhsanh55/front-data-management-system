<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Edit</b> Vendor</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Penambahan Vendor berhasil!</small>
		                      </p>    
		                      <div v-if="errors.length > 0">
		                        <p v-for="error in errors" class="alert alert-danger">
		                          <small>{{error}}</small>
		                        </p>
		                      </div>  
		                    <input type="hidden" name="id" v-model="vendor.id" ref="id">  
		                    <CInput
		                        type="text"
		                        description="Masukan Nama vendor"
		                        autocomplete="nama_vendor"
		                        label="Nama vendor"
		                        horizontal
		                        placeholder="Masukan Nama vendor"
		                        v-model="vendor.nama"
		                      />
		                    <CInput
		                        type="text"
		                        description="Masukan Nomer Rekening"
		                        autocomplete="no_rekening"
		                        label="Nomer Rekening"
		                        horizontal
		                        placeholder="Masukan Nomer Rekening"
		                        v-model="vendor.no_rekening"
		                      />
		                    <CInputFile
				              	class="mt-4 mb-4"
				                label="Foto Vendor"
				                horizontal
				                id="file"
				                ref="file"
				              />
				            <CInput
		                        type="text"
		                        description="Masukan Email"
		                        autocomplete="email"
		                        label="Email"
		                        horizontal
		                        placeholder="Masukan Email"
		                        v-model="vendor.email"
		                      />  
		                      <CInput
		                        type="text"
		                        description="Masukan Whatsapp"
		                        autocomplete="wa_hp"
		                        label="Whatsapp"
		                        horizontal
		                        placeholder="Masukan Whatsapp"
		                        v-model="vendor.wa_hp"
		                      />
		                      <CInput
		                        type="text"
		                        description="Masukan Perusahaan"
		                        autocomplete="nama_instansi"
		                        label="Perusahaan"
		                        horizontal
		                        placeholder="Masukan Perusahaan"
		                        v-model="vendor.nama_instansi"
		                      />
		                      <CInput
		                        type="text"
		                        description="Masukan Karakteristik Perusahaan"
		                        autocomplete="karakteristik_perusahaan"
		                        label="Karakteristik Perusahaan"
		                        horizontal
		                        placeholder="Masukan Karakteristik Perusahaan"
		                        v-model="vendor.karakteristik_perusahaan"
		                      />
		                    <CTextarea
		                        label="Masukan Alamat Vendor"
		                        placeholder="Masukan Alamat Vendor"
		                        horizontal
		                        rows="3"
		                        v-model="vendor.alamat"
		                      />  
		                    <div>
		                    	<img :src="'https://young-temple-67589.herokuapp.com/' + vendor.foto" width="80" height="80">
		                    </div>  
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="light" @click.prevent="updateVendor">
					<i class="fa fa-edit mr-2"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"addVendor",
		data() {
			return {
				label: 'Simpan Perubahan',
				vendor: {
					nama:null,
					foto:null,
					email:null,
					wa_hp:null,
					alamat:null,
					no_rekening:null,
					nama_instansi:null,
					karakteristik_perusahaan:null		
				},
				validMsg:false,
				errors:[]
			}
		},
		methods: {
			checkImage(src) {
				let image = new Image()
				image.onload = () => {
					console.log('ada')
					this.image = 1
					return true
				}
				image.onerror = () => {
					console.log('tidak ada')
				 return false}
				image.src = src
			},
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				let options = {
					method:'POST',
					headers,
					redirect:'follow'
				}
				fetch('https://young-temple-67589.herokuapp.com/api/vendor/' + this.$route.params.id, options)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.vendor = res
				})
				.catch(e => {

					this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
                    setTimeout(() => {
                    	this.$swal.close()
                    }, 1500)
					return false
				})
				// this.$http.post('https://young-temple-67589.herokuapp.com/api/vendor/' + this.$route.params.id, {
				// 	headers: {
				// 		'Authorization': 'bearer ' + localStorage.getItem('token')
				// 	},
				// 	redirect:'follow'
				// })
				// .then(res => {
				// 	this.vendor = res.data
				// 	console.log(res)
				// })
				// .catch(e => {
				// 	// alert(e.response.data.message)
				// 	console.log(e.response)
				// 	return false
				// })
			},
			updateVendor() {
				this.errors = []
				if(!this.vendor.nama) {
					this.errors.push('Nama vendor Wajib diisi')
				}
				if(!this.vendor.email) {
					this.errors.push('Email Wajib diisi')
				}
				if(!this.vendor.wa_hp) {
					this.errors.push('Whatsapp Wajib diisi')
				}
				if(!this.vendor.alamat) {
					this.errors.push('Alamat Wajib diisi')
				} 	
				if(!this.vendor.no_rekening) {
					this.errors.push('Nomer rekening Wajib diisi')
				}
				if(!this.vendor.nama_instansi) {
					this.errors.push('Data Perusahaan wajib diisi')
				}
				if(!this.vendor.karakteristik_perusahaan) {
					this.errors.push('Data Karakteristik Perusahaan wajib diisi')
				}

				if(!this.errors.length) {
					this.label = 'Loading...'
					this.$http.post('https://young-temple-67589.herokuapp.com/api/vendor/edit/'+ this.$route.params.id, this.vendor, {
						headers: {
							'Authorization':'bearer ' + localStorage.getItem('token')
						},
						redirect:'follow'
					})
					.then(res => {
						this.label = 'Simpan Perubahan'
						this.$swal('Data vendor berhasil diperbaharui', 'Mohon tunggu sebentar...', 'success')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.push('/vendor')
	                    }, 1500)
						
					})
					.catch(e => {
						this.label = 'Simpan Perubahan'
						console.log(e.response)
						if(e.response.status == 401) {
							this.$swal('Sesi login kamu sudah habis', 'login lagi yah...', 'warning')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    	this.$router.replace({path: '/login'})
		                    }, 1500)
						}
						else if(e.response.status == 500) {
							this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
						}
						return false
					})
				}
			}
		},
		created() {
			this.getData()
		}
	}
</script>