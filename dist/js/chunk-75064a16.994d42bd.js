(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75064a16"],{4875:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("CCard",[e("CCardHeader",[e("p",[e("b",[t._v("Daftar")]),t._v(" Kwitansi")])]),e("CCardBody",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[2!=t.data.level?e("router-link",{staticClass:"float-right mb-4 btn btn-light",attrs:{to:"/kwitansi/add"}},[e("small",[e("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah Kwitansi")])]):t._e(),e("v-client-table",{attrs:{data:t.kwitansi,columns:t.tableFields,options:t.tableOptions,id:"kwitansi_table"},scopedSlots:t._u([{key:"foto",fn:function(t){return e("div",{},[e("img",{attrs:{src:t.row.foto}})])}},{key:"aksi",fn:function(n){return e("div",{staticClass:"d-flex justify-content-center"},[2!=t.data.level?e("button",{staticClass:"text-danger btn btn-secondary btn-sm mr-2",attrs:{title:"export pdf"},on:{click:function(e){return t.storePDF(n.row.id)}}},[e("i",{ref:"id",staticClass:"fa fa-file-pdf-o",attrs:{id:n.row.id}})]):t._e(),2!=t.data.level?e("router-link",{staticClass:"text-primary btn btn-secondary btn-sm mr-2",attrs:{to:"/kwitansi/edit/"+n.row.id,title:"edit kwitansi"}},[e("i",{staticClass:"fa fa-edit"})]):t._e(),2!=t.data.level?e("button",{staticClass:"text-danger btn btn-secondary btn-sm",attrs:{title:"hapus data kwitansi"},on:{click:function(e){return t.deleteKwitansi(n.row.id)}}},[e("i",{ref:"id",staticClass:"fa fa-trash",attrs:{id:n.row.id}})]):t._e()],1)}}])})],1)],1)],1)],1)],1)},i=[],o=e("8e44"),r={name:"Kwitansi",data:function(){return{id:0,data:"",smallModal:!1,tableFields:["nod","no","terima_dari","uang","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{nod:"No",no:"No Kwitansi",terima_dari:"Penerima",uang:"Uang Terbilang",aksi:"Aksi"},sortable:["no","terima_dari"],columnsClasses:{nod:"text-center align-middle",no:"align-middle",terima_dari:"align-middle",uang:"text-center align-middle",aksi:"text-center align-middle"}},kwitansi:[]}},methods:{storePDF:function(t){var n=this;this.$swal({title:"Mohon tunggu...",showCloseButton:!1,showCancelButton:!1}),Object(o["d"])(this,localStorage.base_api+"pdf/kwitansi/"+t,{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token}},"kwitansi.pdf").then((function(){n.$swal.close()})).catch((function(t){return console.log(t),n.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){n.$swal.close(),n.modal=!1}),2e3),!1}))},getData:function(){var t=this;Object(o["f"])(this,localStorage.base_api+"kwitansi",{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(n){console.log(n),n.length>0&&(t.kwitansi=n);for(var e=0;e<t.kwitansi.length;e++)t.kwitansi[e].nod=e+1})).catch((function(t){return console.error("Kwitansi error ASW"),console.log(t),!1}))},deleteKwitansi:function(t){var n=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?n.$http.delete(localStorage.base_api+"kwitansi/"+t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){n.$swal("Data kwitansi berhasil dihapus","Mohon tunggu sebentar...","success"),setTimeout((function(){n.$swal.close(),n.getData()}),1500)})).catch((function(t){return n.$swal("Tidak bisa menghapus data","hubungi pengembangnya...","error"),setTimeout((function(){n.$swal.close()}),1500),console.error(t.response),!1})):n.$swal.close()}))}},created:function(){this.getData()},mounted:function(){this.data=this.$store.getters.userData}},s=r,c=(e("88c6"),e("2877")),u=Object(c["a"])(s,a,i,!1,null,null,null);n["default"]=u.exports},7433:function(t,n,e){},"88c6":function(t,n,e){"use strict";var a=e("7433"),i=e.n(a);i.a},"8e44":function(t,n,e){"use strict";function a(t,n,e,a,i){return new Promise((function(o,r){t.$http.post(n,e,a).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=n,e.setAttribute("download",i),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){r(t)}))}))}function i(t,n,e,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,r){"get"==i?t.$http.get(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){r(t)})):t.$http.post(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){r(t)}))}))}function o(t){return new Promise((function(n,e){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var n=[],e=[],a=0;a<t.data.length;a++){var i=new Date(t.data[a].date_line),o=new Date(i.setDate(i.getDate()-2));n.push({date:o,data:t.data[a],link:"/po/"+t.data[a].id})}for(var r=0;r<n.length;r++){var s=new Date,c=new Date(n[r].date);s==c&&e.push({date:n[r].date,data:n[r]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return n(t)})).catch((function(t){return e(t)}))}))}function r(t,n){return new Promise((function(e,a){var i=-1;Promise.all(t.map((function(t){return i++,fetch(t,n[i])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return a(t)}))}))}function s(t,n,e,a){return new Promise((function(a,i){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return i(t)}))}))}function c(t,n,e){return new Promise((function(a,i){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return i(t)}))}))}e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return o})),e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return s})),e.d(n,"b",(function(){return c}))}}]);
//# sourceMappingURL=chunk-75064a16.994d42bd.js.map