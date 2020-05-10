<template>
  <div>
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
      level:localStorage.level
    }
  },
  components: { CChartLineSimple, CChartBarSimple },
  created() {
    
    if(this.level == 1 || this.level == 2) {
      fetchAll([
        localStorage.base_api + 'dashboard/grafik',
        localStorage.base_api + 'dashboard/kj',
        localStorage.base_api + 'dashboard/vk'
      ], [
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}},
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}},
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}}
      ])
      .then(res => {
        res.shift()
        this.data = {...res[0], ...res[1]}
        
      })
    }
    else if(this.level == 7) {
      fetchAll([
        localStorage.base_api + 'dashboard/psb',
        localStorage.base_api + 'dashboard/pk',
        localStorage.base_api + 'dashboard/k'
      ], [
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}},
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}},
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}}
      ])
      .then(res => {
        
        this.data = {...res[0], ...res[1], ...res[2]}
        
      }) 
    }
    else if(this.level == 6) {
      fetchAll([
        localStorage.base_api + 'dashboard/rbs'
      ], [
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}}
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
        localStorage.base_api + 'dashboard/sp'
      ], [
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}}
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
        localStorage.base_api + 'dashboard/tio'
      ], [
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}}
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
        localStorage.base_api + 'dashboard/bp'
      ], [
        {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}}
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
}
</script>
