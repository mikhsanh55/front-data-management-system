<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Tambah</b> Kwitansi</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="12" md="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Penambahan Kwitansi berhasil!</small>
		                      </p>    
		                      <div v-if="errors.length > 0">
		                        <p v-for="error in errors" class="alert alert-danger">
		                          <small>{{error}}</small>
		                        </p>
		                      </div>  
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
		                        autocomplete="no_kwitansi"
		                        label="Nomer Kwitansi"
		                        horizontal
		                        placeholder="Masukan Nomer Kwitansi"
		                        v-model="kwitansi.no"
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
		                        type="text"
		                        description="Masukan Uang Terbilang"
		                        autocomplete="uang_terbilang"
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
				<CButton type="submit" size="md" color="primary" @click.prevent="addKwitansi">
					<i class="fa fa-plus mr-1"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import mixins from '@/mixins/currency.js'
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"AddKwitansi",
		mixins:[mixins],
		data() {
			return {
				label:'Tambah Kwitansi',
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
		watch: {
			'kwitansi.uang': function(val) {
				this.kwitansi.uang = this.toRupiah(val)
			}
		},
		methods: {
			uangRupiah() {
				this.kwitansi.uang = this.toRupiah(this.kwitansi.uang)
			},
			assignGunaPembayaran(val) {
				this.po.forEach((item) => {
					if(item.id == val) {
						this.kwitansi.guna_pembayaran = item.id
						this.kwitansi.no = item.no_invoice
						this.kwitansi.terima_dari = item.konsumen
					}
				})
			},
			addKwitansi() {
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
				if(!this.kwitansi.guna_pembayaran || this.kwitansi.guna_pembayaran == '000') {
					this.errors.push('Guan Pembayaran Wajib diisi')
					this.$swal('Harap Pilih Guna Pembayaran', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}

				if(!this.errors.length) {
					this.kwitansi.uang = this.toFloatRupiah(this.kwitansi.uang)
					
					this.label = 'Loading...'
					this.$http.post(localStorage.base_api + 'tambah/kwitansi', {
						no: this.kwitansi.no,
						terima_dari: this.kwitansi.terima_dari,
						guna_pembayaran: this.kwitansi.guna_pembayaran,
						uang: this.toFloatRupiah(this.kwitansi.uang)
					}, {
						headers: {
							'Authorization':'bearer ' + localStorage.getItem('token')
						},
						redirect:'follow'
					})
					.then(res => {
						this.label = 'Tambah Kwitansi'
						this.$swal('Kwitansi berhasil ditambah', 'Mohon tunggu sebentar...', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push('/kwitansi')
						}, 1500)
						
					})
					.catch(e => {
						this.label = 'Tambah Kwitansi'
						this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
	                    return false
						this.label = 'Tambah Kwitansi'
						console.log(e)
						return false
					})
				}
			}
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 3) {
				this.$router.push('/')
			}
			getDatas(this, localStorage.base_api + 'po', {method:'post',headers:{'Authorization': 'bearer ' + localStorage.token}}, 'post', {})
			.then(res => {
				this.po = res
				this.guna_pembayaran.push({value: '000', label:'Pilih Guna Pembayaran'})
				this.po.forEach((item, i) => {
					let obj = {}
					obj.value = item.id
					obj.label = item.no
					this.guna_pembayaran.push(obj)
				})
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
                    console.errr('error add kwitansi' + e)
                    return false
                  })
                }
                else {
					alert('There an error occured')
					console.log(e)
					return false
				}
			})
		}
	}
</script>