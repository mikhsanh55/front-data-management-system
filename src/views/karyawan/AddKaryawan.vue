<!-- Add Karyawan ERROR 500 -->
<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Tambah</b> Karyawan</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="12" md="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Penambahan Karyawan berhasil!</small>
		                      </p>    
		                    <CInput
		                        type="text"
		                        :description="validator.no_karyawan_msg"
		                        :is-valid="validator.no_karyawan"
		                        @input="karyawan.no_karyawan.length < 1 ? validator.no_karyawan = false : validator.no_karyawan = true"
		                        autocomplete="no_karyawan"
		                        label="Nomer Karyawan"
		                        horizontal
		                        placeholder="Masukan Nomer Karyawan"
		                        v-model="karyawan.no_karyawan"
		                      />
		                    <CInput
		                        type="text"
		                        :description="validator.nama_karyawan_msg"
		                        :is-valid="validator.nama_karyawan"
		                        @input="karyawan.nama_karyawan.length < 1 ? validator.nama_karyawan = false : validator.nama_karyawan = true"
		                        autocomplete="nama_karyawan"
		                        label="Nama Karyawan"
		                        horizontal
		                        placeholder="Masukan Nama Karyawan"
		                        v-model="karyawan.nama_karyawan"
		                      />
		                    <CSelect
		                    	
				                label="Jenis Kelamin"
				                horizontal
				                v-model="karyawan.jk"
				                :options="jk"
				                @update:value="assignJK"
				              />  
		                    <CInputFile
				              	class="mt-4 mb-4"
				                label="Foto Karyawan"
				                horizontal
				                @change="handleFile"
				                id="file"
				                ref="file"
				              />
				            <CInput
		                        type="text"
		                        :description="validator.ktp_msg"
		                        :is-valid="validator.ktp"
		                        @input="karyawan.ktp.length < 1 ? validator.ktp = false : validator.ktp = true"
		                        autocomplete="ktp"
		                        label="KTP"
		                        horizontal
		                        placeholder="Masukan KTP"
		                        v-model="karyawan.ktp"
		                      />  
		                      <CInput
		                        type="email"
		                        :description="validator.email_msg"
		                        :is-valid="validator.email"
		                        @input="karyawan.email.length < 1 ? validator.email = false : validator.email = true"
		                        autocomplete="email"
		                        label="Email"
		                        horizontal
		                        placeholder="Masukan Email"
		                        v-model="karyawan.email"
		                      />
		                      <CInput
		                        type="text"
		                        :description="validator.wa_hp_msg"
		                        :is-valid="validator.wa_hp"
		                        @input="karyawan.wa_hp.length < 1 ? validator.wa_hp = false : validator.wa_hp = true"
		                        autocomplete="whatsapp"
		                        label="Whatsapp"
		                        horizontal
		                        placeholder="Masukan Whatsapp"
		                        v-model="karyawan.wa_hp"
		                      />
		                    <CTextarea
		                        label="Masukan Alamat Karyawan"
		                        :description="validator.alamat_msg"
			                    :is-valid="validator.alamat"
			                    @input="karyawan.alamat.length < 1 ? validator.alamat = false : validator.alamat = true"
		                        horizontal
		                        rows="3"
		                        v-model="karyawan.alamat"
		                      />  
		                      <CInput
		                        type="date"
		                        :description="validator.tgl_masuk_kerja_msg"
		                        :is-valid="validator.tgl_masuk_kerja"
		                        @input="karyawan.tgl_masuk_kerja.length < 1 ? validator.tgl_masuk_kerja = false : validator.tgl_masuk_kerja = true"
		                        autocomplete="tgl_masuk_kerja"
		                        label="Tanggal Masuk Kerja"
		                        horizontal
		                        placeholder="Masukan Tanggal Masuk Kerja"
		                        v-model="karyawan.tgl_masuk_kerja"
		                      />
		                      <CInput
		                        type="text"
		                        :description="validator.npwp_msg"
		                        :is-valid="validator.npwp"
		                        @input="karyawan.npwp.length < 1 ? validator.npwp = false : validator.npwp = true"
		                        autocomplete="npwp"
		                        label="NPWP"
		                        horizontal
		                        placeholder="Masukan NPWP"
		                        v-model="karyawan.npwp"
		                      />
		                      <CInput
		                        type="text"
		                        :description="validator.no_rekening_msg"
		                        :is-valid="validator.no_rekening"
		                        @input="karyawan.no_rekening.length < 1 ? validator.no_rekening = false : validator.no_rekening = true"
		                        autocomplete="no_rekening"
		                        label="No Rekening"
		                        horizontal
		                        placeholder="Masukan No Rekening"
		                        v-model="karyawan.no_rekening"
		                      />
		                      <CSelect
				                label="Jabatan"
				                horizontal
				                v-model="karyawan.id_jabatan"
				                :options="jabatan"
				                @update:value="assignJabatan"
				              />  
	                        
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="primary" @click.prevent="addKaryawan">
					<i class="fa fa-plus mr-2"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas, postData} from '@/containers/global-function.js'
	export default {
		name:"AddKaryawan",
		data() {
			return {
				label: 'Tambah Karyawan',
				jkselected: null,
				jabatanselected:6,
				validator: {
					no_karyawan_msg:'',
					no_karyawan:null,
					nama_karyawan_msg:'',
					nama_karyawan:null,
					ktp_msg:'',
					ktp:null,
					email_msg:'',
					email:null,
					wa_hp_msg:'',
					wa_hp:null,
					alamat_msg:'',
					alamat:null,
					tgl_masuk_kerja_msg:'',
					tgl_masuk_kerja:null,
					npwp_msg:'',
					npwp:null,
					no_rekening_msg:'',
					no_rekening:null

				},
				karyawan: {
					no_karyawan:null,
					nama:null,
					ktp:null,
					jk:null,
					email:null,
					wa_hp:null,
					alamat:null,
					tgl_masuk_kerja:null,
					npwp:null,
					no_rekening:null,
					id_jabatan:null		
				},
				validMsg:false,
				errors:[],
				jk: [
					{
					  value: '000',
					  label: 'Pilih Jenis Kelamin'	
					},
			        { 
			          value: 1,
			          label: 'Laki-laki' 
			        },
			        {
			        	value: 2,
			        	label: 'Perempuan'
			        }
			    ],
			    jabatan: []
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
	          console.log(f)
	          this.karyawan.foto = f
	         }
	      },
	      	getJabatan() {
	      		this.jabatan.push({value:'000', label:'Pilih Jabatan'})
	      		getDatas(this, localStorage.base_api + 'jabatan', {
	      			method: 'post',
	      			headers: {
	      				'Authorization': 'bearer ' + localStorage.token
	      		}}, 'post')
	      		.then(res => {
	      			// console.log(res.data)
	      			
	      			for(let i = 0;i < res.length;i++) {
	      				let obj = {}
	      				obj.value = res[i].id
	      				obj.label = res[i].nama
	      				this.jabatan.push(obj)
	      			}
	      		})
	      		.catch(e => {
	      			this.$swal('Maaf tidak bisa ambil data :(', 'hubungi pengembangnya', 'error')
                    setTimeout(() => {
                      this.$swal.close()
                    }, 2000)
	      			console.error(e)
	      			return false
	      		})
	      	},
			assignJabatan(val) {
				this.karyawan.id_jabatan = val
			},
			assignJK(val) {
				this.karyawan.jk = val
			},
			addKaryawan() {
				this.errors = []
				if(!this.karyawan.no_karyawan) {
					this.validator.no_karyawan = false
		            this.validator.no_karyawan_msg = 'Harap isi nomer karyawan'
		            this.errors.push('no_karyawan karyawan kosong')
				}
				if(!this.karyawan.nama_karyawan) {
					this.validator.nama_karyawan = false
		            this.validator.nama_karyawan_msg = 'Harap isi nama karyawan'
		            this.errors.push('nama_karyawan konsumen kosong')
				}
				if(!this.karyawan.ktp) {
					this.validator.ktp = false
		            this.validator.ktp_msg = 'Harap isi ktp karyawan'
		            this.errors.push('ktp karyawan kosong')
				}
				if(!this.karyawan.email) {
					this.validator.email = false
		            this.validator.email_msg = 'Harap isi email karyawan'
		            this.errors.push('email karyawan kosong')
				}
				if(!this.karyawan.wa_hp) {
					this.validator.wa_hp = false
		            this.validator.wa_hp_msg = 'Harap isi nomer WA karyawan'
		            this.errors.push('wa_hp karyawan kosong')
				}
				if(!this.karyawan.alamat) {
					this.validator.alamat = false
		            this.validator.alamat_msg = 'Harap isi alamat karyawan'
		            this.errors.push('alamat karyawan kosong')
				}
				if(!this.karyawan.tgl_masuk_kerja) {
					this.validator.tgl_masuk_kerja = false
		            this.validator.tgl_masuk_kerja_msg = 'Harap isi Tanggal masuk kerja karyawan'
		            this.errors.push('tgl_masuk_kerja konsumen kosong')
				}
				if(!this.karyawan.npwp) {
					this.validator.npwp = false
		            this.validator.npwp_msg = 'Harap isi npwp karyawan'
		            this.errors.push('npwp konsumen kosong')
				} 	
				if(!this.karyawan.no_rekening) {
					this.validator.no_rekening = false
		            this.validator.no_rekening_msg = 'Harap isi nomer rekening konsumen'
		            this.errors.push('no_rekening konsumen kosong')
				}
				if(!this.karyawan.jk || this.karyawan.jk == '000') {
					this.errors.push('Harap pilih jenis kelamin')
					this.$swal('Harap pilih jenis kelamin', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}
				if(!this.karyawan.id_jabatan || this.karyawan.id_jabatan == '000') {
					this.errors.push('Harap pilih jabatan')
					this.$swal('Harap pilih jabatan', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}
				if(!this.errors.length) {
					this.label = 'Loading...'
					let formData = new FormData()
					formData.append('no_karyawan', this.karyawan.no_karyawan)
					formData.append('nama', this.karyawan.nama_karyawan)
					formData.append('jk', this.karyawan.jk)
					formData.append('alamat', this.karyawan.alamat)
					formData.append('ktp', this.karyawan.ktp)
					formData.append('email', this.karyawan.email)
					formData.append('wa_hp', this.karyawan.wa_hp)
					formData.append('tgl_masuk_kerja', this.karyawan.tgl_masuk_kerja)
					formData.append('npwp', this.karyawan.npwp)
					formData.append('no_rekening', this.karyawan.no_rekening)
					formData.append('id_jabatan', this.karyawan.id_jabatan)
					if(this.karyawan.foto != null) {
		              formData.append('foto', this.karyawan.foto)
		            }
					this.$http.post(localStorage.base_api + 'tambah/karyawan', formData, {
						headers: {
							'Authorization': 'bearer ' + localStorage.token
						}
					})
					.then(res => {
						this.label = 'Tambah Karyawan'
						this.$swal('Data karyawan berhasil ditambah', 'mohon tunggu sebentar...', 'success')
		                  setTimeout(() => {
		                    this.$swal.close()
		                    this.$router.push({path: '/karyawan'})
		                  }, 2000)
						
					})
					.catch(e => {
						this.label = 'Tambah Karyawan'
						this.$swal('Tidak bisa menambah data', 'Mohon hubungi pengembanya...', 'error')
						setTimeout(() => this.$swal.close(), 1500)
						console.error('Error ASW ' + e)
					})
				}
				else {
					window.scrollBy({ 
		              top: -500, // could be negative value
		              left: 0, 
		              behavior: 'smooth' 
		            })
		            return false
				}
			}
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 7 && localStorage.level != 3) {
				this.$router.push('/')
			}
			this.getJabatan()
		}
	}
</script>