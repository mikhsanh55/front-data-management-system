<template>
  <div>
    <CRow>
      <CCol sm="12">  
        <CCard>
              <CCardHeader>
                <p>
                  <strong>Edit</strong> Purchase Order
                </p>
              </CCardHeader>
              <CCardBody>
                <CForm class="mt-4">
                  <CRow class="mx-auto d-flex justify-content-center">
                    <CCol sm="8">
                      <p v-show="validMsg == true" class="alert alert-success">
                        <small>Perbaharuan data PO berhasil!</small>
                      </p>    
                      
                      <input type="hidden" name="id" :id="po.id" ref="id">
                         <CSelect
                            label="Sales"
                            horizontal
                            v-model="po.id_sales"
                            :options="sales"
                            @update:value="assignSales"
                          />  
                          <CSelect
                            label="Konsumen"
                            horizontal
                            v-model="po.id_konsumen"
                            :options="konsumen"
                            @update:value="assignKonsumen"
                          />  
                          <CSelect
                            label="Kurir"
                            horizontal
                            v-model="po.id_kurir"
                            :options="kurir"
                            @update:value="assignKurir"
                          />  
                          <CInput
                            type="text"
                            :description="validator.no_po_msg"
                            :is-valid="validator.no_po"
                            @input="po.no_po.length < 1 ? validator.no_po = false : validator.no_po = true"
                            autocomplete="no_po"
                            label="Nomer PO"
                            horizontal
                            placeholder="Masukan Nomer PO"
                            v-model="po.no_po"
                          />
                          <CInput
                            type="text"
                            :description="validator.no_surat_jalan_msg"
                            :is-valid="validator.no_surat_jalan"
                            @input="po.no_surat_jalan.length < 1 ? validator.no_surat_jalan = false : validator.no_surat_jalan = true"
                            autocomplete="no_surat_jalan"
                            label="Nomer Surat Jalan"
                            horizontal
                            placeholder="Masukan Nomer Surat Jalan"
                            v-model="po.no_surat_jalan"
                          />
                          <CInput
                            type="text"
                            :description="validator.no_invoice_msg"
                            :is-valid="validator.no_invoice"
                            @input="po.no_invoice.length < 1 ? validator.no_invoice = false : validator.no_invoice = true"
                            autocomplete="no_invoice"
                            label="Nomer Invoice"
                            horizontal
                            placeholder="Masukan Nomer no_Invoice"
                            v-model="po.no_invoice"
                          />
                          <CInput
                            type="date"
                            :description="validator.tgl_po_masuk_msg"
                            :is-valid="validator.tgl_po_masuk"
                            @input="po.tgl_po_masuk.length < 1 ? validator.tgl_po_masuk = false : validator.tgl_po_masuk = true"
                            autocomplete="date"
                            label="Tanggal PO Masuk"
                            horizontal
                            placeholder="Masukan Tanggal PO Masuk"
                            v-model="po.tgl_po_masuk"
                          />

                          <CInput
                            type="date"
                            :description="validator.date_msg"
                            :is-valid="validator.date"
                            @input="po.date.length < 1 ? validator.date = false : validator.date = true"
                            autocomplete="date"
                            label="Tanggal PO"
                            horizontal
                            placeholder="Masukan Tanggal PO"
                            v-model="po.date"
                          />
                          <CInput
                            type="date"
                            :description="validator.date_line_msg"
                            :is-valid="validator.date_line"
                            @input="po.date_line.length < 1 ? validator.date_line = false : validator.date_line = true"
                            autocomplete="date_line"
                            label="Tanggal Pengiriman"
                            horizontal
                            placeholder="Masukan Tanggal Pengiriman"
                            v-model="po.date_line"
                          />
                          <CInput
                            type="date"
                            :description="validator.jatuh_tempo_msg"
                            :is-valid="validator.jatuh_tempo"
                            @input="po.jatuh_tempo.length < 1 ? validator.jatuh_tempo = false : validator.jatuh_tempo = true"
                            autocomplete="jatuh_tempo"
                            label="TOP"
                            horizontal
                            placeholder="Masukan jatuh_tempo"
                            v-model="po.jatuh_tempo"
                          />
                          <CTextarea
                            label="Keterangan"
                            placeholder="Keterangan"
                            horizontal
                            rows="3"
                            v-model="po.keterangan"
                          />
                          <CInput
                            type="number"
                            :description="validator.tax_rate_msg"
                            :is-valid="validator.tax_rate"
                            @input="po.tax_rate.length < 1 ? validator.tax_rate = false : validator.tax_rate = true"
                            autocomplete="tax_rate"
                            label="Tax Rate %"
                            horizontal
                            placeholder="Masukan Tax Rate"
                            v-model="po.tax_rate"
                          />
                          <CInput
                            type="number"
                            :description="validator.sales_fee_msg"
                            :is-valid="validator.sales_fee"
                            @input="po.sales_fee.length < 1 ? validator.sales_fee = false : validator.sales_fee = true"
                            autocomplete="sales_fee"
                            label="Sales Fee"
                            horizontal
                            placeholder="Masukan Sales Fee"
                            v-model="po.sales_fee"
                          />
                          <CInput
                            type="number"
                            :description="validator.other_msg"
                            :is-valid="validator.other"
                            @input="po.other.length < 1 ? validator.other = false : validator.other = true"
                            autocomplete="other"
                            label="Other"
                            horizontal
                            placeholder="Other"
                            v-model="po.other"
                          />
                          <CTextarea
                            label="Catatan"
                            placeholder="Catatan"
                            horizontal
                            rows="3"
                            v-model="po.catatan"
                          />
                  </CCol>
                </CRow>
                </CForm>
              </CCardBody>
              <CCardFooter class="d-flex justify-content-center mt-4">
                <CButton type="submit" @click.prevent="updateData" color="light" class="mr-2">
                  <i class="fa fa-edit mr-2"></i>{{label}}              
                </CButton>
              </CCardFooter>
            </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
  export default {
    name: 'EditPO',
    data() {
      return {
        label: 'Simpan Perubahan',
        validMsg:false,
        salesselected:1,
        konsumenselected:1,
        statusselected:1,
        kurir: [],
        sales: [],
        konsumen: [],
        validator: {
          no:null,
          no_msg:null,
          tgl_po_masuk:null,
          tgl_po_masuk_msg:null,
          no_surat_jalan:null,
          no_surat_jalan_msg:null,
          no_invoice:null,
          no_invoice_msg:null,
          date:null,
          date_msg:null,
          date_line:null,
          date_line_msg:null,
          jatuh_tempo:null,
          jatuh_tempo_msg:null,
          tax_rate: null,
          tax_rate_msg:null,
          sales_fee: null,
          sales_fee_msg: null,
          other: null,
          other_msg: null,
        },
        po: {
          id_sales:1,
          id_konsumen:1,
          id_kurir:1,
          status:null,
          no_po: null,
          date: null,
          date_line: null,
          jatuh_tempo: null,
          tax_rate: null,
          sales_fee: null,
          other: null,
          catatan: null,
          tgl_po_masuk:null,
          no_surat_jalan:null,
          no_invoice:null
        }
      }
    },
    methods: {
      assignKurir(val) {
        this.po.id_kurir = val
      },
      assignStatus(val) {
        this.po.status = val
      },
      assignKonsumen(val) {
        this.po.id_konsumen = val
      },
      assignSales(val) {
        this.po.id_sales = val
      },
      getRequest(url, fallback) {
        this.$http.get(url, {
          headers: {
              'Authorization': 'bearer ' + localStorage.getItem('token')
            },
            redirect:'follow'
          })
          .then(response => {
            fallback(response.data)
          })
          .catch(e => {
            alert('Ada sedikit error!')
            console.log(e)
            return false
          })
      },
      getData() {
        let headers = new Headers()
        headers.append('Authorization', 'bearer' + localStorage.token )
        let options = {
          method: 'POST',
          headers,
          redirect:'follow'
        }
         fetch('https://young-temple-67589.herokuapp.com/api/po/' + this.$route.params.id, options)
         .then(res => res.json())
         .then(response => {
            this.po = response
            this.po.tgl_po_masuk = response.tgl_po_masuk.split('T')[0]

            if(response.status_code == 500) {
              this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
              setTimeout(() => {
                this.$swal.close()
              }, 1500)
              console.error(response.message)
              return false
            }
         })
         .catch(e => {
          // if(e.response.status == 401) {
          //   this.$store.dispatch('logout')
          //   .then(() => {
          //     let path = window.location.href
          //     path = path.split('/')
          //     localStorage.setItem('prevPath', path[path.length - 1])
          //     alert('Session Login kamu sudah habis! silahkan login kembali')
              
          //   })
          //   .then(() => {
          //     this.$router.replace({path: '/login'})
          //   })
          //   .catch(e => {
          //     alert('An error occured when get data :(')
          //     return false
          //   })
          // }
          // else if(e.response.status == 500){
          //   alert('Ada sedikit masalah di sisi server, harap hubungi pengembangnya :)')
          //   console.log(e)
          //   return false
          // }
            this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
            setTimeout(() => {
              this.$swal.close()
            }, 1500)
            return false

         })
      },
      updateData() {
        this.errors = []

        if(!this.po.no_po) {
          this.validator.no_po = false
                this.validator.no_po_msg = 'Harap isi nomer PO'
                this.errors.push('no kosong')
        }

        if(!this.po.date) {
          this.validator.date = false
                this.validator.date_msg = 'Harap isi Tanggal PO'
                this.errors.push('date kosong')
        }

        if(!this.po.date_line) {
          this.validator.date_line = false
                this.validator.date_line_msg = 'Harap isi tanggal pengiriman'
                this.errors.push('date_line kosong')
        }
        if(!this.po.jatuh_tempo) {
          this.validator.jatuh_tempo = false
                this.validator.jatuh_tempo_msg = 'Harap isi tanggal jatuh tempo'
                this.errors.push('jatuh_tempo kosong')
        }

        if(!this.po.tax_rate) {
          this.validator.tax_rate = false
                this.validator.tax_rate_msg = 'Harap isi Tax Rate'
                this.errors.push('tax_rate kosong')
        }

        if(!this.po.sales_fee) {
          this.validator.sales_fee = false
                this.validator.sales_fee_msg = 'Harap isi sales fee'
                this.errors.push('sales_fee kosong')
        }
        if(!this.errors.length) {
          this.label = 'Loading...'
          this.validMsg = true
          this.$http.post('https://young-temple-67589.herokuapp.com/api/po/edit/' + this.$route.params.id, this.po, {
            headers: {
              'Authorization': 'bearer ' + localStorage.token
            },
            redirect:'follow'
          })
          .then(res => {
            console.log(res)
            this.label = 'Simpan Perubahan'
            this.$swal('Data berhasil diupdate', 'Mohon tunggu sebentar...', 'success')
            setTimeout(() => {
              this.$swal.close()
              this.$router.push('/po')
            }, 1500)
            
          })
          .catch(e => {
            this.label = 'Simpan Perubahan'
            if(e.response.status == 401) {
              this.$store.dispatch('logout')
              .then(() => {
                let path = window.location.href
                path = path.split('/')
                localStorage.setItem('prevPath', path[path.length - 1])
                this.$swal('Sesi login kamu sudah habis', 'login lagi yah...', 'warning')
                setTimeout(() => {
                  this.$swal.close()
                  this.$router.replace({path: '/login'})
                }, 1500)
                       
              })
              .catch(e => {
                this.$swal('Tidak bisa update data', 'hubungi pengembangnya...', 'danger')
                setTimeout(() => {
                  this.$swal.close()
                }, 1500)
                return false
              })
            }
            else {
              this.$swal('Tidak bisa update data', 'hubungi pengembangnya...', 'danger')
                setTimeout(() => {
                  this.$swal.close()
                }, 1500)
            }
            console.log(e.response)
            return false
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

      },
      fetchAll() {
        let self = this
        this.getRequest('https://young-temple-67589.herokuapp.com/api/sales', function(data){
          for(let i = 0;i < data.length;i++) {
            let obj = {}
            obj.value = data[i].id
            obj.label = data[i].nama_karyawan
            self.sales.push(obj)
          }
        })
        this.getRequest('https://young-temple-67589.herokuapp.com/api/kurir', function(data){
          for(let i = 0;i < data.length;i++) {
            let obj = {}
            obj.value = data[i].id
            obj.label = data[i].nama_karyawan
            self.kurir.push(obj)
          }
        })
        this.getRequest('https://young-temple-67589.herokuapp.com/api/konsumen', function(data){
          for(let i = 0;i < data.length;i++) {
            let obj = {}
            obj.value = data[i].id
            obj.label = data[i].nama
            self.konsumen.push(obj)
            self.getData()
          }
        })
      }
    },
    created() {
      this.fetchAll()
    }
  }
</script>