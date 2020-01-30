(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238407"],{ff1b:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[a._v("Tambah")]),a._v(" User")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"8"}},[t("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[t("small",[a._v("Penambahan User berhasil!")])]),t("CSelect",{attrs:{label:"Nama Karyawan",horizontal:"",options:a.karyawan,description:"Masukan Nama Karyawan",autocomplete:"nama_karyawan"},on:{"update:value":a.assignKaryawan}}),t("CInput",{attrs:{type:"email",description:a.validator.email_msg,"is-valid":a.validator.email,autocomplete:"email",label:"Email",horizontal:"",placeholder:"Masukan Email"},on:{input:function(e){a.user.email.length<1?a.validator.email=!1:a.validator.email=!0}},model:{value:a.user.email,callback:function(e){a.$set(a.user,"email",e)},expression:"user.email"}}),t("CInput",{attrs:{type:"password",description:a.validator.password_msg,"is-valid":a.validator.password,autocomplete:"password",label:"Password",horizontal:"",placeholder:"Masukan Password"},on:{input:function(e){a.user.password.length<1?a.validator.password=!1:a.validator.password=!0}},model:{value:a.user.password,callback:function(e){a.$set(a.user,"password",e)},expression:"user.password"}}),t("CSelect",{attrs:{label:"Jabatan",horizontal:"",options:a.jabatan},on:{"update:value":a.assignJabatan}})],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(e){return e.preventDefault(),a.addUser(e)}}},[t("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},r=[],n={name:"AddUser",data:function(){return{label:"Tambah User",validator:{email:null,email_msg:null,password:null,password_msg:null},user:{id_karyawan:1,email:null,password:null,level:6},karyawan:[],jabatan:[],validMsg:!1,errors:[]}},methods:{getJabatan:function(){var a=this;this.$http.get("https://young-temple-67589.herokuapp.com/api/jabatan",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(e){for(var t=0;t<e.data.length;t++){var s={};s.value=e.data[t].id,s.label=e.data[t].nama,a.jabatan.push(s)}console.log(a.jabatan)})).catch((function(a){return alert("Maaf lagi ada error sedikit :D"),console.error(a.response),!1}))},getKaryawan:function(){var a=this,e=new Headers;e.append("Authorization","bearer "+localStorage.getItem("token"));var t={method:"GET",headers:e,redirect:"follow"};fetch("https://young-temple-67589.herokuapp.com/api/karyawan",t).then((function(a){return a.json()})).then((function(e){for(var t=0;t<e.length;t++){var s={};s.value=e[t].id,s.label=e[t].nama_karyawan,a.karyawan.push(s)}})).then((function(){a.getJabatan()})).catch((function(a){return alert("Maaf lagi ada error sedikit :D"),console.error(a),!1}))},assignKaryawan:function(a){this.user.id_karyawan=a,console.log(a)},assignJabatan:function(a){this.user.level=a},addUser:function(){var a=this;this.errors=[],this.user.email||(this.validator.email=!1,this.validator.email_msg="Harap isi email karyawan",this.errors.push("email karyawan kosong")),this.user.password||(this.validator.password=!1,this.validator.password_msg="Harap isi password karyawan",this.errors.push("password karyawan kosong")),this.errors.length||(console.log(this.user),this.label="Loading...",this.$http.post("https://young-temple-67589.herokuapp.com/api/user",this.user,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(e){a.label="Tambah User",alert(e.data.message),a.$swal(e.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/user")}),1500)})).catch((function(e){if(401!=e.response.status)return a.label="Tambah User",a.$swal("Tidak bisa menambah data","hubungi pengembangnya yah","danger"),setTimeout((function(){a.$swal.close()}),1500),!1;a.$store.dispatch("logout").then((function(){var e=window.location.href;return e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),a.$swal("Sesi Login kamu udah habis","login lagi yah","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500),!1})).catch((function(e){return a.$swal("Tidak bisa menambah data","hubungi pengembangnya yah","danger"),setTimeout((function(){a.$swal.close()}),1500),!1}))})))}},created:function(){this.getKaryawan()}},o=n,l=t("2877"),i=Object(l["a"])(o,s,r,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d238407.4657cca5.js.map