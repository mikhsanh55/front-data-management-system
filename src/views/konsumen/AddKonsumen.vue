<template>
	<div>
		<CRow>
			<CCol sm="12">	
				<CCard>
		          <CCardHeader>
		          	<p>
		            	<strong>Tambah</strong> Konsumen
		            </p>
		          </CCardHeader>
		          <CCardBody>
		            <CForm class="mt-4" @submit.prevent="addKonsumen">
		            	<CRow class="mx-auto d-flex justify-content-center">
		            		<CCol sm="8">
		            		  <p v-show="validMsg == true" class="alert alert-success">
		            		  	<small>Penambahan Konsumen berhasil!</small>
		            		  </p>		
				            	<CInput
				            	autocomplete="nama"
				                :description="validator.nama_msg"
				                :is-valid="validator.nama"
				                @input="konsumen.nama.length < 1 ? validator.nama = false : validator.nama = true"
				                label="Nama Konsumen"
				                horizontal
				                placeholder="Masukan Nama Konsumen"
				                v-model="konsumen.nama"
				              />
				              <CInput
				                type="text"
				                :description="validator.no_rekening_msg"
				                :is-valid="validator.no_rekening"
				                @input="konsumen.no_rekening.length < 1 ? validator.no_rekening = false : validator.no_rekening = true"
				                autocomplete="no_rekening"
				                label="Respon Konsumen"
				                horizontal
				                placeholder="Masukan Respon Konsumen"
				                v-model="konsumen.no_rekening"
				              />
				              <CInput
				              	:description="validator.email_msg"
				                :is-valid="validator.email"
				                @input="konsumen.email.length < 1 ? validator.email = false : validator.email = true"
				                type="email"
				                autocomplete="email"
				                label="Email"
				                horizontal
				                placeholder="Masukan Email Konsumen"
				                v-model="konsumen.email"
				              />
				              <CInput
				              	:description="validator.wa_hp_msg"
				                :is-valid="validator.wa_hp"
				                @input="konsumen.wa_hp.length < 1 ? validator.wa_hp = false : validator.wa_hp = true"
				                type="text"
				                autocomplete="wa_hp"
				                label="No. Telp/Hp/WA"
				                horizontal
				                placeholder="Masukan Whatsapp Konsumen"
				                v-model="konsumen.wa_hp"
				              />
				              <CInput
				              	:description="validator.nama_instansi_msg"
				                :is-valid="validator.nama_instansi"
				                @input="konsumen.nama_instansi.length < 1 ? validator.nama_instansi = false : validator.nama_instansi = true"
				                type="text"
				                autocomplete="nama_instansi"
				                label="Nama Instansi"
				                horizontal
				                placeholder="Masukan Nama Instansi"
				                v-model="konsumen.nama_instansi"
				              />
				              <CInput
				              	:description="validator.karakteristik_perusahaan_msg"
				                :is-valid="validator.karakteristik_perusahaan"
				                @input="konsumen.karakteristik_perusahaan.length < 1 ? validator.karakteristik_perusahaan = false : validator.karakteristik_perusahaan = true"
				                type="text"
				                autocomplete="karakteristik_perusahaan"
				                label="Karakteristik Perusahaan"
				                horizontal
				                placeholder="Karakteristik Perusahaan"
				                v-model="konsumen.karakteristik_perusahaan"
				              />
				              <CTextarea
				              	:description="validator.alamat_msg"
				                :is-valid="validator.alamat"
				                @input="konsumen.alamat.length < 1 ? validator.alamat = false : validator.alamat = true"
				                label="Alamat Instansi"
				                placeholder="Alamat Instansi"
				                horizontal
				                rows="3"
				                v-model="konsumen.alamat"
				              />
				              <CInputFile
				              	class="mt-4 mb-4"
				                label="Foto"
				                horizontal
				                id="file"
				                ref="file"
				                @change="handleFile"
				              />
				          </CCol>
			          </CRow>
		            </CForm>
		          </CCardBody>
		          <CCardFooter class="d-flex justify-content-center mt-4">
		          	<CButton v-show="is_edit == true" type="submit" size="sm" color="primary" class="mr-2"><i class="fa fa-edit"></i></CButton>
		            <CButton type="submit" @click.prevent="addKonsumen" color="light" class="mr-2 mt-3 mb-3"><i class="fa fa-plus mr-1"></i>{{label}}</CButton>
		            
		          </CCardFooter>
		        </CCard>

				
			</CCol>
		</CRow>
	</div>
