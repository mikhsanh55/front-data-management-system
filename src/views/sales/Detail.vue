<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> Sales
			</CCardHeader>
			<CCardBody>
				<CRow class="max-auto d-flex justify-content-center mb-4 mt-4">
					<CCol sm="12">
							<div v-if="sales.foto" class="mx-auto d-flex justify-content-center">
								<img :src="sales.foto" style="border-radius:50%;width:70px;height: 70px;" />
							</div>
							<div v-else class="mx-auto d-flex justify-content-center">
								<img class="img-thumbnail" src="./../../assets/img/avatar/default.svg" style="border-radius:50%;width:70px;height: 70px;" />
							</div>
					</CCol>
				</CRow>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol sm="8" class="">
						<table class="table table-bordered mt-4">
							<tr>
								<th class="w-50">Nama</th>
								<td>{{sales.nama_karyawan}}</td>
							</tr>
							<tr>
								<th class="w-50">Jenis Kelamin</th>
								<td v-if="sales.jk == 1">Laki - laki</td>
								<td v-else>Perempuan</td>
							</tr>
							<tr>
								<th class="w-50">Email</th>
								<td>{{sales.email}}</td>
							</tr>

							<tr>
								<th class="w-50">No HP / WA</th>
								<td>{{sales.wa_hp}}</td>
							</tr>

							<tr>
								<th class="w-50">No KTP</th>
								<td>{{sales.ktp}}</td>
							</tr>
							<tr>
								<th class="w-50">No NPWP</th>
								<td>{{sales.npwp}}</td>
							</tr>
							<tr>
								<th class="w-50">No Rekening</th>
								<td>{{sales.no_rekening}}</td>
							</tr>
							<tr>
								<th class="w-50">Tanggal Masuk Kerja</th>
								<td>{{sales.nama_jabatan}}</td>
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
		name: 'DetailSales',
		data() {
			return {
				sales: {
					id:0,
					no_karyawan:null,
					nama_karyawan:null,
					foto: null,
					ktp:null,
					email:null,
					wa_hp:null,
					alamat:null,
					tgl_masuk_kerja:null,
					npwp:null,
					no_rekening:null,
					nama_jabatan:null		
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
				getDatas(this, localStorage.base_api + 'karyawan/' + this.$route.params.id, options)
				.then(res => {
					this.sales = res
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
	                  console.log(e)
	                  this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.replace({path: '/login'})
	                    }, 1500)
	                    return false
	                }
				})
			},
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2) {
				this.$router.push('/')
			}
			this.getData()
		}
	}
</script>