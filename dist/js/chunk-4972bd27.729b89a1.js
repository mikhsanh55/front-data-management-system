(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4972bd27"],{"35bc":function(t,e,a){"use strict";var o=a("5d2f"),r=a.n(o);r.a},5326:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex justify-content-center m-4",attrs:{id:"login-page"}},[o("CRow",{staticClass:"mt-4"},[o("CCol",{attrs:{sm:"12"}},[o("CCard",[o("CCardHeader",{staticClass:"p-4"},[o("div",{staticClass:"d-flex justify-content-around align-items-center"},[o("h4",{staticClass:"align-middle"},[t._v("CV. SARANA ABDI BAKTI")]),o("img",{staticClass:"align-middle ml-3",attrs:{src:a("8abe"),width:"40",height:"40"}})]),o("br")]),o("CCardBody",[o("CForm",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[o("transition",{attrs:{name:"fade"}},[t.errors.length>0?o("div",{class:{"d-none":t.errorHide}},t._l(t.errors,(function(e){return o("small",{staticClass:"alert alert-danger d-block"},[t._v(" "+t._s(e)+" ")])})),0):t._e()]),o("CInput",{attrs:{placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),o("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"curent-password"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),o("br"),o("CRow",[o("CCol",{attrs:{col:"12"}},[o("CButton",{staticClass:"px-4 w-100 mt-3",attrs:{color:"primary",type:"submit"},on:{click:function(e){return e.preventDefault(),t.login(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}}},[o("span",[t._v("Masuk")]),o("spring-spinner",{staticClass:"align-middle pl-2",class:{"d-none":t.notloading,"d-inline-block":t.displayloading},attrs:{"animation-duration":2e3,size:10,color:"#fff"}})],1)],1),o("CCol",{staticClass:"d-flex justify-content-center mt-3 w-75",attrs:{col:"12"}},[o("small",[o("router-link",{staticClass:"px-0 w-100 mt-3",attrs:{to:"/forgot-password"}},[t._v("Lupa password?")])],1)])],1)],1)],1)],1)],1)],1)],1)},r=[],s=a("4583"),n={name:"Login",data:function(){return{notloading:!0,displayloading:!1,errorHide:!1,form:{email:null,password:null},errors:[]}},components:{SpringSpinner:s["a"]},methods:{validate:function(){var t=this;return this.errors=[],this.form.email||(this.errors.push("Email is required"),this.notloading=!0,this.displayloading=!1),this.form.password||(this.errors.push("Password is required"),this.notloading=!0,this.displayloading=!1),!(this.errors.length>0)||(setTimeout((function(){return t.errorHide=!0,t.errors=[],t.errorHide=!1,!1}),3e3),!1)},redirect:function(){this.$router.replace("/")},login:function(){var t=this;if(this.notloading=!1,this.displayloading=!0,0==this.validate())return!1;var e=this.form,a=e.email,o=e.password,r=new FormData;r.append("email",a),r.append("password",o);this.$store.dispatch("login",{email:a,password:o}).then((function(t){var e=new Headers;e.append("Authorization","bearer "+localStorage.getItem("token"))})).then((function(){var e=localStorage.level,a="/";a=3==e?"/po":4==e?"/stock-in-out":"/",t.$swal("Selamat Datang","Di Aplikasi Alkes","success"),setTimeout((function(){t.notloading=!0,t.displayloading=!1,t.$swal.close(),setTimeout((function(){t.$router.replace({path:a})}),1e3)}),3e3)})).catch((function(e){return t.notloading=!0,t.displayloading=!1,t.form.password="",t.$swal("Email / Password salah","Coba lagi yah","error"),setTimeout((function(){t.$swal.close()}),1500),console.log(e),!1}))}},created:function(){void 0!=localStorage.getItem("token")&&this.$router.replace({path:"/"})}},i=n,l=(a("35bc"),a("2877")),d=Object(l["a"])(i,o,r,!1,null,"64df8bff",null);e["default"]=d.exports},"5d2f":function(t,e,a){}}]);
//# sourceMappingURL=chunk-4972bd27.729b89a1.js.map