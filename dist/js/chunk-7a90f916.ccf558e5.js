(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a90f916"],{"09d6":function(t,e,a){"use strict";var n=a("4a7e"),o=a.n(n);o.a},"4a7e":function(t,e,a){},"6c98":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CCard",[a("CCardHeader",[a("b",[t._v("Data")]),t._v(" Stock In Out ")]),a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"12"}},[5==t.data.level||2==t.data.level||1==t.data.level||3==t.data.level?a("button",{staticClass:"float-right mb-4 ml-2 btn btn-success",on:{click:function(e){t.modal=!0}}},[a("small",[a("i",{staticClass:"fa fa fa-file-excel-o mr-1"}),t._v(" Export .xlsx")])]):t._e(),a("router-link",{staticClass:"float-right mb-4 btn btn-primary",attrs:{to:"/stock-in-out/add"}},[a("small",[a("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah Stock In Out")])]),a("v-client-table",{attrs:{data:t.stockinout,columns:t.tableFields,options:t.tableOptions,id:"stockinout-table"},scopedSlots:t._u([{key:"type",fn:function(e){return a("div",{},[1==e.row.type?a("small",{staticClass:"badge badge-success"},[t._v("In")]):2==e.row.type?a("small",{staticClass:"badge badge-primary"},[t._v("Out")]):t._e(),3==e.row.type?a("small",{staticClass:"badge badge-danger"},[t._v("Habis")]):t._e()])}},{key:"aksi",fn:function(e){return a("div",{},[a("router-link",{staticClass:"btn btn-primary btn-sm mr-2 mb-2",attrs:{to:"/stock-in-out/edit/"+e.row.id}},[t._v(" Edit ")]),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return t.deleteStockInOut(e.row.id)}}},[t._v(" Hapus ")])],1)}}])})],1)],1)],1)],1),a("CModal",{attrs:{show:t.modal,"no-close-on-backdrop":!0,title:"Export Data ke Excel",size:"sm",color:"dark"},on:{"update:show":function(e){t.modal=e}},scopedSlots:t._u([{key:"header",fn:function(){return[a("h6",{staticClass:"modal-title"},[t._v("Export Data ke Excel")]),a("CButtonClose",{staticClass:"text-white",on:{click:function(e){t.modal=!1}}})]},proxy:!0},{key:"footer",fn:function(){return[a("CButton",{attrs:{color:"success"},on:{click:t.storeExcel}},[t._v(t._s(t.exportLabel))])]},proxy:!0}])},[a("CInput",{attrs:{type:"date",label:"Dari",horizontal:""},model:{value:t.date.from,callback:function(e){t.$set(t.date,"from",e)},expression:"date.from"}}),a("CInput",{attrs:{type:"date",label:"Sampai",horizontal:""},model:{value:t.date.to,callback:function(e){t.$set(t.date,"to",e)},expression:"date.to"}})],1)],1)},o=[],i=a("8e44"),r={name:"StockInOut",data:function(){return{smallModal:!1,id:0,stockinout:[],exportLabel:"Mulai Export",modal:!1,data:JSON.parse(localStorage.user),date:{from:null,to:null},tableFields:["no","nama_barang","type","spesifikasi","qty","satuan","tanggal","alasan","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",nama_barang:"Nama Barang",tanggal:"Tanggal",type:"Tipe",spesifikasi:"Spesifikasi",qty:"Quantity",satuan:"Satuan",alasan:"Alasan",aksi:"Aksi"},sortable:["no","nama_barang","qty","satuan","spesifikasi"],filterable:["no","nama_barang","qty","satuan","spesifikasi"],columnsClasses:{no:"text-center align-middle",type:"align-middle",spesifikasi:"align-middle",nama_barang:"align-middle",qty:"text-center align-middle",satuan:"text-center align-middle",tanggal:"text-center align-middle",alasan:"text-center align-middle",aksi:"text-center align-middle"}}}},methods:{getData:function(){var t=this;Object(i["f"])(this,localStorage.base_api+"stock",{method:"post",headers:{Authorization:"bearer "+localStorage.token}}).then((function(e){var a=0;t.stockinout=e,t.stockinout.forEach((function(t){t.no=a+1,a++}))})).catch((function(e){return 401==e.response.status?setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),t.$swal("Sesi login kamu sudah habis","login lagi yah :)","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(e){return t.$swal("Maaf tidak bisa hapus data","hubungi pengembangnya :)","warning"),setTimeout((function(){t.$swal.close()}),1500),!1}))}),1500):(t.$swal("Terdapat  error di aplikasi","Mohon hubungi pengembangnya yah...","error"),setTimeout((function(){return t.$swal.close(),!1}),1500)),console.error(e),!1}))},deleteStockInOut:function(t){var e=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a?e.$http.delete(localStorage.base_api+"stock/"+t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){e.$swal("Stock in out berhasil dihapus","Mohon tunggu sebentar...","success"),setTimeout((function(){e.$swal.close()}),1500),e.getData()})).catch((function(t){return e.$swal.close(),401!=t.response.status?(console.log(t),e.$swal("Ada sedikit error, harap hubungi pengembang softwarenya yah :)","Mohon tunggu sebentar...","error"),!1):(e.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){e.$router.replace({path:"/login"})})).catch((function(t){return e.$swal("Ada sedikit error, harap hubungi pengembang softwarenya yah :)","Mohon tunggu sebentar...","error"),!1})),!1)})):e.$swal.close()}))},storeExcel:function(){var t=this;this.exportLabel="Loading...",Object(i["c"])(this,localStorage.base_api+"excel/stock",{from:this.date.from,to:this.date.to},{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token}},"Stock In Out.xls").then((function(){t.modal=!1,t.exportLabel="Mulai Export"})).catch((function(e){return t.exportLabel="Mulai Export",console.log(e),t.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3),!1}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&4!=localStorage.level&&this.$router.push("/"),this.getData()}},s=r,l=(a("09d6"),a("2877")),c=Object(l["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports},"8e44":function(t,e,a){"use strict";function n(t,e,a,n,o){return new Promise((function(i,r){t.$http.post(e,a,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.href=e,a.setAttribute("download",o),document.body.appendChild(a),a.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function o(t,e,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return new Promise((function(r,s){"get"==o?t.$http.get(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){s(t)})):t.$http.post(e,i,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){s(t)}))}))}function i(t){return new Promise((function(e,a){s(t,localStorage.base_api+"po",{method:"post",headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){for(var e=[],a=0;a<t.length;a++){var n=(new Date).setHours(0,0,0,0),o=new Date(t[a].date_line);n=new Date(n),o=new Date(o.setDate(o.getDate()-2)),n.getTime()==o.getTime()&&e.push({date:o,data:t[a],link:"po/detail/"+t[a].id})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function r(t,e){return new Promise((function(a,n){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){a(t)})).catch((function(t){return n(t)}))}))}function s(t,e,a,n){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}function l(t,e,a){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"e",(function(){return r})),a.d(e,"f",(function(){return s})),a.d(e,"b",(function(){return l}))}}]);
//# sourceMappingURL=chunk-7a90f916.ccf558e5.js.map