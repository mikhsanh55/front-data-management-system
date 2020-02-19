(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52701520"],{"05a2":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[e._v("Edit")]),e._v(" Vendor")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"8"}},[t("p",{directives:[{name:"show",rawName:"v-show",value:1==e.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[t("small",[e._v("Penambahan Vendor berhasil!")])]),e.errors.length>0?t("div",e._l(e.errors,(function(a){return t("p",{staticClass:"alert alert-danger"},[t("small",[e._v(e._s(a))])])})),0):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.vendor.id,expression:"vendor.id"}],ref:"id",attrs:{type:"hidden",name:"id"},domProps:{value:e.vendor.id},on:{input:function(a){a.target.composing||e.$set(e.vendor,"id",a.target.value)}}}),t("CInput",{attrs:{type:"text",description:"Masukan Nama vendor",autocomplete:"nama_vendor",label:"Nama vendor",horizontal:"",placeholder:"Masukan Nama vendor"},model:{value:e.vendor.nama,callback:function(a){e.$set(e.vendor,"nama",a)},expression:"vendor.nama"}}),t("CInput",{attrs:{type:"text",description:"Masukan Nomer Rekening",autocomplete:"no_rekening",label:"Nomer Rekening",horizontal:"",placeholder:"Masukan Nomer Rekening"},model:{value:e.vendor.no_rekening,callback:function(a){e.$set(e.vendor,"no_rekening",a)},expression:"vendor.no_rekening"}}),t("CInputFile",{ref:"file",staticClass:"mt-4 mb-4",attrs:{label:"Foto Vendor",horizontal:"",id:"file"},on:{change:e.handleFile}}),t("CInput",{attrs:{type:"text",description:"Masukan Email",autocomplete:"email",label:"Email",horizontal:"",placeholder:"Masukan Email"},model:{value:e.vendor.email,callback:function(a){e.$set(e.vendor,"email",a)},expression:"vendor.email"}}),t("CInput",{attrs:{type:"text",description:"Masukan Whatsapp",autocomplete:"wa_hp",label:"Whatsapp",horizontal:"",placeholder:"Masukan Whatsapp"},model:{value:e.vendor.wa_hp,callback:function(a){e.$set(e.vendor,"wa_hp",a)},expression:"vendor.wa_hp"}}),t("CInput",{attrs:{type:"text",description:"Masukan Perusahaan",autocomplete:"nama_instansi",label:"Perusahaan",horizontal:"",placeholder:"Masukan Perusahaan"},model:{value:e.vendor.nama_instansi,callback:function(a){e.$set(e.vendor,"nama_instansi",a)},expression:"vendor.nama_instansi"}}),t("CInput",{attrs:{type:"text",description:"Masukan Karakteristik Perusahaan",autocomplete:"karakteristik_perusahaan",label:"Karakteristik Perusahaan",horizontal:"",placeholder:"Masukan Karakteristik Perusahaan"},model:{value:e.vendor.karakteristik_perusahaan,callback:function(a){e.$set(e.vendor,"karakteristik_perusahaan",a)},expression:"vendor.karakteristik_perusahaan"}}),t("CTextarea",{attrs:{label:"Masukan Alamat Vendor",placeholder:"Masukan Alamat Vendor",horizontal:"",rows:"3"},model:{value:e.vendor.alamat,callback:function(a){e.$set(e.vendor,"alamat",a)},expression:"vendor.alamat"}}),t("div",[t("img",{attrs:{src:e.uri+e.vendor.foto,width:"80",height:"80"}})])],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(a){return a.preventDefault(),e.updateVendor(a)}}},[t("i",{staticClass:"fa fa-edit mr-2"}),e._v(e._s(e.label)+" ")])],1)],1)],1)},r=[],o=t("8e44"),i={name:"addVendor",data:function(){return{uri:localStorage.base_uri,label:"Simpan Perubahan",vendor:{nama:null,foto:null,email:null,wa_hp:null,alamat:null,no_rekening:null,nama_instansi:null,karakteristik_perusahaan:null},validMsg:!1,errors:[],data:JSON.parse(localStorage.user)}},methods:{handleFile:function(e,a){var t=this;e=e[0];var n=e.name.substring(e.name.lastIndexOf(".")+1),r=["gif","png","jpg","jpeg"],o=e;if(0==r.includes(n))return this.$swal("File tidak valid","harap upload gambar yah :)","warning"),setTimeout((function(){t.$swal.close()}),2e3),a.target.value="",!1;console.log(o),this.vendor.foto=o},checkImage:function(e){var a=this,t=new Image;t.onload=function(){return console.log("ada"),a.image=1,!0},t.onerror=function(){return console.log("tidak ada"),!1},t.src=e},getData:function(){var e=this,a=new Headers;a.append("Authorization","bearer "+localStorage.getItem("token"));var t={method:"POST",headers:a,redirect:"follow"};Object(o["g"])(this,localStorage.base_api+"vendor/"+this.$route.params.id,t).then((function(a){console.log(a),e.vendor=a})).catch((function(a){return e.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){e.$swal.close()}),1500),!1}))},updateVendor:function(){var e=this;if(this.errors=[],this.vendor.nama||this.errors.push("Nama vendor Wajib diisi"),this.vendor.email||this.errors.push("Email Wajib diisi"),this.vendor.wa_hp||this.errors.push("Whatsapp Wajib diisi"),this.vendor.alamat||this.errors.push("Alamat Wajib diisi"),this.vendor.no_rekening||this.errors.push("Nomer rekening Wajib diisi"),this.vendor.nama_instansi||this.errors.push("Data Perusahaan wajib diisi"),this.vendor.karakteristik_perusahaan||this.errors.push("Data Karakteristik Perusahaan wajib diisi"),!this.errors.length){var a=new FormData;a.append("nama",this.vendor.nama),a.append("email",this.vendor.email),a.append("wa_hp",this.vendor.wa_hp),a.append("alamat",this.vendor.alamat),a.append("no_rekening",this.vendor.no_rekening),a.append("nama_instansi",this.vendor.nama_instansi),a.append("karakteristik_perusahaan",this.vendor.karakteristik_perusahaan),null!=this.vendor.foto&&a.append("foto",this.vendor.foto),this.label="Loading...",this.$http.post(localStorage.base_api+"vendor/edit/"+this.$route.params.id,a,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){e.label="Simpan Perubahan",e.$swal("Data vendor berhasil diperbaharui","Mohon tunggu sebentar...","success"),setTimeout((function(){e.$swal.close(),e.$router.push("/vendor")}),1500)})).catch((function(a){return e.label="Simpan Perubahan",console.log(a.response),401==a.response.status?(e.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){e.$swal.close(),e.$router.replace({path:"/login"})}),1500)):500==a.response.status&&(e.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){e.$swal.close()}),1500)),!1}))}}},created:function(){3!=this.data.level&&4!=this.data.level&&6!=this.data.level&&7!=this.data.level||this.$router.push("/"),this.getData()}},s=i,l=t("2877"),u=Object(l["a"])(s,n,r,!1,null,null,null);a["default"]=u.exports},"8e44":function(e,a,t){"use strict";function n(e,a,t,n,r){return new Promise((function(o,i){e.$http.post(a,t,n).then((function(e){var a=URL.createObjectURL(new Blob([e.data],{type:"application/vnd.ms-excel"})),t=document.createElement("a");t.href=a,t.setAttribute("download",r),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(e){i(e)}))}))}function r(e,a,t,n){return new Promise((function(e,r){fetch(a,t).then((function(e){return e.json()})).then((function(e){var a=URL.createObjectURL(new Blob([e],{type:"application/vnd.ms-excel"})),t=document.createElement("a");t.href=a,t.setAttribute("download",n),document.body.appendChild(t),t.click()})).then((function(){e()})).catch((function(e){r(e)}))}))}function o(e,a,t,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,i){"get"==r?e.$http.get(a,t).then((function(e){var a=URL.createObjectURL(new Blob([e.data],{type:"application/pdf"})),t=document.createElement("a");t.href=a,t.setAttribute("download",n),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(e){i(e)})):e.$http.post(a,t).then((function(e){var a=URL.createObjectURL(new Blob([e.data],{type:"application/pdf"})),t=document.createElement("a");t.href=a,t.setAttribute("download",n),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(e){i(e)}))}))}function i(e){return new Promise((function(a,t){e.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(e){for(var a=[],t=[],n=0;n<e.data.length;n++){var r=new Date(e.data[n].date_line),o=new Date(r.setDate(r.getDate()-2));a.push({date:o,data:e.data[n],link:"po/detail/"+e.data[n].id})}for(var i=0;i<a.length;i++){var s=new Date,l=new Date(a[i].date);s==l&&t.push({date:a[i].date,data:a[i]})}return localStorage.setItem("notif",JSON.stringify(a)),a})).then((function(e){return a(e)})).catch((function(e){return t(e)}))}))}function s(e,a){return new Promise((function(t,n){var r=-1;Promise.all(e.map((function(e){return r++,fetch(e,a[r])}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){t(e)})).catch((function(e){return n(e)}))}))}function l(e,a,t,n){return new Promise((function(n,r){fetch(a,t).then((function(a){return 401==a.status?(e.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){e.$swal.close(),e.$store.dispatch("logout").then((function(){return e.$router.replace("/login")}))}),1500),!1):500==a.status?(e.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){e.$swal.close()}),1500),!1):a.json()})).then((function(e){return n(e)})).catch((function(e){return r(e)}))}))}function u(e,a,t){return new Promise((function(n,r){fetch(a,t).then((function(a){return 401==a.status?(e.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){e.$swal.close(),e.$store.dispatch("logout").then((function(){return e.$router.replace("/login")}))}),1500),!1):500==a.status?(e.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){e.$swal.close()}),1500),!1):a.json()})).then((function(e){return n(e)})).catch((function(e){return r(e)}))}))}t.d(a,"c",(function(){return n})),t.d(a,"d",(function(){return r})),t.d(a,"e",(function(){return o})),t.d(a,"a",(function(){return i})),t.d(a,"f",(function(){return s})),t.d(a,"g",(function(){return l})),t.d(a,"b",(function(){return u}))}}]);
//# sourceMappingURL=chunk-52701520.57e5fe72.js.map