(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bb20e"],{"39c5":function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("CCard",[e("CCardHeader",[e("p",[e("strong",[a._v("Edit")]),a._v(" Purchase Order ")])]),e("CCardBody",[e("CForm",{staticClass:"mt-4"},[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{attrs:{sm:"8"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[e("small",[a._v("Perbaharuan data PO berhasil!")])]),e("input",{ref:"id",attrs:{type:"hidden",name:"id",id:a.po.id}}),e("CSelect",{attrs:{label:"Sales",horizontal:"",options:a.sales},on:{"update:value":a.assignSales},model:{value:a.po.id_sales,callback:function(t){a.$set(a.po,"id_sales",t)},expression:"po.id_sales"}}),e("CSelect",{attrs:{label:"Konsumen",horizontal:"",options:a.konsumen},on:{"update:value":a.assignKonsumen},model:{value:a.po.id_konsumen,callback:function(t){a.$set(a.po,"id_konsumen",t)},expression:"po.id_konsumen"}}),e("CSelect",{attrs:{label:"Kurir",horizontal:"",options:a.kurir},on:{"update:value":a.assignKurir},model:{value:a.po.id_kurir,callback:function(t){a.$set(a.po,"id_kurir",t)},expression:"po.id_kurir"}}),e("CInput",{attrs:{type:"text",description:a.validator.no_po_msg,"is-valid":a.validator.no_po,autocomplete:"no_po",label:"Nomer PO",horizontal:"",placeholder:"Masukan Nomer PO"},on:{input:function(t){a.po.no_po.length<1?a.validator.no_po=!1:a.validator.no_po=!0}},model:{value:a.po.no_po,callback:function(t){a.$set(a.po,"no_po",t)},expression:"po.no_po"}}),e("CInput",{attrs:{type:"date",description:a.validator.tgl_po_masuk_msg,"is-valid":a.validator.tgl_po_masuk,autocomplete:"date",label:"Tanggal PO Masuk",horizontal:"",placeholder:"Masukan Tanggal PO Masuk"},on:{input:function(t){a.po.tgl_po_masuk.length<1?a.validator.tgl_po_masuk=!1:a.validator.tgl_po_masuk=!0}},model:{value:a.po.tgl_po_masuk,callback:function(t){a.$set(a.po,"tgl_po_masuk",t)},expression:"po.tgl_po_masuk"}}),e("CInput",{attrs:{type:"date",description:a.validator.date_msg,"is-valid":a.validator.date,autocomplete:"date",label:"Tanggal PO",horizontal:"",placeholder:"Masukan Tanggal PO"},on:{input:function(t){a.po.date.length<1?a.validator.date=!1:a.validator.date=!0}},model:{value:a.po.date,callback:function(t){a.$set(a.po,"date",t)},expression:"po.date"}}),e("CInput",{attrs:{type:"date",description:a.validator.date_line_msg,"is-valid":a.validator.date_line,autocomplete:"date_line",label:"Tanggal Pengiriman",horizontal:"",placeholder:"Masukan Tanggal Pengiriman"},on:{input:function(t){a.po.date_line.length<1?a.validator.date_line=!1:a.validator.date_line=!0}},model:{value:a.po.date_line,callback:function(t){a.$set(a.po,"date_line",t)},expression:"po.date_line"}}),e("CInput",{attrs:{type:"date",description:a.validator.jatuh_tempo_msg,"is-valid":a.validator.jatuh_tempo,autocomplete:"jatuh_tempo",label:"TOP",horizontal:"",placeholder:"Masukan jatuh_tempo"},on:{input:function(t){a.po.jatuh_tempo.length<1?a.validator.jatuh_tempo=!1:a.validator.jatuh_tempo=!0}},model:{value:a.po.jatuh_tempo,callback:function(t){a.$set(a.po,"jatuh_tempo",t)},expression:"po.jatuh_tempo"}}),e("CTextarea",{attrs:{label:"Keterangan",placeholder:"Keterangan",horizontal:"",rows:"3"},model:{value:a.po.keterangan,callback:function(t){a.$set(a.po,"keterangan",t)},expression:"po.keterangan"}}),e("CInput",{attrs:{type:"number",description:a.validator.tax_rate_msg,"is-valid":a.validator.tax_rate,autocomplete:"tax_rate",label:"Tax Rate %",horizontal:"",placeholder:"Masukan Tax Rate"},on:{input:function(t){a.po.tax_rate.length<1?a.validator.tax_rate=!1:a.validator.tax_rate=!0}},model:{value:a.po.tax_rate,callback:function(t){a.$set(a.po,"tax_rate",t)},expression:"po.tax_rate"}}),e("CInput",{attrs:{type:"number",description:a.validator.sales_fee_msg,"is-valid":a.validator.sales_fee,autocomplete:"sales_fee",label:"Sales Fee",horizontal:"",placeholder:"Masukan Sales Fee"},on:{input:function(t){a.po.sales_fee.length<1?a.validator.sales_fee=!1:a.validator.sales_fee=!0}},model:{value:a.po.sales_fee,callback:function(t){a.$set(a.po,"sales_fee",t)},expression:"po.sales_fee"}}),e("CInput",{attrs:{type:"number",description:a.validator.other_msg,"is-valid":a.validator.other,autocomplete:"other",label:"Other",horizontal:"",placeholder:"Other"},on:{input:function(t){a.po.other.length<1?a.validator.other=!1:a.validator.other=!0}},model:{value:a.po.other,callback:function(t){a.$set(a.po,"other",t)},expression:"po.other"}}),e("CTextarea",{attrs:{label:"Catatan",placeholder:"Catatan",horizontal:"",rows:"3"},model:{value:a.po.catatan,callback:function(t){a.$set(a.po,"catatan",t)},expression:"po.catatan"}})],1)],1)],1)],1),e("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[e("CButton",{staticClass:"mr-2",attrs:{type:"submit",color:"light"},on:{click:function(t){return t.preventDefault(),a.updateData(t)}}},[e("i",{staticClass:"fa fa-edit mr-2"}),a._v(a._s(a.label)+" ")])],1)],1)],1)],1)],1)},l=[],n={name:"EditPO",data:function(){return{label:"Simpan Perubahan",validMsg:!1,salesselected:1,konsumenselected:1,statusselected:1,kurir:[],sales:[],konsumen:[],validator:{no:null,no_msg:null,tgl_po_masuk:null,tgl_po_masuk_msg:null,date:null,date_msg:null,date_line:null,date_line_msg:null,jatuh_tempo:null,jatuh_tempo_msg:null,tax_rate:null,tax_rate_msg:null,sales_fee:null,sales_fee_msg:null,other:null,other_msg:null},po:{id_sales:1,id_konsumen:1,id_kurir:1,status:null,no_po:null,date:null,date_line:null,jatuh_tempo:null,tax_rate:null,sales_fee:null,other:null,catatan:null,tgl_po_masuk:null}}},methods:{assignKurir:function(a){this.po.id_kurir=a},assignStatus:function(a){this.po.status=a},assignKonsumen:function(a){this.po.id_konsumen=a},assignSales:function(a){this.po.id_sales=a},getRequest:function(a,t){this.$http.get(a,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){t(a.data)})).catch((function(a){return alert("Ada sedikit error!"),console.log(a),!1}))},getData:function(){var a=this,t=new Headers;t.append("Authorization","bearer"+localStorage.token);var e={method:"POST",headers:t,redirect:"follow"};fetch("https://young-temple-67589.herokuapp.com/api/po/"+this.$route.params.id,e).then((function(a){return a.json()})).then((function(t){if(a.po=t,a.po.tgl_po_masuk=t.tgl_po_masuk.split("T")[0],500==t.status_code)return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),console.error(t.message),!1})).catch((function(t){return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),!1}))},updateData:function(){var a=this;if(this.errors=[],this.po.no_po||(this.validator.no_po=!1,this.validator.no_po_msg="Harap isi nomer PO",this.errors.push("no kosong")),this.po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi Tanggal PO",this.errors.push("date kosong")),this.po.date_line||(this.validator.date_line=!1,this.validator.date_line_msg="Harap isi tanggal pengiriman",this.errors.push("date_line kosong")),this.po.jatuh_tempo||(this.validator.jatuh_tempo=!1,this.validator.jatuh_tempo_msg="Harap isi tanggal jatuh tempo",this.errors.push("jatuh_tempo kosong")),this.po.tax_rate||(this.validator.tax_rate=!1,this.validator.tax_rate_msg="Harap isi Tax Rate",this.errors.push("tax_rate kosong")),this.po.sales_fee||(this.validator.sales_fee=!1,this.validator.sales_fee_msg="Harap isi sales fee",this.errors.push("sales_fee kosong")),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.validMsg=!0,this.$http.post("https://young-temple-67589.herokuapp.com/api/po/"+this.$route.params.id,this.po,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(t){console.log(t),a.label="Simpan Perubahan",a.$swal("Data berhasil diupdate","Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/po")}),1500)})).catch((function(t){return a.label="Simpan Perubahan",401==t.response.status?a.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),a.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500)})).catch((function(t){return a.$swal("Tidak bisa update data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),!1})):(a.$swal("Tidak bisa update data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500)),console.log(t.response),!1}))},fetchAll:function(){var a=this;this.getRequest("https://young-temple-67589.herokuapp.com/api/sales",(function(t){for(var e=0;e<t.length;e++){var o={};o.value=t[e].id,o.label=t[e].nama_karyawan,a.sales.push(o)}})),this.getRequest("https://young-temple-67589.herokuapp.com/api/kurir",(function(t){for(var e=0;e<t.length;e++){var o={};o.value=t[e].id,o.label=t[e].nama_karyawan,a.kurir.push(o)}})),this.getRequest("https://young-temple-67589.herokuapp.com/api/konsumen",(function(t){for(var e=0;e<t.length;e++){var o={};o.value=t[e].id,o.label=t[e].nama,a.konsumen.push(o),a.getData()}}))}},created:function(){this.fetchAll()}},s=n,i=e("2877"),r=Object(i["a"])(s,o,l,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0bb20e.2df58d6b.js.map