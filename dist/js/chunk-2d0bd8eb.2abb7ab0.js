(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd8eb"],{"2d03":function(a,t,n){"use strict";n.r(t);var o=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("CCard",[n("CCardHeader",[n("b",[a._v("Tambah")]),a._v(" Stock In Out ")]),n("CCardBody",[n("CForm",{staticClass:"mt-4"},[n("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[n("CCol",{attrs:{sm:"8"}},[n("CSelect",{attrs:{placeholder:"Pilih Barang",label:"Barang",horizontal:"",options:a.barang},on:{"update:value":a.assignBarang},model:{value:a.stockinout.id_barang,callback:function(t){a.$set(a.stockinout,"id_barang",t)},expression:"stockinout.id_barang"}}),n("CInput",{attrs:{type:"text",description:a.validator.qty_msg,"is-valid":a.validator.qty,autocomplete:"qty",label:"Quantity Barang",horizontal:"",placeholder:"Masukan qty Barang"},on:{input:function(t){a.stockinout.qty.length<1?a.validator.qty=!1:a.validator.qty=!0}},model:{value:a.stockinout.qty,callback:function(t){a.$set(a.stockinout,"qty",t)},expression:"stockinout.qty"}}),n("CSelect",{attrs:{placeholder:"Pilih Type",label:"Type",horizontal:"",options:a.type},on:{"update:value":a.assignType},model:{value:a.stockinout.type,callback:function(t){a.$set(a.stockinout,"type",t)},expression:"stockinout.type"}}),n("CInput",{attrs:{type:"date",description:a.validator.tanggal_msg,"is-valid":a.validator.tanggal,autocomplete:"tanggal",label:"Tanggal Stock In Out",horizontal:"",placeholder:"Masukan tanggal Stock In Out"},on:{input:function(t){a.stockinout.tanggal.length<1?a.validator.tanggal=!1:a.validator.tanggal=!0}},model:{value:a.stockinout.tanggal,callback:function(t){a.$set(a.stockinout,"tanggal",t)},expression:"stockinout.tanggal"}}),n("CTextarea",{attrs:{label:"Masukan Alasan",description:a.validator.alasan_msg,"is-valid":a.validator.alasan,horizontal:"",rows:"3"},on:{input:function(t){a.stockinout.alasan.length<1?a.validator.alasan=!1:a.validator.alasan=!0}},model:{value:a.stockinout.alasan,callback:function(t){a.$set(a.stockinout,"alasan",t)},expression:"stockinout.alasan"}})],1)],1)],1)],1),n("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[n("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(t){return t.preventDefault(),a.addStockInOut(t)}}},[n("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},e=[],l={name:"AddStockInOut",data:function(){return{barangselected:1,barang:[],validator:{qty:null,qty_msg:null,tanggal:null,tanggal_msg:null},stockinout:{id_barang:1,nama_barang:null,type:1,qty:0,tanggal:null,alasan:null},type:[{value:1,label:"In"},{value:2,label:"Out"}],errors:[],label:"Tambah Stock In Out"}},methods:{assignType:function(a){this.stockinout.type=a},getBarang:function(){var a=this;this.$http.get(localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var n=0;n<t.data.length;n++){var o={};o.value=t.data[n].id,o.label=t.data[n].nama_barang,a.barang.push(o)}})).catch((function(t){if(401==t.response.status)a.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){a.$router.replace({path:"/login"})})).catch((function(a){return alert("An error occured when get data :("),!1}));else if(500===t.response.status)return a.smallModal=!1,alert("Something wrong with the server"),!1}))},assignBarang:function(a){this.stockinout.id_barang=a,this.barang.forEach((function(t){t.id==a&&(this.stockinout.nama_barang=t.nama_barang)}))},addStockInOut:function(){var a=this;if(this.errors=[],this.stockinout.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi quantiy barang",this.errors.push("qty karyawan kosong")),this.stockinout.tanggal||(this.validator.tanggal=!1,this.validator.tanggal_msg="Harap isi tanggal stock in out",this.errors.push("tanggal stock in out kosong")),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.$http.post(localStorage.base_api+"stock",this.stockinout,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(t){a.label="Tambah Stock In Out",a.$swal(t.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push({path:"/stock-in-out"})}),2e3),console.log(t)})).catch((function(t){return 401!=t.response.status?(a.label="Tambah Barang",console.error(t),a.$swal("Tidak bisa menambah data","hubungi pengembanya","danger"),setTimeout((function(){a.$swal.close()}),2e3),!1):(a.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),a.$swal("Sesi login kamu udah habis","login lagi yah","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),2e3)})).catch((function(t){return a.$swal("Tidak bisa menambah data","hubungi pengembanya","danger"),setTimeout((function(){a.$swal.close()}),2e3),!1})),!1)}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&4!=localStorage.level&&this.$router.push("/"),this.getBarang()}},s=l,i=n("2877"),r=Object(i["a"])(s,o,e,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0bd8eb.2abb7ab0.js.map