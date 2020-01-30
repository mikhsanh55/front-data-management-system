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

		                    <CInput
		                        type="text"
		                        description="Masukan Nomer Kwitansi"
		                        autocomplete="no"
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
		                      <CInput
		                        type="number"
		                        description="Masukan Uang Terbuka"
		                        autocomplete="uang_terbuka"
		                        label="Uang Terbuka"
		                        horizontal
		                        placeholder="Masukan Uang Terbuka"
		                        v-model="kwitansi.uang_terbuka"
		                      />

		                      <CInput
		                        type="text"
		                        description="Masukan Guna Pembayaran"
		                        autocomplete="guna_pembayaran"
		                        label="Guna Pembayaran"
		                        horizontal
		                        placeholder="Masukan Guna Pembayaran"
		                        v-model="kwitansi.guna_pembayaran"
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
	export default {
		name:"EditKwitansi",
		data() {
			return {
				label: 'Simpan Perubahan',
				kwitansi: {
					no:null,
					terima_dari:null,
					uang_terbuka:null,
					uang:null,
					guna_pembayaran:null
				},
				validMsg:false,
				errors:[]
			}
		},
		methods: {
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
				if(!this.kwitansi.uang_terbuka) {
					this.errors.push('Uang Terbuka Wajib diisi')
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
			this.getData()
		}
	}
</script>