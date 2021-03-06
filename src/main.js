import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import Axios from 'axios'
import {ClientTable} from 'vue-tables-2'
import VueSwal from 'vue-swal'

Vue.prototype.$http = Axios
Vue.config.performance = true
Vue.use(VueSwal)
Vue.use(CoreuiVue)
Vue.use(ClientTable)
Vue.prototype.$submit = {
  label: 'Tambah',
  disabled: false,
  update: function(label) {
    this.label = label
    this.disabled = !this.disabled
  },
  init: function(label) {
    this.label = label
    this.disabled = false
  }
}

const token = localStorage.getItem('token')
localStorage.setItem('base_api', 'https://api.dms.icommits.com/')
localStorage.setItem('base_uri', 'https://api.dms.icommits.com/')
let app = new Vue({
  el: '#app',
  router,
  icons,
  store,
  template: '<App/>',
  components: {
    App
  },
  methods: {
    getUserData() {
      let headers = new Headers()
      headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
      let options = {
        method:'GET',
        headers,
        redirect:'follow'
      }
      fetch(localStorage.base_api + 'karyawan', options)
      .then(res => res.json())
      .then(res => {
        this.karyawan = res
      })
      .catch(e => console.error(e.response))
    }
  },
  created() {
  	let token = localStorage.getItem('token'),
  		exp = localStorage.getItem('exp')
      
    localStorage.setItem('base_api', 'https://api.dms.icommits.com/')
    localStorage.setItem('base_uri', 'https://api.dms.icommits.com/')
  	if(localStorage.getItem('token') == '' || localStorage.getItem('token') == undefined || localStorage.getItem('token-xx') < new Date()) {
      localStorage.removeItem('token')
      localStorage.removeItem('token-xx')
      localStorage.removeItem('expires_in')
  		this.$router.replace({path: '/login'})
  	}
    else {
      let user = JSON.parse(localStorage.getItem('user'))
      
      // this.$http.post('https://young-temple-67589.herokuapp.com/api/karyawan/' + user.id_karyawan, {
      //   headers: {
      //     'Authorization': 'bearer ' + localStorage.getItem('token'),
      //     'Access-Control-Allow-Origin': '*'
      //   },
      //   redirect:'follow'
      // })
      // .then(res => console.warn(res.data))
      // .catch(e => console.error(e))
    }
    if(window.location.pathname == '/login') {
      document.body.style.backgroundImage = "url('assets/img/background/dokter.jpg') ";
    }
  }
})
export default app