(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12fddae6"],{1585:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CRow",[n("CCard",{staticClass:"w-100"},[n("CCardHeader",[n("b",[t._v("Data")]),t._v(" Order Barang ")]),n("CCardBody",[n("CRow",[n("CCol",{attrs:{sm:"12"}},[n("button",{staticClass:"float-right mb-4 ml-2 btn btn-light",on:{click:function(e){t.modal=!0}}},[n("small",[n("i",{staticClass:"fa fa fa-file-excel-o mr-1"}),t._v(" Export .xlsx")])]),n("v-client-table",{attrs:{data:t.dataOrder,columns:t.tableFields,options:t.tableOptions,id:"order_po_table"},scopedSlots:t._u([{key:"aksi",fn:function(e){return n("div",{},[2!=t.data.level?n("div",[n("router-link",{staticClass:"text-dark btn btn-secondary btn-sm",attrs:{to:"/po/data-order-barang/detail/"+e.row.id}},[n("i",{staticClass:"fa fa-eye"})])],1):t._e()])}}])})],1)],1)],1)],1)],1),n("CModal",{attrs:{show:t.modal,"no-close-on-backdrop":!0,title:"Export Data ke Excel",size:"sm",color:"dark"},on:{"update:show":function(e){t.modal=e}},scopedSlots:t._u([{key:"header",fn:function(){return[n("h6",{staticClass:"modal-title"},[t._v("Export Data ke Excel")]),n("CButtonClose",{staticClass:"text-white",on:{click:function(e){t.modal=!1}}})]},proxy:!0},{key:"footer",fn:function(){return[n("CButton",{attrs:{color:"success"},on:{click:t.storeExcel}},[t._v(t._s(t.exportLabel))])]},proxy:!0}])},[n("CInput",{attrs:{type:"date",label:"Dari",horizontal:""},model:{value:t.date.from,callback:function(e){t.$set(t.date,"from",e)},expression:"date.from"}}),n("CInput",{attrs:{type:"date",label:"Sampai",horizontal:""},model:{value:t.date.to,callback:function(e){t.$set(t.date,"to",e)},expression:"date.to"}})],1)],1)},o=[],r=n("8e44"),i={name:"DataOrderPO",data:function(){return{exportLabel:"Mulai Export",data:"",date:{from:null,to:null},modal:!1,dataOrder:[],tableFields:["no","kode_barang","nama_barang","spesifikasi_barang","qty","keterangan","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi_barang:"Spesifikasi Barang",qty:"Quantity",keterangan:"Keterangan",aksi:"Aksi"},sortable:["no","nama_barang","qty"],filterable:["nama_barang","qty","kode_barang","spesifikasi_barang","keterangan"],columnsClasses:{no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi_barang:"align-middle",qty:"text-center align-middle",keterangan:"align-middle",aksi:"text-center align-middle"}}}},methods:{storeExcel:function(){var t=this;if(null==this.date.from||null==this.date.to)return this.$swal("Tanggal tidak boleh kosong","","warning"),setTimeout((function(){return t.$swal.close(),!1}),2e3),this.exportLabel="Mulai Export",!1;this.exportLabel="Loading...",Object(r["c"])(this,localStorage.base_api+"excel/order/barang",{from:this.date.from,to:this.date.to},{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token}},"order barang.xls").then((function(){t.modal=!1,t.exportLabel="Mulai Export"})).catch((function(e){return t.exportLabel="Mulai Export",console.log(e),t.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3),!1}))}},created:function(){var t=this;1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),Object(r["g"])(this,localStorage.base_api+"order/barang/po",{headers:{Authorization:"bearer "+localStorage.token}},"get").then((function(e){var n=e,a=[];return n.forEach((function(e,n){n+=1,Object(r["g"])(t,localStorage.base_api+"barang/"+e.id_barang,{method:"post",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(t){var o={};o.id=e.id,o.qty=e.qty,o.no=n++,o.kode_barang=t.kode_barang,o.nama_barang=t.nama_barang,o.spesifikasi_barang=t.spesifikasi,o.keterangan=t.keterangan,a.push(o)}))})),a})).then((function(e){t.dataOrder=e,console.log(t.dataOrder)})).catch((function(t){return console.error(t)}))},mounted:function(){this.data=this.$store.getters.userData}},s=i,l=(n("deec"),n("2877")),c=Object(l["a"])(s,a,o,!1,null,null,null);e["default"]=c.exports},"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(r,i){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function o(){var t;return t=window.XMLHttpsRequest?new XMLHttpsRequest:new ActiveXObject("Microsoft.XMLHTTP"),t}function r(t,e,n){return new Promise((function(a,r){var i=o();i.responseType="json",i.setRequestHeader("Authorization","bearer "+localStorage.token),"withCredentials"in i?i.open("POST",t,!0):"undefined"!=typeof XDomainRequest?(i=new XDomainRequest,i.open("POST",t)):i=null,i||r(),i.onload=function(){var t=URL.createObjectURL(new Blob([i.response],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=t,e.setAttribute("download",n),document.body.appendChild(e),e.click(),a()},i.onerror=function(){r()},i.send(e)}))}function i(t,e,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,i){"get"==o?t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){i(t)})):t.$http.post(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function s(t){return new Promise((function(e,n){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],n=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),r=new Date(o.setDate(o.getDate()-2));e.push({date:r,data:t.data[a],link:"po/detail/"+t.data[a].id})}for(var i=0;i<e.length;i++){var s=new Date,l=new Date(e[i].date);s==l&&n.push({date:e[i].date,data:e[i]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}function l(t,e){return new Promise((function(n,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return a(t)}))}))}function c(t,e,n,a){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function u(t,e,n){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"b",(function(){return u}))},"9c80":function(t,e,n){},deec:function(t,e,n){"use strict";var a=n("9c80"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-12fddae6.2f3d710a.js.map