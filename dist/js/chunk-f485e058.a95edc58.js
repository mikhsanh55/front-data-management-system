(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f485e058"],{"0157":function(e,t,n){},3207:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[e._v("Daftar")]),e._v(" Sales")])]),n("CCardBody",[n("CRow",[n("CCol",{attrs:{sm:"12"}},[n("v-client-table",{attrs:{data:e.sales,columns:e.tableFields,options:e.tableOptions,id:"sales_table"},scopedSlots:e._u([{key:"aksi",fn:function(t){return n("div",{staticClass:"d-flex justify-content-center"},[2!=e.data.level?n("button",{ref:"el",staticClass:"text-danger btn btn-secondary btn-sm",attrs:{id:t.row.id},on:{click:function(n){return e.deleteSales(t.row.id)}}},[n("i",{staticClass:"fa fa-trash"})]):e._e()])}}])})],1)],1)],1)],1)],1)},o=[],i=n("8e44"),r={name:"Sales",data:function(){return{sales:[],id:1,data:"",tableFields:["no","no_karyawan","nama_karyawan","email","wa_hp","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",no_karyawan:"No Karyawan",nama_karyawan:"Nama Karyawan",email:"Email",aksi:"Aksi"},sortable:["no","email","wa_hp"],filterable:["email"],columnsClasses:{no:"text-center align-middle",no_pegawai:"align-middle",nama_pegawai:"align-middle",email:"align-middle",aksi:"text-center align-middle"}}}},methods:{getData:function(){var e=this;Object(i["g"])(this,localStorage.base_api+"sales",{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){console.log(t),e.sales=t;for(var n=0;n<e.sales.length;n++)e.sales[n].no=n+1})).catch((function(t){return 401!=t.response.status?(e.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){e.$swal.close(),e.$router.replace({path:"/login"})}),1500),e.label="Update Karyawan",console.log(t),!1):(e.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),e.$swal("Sesi login kamu sudah habis","login kagi yah...","warning"),setTimeout((function(){e.$swal.close(),e.$router.replace({path:"/login"})}),1500)})).catch((function(t){return e.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){e.$swal.close(),e.$router.replace({path:"/login"})}),1500),!1})),!1)}))},deleteSales:function(e){var t=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n?t.$http.delete(localStorage.base_api+"sales/"+e,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(e){t.smallModal=!1,alert(e.data.message),t.getData()})).catch((function(e){if(console.error(e.response),401==e.response.status)t.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){t.$router.replace({path:"/login"})})).catch((function(e){return alert("An error occured when get data :("),!1}));else if(500===e.response.status)return t.smallModal=!1,alert("Something wrong with the server"),!1;return!1})):t.$swal.close()}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),this.getData()},mounted:function(){this.data=JSON.parse(localStorage.user),console.log(this.data)}},s=r,l=(n("8512"),n("2877")),c=Object(l["a"])(s,a,o,!1,null,null,null);t["default"]=c.exports},8512:function(e,t,n){"use strict";var a=n("0157"),o=n.n(a);o.a},"8e44":function(e,t,n){"use strict";function a(e,t,n,a,o){return new Promise((function(i,r){e.$http.post(t,n,a).then((function(e){var t=URL.createObjectURL(new Blob([e.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=t,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(e){r(e)}))}))}function o(){var e;return e=window.XMLHttpsRequest?new XMLHttpsRequest:new ActiveXObject("Microsoft.XMLHTTP"),e}function i(e,t,n){return new Promise((function(a,i){var r=o();r.responseType="json",r.setRequestHeader("Authorization","bearer "+localStorage.token),"withCredentials"in r?r.open("POST",e,!0):"undefined"!=typeof XDomainRequest?(r=new XDomainRequest,r.open("POST",e)):r=null,r||i(),r.onload=function(){var e=URL.createObjectURL(new Blob([r.response],{type:"application/vnd.ms-excel"})),t=document.createElement("a");t.href=e,t.setAttribute("download",n),document.body.appendChild(t),t.click(),a()},r.onerror=function(){i()},r.send(t)}))}function r(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,r){"get"==o?e.$http.get(t,n).then((function(e){var t=URL.createObjectURL(new Blob([e.data],{type:"application/pdf"})),n=document.createElement("a");n.href=t,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(e){r(e)})):e.$http.post(t,n).then((function(e){var t=URL.createObjectURL(new Blob([e.data],{type:"application/pdf"})),n=document.createElement("a");n.href=t,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(e){r(e)}))}))}function s(e){return new Promise((function(t,n){e.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(e){for(var t=[],n=[],a=0;a<e.data.length;a++){var o=new Date(e.data[a].date_line),i=new Date(o.setDate(o.getDate()-2));t.push({date:i,data:e.data[a],link:"po/detail/"+e.data[a].id})}for(var r=0;r<t.length;r++){var s=new Date,l=new Date(t[r].date);s==l&&n.push({date:t[r].date,data:t[r]})}return localStorage.setItem("notif",JSON.stringify(t)),t})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}function l(e,t){return new Promise((function(n,a){var o=-1;Promise.all(e.map((function(e){return o++,fetch(e,t[o])}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){n(e)})).catch((function(e){return a(e)}))}))}function c(e,t,n,a){return new Promise((function(a,o){fetch(t,n).then((function(t){return 401==t.status?(e.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){e.$swal.close(),e.$store.dispatch("logout").then((function(){return e.$router.replace("/login")}))}),1500),!1):500==t.status?(e.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){e.$swal.close()}),1500),!1):t.json()})).then((function(e){return a(e)})).catch((function(e){return o(e)}))}))}function u(e,t,n){return new Promise((function(a,o){fetch(t,n).then((function(t){return 401==t.status?(e.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){e.$swal.close(),e.$store.dispatch("logout").then((function(){return e.$router.replace("/login")}))}),1500),!1):500==t.status?(e.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){e.$swal.close()}),1500),!1):t.json()})).then((function(e){return a(e)})).catch((function(e){return o(e)}))}))}n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return u}))}}]);
//# sourceMappingURL=chunk-f485e058.a95edc58.js.map