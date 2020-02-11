<template>
	<div>
		<CCard>
			<CCardHeader>
				<CRow>
					<CCol sm="12">
						Profile
					</CCol>
				</CRow>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">

						<table class="table table-borderless">
							<tr>
								<td>Foto Profile</td>
								<td><img :src="uri + user.foto" width="100" height="100" /></td>
							</tr>
							<tr>
								<td>Nama</td>
								<td> {{user.nama_karyawan}} </td>
							</tr>
							<tr>
								<td>No Pegawai</td>
								<td> {{user.no_karyawan}} </td>
							</tr>
							<tr>
								<td>Email</td>
								<td> {{user.email}} </td>
							</tr>
							<tr>
								<td>Password</td>
								<td><input type="password" name="password1" class="form-control" v-model="password"></td>
							</tr>
							<tr>
								<td>Confirm Password</td>
								<td><input type="password" name="password2" class="form-control" v-model="confirmPassword" ></td>
							</tr>
							<tr>
								<td>Alamat</td>
								<td> {{user.alamat}} </td>
							</tr>
						</table>
						<div class="text-center mx-auto">
							<button @click="changePassword" class="btn btn-success"> {{label}} </button>
						</div>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script >
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"Profile",
		data() {
			return {
				label: 'Ubah Password',
				user:'',
				password:null,
				confirmPassword:null,
				uri:localStorage.base_uri
			}
		},
		methods: {
			getData(id) {
				// this.$http.post(localStorage.base_api + 'karyawan/' + id, {
				// 	headers: {
				// 		'Authorization':'bearer ' + localStorage.getItem('token')
				// 	},
				// 	redirect:'follow'
				// })
				getDatas(this, localStorage.base_api + 'karyawan/' + id, {method:'post', headers:{'Authorization':'bearer ' + localStorage.token}}, 'post')
				.then(res => {
					console.log(res)
				})
				.catch(e => {
					console.error(e.response)
					return false
				})

			},
			changePassword() {
				let user = JSON.parse(localStorage.user)
				if(this.password != this.confirmPassword ) {
					this.$swal('Password tidak sama', '', 'error')
					setTimeout(() => this.$swal.close(), 1500)
					return false
				}
				else if(!this.password || !this.confirmPassword) {
					this.$swal('Password harus diisi', '', 'error')
					setTimeout(() => this.$swal.close(), 1500)
					return false
				}
				else {
					this.label = 'Loading...'
					this.$http.post(localStorage.base_api + 'user/password/edit/' + user.id, {new_password:this.password, new_password_confirmation:this.confirmPassword}, {
						headers: {
							'Authorization': 'bearer ' + localStorage.token
						}
					})
					.then(res => {
						console.log(res)
						this.$swal('Password sudah dirubah!', 'Mohon tunggu...', 'success')
						setTimeout(() => this.$swal.close(), 1500)
					})
					.catch(e => {
						this.$swal('Password gagal dirubah!', 'Mohon tunggu...', 'error')
						setTimeout(() => this.$swal.close(), 1500)
						return false
					})
				}
			}
		},
		created() {
			if(localStorage.getItem('token') == undefined || localStorage.getItem('token') == null) {
				this.$router.replace('/login')
			}
			let user = JSON.parse(localStorage.user)
			getDatas(this, localStorage.base_api + 'karyawan/' + user.id_karyawan, {
				method:'post',
				headers: {
					'Authorization' : 'bearer ' + localStorage.token
				}
			})	
			.then(res => {
				this.user = res
			})
			.catch(e => {
				console.error(e)
				return false
			})
		}
	}
</script>