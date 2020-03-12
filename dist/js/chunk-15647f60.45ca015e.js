(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15647f60"],{5050:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("CCard",[n("CCardHeader",[n("b",[t._v("Edit")]),t._v(" Stock In Out ")]),n("CCardBody",[n("CForm",{staticClass:"mt-4"},[n("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[n("CCol",{attrs:{md:"8",sm:"12"}},[n("CSelect",{attrs:{label:"Pilih Barang",horizontal:"",options:t.barang},on:{"update:value":t.assignBarang},model:{value:t.stockinout.id_barang,callback:function(a){t.$set(t.stockinout,"id_barang",a)},expression:"stockinout.id_barang"}}),n("CInput",{attrs:{type:"text",description:t.validator.qty_msg,"is-valid":t.validator.qty,autocomplete:"qty",label:"Quantity Barang",horizontal:"",placeholder:"Masukan qty Barang"},on:{input:function(a){t.stockinout.qty.length<1?t.validator.qty=!1:t.validator.qty=!0}},model:{value:t.stockinout.qty,callback:function(a){t.$set(t.stockinout,"qty",a)},expression:"stockinout.qty"}}),n("CSelect",{attrs:{label:"Type",horizontal:"",options:t.type},on:{"update:value":t.assignType},model:{value:t.stockinout.type,callback:function(a){t.$set(t.stockinout,"type",a)},expression:"stockinout.type"}}),n("CInput",{attrs:{type:"date",description:t.validator.tanggal_msg,"is-valid":t.validator.tanggal,autocomplete:"tanggal",label:"Tanggal Stock In Out",horizontal:"",placeholder:"Masukan tanggal Stock In Out"},on:{input:function(a){t.stockinout.tanggal.length<1?t.validator.tanggal=!1:t.validator.tanggal=!0}},model:{value:t.stockinout.tanggal,callback:function(a){t.$set(t.stockinout,"tanggal",a)},expression:"stockinout.tanggal"}}),n("CTextarea",{attrs:{horizontal:"",label:"Masukan Alasan",description:t.validator.alasan_msg,"is-valid":t.validator.alasan,rows:"4"},on:{input:function(a){t.stockinout.alasan.length<1?t.validator.alasan=!1:t.validator.alasan=!0}},model:{value:t.stockinout.alasan,callback:function(a){t.$set(t.stockinout,"alasan",a)},expression:"stockinout.alasan"}})],1),n("CCol",{attrs:{md:"2",sm:"12"}},[n("div",[n("button",{staticClass:"btn btn-success",on:{click:function(a){a.preventDefault(),t.openBarangModal=!0}}},[n("i",{staticClass:"fa fa-search mr-1"}),t._v("Cari Barang")])])])],1)],1)],1),n("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[n("CButton",{attrs:{type:"submit",color:"primary"},on:{click:function(a){return a.preventDefault(),t.updateStockInOut(a)}}},[n("i",{staticClass:"fa fa-edit mr-1"}),t._v(t._s(t.label)+" ")])],1)],1),n("CModal",{attrs:{show:t.openBarangModal,"no-close-on-backdrop":!0,title:"Cari Barang",size:"lg",color:"dark"},on:{"update:show":function(a){t.openBarangModal=a}},scopedSlots:t._u([{key:"header",fn:function(){return[n("h6",{staticClass:"modal-title"},[t._v("Cari Barang")]),n("CButtonClose",{staticClass:"text-white",on:{click:function(a){t.openBarangModal=!1}}})]},proxy:!0}])},[n("CInput",{staticClass:"m-4",attrs:{type:"text",description:"Ketik minimal 3 huruf untuk melihat hasil",label:"Cari Barang",horizontal:"",placeholder:"Masukan disc"},model:{value:t.barangKeyword,callback:function(a){t.barangKeyword=a},expression:"barangKeyword"}}),n("v-client-table",{staticClass:"m-4",attrs:{data:t.searchBarang,columns:t.searchBarangFields,options:t.searchBarangOptions,id:"search-barang-table"},scopedSlots:t._u([{key:"aksi",fn:function(a){return n("div",{},[n("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.assignBarang(a.row.id)}}},[t._v("Pilih")])])}}])})],1)],1)},o=[],i=n("8e44"),r={name:"EditStockInOut",data:function(){return{barangDetail:[],barangKeyword:null,openBarangModal:!1,searchBarangFields:["kode_barang","nama_barang","stock","satuan","aksi"],searchBarangOptions:{headings:{kode_barang:"Kode",nama_barang:"Nama",stock:"Stok",satuan:"Satuan",aksi:"Aksi"},sortable:["kode_barang","nama_barang","stock","satuan"],filterable:["kode_barang","nama_barang","stock","satuan"],columnsClasses:{kode_barang:"align-middle",nama_barang:"align-middle",stock:"text-center align-middle",satuan:"text-center align-middle",aksi:"text-center align-middle"}},searchBarang:[],barangselected:1,barang:[],validator:{type:null,type_msg:null,qty:null,qty_msg:null,tanggal:null,tanggal_msg:null},stockinout:{id:null,id_barang:1,nama_barang:null,type:null,qty:0,tanggal:null,alasan:null},errors:[],label:"Simpan Perubahaan",type:[{value:1,label:"In"},{value:2,label:"Out"}]}},watch:{barangKeyword:function(t){if(t.length>=3&&(null!=t||""!=t)){var a=this.barangDetail.filter((function(a){return a.nama_barang.toLowerCase().indexOf(t)>-1}));a.length>0?this.searchBarang=a:this.searchBarang=[]}}},methods:{getBarang:function(){var t=this;this.$http.get(localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){t.barangDetail=a.data;for(var n=0;n<a.data.length;n++){var e={};e.value=a.data[n].id,e.label=a.data[n].nama_barang,t.barang.push(e)}})).catch((function(a){if(401==a.response.status)t.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){t.$router.replace({path:"/login"})})).catch((function(t){return alert("An error occured when get data :("),!1}));else if(500===a.response.status)return t.smallModal=!1,alert("Something wrong with the server"),!1}))},assignBarang:function(t){1==this.openBarangModal&&(this.openBarangModal=!1),this.stockinout.id_barang=t,this.barang.forEach((function(a){a.id==t&&(this.stockinout.nama_barang=a.nama_barang)}))},updateStockInOut:function(){var t=this;if(this.errors=[],this.stockinout.type||(this.validator.type=!1,this.validator.type_msg="Harap type barang",this.errors.push("type karyawan kosong")),this.stockinout.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi quantiy barang",this.errors.push("qty karyawan kosong")),this.stockinout.tanggal||(this.validator.tanggal=!1,this.validator.tanggal_msg="Harap isi tanggal stock in out",this.errors.push("tanggal stock in out kosong")),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...";var a=new Headers;a.append("Authorization","bearer "+localStorage.token);this.stockinout;this.$http.post(localStorage.base_api+"stock/edit/"+this.$route.params.id,this.stockinout,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(a){t.label="Tambah Stock In Out",t.$swal("Data Stock In Out berhasil diupdate","Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push({path:"/stock-in-out"})}),2e3)})).catch((function(a){return console.log(a),401!=a.response.status?(t.label="Tambah Barang",console.error(a),t.$swal("Tidak bisa menambah data","hubungi pengembanya","danger"),setTimeout((function(){t.$swal.close()}),2e3),!1):(t.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),t.$swal("Sesi login kamu udah habis","login lagi yah","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),2e3)})).catch((function(a){return t.$swal("Tidak bisa menambah data","hubungi pengembanya","danger"),setTimeout((function(){t.$swal.close()}),2e3),!1})),!1)}))}},created:function(){var t=this;1!=localStorage.level&&2!=localStorage.level&&4!=localStorage.level&&this.$router.push("/"),this.getBarang(),Object(i["f"])(this,localStorage.base_api+"stock/"+this.$route.params.id,{method:"POST",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(a){t.stockinout=a})).catch((function(t){return console.error(t)}))}},s=r,l=n("2877"),u=Object(l["a"])(s,e,o,!1,null,null,null);a["default"]=u.exports},"8e44":function(t,a,n){"use strict";function e(t,a,n,e,o){return new Promise((function(i,r){t.$http.post(a,n,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=a,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function o(t,a,n,e){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,r){"get"==o?t.$http.get(a,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=a,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)})):t.$http.post(a,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=a,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function i(t){return new Promise((function(a,n){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var a=[],n=0;n<t.data.length;n++){var e=(new Date).setHours(0,0,0,0),o=new Date(t.data[n].date_line);e=new Date(e),o=new Date(o.setDate(o.getDate()-2)),e.getTime()==o.getTime()&&a.push({date:o,data:t.data[n],link:"po/detail/"+t.data[n].id})}return localStorage.setItem("notif",JSON.stringify(a)),a})).then((function(t){return a(t)})).catch((function(t){return n(t)}))}))}function r(t,a){return new Promise((function(n,e){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,a[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return e(t)}))}))}function s(t,a,n,e){return new Promise((function(e,o){fetch(a,n).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return e(t)})).catch((function(t){return o(t)}))}))}function l(t,a,n){return new Promise((function(e,o){fetch(a,n).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return e(t)})).catch((function(t){return o(t)}))}))}n.d(a,"c",(function(){return e})),n.d(a,"d",(function(){return o})),n.d(a,"a",(function(){return i})),n.d(a,"e",(function(){return r})),n.d(a,"f",(function(){return s})),n.d(a,"b",(function(){return l}))}}]);
//# sourceMappingURL=chunk-15647f60.45ca015e.js.map