(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd8eb"],{"2d03":function(t,a,n){"use strict";n.r(a);var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("CCard",[n("CCardHeader",[n("b",[t._v("Tambah")]),t._v(" Stock In Out ")]),n("CCardBody",[n("CForm",{staticClass:"mt-4"},[n("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[n("CCol",{attrs:{sm:"8"}},[n("CSelect",{attrs:{label:"Pilih Barang",horizontal:"",options:t.barang},on:{"update:value":t.assignBarang},model:{value:t.stockinout.id_barang,callback:function(a){t.$set(t.stockinout,"id_barang",a)},expression:"stockinout.id_barang"}}),n("CInput",{attrs:{type:"text",description:t.validator.qty_msg,"is-valid":t.validator.qty,autocomplete:"qty",label:"Quantity Barang",horizontal:"",placeholder:"Masukan qty Barang"},on:{input:function(a){t.stockinout.qty.length<1?t.validator.qty=!1:t.validator.qty=!0}},model:{value:t.stockinout.qty,callback:function(a){t.$set(t.stockinout,"qty",a)},expression:"stockinout.qty"}}),n("CSelect",{attrs:{label:"Type",horizontal:"",options:t.type},on:{"update:value":t.assignType},model:{value:t.stockinout.type,callback:function(a){t.$set(t.stockinout,"type",a)},expression:"stockinout.type"}}),n("CInput",{attrs:{type:"date",description:t.validator.tanggal_msg,"is-valid":t.validator.tanggal,autocomplete:"tanggal",label:"Tanggal Stock In Out",horizontal:"",placeholder:"Masukan tanggal Stock In Out"},on:{input:function(a){t.stockinout.tanggal.length<1?t.validator.tanggal=!1:t.validator.tanggal=!0}},model:{value:t.stockinout.tanggal,callback:function(a){t.$set(t.stockinout,"tanggal",a)},expression:"stockinout.tanggal"}}),n("CTextarea",{attrs:{label:"Masukan Alasan",description:t.validator.alasan_msg,"is-valid":t.validator.alasan,horizontal:"",rows:"3"},on:{input:function(a){t.stockinout.alasan.length<1?t.validator.alasan=!1:t.validator.alasan=!0}},model:{value:t.stockinout.alasan,callback:function(a){t.$set(t.stockinout,"alasan",a)},expression:"stockinout.alasan"}})],1)],1)],1)],1),n("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[n("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(a){return a.preventDefault(),t.addStockInOut(a)}}},[n("i",{staticClass:"fa fa-plus mr-1"}),t._v(t._s(t.label)+" ")])],1)],1)],1)},e=[],s={name:"AddStockInOut",data:function(){return{barangselected:1,barang:[],validator:{qty:null,qty_msg:null,tanggal:null,tanggal_msg:null},stockinout:{id_barang:1,nama_barang:null,type:1,qty:0,tanggal:null,alasan:null},type:[{value:1,label:"In"},{value:2,label:"Out"}],errors:[],label:"Tambah Stock In Out"}},methods:{assignType:function(t){this.stockinout.type=t},getBarang:function(){var t=this;this.$http.get("https://young-temple-67589.herokuapp.com/api/barang",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var n=0;n<a.data.length;n++){var o={};o.value=a.data[n].id,o.label=a.data[n].nama_barang,t.barang.push(o)}})).catch((function(a){if(401==a.response.status)t.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){t.$router.replace({path:"/login"})})).catch((function(t){return alert("An error occured when get data :("),!1}));else if(500===a.response.status)return t.smallModal=!1,alert("Something wrong with the server"),!1}))},assignBarang:function(t){this.stockinout.id_barang=t,this.barang.forEach((function(a){a.id==t&&(this.stockinout.nama_barang=a.nama_barang)}))},addStockInOut:function(){var t=this;if(this.errors=[],this.stockinout.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi quantiy barang",this.errors.push("qty karyawan kosong")),this.stockinout.tanggal||(this.validator.tanggal=!1,this.validator.tanggal_msg="Harap isi tanggal stock in out",this.errors.push("tanggal stock in out kosong")),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.$http.post("https://young-temple-67589.herokuapp.com/api/stock",this.stockinout,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(a){t.label="Tambah Stock In Out",t.$swal(a.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push({path:"/stock-in-out"})}),2e3),console.log(a)})).catch((function(a){return 401!=a.response.status?(t.label="Tambah Barang",console.error(a),t.$swal("Tidak bisa menambah data","hubungi pengembanya","danger"),setTimeout((function(){t.$swal.close()}),2e3),!1):(t.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),t.$swal("Sesi login kamu udah habis","login lagi yah","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),2e3)})).catch((function(a){return t.$swal("Tidak bisa menambah data","hubungi pengembanya","danger"),setTimeout((function(){t.$swal.close()}),2e3),!1})),!1)}))}},created:function(){this.getBarang()}},l=s,i=n("2877"),r=Object(i["a"])(l,o,e,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0bd8eb.759956a7.js.map