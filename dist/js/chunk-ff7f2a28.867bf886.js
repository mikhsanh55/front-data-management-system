(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff7f2a28"],{"01ff":function(t,e,n){"use strict";var i=n("e24d"),a=n.n(i);a.a},4481:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex justify-content-center m-4",attrs:{id:"forgot-page"}},[i("CRow",{staticClass:"mt-4"},[i("CCol",{attrs:{sm:"12"}},[i("CCard",[i("CCardHeader",[i("div",{staticClass:"d-flex justify-content-around align-items-center"},[i("h3",[t._v("Forgot Password")]),i("img",{staticClass:"align-middle",attrs:{src:n("8abe"),width:"40",height:"40"}})])]),i("CCardBody",[i("CForm",{on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[i("transition",{attrs:{name:"fade"}},[t.errors.length>0?i("div",{class:{"d-none":t.errorHide}},t._l(t.errors,(function(e){return i("small",{staticClass:"alert alert-danger d-block"},[t._v(" "+t._s(e)+" ")])})),0):t._e()]),i("CInput",{attrs:{placeholder:"Email",autocomplete:"username email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[i("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("CRow",[i("CCol",{attrs:{col:"12"}},[i("CButton",{staticClass:"px-4 w-100 mt-3",attrs:{color:"primary",type:"submit"},on:{click:function(e){return e.preventDefault(),t.sendEmail(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendEmail(e)}}},[i("span",[t._v("Send my password")]),i("spring-spinner",{staticClass:"align-middle pl-2",class:{"d-none":t.notloading,"d-inline-block":t.displayloading},attrs:{"animation-duration":2e3,size:10,color:"#fff"}})],1)],1),i("CCol",{staticClass:"text-center mt-3",attrs:{col:"12"}},[i("router-link",{staticClass:"px-0 w-100 mt-3",attrs:{to:"/login"}},[t._v("Goto login")])],1)],1)],1)],1)],1)],1)],1)],1)},a=[],r=n("4583"),s={name:"Forgot",data:function(){return{email:null,errorHide:!1,notloading:!0,displayloading:!1,errors:[]}},components:{SpringSpinner:r["a"]},methods:{sendEmail:function(){var t=this;this.errors=[],this.notloading=!1,this.displayloading=!0,this.email||(this.errors.push("Email is required"),this.notloading=!0,this.displayloading=!1),this.validateEmail(this.email)||(this.errors.push("Email is not valid"),this.notloading=!0,this.displayloading=!1),this.errors.length>0&&setTimeout((function(){return t.errorHide=!0,t.errors=[],t.errorHide=!1,!1}),3e3)},validateEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}}},o=s,l=(n("01ff"),n("2877")),d=Object(l["a"])(o,i,a,!1,null,"7ed0f4c7",null);e["default"]=d.exports},e24d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-ff7f2a28.867bf886.js.map