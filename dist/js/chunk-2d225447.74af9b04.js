(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225447"],{e457:function(a,t,i){"use strict";i.r(t);var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("CCard",[i("CCardHeader",[i("p",[i("b",[a._v("Tambah")]),a._v(" Kwitansi")])]),i("CCardBody",[i("CForm",{staticClass:"mt-4"},[i("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[i("CCol",{attrs:{sm:"8"}},[i("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[i("small",[a._v("Penambahan Kwitansi berhasil!")])]),a.errors.length>0?i("div",a._l(a.errors,(function(t){return i("p",{staticClass:"alert alert-danger"},[i("small",[a._v(a._s(t))])])})),0):a._e(),i("CInput",{attrs:{type:"text",description:"Masukan Nomer Kwitansi",autocomplete:"no_kwitansi",label:"Nomer Kwitansi",horizontal:"",placeholder:"Masukan Nomer Kwitansi"},model:{value:a.kwitansi.no,callback:function(t){a.$set(a.kwitansi,"no",t)},expression:"kwitansi.no"}}),i("CInput",{attrs:{type:"text",description:"Masukan Nama Penerima",autocomplete:"terima_dari",label:"Nama Penerima",horizontal:"",placeholder:"Masukan Nama Penerima"},model:{value:a.kwitansi.terima_dari,callback:function(t){a.$set(a.kwitansi,"terima_dari",t)},expression:"kwitansi.terima_dari"}}),i("CInput",{attrs:{type:"number",description:"Masukan Uang Terbilang",autocomplete:"uang_terbilang",label:"Uang Terbilang",horizontal:"",placeholder:"Masukan Uang Terbilang"},model:{value:a.kwitansi.uang,callback:function(t){a.$set(a.kwitansi,"uang",t)},expression:"kwitansi.uang"}}),i("CInput",{attrs:{type:"number",description:"Masukan Uang Terbuka",autocomplete:"uang_terbuka",label:"Uang Terbuka",horizontal:"",placeholder:"Masukan Uang Terbuka"},model:{value:a.kwitansi.uang_terbuka,callback:function(t){a.$set(a.kwitansi,"uang_terbuka",t)},expression:"kwitansi.uang_terbuka"}}),i("CInput",{attrs:{type:"text",description:"Masukan Guna Pembayaran",autocomplete:"guna_pembayaran",label:"Guna Pembayaran",horizontal:"",placeholder:"Masukan Guna Pembayaran"},model:{value:a.kwitansi.guna_pembayaran,callback:function(t){a.$set(a.kwitansi,"guna_pembayaran",t)},expression:"kwitansi.guna_pembayaran"}})],1)],1)],1)],1),i("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[i("CButton",{attrs:{type:"submit",size:"md",color:"light"},on:{click:function(t){return t.preventDefault(),a.addKwitansi(t)}}},[i("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},n=[],s={name:"AddKwitansi",data:function(){return{label:"Tambah Kwitansi",kwitansi:{no:null,terima_dari:null,uang_terbuka:null,uang:null,guna_pembayaran:null},validMsg:!1,errors:[]}},methods:{addKwitansi:function(){var a=this;this.errors=[],this.kwitansi.no||this.errors.push("Nomer Kwitansi Wajib diisi"),this.kwitansi.terima_dari||this.errors.push("Nama penerima wajib diisi"),this.kwitansi.uang||this.errors.push("Uang Terbilang Wajib diisi"),this.kwitansi.uang_terbuka||this.errors.push("Uang Terbuka Wajib diisi"),this.kwitansi.guna_pembayaran||this.errors.push("Guan Pembayaran Wajib diisi"),this.errors.length||(this.label="Loading...",this.$http.post("https://young-temple-67589.herokuapp.com/api/kwitansi",this.kwitansi,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){a.label="Tambah Kwitansi",a.$swal("Kwitansi berhasil ditambah","Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/kwitansi")}),1500)})).catch((function(t){return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),!1})))}}},r=s,l=i("2877"),u=Object(l["a"])(r,e,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d225447.74af9b04.js.map