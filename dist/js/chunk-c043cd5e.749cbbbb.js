(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c043cd5e"],{"8e44":function(a,n,t){"use strict";function e(a,n,t,e,r){return new Promise((function(o,s){a.$http.post(n,t,e).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),t=document.createElement("a");t.href=n,t.setAttribute("download",r),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(a){s(a)}))}))}function r(a,n,t,e){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,s){"get"==r?a.$http.get(n,t).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=n,t.setAttribute("download",e),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(a){s(a)})):a.$http.post(n,t).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=n,t.setAttribute("download",e),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(a){s(a)}))}))}function o(a){return new Promise((function(n,t){a.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var n=[],t=0;t<a.data.length;t++){var e=(new Date).setHours(0,0,0,0),r=new Date(a.data[t].date_line);e=new Date(e),r=new Date(r.setDate(r.getDate()-2)),e.getTime()==r.getTime()&&n.push({date:r,data:a.data[t],link:"po/detail/"+a.data[t].id})}return localStorage.setItem("notif",JSON.stringify(n)),n})).then((function(a){return n(a)})).catch((function(a){return t(a)}))}))}function s(a,n){return new Promise((function(t,e){var r=-1;Promise.all(a.map((function(a){return r++,fetch(a,n[r])}))).then((function(a){return Promise.all(a.map((function(a){return a.json()})))})).then((function(a){t(a)})).catch((function(a){return e(a)}))}))}function i(a,n,t,e){return new Promise((function(e,r){fetch(n,t).then((function(n){return 401==n.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==n.status?(a.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):n.json()})).then((function(a){return e(a)})).catch((function(a){return r(a)}))}))}function l(a,n,t){return new Promise((function(e,r){fetch(n,t).then((function(n){return 401==n.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==n.status?(a.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):n.json()})).then((function(a){return e(a)})).catch((function(a){return r(a)}))}))}t.d(n,"c",(function(){return e})),t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"e",(function(){return s})),t.d(n,"f",(function(){return i})),t.d(n,"b",(function(){return l}))},"8fb5":function(a,n,t){"use strict";var e=t("9b15"),r=t.n(e);r.a},"9b15":function(a,n,t){},f01c:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",[t("CRow",[t("CCol",{attrs:{sm:"12"}},[t("CCard",[t("CCardHeader",[t("b",[a._v("Order")]),a._v(" Barang Pesanan ")]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"12",md:"8"}},[t("CSelect",{attrs:{placeholder:"Pilih Barang",label:a.labelBarang,horizontal:"",options:a.barang},on:{"update:value":a.assignNamaBarang},model:{value:a.order_barang_pesanan.nama_barang,callback:function(n){a.$set(a.order_barang_pesanan,"nama_barang",n)},expression:"order_barang_pesanan.nama_barang"}}),t("CInput",{attrs:{type:"text",description:a.validator.kode_barang_msg,"is-valid":a.validator.kode_barang,autocomplete:"kode_barang",label:"Kode Barang",horizontal:"",placeholder:"Masukan Quantity",readonly:""},model:{value:a.order_barang_pesanan.kode_barang,callback:function(n){a.$set(a.order_barang_pesanan,"kode_barang",n)},expression:"order_barang_pesanan.kode_barang"}}),t("CTextarea",{attrs:{label:"Spesifikasi Barang",horizontal:"",rows:"3",readonly:""},model:{value:a.order_barang_pesanan.spesifikasi_barang,callback:function(n){a.$set(a.order_barang_pesanan,"spesifikasi_barang",n)},expression:"order_barang_pesanan.spesifikasi_barang"}}),t("CInput",{attrs:{type:"number",description:a.validator.qty_msg,"is-valid":a.validator.qty,autocomplete:"qty",label:"Quantity",horizontal:"",placeholder:"Masukan Quantity"},model:{value:a.order_barang_pesanan.qty,callback:function(n){a.$set(a.order_barang_pesanan,"qty",n)},expression:"order_barang_pesanan.qty"}}),t("CInput",{attrs:{type:"text",description:a.validator.harga_dasar_msg,"is-valid":a.validator.harga_dasar,autocomplete:"harga_dasar",label:"Harga Dasar",horizontal:"",placeholder:"Masukan harga_dasar",readonly:""},model:{value:a.order_barang_pesanan.harga_dasar,callback:function(n){a.$set(a.order_barang_pesanan,"harga_dasar",n)},expression:"order_barang_pesanan.harga_dasar"}}),t("CInput",{attrs:{type:"text",description:a.validator.satuan_msg,"is-valid":a.validator.satuan,autocomplete:"satuan",label:"Satuan",horizontal:"",placeholder:"Masukan Satuan",readonly:""},model:{value:a.order_barang_pesanan.satuan,callback:function(n){a.$set(a.order_barang_pesanan,"satuan",n)},expression:"order_barang_pesanan.satuan"}}),t("CInput",{attrs:{type:"number",description:a.validator.tax_msg,"is-valid":a.validator.tax,autocomplete:"tax",label:"Tax %",horizontal:"",placeholder:"Masukan Tax"},model:{value:a.order_barang_pesanan.tax,callback:function(n){a.$set(a.order_barang_pesanan,"tax",n)},expression:"order_barang_pesanan.tax"}}),t("CInput",{attrs:{type:"number",description:a.validator.disc_msg,"is-valid":a.validator.disc,autocomplete:"disc",label:"Disc",horizontal:"",placeholder:"Masukan disc"},model:{value:a.order_barang_pesanan.disc,callback:function(n){a.$set(a.order_barang_pesanan,"disc",n)},expression:"order_barang_pesanan.disc"}}),t("div",{staticClass:"d-flex justify-content-end mt-4"},[t("button",{staticClass:"btn btn-primary",on:{click:function(n){return n.preventDefault(),a.addToTable(n)}}},[t("i",{staticClass:"fa fa-plus mr-2"}),a._v(a._s(a.label))])])],1),t("CCol",{attrs:{md:"2",sm:"12"}},[t("div",[t("button",{staticClass:"btn btn-success",on:{click:function(n){n.preventDefault(),a.openBarangModal=!0}}},[t("i",{staticClass:"fa fa-search mr-1"}),a._v("Cari Barang")])])])],1)],1),t("br"),t("hr",{staticClass:"text-center w-75"}),t("br"),t("CRow",[t("CCol",{attrs:{sm:"12"}},[t("v-client-table",{staticClass:"m-4",attrs:{data:a.order_barang_table,columns:a.tableFields,options:a.tableOptions,id:"request-table"},scopedSlots:a._u([{key:"aksi",fn:function(n){return t("div",{},[t("button",{staticClass:"btn btn-danger m-1",on:{click:function(t){return a.deleteFromTable(n.row.id)}}},[a._v("Hapus")])])}}])})],1)],1)],1),t("CCardFooter",{staticClass:"m-4 d-flex justify-content-end"},[t("router-link",{staticClass:"btn btn-primary",attrs:{to:"/barang-pesanan"}},[t("i",{staticClass:"fa fa-cart-plus mr-2"}),a._v(" Selesai ")])],1)],1)],1)],1),t("CModal",{attrs:{show:a.openBarangModal,"no-close-on-backdrop":!0,title:"Cari Barang",size:"lg",color:"dark"},on:{"update:show":function(n){a.openBarangModal=n}},scopedSlots:a._u([{key:"header",fn:function(){return[t("h6",{staticClass:"modal-title"},[a._v("Cari Barang")]),t("CButtonClose",{staticClass:"text-white",on:{click:function(n){a.openBarangModal=!1}}})]},proxy:!0}])},[t("CInput",{staticClass:"m-4",attrs:{type:"text",description:"Ketik minimal 3 huruf untuk melihat hasil",label:"Cari Barang",horizontal:"",placeholder:"Masukan disc"},model:{value:a.barangKeyword,callback:function(n){a.barangKeyword=n},expression:"barangKeyword"}}),t("v-client-table",{staticClass:"m-4",attrs:{data:a.searchBarang,columns:a.searchBarangFields,options:a.searchBarangOptions,id:"search-barang-table"},scopedSlots:a._u([{key:"aksi",fn:function(n){return t("div",{},[t("button",{staticClass:"btn btn-primary",on:{click:function(t){return a.selectBarang(n.row.id,n.row.nama_barang)}}},[a._v("Pilih")])])}}])})],1)],1)},r=[],o=t("8e44");function s(a){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},s(a)}var i={name:"OrderBarangPesanan",data:function(){return{barangKeyword:null,openBarangModal:!1,labelBarang:"Pilih Barang",label:"Tambah",errors:[],searchBarangFields:["kode_barang","nama_barang","stock","satuan","aksi"],searchBarangOptions:{headings:{kode_barang:"Kode",nama_barang:"Nama",stock:"Stok",satuan:"Satuan",aksi:"Aksi"},sortable:["kode_barang","nama_barang","stock","satuan"],filterable:["kode_barang","nama_barang","stock","satuan"],columnsClasses:{kode_barang:"align-middle",nama_barang:"align-middle",stock:"text-center align-middle",satuan:"text-center align-middle",aksi:"text-center align-middle"}},tableFields:["no","kode_barang","nama_barang","spesifikasi_barang","harga_dasar","qty","satuan","tax","disc","total","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi_barang:"Spesifikasi",harga_dasar:"Harga Dasar",qty:"Qty",satuan:"Satuan",tax:"Tax (%)",disc:"Disc",total:"Total",aksi:"Aksi"},sortable:["no","kode_barang","nama_barang","qty","total"],filterable:["no","kode_barang","nama_barang","spesifikasi_barang","qty","satuan","tax","disc","total"],columnsClasses:{no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi_barang:"align-middle",harga_dasar:"text-center align-middle",qty:"text-center align-middle",satuan:"text-center align-middle",tax:"text-center align-middle",disc:"text-center align-middle",total:"text-center align-middle",aksi:"text-center align-middle"}},searchBarang:[],barang:[],barangs:[],validator:{harga_jual:null,harga_jual_msg:null,spesifikasi_barang:null,spesifikasi_barang_msg:null,qty:null,qty_msg:null,satuan:null,satuan_msg:null},order_barang_pesanan:{id_pesanan:this.$route.params.id,id_barang:1,nama_barang:null,spesifikasi_barang:null,qty:0,tanggal:null,harga_jual:null,harga_dasar:null,status:1,kode_barang:null,tax:0,disc:0,sub_total:0,satuan:null},order_barang_table:[]}},watch:{barangKeyword:function(a){if(a.length>=3&&(null!=a||""!=a)){var n=this.barangs.filter((function(n){return n.nama_barang.toLowerCase().indexOf(a)>-1}));n.length>0?this.searchBarang=n:this.searchBarang=[]}}},methods:{selectBarang:function(a,n){this.assignNamaBarang(a,n),this.openBarangModal=!1},assignNamaBarang:function(a,n){this.order_barang_pesanan.id_barang=a,this.order_barang_pesanan.nama_barang="object"==s(n)?n.target.selectedOptions[0].innerHTML:n;for(var t=0;t<this.barangs.length;t++)this.barangs[t].id==a&&(this.order_barang_pesanan.harga_dasar=this.barangs[t].harga_dasar,this.order_barang_pesanan.kode_barang=this.barangs[t].kode_barang,this.order_barang_pesanan.spesifikasi_barang=this.barangs[t].spesifikasi,this.order_barang_pesanan.satuan=this.barangs[t].satuan)},deleteFromTable:function(a){var n=this;this.$swal("Mohon tunggu","","info"),this.$http.delete(localStorage.base_api+"order/barang/pesanan/"+a,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){n.order_barang_table=[],n.barangs=[],n.$swal.close(),Object(o["f"])(n,localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(a){n.barangs=a;for(var t=0;t<a.length;t++){var e={};e.label=a[t].nama_barang,e.value=a[t].id,n.barang.push(e)}})).catch((function(a){return console.error(a),!1})),n.getDataTable()})).catch((function(a){return n.$swal.close(),n.$swal("Tidak bisa menghapus barang","","error"),setTimeout((function(){return n.$swal.close()}),1500),!1}))},addToTable:function(){var a=this;if(this.errors=[],this.order_barang_pesanan.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi qty barang",this.errors.push("qty kosong")),this.errors.length)return console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.order_barang_pesanan.id_po=this.$route.params.id,this.order_barang_pesanan.id_pesanan=this.$route.params.id,this.$http.post(localStorage.base_api+"order/barang/pesanan",this.order_barang_pesanan,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(n){a.order_barang_table=[],a.barangs=[],a.label="Tambah",Object(o["f"])(a,localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(n){a.barangs=n;for(var t=0;t<n.length;t++){var e={};e.label=n[t].nama_barang,e.value=n[t].id,a.barang.push(e)}})).catch((function(a){return console.error(a),!1})),a.getDataTable(),window.scrollBy({top:1e3,left:0,behavior:"smooth"})})).catch((function(n){if(a.label="Tambah",n.response)for(var t in n.response.data.errmsg)alert(n.response.data.errmsg[t][0]);return console.error(n.response),!1}))},getDataTable:function(){var a=this;Object(o["f"])(this,localStorage.base_api+"order/barang/pesanan/detail/"+this.$route.params.id,{method:"post",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(n){n.forEach((function(n,t){Object(o["f"])(a,localStorage.base_api+"barang/"+n.id_barang,{method:"post",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(e){var r={id:n.id,no:++t,kode_barang:e.kode_barang,nama_barang:e.nama_barang,spesifikasi_barang:e.spesifikasi,harga_dasar:e.harga_dasar,tax:n.tax,disc:n.disc,qty:n.qty,satuan:e.satuan,total:e.harga_dasar*n.qty};a.order_barang_table.push(r)}))}))})).catch((function(n){return console.error(n),a.$swal("Tidak bisa mengambil data barang","Mohon hubungi pengembangnya","error"),setTimeout((function(){return a.$swal.close()}),1500),!1}))}},created:function(){var a=this;1!=localStorage.level&&2!=localStorage.level&&5!=localStorage.level&&this.$router.push("/"),Object(o["f"])(this,localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(n){a.barangs=n;for(var t=0;t<n.length;t++){var e={};e.label=n[t].nama_vendor+" - "+n[t].nama_barang,e.value=n[t].id,a.barang.push(e)}})).catch((function(a){return console.error(a),!1})),this.getDataTable()}},l=i,c=(t("8fb5"),t("2877")),d=Object(c["a"])(l,e,r,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-c043cd5e.749cbbbb.js.map