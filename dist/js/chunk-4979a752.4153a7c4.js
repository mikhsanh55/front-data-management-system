(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4979a752"],{d8aa:function(a,t,r){"use strict";var n=r("e65a"),e=r.n(n);e.a},e65a:function(a,t,r){},f88f:function(a,t,r){"use strict";r.r(t);var n=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",[r("CRow",[r("CCol",{attrs:{sm:"12"}},[r("CCard",[r("CCardHeader",[r("b",[a._v("Order")]),a._v(" Barang ")]),r("CCardBody",[r("CForm",{staticClass:"mt-4"},[r("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[r("CCol",{attrs:{sm:"8"}},[r("CSelect",{attrs:{placeholder:"Pilih Barang",label:a.labelBarang,horizontal:"",options:a.barang},on:{"update:value":a.assignNamaBarang},model:{value:a.rpo.nama_barang,callback:function(t){a.$set(a.rpo,"nama_barang",t)},expression:"rpo.nama_barang"}}),r("CTextarea",{attrs:{label:"Spesifikasi Barang",description:a.validator.spesifikasi_barang_msg,"is-valid":a.validator.spesifikasi_barang,horizontal:"",rows:"3"},on:{input:function(t){a.rpo.spesifikasi_barang.length<1?a.validator.spesifikasi_barang=!1:a.validator.spesifikasi_barang=!0}},model:{value:a.rpo.spesifikasi_barang,callback:function(t){a.$set(a.rpo,"spesifikasi_barang",t)},expression:"rpo.spesifikasi_barang"}}),r("CInput",{attrs:{type:"number",description:a.validator.qty_msg,"is-valid":a.validator.qty,autocomplete:"qty",label:"Quantity",horizontal:"",placeholder:"Masukan Quantity"},model:{value:a.rpo.qty,callback:function(t){a.$set(a.rpo,"qty",t)},expression:"rpo.qty"}}),r("CInput",{attrs:{type:"number",description:a.validator.harga_jual_msg,"is-valid":a.validator.harga_jual,autocomplete:"harga_jual",label:"Harga Jual Satuan",horizontal:"",placeholder:"Masukan Harga Jual Satuan"},model:{value:a.rpo.harga_jual,callback:function(t){a.$set(a.rpo,"harga_jual",t)},expression:"rpo.harga_jual"}}),r("CInput",{attrs:{type:"number",description:a.validator.tax_msg,"is-valid":a.validator.tax,autocomplete:"tax",label:"Pajak (%)",horizontal:"",placeholder:"Masukan Tax Rate"},on:{input:function(t){a.rpo.tax.length<1?a.validator.tax=!1:a.validator.tax=!0}},model:{value:a.rpo.tax_rate,callback:function(t){a.$set(a.rpo,"tax_rate",t)},expression:"rpo.tax_rate"}}),r("CInput",{attrs:{type:"number",description:a.validator.diskon_msg,"is-valid":a.validator.diskon,autocomplete:"diskon",label:"Diskon %",horizontal:"",placeholder:"Masukan Diskon"},on:{input:function(t){a.rpo.diskon.length<1?a.validator.diskon=!1:a.validator.diskon=!0}},model:{value:a.rpo.diskon,callback:function(t){a.$set(a.rpo,"diskon",t)},expression:"rpo.diskon"}})],1),r("CCol",{staticClass:"d-flex justify-content-end mt-4",attrs:{sm:"8"}},[r("button",{staticClass:"btn btn-light text-primary",on:{click:function(t){return t.preventDefault(),a.addToTable(t)}}},[r("i",{staticClass:"fa fa-plus mr-2"}),a._v("Tambah")])])],1)],1),r("br"),r("hr",{staticClass:"text-center w-75"}),r("br"),r("CRow",[r("CCol",{attrs:{sm:"12"}},[r("v-client-table",{staticClass:"m-4",attrs:{data:a.order_barang,columns:a.tableFields,options:a.tableOptions,id:"request-table"},scopedSlots:a._u([{key:"aksi",fn:function(t){return r("div",{},[r("button",{staticClass:"btn btn-secondary text-danger m-1",on:{click:function(r){return a.deleteFromTable(t)}}},[r("i",{staticClass:"fa fa-trash"})])])}}])})],1)],1)],1),r("CCardFooter",{staticClass:"m-4 d-flex justify-content-end"},[r("button",{staticClass:"btn btn-light text-primary",attrs:{disabled:a.isEmpty},on:{click:function(t){return t.preventDefault(),a.orderBarang(t)}}},[r("i",{staticClass:"fa fa-cart-plus mr-2"}),a._v(" "+a._s(a.label)+" ")])])],1)],1)],1)],1)},e=[],i={name:"OrderPO",data:function(){return{labelBarang:"Pilih Barang",isEmpty:!0,label:"Selesai",errors:[],tableFields:["no","kode_barang","nama_barang","spesifikasi_barang","harga_jual","qty","tax_rate","disc","total","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi_barang:"Spesifikasi",harga_jual:"Harga Jual",qty:"qty",tax_rate:"Pajak %",disc:"Diskon %",total:"Total",aksi:"Aksi"},sortable:["no","kode_barang","nama_barang","qty"],filterable:["no","kode_barang","nama_barang","spesifikasi_barang","harga_jual","qty","tax_rate","disc","total"],columnsClasses:{no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi_barang:"align-middle",harga_jual:"text-center align-middle",qty:"text-center align-middle",tax_rate:"text-center align-middle",disc:"text-center align-middle",total:"text-center align-middle",aksi:"text-center align-middle"}},barang:[],barangs:[],validator:{harga_jual:null,harga_jual_msg:null,spesifikasi_barang:null,spesifikasi_barang_msg:null,qty:null,qty_msg:null,tanggal:null,tanggal_msg:null},rpo:{id_barang:1,nama_barang:null,spesifikasi_barang:null,qty:0,tanggal:null,harga_jual:null,status:1,kode_barang:null,tax_rate:null,diskon:null},order_barang:[]}},computed:{search:function(){return this.barang}},methods:{assignNamaBarang:function(a,t){this.rpo.id_barang=a,this.rpo.nama_barang=t.target.selectedOptions[0].innerHTML;for(var r=0;r<this.barangs.length;r++)if(this.barangs[r].id==a)return this.rpo.harga_jual=this.barangs[r].harga_jual,this.rpo.spesifikasi_barang=this.barangs[r].spesifikasi,this.rpo.kode_barang=this.barangs[r].kode_barang,void(this.rpo.tax_rate=this.barangs[r].tax_rate)},getRequest:function(a){var t=this;return new Promise((function(r,n){t.$http.get(a,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){r(a.data)})).catch((function(a){return alert("Ada sedikit error saat ambil data!"),console.log(a),n(a),!1}))}))},deleteFromTable:function(a){this.order_barang.splice(a.index-1,1),localStorage.setItem("order_barang",JSON.stringify(this.order_barang))},addToTable:function(){var a=this;if(this.errors=[],this.rpo.spesifikasi_barang||(this.validator.spesifikasi_barang=!1,this.validator.spesifikasi_barang_msg="Harap isi Spesifikasi barang",this.errors.push("spesifikasi_barang kosong")),this.rpo.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi qty barang",this.errors.push("qty kosong")),this.errors.length)return console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;if(this.order_barang.length>0)for(var t=0;t<this.order_barang.length;t++)if(this.rpo.id_barang==this.order_barang[t].id_barang)return this.$swal("Barang sudah ditambahkan","kamu tidak bisa menambah barang yang sama 2 kali","warning"),setTimeout((function(){a.$swal.close()}),1500),!1;var r={};r.id_barang=this.rpo.id_barang,r.nama_barang=this.rpo.nama_barang,r.spesifikasi_barang=this.rpo.spesifikasi_barang,r.qty=this.rpo.qty,r.no=this.order_barang.length+1,r.kode_barang=this.rpo.kode_barang,r.harga_jual=this.rpo.harga_jual,r.tax_rate=this.rpo.tax_rate,r.disc=this.rpo.diskon,r.total=Math.round(r.harga_jual*r.qty+r.tax/100-r.disc/100*(r.harga_jual*r.qty)),r.id_po=this.$route.params.id,this.order_barang.push(r),localStorage.setItem("order_barang",JSON.stringify(this.order_barang)),this.rpo.spesifikasi_barang="",this.rpo.qty="",this.rpo.kode_barang="",this.rpo.harga_jual="",this.rpo.tax_rate="",this.rpo.diskon="",this.labelBarang="Pilih Barang",console.log(this.order_barang),window.scrollTo(0,document.body.scrollHeight),this.isEmpty=!1},fetchAll:function(){var a=this,t=this;this.getRequest("https://young-temple-67589.herokuapp.com/api/barang").then((function(r){if(r.length<1)return alert("Mohon maaf belum ada barang masuk untuk saat ini, silahkan tambah dulu barangnya yah"),!1;a.barangs=r;for(var n=0;n<r.length;n++){var e={};e.value=r[n].id,e.label=r[n].nama_barang,t.barang.push(e)}})).catch((function(a){return console.error(a)}))},orderBarang:function(){var a=this;this.label="Loading...",this.$http.post("https://young-temple-67589.herokuapp.com/api/order/barang/po",this.order_barang,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){alert(t.data.message),a.label="Selesai",console.log(t)})).then((function(){a.$router.push({path:"/po"})})).catch((function(t){if(a.label="Selesai",t.response)for(var r in t.response.data.errmsg)alert(t.response.data.errmsg[r][0]);return console.error(t.response),!1}))}},created:function(){this.fetchAll(),null!=localStorage.getItem("order_barang")&&(this.order_barang=JSON.parse(localStorage.getItem("order_barang")))}},s=i,o=(r("d8aa"),r("2877")),l=Object(o["a"])(s,n,e,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4979a752.4153a7c4.js.map