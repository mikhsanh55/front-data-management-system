<template>
  <div>
    <CRow v-if="level == 7">
      <CCol lg="12" sm="12">
        <form action="" @submit.prevent="postPsb" class="form-inline mb-4 mt-2">
          <div class="form-group mb-2 mr-2">
            <label class="mr-2" for="date">Tanggal</label>
            <input type="date" class="form-control" id="date" v-model="date" />
          </div>
          <button class="btn btn-primary mb-2" type="submit" :disabled="submit.process">{{submit.label}}</button>
        </form>
      </CCol>
    </CRow>
    <div v-if="level == 1 || level == 2">
      <CRow>
        <CCol sm="6" lg="3">
          <CWidgetDropdown color="primary" :header="data.direktur == 0 ? '0' : data.direktur" text="Direktur">
            <template #footer>
              <CChartLineSimple
                pointed
                class="px-3"
                style="height:70px"
                :data-points="[65, 59, 84, 84, 51, 55, 40]"
                background-color="secondary"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown color="info" :header="data.manager" text="Manager">
            
            <template #footer>
              <CChartLineSimple
                pointed
                class="px-3"
                style="height:70px"
                :data-points="[1, 18, 9, 17, 34, 22, 11]"
                background-color="success"
                :options="{ elements: { line: { tension: 0.00001 }}}"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="warning"
            :header="data.admin_umum == 0 ? '0' : data.admin_umum"
            text="Admin Umum"
          >
            <template #footer>
              <CChartLineSimple
                style="height:70px"
                background-color="rgba(255,255,255,.2)"
                :data-points="[78, 81, 80, 45, 34, 12, 40]"
                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                point-hover-background-color="danger"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="danger"
            :header="data.admin_stock == 0 ? '0' : data.admin_stock"
            text="Admin Stock"
          >
            <template #footer>
              <CChartBarSimple
                style="height:70px"
                background-color="rgb(250, 152, 100)"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
      </CRow>

      <CRow>
        <CCol sm="6" lg="3">
          <CWidgetDropdown color="secondary" :header="data.pengadaan == 0 ? '0' : data.pengadaan" text="Pengadaan">
            <template #footer>
              <CChartLineSimple
                pointed
                class="px-3"
                style="height:70px"
                :data-points="[65, 59, 84, 84, 51, 55, 40]"
                background-color="primary"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown color="success" :header="data.spv == 0 ? '0' : data.spv" text="SPV">
            
            <template #footer>
              <CChartLineSimple
                pointed
                class="px-3"
                style="height:70px"
                :data-points="[1, 18, 9, 17, 34, 22, 11]"
                background-color="info"
                :options="{ elements: { line: { tension: 0.00001 }}}"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="danger"
            :header="data.marketing == 0 ? '0' : data.marketing"
            text="Admin Marketing"
          >
            <template #footer>
              <CChartLineSimple
                style="height:70px"
                background-color="rgba(255,255,255,.2)"
                :data-points="[78, 81, 80, 45, 34, 12, 40]"
                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                point-hover-background-color="warning"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="primary"
            :header="data.sales == 0 ? '0' : data.sales"
            text="Sales"
          >
            <template #footer>
              <CChartBarSimple
                style="height:70px"
                background-color="rgb(250, 152, 152)"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="6" lg="3">
          <CWidgetDropdown color="info" :header="data.kurir == 0 ? '0' : data.kurir" text="Kurir">
            
            <template #footer>
              <CChartLineSimple
                pointed
                class="px-3"
                style="height:70px"
                :data-points="[1, 18, 9, 17, 34, 22, 11]"
                background-color="warning"
                :options="{ elements: { line: { tension: 0.00001 }}}"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
      </CRow>
    </div>
    <div v-if="level == 6"> 
      <CRow>
        <CCol sm="6" lg="4">
              <CWidgetDropdown color="secondary" :header="data.request == 0 ? '0' : data.request" text="Request">
                
                <template #footer>
                  <CChartLineSimple
                    pointed
                    class="px-3"
                    style="height:70px"
                    :data-points="[1, 18, 9, 17, 34, 22, 11]"
                    background-color="primary"
                    :options="{ elements: { line: { tension: 0.00001 }}}"
                    label="Members"
                    labels="months"
                  />
                </template>
              </CWidgetDropdown>
            </CCol>

            <CCol sm="6" lg="4">
              <CWidgetDropdown
                color="primary"
                :header="data.proses == 0 ? '0' : data.proses"
                text="Proses"
              >
                <template #footer>
                  <CChartBarSimple
                    style="height:70px"
                    background-color="rgb(250, 152, 152)"
                    label="Members"
                    labels="months"
                  />
                </template>
              </CWidgetDropdown>
            </CCol>
            <CCol sm="6" lg="4">
              <CWidgetDropdown color="warning" :header="data.pengiriman == 0 ? '0' : data.pengiriman" text="Pengiriman">
                
                <template #footer>
                  <CChartLineSimple
                    pointed
                    class="px-3"
                    style="height:70px"
                    :data-points="[1, 18, 9, 17, 34, 22, 11]"
                    background-color="danger"
                    :options="{ elements: { line: { tension: 0.00001 }}}"
                    label="Members"
                    labels="months"
                  />
                </template>
              </CWidgetDropdown>
            </CCol>
      </CRow>
    </div>  
    <div v-if="level == 7">
      <CRow>
        <CCol sm="6" lg="3">
          <CWidgetDropdown color="secondary" :header="data.request == 0 ? '0' : data.request" text="Request">
            
            <template #footer>
              <CChartLineSimple
                pointed
                class="px-3"
                style="height:70px"
                :data-points="[1, 18, 9, 17, 34, 22, 11]"
                background-color="primary"
                :options="{ elements: { line: { tension: 0.00001 }}}"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>

        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="primary"
            :header="data.proses == 0 ? '0' : data.proses"
            text="Proses"
          >
            <template #footer>
              <CChartBarSimple
                style="height:70px"
                background-color="rgb(250, 152, 152)"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown color="warning" :header="data.pengiriman == 0 ? '0' : data.pengiriman" text="Pengiriman">
            
            <template #footer>
              <CChartLineSimple
                pointed
                class="px-3"
                style="height:70px"
                :data-points="[1, 18, 9, 17, 34, 22, 11]"
                background-color="danger"
                :options="{ elements: { line: { tension: 0.00001 }}}"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>

        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="success"
            :header="data.selesai == 0 ? '0' : data.selesai"
            text="Selesai"
          >
            <template #footer>
              <CChartBarSimple
                style="height:70px"
                background-color="rgb(250, 152, 152)"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
      </CRow>
    </div>
    <div v-if="level == 3">
      <CRow>
        <CCol sm="12" lg="6">
          <CWidgetDropdown
            color="primary"
            :header="data.pengiriman_po == 0 ? '0' : data.pengiriman_po"
            text="Pengiriman Purchase Order"
          >
            <template #footer>
              <CChartLineSimple
                pointed
                class="px-3"
                style="height:70px"
                :data-points="[1, 18, 9, 17, 34, 22, 11]"
                background-color="primary"
                :options="{ elements: { line: { tension: 0.00001 }}}"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="12" lg="6">
          <CWidgetDropdown
            color="success"
            :header="data.pengiriman_req_barang == 0 ? '0' : data.pengiriman_req_barang"
            text="Pengiriman Request Barang"
          >
            <template #footer>
              <CChartBarSimple
                style="height:70px"
                background-color="rgb(250, 152, 0)"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
      </CRow>
    </div>
    <div v-if="level == 4"> 
      <CRow>
        <CCol sm="6" lg="4">
          <CWidgetDropdown
            color="primary"
            :header="data.barang_masuk == 0 ? '0' : data.barang_masuk"
            text="Barang Masuk"
          >
            <template #footer>
              <CChartBarSimple
                style="height:70px"
                background-color="rgb(250, 152, 0)"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="4">
          <CWidgetDropdown
            color="success"
            :header="data.barang_keluar == 0 ? '0' : data.barang_keluar"
            text="Barang Keluar"
          >
            <template #footer>
              <CChartLineSimple
                style="height:70px"
                background-color="rgba(255,255,255,.2)"
                :data-points="[78, 81, 80, 45, 34, 12, 40]"
                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                point-hover-background-color="secondary"
                label="Members"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>

        <CCol sm="6" lg="4">
          <CWidgetDropdown
            color="danger"
            :header="data.barang_habis == 0 ? '0' : data.barang_habis"
            text="Barang Habis"
          >
            <template #footer>
              <CChartBarSimple
                style="height:70px"
                background-color="rgb(250, 90, 0)"
                labels="months"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
      </CRow>
    </div>
    <div v-if="level == 5"> 
      <CRow class="d-flex justify-content-center">
        <CCol sm="4" lg="4">
          <CWidgetDropdown
            color="primary"
            :header="data.barang_pesanan == 0 ? '0' : data.barang_pesanan"
            text="Barang Pesanan"
          >
            <template #footer>
              <CChartBarSimple
                style="height:70px"
                background-color="rgb(250, 90, 40)"
                labels="barang pesanan"
              />
            </template>
          </CWidgetDropdown>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'
