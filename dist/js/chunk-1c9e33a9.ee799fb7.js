(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c9e33a9"],{"8e44":function(a,t,e){"use strict";function n(a,t,e,n,r){return new Promise((function(s,o){a.$http.post(t,e,n).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=t,e.setAttribute("download",r),document.body.appendChild(e),e.click()})).then((function(){s()})).catch((function(a){o(a)}))}))}function r(a,t,e,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return new Promise((function(o,i){"get"==r?a.$http.get(t,e).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),e=document.createElement("a");e.href=t,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(a){i(a)})):a.$http.post(t,s,e).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),e=document.createElement("a");e.href=t,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(a){i(a)}))}))}function s(a){return new Promise((function(t,e){i(a,localStorage.base_api+"po",{method:"post",headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){for(var t=[],e=0;e<a.length;e++){var n=(new Date).setHours(0,0,0,0),r=new Date(a[e].date_line);n=new Date(n),r=new Date(r.setDate(r.getDate()-2)),n.getTime()==r.getTime()&&t.push({date:r,data:a[e],link:"po/detail/"+a[e].id})}return localStorage.setItem("notif",JSON.stringify(t)),t})).then((function(a){return t(a)})).catch((function(a){return e(a)}))}))}function o(a,t){return new Promise((function(e,n){var r=-1;Promise.all(a.map((function(a){return r++,fetch(a,t[r])}))).then((function(a){return Promise.all(a.map((function(a){return a.json()})))})).then((function(a){e(a)})).catch((function(a){return n(a)}))}))}function i(a,t,e,n){return new Promise((function(n,r){fetch(t,e).then((function(t){return 401==t.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==t.status?(a.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):t.json()})).then((function(a){return n(a)})).catch((function(a){return r(a)}))}))}function l(a,t,e){return new Promise((function(n,r){fetch(t,e).then((function(t){return 401==t.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==t.status?(a.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):t.json()})).then((function(a){return n(a)})).catch((function(a){return r(a)}))}))}e.d(t,"c",(function(){return n})),e.d(t,"d",(function(){return r})),e.d(t,"a",(function(){return s})),e.d(t,"e",(function(){return o})),e.d(t,"f",(function(){return i})),e.d(t,"b",(function(){return l}))},fb5f:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("CCard",[e("CCardHeader",[e("b",[a._v("Tambah")]),a._v(" Request Barang ")]),e("CCardBody",[e("CForm",{staticClass:"mt-4"},[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{attrs:{sm:"12",md:"8"}},[e("CSelect",{attrs:{label:"Barang",horizontal:"",options:a.barang},on:{"update:value":a.assignBarang},model:{value:a.request_po.id_barang,callback:function(t){a.$set(a.request_po,"id_barang",t)},expression:"request_po.id_barang"}}),e("CInput",{attrs:{type:"date",label:"Tanggal",horizontal:"",description:a.validator.date_msg,"is-valid":a.validator.date},model:{value:a.request_po.date,callback:function(t){a.$set(a.request_po,"date",t)},expression:"request_po.date"}}),e("CInput",{attrs:{type:"number",label:"Quantity",horizontal:"",description:a.validator.qty_msg,"is-valid":a.validator.qty},model:{value:a.request_po.qty,callback:function(t){a.$set(a.request_po,"qty",t)},expression:"request_po.qty"}}),e("CTextarea",{attrs:{label:"Keterangan",description:a.validator.keterangan_msg,"is-valid":a.validator.keterangan,horizontal:"",rows:"3"},model:{value:a.request_po.keterangan,callback:function(t){a.$set(a.request_po,"keterangan",t)},expression:"request_po.keterangan"}}),e("CSelect",{attrs:{label:"Status",horizontal:"",options:a.status},on:{"update:value":a.assignStatus},model:{value:a.request_po.status,callback:function(t){a.$set(a.request_po,"status",t)},expression:"request_po.status"}})],1),e("CCol",{attrs:{md:"2",sm:"12"}},[e("div",[e("button",{staticClass:"btn btn-success",on:{click:function(t){t.preventDefault(),a.openBarangModal=!0}}},[e("i",{staticClass:"fa fa-search mr-1"}),a._v("Cari Barang")])])])],1)],1)],1),e("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[e("CButton",{attrs:{type:"submit",color:"primary"},on:{click:function(t){return t.preventDefault(),a.addRequestPO(t)}}},[e("i",{staticClass:"fa fa-plus mr-2"}),a._v(a._s(a.label)+" ")])],1)],1),e("CModal",{attrs:{show:a.openBarangModal,"no-close-on-backdrop":!0,title:"Cari Barang",size:"lg",color:"dark"},on:{"update:show":function(t){a.openBarangModal=t}},scopedSlots:a._u([{key:"header",fn:function(){return[e("h6",{staticClass:"modal-title"},[a._v("Cari Barang")]),e("CButtonClose",{staticClass:"text-white",on:{click:function(t){a.openBarangModal=!1}}})]},proxy:!0}])},[e("CInput",{staticClass:"m-4",attrs:{type:"text",description:"Ketik minimal 3 huruf untuk melihat hasil",label:"Cari Barang",horizontal:"",placeholder:"Masukan disc"},model:{value:a.barangKeyword,callback:function(t){a.barangKeyword=t},expression:"barangKeyword"}}),e("v-client-table",{staticClass:"m-4",attrs:{data:a.searchBarang,columns:a.searchBarangFields,options:a.searchBarangOptions,id:"search-barang-table"},scopedSlots:a._u([{key:"aksi",fn:function(t){return e("div",{},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return a.assignBarang(t.row.id)}}},[a._v("Pilih")])])}}])})],1)],1)},r=[],s=e("8e44"),o={name:"AddRequestPO",data:function(){return{barangDetail:[],barangKeyword:null,openBarangModal:!1,searchBarangFields:["kode_barang","nama_barang","stock","satuan","aksi"],searchBarangOptions:{headings:{kode_barang:"Kode",nama_barang:"Nama",stock:"Stok",satuan:"Satuan",aksi:"Aksi"},sortable:["kode_barang","nama_barang","stock","satuan"],filterable:["kode_barang","nama_barang","stock","satuan"],columnsClasses:{kode_barang:"align-middle",nama_barang:"align-middle",stock:"text-center align-middle",satuan:"text-center align-middle",aksi:"text-center align-middle"}},searchBarang:[],statusselected:1,barang:[],status:[{value:"000",label:"Pilih Status"},{value:1,label:"Request"},{value:2,label:"Proses"},{value:3,label:"Dikirim"},{value:4,label:"Selesai"},{value:5,label:"Batal"}],errors:[],label:"Tambah Request Barang",validator:{date:null,qty:null,keterangan:null,date_msg:null,qty_msg:null,keterangan_msg:null},request_po:{id_barang:null,date:null,qty:null,keterangan:null,status:null}}},watch:{barangKeyword:function(a){if(a.length>=3&&(null!=a||""!=a)){var t=this.barangDetail.filter((function(t){return t.nama_barang.toLowerCase().indexOf(a)>-1}));t.length>0?this.searchBarang=t:this.searchBarang=[]}}},methods:{assignBarang:function(a){1==this.openBarangModal&&(this.openBarangModal=!1),this.request_po.id_barang=a},assignStatus:function(a){this.request_po.status=a},addRequestPO:function(){var a=this;if(this.label="Loading...",this.errors=[],this.request_po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi tanggal",this.errors.push("date karyawan kosong")),this.request_po.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi kuantitas barang",this.errors.push("qty karyawan kosong")),this.request_po.keterangan||(this.validator.keterangan=!1,this.validator.keterangan_msg="Harap isi keterangan",this.errors.push("keterangan karyawan kosong")),this.request_po.id_barang&&"000"!=this.request_po.id_barang||(this.errors.push("Harap pilih barang"),this.$swal("Harap pilih barang","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.request_po.status&&"000"!=this.request_po.status||(this.errors.push("Harap pilih status"),this.$swal("Harap pilih status","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.errors.length)return this.label="Tambah Request Barang",console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.$http.post(localStorage.base_api+"tambah/request/barang",this.request_po,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(t){a.label="Tambah Request Barang",a.$swal("Penambahan Request Barang berhasil","Mohon tunggu sebentar","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/data-request-barang")}),1500)})).catch((function(t){return a.$swal("Penambahan Request Barang gagal","Mohon tunggu sebentar","error"),setTimeout((function(){return a.$swal.close()}),1500),!1}))}},created:function(){var a=this;this.barang.push({value:"000",label:"Pilih Barang"}),1!=localStorage.level&&2!=localStorage.level&&6!=localStorage.level&&5!=localStorage.level&&this.$router.push("/"),Object(s["f"])(this,localStorage.base_api+"barang",{method:"post",headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){a.barangDetail=t;for(var e=0;e<t.length;e++){var n={};n.value=t[e].id,n.label=t[e].nama_vendor+" - "+t[e].nama_barang,a.barang.push(n)}a.request_po.id_barang=a.barang[0].id})).catch((function(t){return a.$swal("Tidak bisa mengambil data barang","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1}))}},i=o,l=e("2877"),u=Object(l["a"])(i,n,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1c9e33a9.ee799fb7.js.map