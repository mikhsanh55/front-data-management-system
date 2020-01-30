<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Tambah</b> Kwitansi</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Penambahan Kwitansi berhasil!</small>
		                      </p>    
		                      <div v-if="errors.length > 0">
		                        <p v-for="error in errors" class="alert alert-danger">
		                          <small>{{error}}</small>
		                        </p>
		                      </div>  

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
		                      />  
		                      <CInput
		                        type="number"
		                        description="Masukan Uang Terbilang"
		                        autocomplete="uang_terbilang"
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
				<CButton type="submit" size="md" color="light" @click.prevent="addKwitansi">
					<i class="fa fa-plus mr-1"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"AddKwitansi",
		data() {
			return {
				label:'Tambah Kwitansi',
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
				if(!this.kwitansi.uang_terbuka) {
					this.errors.push('Uang Terbuka Wajib diisi')
				} 	
				if(!this.kwitansi.guna_pembayaran) {
					this.errors.push('Guan Pembayaran Wajib diisi')
				}

				if(!this.errors.length) {
					this.label = 'Loading...'
					this.$http.post('https://young-temple-67589.herokuapp.com/api/kwitansi', this.kwitansi, {
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
						this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
	                    return false
						this.label = 'Tambah Kwitansi'
						console.log(e.response)
						return false
					})
				}
			}
		}
	}
</script>