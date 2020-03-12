<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Tambah</b> Vendor</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="12" md="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Penambahan Vendor berhasil!</small>
		                      </p>    
		                      <div v-if="errors.length > 0">
		                        <p v-for="error in errors" class="alert alert-danger">
		                          <small>{{error}}</small>
		                        </p>
		                      </div>  

		                    <CInput
		                        type="text"
		                        description="Masukan Nama vendor"
		                        autocomplete="nama"
		                        label="Nama vendor"
		                        horizontal
		                        placeholder="Masukan Nama vendor"
		                        v-model="vendor.nama"
		                      />
		                    <CInput
		                        type="text"
		                        description="Masukan Nomer Rekening"
		                        autocomplete="no_rekening"
		                        label="Nomer Rekening"
		                        horizontal
		                        placeholder="Masukan Nomer Rekening"
		                        v-model="vendor.no_rekening"
		                      />
		                    <CInputFile
				              	class="mt-4 mb-4"
				                label="Foto Vendor"
				                horizontal
				                @change="handleFile"
				                id="file"
				                ref="file"
				              />
				            <CInput
		                        type="text"
		                        description="Masukan Email"
		                        autocomplete="email"
		                        label="Email"
		                        horizontal
		                        placeholder="Masukan Email"
		                        v-model="vendor.email"
		                      />  
		                      <CInput
		                        type="text"
		                        description="Masukan Whatsapp"
		                        autocomplete="whatsapp"
		                        label="Whatsapp"
		                        horizontal
		                        placeholder="Masukan Whatsapp"
		                        v-model="vendor.wa_hp"
		                      />
		                      <CInput
		                        type="text"
		                        description="Masukan Perusahaan"
		                        autocomplete="perusahaan"
		                        label="Perusahaan"
		                        horizontal
		                        placeholder="Masukan Perusahaan"
		                        v-model="vendor.nama_instansi"
		                      />
		                      <CInput
		                        type="text"
		                        description="Masukan Karakteristik Perusahaan"
		                        autocomplete="karakteristik_perusahaan"
		                        label="Karakteristik Perusahaan"
		                        horizontal
		                        placeholder="Masukan Karakteristik Perusahaan"
		                        v-model="vendor.karakteristik_perusahaan"
		                      />
		                    <CTextarea
		                        label="Masukan Alamat Vendor"
		                        placeholder="Masukan Alamat Vendor"
		                        horizontal
		                        rows="3"
		                        v-model="vendor.alamat"
		                      />  
	                        
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="primary" @click.prevent="addVendor">
					<i class="fa fa-plus mr-1"></i>{{label_btn}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"addVendor",
		data() {
			return {
				data:JSON.parse(localStorage.user),
				vendor: {
					nama:null,
					foto:null,
					email:null,
					wa_hp:null,
					alamat:null,
					no_rekening:null,
					nama_instansi:null,
					karakteristik_perusahaan:null		
				},
				validMsg:false,
				errors:[],
				label_btn:'Tambah Vendor'
			}
		},
		methods: {
			handleFile(file, e) {
				file = file[0]
		         let extension = file.name.substring(file.name.lastIndexOf('.')+1),
		         valid_extension = ['gif', 'png', 'jpg', 'jpeg'],
		         f = file
		         if(valid_extension.includes(extension) == false) {
		          this.$swal('File tidak valid', 'harap upload gambar yah :)', 'warning')
		          setTimeout(() => {
		            this.$swal.close()
		          }, 2000)
		          e.target.value = ''
		          return false
		         }
		         else {
		          this.vendor.foto = f
		         }
			},
			addVendor() {
				this.errors = []
				if(!this.vendor.nama) {
					this.errors.push('Nama vendor Wajib diisi')
				}
				if(!this.vendor.email) {
					this.errors.push('Email Wajib diisi')
				}
				if(!this.vendor.wa_hp) {
					this.errors.push('Whatsapp Wajib diisi')
				}
				if(!this.vendor.alamat) {
					this.errors.push('Alamat Wajib diisi')
				} 	
				if(!this.vendor.no_rekening) {
					this.errors.push('Nomer rekening Wajib diisi')
				}
				if(!this.vendor.nama_instansi) {
					this.errors.push('Data Perusahaan wajib diisi')
				}
				if(!this.vendor.karakteristik_perusahaan) {
					this.errors.push('Data Karakteristik Perusahaan wajib diisi')
				}

				if(!this.errors.length) {
					let formData = new FormData()
					formData.append('nama', this.vendor.nama)
					formData.append('email', this.vendor.email)
					formData.append('wa_hp', this.vendor.wa_hp)
					formData.append('alamat', this.vendor.alamat)
					formData.append('no_rekening', this.vendor.no_rekening)
					formData.append('nama_instansi', this.vendor.nama_instansi)
					formData.append('karakteristik_perusahaan', this.vendor.karakteristik_perusahaan)
					if(this.vendor.foto != null) {
						formData.append('foto', this.vendor.foto)
					}
					this.label_btn = 'Loading...'
					this.$http.post(localStorage.base_api + 'vendor', formData, {
						headers: {
							'Authorization': 'bearer ' + localStorage.getItem('token')
						},
						redirect:'follow'
					})
					.then(res => {
						this.label_btn = 'Tambah Vendor'
						this.$swal('Vendor berhasil ditambah', 'Mohon tunggu sebentar...', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push('/vendor')
						}, 1500)
						
					})
					.catch(e => {
						this.label_btn = 'Tambah Vendor'
						if(e.response)
							console.log(e)
								this.$swal(e.response.data.message, 'hubungi pengembangnya...', 'danger')
			                    setTimeout(() => {
			                    	this.$swal.close()
			                    }, 1500)
						return false
					})
				}
			}
		},
		created() {
			if(this.data.level == 3 || this.data.level == 4 || this.data.level == 6 || this.data.level == 7 ) {
				this.$router.push('/')
			}
		}
	}
</script>