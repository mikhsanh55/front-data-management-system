(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e182d"],{"7b6b":function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[a._v("Tambah")]),a._v(" Barang Pesanan")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"8"}},[t("CInput",{attrs:{type:"text",description:a.validator.no_msg,"is-valid":a.validator.no,autocomplete:"no",label:"No Pesanan",horizontal:"",placeholder:"Masukan No Pesanan"},on:{input:function(n){a.barang_pesanan.no.length<1?a.validator.no=!1:a.validator.no=!0}},model:{value:a.barang_pesanan.no,callback:function(n){a.$set(a.barang_pesanan,"no",n)},expression:"barang_pesanan.no"}}),t("CInput",{attrs:{type:"date",description:a.validator.tanggal_msg,"is-valid":a.validator.tanggal,autocomplete:"tanggal",label:"Tanggal",horizontal:"",placeholder:"Masukan tanggal"},on:{input:function(n){a.barang_pesanan.tanggal.length<1?a.validator.tanggal=!1:a.validator.tanggal=!0}},model:{value:a.barang_pesanan.tanggal,callback:function(n){a.$set(a.barang_pesanan,"tanggal",n)},expression:"barang_pesanan.tanggal"}}),t("CTextarea",{attrs:{label:"Masukan Keterangan",horizontal:"",rows:"3"},model:{value:a.barang_pesanan.keterangan,callback:function(n){a.$set(a.barang_pesanan,"keterangan",n)},expression:"barang_pesanan.keterangan"}})],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(n){return n.preventDefault(),a.addBarangPesanan(n)}}},[t("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},s=[],o={name:"AddBarangPesanan",data:function(){return{label:"Tambah Barang Pesanan",validator:{no:null,no_msg:null,tanggal:null,tanggal_msg:null},barang_pesanan:{no:null,tanggal:null,keterangan:null},validMsg:!1,errors:[]}},methods:{addBarangPesanan:function(){var a=this;this.errors=[],this.barang_pesanan.no||(this.validator.no=!1,this.validator.no_msg="Harap isi no karyawan",this.errors.push("no pesanan kosong")),this.barang_pesanan.tanggal||(this.validator.tanggal=!1,this.validator.tanggal_msg="Harap isi tanggal karyawan",this.errors.push("tanggal kosong")),this.errors.length||(console.log(this.barang_pesanan),this.barang_pesanan.tanggal_pesanan=this.barang_pesanan.tanggal,this.label="Loading...",this.$http.post("https://young-temple-67589.herokuapp.com/api/barang/pesanan",this.barang_pesanan,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(n){a.label="Tambah barang pesanan",a.$swal(n.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/barang-pesanan")}),1500)})).catch((function(n){if(401!=n.response.status)return a.label="Tambah barang pesanan",a.$swal("Tidak bisa menambah data","hubungi pengembangnya yah","error"),setTimeout((function(){a.$swal.close()}),1500),!1;a.$store.dispatch("logout").then((function(){var n=window.location.href;return n=n.split("/"),localStorage.setItem("prevPath",n[n.length-1]),a.$swal("Sesi Login kamu udah habis","login lagi yah","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500),!1})).catch((function(n){return a.$swal("Tidak bisa menambah data","hubungi pengembangnya yah","error"),setTimeout((function(){a.$swal.close()}),1500),!1}))})))}}},l=o,r=t("2877"),i=Object(r["a"])(l,e,s,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0e182d.26bb25e5.js.map