(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dad15fe"],{"39c5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CCard",[a("CCardHeader",[a("p",[a("strong",[t._v("Edit")]),t._v(" Purchase Order ")])]),a("CCardBody",[a("CForm",{staticClass:"mt-4"},[a("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[a("CCol",{attrs:{sm:"8"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:1==t.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[a("small",[t._v("Perbaharuan data PO berhasil!")])]),a("input",{ref:"id",attrs:{type:"hidden",name:"id",id:t.po.id}}),a("CSelect",{attrs:{label:"Sales",horizontal:"",options:t.sales},on:{"update:value":t.assignSales},model:{value:t.po.id_sales,callback:function(e){t.$set(t.po,"id_sales",e)},expression:"po.id_sales"}}),a("CSelect",{attrs:{label:"Konsumen",horizontal:"",options:t.konsumen},on:{"update:value":t.assignKonsumen},model:{value:t.po.id_konsumen,callback:function(e){t.$set(t.po,"id_konsumen",e)},expression:"po.id_konsumen"}}),7!=t.level?a("div",[a("CSelect",{attrs:{label:"Kurir",horizontal:"",options:t.kurir},on:{"update:value":t.assignKurir},model:{value:t.po.id_kurir,callback:function(e){t.$set(t.po,"id_kurir",e)},expression:"po.id_kurir"}})],1):t._e(),a("CInput",{attrs:{type:"text",description:t.validator.no_po_msg,"is-valid":t.validator.no_po,autocomplete:"no_po",label:"Nomer PO",horizontal:"",placeholder:"Masukan Nomer PO"},on:{input:function(e){t.po.no_po.length<1?t.validator.no_po=!1:t.validator.no_po=!0}},model:{value:t.po.no_po,callback:function(e){t.$set(t.po,"no_po",e)},expression:"po.no_po"}}),7!=t.level?a("div",[a("CInput",{attrs:{type:"text",description:t.validator.no_surat_jalan_msg,"is-valid":t.validator.no_surat_jalan,autocomplete:"no_surat_jalan",label:"Nomer Surat Jalan",horizontal:"",placeholder:"Masukan Nomer Surat Jalan"},on:{input:function(e){t.po.no_surat_jalan.length<1?t.validator.no_surat_jalan=!1:t.validator.no_surat_jalan=!0}},model:{value:t.po.no_surat_jalan,callback:function(e){t.$set(t.po,"no_surat_jalan",e)},expression:"po.no_surat_jalan"}}),a("CInput",{attrs:{type:"text",description:t.validator.no_invoice_msg,"is-valid":t.validator.no_invoice,autocomplete:"no_invoice",label:"Nomer Invoice",horizontal:"",placeholder:"Masukan Nomer no_Invoice"},on:{input:function(e){t.po.no_invoice.length<1?t.validator.no_invoice=!1:t.validator.no_invoice=!0}},model:{value:t.po.no_invoice,callback:function(e){t.$set(t.po,"no_invoice",e)},expression:"po.no_invoice"}})],1):t._e(),a("CInput",{attrs:{type:"date",description:t.validator.date_msg,"is-valid":t.validator.date,autocomplete:"date",label:"Tanggal PO",horizontal:"",placeholder:"Masukan Tanggal PO"},on:{input:function(e){t.po.date.length<1?t.validator.date=!1:t.validator.date=!0}},model:{value:t.po.date,callback:function(e){t.$set(t.po,"date",e)},expression:"po.date"}}),a("CInput",{attrs:{type:"date",description:t.validator.date_line_msg,"is-valid":t.validator.date_line,autocomplete:"date_line",label:"Tanggal Pengiriman",horizontal:"",placeholder:"Masukan Tanggal Pengiriman"},on:{input:function(e){t.po.date_line.length<1?t.validator.date_line=!1:t.validator.date_line=!0}},model:{value:t.po.date_line,callback:function(e){t.$set(t.po,"date_line",e)},expression:"po.date_line"}}),a("CInput",{attrs:{type:"date",description:t.validator.jatuh_tempo_msg,"is-valid":t.validator.jatuh_tempo,autocomplete:"jatuh_tempo",label:"TOP",horizontal:"",placeholder:"Masukan jatuh_tempo"},on:{input:function(e){t.po.jatuh_tempo.length<1?t.validator.jatuh_tempo=!1:t.validator.jatuh_tempo=!0}},model:{value:t.po.jatuh_tempo,callback:function(e){t.$set(t.po,"jatuh_tempo",e)},expression:"po.jatuh_tempo"}}),a("CTextarea",{attrs:{label:"Keterangan",placeholder:"Keterangan",horizontal:"",rows:"3"},model:{value:t.po.keterangan,callback:function(e){t.$set(t.po,"keterangan",e)},expression:"po.keterangan"}}),a("CInput",{attrs:{type:"number",description:t.validator.tax_rate_msg,"is-valid":t.validator.tax_rate,autocomplete:"tax_rate",label:"Tax Rate %",horizontal:"",placeholder:"Masukan Tax Rate"},on:{input:function(e){t.po.tax_rate.length<1?t.validator.tax_rate=!1:t.validator.tax_rate=!0}},model:{value:t.po.tax_rate,callback:function(e){t.$set(t.po,"tax_rate",e)},expression:"po.tax_rate"}}),a("CInput",{attrs:{type:"number",description:t.validator.sales_fee_msg,"is-valid":t.validator.sales_fee,autocomplete:"sales_fee",label:"Sales Fee",horizontal:"",placeholder:"Masukan Sales Fee"},on:{input:function(e){t.po.sales_fee.length<1?t.validator.sales_fee=!1:t.validator.sales_fee=!0}},model:{value:t.po.sales_fee,callback:function(e){t.$set(t.po,"sales_fee",e)},expression:"po.sales_fee"}}),a("CInput",{attrs:{type:"number",description:t.validator.other_msg,"is-valid":t.validator.other,autocomplete:"other",label:"Other",horizontal:"",placeholder:"Other",readonly:""},on:{input:function(e){t.po.other.length<1?t.validator.other=!1:t.validator.other=!0}},model:{value:t.po.other,callback:function(e){t.$set(t.po,"other",e)},expression:"po.other"}}),a("CTextarea",{attrs:{label:"Catatan",placeholder:"Catatan",horizontal:"",rows:"3"},model:{value:t.po.catatan,callback:function(e){t.$set(t.po,"catatan",e)},expression:"po.catatan"}})],1)],1)],1)],1),a("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[a("CButton",{staticClass:"mr-2",attrs:{type:"submit",color:"primary"},on:{click:function(e){return e.preventDefault(),t.updateData(e)}}},[a("i",{staticClass:"fa fa-edit mr-2"}),t._v(t._s(t.label)+" ")])],1)],1)],1)],1)],1)},o=[],l=a("8e44"),i={name:"EditPO",data:function(){return{level:localStorage.level,label:"Simpan Perubahan",validMsg:!1,salesselected:1,konsumenselected:1,statusselected:1,kurir:[],sales:[],konsumen:[],validator:{no:null,no_msg:null,tgl_po_masuk:null,tgl_po_masuk_msg:null,date:null,date_msg:null,date_line:null,date_line_msg:null,jatuh_tempo:null,jatuh_tempo_msg:null,tax_rate:null,tax_rate_msg:null,sales_fee:null,sales_fee_msg:null,other:null,other_msg:null},po:{id_sales:1,id_konsumen:1,id_kurir:1,status:null,no_po:null,date:null,date_line:null,jatuh_tempo:null,tax_rate:null,sales_fee:null,other:null,catatan:null,tgl_po_masuk:null,no_surat_jalan:null,no_invoice:null}}},methods:{assignKurir:function(t){this.po.id_kurir=t},assignStatus:function(t){this.po.status=t},assignKonsumen:function(t){this.po.id_konsumen=t},assignSales:function(t){this.po.id_sales=t},getRequest:function(t,e){this.$http.get(t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){e(t.data)})).catch((function(t){return alert("Ada sedikit error!"),console.log(t),!1}))},getData:function(){var t=this,e=new Headers;e.append("Authorization","bearer"+localStorage.token);var a={method:"POST",headers:e,redirect:"follow"};Object(l["g"])(this,localStorage.base_api+"po/"+this.$route.params.id,a).then((function(e){if(t.po=e,t.po.tgl_po_masuk=e.tgl_po_masuk.split("T")[0],500==e.status_code)return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),console.error(e.message),!1})).catch((function(e){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1}))},updateData:function(){var t=this;if(this.errors=[],this.po.no_po||(this.validator.no_po=!1,this.validator.no_po_msg="Harap isi nomer PO",this.errors.push("no kosong")),this.po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi Tanggal PO",this.errors.push("date kosong")),this.po.date_line||(this.validator.date_line=!1,this.validator.date_line_msg="Harap isi tanggal pengiriman",this.errors.push("date_line kosong")),this.po.jatuh_tempo||(this.validator.jatuh_tempo=!1,this.validator.jatuh_tempo_msg="Harap isi tanggal jatuh tempo",this.errors.push("jatuh_tempo kosong")),this.errors.length)return console.error(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.$http.post(localStorage.base_api+"po/edit/"+this.$route.params.id,this.po,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(e){console.log(e),t.label="Simpan Perubahan",t.$swal(e.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push("/po")}),1500)})).catch((function(e){return t.label="Simpan Perubahan",401==e.response.status?t.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),t.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(e){return t.$swal("Tidak bisa update data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1})):(t.$swal("Tidak bisa update data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500)),console.log(e.response),!1}))},fetchAll:function(){var t=this;this.getRequest(localStorage.base_api+"sales",(function(e){for(var a=0;a<e.length;a++){var n={};n.value=e[a].id,n.label=e[a].nama_karyawan,t.sales.push(n)}})),this.getRequest(localStorage.base_api+"kurir",(function(e){for(var a=0;a<e.length;a++){var n={};n.value=e[a].id,n.label=e[a].nama_karyawan,t.kurir.push(n)}})),this.getRequest(localStorage.base_api+"konsumen",(function(e){for(var a=0;a<e.length;a++){var n={};n.value=e[a].id,n.label=e[a].nama,t.konsumen.push(n),t.getData()}}))}},created:function(){5!=localStorage.level&&4!=localStorage.level||this.$router.push("/"),this.level=localStorage.level,this.fetchAll()}},r=i,s=a("2877"),u=Object(s["a"])(r,n,o,!1,null,null,null);e["default"]=u.exports},"8e44":function(t,e,a){"use strict";function n(t,e,a,n,o){return new Promise((function(l,i){t.$http.post(e,a,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.href=e,a.setAttribute("download",o),document.body.appendChild(a),a.click()})).then((function(){l()})).catch((function(t){i(t)}))}))}function o(){var t;return t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),t}function l(t,e,a){return new Promise((function(n,l){var i=o();i.responseType="json","withCredentials"in i?i.open("POST",t,!0):"undefined"!=typeof XDomainRequest?(i=new XDomainRequest,i.open("POST",t)):i=null,i||l(),i.setRequestHeader("Authorization","bearer "+localStorage.token),i.onload=function(){var t=URL.createObjectURL(new Blob([i.response],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=t,e.setAttribute("download",a),document.body.appendChild(e),e.click(),n()},i.onerror=function(){l()},i.send(e)}))}function i(t,e,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(l,i){"get"==o?t.$http.get(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){l()})).catch((function(t){i(t)})):t.$http.post(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){l()})).catch((function(t){i(t)}))}))}function r(t){return new Promise((function(e,a){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],a=[],n=0;n<t.data.length;n++){var o=new Date(t.data[n].date_line),l=new Date(o.setDate(o.getDate()-2));e.push({date:l,data:t.data[n],link:"po/detail/"+t.data[n].id})}for(var i=0;i<e.length;i++){var r=new Date,s=new Date(e[i].date);r==s&&a.push({date:e[i].date,data:e[i]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function s(t,e){return new Promise((function(a,n){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){a(t)})).catch((function(t){return n(t)}))}))}function u(t,e,a,n){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}function c(t,e,a){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"f",(function(){return s})),a.d(e,"g",(function(){return u})),a.d(e,"b",(function(){return c}))}}]);
//# sourceMappingURL=chunk-1dad15fe.b29e4411.js.map