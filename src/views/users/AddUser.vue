<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Tambah</b> User</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Penambahan User berhasil!</small>
		                      </p>    

		                    <CSelect
		                    	label="Nama Karyawan"
		                    	horizontal
		                    	:options="karyawan"
		                        description="Masukan Nama Karyawan"
		                        autocomplete="nama_karyawan"
		                        v-model="user.id_karyawan"
		                        @update:value="assignKaryawan"
		                      />
		                    <CInput
		                        type="email"
		                        :description="validator.email_msg"
		                        :is-valid="validator.email"
		                        @input="user.email.length < 1 ? validator.email = false : validator.email = true"
		                        autocomplete="email"
		                        label="Email"
		                        horizontal
		                        placeholder="Masukan Email"
		                        v-model="user.email"
		                        readonly
		                      />  
		                      <CInput
		                        type="password"
		                        :description="validator.password_msg"
		                        :is-valid="validator.password"
		                        @input="user.password.length < 1 ? validator.password = false : validator.password = true"
		                        autocomplete="password"
		                        label="Password"
		                        horizontal
		                        placeholder="Masukan Password"
		                        v-model="user.password"
		                      /> 
		                      <CSelect
		                      label="Jabatan"
		                      horizontal
		                      :options="jabatan"
		                      @update:value="assignJabatan"
		                      v-model="user.level"
		                      readonly
		                      />
	                        
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="light" @click.prevent="addUser">
					<i class="fa fa-plus mr-1"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"AddUser",
		data() {
			return {
				label: 'Tambah User',
				validator: {
					email:null,
					email_msg:null,
					password:null,
					password_msg:null
				},
				user: {
					id_karyawan:null,
					email: null,
					password:null,
					level:null
				},
				karyawan: [],
				data_karyawan:[],
				jabatan: [],
				validMsg:false,
				errors:[]
			}
		},
		methods: {
			getJabatan() {
				this.jabatan.push({value:'000', label: 'Pilih Jabatan'})
				this.$http.get(localStorage.base_api + 'jabatan', {
	      			headers: {
	      				'Authorization': 'bearer ' + localStorage.token
	      			}
	      		})
	      		.then(res => {
	      			// console.log(res.data)
	      			for(let i = 0;i < res.data.length;i++) {
	      				let obj = {}
	      				obj.value = res.data[i].id
	      				obj.label = res.data[i].nama
	      				this.jabatan.push(obj)
	      			}
	      			console.log(this.jabatan)
	      		})
	      		.catch(e => {
	      			alert('Maaf lagi ada error sedikit :D')
	      			console.error(e.response)
	      			return false
	      		})
			},
			getKaryawan() {
				this.karyawan.push({value: '000', label: 'Pilih Karyawan'})
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				let options = {
					method:'GET',
					headers,
					redirect:'follow'
				}
				fetch(localStorage.base_api + 'karyawan', options)
				.then(res => res.json())
				
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
					alert('Maaf lagi ada error sedikit :D')
	      			console.error(e)
	      			return false
				})
			},
			assignKaryawan(val) {
				this.user.id_karyawan = val
				this.data_karyawan.forEach((item, i) => {
					if(val == item.id) {
						this.user.email = item.email
						fetch(localStorage.base_api + 'karyawan/' + val, {
							method:'POST',
							headers: {
								'Authorization': 'bearer ' + localStorage.token
							}
						})
						.then(res => res.json())
						.then(res => {
							console.warn(res)
							this.user.level = res.id_jabatan
						})
					}

				})
				console.log(val)
			},
			assignJabatan(val) {
				this.user.level = val
			},
			addUser() {
				this.errors = []
				if(!this.user.email) {
					this.validator.email = false
		            this.validator.email_msg = 'Harap isi email karyawan'
		            this.errors.push('email karyawan kosong')
				}
				if(!this.user.password) {
					this.validator.password = false
		            this.validator.password_msg = 'Harap isi password karyawan'
		            this.errors.push('password karyawan kosong')
				}

				if(!this.user.id_jabatan || this.user.id_jabatan == '000') {
					this.errors.push('Harap pilih jabatan')
					this.$swal('Harap pilih jabatan', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}


				if(!this.user.id_karyawan || this.user.id_karyawan == '000') {
					this.errors.push('Harap pilih karyawan')
					this.$swal('Harap pilih karyawan', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}

				if(!this.errors.length) {
					console.log(this.user)
					this.label = 'Loading...'
					this.$http.post(localStorage.base_api + 'user', this.user, {
						headers: {
							'Authorization': 'bearer ' + localStorage.getItem('token')
						},
						redirect:'follow'
					})
					.then(res => {
						this.label = 'Tambah User'
						alert(res.data.message)
						this.$swal(res.data.message, 'Mohon tunggu sebentar...', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push('/user')	
						}, 1500)
						
					})
					.catch(e => {
						console.warn(e.response)
						if(e.response.status == 401) {
		                  this.$store.dispatch('logout')
		                  .then(() => {
		                    let path = window.location.href
		                    path = path.split('/')
		                    localStorage.setItem('prevPath', path[path.length - 1])
		                    this.$swal('Sesi Login kamu udah habis', 'login lagi yah', 'warning')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    	this.$router.replace({path: '/login'})
		                    }, 1500)
		                    return false
		                  })
		                  .catch(e => {
		                  	console.log(e)
		                    this.$swal('Tidak bisa menambah data', 'hubungi pengembangnya yah', 'error')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
		                    return false
		                  })
		                }
						else {
							this.label = 'Tambah User'
							for(let item in e.response.data.errmsg) {
								console.log(e.response.data.errmsg[item][0])
								this.$swal(e.response.data.errmsg[item][0], 'hubungi pengembangnya yah', 'error')
			                    setTimeout(() => {
			                    	this.$swal.close()
			                    }, 1500)	
							}
		                    return false
						}
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