(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd8eb"],{"2d03":function(a,t,n){"use strict";n.r(t);var o=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("CCard",[n("CCardHeader",[n("b",[a._v("Tambah")]),a._v(" Stock In Out ")]),n("CCardBody",[n("CForm",{staticClass:"mt-4"},[n("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[n("CCol",{attrs:{md:"8",sm:"12"}},[n("CSelect",{attrs:{label:"Barang",horizontal:"",options:a.barang},on:{"update:value":a.assignBarang},model:{value:a.stockinout.id_barang,callback:function(t){a.$set(a.stockinout,"id_barang",t)},expression:"stockinout.id_barang"}}),n("CInput",{attrs:{type:"text",description:a.validator.qty_msg,"is-valid":a.validator.qty,autocomplete:"qty",label:"Quantity Barang",horizontal:"",placeholder:"Masukan qty Barang"},on:{input:function(t){a.stockinout.qty.length<1?a.validator.qty=!1:a.validator.qty=!0}},model:{value:a.stockinout.qty,callback:function(t){a.$set(a.stockinout,"qty",t)},expression:"stockinout.qty"}}),n("CSelect",{attrs:{label:"Type",horizontal:"",options:a.type},on:{"update:value":a.assignType},model:{value:a.stockinout.type,callback:function(t){a.$set(a.stockinout,"type",t)},expression:"stockinout.type"}}),n("CInput",{attrs:{type:"date",description:a.validator.tanggal_msg,"is-valid":a.validator.tanggal,autocomplete:"tanggal",label:"Tanggal Stock In Out",horizontal:"",placeholder:"Masukan tanggal Stock In Out"},on:{input:function(t){a.stockinout.tanggal.length<1?a.validator.tanggal=!1:a.validator.tanggal=!0}},model:{value:a.stockinout.tanggal,callback:function(t){a.$set(a.stockinout,"tanggal",t)},expression:"stockinout.tanggal"}}),n("CTextarea",{attrs:{label:"Masukan Alasan",description:a.validator.alasan_msg,"is-valid":a.validator.alasan,horizontal:"",rows:"3"},on:{input:function(t){a.stockinout.alasan.length<1?a.validator.alasan=!1:a.validator.alasan=!0}},model:{value:a.stockinout.alasan,callback:function(t){a.$set(a.stockinout,"alasan",t)},expression:"stockinout.alasan"}})],1),n("CCol",{attrs:{md:"2",sm:"12"}},[n("div",[n("button",{staticClass:"btn btn-success",on:{click:function(t){t.preventDefault(),a.openBarangModal=!0}}},[n("i",{staticClass:"fa fa-search mr-1"}),a._v("Cari Barang")])])])],1)],1)],1),n("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[n("CButton",{attrs:{type:"submit",color:"primary"},on:{click:function(t){return t.preventDefault(),a.addStockInOut(t)}}},[n("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label)+" ")])],1)],1),n("CModal",{attrs:{show:a.openBarangModal,"no-close-on-backdrop":!0,title:"Cari Barang",size:"lg",color:"dark"},on:{"update:show":function(t){a.openBarangModal=t}},scopedSlots:a._u([{key:"header",fn:function(){return[n("h6",{staticClass:"modal-title"},[a._v("Cari Barang")]),n("CButtonClose",{staticClass:"text-white",on:{click:function(t){a.openBarangModal=!1}}})]},proxy:!0}])},[n("CInput",{staticClass:"m-4",attrs:{type:"text",description:"Ketik minimal 3 huruf untuk melihat hasil",label:"Cari Barang",horizontal:"",placeholder:"Masukan disc"},model:{value:a.barangKeyword,callback:function(t){a.barangKeyword=t},expression:"barangKeyword"}}),n("v-client-table",{staticClass:"m-4",attrs:{data:a.searchBarang,columns:a.searchBarangFields,options:a.searchBarangOptions,id:"search-barang-table"},scopedSlots:a._u([{key:"aksi",fn:function(t){return n("div",{},[n("button",{staticClass:"btn btn-primary",on:{click:function(n){return a.assignBarang(t.row.id)}}},[a._v("Pilih")])])}}])})],1)],1)},e=[],s={name:"AddStockInOut",data:function(){return{barangDetail:[],barangKeyword:null,openBarangModal:!1,searchBarangFields:["kode_barang","nama_barang","stock","satuan","aksi"],searchBarangOptions:{headings:{kode_barang:"Kode",nama_barang:"Nama",stock:"Stok",satuan:"Satuan",aksi:"Aksi"},sortable:["kode_barang","nama_barang","stock","satuan"],filterable:["kode_barang","nama_barang","stock","satuan"],columnsClasses:{kode_barang:"align-middle",nama_barang:"align-middle",stock:"text-center align-middle",satuan:"text-center align-middle",aksi:"text-center align-middle"}},searchBarang:[],barang:[],validator:{qty:null,qty_msg:null,tanggal:null,tanggal_msg:null},stockinout:{id_barang:null,nama_barang:null,type:null,qty:0,tanggal:null,alasan:null},type:[{value:"000",label:"Pilih Type"},{value:1,label:"In"},{value:2,label:"Out"}],errors:[],label:"Tambah Stock In Out"}},watch:{barangKeyword:function(a){if(a.length>=3&&(null!=a||""!=a)){var t=this.barangDetail.filter((function(t){return t.nama_barang.toLowerCase().indexOf(a)>-1}));t.length>0?this.searchBarang=t:this.searchBarang=[]}}},methods:{assignType:function(a){this.stockinout.type=a},getBarang:function(){var a=this;this.barang.push({value:"000",label:"Pilih Barang"}),this.$http.get(localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){a.barangDetail=t.data;for(var n=0;n<t.data.length;n++){var o={};o.value=t.data[n].id,o.label=t.data[n].nama_vendor+" - "+t.data[n].nama_barang,a.barang.push(o)}})).catch((function(t){if(401==t.response.status)a.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){a.$router.replace({path:"/login"})})).catch((function(a){return alert("An error occured when get data :("),!1}));else if(500===t.response.status)return a.smallModal=!1,alert("Something wrong with the server"),!1}))},assignBarang:function(a){1==this.openBarangModal&&(this.openBarangModal=!1),this.stockinout.id_barang=a,this.barang.forEach((function(t){t.id==a&&(this.stockinout.nama_barang=t.nama_barang)}))},addStockInOut:function(){var a=this;if(this.errors=[],this.stockinout.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi quantiy barang",this.errors.push("qty karyawan kosong")),this.stockinout.tanggal||(this.validator.tanggal=!1,this.validator.tanggal_msg="Harap isi tanggal stock in out",this.errors.push("tanggal stock in out kosong")),this.stockinout.type&&"000"!=this.stockinout.id_barang||(this.errors.push("Harap pilih barang"),this.$swal("Harap pilih barang","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.stockinout.type&&"000"!=this.stockinout.type||(this.errors.push("Harap pilih type"),this.$swal("Harap pilih type","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.$http.post(localStorage.base_api+"stock",this.stockinout,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(t){a.label="Tambah Stock In Out",a.$swal(t.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push({path:"/stock-in-out"})}),2e3)})).catch((function(t){return 401!=t.response.status?(a.label="Tambah Barang",t.response&&console.error(t.response.data.message),a.$swal(t.response.data.message,"hubungi pengembanya","error"),setTimeout((function(){a.$swal.close()}),2e3),a.stockinout={id_barang:null,nama_barang:null,type:null,qty:0,tanggal:null,alasan:null},!1):(a.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),a.$swal("Sesi login kamu udah habis","login lagi yah","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),2e3)})).catch((function(t){return a.$swal("Tidak bisa menambah data","hubungi pengembanya","error"),setTimeout((function(){a.$swal.close()}),2e3),!1})),!1)}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&4!=localStorage.level&&this.$router.push("/"),this.getBarang()}},l=s,i=n("2877"),r=Object(i["a"])(l,o,e,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0bd8eb.b42fa6ce.js.map