import {checkPO, getDatas, fetchAll} from '@/containers/global-function.js'
export default {
  name: 'WidgetsDropdown',
  data() {
    return {
      data:'',
      date: null,
      submit: {
        process: false,
        label: 'Filter'
      },
      level:localStorage.level
    }
  },
  components: { CChartLineSimple, CChartBarSimple },
  methods: {
    
    postPsb() {
      console.log(this.date)
      this.submit.process = true
      this.submit.label = 'Loading...'
      if(this.date === null) {
        this.submit.process = false
        this.submit.label = 'Filter'
        
        return false
      }
      var formData = new FormData()
      formData.append('date', this.date)

      fetchAll([
          localStorage.base_api + 'dashboard/psb', // jumlah po per status dan per bulan
          localStorage.base_api + 'dashboard/pk', // jumlah po sesuai nama sales
          localStorage.base_api + 'dashboard/k' // jumlah konsumen
        ], [
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:formData},
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})},
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})}
        ])
        .then(res => {
          this.submit.process = false
          this.submit.label = 'Filter'
          this.data = {...res[0], ...res[1], ...res[2]}
          
        }) 
    },
    getDatas() {
      if(this.level == 1 || this.level == 2) {
        fetchAll([
          localStorage.base_api + 'dashboard/grafik', // dashboard manager
          localStorage.base_api + 'dashboard/kj', // jumlah karyawan per jabatan
          localStorage.base_api + 'dashboard/vk' // jumlah vendor dan konsumen
        ], [
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})},
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})},
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})}
        ])
        .then(res => {
          res.shift()
          this.data = {...res[0], ...res[1]}
          
        })
      }
      else if(this.level == 7) {
        fetchAll([
          localStorage.base_api + 'dashboard/psb', // jumlah po per status dan per bulan
          localStorage.base_api + 'dashboard/pk', // jumlah po sesuai nama sales
          localStorage.base_api + 'dashboard/k' // jumlah konsumen
        ], [
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})},
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})},
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})}
        ])
        .then(res => {
          
          this.data = {...res[0], ...res[1], ...res[2]}
          
        }) 
      }
      else if(this.level == 6) {
        fetchAll([
          localStorage.base_api + 'dashboard/rbs' // Jumlah Request Barang Per Status Per Bulan
        ], [
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})}
        ])
        .then(res => {
          
          this.data = {...res[0]}
        })
        .catch(e => {
          console.error('Ada error guys')
          console.error(e)
        })  
      }
      else if(this.level == 3) { // admin umum
        fetchAll([
          localStorage.base_api + 'dashboard/sp'//jumlah Status pengiriman 
        ], [
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})}
        ])
        .then(res => {
          
          this.data = {...res[0]}
          console.log(this.data.pengiriman_po)
        })
        .catch(e => {
          console.error('Ada error guys')
          console.error(e)
        })  
      }  
      else if(this.level == 4) { // admin stok
        fetchAll([
          localStorage.base_api + 'dashboard/tio' //Dashboard Stock
        ], [
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})}
        ])
        .then(res => {
          
          this.data = {...res[0]}
        })
        .catch(e => {
          console.error('Ada error guys')
          console.error(e)
        })  
      }

      else if(this.level == 5) { // admin pengadaan
        fetchAll([
          localStorage.base_api + 'dashboard/bp'//Jumlah Barang Pesanan
        ], [
          {method:'post', headers:{'Access-Control-Allow-Origin':'*','Authorization': 'bearer ' + localStorage.token}, body:JSON.stringify({})}
        ])
        .then(res => {
          
          this.data = {...res[0]}
        })
        .catch(e => {
          console.error('Ada error guys')
          console.error(e)
        })  
      }
    }
  },
  created() {
    this.getDatas()
  }
}
</script>
