<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> Kwitansi
			</CCardHeader>
			<CCardBody>
				<CRow class="max-auto d-flex justify-content-center mb-4 mt-4">
					<CCol sm="12">
							<div v-if="kwitansi.foto" class="mx-auto d-flex justify-content-center">
								<img :src="kwitansi.foto" style="border-radius:50%;width:70px;height: 70px;" />
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
								<th class="w-50">Diterima dari</th>
								<td>{{kwitansi.terima_dari}}</td>
							</tr>
							<tr>
								<th class="w-50">Uang Terbuka</th>
								<td>{{kwitansi.uang}}</td>
							</tr>
							<tr>
								<th class="w-50">Uang</th>
								<td> {{kwitansi.uang}} </td>
							</tr>
							<tr>
								<th class="w-50">Guna Pembayaran</th>
								<td> {{kwitansi.guna_pembayaran}} </td>
							</tr>
						</table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'DetailKwitansi',
		data() {
			return {
				kwitansi: {
					no:null,
					terima_dari:null,
					uang_terbuka:null,
					uang:null,
					guna_pembayaran:null
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
				fetch('https://young-temple-67589.herokuapp.com/api/Kwitansi/' + this.$route.params.id, options)
				.then(res => res.json())
				.then(res => {
					this.kwitansi = res
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
	                    }, 1500)
	                    return false
	                  })
	                }
	                else {
	                  
	                  console.log(e)
	                  this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
	                  return false 
	                }
				})
			}
		},
		created() {
			this.getData()
		}
	}
</script>