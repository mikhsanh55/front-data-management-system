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
          <CWidgetDropdown color="secondary" :header="data.pengadaan == 0 ? '0' : admin.pengadaan" text="Pengadaan">
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

    <div v-if="level == 7 || level == 6">
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
        'https://young-temple-67589.herokuapp.com/api/dashboard/grafik',
        'https://young-temple-67589.herokuapp.com/api/dashboard/kj',
        'https://young-temple-67589.herokuapp.com/api/dashboard/vk'
      ], [
        {headers:{'Authorization': 'bearer ' + localStorage.token}},
        {headers:{'Authorization': 'bearer ' + localStorage.token}},
        {headers:{'Authorization': 'bearer ' + localStorage.token}}
      ])
      .then(res => {
        console.warn('HI')
        res.shift()
        this.data = {...res[0], ...res[1]}
        console.log(this.data)
      })
    }
    else if(this.level == 7) {
      fetchAll([
        'https://young-temple-67589.herokuapp.com/api/dashboard/psb',
        'https://young-temple-67589.herokuapp.com/api/dashboard/k'
      ], [
        {headers:{'Authorization': 'bearer ' + localStorage.token}},
        {headers:{'Authorization': 'bearer ' + localStorage.token}}
      ])
      .then(res => {
        console.warn('HI')
        this.data = {...res[0], ...res[1]}
        console.log(this.data)
      }) 
    }
    else  {
      fetchAll([
        'https://young-temple-67589.herokuapp.com/api/dashboard/rbs'
      ], [
        {headers:{'Authorization': 'bearer ' + localStorage.token}}
      ])
      .then(res => {
        console.warn('HI')
        this.data = {...res[0]}
      })  
    }  
    console.log(this.user)
  }
}
</script>
