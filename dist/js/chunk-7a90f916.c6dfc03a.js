(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a90f916"],{"09d6":function(t,n,e){"use strict";var a=e("4a7e"),o=e.n(a);o.a},"4a7e":function(t,n,e){},"6c98":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("CCard",[e("CCardHeader",[e("b",[t._v("Data")]),t._v(" Stock In Out ")]),e("CCardBody",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("router-link",{staticClass:"float-right mb-4 btn btn-light",attrs:{to:"/stock-in-out/add"}},[e("small",[e("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah Stock In Out")])]),e("v-client-table",{attrs:{data:t.stockinout,columns:t.tableFields,options:t.tableOptions,id:"stockinout-table"},scopedSlots:t._u([{key:"aksi",fn:function(n){return e("div",{},[e("router-link",{staticClass:"text-primary btn btn-secondary btn-sm mr-2",attrs:{to:"/stock-in-out/edit/"+n.row.id}},[e("i",{staticClass:"fa fa-edit"})]),e("button",{staticClass:"text-danger btn btn-secondary btn-sm",on:{click:function(e){return t.deleteStockInOut(n.row.id)}}},[e("i",{staticClass:"fa fa-trash"})])],1)}}])})],1)],1)],1)],1)],1)},o=[],i=e("8e44"),r={name:"StockInOut",data:function(){return{smallModal:!1,id:0,stockinout:[],tableFields:["no","nama_barang","type","qty","tanggal","alasan","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",nama_barang:"Nama Barang",tanggal:"Tanggal",type:"Tipe",qty:"Quantity",alasan:"Alasan",aksi:"Aksi"},sortable:["no","nama_barang"],columnsClasses:{no:"text-center align-middle",type:"align-middle",nama_barang:"align-middle",qty:"text-center align-middle",tanggal:"text-center align-middle",alasan:"text-center align-middle",aksi:"text-center align-middle"}}}},methods:{getData:function(){var t=this;Object(i["f"])(this,localStorage.base_api+"stock",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(n){console.log(n.data);var e=0;t.stockinout=n.data,t.stockinout.forEach((function(t){t.no=e+1,e++}))})).catch((function(n){return 401==n.response.status?setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){var n=window.location.href;n=n.split("/"),localStorage.setItem("prevPath",n[n.length-1]),t.$swal("Sesi login kamu sudah habis","login lagi yah :)","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(n){return t.$swal("Maaf tidak bisa hapus data","hubungi pengembangnya :)","warning"),setTimeout((function(){t.$swal.close()}),1500),!1}))}),1500):(t.$swal("Terdapat  error di aplikasi","Mohon hubungi pengembangnya yah...","error"),setTimeout((function(){return t.$swal.close(),!1}),1500)),console.error(n),!1}))},deleteStockInOut:function(t){var n=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?n.$http.delete(localStorage.base_api+"stock/"+t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){n.$swal("Stock in out berhasil dihapus","Mohon tunggu sebentar...","success"),setTimeout((function(){n.$swal.close()}),1500),n.getData()})).catch((function(t){return n.$swal.close(),401!=t.response.status?(console.log(t),n.$swal("Ada sedikit error, harap hubungi pengembang softwarenya yah :)","Mohon tunggu sebentar...","error"),!1):(n.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){n.$router.replace({path:"/login"})})).catch((function(t){return n.$swal("Ada sedikit error, harap hubungi pengembang softwarenya yah :)","Mohon tunggu sebentar...","error"),!1})),!1)})):n.$swal.close()}))}},created:function(){this.getData()}},s=r,u=(e("09d6"),e("2877")),c=Object(u["a"])(s,a,o,!1,null,null,null);n["default"]=c.exports},"8e44":function(t,n,e){"use strict";function a(t,n,e,a,o){return new Promise((function(i,r){t.$http.post(n,e,a).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=n,e.setAttribute("download",o),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function o(t,n,e,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,r){"get"==o?t.$http.get(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(t){r(t)})):t.$http.post(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function i(t){return new Promise((function(n,e){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var n=[],e=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),i=new Date(o.setDate(o.getDate()-2));n.push({date:i,data:t.data[a],link:"/po/"+t.data[a].id})}for(var r=0;r<n.length;r++){var s=new Date,u=new Date(n[r].date);s==u&&e.push({date:n[r].date,data:n[r]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return n(t)})).catch((function(t){return e(t)}))}))}function r(t,n){return new Promise((function(e,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,n[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return a(t)}))}))}function s(t,n,e,a){return new Promise((function(a,o){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function u(t,n,e){return new Promise((function(a,o){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return o})),e.d(n,"a",(function(){return i})),e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return s})),e.d(n,"b",(function(){return u}))}}]);
//# sourceMappingURL=chunk-7a90f916.c6dfc03a.js.map