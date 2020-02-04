(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d257"],{f5f8:function(a,r,t){"use strict";t.r(r);var e=function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[a._v("Edit")]),a._v(" Kurir")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"8"}},[t("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[t("small",[a._v("Update Data Kurir berhasil!")])]),t("CInput",{attrs:{type:"text",description:"Masukan Nomer Kurir",autocomplete:"no_kurir",label:"Nomer Kurir",horizontal:"",placeholder:"Masukan Nomer Kurir"},model:{value:a.kurir.no_kurir,callback:function(r){a.$set(a.kurir,"no_kurir",r)},expression:"kurir.no_kurir"}}),t("CInput",{attrs:{type:"text",description:"Masukan Nama Kurir",autocomplete:"nama_kurir",label:"Nama Kurir",horizontal:"",placeholder:"Masukan Nama Kurir"},model:{value:a.kurir.nama_kurir,callback:function(r){a.$set(a.kurir,"nama_kurir",r)},expression:"kurir.nama_kurir"}}),t("CSelect",{attrs:{label:"Jenis Kelamin",horizontal:"",options:a.jk},model:{value:a.kurir.jk,callback:function(r){a.$set(a.kurir,"jk",r)},expression:"kurir.jk"}}),t("CInput",{attrs:{type:"email",description:"Masukan Email",autocomplete:"email`",label:"Nama email",horizontal:"",placeholder:"Masukan email"},model:{value:a.kurir.email,callback:function(r){a.$set(a.kurir,"email",r)},expression:"kurir.email"}}),t("CInput",{attrs:{type:"text",description:"Masukan Whatsapp",autocomplete:"whatsapp",label:"Whatsapp",horizontal:"",placeholder:"Masukan Whatsapp"},model:{value:a.kurir.whatsapp,callback:function(r){a.$set(a.kurir,"whatsapp",r)},expression:"kurir.whatsapp"}}),t("CInput",{attrs:{type:"text",description:"Masukan KTP",autocomplete:"ktp",label:"KTP",horizontal:"",placeholder:"Masukan KTP"},model:{value:a.kurir.ktp,callback:function(r){a.$set(a.kurir,"ktp",r)},expression:"kurir.ktp"}}),t("CTextarea",{attrs:{label:"Masukan Alamat",placeholder:"Masukan Alamat",horizontal:"",rows:"3"},model:{value:a.kurir.alamat,callback:function(r){a.$set(a.kurir,"alamat",r)},expression:"kurir.alamat"}}),t("CInput",{attrs:{type:"date",description:"Masukan Tanggal Masuk Kurir",autocomplete:"tgl_masuk",label:"Tanggal Masuk Kurir",horizontal:"",placeholder:"Masukan Tanggal Masuk Kurir"},model:{value:a.kurir.tgl_masuk,callback:function(r){a.$set(a.kurir,"tgl_masuk",r)},expression:"kurir.tgl_masuk"}}),t("CInput",{attrs:{type:"text",description:"Masukan NPWP",autocomplete:"npwp",label:"NPWP",horizontal:"",placeholder:"Masukan NPWP"},model:{value:a.kurir.npwp,callback:function(r){a.$set(a.kurir,"npwp",r)},expression:"kurir.npwp"}}),t("CInput",{attrs:{type:"date",description:"Masukan No Rekening",autocomplete:"no_rekening",label:"No Rekening",horizontal:"",placeholder:"Masukan No Rekening"},model:{value:a.kurir.no_rekening,callback:function(r){a.$set(a.kurir,"no_rekening",r)},expression:"kurir.no_rekening"}}),t("CSelect",{attrs:{label:"Jabatan",horizontal:"",options:a.jabatan},model:{value:a.kurir.jabatan,callback:function(r){a.$set(a.kurir,"jabatan",r)},expression:"kurir.jabatan"}})],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"primary"},on:{click:function(r){return r.preventDefault(),a.addKurir(r)}}},[a._v(" Tambah Kurir ")])],1)],1)],1)},i=[],n={name:"EditKurir",data:function(){return{kurir:{no_kurir:null,nama_kurir:null,jk:null,email:null,whatsapp:null,ktp:null,alamat:null,tgl_masuk:null,npwp:null,no_rekening:null,jabatan:null},jk:[{value:1,label:"Laki-laki"},{value:0,label:"Perempuan"}],jabatan:[{value:0,label:"Kurir Daerah"},{value:1,label:"Kurir Nasional"}],validMsg:!1,errors:[]}},methods:{getData:function(){var a=this,r=new Headers;r.append("Authorization","bearer "+localStorage.token);var t={method:"POST",headers:r,redirect:"follow"};fetch("https://young-temple-67589.herokuapp.com/api/kurir/"+this.$route.params.id,t).then((function(a){return a.json()})).then((function(r){console.log(r.data),a.kurir=r.data})).catch((function(a){return console.log(a),!1}))},addKurir:function(){var a=this;if(this.errors=[],this.kurir.no_kurir||this.errors.push("Nomer Kurir Wajib diisi"),this.kurir.nama_kurir||this.errors.push("Nama Kurir Wajib diisi"),this.kurir.jk||this.errors.push("Jenis kelamin Wajib diisi"),this.kurir.email||this.errors.push("Email Wajib diisi"),this.kurir.whatsapp||this.errors.push("Whatsapp Wajib diisi"),this.kurir.ktp||this.errors.push("Alamat Wajib diisi"),this.kurir.tgl_masuk||this.errors.push("Tanggal Masuk Wajib diisi"),this.kurir.npwp||this.errors.push("Nomer NPWP Wajib diisi"),this.kurir.no_rekening||this.errors.push("Nomer rekening Wajib diisi"),this.kurir.jabatan||this.errors.push("Jabatan Wajib diisi"),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.$http.post("http://localhost:3000/kurir",this.kurir).then((function(){a.$router.push("/kurir")})).catch((function(a){return console.log(a),!1}))}},created:function(){this.getData()}},l=n,u=t("2877"),s=Object(u["a"])(l,e,i,!1,null,null,null);r["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d22d257.44b76952.js.map