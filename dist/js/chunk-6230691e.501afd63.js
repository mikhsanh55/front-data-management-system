(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6230691e"],{"096c":function(t,a,e){},"4ca3":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[t._v("Daftar")]),t._v(" Barang")])]),n("CCardBody",[n("CRow",[n("CCol",{attrs:{sm:"12"}},[5==t.data.level||2==t.data.level||1==t.data.level||3==t.data.level?n("button",{staticClass:"float-right mb-4 ml-2 btn btn-light",on:{click:t.storeExcel}},[n("small",[n("i",{staticClass:"fa fa fa-file-excel-o mr-1"}),t._v(" Export .xlsx")])]):t._e(),5==t.data.level?n("router-link",{staticClass:"float-right mb-4 btn btn-light",attrs:{to:"/barang/add"}},[n("small",[n("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah Barang")])]):t._e(),6!=t.data.level&&4!=t.data.level?n("v-client-table",{attrs:{data:t.tableItem,columns:t.tableFields,options:t.tableOptions,id:"barang_table"},scopedSlots:t._u([{key:"foto",fn:function(t){return n("div",{},[n("img",{attrs:{src:"https://young-temple-67589.herokuapp.com/"+t.row.foto,height:"50",width:"70"}})])}},{key:"aksi",fn:function(a){return n("div",{staticClass:"d-flex justify-content-center"},[n("router-link",{staticClass:"text-dark btn btn-secondary btn-sm mr-2",attrs:{to:"/barang/detail/"+a.row.id}},[n("i",{staticClass:"fa fa-eye"})]),2!=t.data.level&&7!=t.data.level&&6!=t.data.level?n("router-link",{staticClass:"btn btn-secondary btn-sm mr-2 text-primary",attrs:{to:"/barang/edit/"+a.row.id}},[n("i",{staticClass:"fa fa-edit"})]):t._e(),2!=t.data.level&&7!=t.data.level&&6!=t.data.level?n("button",{staticClass:"text-danger btn btn-secondary btn-sm",attrs:{title:"hapus data karyawan"},on:{click:function(e){return t.deleteBarang(a.row.id)}}},[n("i",{ref:"id",staticClass:"fa fa-trash",attrs:{id:a.row.id}})]):t._e()],1)}},{key:"harga",fn:function(a){return n("div",{},[t._v(" "+t._s(t._f("formatRupiah")(a.row.harga_jual))+" ")])}}],null,!1,529655635)}):n("v-client-table",{attrs:{data:t.tableItem,columns:t.spvFields,options:t.spvOptions,id:"barang_table"},scopedSlots:t._u([{key:"foto",fn:function(t){return n("div",{},["https://young-temple-67589.herokuapp.com/"+t.row.foto==1?n("div",{staticClass:"mx-auto d-flex justify-content-center"},[n("img",{staticStyle:{"border-radius":"50%"},attrs:{src:"https://young-temple-67589.herokuapp.com/"+t.row.foto}})]):n("div",{staticClass:"mx-auto d-flex justify-content-center"},[n("img",{staticClass:"img-thumbnail",staticStyle:{"border-radius":"50%",width:"35px",height:"35px"},attrs:{src:e("9089")}})])])}},{key:"aksi",fn:function(a){return n("div",{staticClass:"d-flex justify-content-center"},[n("router-link",{staticClass:"text-dark btn btn-secondary btn-sm mr-2",attrs:{to:"/barang/detail/"+a.row.id}},[n("i",{staticClass:"fa fa-eye"})]),2!=t.data.level&&6!=t.data.level&&4!=t.data.level?n("router-link",{staticClass:"btn btn-secondary btn-sm mr-2 text-primary",attrs:{to:"/barang/edit/"+a.row.id}},[n("i",{staticClass:"fa fa-edit"})]):t._e(),2!=t.data.level&&6!=t.data.level&&4!=t.data.level?n("button",{staticClass:"text-danger btn btn-secondary btn-sm",attrs:{title:"hapus data karyawan"},on:{click:function(e){return t.deleteBarang(a.row.id)}}},[n("i",{ref:"id",staticClass:"fa fa-trash",attrs:{id:a.row.id}})]):t._e()],1)}},{key:"harga",fn:function(a){return n("div",{},[t._v(" "+t._s(t._f("formatRupiah")(a.row.harga_jual))+" ")])}}])})],1)],1)],1)],1)],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CCard",[e("CCardHeader",[t._t("header",[e("CIcon",{attrs:{name:"cil-grid"}}),t._v(" "+t._s(t.caption)+" ")])],2),e("CCardBody",[e("CDataTable",{attrs:{hover:t.hover,striped:t.striped,bordered:t.bordered,small:t.small,fixed:t.fixed,items:t.items,fields:t.fields,"items-per-page":t.small?10:5,dark:t.dark,pagination:""},scopedSlots:t._u([{key:"status",fn:function(a){var n=a.item;return[e("td",[e("CBadge",{attrs:{color:t.getBadge(n.status)}},[t._v(t._s(n.status))])],1)]}}])})],1)],1)},i=[],s={name:"Table",props:{items:Array,fields:{type:Array,default:function(){return["username","registered","role","status"]}},caption:{type:String,default:"Table"},hover:Boolean,striped:Boolean,bordered:Boolean,small:Boolean,fixed:Boolean,dark:Boolean},methods:{getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"}}},l=s,c=e("2877"),d=Object(c["a"])(l,o,i,!1,null,null,null),u=d.exports,f=e("8e44"),g={name:"ListHarga",data:function(){return{modal:!1,date:{from:null,to:null},exportLabel:"Mulai Export",id:0,smallModal:!1,data:"",products:[],tableItem:[],spvFields:["no","foto","kode_barang","nama_barang","spesifikasi","aksi"],tableFields:["no","foto","kode_barang","nama_barang","spesifikasi","harga_jual","aksi"],spvOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",foto:"Foto",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi:"Spesifikasi Barang",aksi:"Aksi"},sortable:["nama_barang"],filterable:["nama_barang","kode_barang","spesifikasi","no"],columnsClasses:{no:"text-center align-middle",foto:"text-center align-middle m-auto",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi:"align-middle",stock:"text-center align-middle",aksi:"text-center align-middle"}},tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",foto:"Foto",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi:"Spesifikasi Barang",harga_jual:"Harga Jual",aksi:"Aksi"},sortable:["no","kode_barang","spesifikasi","nama_barang","harga_jual","stock"],filterable:["no","kode_barang","spesifikasi","nama_barang","harga_jual","stock"],columnsClasses:{no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi:"align-middle",harga_jual:"text-center align-middle",stock:"text-center align-middle",aksi:"text-center align-middle"}}}},components:{CTableWrapper:u},methods:{deleteBarang:function(t){var a=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?a.$http.delete("https://young-temple-67589.herokuapp.com/api/barang/"+t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){a.$swal(t.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){a.getData(),a.$swal.close()}),1500)})).catch((function(t){if(console.error(t.response),401==t.response.status)a.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),a.$swal("Sesi login kamu sudah habis","login lagi yah :)","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500)})).catch((function(t){return a.$swal("Maaf tidak bisa hapus data","hubungi pengembangnya :)","warning"),setTimeout((function(){a.$swal.close()}),1500),!1}));else if(500===t.response.status)return a.$swal("Maaf tidak bisa hapus data","hubungi pengembangnya :)","warning"),setTimeout((function(){a.$swal.close()}),1500),!1;return!1})):a.$swal.close()}))},checkImage:function(t){var a=new Image;a.onload=function(){return!0},a.onerror=function(){return!1},a.src=t},storeExcel:function(){var t=this;this.exportLabel="Loading...",this.$swal("Mohon tunggu","","info"),Object(f["b"])(this,"https://young-temple-67589.herokuapp.com/api/excel/barang",{from:null,to:null},{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token}},"barang.xls").then((function(){t.$swal.close(),t.exportLabel="Mulai Export"})).catch((function(a){return t.$swal.close(),t.exportLabel="Mulai Export",console.log(a),t.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3),!1}))},getData:function(){var t=this;this.$http.get("https://young-temple-67589.herokuapp.com/api/barang",{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){t.tableItem=a.data;for(var e=0;e<t.tableItem.length;e++)t.tableItem[e].no=e+1})).catch((function(a){return console.log(a),401==a.response.status?t.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),t.$swal("Sesi login kamu habis :(","login lagi yah :)","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),2e3)})).catch((function(t){return alert("An error occured when get data :("),!1})):500==a.response.status&&alert("Ada sedikit masalah disisi server, Mohon hubungi pengembangnya yah :)"),console.log(a.response),!1}))}},filters:{formatRupiah:function(t,a){var e=t.toString().replace(/[^,\d]/g,"").toString(),n=e.split(","),r=n[0].length%3,o=n[0].substr(0,r),i=n[0].substr(r).match(/\d{3}/gi),s="";return i&&(s=r?".":"",o+=s+i.join(".")),o=void 0!=n[1]?o+","+n[1]:o,void 0==a?o:o?"Rp. "+o:""}},created:function(){this.getData()},mounted:function(){this.data=this.$store.getters.userData}},p=g,h=(e("a8fd"),Object(c["a"])(p,n,r,!1,null,null,null));a["default"]=h.exports},"8e44":function(t,a,e){"use strict";function n(t,a,e,n,r){return new Promise((function(o,i){t.$http.post(a,e,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=a,e.setAttribute("download",r),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){i(t)}))}))}function r(t,a,e,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,i){"get"==r?t.$http.get(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){i(t)})):t.$http.post(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){i(t)}))}))}function o(t,a,e,n){return new Promise((function(t,n){fetch(a,e).then((function(t){return t.json()})).then((function(a){return t(a)})).catch((function(t){return n(t)}))}))}function i(t){return new Promise((function(a,e){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var a=[],e=[],n=0;n<t.data.length;n++){var r=new Date(t.data[n].date_line),o=new Date(r.setDate(r.getDate()-2));a.push({date:o,data:t.data[n],link:"/po/"+t.data[n].id})}for(var i=0;i<a.length;i++){var s=new Date,l=new Date(a[i].date);s==l&&e.push({date:a[i].date,data:a[i]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return a(t)})).catch((function(t){return e(t)}))}))}function s(t,a){return new Promise((function(e,n){var r=-1;Promise.all(t.map((function(t){return r++,fetch(t,a[r])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return n(t)}))}))}e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"e",(function(){return o})),e.d(a,"a",(function(){return i})),e.d(a,"d",(function(){return s}))},9089:function(t,a,e){t.exports=e.p+"img/default.0dd67022.svg"},a8fd:function(t,a,e){"use strict";var n=e("096c"),r=e.n(n);r.a}}]);
//# sourceMappingURL=chunk-6230691e.501afd63.js.map