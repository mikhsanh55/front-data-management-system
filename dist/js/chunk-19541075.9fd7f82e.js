(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19541075"],{1400:function(t,e,a){"use strict";var n=a("3e73"),o=a.n(n);o.a},"3e73":function(t,e,a){},"8e44":function(t,e,a){"use strict";function n(t,e,a,n,o){return new Promise((function(i,s){t.$http.post(e,a,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.href=e,a.setAttribute("download",o),document.body.appendChild(a),a.click()})).then((function(){i()})).catch((function(t){s(t)}))}))}function o(t,e,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,s){"get"==o?t.$http.get(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){i()})).catch((function(t){s(t)})):t.$http.post(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){i()})).catch((function(t){s(t)}))}))}function i(t){return new Promise((function(e,a){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],a=[],n=0;n<t.data.length;n++){var o=new Date(t.data[n].date_line),i=new Date(o.setDate(o.getDate()-2));e.push({date:i,data:t.data[n],link:"po/detail/"+t.data[n].id})}for(var s=0;s<e.length;s++){var l=new Date,r=new Date(e[s].date);l==r&&a.push({date:e[s].date,data:e[s]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function s(t,e){return new Promise((function(a,n){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){a(t)})).catch((function(t){return n(t)}))}))}function l(t,e,a,n){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}function r(t,e,a){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"b",(function(){return r}))},acba:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",[a("CCard",{staticClass:"w-100"},[a("CCardHeader",[a("b",[t._v("Data")]),t._v(" Purchase Order ")]),a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("button",{staticClass:"float-right mb-4 ml-2 btn btn-light",on:{click:function(e){t.modal=!0}}},[a("small",[a("i",{staticClass:"fa fa fa-file-excel-o mr-1"}),t._v(" Export PO")])]),2!=t.data.level&&6!=t.data.level&&3!=t.data.level?a("router-link",{staticClass:"float-right mb-4 btn btn-light",attrs:{to:"/po/add"}},[a("small",[a("i",{staticClass:"fa fa-plus mr-1"}),t._v(" Tambah PO")])]):t._e(),a("v-client-table",{attrs:{data:t.po,columns:t.tableFields,options:t.tableOptions,id:"po_table"},scopedSlots:t._u([{key:"aksi",fn:function(e){return a("td",{staticClass:"d-flex justify-content-center align-items-center"},[1==e.row.status?a("span",{staticClass:"badge mr-2 align-middle ml-2 badge-primary"},[t._v("Request")]):2==e.row.status?a("span",{staticClass:"badge mr-2 align-middle ml-2 badge-warning"},[t._v("Proses")]):3==e.row.status?a("span",{staticClass:"badge mr-2 align-middle ml-2 badge-warning"},[t._v("Pengiriman")]):4==e.row.status?a("span",{staticClass:"badge mr-2 align-middle ml-2 badge-success"},[t._v("Selesai")]):5==e.row.status?a("span",{staticClass:"badge mr-2 align-middle ml-2 badge-danger"},[t._v("Batal")]):t._e(),a("router-link",{staticClass:"text-dark btn btn-secondary mr-2 btn-sm",attrs:{title:"detail po",to:"/po/detail/"+e.row.id}},[a("i",{staticClass:"fa fa-eye"})]),a("router-link",{staticClass:"btn btn-secondary btn-sm mr-2",attrs:{title:"order po",to:"/po/order-barang/"+e.row.id}},[a("i",{staticClass:"fa fa-shopping-cart "})]),2!=t.data.level?a("router-link",{staticClass:"text-primary btn btn-secondary btn-sm mr-2",attrs:{title:"edit po",to:"/po/edit/"+e.row.id}},[a("i",{staticClass:"fa fa-edit"})]):t._e(),2!=t.data.level?a("button",{staticClass:"text-danger btn btn-secondary btn-sm mr-2",attrs:{title:"export pdf"},on:{click:function(a){return t.confirmPDF(e.row.id)}}},[a("i",{ref:"id",staticClass:"fa fa-file-pdf-o",attrs:{id:e.row.id}})]):t._e(),2!=t.data.level&&6!=t.data.level&&3!=t.data.level?a("button",{staticClass:"text-danger btn btn-secondary btn-sm",attrs:{title:"hapus po"},on:{click:function(a){return t.deletePO(e.row.id)}}},[a("i",{ref:"id",staticClass:"fa fa-trash",attrs:{id:e.row.id}})]):t._e()],1)}}])})],1)],1)],1)],1)],1),a("CModal",{attrs:{show:t.modal_pdf,"no-close-on-backdrop":!0,title:"Export Data ke Excel",size:"sm",color:"dark"},on:{"update:show":function(e){t.modal_pdf=e}},scopedSlots:t._u([{key:"header",fn:function(){return[a("h6",{staticClass:"modal-title"},[t._v("Export Data ke PDF")]),a("CButtonClose",{staticClass:"text-white",on:{click:function(e){t.modal_pdf=!1}}})]},proxy:!0},{key:"footer",fn:function(){return[a("CButton",{attrs:{color:"success"},on:{click:t.storePDF}},[t._v(t._s(t.exportLabel))])]},proxy:!0}])},[a("CSelect",{attrs:{type:"date",label:"Jenis Dokumen",horizontal:"",options:t.pdf},on:{"update:value":t.assignPDF},model:{value:t.pdf.type,callback:function(e){t.$set(t.pdf,"type",e)},expression:"pdf.type"}})],1),a("CModal",{attrs:{show:t.modal,"no-close-on-backdrop":!0,title:"Export Data ke Excel",size:"sm",color:"dark"},on:{"update:show":function(e){t.modal=e}},scopedSlots:t._u([{key:"header",fn:function(){return[a("h6",{staticClass:"modal-title"},[t._v("Export Data ke Excel")]),a("CButtonClose",{staticClass:"text-white",on:{click:function(e){t.modal=!1}}})]},proxy:!0},{key:"footer",fn:function(){return[a("CButton",{attrs:{color:"success"},on:{click:t.storeExcel}},[t._v(t._s(t.exportLabel))])]},proxy:!0}])},[a("CInput",{attrs:{type:"date",label:"Dari",horizontal:""},model:{value:t.date.from,callback:function(e){t.$set(t.date,"from",e)},expression:"date.from"}}),a("CInput",{attrs:{type:"date",label:"Sampai",horizontal:""},model:{value:t.date.to,callback:function(e){t.$set(t.date,"to",e)},expression:"date.to"}})],1)],1)},o=[],i=a("8e44");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={name:"PO",data:function(){var t;return t={exportLabel:"Mulai Export",pdf:{type:"po"}},s(t,"pdf",[{label:"Purchase Order",value:"po"},{label:"Surat Jalan",value:"surat-jalan"},{label:"Invoice",value:"invoice"}]),s(t,"date",{from:null,to:null}),s(t,"modal_pdf",!1),s(t,"modal",!1),s(t,"id",0),s(t,"data",""),s(t,"po",[]),s(t,"tableFields",["nod","no","date","tgl_po_masuk","date_line","sales","konsumen","aksi"]),s(t,"tableOptions",{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{nod:"No",sales:"Nama Sales",date:"Tanggal PO",tgl_po_masuk:"Tanggal PO Masuk",date_line:"Tanggal Pengiriman",konsumen:"Nama Konsumen",no:"No PO",aksi:"Aksi"},sortable:["nod","sales","konsumen","date","date_line","tgl_po_masuk"],filterable:["nod","sales","konsumen","no","date","date_line","tgl_po_masuk"],columnsClasses:{nod:"text-center align-middle",sales:"align-middle",konsumen:"align-middle",no:"align-middle",aksi:"text-center align-middle",date:"text-center align-middle",date_line:"text-center align-middle",tgl_po_masuk:"text-center align-middle"}}),s(t,"id",0),t},methods:{confirmPDF:function(t){this.id=t,this.modal_pdf=!0},assignPDF:function(t){this.pdf.type=t},getData:function(){var t=this;Object(i["f"])(this,localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token},method:"get",redirect:"follow"},"get").then((function(e){t.po=e,t.po.forEach((function(t,e){var a=t.date.split("-"),n=t.date_line.split("-"),o=t.tgl_po_masuk.split(" ");o=o[0],o=o.split("-"),console.log(o),t.nod=e+1,t.date="".concat(a[2],"-").concat(a[1],"-").concat(a[0]),t.date_line="".concat(n[2],"-").concat(n[1],"-").concat(n[0]),t.tgl_po_masuk="".concat(o[2],"-").concat(o[1],"-").concat(o[0])}))})).catch((function(t){return console.error(t),!1}))},storePDF:function(){var t=this,e=localStorage.base_api+"pdf/po/"+this.id,a="po.pdf";switch(this.pdf.type){case"po":e=localStorage.base_api+"pdf/po/"+this.id;break;case"surat-jalan":e=localStorage.base_api+"pdf/po/jalan/"+this.id,a="Surat Jalan.pdf";break;case"invoice":e=localStorage.base_api+"pdf/po/invoice/"+this.id,a="Invoice.pdf";break}this.$swal({title:"Mohon tunggu...",showCloseButton:!1,showCancelButton:!1}),Object(i["d"])(this,e,{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token}},a,"get").then((function(){t.$swal.close()})).catch((function(e){return console.log(e),e.response&&(t.$swal(e.response.data.message,"","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3)),!1}))},storeExcel:function(){var t=this;null==this.date.from&&this.date.to==nul&&(this.$swal("Tanggal tidak boleh kosong","","warning"),setTimeout((function(){return t.$swal.close(),!1}),2e3),this.exportLabel="Mulai Export"),null==this.date.from&&null!=this.date.to&&(this.date.from=this.date.to),null!=this.date.from&&null==this.date.to&&(this.date.to=this.date.from),this.exportLabel="Loading...",Object(i["c"])(this,localStorage.base_api+"excel/po",{from:this.date.from,to:this.date.to},{responseType:"blob",headers:{Authorization:"bearer "+localStorage.token}},"po.xls").then((function(){t.modal=!1,t.exportLabel="Mulai Export"})).catch((function(e){return t.exportLabel="Mulai Export",console.log(e),t.$swal("Tidak bisa mengambil data","","error"),setTimeout((function(){t.$swal.close(),t.modal=!1}),2e3),!1}))},deletePO:function(t){var e=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a?Object(i["b"])(e,localStorage.base_api+"po/"+t,{method:"delete",headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(){e.$swal("Data Purchase Order berhasil dihapus","Mohon tunggu sebentar...","success"),setTimeout((function(){e.$swal.close(),e.getData()}),1500)})).catch((function(t){return e.$swal("Tidak bisa ambil data","hubungi pengembangnya...","error"),setTimeout((function(){e.$swal.close()}),1500),!1})):e.$swal.close()}))}},filters:{formatRupiah:function(t,e){var a=t.toString().replace(/[^,\d]/g,"").toString(),n=a.split(","),o=n[0].length%3,i=n[0].substr(0,o),s=n[0].substr(o).match(/\d{3}/gi),l="";return s&&(l=o?".":"",i+=l+s.join(".")),i=void 0!=n[1]?i+","+n[1]:i,void 0==e?i:i?"Rp. "+i:""}},created:function(){5!=localStorage.level&&4!=localStorage.level||this.$router.push("/"),this.getData()},mounted:function(){this.data=JSON.parse(localStorage.user)}},r=l,c=(a("1400"),a("2877")),d=Object(c["a"])(r,n,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-19541075.9fd7f82e.js.map