(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6230691e"],{"096c":function(t,a,e){},"4ca3":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[t._v("Daftar")]),t._v(" Barang")])]),n("CCardBody",[n("CRow",[n("CCol",{attrs:{sm:"12"}},[5==t.data.level||2==t.data.level||1==t.data.level||3==t.data.level?n("button",{staticClass:"float-right mb-4 ml-2 btn btn-success",on:{click:t.storeExcel}},[n("small",[n("i",{staticClass:"fa fa fa-file-excel-o mr-1"}),t._v(" Export .xlsx")])]):t._e(),7!=t.data.level&&6!=t.data.level&&4!=t.data.level?n("router-link",{staticClass:"float-right mb-4 btn btn-primary",attrs:{to:"/barang/add"}},[n("small",[n("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah Produk Baru")])]):t._e(),6!=t.data.level&&4!=t.data.level?n("v-client-table",{attrs:{data:t.tableItem,columns:t.tableFields,options:t.tableOptions,id:"barang_table"},scopedSlots:t._u([{key:"aksi",fn:function(a){return n("div",{staticClass:"d-flex justify-content-center"},[n("router-link",{staticClass:"btn btn-dark btn-sm mr-2",attrs:{to:"/barang/detail/"+a.row.id}},[t._v(" Detail ")]),2!=t.data.level&&6!=t.data.level&&4!=t.data.level&&7!=t.data.level?n("router-link",{staticClass:"btn btn-primary btn-sm mr-2",attrs:{to:"/barang/edit/"+a.row.id}},[t._v(" Edit ")]):t._e(),2!=t.data.level&&7!=t.data.level&&6!=t.data.level?n("button",{staticClass:"btn btn-danger btn-sm",attrs:{title:"hapus data karyawan"},on:{click:function(e){return t.deleteBarang(a.row.id)}}},[t._v("Hapus")]):t._e()],1)}},{key:"harga",fn:function(a){return n("div",{},[t._v(" "+t._s(t._f("formatRupiah")(a.row.harga_jual))+" ")])}}],null,!1,2746395825)}):n("v-client-table",{attrs:{data:t.tableItem,columns:t.spvFields,options:t.spvOptions,id:"barang_table"},scopedSlots:t._u([{key:"foto",fn:function(a){return n("div",{},[t.uri+a.row.foto==1?n("div",{staticClass:"mx-auto d-flex justify-content-center"},[n("img",{staticStyle:{"border-radius":"50%"},attrs:{src:t.uri+a.row.foto}})]):n("div",{staticClass:"mx-auto d-flex justify-content-center"},[n("img",{staticClass:"img-thumbnail",staticStyle:{"border-radius":"50%",width:"35px",height:"35px"},attrs:{src:e("9089")}})])])}},{key:"aksi",fn:function(a){return n("div",{staticClass:"d-flex justify-content-center"},[n("router-link",{staticClass:"btn btn-dark btn-sm mr-2",attrs:{to:"/barang/detail/"+a.row.id}},[t._v(" Detail ")]),2!=t.data.level&&6!=t.data.level&&4!=t.data.level?n("router-link",{staticClass:"btn btn-primary btn-sm mr-2",attrs:{to:"/barang/edit/"+a.row.id}},[t._v(" Edit ")]):t._e(),2!=t.data.level&&6!=t.data.level&&4!=t.data.level?n("button",{staticClass:"btn btn-danger btn-sm",attrs:{title:"hapus data karyawan"},on:{click:function(e){return t.deleteBarang(a.row.id)}}},[t._v("Hapus")]):t._e()],1)}},{key:"harga",fn:function(a){return n("div",{},[t._v(" "+t._s(t._f("formatRupiah")(a.row.harga_jual))+" ")])}}])})],1)],1)],1)],1)],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CCard",[e("CCardHeader",[t._t("header",[e("CIcon",{attrs:{name:"cil-grid"}}),t._v(" "+t._s(t.caption)+" ")])],2),e("CCardBody",[e("CDataTable",{attrs:{hover:t.hover,striped:t.striped,bordered:t.bordered,small:t.small,fixed:t.fixed,items:t.items,fields:t.fields,"items-per-page":t.small?10:5,dark:t.dark,pagination:""},scopedSlots:t._u([{key:"status",fn:function(a){var n=a.item;return[e("td",[e("CBadge",{attrs:{color:t.getBadge(n.status)}},[t._v(t._s(n.status))])],1)]}}])})],1)],1)},o=[],s={name:"Table",props:{items:Array,fields:{type:Array,default:function(){return["username","registered","role","status"]}},caption:{type:String,default:"Table"},hover:Boolean,striped:Boolean,bordered:Boolean,small:Boolean,fixed:Boolean,dark:Boolean},methods:{getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"}}},l=s,u=e("2877"),c=Object(u["a"])(l,i,o,!1,null,null,null),d=c.exports,g=e("8e44");function f(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var m={name:"ListHarga",data:function(){var t;return{modal:!1,uri:localStorage.base_uri,date:{from:null,to:null},exportLabel:"Mulai Export",id:0,smallModal:!1,data:JSON.parse(localStorage.user),products:[],tableItem:[],spvFields:["no","kode_barang","nama_barang","spesifikasi","stock","satuan","aksi"],tableFields:["no","kode_barang","nama_barang","spesifikasi","stock","satuan","harga_jual","aksi"],spvOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi:"Spesifikasi Barang",stock:"Stok",satuan:"Satuan",aksi:"Aksi"},sortable:["nama_barang"],filterable:["nama_barang","kode_barang","spesifikasi","no","satuan","stock"],columnsClasses:{no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi:"align-middle",stock:"text-center align-middle",satuan:"text-center align-middle",aksi:"text-center align-middle"}},tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi:"Spesifikasi Barang",stock:"Stok",satuan:"Satuan",harga_jual:"Harga Jual",aksi:"Aksi"},sortable:["no","kode_barang","spesifikasi","nama_barang","harga_jual","stock","satuan"],filterable:["no","kode_barang","spesifikasi","nama_barang","harga_jual","stock","satuan"],columnsClasses:(t={no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi:"align-middle",stock:"text-center align-middle",harga_jual:"text-center align-middle"},f(t,"stock","text-center align-middle"),f(t,"satuan","text-center align-middle"),f(t,"aksi","text-center align-middle"),t)}}},components:{CTableWrapper:d},methods:{deleteBarang:function(t){var a=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?a.$http.delete(localStorage.base_api+"barang/"+t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){a.$swal(t.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){a.getData(),a.$swal.close()}),1500)})).catch((function(t){if(console.error(t.response),401==t.response.status)a.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),a.$swal("Sesi login kamu sudah habis","login lagi yah :)","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500)})).catch((function(t){return a.$swal("Maaf tidak bisa hapus data","hubungi pengembangnya :)","warning"),setTimeout((function(){a.$swal.close()}),1500),!1}));else if(500===t.response.status)return a.$swal("Maaf tidak bisa hapus data","hubungi pengembangnya :)","warning"),setTimeout((function(){a.$swal.close()}),1500),!1;return!1})):a.$swal.close()}))},checkImage:function(t){var a=new Image;a.onload=function(){return!0},a.onerror=function(){return!1},a.src=t},storeExcel:function(){var t=this;this.exportLabel="Loading...",this.$swal("Mohon tunggu","","info"),Object(g["c"])(this,localStorage.base_api+"excel/barang",{from:null,to:null},{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token,"Access-Control-Allow-Origin":"*"}},"barang.xls").then((function(){t.$swal.close(),t.exportLabel="Mulai Export"})).catch((function(a){return t.$swal.close(),t.exportLabel="Mulai Export",console.log(a),t.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3),!1}))},getData:function(){var t=this;Object(g["f"])(this,localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){t.tableItem=a;for(var e=0;e<t.tableItem.length;e++)t.tableItem[e].no=e+1})).catch((function(t){return console.log(t),!1}))}},filters:{formatRupiah:function(t,a){var e=t.toString().replace(/[^,\d]/g,"").toString(),n=e.split(","),r=n[0].length%3,i=n[0].substr(0,r),o=n[0].substr(r).match(/\d{3}/gi),s="";return o&&(s=r?".":"",i+=s+o.join(".")),i=void 0!=n[1]?i+","+n[1]:i,void 0==a?i:i?"Rp. "+i:""}},created:function(){3==localStorage.level&&this.$router.push("/"),this.getData()}},b=m,p=(e("a8fd"),Object(u["a"])(b,n,r,!1,null,null,null));a["default"]=p.exports},"8e44":function(t,a,e){"use strict";function n(t,a,e,n,r){return new Promise((function(i,o){t.$http.post(a,e,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=a,e.setAttribute("download",r),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(t){o(t)}))}))}function r(t,a,e,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,o){"get"==r?t.$http.get(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(t){o(t)})):t.$http.post(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(t){o(t)}))}))}function i(t){return new Promise((function(a,e){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var a=[],e=0;e<t.data.length;e++){var n=(new Date).setHours(0,0,0,0),r=new Date(t.data[e].date_line);n=new Date(n),r=new Date(r.setDate(r.getDate()-2)),n.getTime()==r.getTime()&&a.push({date:r,data:t.data[e],link:"po/detail/"+t.data[e].id})}return localStorage.setItem("notif",JSON.stringify(a)),a})).then((function(t){return a(t)})).catch((function(t){return e(t)}))}))}function o(t,a){return new Promise((function(e,n){var r=-1;Promise.all(t.map((function(t){return r++,fetch(t,a[r])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return n(t)}))}))}function s(t,a,e,n){return new Promise((function(n,r){fetch(a,e).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))}function l(t,a,e){return new Promise((function(n,r){fetch(a,e).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))}e.d(a,"c",(function(){return n})),e.d(a,"d",(function(){return r})),e.d(a,"a",(function(){return i})),e.d(a,"e",(function(){return o})),e.d(a,"f",(function(){return s})),e.d(a,"b",(function(){return l}))},9089:function(t,a,e){t.exports=e.p+"img/default.0dd67022.svg"},a8fd:function(t,a,e){"use strict";var n=e("096c"),r=e.n(n);r.a}}]);
//# sourceMappingURL=chunk-6230691e.3b429b4b.js.map