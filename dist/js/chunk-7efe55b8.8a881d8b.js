(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7efe55b8"],{4211:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[a._v("Tambah")]),a._v(" Karyawan")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"8"}},[t("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[t("small",[a._v("Penambahan Karyawan berhasil!")])]),t("CInput",{attrs:{type:"text",description:a.validator.no_karyawan_msg,"is-valid":a.validator.no_karyawan,autocomplete:"no_karyawan",label:"Nomer Karyawan",horizontal:"",placeholder:"Masukan Nomer Karyawan"},on:{input:function(n){a.karyawan.no_karyawan.length<1?a.validator.no_karyawan=!1:a.validator.no_karyawan=!0}},model:{value:a.karyawan.no_karyawan,callback:function(n){a.$set(a.karyawan,"no_karyawan",n)},expression:"karyawan.no_karyawan"}}),t("CInput",{attrs:{type:"text",description:a.validator.nama_karyawan_msg,"is-valid":a.validator.nama_karyawan,autocomplete:"nama_karyawan",label:"Nama Karyawan",horizontal:"",placeholder:"Masukan Nama Karyawan"},on:{input:function(n){a.karyawan.nama_karyawan.length<1?a.validator.nama_karyawan=!1:a.validator.nama_karyawan=!0}},model:{value:a.karyawan.nama_karyawan,callback:function(n){a.$set(a.karyawan,"nama_karyawan",n)},expression:"karyawan.nama_karyawan"}}),t("CSelect",{attrs:{label:"Jenis Kelamin",horizontal:"",options:a.jk},on:{"update:value":a.assignJK},model:{value:a.karyawan.jk,callback:function(n){a.$set(a.karyawan,"jk",n)},expression:"karyawan.jk"}}),t("CInputFile",{ref:"file",staticClass:"mt-4 mb-4",attrs:{label:"Foto Karyawan",horizontal:"",id:"file"},on:{change:a.handleFile},model:{value:a.karyawan.foto,callback:function(n){a.$set(a.karyawan,"foto",n)},expression:"karyawan.foto"}}),t("CInput",{attrs:{type:"text",description:a.validator.ktp_msg,"is-valid":a.validator.ktp,autocomplete:"ktp",label:"KTP",horizontal:"",placeholder:"Masukan KTP"},on:{input:function(n){a.karyawan.ktp.length<1?a.validator.ktp=!1:a.validator.ktp=!0}},model:{value:a.karyawan.ktp,callback:function(n){a.$set(a.karyawan,"ktp",n)},expression:"karyawan.ktp"}}),t("CInput",{attrs:{type:"email",description:a.validator.email_msg,"is-valid":a.validator.email,autocomplete:"email",label:"Email",horizontal:"",placeholder:"Masukan Email"},on:{input:function(n){a.karyawan.email.length<1?a.validator.email=!1:a.validator.email=!0}},model:{value:a.karyawan.email,callback:function(n){a.$set(a.karyawan,"email",n)},expression:"karyawan.email"}}),t("CInput",{attrs:{type:"text",description:a.validator.wa_hp_msg,"is-valid":a.validator.wa_hp,autocomplete:"whatsapp",label:"Whatsapp",horizontal:"",placeholder:"Masukan Whatsapp"},on:{input:function(n){a.karyawan.wa_hp.length<1?a.validator.wa_hp=!1:a.validator.wa_hp=!0}},model:{value:a.karyawan.wa_hp,callback:function(n){a.$set(a.karyawan,"wa_hp",n)},expression:"karyawan.wa_hp"}}),t("CTextarea",{attrs:{label:"Masukan Alamat Karyawan",description:a.validator.alamat_msg,"is-valid":a.validator.alamat,horizontal:"",rows:"3"},on:{input:function(n){a.karyawan.alamat.length<1?a.validator.alamat=!1:a.validator.alamat=!0}},model:{value:a.karyawan.alamat,callback:function(n){a.$set(a.karyawan,"alamat",n)},expression:"karyawan.alamat"}}),t("CInput",{attrs:{type:"date",description:a.validator.tgl_masuk_kerja_msg,"is-valid":a.validator.tgl_masuk_kerja,autocomplete:"tgl_masuk_kerja",label:"Tanggal Masuk Kerja",horizontal:"",placeholder:"Masukan Tanggal Masuk Kerja"},on:{input:function(n){a.karyawan.tgl_masuk_kerja.length<1?a.validator.tgl_masuk_kerja=!1:a.validator.tgl_masuk_kerja=!0}},model:{value:a.karyawan.tgl_masuk_kerja,callback:function(n){a.$set(a.karyawan,"tgl_masuk_kerja",n)},expression:"karyawan.tgl_masuk_kerja"}}),t("CInput",{attrs:{type:"text",description:a.validator.npwp_msg,"is-valid":a.validator.npwp,autocomplete:"npwp",label:"NPWP",horizontal:"",placeholder:"Masukan NPWP"},on:{input:function(n){a.karyawan.npwp.length<1?a.validator.npwp=!1:a.validator.npwp=!0}},model:{value:a.karyawan.npwp,callback:function(n){a.$set(a.karyawan,"npwp",n)},expression:"karyawan.npwp"}}),t("CInput",{attrs:{type:"text",description:a.validator.no_rekening_msg,"is-valid":a.validator.no_rekening,autocomplete:"no_rekening",label:"No Rekening",horizontal:"",placeholder:"Masukan No Rekening"},on:{input:function(n){a.karyawan.no_rekening.length<1?a.validator.no_rekening=!1:a.validator.no_rekening=!0}},model:{value:a.karyawan.no_rekening,callback:function(n){a.$set(a.karyawan,"no_rekening",n)},expression:"karyawan.no_rekening"}}),t("CSelect",{attrs:{label:"Jabatan",horizontal:"",options:a.jabatan},on:{"update:value":a.assignJabatan},model:{value:a.jabatanselected,callback:function(n){a.jabatanselected=n},expression:"jabatanselected"}})],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(n){return n.preventDefault(),a.addKaryawan(n)}}},[t("i",{staticClass:"fa fa-plus mr-2"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},r=[],o=t("8e44"),i={name:"AddKaryawan",data:function(){return{label:"Tambah Karyawan",jkselected:1,jabatanselected:6,validator:{no_karyawan_msg:"",no_karyawan:null,nama_karyawan_msg:"",nama_karyawan:null,ktp_msg:"",ktp:null,email_msg:"",email:null,wa_hp_msg:"",wa_hp:null,alamat_msg:"",alamat:null,tgl_masuk_kerja_msg:"",tgl_masuk_kerja:null,npwp_msg:"",npwp:null,no_rekening_msg:"",no_rekening:null},karyawan:{no_karyawan:null,nama:null,ktp:null,jk:1,email:null,wa_hp:null,alamat:null,tgl_masuk_kerja:null,npwp:null,no_rekening:null,id_jabatan:1},validMsg:!1,errors:[],jk:[{value:1,label:"Laki-laki"},{value:2,label:"Perempuan"}],jabatan:[]}},methods:{handleFile:function(a,n){var t=this;a=a[0];var e=a.name.substring(a.name.lastIndexOf(".")+1),r=["gif","png","jpg","jpeg"],o=a;if(0==r.includes(e))return this.$swal("File tidak valid","harap upload gambar yah :)","warning"),setTimeout((function(){t.$swal.close()}),2e3),n.target.value="",!1;console.log(o),this.karyawan.foto=o},getJabatan:function(){var a=this;Object(o["f"])(this,localStorage.base_api+"jabatan",{method:"get",headers:{Authorization:"bearer "+localStorage.token}},"get").then((function(n){for(var t=0;t<n.length;t++){var e={};e.value=n[t].id,e.label=n[t].nama,a.jabatan.push(e)}})).catch((function(n){return a.$swal("Maaf tidak bisa ambil data :(","hubungi pengembangnya","error"),setTimeout((function(){a.$swal.close()}),2e3),console.error(n),!1}))},assignJabatan:function(a){this.karyawan.id_jabatan=a},assignJK:function(a){this.karyawan.jk=a},addKaryawan:function(){var a=this;if(this.errors=[],this.karyawan.no_karyawan||(this.validator.no_karyawan=!1,this.validator.no_karyawan_msg="Harap isi nomer karyawan",this.errors.push("no_karyawan karyawan kosong")),this.karyawan.nama_karyawan||(this.validator.nama_karyawan=!1,this.validator.nama_karyawan_msg="Harap isi nama karyawan",this.errors.push("nama_karyawan konsumen kosong")),this.karyawan.ktp||(this.validator.ktp=!1,this.validator.ktp_msg="Harap isi ktp karyawan",this.errors.push("ktp karyawan kosong")),this.karyawan.email||(this.validator.email=!1,this.validator.email_msg="Harap isi email karyawan",this.errors.push("email karyawan kosong")),this.karyawan.wa_hp||(this.validator.wa_hp=!1,this.validator.wa_hp_msg="Harap isi nomer WA karyawan",this.errors.push("wa_hp karyawan kosong")),this.karyawan.alamat||(this.validator.alamat=!1,this.validator.alamat_msg="Harap isi alamat karyawan",this.errors.push("alamat karyawan kosong")),this.karyawan.tgl_masuk_kerja||(this.validator.tgl_masuk_kerja=!1,this.validator.tgl_masuk_kerja_msg="Harap isi Tanggal masuk kerja karyawan",this.errors.push("tgl_masuk_kerja konsumen kosong")),this.karyawan.npwp||(this.validator.npwp=!1,this.validator.npwp_msg="Harap isi npwp karyawan",this.errors.push("npwp konsumen kosong")),this.karyawan.no_rekening||(this.validator.no_rekening=!1,this.validator.no_rekening_msg="Harap isi nomer rekening konsumen",this.errors.push("no_rekening konsumen kosong")),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...";var n=new FormData;n.append("no_karyawan",this.karyawan.no_karyawan),n.append("nama",this.karyawan.nama_karyawan),n.append("jk",this.karyawan.jk),n.append("alamat",this.karyawan.alamat),n.append("ktp",this.karyawan.ktp),n.append("email",this.karyawan.email),n.append("wa_hp",this.karyawan.wa_hp),n.append("tgl_masuk_kerja",this.karyawan.tgl_masuk_kerja),n.append("npwp",this.karyawan.npwp),n.append("no_rekening",this.karyawan.no_rekening),n.append("id_jabatan",this.karyawan.id_jabatan),null!=this.karyawan.foto&&n.append("foto",this.karyawan.foto),this.$http.post(localStorage.base_api+"karyawan",n,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(n){a.label="Tambah Karyawan",console.warn(n),a.$swal("Data karyawan berhasil ditambah","mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push({path:"/karyawan"})}),2e3)})).catch((function(n){a.label="Tambah Karyawan",a.$swal("Tidak bisa menambah data","Mohon hubungi pengembanya...","error"),setTimeout((function(){return a.$swal.close()}),1500),console.error("Error ASW "+n)}))}},created:function(){this.getJabatan()}},l=i,s=t("2877"),u=Object(s["a"])(l,e,r,!1,null,null,null);n["default"]=u.exports},"8e44":function(a,n,t){"use strict";function e(a,n,t,e,r){return new Promise((function(o,i){a.$http.post(n,t,e).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),t=document.createElement("a");t.href=n,t.setAttribute("download",r),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(a){i(a)}))}))}function r(a,n,t,e){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,i){"get"==r?a.$http.get(n,t).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=n,t.setAttribute("download",e),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(a){i(a)})):a.$http.post(n,t).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=n,t.setAttribute("download",e),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(a){i(a)}))}))}function o(a){return new Promise((function(n,t){a.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var n=[],t=[],e=0;e<a.data.length;e++){var r=new Date(a.data[e].date_line),o=new Date(r.setDate(r.getDate()-2));n.push({date:o,data:a.data[e],link:"/po/"+a.data[e].id})}for(var i=0;i<n.length;i++){var l=new Date,s=new Date(n[i].date);l==s&&t.push({date:n[i].date,data:n[i]})}return localStorage.setItem("notif",JSON.stringify(t)),t})).then((function(a){return n(a)})).catch((function(a){return t(a)}))}))}function i(a,n){return new Promise((function(t,e){var r=-1;Promise.all(a.map((function(a){return r++,fetch(a,n[r])}))).then((function(a){return Promise.all(a.map((function(a){return a.json()})))})).then((function(a){t(a)})).catch((function(a){return e(a)}))}))}function l(a,n,t,e){return new Promise((function(e,r){fetch(n,t).then((function(n){return 401==n.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==n.status?(a.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):n.json()})).then((function(a){return e(a)})).catch((function(a){return r(a)}))}))}function s(a,n,t){return new Promise((function(e,r){fetch(n,t).then((function(n){return 401==n.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==n.status?(a.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):n.json()})).then((function(a){return e(a)})).catch((function(a){return r(a)}))}))}t.d(n,"c",(function(){return e})),t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"f",(function(){return l})),t.d(n,"b",(function(){return s}))}}]);
//# sourceMappingURL=chunk-7efe55b8.8a881d8b.js.map