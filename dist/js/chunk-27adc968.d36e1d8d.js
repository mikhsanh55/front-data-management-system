(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27adc968"],{"8e44":function(t,e,a){"use strict";function n(t,e,a,n,o){return new Promise((function(i,l){t.$http.post(e,a,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.href=e,a.setAttribute("download",o),document.body.appendChild(a),a.click()})).then((function(){i()})).catch((function(t){l(t)}))}))}function o(t,e,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,l){"get"==o?t.$http.get(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){i()})).catch((function(t){l(t)})):t.$http.post(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){i()})).catch((function(t){l(t)}))}))}function i(t){return new Promise((function(e,a){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],a=[],n=0;n<t.data.length;n++){var o=new Date(t.data[n].date_line),i=new Date(o.setDate(o.getDate()-2));e.push({date:i,data:t.data[n],link:"po/detail/"+t.data[n].id})}for(var l=0;l<e.length;l++){var s=new Date,r=new Date(e[l].date);s==r&&a.push({date:e[l].date,data:e[l]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function l(t,e){return new Promise((function(a,n){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){a(t)})).catch((function(t){return n(t)}))}))}function s(t,e,a,n){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}function r(t,e,a){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"e",(function(){return l})),a.d(e,"f",(function(){return s})),a.d(e,"b",(function(){return r}))},"9c59":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CCard",[a("CCardHeader",[a("p",[a("strong",[t._v("Tambah")]),t._v(" Purchase Order ")])]),a("CCardBody",[a("CForm",{staticClass:"mt-4"},[a("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[a("CCol",{attrs:{sm:"12",md:"8"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:1==t.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[a("small",[t._v("Penambahan PO berhasil!")])]),a("CSelect",{attrs:{placeholder:"Pilih Sales",label:"Sales",horizontal:"",options:t.sales},on:{"update:value":t.assignSales},model:{value:t.po.id_sales,callback:function(e){t.$set(t.po,"id_sales",e)},expression:"po.id_sales"}}),a("CSelect",{attrs:{placeholder:"Pilih Konsumen",label:"Konsumen",horizontal:"",options:t.konsumen},on:{"update:value":t.assignKonsumen},model:{value:t.po.id_konsumen,callback:function(e){t.$set(t.po,"id_konsumen",e)},expression:"po.id_konsumen"}}),a("CSelect",{attrs:{placeholder:"Pilih Kurir",label:"Kurir",horizontal:"",options:t.kurir},on:{"update:value":t.assignKurir},model:{value:t.po.id_kurir,callback:function(e){t.$set(t.po,"id_kurir",e)},expression:"po.id_kurir"}}),a("CInput",{attrs:{type:"text",description:t.validator.no_msg,"is-valid":t.validator.no,autocomplete:"no",label:"Nomer PO",horizontal:"",placeholder:"Masukan Nomer PO"},on:{input:function(e){t.po.no.length<1?t.validator.no=!1:t.validator.no=!0}},model:{value:t.po.no,callback:function(e){t.$set(t.po,"no",e)},expression:"po.no"}}),a("CInput",{attrs:{type:"date",description:t.validator.date_msg,"is-valid":t.validator.date,autocomplete:"date",label:"Tanggal PO",horizontal:"",placeholder:"Masukan Tanggal PO"},on:{input:function(e){t.po.date.length<1?t.validator.date=!1:t.validator.date=!0}},model:{value:t.po.date,callback:function(e){t.$set(t.po,"date",e)},expression:"po.date"}}),a("CInput",{attrs:{type:"date",description:t.validator.date_line_msg,"is-valid":t.validator.date_line,autocomplete:"date_line",label:"Tanggal Pengiriman",horizontal:"",placeholder:"Masukan Tanggal Pengiriman"},on:{input:function(e){t.po.date_line.length<1?t.validator.date_line=!1:t.validator.date_line=!0}},model:{value:t.po.date_line,callback:function(e){t.$set(t.po,"date_line",e)},expression:"po.date_line"}}),a("CInput",{attrs:{type:"date",description:t.validator.jatuh_tempo_msg,"is-valid":t.validator.jatuh_tempo,autocomplete:"jatuh_tempo",label:"TOP",horizontal:"",placeholder:"Masukan jatuh_tempo"},on:{input:function(e){t.po.jatuh_tempo.length<1?t.validator.jatuh_tempo=!1:t.validator.jatuh_tempo=!0}},model:{value:t.po.jatuh_tempo,callback:function(e){t.$set(t.po,"jatuh_tempo",e)},expression:"po.jatuh_tempo"}}),a("CTextarea",{attrs:{label:"Keterangan",placeholder:"Keterangan",horizontal:"",rows:"3"},model:{value:t.po.keterangan,callback:function(e){t.$set(t.po,"keterangan",e)},expression:"po.keterangan"}}),a("CInput",{attrs:{type:"number",description:t.validator.tax_rate_msg,"is-valid":t.validator.tax_rate,autocomplete:"tax_rate",label:"Tax Rate %",horizontal:"",placeholder:"Masukan Tax Rate"},on:{input:function(e){t.po.tax_rate.length<1?t.validator.tax_rate=!1:t.validator.tax_rate=!0}},model:{value:t.po.tax_rate,callback:function(e){t.$set(t.po,"tax_rate",e)},expression:"po.tax_rate"}}),a("CInput",{attrs:{type:"number",description:t.validator.sales_fee_msg,"is-valid":t.validator.sales_fee,autocomplete:"sales_fee",label:"Sales Fee",horizontal:"",placeholder:"Masukan Sales Fee"},on:{input:function(e){t.po.sales_fee.length<1?t.validator.sales_fee=!1:t.validator.sales_fee=!0}},model:{value:t.po.sales_fee,callback:function(e){t.$set(t.po,"sales_fee",e)},expression:"po.sales_fee"}}),a("CInput",{attrs:{type:"number",description:t.validator.other_msg,"is-valid":t.validator.other,autocomplete:"other",label:"Other",horizontal:"",placeholder:"Other"},on:{input:function(e){t.po.other.length<1?t.validator.other=!1:t.validator.other=!0}},model:{value:t.po.other,callback:function(e){t.$set(t.po,"other",e)},expression:"po.other"}}),a("CTextarea",{attrs:{label:"Catatan",placeholder:"Catatan",horizontal:"",rows:"3"},model:{value:t.po.catatan,callback:function(e){t.$set(t.po,"catatan",e)},expression:"po.catatan"}})],1)],1)],1)],1),a("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[a("CButton",{staticClass:"mr-2",attrs:{type:"submit",color:"light"},on:{click:function(e){return e.preventDefault(),t.addPO(e)}}},[a("i",{staticClass:"fa fa-plus mr-1"}),t._v(t._s(t.label)+" ")])],1)],1)],1)],1)],1)},o=[];function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,a){return e&&l(t.prototype,e),a&&l(t,a),t}var r=function(){function t(){i(this,t),this.notif=[],localStorage.setItem("notif",JSON.stringify(this.notif))}return s(t,[{key:"dispatch",value:function(){return localStorage.notif}},{key:"add",value:function(t){var e=JSON.parse(localStorage.getItem("notif"));e.push(t),localStorage.setItem("notif",JSON.stringify(e))}},{key:"remove",value:function(t){var e=JSON.parse(localStorage.getItem("notif"));return e.splice(t.index-1,1),localStorage.setItem("notif",JSON.stringify(e)),localStorage.notif}}]),t}(),u=(a("8e44"),{name:"AddPO",data:function(){return{notif:void 0,validMsg:!1,errors:[],label:"Tambah Purchase Order",salesselected:1,konsumenselected:1,statusselected:1,kurir:[],sales:[],konsumen:[],validator:{no:null,no_msg:null,date:null,date_msg:null,date_line:null,date_line_msg:null,jatuh_tempo:null,jatuh_tempo_msg:null,tax_rate:null,tax_rate_msg:null,sales_fee:null,sales_fee_msg:null,other:null,other_msg:null},po:{id_sales:null,id_konsumen:null,id_kurir:null,status:1,no:null,date:null,date_line:null,jatuh_tempo:null,tax_rate:null,sales_fee:null,other:null,catatan:null}}},methods:{assignKurir:function(t){this.po.id_kurir=t},assignStatus:function(t){this.po.status=t},assignKonsumen:function(t){this.po.id_konsumen=t},assignSales:function(t){this.po.id_sales=t},addPO:function(){var t=this;if(this.errors=[],this.po.no||(this.validator.no=!1,this.validator.no_msg="Harap isi nomer PO",this.errors.push("no kosong")),this.po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi Tanggal PO",this.errors.push("date kosong")),this.po.date_line||(this.validator.date_line=!1,this.validator.date_line_msg="Harap isi tanggal pengiriman",this.errors.push("date_line kosong")),this.po.jatuh_tempo||(this.validator.jatuh_tempo=!1,this.validator.jatuh_tempo_msg="Harap isi tanggal jatuh tempo",this.errors.push("jatuh_tempo kosong")),this.po.tax_rate||(this.validator.tax_rate=!1,this.validator.tax_rate_msg="Harap isi Tax Rate",this.errors.push("tax_rate kosong")),this.po.sales_fee||(this.validator.sales_fee=!1,this.validator.sales_fee_msg="Harap isi sales fee",this.errors.push("sales_fee kosong")),this.po.id_sales&&"000"!=this.po.id_sales||(this.errors.push("Harap pilih Sales"),this.$swal("Harap pilih Sales","","warning"),setTimeout((function(){return t.$swal.close()}),1500)),this.po.id_konsumen&&"000"!=this.po.id_konsumen||(this.errors.push("Harap pilih konsumen"),this.$swal("Harap pilih konsumen","","warning"),setTimeout((function(){return t.$swal.close()}),1500)),this.po.id_kurir&&"000"!=this.po.id_kurir||(this.errors.push("Harap pilih kurir"),this.$swal("Harap pilih kurir","","warning"),setTimeout((function(){return t.$swal.close()}),1500)),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.notif=new r;var e=new Date(this.po.date);this.notif.add(this.po),this.label="Loading...",this.$http.post(localStorage.base_api+"po",this.po,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(a){t.po.notif_date=new Date(e.setDate(e.getDate()-2)),t.label="Tambah Purchase Order",t.$swal("Purchase Order berhasil ditambah","Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push("/po")}),1500)})).catch((function(e){return t.label="Tambah Purchase Order",401==e.response.status?t.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),t.$swal("Sesi login kamu sudah habis","login kagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(e){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1})):500==e.response.status&&(t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500)),console.log(e.response),!1}))},getRequest:function(t,e){var a=this;this.$http.get(t,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){e(t.data)})).catch((function(t){return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),console.log(t),!1}))},fetchAll:function(){var t=this;this.getRequest(localStorage.base_api+"sales",(function(e){t.sales.push({value:"000",label:"Pilih Sales"});for(var a=0;a<e.length;a++){var n={};n.value=e[a].id,n.label=e[a].nama_karyawan,t.sales.push(n)}})),this.getRequest(localStorage.base_api+"kurir",(function(e){t.kurir.push({value:"000",label:"Pilih Kurir"});for(var a=0;a<e.length;a++){var n={};n.value=e[a].id,n.label=e[a].nama_karyawan,t.kurir.push(n)}})),this.getRequest(localStorage.base_api+"konsumen",(function(e){t.konsumen.push({value:"000",label:"Pilih Konsumen"});for(var a=0;a<e.length;a++){var n={};n.value=e[a].id,n.label=e[a].nama,t.konsumen.push(n)}}))}},created:function(){5!=localStorage.level&&4!=localStorage.level||this.$router.push("/"),this.fetchAll()}}),c=u,h=a("2877"),d=Object(h["a"])(c,n,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-27adc968.d36e1d8d.js.map