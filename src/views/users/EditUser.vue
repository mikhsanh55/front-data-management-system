<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Edit</b> User</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Update Data User berhasil!</small>
		                      </p>    

		                    <CSelect
		                        description="Masukan Nama Karyawan"
		                        label="Nama Karyawan"
		                        horizontal
		                        v-model="user.id"
		                        :options="karyawan"
		                        @update:value="assignKaryawan"
		                      />
				            <CInput
		                        type="email"
		                        :description="validator.email_msg"
		                        :is-valid="validator.email"
		                        @input="karyawan.email.length < 1 ? validator.email = false : validator.email = true"
		                        autocomplete="email"
		                        label="Email"
		                        horizontal
		                        placeholder="Masukan Email"
		                        v-model="user.email"
		                        readonly
		                      />  
		                      <CSelect
		                      label="Jabatan"
		                      horizontal
		                      v-model="user.id_level"
		                      :options="jabatan"
		                      @update:value="assignJabatan"  
		                      />
	                        
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="light" @click.prevent="updateUser">
					<i class="fa fa-edit mr-1"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"EditUser",
		data() {
			return {
				label: 'Simpan Perubahan',
				validator: {
					email:null,
					email_msg:null
				},
				user: {
					id:1,
					id_karyawan:1,
					nama:null,
					email:null,
					username:null,
					id_level:6
				},
				jabatan: [],
				karyawan: [],
				data_karyawan:[],
				validMsg:false,
				errors:[],
			}
		},
		methods: {
			getJabatan() {
				getDatas(this, localStorage.base_api + 'jabatan', {
	      			headers: {
	      				'Authorization': 'bearer ' + localStorage.token
	      			}
	      		})
	      		.then(res => {
	      			// console.log(res.data)
	      			for(let i = 0;i < res.length;i++) {
	      				let obj = {}
	      				obj.value = res[i].id
	      				obj.label = res[i].nama
	      				this.jabatan.push(obj)
	      			}
	      			console.log(this.jabatan)
	      		})
	      		.then(() => {
	      			this.getData()
	      		})
	      		.catch(e => {
	      			this.label = 'Tambah Karyawan'
					console.error(e)
	      			return false
	      		})
			},
			getKaryawan() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				let options = {
					method:'GET',
					headers,
					redirect:'follow'
				}
				getDatas(this, localStorage.base_api + 'karyawan', options)
				.then(res => {
					this.data_karyawan = res
					for(let i = 0;i < res.length;i++) {
	      				let obj = {}
	      				obj.value = res[i].id
	      				obj.label = res[i].nama_karyawan
	      				this.karyawan.push(obj)
	      			}
				})
				.then(() => {
					this.getJabatan()
				})
				.catch(e => {
					this.label = 'Tambah Karyawan'
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
	                    	this.$router.replace({path: '/login'})
	                    }, 1500)
	                    return false
	                  })
	                }
	                else if(e.response.status == 500) {
						this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.replace({path: '/login'})
	                    }, 1500)
	                    return false
					}
	      			return false
				})
			},
			assignKaryawan(val) {
				this.user.nama = val
				this.data_karyawan.forEach((item, i) => {
					if(val == item.id) {
						this.user.email = item.email
						this.user.level = item.id_jabatan
						return
					}
				})
			},
			assignJabatan(val) {
				this.user.id_level = val
			},
			getData() {

				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method: 'POST',
					headers,
					redirect:'follow'
				}
				getDatas(this, localStorage.base_api + 'user/' + this.$route.params.id, options)
				.then(res => {
					console.warn(res)
					this.user = res
				})	
				.catch(e => {
					this.label = 'Simpan Perubahan'
					return false
				})
			},
			updateUser() {
				this.errors = []
				if(!this.user.email) {
					this.validator.email = false
		            this.validator.email_msg = 'Harap isi email karyawan'
		            this.errors.push('email karyawan kosong')
				}

				if(!this.errors.length) {
					this.label = 'Loading...'
					let formData = new FormData()
				formData.append('id_karyawan', this.user.id)
				formData.append('email', this.user.email)
				formData.append('level', this.user.id_level)
				
					this.$http.post(localStorage.base_api + 'user/edit/' + this.user.id, formData, {
						headers:{
							'Authorization': 'bearer ' + localStorage.getItem('token')
						}
					})
					.then(res => {
						this.label = 'Simpan Perubahan'
						this.$swal('Update data user berhasil', 'Mohon tunggu sebentar...', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push('/user')	
						}, 1500)
						
					})
					.catch(e => {
						this.label = 'Simpan Perubahan'
						
						console.log(e)
						for(let item in e.response.data.errmsg) {
							console.log(e.response.data.errmsg[item][0])
							this.$swal(e.response.data.errmsg[item][0], 'hubungi pengembangnya yah', 'error')
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
			if(localStorage.level != 1 && localStorage.level != 2) {
				this.$router.push('/')
			}
			this.getKaryawan()	
		}
	}
</script>