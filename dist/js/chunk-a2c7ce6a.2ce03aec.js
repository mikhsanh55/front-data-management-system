(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2c7ce6a"],{7568:function(t,n,a){},"8e44":function(t,n,a){"use strict";function e(t,n,a,e,o){return new Promise((function(r,i){t.$http.post(n,a,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.href=n,a.setAttribute("download",o),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function o(t,n,a,e){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,i){"get"==o?t.$http.get(n,a).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=n,a.setAttribute("download",e),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){i(t)})):t.$http.post(n,a).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=n,a.setAttribute("download",e),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function r(t){return new Promise((function(n,a){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var n=[],a=[],e=0;e<t.data.length;e++){var o=new Date(t.data[e].date_line),r=new Date(o.setDate(o.getDate()-2));n.push({date:r,data:t.data[e],link:"/po/"+t.data[e].id})}for(var i=0;i<n.length;i++){var u=new Date,s=new Date(n[i].date);u==s&&a.push({date:n[i].date,data:n[i]})}return localStorage.setItem("notif",JSON.stringify(a)),a})).then((function(t){return n(t)})).catch((function(t){return a(t)}))}))}function i(t,n){return new Promise((function(a,e){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,n[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){a(t)})).catch((function(t){return e(t)}))}))}function u(t,n,a,e){return new Promise((function(e,o){fetch(n,a).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return e(t)})).catch((function(t){return o(t)}))}))}function s(t,n,a){return new Promise((function(e,o){fetch(n,a).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return e(t)})).catch((function(t){return o(t)}))}))}a.d(n,"c",(function(){return e})),a.d(n,"d",(function(){return o})),a.d(n,"a",(function(){return r})),a.d(n,"e",(function(){return i})),a.d(n,"f",(function(){return u})),a.d(n,"b",(function(){return s}))},c57d:function(t,n,a){"use strict";var e=a("7568"),o=a.n(e);o.a},cdbb:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("CCard",[a("CCardHeader",[a("p",[a("b",[t._v("Daftar")]),t._v(" Kurir")])]),a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("v-client-table",{attrs:{data:t.kurir,columns:t.tableFields,options:t.tableOptions,id:"kurir_table"},scopedSlots:t._u([{key:"foto",fn:function(t){return a("div",{},[a("img",{attrs:{src:t.row.foto}})])}},{key:"aksi",fn:function(n){return a("div",{staticClass:"d-flex justify-content-center"},[2!=t.data.level?a("button",{staticClass:"text-danger btn btn-secondary btn-sm",attrs:{title:"hapus data kurir"},on:{click:function(a){return t.deleteKurir(n.row.id)}}},[a("i",{ref:"id",staticClass:"fa fa-trash",attrs:{id:n.row.id_karyawan}})]):t._e()])}}])})],1)],1)],1)],1),a("CModal",{attrs:{title:"Hapus Data Kurir",size:"sm",color:"danger",show:t.smallModal},on:{"update:show":function(n){t.smallModal=n}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("CButton",{attrs:{color:"danger"},on:{click:function(n){return t.deleteKurir()}}},[t._v("Hapus")]),a("CButton",{attrs:{color:"secondary"},on:{click:function(n){t.smallModal=!1}}},[t._v("Batal")])]},proxy:!0}])},[t._v(" Data Kurir ini akan dihapus secara permanen? ")])],1)},o=[],r=a("8e44"),i={name:"Kurir",data:function(){return{id:0,smallModal:!1,data:"",tableFields:["no","no_karyawan","nama_karyawan","email","wa_hp","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",no_karyawan:"No Kurir",nama_karyawan:"Nama Kurir",email:"Email",wa_hp:"No Hp/WA",aksi:"Aksi"},sortable:["no","no_karyawan","nama_karyawan"],columnsClasses:{no:"text-center align-middle",no_karyawan:"align-middle",nama_karyawan:"align-middle",email:"align-middle",wa_hp:"text-center align-middle",aksi:"text-center align-middle"}},kurir:[]}},methods:{getData:function(){var t=this;Object(r["f"])(this,localStorage.base_api+"kurir",{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(n){t.kurir=n;for(var a=0;a<t.kurir.length;a++)t.kurir[a].no=a+1;console.log(n)})).catch((function(n){return console.error(n),t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1}))},deleteKurir:function(t){var n=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a?n.$http.delete(localStorage.base_api+"karyawan/"+t,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(){n.$swal("data user berhasil dihapus","Mohon tunggu sebentar...","success"),setTimeout((function(){n.$swal.close(),n.getData()}),1500)})).catch((function(t){return console.error(t.response),401!=t.response.status?(n.$swal("Tidak bisa hapus data","hubungi pengembangnya...","error"),setTimeout((function(){n.$swal.close()}),1500),console.log(t),!1):(n.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),n.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){n.$swal.close(),n.$router.replace({path:"/login"})}),1500)})).catch((function(t){return console.log(t),n.$swal("Tidak bisa hapus data","hubungi pengembangnya...","error"),setTimeout((function(){n.$swal.close()}),1500),!1})),!1)})):n.$swal.close()}))}},created:function(){this.getData()},mounted:function(){this.data=this.$store.getters.userData}},u=i,s=(a("c57d"),a("2877")),c=Object(s["a"])(u,e,o,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-a2c7ce6a.2ce03aec.js.map