</template>
<script>
	export default {
		name: 'AddKonsumen',
		data() {
			return {
				label:'Tambah Konsumen',
				self:this,
				is_edit:false,
				validMsg:false,
				validator: {
					nama:null,
					nama_msg:'',
					no_rekening:null,
					no_rekening_msg:'',
					email: null,
					email_msg:'',
					wa_hp: null,
					wa_hp_msg: '',
					nama_instansi:null,
					nama_instansi_msg:'',
					karakteristik_perusahaan:null,
					karakteristik_perusahaan_msg:'',
					alamat:null,
					alamat_msg:''
				},	
				konsumen: {
					foto:null,
					nama:null,
					no_rekening:null,
					email:null,
					wa_hp:null,
					nama_instansi:null,
					karakteristik_perusahaan:null,
					alamat:null
				},
				errors: []
			}
		},
		methods: {
			validateEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      			return re.test(email);
			},
			handleFile(file, e) {
		         file = file[0]
		         let extension = file.name.substring(file.name.lastIndexOf('.')+1),
		         valid_extension = ['gif', 'png', 'jpg', 'jpeg']
		         if(valid_extension.includes(extension) == false) {
		         	// alert('Harap upload sebuah gambar!')
		         	this.$swal('File tidak valid', 'harap upload gambar yah :)', 'warning')
		         	setTimeout(() => {
		         		this.$swal.close()
		         	}, 2000)
		         	e.target.value = null
		         	return false
		         }
		         else {
		         	this.konsumen.foto = file
		         }
		      },
			addKonsumen() {
				this.errors = []

				if(!this.konsumen.nama) {
					this.validator.nama = false
					this.validator.nama_msg = 'Harap isi nama konsumen'
					this.errors.push('nama konsumen kosong')
				}

				if(!this.konsumen.no_rekening) {
					this.validator.no_rekening = false
					this.validator.no_rekening_msg = 'Harap isi respon konsumen'
					this.errors.push('no rekening kosong')	
				}

				if(!this.konsumen.email ) {
					this.validator.email = false
					this.validator.email_msg = 'Harap isi email konsumen'
					this.errors.push('email konsumen kosong')
				}
				else {
					if(!this.validateEmail(this.konsumen.email)) {
						this.validator.no_rekening = false
						this.validator.no_rekening_msg = 'Email tidak valid!'
						this.errors.push('email konsumen tidak valid')
					}
				}

				if(!this.konsumen.wa_hp) {
					this.validator.wa_hp = false
					this.validator.wa_hp_msg = 'Harap isi nomer WA konsumen'
					this.errors.push('WA konsumen kosong')
				}
				if(!this.konsumen.nama_instansi) {
		            this.validator.nama_instansi = false
		            this.validator.nama_instansi_msg = 'Harap isi nama instansi konsumen'
		            this.errors.push('Nama Perusahaan Kosong')
		          }

		          if(!this.konsumen.karakteristik_perusahaan) {
		            this.validator.karakteristik_perusahaan = false
		            this.validator.karakteristik_perusahaan_msg = 'Harap isi data komputer konsumen'
		            this.errors.push('Nama Perusahaan Kosong')
		          }

		          if(this.konsumen.alamat == '') {
		            
		            this.validator.alamat = false
		            this.validator.alamat_msg = 'Harap isi alamat anda'
		            this.errors.push('data perusahaan kosong')
		          }

				if(!this.errors.length) {
					console.log(this.konsumen)
					let formData = new FormData()
					formData.append('nama', this.konsumen.nama)
					formData.append('no_rekening', this.konsumen.no_rekening)
					formData.append('email', this.konsumen.email)
					formData.append('wa_hp', this.konsumen.wa_hp)
					formData.append('nama_instansi', this.konsumen.nama_instansi)
					formData.append('karakteristik_perusahaan', this.konsumen.karakteristik_perusahaan)
					formData.append('alamat', this.konsumen.alamat)
					if(this.konsumen.foto != null) {
						formData.append('foto', this.konsumen.foto)
					}	

					let qs = require('qs')
					this.label = 'Loading...'
					this.$http.post(localStorage.base_api + 'konsumen', formData, {
						headers: {
							'Authorization': 'bearer ' + localStorage.getItem('token')
						}
					})
					.then(response => {
						console.log(response.data)
						this.validMsg = true
						this.$swal('Tambah Konsumen berhasil', 'Tunggu sebentar yah...', 'success')
						setTimeout(() => {
							this.$swal.close()
							setTimeout(() => {
				              this.self.$router.push({path:'/konsumen'})
				            }, 1000)
						}, 2000)
						
					})
					.catch(e => {
						if(e.response.status == 401) {
		                  this.$store.dispatch('logout')
		                  .then(() => {
		                    let path = window.location.href
		                    path = path.split('/')
		                    localStorage.setItem('prevPath', path[path.length - 1])
		                    // alert('Session Login kamu sudah habis! silahkan login kembali')
		                    this.$swal('Sesi Login kamu udah habis :(', 'Login lagi yah...', 'warning')
		                    this.$store.dispatch('logout')
		                    .then(() => {
		                    	this.$swal.close()
								setTimeout(() => {
					              this.$router.replace({path: '/login'})
					            }, 1000)
		                    })
		                    
		                  })
		                  .catch(e => {
		                    alert('An error occured when get data :(')
		                    return false
		                  })
		                }
		                else {
							this.$swal('Ada yang error uy :(', 'coba kontak pengembangnya', 'danger')
							console.log(e.response)
							// e.response.data.errmsg.forEach(function(i) {
							// 	 console.log(i)
							// })
							return false
						}
					})
				}
				else {
					window.scrollBy({ 
					  top: -250, // could be negative value
					  left: 0, 
					  behavior: 'smooth' 
					})
					return false
				}
			}
		}
		
	}
</script>