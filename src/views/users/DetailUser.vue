<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> User
			</CCardHeader>
			<CCardBody>
				<CRow class="max-auto d-flex justify-content-center mb-4 mt-4">
					<CCol sm="12">
							<div v-if="user.foto" class="mx-auto d-flex justify-content-center">
								<img :src="user.foto" style="border-radius:50%;width:70px;height: 70px;" />
							</div>
					</CCol>
				</CRow>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol sm="8" class="">
						<table class="table table-bordered mt-4">
							<tr>
								<th class="w-50">Nama</th>
								<td>{{user.nama}}</td>
							</tr>
							<tr>
								<th class="w-50">Email</th>
								<td>{{user.email}}</td>
							</tr>
							<tr>
								<th class="w-50">Level</th>
								<td> {{user.nama_level}} </td>
							</tr>
						</table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name: 'DetailUser',
		data() {
			return {
				user: {
					id:0,
					nama:null,
					email:null,
					nama_level:null,
					foto:null
				}
			}
		},
		methods: {
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method:'POST',
					headers,
					redirect:'follow'
				}
				getDatas(this, localStorage.base_api + 'user/' + this.$route.params.id, options)
				.then(res => {
					this.user = res
					this.user.foto = localStorage.base_uri + res.foto
				})
				.catch(e => {
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
	                else {
	                  this.label = 'Update Barang'
	                  this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.replace({path: '/login'})
	                    }, 1500)
	                    return false
	                }
				})
			},
			checkImage(src) {
				let image = new Image()
				image.onload = () => {
					this.image = 1
					return true
				}
				image.onerror = () => {
				 return false}
				image.src = src
			}
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2) {
				this.$router.push('/')
			}
			this.getData()
		}
	}
</script>