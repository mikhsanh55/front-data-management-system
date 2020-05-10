<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> Vendor
			</CCardHeader>
			<CCardBody>
				<CRow class="max-auto d-flex justify-content-center mb-4 mt-4">
					<CCol sm="12">
						<div class="mx-auto d-flex justify-content-center">
							<img :src="uri + vendor.foto" style="border-radius:50%;width:70px;height: 70px;" />
						</div>
					</CCol>
				</CRow>
				<CRow class="mx-auto d-flex justify-content-center mt-4">
					<CCol sm="12" md="8">
						<table class="table table-bordered">
							<tr>
								<th>Nama</th>
								<td>{{vendor.nama}}</td>
							</tr>
							<tr>
								<th>No Rekening</th>
								<td>{{vendor.no_rekening}}</td>
							</tr>	

							<tr>
								<th>Email</th>
								<td>{{vendor.email}}</td>
							</tr>	
							<tr>
								<th>NO HP/WA</th>
								<td>{{vendor.wa_hp}}</td>
							</tr>	
							<tr>
								<th>Perusahaan</th>
								<td>{{vendor.nama_instansi}}</td>
							</tr>	
							<tr>
								<th>Karakteristik Perusahaan</th>
								<td>{{vendor.karakteristik_perusahaan}}</td>
							</tr>	
							<tr>
								<th>Alamat</th>
								<td>{{vendor.alamat}}</td>
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
		name: 'DetailVendor',
		data() {
			return {
				uri:localStorage.base_uri,
				vendor: {
					id:0,
					nama:null,
					no_rekening:null,
					wa_hp:null,
					nama_instansi:null,
					karakteristik_perusahaan:null,
					alamat:null,
					email:null,
					foto:null
				},
				data:JSON.parse(localStorage.user),
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
				getDatas(this, localStorage.base_api + 'vendors/' + this.$route.params.id, options)
				.then(res => {
					if(this.checkImage(localStorage.base_uri + this.vendor.foto) == true) {
						this.image = 1
					}
					else {
						this.image = 0
					}
					this.vendor = res
				})
				.catch(e => {
					if(e.response.status == 401) {
	                  this.$store.dispatch('logout')
	                  .then(() => {
	                    let path = window.location.href
	                    path = path.split('/')
	                    localStorage.setItem('prevPath', path[path.length - 1])
	                    this.$swal('Sesi login kamu sudah habis', 'login lagi yah...', 'warning')
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
	                else {
	                  this.label = 'Update Barang'
	                  console.log(e)
	                  this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
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
			if(this.data.level == 3 || this.data.level == 4 || this.data.level == 6 || this.data.level == 7 ) {
				this.$router.push('/')
			}
			this.getData()
		}
	}
</script>