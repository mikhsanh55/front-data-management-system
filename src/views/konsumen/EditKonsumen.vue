<template>
  <div>
    <CRow>
      <CCol sm="12">  
        <CCard>
              <CCardHeader>
                <p>
                  <strong>Edit</strong> Konsumen
                </p>
              </CCardHeader>
              <CCardBody>
                <CForm class="mt-4">
                  <CRow class="mx-auto d-flex justify-content-center">
                    <CCol sm="8">
                      <p v-show="validMsg == true" class="alert alert-success">
                        <small>Perbaharuan data Konsumen berhasil!</small>
                      </p>    

                      <CInput
                        type="text"
                        :description="validator.nama_msg"
                        :is-valid="validator.nama"
                        @input="konsumen.nama.length < 1 ? validator.nama = false : validator.nama = true"
                        autocomplete="nama"
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
                        placeholder="Masukan Nomer Rekening"
                        v-model="konsumen.no_rekening"
                      />
                      <CInput
                        type="email"
                        :description="validator.email_msg"
                        :is-valid="validator.email"
                        @input="konsumen.email.length < 1 ? validator.email = false : validator.email = true"
                        autocomplete="email"
                        label="Email"
                        horizontal
                        placeholder="Masukan Email Konsumen"
                        v-model="konsumen.email"
                      />
                      <CInput
                        type="text"
                        :description="validator.wa_hp_msg"
                        :is-valid="validator.wa_hp"
                        @input="konsumen.wa_hp.length < 1 ? validator.wa_hp = false : validator.wa_hp = true"
                        autocomplete="whatsapp"
                        label="No. Telp/Hp/WA"
                        horizontal
                        placeholder="Masukan Whatsapp Konsumen"
                        v-model="konsumen.wa_hp"
                      />
                      <CInput
                        type="text"
                        :description="validator.nama_instansi_msg"
                        :is-valid="validator.nama_instansi"
                        @input="konsumen.nama_instansi.length < 1 ? validator.nama_instansi = false : validator.nama_instansi = true"
                        autocomplete="nama_instansi"
                        label="Nama Instansi"
                        horizontal
                        placeholder="Masukan Nama Instansi"
                        v-model="konsumen.nama_instansi"
                      />
                      <CInput
                        type="text"
                        :description="validator.karakteristik_perusahaan_msg"
                        :is-valid="validator.karakteristik_perusahaan"
                        @input="konsumen.karakteristik_perusahaan.length < 1 ? validator.karakteristik_perusahaan = false : validator.karakteristik_perusahaan = true"
                        autocomplete="k_perusahaan"
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
                      <div v-show="konsumen.foto != null">
                        <img :src="uri + konsumen.foto" width="80" height="80" />
                      </div>
                  </CCol>
                </CRow>
                </CForm>
              </CCardBody>
              <CCardFooter class="d-flex justify-content-center mt-4">
                <CButton type="submit" @click.prevent="updateData" color="primary" class="mr-2 mt-3 mb-3"><i class="fa fa-edit mr-2"></i>{{label}}</CButton>
                
              </CCardFooter>
            </CCard>

        
      </CCol>
    </CRow>
  </div>
</template>
<script>
  import {getDatas} from '@/containers/global-function.js'
  export default {
    name: 'EditKonsumen',
    data() {
      return {
        is_edit:false ,
        validMsg:false,
        uri:localStorage.base_uri,
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
        label:'Simpan Perubahan',
        konsumen: {
            id:0,
            alamat:null,
            email:null,
            karakteristik_perusahaan:null,
            nama:null,
            no_rekening:null,
            nama_instansi:null,
            wa_hp:null,
        },
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
        getDatas(this, localStorage.base_api + "konsumen/" + this.$route.params.id, options)
        .then(result => {
          this.konsumen = result
        })
        .catch(error => console.error('error', error));
      },
      handleFile(file) {
         file = file[0]
         let extension = file.name.substring(file.name.lastIndexOf('.')+1),
         valid_extension = ['gif', 'png', 'jpg', 'jpeg']
         if(valid_extension.includes(extension) == false) {
          this.$swal('File tidak valid', 'harap upload gambar yah :)', 'warning')
          setTimeout(() => {
            this.$swal.close()
          }, 2000)
          document.querySelector('input[type=file]').value = ''
          return false
         }
         else {
          this.konsumen.foto = file
         }
      },
      updateData() {
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
              this.validator.email = false
              this.validator.email_msg = 'Email tidak valid!'
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
            // alert('Perbaharuan Data Berhasil!')
            // this.$router.push({path: '/konsumen'})
              this.$http.post(localStorage.base_api + 'konsumen/edit/' + this.$route.params.id, formData, {
                  headers: {
                    'Authorization': 'bearer ' + localStorage.getItem('token'),
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                  }
              })
              .then(response => {
                  this.label = 'Simpan Perubahan'
                  this.validMsg = true
                  this.$swal('Data berhasil diupdate', 'mohon tunggu sebentar...', 'success')
                  setTimeout(() => {
                    this.$swal.close()
                    this.$router.push({path: '/konsumen'})
                  }, 2000)
              })  
              .catch(e => {
                if(e.response.status == 401) {
                  this.$store.dispatch('logout')
                  .then(() => {
                    let path = window.location.href
                    path = path.split('/')
                    localStorage.setItem('prevPath', path[path.length - 1])
                    this.$swal('Sesi login kamu habis :(', 'login lagi yah :)', 'warning')
                    setTimeout(() => {
                      this.$swal.close()
                      this.$router.replace({path: '/login'})
                    }, 2000)
                    
                  })
                  .catch(e => {
                    this.$swal('Maaf tidak bisa ambil data :(', 'hubungi pengembanya', 'danger')
                    setTimeout(() => {
                      this.$swal.close()
                    }, 2000)
                    return false
                  })
                }
                else {
                  this.label = 'Simpan Perubahan'
                  console.log(e)
                  this.$swal('Maaf tidak bisa ambil data :(', 'hubungi pengembanya', 'danger')
                    setTimeout(() => {
                      this.$swal.close()
                    }, 2000)
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
      },
      validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
      },
    },
    created() {
      if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 7) {
        this.$router.push('/')
      }
      this.getData()
    }
  }
</script>