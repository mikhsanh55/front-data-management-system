(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-631dfeca"],{"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(i,r){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function o(t,e,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,r){"get"==o?t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)})):t.$http.post(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function i(t){return new Promise((function(e,n){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],n=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),i=new Date(o.setDate(o.getDate()-2));e.push({date:i,data:t.data[a],link:"po/detail/"+t.data[a].id})}for(var r=0;r<e.length;r++){var s=new Date,l=new Date(e[r].date);s==l&&n.push({date:e[r].date,data:e[r]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}function r(t,e){return new Promise((function(n,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return a(t)}))}))}function s(t,e,n,a){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function l(t,e,n){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return l}))},bf5b:function(t,e,n){"use strict";var a=n("c5e8"),o=n.n(a);o.a},c5e8:function(t,e,n){},eeca:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[t._v("Daftar")]),t._v(" User")])]),n("CCardBody",[n("CRow",[n("CCol",{attrs:{sm:"12"}},[2!=t.data.level?n("router-link",{staticClass:"float-right mb-4 btn btn-primary",attrs:{to:"/user/add"}},[n("small",[n("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah User")])]):t._e(),n("v-client-table",{attrs:{data:t.user,columns:t.tableFields,options:t.tableOptions,id:"user_table"},scopedSlots:t._u([{key:"foto",fn:function(t){return n("div",{},[n("img",{attrs:{src:t.row.foto}})])}},{key:"aksi",fn:function(e){return n("div",{staticClass:"d-flex justify-content-center"},[n("router-link",{staticClass:"btn btn-dark btn-sm mr-2",attrs:{to:"/user/detail/"+e.row.id,title:"detail user"}},[t._v(" Detail ")]),2!=t.data.level?n("router-link",{staticClass:"btn btn-primary btn-sm mr-2",attrs:{to:"/user/edit/"+e.row.id,title:"edit user"}},[t._v(" Edit ")]):t._e(),2!=t.data.level?n("button",{staticClass:"btn btn-danger btn-sm",attrs:{title:"hapus data kwitansi"},on:{click:function(n){return t.deleteUser(e.row.id)}}},[t._v("Hapus")]):t._e()],1)}}])})],1)],1)],1)],1)],1)},o=[],i=n("8e44"),r={name:"User",data:function(){return{smallModal:!1,data:"",tableFields:["no","nama","email","level","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",nama:"Nama Karyawan",email:"Email",level:"Jabatan",aksi:"Aksi"},sortable:["no","email"],columnsClasses:{no:"text-center align-middle",nama:"align-middle",email:"align-middle",level:"text-center align-middle",aksi:"text-center align-middle"}},user:[]}},methods:{getData:function(){var t=this,e=new Headers;e.append("Authorization","bearer "+localStorage.getItem("token"));var n={method:"GET",headers:e,redirect:"follow"};Object(i["f"])(this,localStorage.base_api+"user",n).then((function(e){if(console.log(e),40001==e.errcode)t.$store.dispatch("logout").then((function(){t.$swal("Sesi login kamu sudah habis","login lagi yah","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(e){return t.$swal("Maaf tidak bisa mengambil data","hubungi pengembangnya yah","danger"),setTimeout((function(){t.$swal.close()}),1500),!1}));else{t.user=e;for(var n=0;n<=t.user.length;n++)t.user[n].no=n+1;console.log(t.user.length)}})).catch((function(t){return console.log("Si Doel"),console.log(t),!1}))},deleteUser:function(t){var e=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n?e.$http.delete(localStorage.base_api+"user/"+t,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){e.$swal(t.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){e.getData(),e.$swal.close()}),1500)})).catch((function(t){return e.$swal("","Mohon tunggu sebentar...","success"),setTimeout((function(){e.getData(),e.$swal.close()}),1500),e.smallModal=!1,console.error(t),!1})):e.$swal.close()}))}},created:function(){void 0!=localStorage.getItem("token")&&null!=localStorage.getItem("token")||this.$router.replace("/login"),1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),this.getData()},mounted:function(){this.data=JSON.parse(localStorage.user),console.log(this.data)}},s=r,l=(n("bf5b"),n("2877")),u=Object(l["a"])(s,a,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-631dfeca.8e43a58c.js.map