(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2c7ce6a"],{7568:function(t,n,e){},"8e44":function(t,n,e){"use strict";function a(t,n,e,a,o){return new Promise((function(r,i){t.$http.post(n,e,a).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=n,e.setAttribute("download",o),document.body.appendChild(e),e.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function o(t,n,e,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,i){"get"==o?t.$http.get(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){r()})).catch((function(t){i(t)})):t.$http.post(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function r(t){return new Promise((function(n,e){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var n=[],e=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),r=new Date(o.setDate(o.getDate()-2));n.push({date:r,data:t.data[a],link:"po/detail/"+t.data[a].id})}for(var i=0;i<n.length;i++){var u=(new Date).setHours(0,0,0,0),s=new Date(n[i].date).setHours(0,0,0,0);u=new Date(u),s=new Date(s),console.log("Current Date "+u),console.log("Notif Date "+s),u.getTime()==s.getTime()&&(console.warn("sama cuy"),console.log(s),e.push({date:s,data:n[i],link:"po/detail/"+n[i].id}))}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return n(t)})).catch((function(t){return e(t)}))}))}function i(t,n){return new Promise((function(e,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,n[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return a(t)}))}))}function u(t,n,e,a){return new Promise((function(a,o){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function s(t,n,e){return new Promise((function(a,o){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return o})),e.d(n,"a",(function(){return r})),e.d(n,"e",(function(){return i})),e.d(n,"f",(function(){return u})),e.d(n,"b",(function(){return s}))},c57d:function(t,n,e){"use strict";var a=e("7568"),o=e.n(a);o.a},cdbb:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("CCard",[e("CCardHeader",[e("p",[e("b",[t._v("Daftar")]),t._v(" Kurir")])]),e("CCardBody",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("v-client-table",{attrs:{data:t.kurir,columns:t.tableFields,options:t.tableOptions,id:"kurir_table"},scopedSlots:t._u([{key:"foto",fn:function(t){return e("div",{},[e("img",{attrs:{src:t.row.foto}})])}},{key:"aksi",fn:function(n){return e("div",{staticClass:"d-flex justify-content-center"},[2!=t.data.level?e("button",{staticClass:"btn btn-danger btn-sm",attrs:{title:"hapus data kurir"},on:{click:function(e){return t.deleteKurir(n.row.id)}}},[t._v("Hapus")]):t._e()])}}])})],1)],1)],1)],1),e("CModal",{attrs:{title:"Hapus Data Kurir",size:"sm",color:"danger",show:t.smallModal},on:{"update:show":function(n){t.smallModal=n}},scopedSlots:t._u([{key:"footer",fn:function(){return[e("CButton",{attrs:{color:"danger"},on:{click:function(n){return t.deleteKurir()}}},[t._v("Hapus")]),e("CButton",{attrs:{color:"secondary"},on:{click:function(n){t.smallModal=!1}}},[t._v("Batal")])]},proxy:!0}])},[t._v(" Data Kurir ini akan dihapus secara permanen? ")])],1)},o=[],r=e("8e44"),i={name:"Kurir",data:function(){return{id:0,smallModal:!1,data:"",tableFields:["no","no_karyawan","nama_karyawan","email","wa_hp","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",no_karyawan:"No Kurir",nama_karyawan:"Nama Kurir",email:"Email",wa_hp:"No Hp/WA",aksi:"Aksi"},sortable:["no","no_karyawan","nama_karyawan"],columnsClasses:{no:"text-center align-middle",no_karyawan:"align-middle",nama_karyawan:"align-middle",email:"align-middle",wa_hp:"text-center align-middle",aksi:"text-center align-middle"}},kurir:[]}},methods:{getData:function(){var t=this;Object(r["f"])(this,localStorage.base_api+"kurir",{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(n){t.kurir=n;for(var e=0;e<t.kurir.length;e++)t.kurir[e].no=e+1})).catch((function(n){return console.error(n),t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1}))},deleteKurir:function(t){var n=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?n.$http.delete(localStorage.base_api+"karyawan/"+t,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(){n.$swal("data user berhasil dihapus","Mohon tunggu sebentar...","success"),setTimeout((function(){n.$swal.close(),n.getData()}),1500)})).catch((function(t){return console.error(t.response),401!=t.response.status?(n.$swal("Tidak bisa hapus data","hubungi pengembangnya...","error"),setTimeout((function(){n.$swal.close()}),1500),console.log(t),!1):(n.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),n.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){n.$swal.close(),n.$router.replace({path:"/login"})}),1500)})).catch((function(t){return console.log(t),n.$swal("Tidak bisa hapus data","hubungi pengembangnya...","error"),setTimeout((function(){n.$swal.close()}),1500),!1})),!1)})):n.$swal.close()}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),this.getData()},mounted:function(){this.data=this.$store.getters.userData}},u=i,s=(e("c57d"),e("2877")),c=Object(s["a"])(u,a,o,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-a2c7ce6a.ef3f15b8.js.map