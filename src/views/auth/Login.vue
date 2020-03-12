<template>
  <div class="d-flex justify-content-center m-4" id="login-page">

    <CRow class="mt-4">
      <CCol sm="12">
        <!-- <img src="../../assets/img/background/dokter.jpg"> -->
          <CCard>
            <CCardHeader class="p-4">
              <div class="d-flex justify-content-around align-items-center">
                <h4 class="align-middle">CV. SARANA ABDI BAKTI</h4>
                <img class="align-middle ml-3" src="./alkes-96x96.png" width="40" height="40">  

              </div>
              <br>
            </CCardHeader>
            <CCardBody>
              <CForm @submit.prevent="login">
                <transition name="fade">  
                  <div v-if="errors.length > 0" :class="{'d-none':errorHide}">
                    <small v-for="error in errors" class="alert alert-danger d-block">
                      {{error}}
                    </small>
                  </div>
                </transition>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  v-model="form.email"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                  v-model="form.password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <br>
                <CRow>
                  <CCol col="12">
                    <CButton color="primary" :disabled="loginAct === true" class="px-4 w-100 mt-3" @click.prevent="login" type="submit" @keyup.enter="login">
                      <span :class="{'d-none':loginAct}">Masuk</span>
                        <spring-spinner
                          :class="{'d-none':notloading, 'd-inline-block':displayloading}"
                          :animation-duration="2000"
                          :size="10"
                          color="#fff"
                          class="align-middle pl-2"
                        /> 
                       </CButton>
                  </CCol>
                  <CCol col="12" class="d-flex justify-content-center mt-3 w-75">
                    <small><router-link to="/forgot-password" class="px-0 w-100 mt-3">Lupa password?</router-link></small>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
// Import spinner component from third-party  
import { SpringSpinner } from 'epic-spinners'
import CDataList from '@/components/CDataList.vue'
export default {
  name: 'Login',
  data() {
    return {
      notloading:true, // for spinner toggle ( toggle d-none class )
      displayloading:false, // for spinner toggle ( toggle d-inline-block class )
      errorHide:false, // for error label toggle
      loginAct:false,
      form: {
        email:null,
        password:null
      },
      errors: [], // all errors message store here
      karyawan: [{label: 'Ikhsan', value:13}, {label:'Hamidan', value:14}]
    }
  },
  components: {
    SpringSpinner,
    CDataList
  },
  methods: {
    assignK(val) {
      console.log(val)
    },
    validate() {
      // Set errors array to 0 length
      this.errors = []

      // if elements is empty
      if(!this.form.email) {
        this.errors.push('Email is required')
        this.notloading = true
        this.displayloading = false
      }

      if(!this.form.password) {
        this.errors.push('Password is required')
        this.notloading = true
        this.displayloading = false
      }

      // Hide all error label after 3 second
      if(this.errors.length > 0) {
        setTimeout(() => {
          this.errorHide = true
          this.errors = []
          this.errorHide = false
          return false
        }, 3000)
        return false
      }
      else {
        return true
      }
    },
    redirect() {
      this.$router.replace('/')
    },
    login() {

      // display spinner
      this.notloading = false
      this.displayloading = true
      // perform validation
      if(this.validate() == false) {
        return false
      }

      let {email, password} = this.form

      // perform login
      let data = {email:email, password:password}

      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      }
      this.loginAct = true    
      this.$store.dispatch('login', {email, password})
        .then(res => {
            let headers = new Headers()
            headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
            let options = {
              method:'GET',
              headers,
              redirect:'follow'
            }
        })
        .then(() => {
          let level = localStorage.level, homepath = '/'
          if(level == 3) {
            homepath = '/po'
          }
          else if(level == 4) {
            homepath = '/stock-in-out'
          }
          else {
            homepath = '/'
          }
          this.$swal('Selamat Datang', 'Di Aplikasi Alkes', 'success')
          setTimeout(() => {
            this.notloading = true
            this.displayloading = false
            this.loginAct = false
            this.$swal.close()  
            setTimeout(() => {
              this.$router.replace({path: homepath})
            }, 1000)
          }, 3000)
          
        })
        .catch(error => {
          this.notloading = true
          this.displayloading = false
          this.form.password = ''
          this.loginAct = false
          this.$swal('Email / Password salah', 'Coba lagi yah', 'error')
          setTimeout(() => {
            this.$swal.close()
          }, 1500)
          console.log(error)
          return false
        });
    }
  },
  created() {
    if(localStorage.getItem('token') != undefined) {
      this.$router.replace({path:'/'})
    }

    (function()
    {
      if( window.localStorage )
      {
        if( !localStorage.getItem('firstLoad') )
        {
          localStorage['firstLoad'] = true;
          window.location.reload(true);
        }  
        else
          localStorage.removeItem('firstLoad');
      }
    })();
  }
}
</script>

<style scoped>
body {
  margin:0;
  padding:0;
}
#login-page {
  background-image: url('/dokter.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /*filter: blur(2px);*/
  margin: 0 !important;
  z-index: 6;
  overflow-y: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>