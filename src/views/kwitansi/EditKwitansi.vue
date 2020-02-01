<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Edit</b> Kwitansi</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Perubahan Data Kwitansi berhasil!</small>
		                      </p>    
		                      <div v-if="errors.length > 0">
		                        <p v-for="error in errors" class="alert alert-danger">
		                          <small>{{error}}</small>
		                        </p>
		                      </div>  
		                    <input type="hidden" name="id" ref="id" v-model="kwitansi.id">
		                    <CSelect
				                label="Guna Pembayaran"
				                horizontal
				                :options="guna_pembayaran"
				                v-model="kwitansi.guna_pembayaran"
				                @update:value="assignGunaPembayaran"
				              />
		                    <CInput
		                        type="text"
		                        description="Masukan Nomer Kwitansi"
		                        autocomplete="no"
		                        label="Nomer Kwitansi"
		                        horizontal
		                        placeholder="Masukan Nomer Kwitansi"
		                        v-model="kwitansi.no"
		                        readonly
		                      />
				            <CInput
		                        type="text"
		                        description="Masukan Nama Penerima"
		                        autocomplete="terima_dari"
		                        label="Nama Penerima"
		                        horizontal
		                        placeholder="Masukan Nama Penerima"
		                        v-model="kwitansi.terima_dari"
		                        readonly
		                      />  
		                      <CInput
		                        type="number"
		                        description="Masukan Uang Terbilang"
		                        autocomplete="uang"
		                        label="Uang Terbilang"
		                        horizontal
		                        placeholder="Masukan Uang Terbilang"
		                        v-model="kwitansi.uang"
		                      />
	                        
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="light" @click.prevent="updateKwitansi">
					<i class="fa fa-edit mr-2"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"EditKwitansi",
		data() {
			return {
				label: 'Simpan Perubahan',
				kwitansi: {
					no:null,
					terima_dari:null,
					uang:null,
					guna_pembayaran:null
				},
				validMsg:false,
				errors:[],
				guna_pembayaran:[],
				po:[]
			}
		},
		methods: {
			assignGunaPembayaran(val) {
				this.po.forEach((item) => {
					if(item.id == val) {
						this.kwitansi.guna_pembayaran = item.no
						this.kwitansi.no = item.no_invoice
						this.kwitansi.terima_dari = item.konsumen
						return
					}
				})
			},
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				let options = {
					method:'POST',
					headers,
					redirect:'follow'
				}
				fetch('https://young-temple-67589.herokuapp.com/api/kwitansi/' + this.$route.params.id, options)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.kwitansi = res
				})
				.catch(e => {
					this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
                    setTimeout(() => {
                    	this.$swal.close()
                    	this.$router.replace({path: '/login'})
                    }, 1500)
					return false
				})
			},
			updateKwitansi() {
				this.errors = []
				if(!this.kwitansi.no) {
					this.errors.push('Nomer Kwitansi Wajib diisi')
				}
				if(!this.kwitansi.terima_dari) {
					this.errors.push('Nama penerima wajib diisi')
				}
				if(!this.kwitansi.uang) {
					this.errors.push('Uang Terbilang Wajib diisi')
				}
				if(!this.kwitansi.guna_pembayaran) {
					this.errors.push('Guan Pembayaran Wajib diisi')
				}

				if(!this.errors.length) {
					this.label = 'Loading...'
					this.$http.post('https://young-temple-67589.herokuapp.com/api/kwitansi/edit/' + this.$route.params.id, this.kwitansi, {
						headers: {
							'Authorization':'bearer ' + localStorage.getItem('token')
						},
						redirect:'follow'

					})
					.then(res => {
						this.label = 'Simpan Perubahan'
						this.$swal('Perubahan berhasil disimpan', 'Mohon tunggu sebentar...', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push('/kwitansi')
						}, 1500)
						
					})
					.catch(e => {
						this.label = 'Simpan Perubahan'
						this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
						return false
					})
				}
			}
		},
		created() {
			
			getDatas(this, 'https://young-temple-67589.herokuapp.com/api/po', {headers:{'Authorization': 'bearer ' + localStorage.token}}, 'get')
			.then(res => {
				console.log(res)
				this.po = res
				res.forEach((item, i) => {
					let obj = {}
					obj.value = item.id
					obj.label = item.no
					this.guna_pembayaran.push(obj)
				})
				this.getData()
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
                else {
					alert('There an error occured')
					console.log(e.response)
					return false
				}
			})
		}
	}
</script>