(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f485e058"],{"0157":function(t,e,n){},3207:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[t._v("Daftar")]),t._v(" Sales")])]),n("CCardBody",[n("CRow",[n("CCol",{attrs:{sm:"12"}},[n("v-client-table",{attrs:{data:t.sales,columns:t.tableFields,options:t.tableOptions,id:"sales_table"},scopedSlots:t._u([{key:"aksi",fn:function(e){return n("div",{staticClass:"d-flex justify-content-center"},[2!=t.data.level?n("button",{ref:"el",staticClass:"btn btn-danger btn-sm",attrs:{id:e.row.id},on:{click:function(n){return t.deleteSales(e.row.id)}}},[t._v("Hapus")]):t._e()])}}])})],1)],1)],1)],1)],1)},o=[],i=n("8e44"),r={name:"Sales",data:function(){return{sales:[],id:1,data:"",tableFields:["no","no_karyawan","nama_karyawan","email","wa_hp","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",no_karyawan:"No Karyawan",nama_karyawan:"Nama Karyawan",email:"Email",aksi:"Aksi"},sortable:["no","email","wa_hp"],filterable:["email"],columnsClasses:{no:"text-center align-middle",no_pegawai:"align-middle",nama_pegawai:"align-middle",email:"align-middle",aksi:"text-center align-middle"}}}},methods:{getData:function(){var t=this;Object(i["f"])(this,localStorage.base_api+"sales",{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(e){t.sales=e;for(var n=0;n<t.sales.length;n++)t.sales[n].no=n+1})).catch((function(e){return 401!=e.response.status?(t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500),t.label="Update Karyawan",console.log(e),!1):(t.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),t.$swal("Sesi login kamu sudah habis","login kagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(e){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500),!1})),!1)}))},deleteSales:function(t){var e=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n?e.$http.delete(localStorage.base_api+"sales/"+t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){e.smallModal=!1,e.getData()})).catch((function(t){if(console.error(t.response),401==t.response.status)e.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){e.$router.replace({path:"/login"})})).catch((function(t){return alert("An error occured when get data :("),!1}));else if(500===t.response.status)return e.smallModal=!1,alert("Something wrong with the server"),!1;return!1})):e.$swal.close()}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),this.getData()},mounted:function(){this.data=JSON.parse(localStorage.user)}},l=r,s=(n("8512"),n("2877")),u=Object(s["a"])(l,a,o,!1,null,null,null);e["default"]=u.exports},8512:function(t,e,n){"use strict";var a=n("0157"),o=n.n(a);o.a},"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(i,r){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function o(t,e,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,r){"get"==o?t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)})):t.$http.post(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function i(t){return new Promise((function(e,n){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],n=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),i=new Date(o.setDate(o.getDate()-2));e.push({date:i,data:t.data[a],link:"po/detail/"+t.data[a].id})}for(var r=0;r<e.length;r++){var l=new Date,s=new Date(e[r].date);l==s&&n.push({date:e[r].date,data:e[r]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}function r(t,e){return new Promise((function(n,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return a(t)}))}))}function l(t,e,n,a){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function s(t,e,n){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"b",(function(){return s}))}}]);
//# sourceMappingURL=chunk-f485e058.f5153e62.js.map