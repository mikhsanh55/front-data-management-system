(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12fddae6"],{1585:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",[a("CCard",{staticClass:"w-100"},[a("CCardHeader",[a("b",[t._v("Data")]),t._v(" Order Barang ")]),a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("button",{staticClass:"float-right mb-4 ml-2 btn btn-success",on:{click:function(e){t.modal=!0}}},[a("small",[a("i",{staticClass:"fa fa fa-file-excel-o mr-1"}),t._v(" Export .xlsx")])]),a("v-client-table",{attrs:{data:t.dataOrder,columns:t.tableFields,options:t.tableOptions,id:"order_po_table"},scopedSlots:t._u([{key:"aksi",fn:function(e){return a("div",{},[2!=t.data.level?a("div",[a("router-link",{staticClass:"btn btn-dark btn-sm",attrs:{to:"/po/data-order-barang/detail/"+e.row.id}},[t._v(" Detail ")])],1):t._e()])}}])})],1)],1)],1)],1)],1),a("CModal",{attrs:{show:t.modal,"no-close-on-backdrop":!0,title:"Export Data ke Excel",size:"sm",color:"dark"},on:{"update:show":function(e){t.modal=e}},scopedSlots:t._u([{key:"header",fn:function(){return[a("h6",{staticClass:"modal-title"},[t._v("Export Data ke Excel")]),a("CButtonClose",{staticClass:"text-white",on:{click:function(e){t.modal=!1}}})]},proxy:!0},{key:"footer",fn:function(){return[a("CButton",{attrs:{color:"success"},on:{click:t.storeExcel}},[t._v(t._s(t.exportLabel))])]},proxy:!0}])},[a("CInput",{attrs:{type:"date",label:"Dari",horizontal:""},model:{value:t.date.from,callback:function(e){t.$set(t.date,"from",e)},expression:"date.from"}}),a("CInput",{attrs:{type:"date",label:"Sampai",horizontal:""},model:{value:t.date.to,callback:function(e){t.$set(t.date,"to",e)},expression:"date.to"}})],1)],1)},o=[],r=a("8e44"),i={name:"DataOrderPO",data:function(){return{exportLabel:"Mulai Export",data:"",date:{from:null,to:null},modal:!1,dataOrder:[],tableFields:["no","kode_barang","nama_barang","spesifikasi_barang","qty","keterangan","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi_barang:"Spesifikasi Barang",qty:"Quantity",keterangan:"Keterangan",aksi:"Aksi"},sortable:["no","nama_barang","qty"],filterable:["nama_barang","qty","kode_barang","spesifikasi_barang","keterangan"],columnsClasses:{no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi_barang:"align-middle",qty:"text-center align-middle",keterangan:"align-middle",aksi:"text-center align-middle"}}}},methods:{storeExcel:function(){var t=this;if(null==this.date.from||null==this.date.to)return this.$swal("Tanggal tidak boleh kosong","","warning"),setTimeout((function(){return t.$swal.close(),!1}),2e3),this.exportLabel="Mulai Export",!1;this.exportLabel="Loading...",Object(r["c"])(this,localStorage.base_api+"excel/order/barang",{from:this.date.from,to:this.date.to},{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token}},"order barang.xls").then((function(){t.modal=!1,t.exportLabel="Mulai Export"})).catch((function(e){return t.exportLabel="Mulai Export",console.log(e),t.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3),!1}))}},created:function(){var t=this;1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),Object(r["f"])(this,localStorage.base_api+"order/barang/po",{headers:{Authorization:"bearer "+localStorage.token}},"get").then((function(e){var a=e,n=[];return a.forEach((function(e,a){a+=1,Object(r["f"])(t,localStorage.base_api+"barang/"+e.id_barang,{method:"post",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(t){var o={};o.id=e.id,o.qty=e.qty,o.no=a++,o.kode_barang=t.kode_barang,o.nama_barang=t.nama_barang,o.spesifikasi_barang=t.spesifikasi,o.keterangan=t.keterangan,n.push(o)}))})),n})).then((function(e){t.dataOrder=e})).catch((function(t){return console.error(t)}))},mounted:function(){this.data=this.$store.getters.userData}},s=i,l=(a("deec"),a("2877")),c=Object(l["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports},"8e44":function(t,e,a){"use strict";function n(t,e,a,n,o){return new Promise((function(r,i){t.$http.post(e,a,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.href=e,a.setAttribute("download",o),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function o(t,e,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,i){"get"==o?t.$http.get(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){i(t)})):t.$http.post(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function r(t){return new Promise((function(e,a){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],a=[],n=0;n<t.data.length;n++){var o=new Date(t.data[n].date_line),r=new Date(o.setDate(o.getDate()-2));e.push({date:r,data:t.data[n],link:"po/detail/"+t.data[n].id})}for(var i=0;i<e.length;i++){var s=(new Date).setHours(0,0,0,0),l=new Date(e[i].date).setHours(0,0,0,0);s=new Date(s),l=new Date(l),console.log("Current Date "+s),console.log("Notif Date "+l),s.getTime()==l.getTime()&&(console.warn("sama cuy"),console.log(l),a.push({date:l,data:e[i],link:"po/detail/"+e[i].id}))}return localStorage.setItem("notif",JSON.stringify(a)),a})).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function i(t,e){return new Promise((function(a,n){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){a(t)})).catch((function(t){return n(t)}))}))}function s(t,e,a,n){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}function l(t,e,a){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return i})),a.d(e,"f",(function(){return s})),a.d(e,"b",(function(){return l}))},"9c80":function(t,e,a){},deec:function(t,e,a){"use strict";var n=a("9c80"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-12fddae6.0564dbfc.js.map