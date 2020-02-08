(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dad15fe"],{"39c5":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("CCard",[e("CCardHeader",[e("p",[e("strong",[t._v("Edit")]),t._v(" Purchase Order ")])]),e("CCardBody",[e("CForm",{staticClass:"mt-4"},[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{attrs:{sm:"8"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:1==t.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[e("small",[t._v("Perbaharuan data PO berhasil!")])]),e("input",{ref:"id",attrs:{type:"hidden",name:"id",id:t.po.id}}),e("CSelect",{attrs:{label:"Sales",horizontal:"",options:t.sales},on:{"update:value":t.assignSales},model:{value:t.po.id_sales,callback:function(a){t.$set(t.po,"id_sales",a)},expression:"po.id_sales"}}),e("CSelect",{attrs:{label:"Konsumen",horizontal:"",options:t.konsumen},on:{"update:value":t.assignKonsumen},model:{value:t.po.id_konsumen,callback:function(a){t.$set(t.po,"id_konsumen",a)},expression:"po.id_konsumen"}}),e("CSelect",{attrs:{label:"Kurir",horizontal:"",options:t.kurir},on:{"update:value":t.assignKurir},model:{value:t.po.id_kurir,callback:function(a){t.$set(t.po,"id_kurir",a)},expression:"po.id_kurir"}}),e("CInput",{attrs:{type:"text",description:t.validator.no_po_msg,"is-valid":t.validator.no_po,autocomplete:"no_po",label:"Nomer PO",horizontal:"",placeholder:"Masukan Nomer PO"},on:{input:function(a){t.po.no_po.length<1?t.validator.no_po=!1:t.validator.no_po=!0}},model:{value:t.po.no_po,callback:function(a){t.$set(t.po,"no_po",a)},expression:"po.no_po"}}),e("CInput",{attrs:{type:"text",description:t.validator.no_surat_jalan_msg,"is-valid":t.validator.no_surat_jalan,autocomplete:"no_surat_jalan",label:"Nomer Surat Jalan",horizontal:"",placeholder:"Masukan Nomer Surat Jalan"},on:{input:function(a){t.po.no_surat_jalan.length<1?t.validator.no_surat_jalan=!1:t.validator.no_surat_jalan=!0}},model:{value:t.po.no_surat_jalan,callback:function(a){t.$set(t.po,"no_surat_jalan",a)},expression:"po.no_surat_jalan"}}),e("CInput",{attrs:{type:"text",description:t.validator.no_invoice_msg,"is-valid":t.validator.no_invoice,autocomplete:"no_invoice",label:"Nomer Invoice",horizontal:"",placeholder:"Masukan Nomer no_Invoice"},on:{input:function(a){t.po.no_invoice.length<1?t.validator.no_invoice=!1:t.validator.no_invoice=!0}},model:{value:t.po.no_invoice,callback:function(a){t.$set(t.po,"no_invoice",a)},expression:"po.no_invoice"}}),e("CInput",{attrs:{type:"date",description:t.validator.tgl_po_masuk_msg,"is-valid":t.validator.tgl_po_masuk,autocomplete:"date",label:"Tanggal PO Masuk",horizontal:"",placeholder:"Masukan Tanggal PO Masuk"},on:{input:function(a){t.po.tgl_po_masuk.length<1?t.validator.tgl_po_masuk=!1:t.validator.tgl_po_masuk=!0}},model:{value:t.po.tgl_po_masuk,callback:function(a){t.$set(t.po,"tgl_po_masuk",a)},expression:"po.tgl_po_masuk"}}),e("CInput",{attrs:{type:"date",description:t.validator.date_msg,"is-valid":t.validator.date,autocomplete:"date",label:"Tanggal PO",horizontal:"",placeholder:"Masukan Tanggal PO"},on:{input:function(a){t.po.date.length<1?t.validator.date=!1:t.validator.date=!0}},model:{value:t.po.date,callback:function(a){t.$set(t.po,"date",a)},expression:"po.date"}}),e("CInput",{attrs:{type:"date",description:t.validator.date_line_msg,"is-valid":t.validator.date_line,autocomplete:"date_line",label:"Tanggal Pengiriman",horizontal:"",placeholder:"Masukan Tanggal Pengiriman"},on:{input:function(a){t.po.date_line.length<1?t.validator.date_line=!1:t.validator.date_line=!0}},model:{value:t.po.date_line,callback:function(a){t.$set(t.po,"date_line",a)},expression:"po.date_line"}}),e("CInput",{attrs:{type:"date",description:t.validator.jatuh_tempo_msg,"is-valid":t.validator.jatuh_tempo,autocomplete:"jatuh_tempo",label:"TOP",horizontal:"",placeholder:"Masukan jatuh_tempo"},on:{input:function(a){t.po.jatuh_tempo.length<1?t.validator.jatuh_tempo=!1:t.validator.jatuh_tempo=!0}},model:{value:t.po.jatuh_tempo,callback:function(a){t.$set(t.po,"jatuh_tempo",a)},expression:"po.jatuh_tempo"}}),e("CTextarea",{attrs:{label:"Keterangan",placeholder:"Keterangan",horizontal:"",rows:"3"},model:{value:t.po.keterangan,callback:function(a){t.$set(t.po,"keterangan",a)},expression:"po.keterangan"}}),e("CInput",{attrs:{type:"number",description:t.validator.tax_rate_msg,"is-valid":t.validator.tax_rate,autocomplete:"tax_rate",label:"Tax Rate %",horizontal:"",placeholder:"Masukan Tax Rate"},on:{input:function(a){t.po.tax_rate.length<1?t.validator.tax_rate=!1:t.validator.tax_rate=!0}},model:{value:t.po.tax_rate,callback:function(a){t.$set(t.po,"tax_rate",a)},expression:"po.tax_rate"}}),e("CInput",{attrs:{type:"number",description:t.validator.sales_fee_msg,"is-valid":t.validator.sales_fee,autocomplete:"sales_fee",label:"Sales Fee",horizontal:"",placeholder:"Masukan Sales Fee"},on:{input:function(a){t.po.sales_fee.length<1?t.validator.sales_fee=!1:t.validator.sales_fee=!0}},model:{value:t.po.sales_fee,callback:function(a){t.$set(t.po,"sales_fee",a)},expression:"po.sales_fee"}}),e("CInput",{attrs:{type:"number",description:t.validator.other_msg,"is-valid":t.validator.other,autocomplete:"other",label:"Other",horizontal:"",placeholder:"Other"},on:{input:function(a){t.po.other.length<1?t.validator.other=!1:t.validator.other=!0}},model:{value:t.po.other,callback:function(a){t.$set(t.po,"other",a)},expression:"po.other"}}),e("CTextarea",{attrs:{label:"Catatan",placeholder:"Catatan",horizontal:"",rows:"3"},model:{value:t.po.catatan,callback:function(a){t.$set(t.po,"catatan",a)},expression:"po.catatan"}})],1)],1)],1)],1),e("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[e("CButton",{staticClass:"mr-2",attrs:{type:"submit",color:"light"},on:{click:function(a){return a.preventDefault(),t.updateData(a)}}},[e("i",{staticClass:"fa fa-edit mr-2"}),t._v(t._s(t.label)+" ")])],1)],1)],1)],1)],1)},o=[],l=e("8e44"),i={name:"EditPO",data:function(){return{label:"Simpan Perubahan",validMsg:!1,salesselected:1,konsumenselected:1,statusselected:1,kurir:[],sales:[],konsumen:[],validator:{no:null,no_msg:null,tgl_po_masuk:null,tgl_po_masuk_msg:null,no_surat_jalan:null,no_surat_jalan_msg:null,no_invoice:null,no_invoice_msg:null,date:null,date_msg:null,date_line:null,date_line_msg:null,jatuh_tempo:null,jatuh_tempo_msg:null,tax_rate:null,tax_rate_msg:null,sales_fee:null,sales_fee_msg:null,other:null,other_msg:null},po:{id_sales:1,id_konsumen:1,id_kurir:1,status:null,no_po:null,date:null,date_line:null,jatuh_tempo:null,tax_rate:null,sales_fee:null,other:null,catatan:null,tgl_po_masuk:null,no_surat_jalan:null,no_invoice:null}}},methods:{assignKurir:function(t){this.po.id_kurir=t},assignStatus:function(t){this.po.status=t},assignKonsumen:function(t){this.po.id_konsumen=t},assignSales:function(t){this.po.id_sales=t},getRequest:function(t,a){this.$http.get(t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){a(t.data)})).catch((function(t){return alert("Ada sedikit error!"),console.log(t),!1}))},getData:function(){var t=this,a=new Headers;a.append("Authorization","bearer"+localStorage.token);var e={method:"POST",headers:a,redirect:"follow"};Object(l["f"])(this,localStorage.base_api+"po/"+this.$route.params.id,e).then((function(a){if(t.po=a,t.po.tgl_po_masuk=a.tgl_po_masuk.split("T")[0],500==a.status_code)return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),console.error(a.message),!1})).catch((function(a){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1}))},updateData:function(){var t=this;if(this.errors=[],this.po.no_po||(this.validator.no_po=!1,this.validator.no_po_msg="Harap isi nomer PO",this.errors.push("no kosong")),this.po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi Tanggal PO",this.errors.push("date kosong")),this.po.date_line||(this.validator.date_line=!1,this.validator.date_line_msg="Harap isi tanggal pengiriman",this.errors.push("date_line kosong")),this.po.jatuh_tempo||(this.validator.jatuh_tempo=!1,this.validator.jatuh_tempo_msg="Harap isi tanggal jatuh tempo",this.errors.push("jatuh_tempo kosong")),this.po.tax_rate||(this.validator.tax_rate=!1,this.validator.tax_rate_msg="Harap isi Tax Rate",this.errors.push("tax_rate kosong")),this.po.sales_fee||(this.validator.sales_fee=!1,this.validator.sales_fee_msg="Harap isi sales fee",this.errors.push("sales_fee kosong")),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",postData(this,localStorage.base_api+"po/edit/"+this.$route.params.id,this.po,{method:"post",headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(a){console.log(a),t.label="Simpan Perubahan",t.$swal("Data berhasil diupdate","Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push("/po")}),1500)})).catch((function(a){return t.label="Simpan Perubahan",401==a.response.status?t.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),t.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(a){return t.$swal("Tidak bisa update data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1})):(t.$swal("Tidak bisa update data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500)),console.log(a.response),!1}))},fetchAll:function(){var t=this;this.getRequest(localStorage.base_api+"sales",(function(a){for(var e=0;e<a.length;e++){var n={};n.value=a[e].id,n.label=a[e].nama_karyawan,t.sales.push(n)}})),this.getRequest(localStorage.base_api+"kurir",(function(a){for(var e=0;e<a.length;e++){var n={};n.value=a[e].id,n.label=a[e].nama_karyawan,t.kurir.push(n)}})),this.getRequest(localStorage.base_api+"konsumen",(function(a){for(var e=0;e<a.length;e++){var n={};n.value=a[e].id,n.label=a[e].nama,t.konsumen.push(n),t.getData()}}))}},created:function(){this.fetchAll()}},s=i,r=e("2877"),u=Object(r["a"])(s,n,o,!1,null,null,null);a["default"]=u.exports},"8e44":function(t,a,e){"use strict";function n(t,a,e,n,o){return new Promise((function(l,i){t.$http.post(a,e,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=a,e.setAttribute("download",o),document.body.appendChild(e),e.click()})).then((function(){l()})).catch((function(t){i(t)}))}))}function o(t,a,e,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(l,i){"get"==o?t.$http.get(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){l()})).catch((function(t){i(t)})):t.$http.post(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){l()})).catch((function(t){i(t)}))}))}function l(t){return new Promise((function(a,e){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var a=[],e=[],n=0;n<t.data.length;n++){var o=new Date(t.data[n].date_line),l=new Date(o.setDate(o.getDate()-2));a.push({date:l,data:t.data[n],link:"/po/"+t.data[n].id})}for(var i=0;i<a.length;i++){var s=new Date,r=new Date(a[i].date);s==r&&e.push({date:a[i].date,data:a[i]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return a(t)})).catch((function(t){return e(t)}))}))}function i(t,a){return new Promise((function(e,n){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,a[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return n(t)}))}))}function s(t,a,e,n){return new Promise((function(n,o){fetch(a,e).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}function r(t,a,e){return new Promise((function(n,o){fetch(a,e).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}e.d(a,"c",(function(){return n})),e.d(a,"d",(function(){return o})),e.d(a,"a",(function(){return l})),e.d(a,"e",(function(){return i})),e.d(a,"f",(function(){return s})),e.d(a,"b",(function(){return r}))}}]);
//# sourceMappingURL=chunk-1dad15fe.879ac2cf.js.map