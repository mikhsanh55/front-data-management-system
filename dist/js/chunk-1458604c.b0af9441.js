(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1458604c"],{"3a9b":function(t,a,e){},"7e9e":function(t,a,e){"use strict";var n=e("3a9b"),o=e.n(n);o.a},"8e44":function(t,a,e){"use strict";function n(t,a,e,n,o){return new Promise((function(r,i){t.$http.post(a,e,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=a,e.setAttribute("download",o),document.body.appendChild(e),e.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function o(t,a,e,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,i){"get"==o?t.$http.get(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){r()})).catch((function(t){i(t)})):t.$http.post(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function r(t){return new Promise((function(a,e){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var a=[],e=[],n=0;n<t.data.length;n++){var o=new Date(t.data[n].date_line),r=new Date(o.setDate(o.getDate()-2));a.push({date:r,data:t.data[n],link:"/po/"+t.data[n].id})}for(var i=0;i<a.length;i++){var l=new Date,s=new Date(a[i].date);l==s&&e.push({date:a[i].date,data:a[i]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return a(t)})).catch((function(t){return e(t)}))}))}function i(t,a){return new Promise((function(e,n){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,a[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return n(t)}))}))}function l(t,a,e,n){return new Promise((function(n,o){fetch(a,e).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}function s(t,a,e){return new Promise((function(n,o){fetch(a,e).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}e.d(a,"c",(function(){return n})),e.d(a,"d",(function(){return o})),e.d(a,"a",(function(){return r})),e.d(a,"e",(function(){return i})),e.d(a,"f",(function(){return l})),e.d(a,"b",(function(){return s}))},ff2f:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CCard",[e("CCardHeader",[e("p",[e("b",[t._v("Daftar")]),t._v(" Karyawan")])]),e("CCardBody",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[3==t.data.level||2==t.data.level||1==t.data.level?e("button",{staticClass:"float-right mb-4 ml-2 btn btn-light",on:{click:t.storeExcel}},[e("small",[e("i",{staticClass:"fa fa fa-file-excel-o mr-1"}),t._v(" Export .xlsx")])]):t._e(),2!=t.data.level&&7!=t.data.level?e("router-link",{staticClass:"float-right mb-4 btn btn-light",attrs:{to:"/karyawan/add"}},[e("small",[e("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah Karyawan")])]):t._e(),e("v-client-table",{attrs:{data:t.karyawan,columns:t.tableFields,options:t.tableOptions,id:"karyawan_table"},scopedSlots:t._u([{key:"foto",fn:function(a){return e("div",{},[e("img",{attrs:{src:t.uri+a.row.foto}})])}},{key:"jk",fn:function(a){return e("div",{},[1==a.row.jk?e("p",[t._v("Laki - laki")]):e("p",[t._v("Perempuan")])])}},{key:"aksi",fn:function(a){return e("div",{staticClass:"d-flex justify-content-center"},[e("router-link",{staticClass:"text-dark btn btn-secondary btn-sm mr-2",attrs:{to:"/karyawan/detail/"+a.row.id,title:"Detail karyawan"}},[e("i",{staticClass:"fa fa-eye"})]),2!=t.data.level&&7!=t.data.level?e("router-link",{staticClass:"text-primary btn btn-secondary btn-sm mr-2",attrs:{to:"/karyawan/edit/"+a.row.id,title:"Edit data karyawan"}},[e("i",{staticClass:"fa fa-edit"})]):t._e(),2!=t.data.level&&7!=t.data.level?e("button",{staticClass:"text-danger btn btn-secondary btn-sm",attrs:{title:"hapus data karyawan"},on:{click:function(e){return t.deleteKaryawan(a.row.id)}}},[e("i",{ref:"id",staticClass:"fa fa-trash",attrs:{id:a.row.id}})]):t._e()],1)}}])})],1)],1)],1)],1),e("CModal",{attrs:{show:t.modal,"no-close-on-backdrop":!0,title:"Export Data ke Excel",size:"sm",color:"dark"},on:{"update:show":function(a){t.modal=a}},scopedSlots:t._u([{key:"header",fn:function(){return[e("h6",{staticClass:"modal-title"},[t._v("Export Data ke Excel")]),e("CButtonClose",{staticClass:"text-white",on:{click:function(a){t.modal=!1}}})]},proxy:!0},{key:"footer",fn:function(){return[e("CButton",{attrs:{color:"success"},on:{click:t.storeExcel}},[t._v(t._s(t.exportLabel))])]},proxy:!0}])},[e("CInput",{attrs:{type:"date",label:"Tanggal",horizontal:""},model:{value:t.date.from,callback:function(a){t.$set(t.date,"from",a)},expression:"date.from"}})],1)],1)},o=[],r=e("8e44"),i={name:"Karyawan",data:function(){return{modal:!1,base_api:localStorage.base_api,date:{from:null},exportLabel:"Mulai Export",id:0,uri:localStorage.base_uri,data:"",api_url:"",smallModal:!1,tableFields:["no","no_karyawan","nama_karyawan","email","wa_hp","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",no_karyawan:"No Karyawan",nama_karyawan:"Nama Karyawan",email:"Email",wa_hp:"No HP/WA",aksi:"Aksi"},sortable:["no","no_karyawan"],columnsClasses:{no:"text-center align-middle",no_karyawan:"align-middle",email:"align-middle",wa_hp:"text-center align-middle",aksi:"text-center align-middle"}},karyawan:[]}},methods:{storeExcel:function(){var t=this;this.$swal("Mohon tunggu...","","info"),Object(r["c"])(this,localStorage.base_api+"excel/karyawan",{from:null,to:null},{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token,"Access-Control-Allow-Origin":"*"}},"karyawan.xls").then((function(){t.modal=!1,t.$swal.close()})).catch((function(a){return t.$swal.close(),console.log(a),t.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3),!1}))},getData:function(){var t=this;7==this.data.level?(this.api_url=this.base_api+"sales",console.log(this.data.level)):(this.api_url=this.base_api+"karyawan",console.log(this.data.level));var a=new Headers;a.append("Authorization","bearer "+localStorage.getItem("token"));var e={method:"GET",headers:a,redirect:"follow"};Object(r["f"])(this,this.api_url,e).then((function(a){console.log(a),t.karyawan=a;for(var e=0;e<t.karyawan.length;e++)t.karyawan[e].no=e+1})).catch((function(t){return console.warn("NGETEH ASU!"),console.error("Get Karyawan error woy "+t),!1}))},deleteKaryawan:function(t){var a=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?Object(r["b"])(a,a.base_api+"karyawan/"+t,{method:"delete",headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"},"delete").then((function(t){a.$swal("Data Karyawan berhasil dihapus","","success"),setTimeout((function(){a.$swal.close(),a.getData()}),1500)})).catch((function(t){return console.warn("NGETEH ASU!"),console.error("Delete Karyawan error woy "+t),!1})):a.$swal.close()}))}},created:function(){var t=this;1!=localStorage.level&&2!=localStorage.level&&7!=localStorage.level&&3!=localStorage.level&&this.$router.push("/"),this.data=JSON.parse(localStorage.user),setTimeout((function(){t.getData()}),500)},mounted:function(){}},l=i,s=(e("7e9e"),e("2877")),c=Object(s["a"])(l,n,o,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1458604c.b0af9441.js.map