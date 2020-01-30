<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Tambah</b> Kurir</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Penambahan Kurir berhasil!</small>
		                      </p>    

		                    <CInput
		                        type="text"
		                        :description="validator.no_karyawan_msg"
				                :is-valid="validator.no_karyawan"
				                @input="kurir.no_karyawan.length < 1 ? validator.no_karyawan = false : validator.no_karyawan = true"
		                        autocomplete="no_karyawan"
		                        label="Nomer Karyawan"
		                        horizontal
		                        placeholder="Masukan Nomer Karyawan"
		                        v-model="kurir.no_karyawan"
		                      />
		                      <CInput
		                        type="text"
		                        :description="validator.nama_karyawan_msg"
				                :is-valid="validator.nama_karyawan"
				                @input="kurir.nama_karyawan.length < 1 ? validator.nama_karyawan = false : validator.nama_karyawan = true"
		                        autocomplete="nama_karyawan"
		                        label="Nama Karyawan"
		                        horizontal
		                        placeholder="Masukan Nama Karyawan"
		                        v-model="kurir.nama_karyawan"
		                      />
		                      <CSelect
				                label="Jenis Kelamin"
				                horizontal
				                :options="jk"
				                placeholder="Pilih Jenis Kelamin"
				                v-model="jkselected"
				                @update:value="assignJK"
				              />

				              <CInput
		                        type="email"
		                        :description="validator.email_msg"
				                :is-valid="validator.email"
				                @input="kurir.email.length < 1 ? validator.email = false : validator.email = true"
		                        autocomplete="email"
		                        label="Nama email"
		                        horizontal
		                        placeholder="Masukan email"
		                        v-model="kurir.email"
		                      />  
		                      <CInput
		                        type="text"
		                        :description="validator.wa_hp_msg"
				                :is-valid="validator.wa_hp"
				                @input="kurir.wa_hp.length < 1 ? validator.wa_hp = false : validator.wa_hp = true"
		                        autocomplete="wa_hp"
		                        label="Whatsapp"
		                        horizontal
		                        placeholder="Masukan Whatsapp"
		                        v-model="kurir.wa_hp"
		                      />

		                      <CInput
		                        type="text"
		                        :description="validator.ktp_msg"
				                :is-valid="validator.ktp"
				                @input="kurir.ktp.length < 1 ? validator.ktp = false : validator.ktp = true"
		                        autocomplete="ktp"
		                        label="KTP"
		                        horizontal
		                        placeholder="Masukan KTP"
		                        v-model="kurir.ktp"
		                      />
		                      <CTextarea
		                        label="Masukan Alamat"
		                        :description="validator.alamat_msg"
				                :is-valid="validator.alamat"
				                @input="kurir.alamat.length < 1 ? validator.alamat = false : validator.alamat = true"
		                        placeholder="Masukan Alamat"
		                        horizontal
		                        rows="3"
		                        v-model="kurir.alamat"
		                      />  
		                      <CInput
		                        type="date"
		                        :description="validator.tgl_masuk_kerja_msg"
				                :is-valid="validator.tgl_masuk_kerja"
				                @input="kurir.tgl_masuk_kerja.length < 1 ? validator.tgl_masuk_kerja = false : validator.tgl_masuk_kerja = true"
		                        autocomplete="tgl_masuk_kerja"
		                        label="Tanggal Masuk Kurir"
		                        horizontal
		                        placeholder="Masukan Tanggal Masuk Kerja"
		                        v-model="kurir.tgl_masuk_kerja"
		                      />
		                      <CInput
		                        type="text"
		                        :description="validator.npwp_msg"
				                :is-valid="validator.npwp"
				                @input="kurir.npwp.length < 1 ? validator.npwp = false : validator.npwp = true"
		                        autocomplete="npwp"
		                        label="NPWP"
		                        horizontal
		                        placeholder="Masukan NPWP"
		                        v-model="kurir.npwp"
		                      />
		                      <CInput
		                        type="text"
		                        :description="validator.no_rekening_msg"
				                :is-valid="validator.no_rekening"
				                @input="kurir.no_rekening.length < 1 ? validator.no_rekening = false : validator.no_rekening = true"
		                        autocomplete="no_rekening"
		                        label="No Rekening"
		                        horizontal
		                        placeholder="Masukan No Rekening"
		                        v-model="kurir.no_rekening"
		                      />

		                      <CSelect
				                label="Jabatan"
				                horizontal
				                :options="jabatan"
				                placeholder="Pilih Jabatan"
				                v-model="jabatanselected"
				                @update:value="assignJabatan"
				              />
	                        
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="primary" @click.prevent="addKurir">
					{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"AddKurir",
		data() {
			return {
				label:'Tambah Kurir',
				jkselected:1,
				jabatanselected:1,
				validator: {
					no_karyawan:null,
					no_karyawan_msg:null,
					email:null,
					email_msg:null,
					ktp:null,
					ktp_msg:null,
					alamat:null,
					alamat_msg:null,
					tgl_masuk_kerja:null,
					tgl_masuk_kerja_msg:null,
					npwp:null,
					no_rekening:null,
					no_rekening_msg:null,
				},
				kurir: {
					no_karyawan:null,
					nama_karyawan:null,
					jk:null,
					email:null,
					wa_hp:null,
					ktp:null,
					alamat:null,
					tgl_masuk_kerja:null,
					npwp:null,
					no_rekening:null,
					jabatan:null
				},
				jk: [
					{
						value:1,
						label: 'Laki-laki'
					},
					{
						value:2,
						label: 'Perempuan'
					}
				],
				jabatan: [
					{
						value:1,
						label: 'Kurir Daerah'
					},
					{
						value:2,
						label: 'Kurir Nasional'
					}
				],
				validMsg:false,
				errors:[]
			}
		},
		methods: {
			assignJabatan(val) {
				this.kurir.jabatan = val
			},
			assignJK(val) {
				this.kurir.jk = val
			},
			validateEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      			return re.test(email);
			},
			addKurir() {
				this.errors = []
				if(!this.kurir.no_karyawan) {
					this.validator.no_karyawan = false
					this.validator.no_karyawan_msg = 'Harap isi no karyawan kurir'
					this.errors.push('no_karyawan kurir kosong')
				}
				if(!this.kurir.nama_karyawan) {
					this.validator.nama_karyawan = false
					this.validator.nama_karyawan_msg = 'Harap isi nama karyawan kurir'
					this.errors.push('nama_karyawan kurir kosong')
				}
				if(!this.kurir.email) {
					this.validator.email = false
					this.validator.email_msg = 'Harap isi email kurir'
					this.errors.push('email kurir kosong')
				}
				else {
					if(!this.validateEmail(this.kurir.email)) {
						this.validator.no_rekening = false
						this.validator.no_rekening_msg = 'Email tidak valid!'
						this.errors.push('email kurir tidak valid')
					}
				}

				if(!this.kurir.wa_hp) {
					this.validator.wa_hp = false
					this.validator.wa_hp_msg = 'Harap isi no hp kurir'
					this.errors.push('wa_hp kurir kosong')
				}
				if(!this.kurir.ktp) {
					this.validator.ktp = false
					this.validator.ktp_msg = 'Harap isi ktp kurir'
					this.errors.push('ktp kurir kosong')
				}
				if(!this.kurir.tgl_masuk_kerja) {
					this.validator.tgl_masuk_kerja = false
					this.validator.tgl_masuk_kerja_msg = 'Harap isi tanggal masuk kerja kurir'
					this.errors.push('tgl_masuk_kerja kurir kosong')
				}
				if(!this.kurir.npwp) {
					this.validator.npwp = false
					this.validator.npwp_msg = 'Harap isi npwp kurir'
					this.errors.push('npwp kurir kosong')
				}
				if(!this.kurir.no_rekening) {
					this.validator.no_rekening = false
					this.validator.no_rekening_msg = 'Harap isi no rekening kurir'
					this.errors.push('no_rekening kurir kosong')
				}

				if(!this.errors.length) {
					this.label = 'Loading...'
					this.$http.post('https://young-temple-67589.herokuapp.com/api/kurir', this.kurir, {
						headers: {
							'Authorization': 'bearer ' + localStorage.token,
							'Access-Control-Allow-Origin': '*',
							'Access-Control-Allow-Methods': '*'
						}
					})
					.then(response => {
						this.label = 'Tambah Kurir'
						console.log(response.data)
						this.validMsg = true
						alert(response.data.message)
						this.$router.push({path:'/kurir'})
					})
					.catch(e => {
						this.label = 'Tambah Kurir'
						console.log(e)
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
				else {
					window.scrollBy({ 
					  top: -500, // could be negative value
					  left: 0, 
					  behavior: 'smooth' 
					})
					return false
				}
			}
		}
	}
</script>