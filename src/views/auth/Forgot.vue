<template>
	<div class="d-flex justify-content-center m-4" id="forgot-page">
    <CRow class="mt-4">
      <CCol sm="12">
          <CCard >
          	<CCardHeader>
          		<div class="d-flex justify-content-around align-items-center">
          			<h3>Forgot Password</h3>
          			<img class="align-middle" src="./icommits-96x96.png" width="40" height="40">  
          		</div>
          	</CCardHeader>
            <CCardBody>
              <CForm  @submit.prevent="sendEmail">
                
                <transition name="fade">
                	<div v-if="errors.length > 0" :class="{'d-none':errorHide}">
                    <small v-for="error in errors" class="alert alert-danger d-block">
                      {{error}}
                    </small>
                  </div>
                </transition>
                
                <CInput
                  placeholder="Email"
                  autocomplete="username email"
                  v-model="email"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CRow>
                  <CCol col="12">
                    <CButton color="primary" class="px-4 w-100 mt-3" :disabled="loginAct === true" @click.prevent="sendEmail" @keyup.enter="sendEmail" type="submit">
                    	<span>{{label}}</span>
                    	<spring-spinner
                          :class="{'d-none':notloading, 'd-inline-block':displayloading}"
                          :animation-duration="2000"
                          :size="10"
                          color="#fff"
                          class="align-middle pl-2"
                        />
                   </CButton>
                  </CCol>
                  <CCol col="12" class="text-center mt-3">
                    <router-link to="/login" class="px-0 w-100 mt-3">Goto login</router-link>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script type="text/javascript">
	// Import spinner component from third-party  
	import { SpringSpinner } from 'epic-spinners'

	export default {
		name:'Forgot',
		data() {
			return {
				email:null,
				errorHide:false,
				notloading:true,
				displayloading:false,
				errors:[],
				label: 'Send my password',
				sendingEmail: false
			}
		},
		components: {
			SpringSpinner
		},
		methods: {
			sendEmail() {
				this.errors = []
				// display spinner
			    this.notloading = false
			    this.displayloading = true

				if(!this.email) {
					this.errors.push('Email is required')
					this.notloading = true
        			this.displayloading = false
				}

				if(!this.validateEmail(this.email)) {
					this.errors.push('Email is not valid')
					this.notloading = true
        			this.displayloading = false
				}

				if(this.errors.length == 0) {
					this.label = 'Loading...'		
					this.sendingEmail = true
					this.$http.post(localStorage.base_api + 'auth/lupa/password', {email:this.email})
					.then(res => {
							this.label = 'Send my password'
							this.notloading = true
        					this.displayloading = false
							this.$swal(res.data.message, 'Harap di cek yah emailnya...', 'info')
							setTimeout(() => {
								this.$swal.close()
								this.email = null
							}, 2500)
					})
					.catch(e => {
						this.sendingEmail = false
						this.label = 'Send my password'
							this.notloading = true
        					this.displayloading = false
						console.error(e)
					})
				}
				else {

				}
			},
			validateEmail(email) {
		      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		      return re.test(email);
		    }
		}
	}
</script>
<style type="text/css" scoped>
	#forgot-page {
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