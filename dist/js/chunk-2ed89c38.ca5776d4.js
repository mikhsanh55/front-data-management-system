(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ed89c38"],{"0da5":function(t,a,e){"use strict";var n=e("892a"),i=e.n(n);i.a},4481:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"d-flex justify-content-center m-4",attrs:{id:"forgot-page"}},[n("CRow",{staticClass:"mt-4"},[n("CCol",{attrs:{sm:"12"}},[n("CCard",[n("CCardHeader",[n("div",{staticClass:"d-flex justify-content-around align-items-center"},[n("h3",[t._v("Forgot Password")]),n("img",{staticClass:"align-middle",attrs:{src:e("8abe"),width:"40",height:"40"}})])]),n("CCardBody",[n("CForm",{on:{submit:function(a){return a.preventDefault(),t.sendEmail(a)}}},[n("transition",{attrs:{name:"fade"}},[t.errors.length>0?n("div",{class:{"d-none":t.errorHide}},t._l(t.errors,(function(a){return n("small",{staticClass:"alert alert-danger d-block"},[t._v(" "+t._s(a)+" ")])})),0):t._e()]),n("CInput",{attrs:{placeholder:"Email",autocomplete:"username email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[n("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),n("CRow",[n("CCol",{attrs:{col:"12"}},[n("CButton",{staticClass:"px-4 w-100 mt-3",attrs:{color:"primary",type:"submit"},on:{click:function(a){return a.preventDefault(),t.sendEmail(a)},keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.sendEmail(a)}}},[n("span",[t._v(t._s(t.label))]),n("spring-spinner",{staticClass:"align-middle pl-2",class:{"d-none":t.notloading,"d-inline-block":t.displayloading},attrs:{"animation-duration":2e3,size:10,color:"#fff"}})],1)],1),n("CCol",{staticClass:"text-center mt-3",attrs:{col:"12"}},[n("router-link",{staticClass:"px-0 w-100 mt-3",attrs:{to:"/login"}},[t._v("Goto login")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],s=e("4583"),l={name:"Forgot",data:function(){return{email:null,errorHide:!1,notloading:!0,displayloading:!1,errors:[],label:"Send my password"}},components:{SpringSpinner:s["a"]},methods:{sendEmail:function(){var t=this;this.errors=[],this.notloading=!1,this.displayloading=!0,this.email||(this.errors.push("Email is required"),this.notloading=!0,this.displayloading=!1),this.validateEmail(this.email)||(this.errors.push("Email is not valid"),this.notloading=!0,this.displayloading=!1),0==this.errors.length&&(this.label="Loading...",this.$http.post(localStorage.base_api+"auth/lupa/password",{email:this.email}).then((function(a){console.log(a),t.label="Send my password",t.notloading=!0,t.displayloading=!1,t.$swal(a.data.message,"Harap di cek yah emailnya...","info"),setTimeout((function(){t.$swal.close(),t.email=null}),2500)})).catch((function(a){t.label="Send my password",t.notloading=!0,t.displayloading=!1,console.error(a)})))},validateEmail:function(t){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(t)}}},o=l,r=(e("0da5"),e("2877")),d=Object(r["a"])(o,n,i,!1,null,"2640885a",null);a["default"]=d.exports},"892a":function(t,a,e){}}]);
//# sourceMappingURL=chunk-2ed89c38.ca5776d4.js.map