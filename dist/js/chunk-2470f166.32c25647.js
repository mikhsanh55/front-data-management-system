(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2470f166"],{"56e2":function(t,e,n){},7616:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CCard",[n("CCardHeader",[n("b",[t._v("Data")]),t._v(" Konsumen ")]),n("CCardBody",[n("CRow",[n("CCol",{attrs:{sm:"12"}},[2==t.data.level||1==t.data.level||3==t.data.level?n("button",{staticClass:"float-right mb-4 ml-2 btn btn-light",on:{click:t.storeExcel}},[n("small",[n("i",{staticClass:"fa fa fa-file-excel-o mr-1"}),t._v(" Export .xlsx")])]):t._e(),2!=t.data.level||5==t.data.level||1==t.data.level?n("router-link",{staticClass:"float-right mb-4 btn btn-light",attrs:{to:"/konsumen/add"}},[n("small",[n("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah Konsumen")])]):t._e(),n("v-client-table",{attrs:{data:t.tableItem,columns:t.tableFields,options:t.tableOptions,id:"konsumen_table"},scopedSlots:t._u([{key:"aksi",fn:function(e){return n("div",{staticClass:"d-flex justify-content-center"},[n("router-link",{staticClass:"text-dark btn btn-secondary btn-sm mr-2",attrs:{to:"/konsumen/detail/"+e.row.id,title:"Detail Konsumen"}},[n("i",{staticClass:"fa fa-eye"})]),2!=t.data.level?n("router-link",{staticClass:"text-primary btn btn-secondary btn-sm mr-2",attrs:{to:"/konsumen/edit/"+e.row.id}},[n("i",{staticClass:"fa fa-edit"})]):t._e(),2!=t.data.level?n("button",{ref:"el",staticClass:"text-danger btn btn-secondary btn-sm",attrs:{id:e.row.id},on:{click:function(n){return t.deleteKonsumen(e.row.id)}}},[n("i",{staticClass:"fa fa-trash"})]):t._e()],1)}}])})],1)],1)],1)],1)],1)},o=[],i=n("8e44"),s={name:"Konsumen",data:function(){return{id:0,modal:!1,date:{from:null},exportLabel:"Mulai Export",self:this,data:"",smallModal:!1,confirmDelete:!1,konsumen:[],tableItem:[],tableFields:["no","nama","email","wa_hp","karakteristik_perusahaan","alamat","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",nama:"Nama",email:"Email",wa_hp:"No HP/WA",karakteristik_perusahaan:"Karakteristik Perusahaan",alamat:"Alamat Instansi",aksi:"Aksi"},sortable:["nama","no_rekening","email"],filterable:["nama","email","wa_hp","karakteristik_perusahaan","alamat"],columnsClasses:{no:"text-center align-middle",nama:"align-middle",email:"align-middle",wa_hp:"text-center align-middle",karakteristik_perusahaan:"align-middle",alamat:"align-middle",aksi:"text-center align-middle"}}}},methods:{storeExcel:function(){var t=this;this.$swal("Mohon tunggu...","","info"),this.exportLabel="Loading...",Object(i["c"])(this,"https://young-temple-67589.herokuapp.com/api/excel/konsumen",{from:null,to:null},{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token}},"konsumen.xls").then((function(){t.$swal.close()})).catch((function(e){return t.$swal.close(),console.log(e),t.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3),!1}))},deleteKonsumen:function(t){var e=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n?e.$http.delete("https://young-temple-67589.herokuapp.com/api/konsumen/"+t,{headers:{Authorization:"bearer "+localStorage.getItem("token"),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*"}}).then((function(t){1==t.data.status&&alert(t.data.message),e.$swal(t.data.message,"","success"),setTimeout((function(){e.$swal.close(),e.getData()}),1500)})).catch((function(t){console.log(t)})):e.$swal.close()}))},getData:function(){var t=this;this.$http.get("https://young-temple-67589.herokuapp.com/api/konsumen",{headers:{Authorization:"bearer "+localStorage.getItem("token"),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*"}}).then((function(e){t.tableItem=e.data;for(var n=0;n<t.tableItem.length;n++)t.tableItem[n].no=n+1;console.log(e.data)})).catch((function(e){if(console.error(e.response),401!=e.response.status)return alert("Ada sedikit masalah di sisi server, harap hubungi pengembangnya :)"),console.log(e),!1;t.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){t.$router.replace({path:"/login"})})).catch((function(t){return alert("An error occured when get data :("),!1}))}))}},created:function(){this.getData()},mounted:function(){this.data=this.$store.getters.userData,console.log(this.data)}},r=s,l=(n("cc5c"),n("2877")),c=Object(l["a"])(r,a,o,!1,null,null,null);e["default"]=c.exports},"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(i,s){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){s(t)}))}))}function o(t,e,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,s){"get"==o?t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){s(t)})):t.$http.post(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){s(t)}))}))}function i(t){return new Promise((function(e,n){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],n=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),i=new Date(o.setDate(o.getDate()-2));e.push({date:i,data:t.data[a],link:"/po/"+t.data[a].id})}for(var s=0;s<e.length;s++){var r=new Date,l=new Date(e[s].date);r==l&&n.push({date:e[s].date,data:e[s]})}return localStorage.setItem("notif",JSON.stringify(n)),n})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}function s(t,e){return new Promise((function(n,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return a(t)}))}))}function r(t,e,n,a){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function l(t,e,n){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return l}))},cc5c:function(t,e,n){"use strict";var a=n("56e2"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-2470f166.32c25647.js.map