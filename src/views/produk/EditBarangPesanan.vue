<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Edit</b> Barang Pesanan</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="12" md="8">

		                    <CInput
		                        type="text"
		                        :description="validator.no_msg"
		                        :is-valid="validator.no"
		                        autocomplete="no"
		                        label="No Pesanan"
		                        horizontal
		                        placeholder="Masukan No Pesanan"
		                        v-model="barang_pesanan.no"
		                      />  
		                    <CInput
		                        type="date"
		                        :description="validator.tanggal_msg"
		                        :is-valid="validator.tanggal"
		                        @input="barang_pesanan.tanggal.length < 1 ? validator.tanggal = false : validator.tanggal = true"
		                        autocomplete="tanggal"
		                        label="Tanggal"
		                        horizontal
		                        placeholder="Masukan tanggal"
		                        v-model="barang_pesanan.tanggal_pesanan"
		                      />    
		                    <CInput
		                    	type="text"
		                    	:description="validator.ongkir_msg"  
		                    	:is-valid="validator.ongkir"
		                    	autocomplete="ongkir"
		                    	label="Ongkos Kirim"
		                    	horizontal
		                    	placeholder="Masukan Ongkos Kirim"
		                    	v-model="barang_pesanan.ongkir"
		                      />
		                      <CTextarea
		                        label="Masukan Keterangan"
		                        horizontal
		                        rows="3"
		                        v-model="barang_pesanan.keterangan"
		                      />    
	                        
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="primary" @click.prevent="updateBarangPesanan" :disabled="$submit.disabled">
					<i class="fa fa-edit mr-1"></i>{{$submit.label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"EditBarangPesanan",
		data() {
			return {
				submit: {
					label: 'Simpan Perubahan',
					disabled:false
				},
				validator: {
					no:null,
					no_msg:null,
					tanggal:null,
					tanggal_msg:null,
					ongkir:null,
					ongkir_msg:null
				},
				barang_pesanan: {
					no: null,
					tanggal:null,
					tanggal_pesanan:null,
					keterangan:null,
					ongkir:null
				},
				validMsg:false,
				errors:[]
			}
		},
		watch: {
			'barang_pesanan.ongkir': function(val) {
				this.barang_pesanan.ongkir = this.toRupiah(val)
			}
		},
		methods: {

			updateBarangPesanan() {
				this.errors = []
				if(!this.barang_pesanan.no) {
					this.validator.no = false
		            this.validator.no_msg = 'Harap isi no barang pesanan'
		            this.errors.push('no pesanan kosong')
				}
				if(!this.barang_pesanan.tanggal_pesanan) {
					this.validator.tanggal_pesanan = false
		            this.validator.tanggal_pesanan_msg = 'Harap isi tanggal_pesanan barang pesanan'
		            this.errors.push('tanggal pesanan kosong')
				}

				if(!this.barang_pesanan.ongkir) {
					this.validator.ongkir = false
		            this.validator.ongkir_msg = 'Harap isi ongkir barang pesanan'
		            this.errors.push('ongkir kosong')
				}

				if(!this.errors.length) {
					this.submitLoading()
					this.barang_pesanan.tanggal = this.barang_pesanan.tanggal_pesanan
					
					this.$http.post(localStorage.base_api + 'pesanan/barang/edit/' + this.$route.params.id, this.barang_pesanan, {
						headers: {
							'Authorization': 'bearer ' + localStorage.getItem('token')
						},
						redirect:'follow'
					})
					.then(res => {
						this.submitInit()
						this.$submit.update('Simpan Perubahan')
						this.$swal(res.data.message, 'Mohon tunggu sebentar...', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push('/barang-pesanan')	
						}, 1500)
						
					})
					.catch(e => {
						this.submitInit()
						this.$submit.update('Simpan Perubahan')
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

		                    this.$swal('Tidak bisa update data', 'hubungi pengembangnya yah', 'error')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
		                    return false
		                  })
		                }
						else {
							this.submitInit()
							this.$swal('Tidak bisa menambah data', 'hubungi pengembangnya yah', 'error')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
		                    return false
							return false
						}
					})
				}
			},
			submitLoading() {
				this.submit.label = 'Loading...'
				this.submit.disabled = true
			},
			submitInit() {
				this.submit.label = 'Simpan Perubahan'
				this.submit.disabled = false
			}
		},
		created() {
			this.submitInit()
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 5 ) {
				this.$router.push('/')
			}
			getDatas(this, localStorage.base_api + 'pesanan/barang/' + this.$route.params.id, {
				method:'POST',
				headers: {
					'Authorization': 'bearer ' + localStorage.token
				}
			}, 'post')
			.then(res => {
				this.barang_pesanan = res
			})
			.catch(e => {
				this.$swal('Tidak bisa mengambil data', 'Moho hubungi pengembangnya...', 'error')
				setTimeout(() => this.$swal.close())
				return false
			})
		}
	}
</script>