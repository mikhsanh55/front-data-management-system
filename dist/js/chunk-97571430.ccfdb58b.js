(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97571430"],{"8a05":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[a._v("Edit")]),a._v(" User")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"12",md:"8"}},[t("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[t("small",[a._v("Update Data User berhasil!")])]),t("CSelect",{attrs:{description:"Masukan Nama Karyawan",label:"Nama Karyawan",horizontal:"",options:a.karyawan},on:{"update:value":a.assignKaryawan},model:{value:a.user.id,callback:function(e){a.$set(a.user,"id",e)},expression:"user.id"}}),t("CInput",{attrs:{type:"email",description:a.validator.email_msg,"is-valid":a.validator.email,autocomplete:"email",label:"Email",horizontal:"",placeholder:"Masukan Email",readonly:""},on:{input:function(e){a.karyawan.email.length<1?a.validator.email=!1:a.validator.email=!0}},model:{value:a.user.email,callback:function(e){a.$set(a.user,"email",e)},expression:"user.email"}}),t("CSelect",{attrs:{label:"Jabatan",horizontal:"",options:a.jabatan,readonly:""},on:{"update:value":a.assignJabatan},model:{value:a.user.id_level,callback:function(e){a.$set(a.user,"id_level",e)},expression:"user.id_level"}})],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"primary"},on:{click:function(e){return e.preventDefault(),a.updateUser(e)}}},[t("i",{staticClass:"fa fa-edit mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},r=[],i=t("8e44"),o={name:"EditUser",data:function(){return{label:"Simpan Perubahan",validator:{email:null,email_msg:null},user:{id:1,id_karyawan:1,nama:null,email:null,username:null,id_level:null},jabatan:[],karyawan:[],data_karyawan:[],validMsg:!1,errors:[]}},methods:{getJabatan:function(){var a=this;Object(i["f"])(this,localStorage.base_api+"jabatan",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(e){for(var t=0;t<e.length;t++){var n={};n.value=e[t].id,n.label=e[t].nama,a.jabatan.push(n)}})).then((function(){a.getData()})).catch((function(e){return a.label="Tambah Karyawan",console.error(e),!1}))},getKaryawan:function(){var a=this,e=new Headers;e.append("Authorization","bearer "+localStorage.getItem("token"));var t={method:"GET",headers:e,redirect:"follow"};Object(i["f"])(this,localStorage.base_api+"karyawan",t).then((function(e){a.data_karyawan=e;for(var t=0;t<e.length;t++){var n={};n.value=e[t].id,n.label=e[t].nama_karyawan,a.karyawan.push(n)}})).then((function(){a.getJabatan()})).catch((function(e){if(a.label="Tambah Karyawan",401==e.response.status)a.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),a.$swal("Sesi login kamu sudah habis","login kagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500)})).catch((function(e){return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500),!1}));else if(500==e.response.status)return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500),!1;return!1}))},assignKaryawan:function(a){var e=this;this.user.nama=a,this.data_karyawan.forEach((function(t,n){a==t.id&&(e.user.email=t.email,fetch(localStorage.base_api+"karyawan/"+a,{method:"POST",headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){return a.json()})).then((function(a){e.user.id_level=a.id_jabatan})))}))},assignJabatan:function(a){this.user.id_level=a},getData:function(){var a=this,e=new Headers;e.append("Authorization","bearer "+localStorage.token);var t={method:"POST",headers:e,redirect:"follow"};Object(i["f"])(this,localStorage.base_api+"user/"+this.$route.params.id,t).then((function(e){a.user=e})).catch((function(e){return a.label="Simpan Perubahan",!1}))},updateUser:function(){var a=this;if(this.errors=[],this.user.email||(this.validator.email=!1,this.validator.email_msg="Harap isi email karyawan",this.errors.push("email karyawan kosong")),!this.errors.length){this.label="Loading...";var e=new FormData;e.append("id_karyawan",this.user.id),e.append("email",this.user.email),e.append("level",this.user.id_level),this.$http.post(localStorage.base_api+"user/edit/"+this.user.id,e,{headers:{Authorization:"bearer "+localStorage.getItem("token")}}).then((function(e){a.label="Simpan Perubahan",a.$swal("Update data user berhasil","Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/user")}),1500)})).catch((function(e){for(var t in a.label="Simpan Perubahan",e.response.data.errmsg)a.$swal(e.response.data.errmsg[t][0],"hubungi pengembangnya yah","error"),setTimeout((function(){a.$swal.close()}),1500);return!1}))}}},created:function(){1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),this.getKaryawan()}},s=o,l=t("2877"),u=Object(l["a"])(s,n,r,!1,null,null,null);e["default"]=u.exports},"8e44":function(a,e,t){"use strict";function n(a,e,t,n,r){return new Promise((function(i,o){a.$http.post(e,t,n).then((function(a){var e=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),t=document.createElement("a");t.href=e,t.setAttribute("download",r),document.body.appendChild(t),t.click()})).then((function(){i()})).catch((function(a){o(a)}))}))}function r(a,e,t,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,o){"get"==r?a.$http.get(e,t).then((function(a){var e=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=e,t.setAttribute("download",n),document.body.appendChild(t),t.click()})).then((function(){i()})).catch((function(a){o(a)})):a.$http.post(e,t).then((function(a){var e=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=e,t.setAttribute("download",n),document.body.appendChild(t),t.click()})).then((function(){i()})).catch((function(a){o(a)}))}))}function i(a){return new Promise((function(e,t){a.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var e=[],t=0;t<a.data.length;t++){var n=(new Date).setHours(0,0,0,0),r=new Date(a.data[t].date_line);n=new Date(n),r=new Date(r.setDate(r.getDate()-2)),n.getTime()==r.getTime()&&e.push({date:r,data:a.data[t],link:"po/detail/"+a.data[t].id})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(a){return e(a)})).catch((function(a){return t(a)}))}))}function o(a,e){return new Promise((function(t,n){var r=-1;Promise.all(a.map((function(a){return r++,fetch(a,e[r])}))).then((function(a){return Promise.all(a.map((function(a){return a.json()})))})).then((function(a){t(a)})).catch((function(a){return n(a)}))}))}function s(a,e,t,n){return new Promise((function(n,r){fetch(e,t).then((function(e){return 401==e.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==e.status?(a.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):e.json()})).then((function(a){return n(a)})).catch((function(a){return r(a)}))}))}function l(a,e,t){return new Promise((function(n,r){fetch(e,t).then((function(e){return 401==e.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==e.status?(a.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):e.json()})).then((function(a){return n(a)})).catch((function(a){return r(a)}))}))}t.d(e,"c",(function(){return n})),t.d(e,"d",(function(){return r})),t.d(e,"a",(function(){return i})),t.d(e,"e",(function(){return o})),t.d(e,"f",(function(){return s})),t.d(e,"b",(function(){return l}))}}]);
//# sourceMappingURL=chunk-97571430.ccfdb58b.js.map