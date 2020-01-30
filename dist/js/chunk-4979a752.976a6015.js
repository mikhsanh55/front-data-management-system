(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4979a752"],{d8aa:function(a,t,r){"use strict";var i=r("e65a"),n=r.n(i);n.a},e65a:function(a,t,r){},f88f:function(a,t,r){"use strict";r.r(t);var i=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",[r("CRow",[r("CCol",{attrs:{sm:"12"}},[r("CCard",[r("CCardHeader",[r("b",[a._v("Order")]),a._v(" Barang ")]),r("CCardBody",[r("CForm",{staticClass:"mt-4"},[r("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[r("CCol",{attrs:{sm:"8"}},[r("CSelect",{attrs:{placeholder:"Pilih Barang",label:a.labelBarang,horizontal:"",options:a.barang},on:{"update:value":a.assignNamaBarang},model:{value:a.rpo.nama_barang,callback:function(t){a.$set(a.rpo,"nama_barang",t)},expression:"rpo.nama_barang"}}),r("CTextarea",{attrs:{label:"Spesifikasi Barang",description:a.validator.spesifikasi_barang_msg,"is-valid":a.validator.spesifikasi_barang,horizontal:"",rows:"3"},on:{input:function(t){a.rpo.spesifikasi_barang.length<1?a.validator.spesifikasi_barang=!1:a.validator.spesifikasi_barang=!0}},model:{value:a.rpo.spesifikasi_barang,callback:function(t){a.$set(a.rpo,"spesifikasi_barang",t)},expression:"rpo.spesifikasi_barang"}}),r("CInput",{attrs:{type:"number",description:a.validator.qty_msg,"is-valid":a.validator.qty,autocomplete:"qty",label:"Quantity",horizontal:"",placeholder:"Masukan Quantity"},model:{value:a.rpo.qty,callback:function(t){a.$set(a.rpo,"qty",t)},expression:"rpo.qty"}}),r("CInput",{attrs:{type:"number",description:a.validator.harga_jual_msg,"is-valid":a.validator.harga_jual,autocomplete:"harga_jual",label:"Harga Jual Satuan",horizontal:"",placeholder:"Masukan Harga Jual Satuan"},model:{value:a.rpo.harga_jual,callback:function(t){a.$set(a.rpo,"harga_jual",t)},expression:"rpo.harga_jual"}}),r("CInput",{attrs:{type:"number",description:a.validator.tax_msg,"is-valid":a.validator.tax,autocomplete:"tax",label:"Pajak (%)",horizontal:"",placeholder:"Masukan Tax Rate"},on:{input:function(t){a.rpo.tax.length<1?a.validator.tax=!1:a.validator.tax=!0}},model:{value:a.rpo.tax,callback:function(t){a.$set(a.rpo,"tax",t)},expression:"rpo.tax"}}),r("CInput",{attrs:{type:"number",description:a.validator.disc_msg,"is-valid":a.validator.disc,autocomplete:"disc",label:"Disc %",horizontal:"",placeholder:"Masukan disc"},on:{input:function(t){a.rpo.disc.length<1?a.validator.disc=!1:a.validator.disc=!0}},model:{value:a.rpo.disc,callback:function(t){a.$set(a.rpo,"disc",t)},expression:"rpo.disc"}})],1),r("CCol",{staticClass:"d-flex justify-content-end mt-4",attrs:{sm:"8"}},[r("button",{staticClass:"btn btn-light text-primary",on:{click:function(t){return t.preventDefault(),a.addToTable(t)}}},[r("i",{staticClass:"fa fa-plus mr-2"}),a._v(a._s(a.label))])])],1)],1),r("br"),r("hr",{staticClass:"text-center w-75"}),r("br"),r("CRow",[r("CCol",{attrs:{sm:"12"}},[r("v-client-table",{staticClass:"m-4",attrs:{data:a.order_barang,columns:a.tableFields,options:a.tableOptions,id:"request-table"},scopedSlots:a._u([{key:"aksi",fn:function(t){return r("div",{},[r("button",{staticClass:"btn btn-secondary text-danger m-1",on:{click:function(r){return a.deleteFromTable(t)}}},[r("i",{staticClass:"fa fa-trash"})])])}}])})],1)],1)],1),r("CCardFooter",{staticClass:"m-4 d-flex justify-content-end"},[r("button",{staticClass:"btn btn-light text-primary",attrs:{disabled:a.isEmpty}},[r("i",{staticClass:"fa fa-cart-plus mr-2"}),a._v(" Selesai ")])])],1)],1)],1)],1)},n=[],e={name:"OrderPO",data:function(){return{labelBarang:"Pilih Barang",isEmpty:!0,label:"Tambah",errors:[],tableFields:["no","kode_barang","nama_barang","spesifikasi_barang","harga_jual","qty","tax","disc","total","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi_barang:"Spesifikasi",harga_jual:"Harga Jual",qty:"qty",tax:"Pajak %",disc:"disc %",total:"Total",aksi:"Aksi"},sortable:["no","kode_barang","nama_barang","qty"],filterable:["no","kode_barang","nama_barang","spesifikasi_barang","harga_jual","qty","tax","disc","total"],columnsClasses:{no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi_barang:"align-middle",harga_jual:"text-center align-middle",qty:"text-center align-middle",tax:"text-center align-middle",disc:"text-center align-middle",total:"text-center align-middle",aksi:"text-center align-middle"}},barang:[],barangs:[],validator:{harga_jual:null,harga_jual_msg:null,spesifikasi_barang:null,spesifikasi_barang_msg:null,qty:null,qty_msg:null,tanggal:null,tanggal_msg:null},rpo:{id_po:null,id_barang:1,nama_barang:null,spesifikasi_barang:null,qty:0,tanggal:null,harga_jual:null,status:1,kode_barang:null,tax:null,disc:null,total:null},order_barang:[]}},computed:{search:function(){return this.barang}},methods:{assignNamaBarang:function(a,t){this.rpo.id_barang=a,this.rpo.nama_barang=t.target.selectedOptions[0].innerHTML;for(var r=0;r<this.barangs.length;r++)if(this.barangs[r].id==a)return this.rpo.harga_jual=this.barangs[r].harga_jual,this.rpo.spesifikasi_barang=this.barangs[r].spesifikasi,this.rpo.kode_barang=this.barangs[r].kode_barang,void(this.rpo.tax=this.barangs[r].tax)},getRequest:function(a){var t=this;return new Promise((function(r,i){t.$http.get(a,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){r(a.data)})).catch((function(a){return alert("Ada sedikit error saat ambil data!"),console.log(a),i(a),!1}))}))},deleteFromTable:function(a){this.order_barang.splice(a.index-1,1),localStorage.setItem("order_barang",JSON.stringify(this.order_barang))},addToTable:function(){var a=this;if(this.errors=[],this.rpo.spesifikasi_barang||(this.validator.spesifikasi_barang=!1,this.validator.spesifikasi_barang_msg="Harap isi Spesifikasi barang",this.errors.push("spesifikasi_barang kosong")),this.rpo.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi qty barang",this.errors.push("qty kosong")),this.errors.length)return console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.rpo.id_po=this.$route.params.id,this.rpo.total=Math.round(this.rpo.harga_jual*this.rpo.qty+this.rpo.tax/100-this.rpo.disc/100*(this.rpo.harga_jual*this.rpo.qty)),this.$http.post("https://young-temple-67589.herokuapp.com/api/order/barang/po",this.rpo,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){a.label="Tambah",a.getDataTable(),console.log(t)})).catch((function(t){if(a.label="Tambah",t.response)for(var r in t.response.data.errmsg)alert(t.response.data.errmsg[r][0]);return console.error(t.response),!1}))},fetchAll:function(){var a=this,t=this;this.getRequest("https://young-temple-67589.herokuapp.com/api/barang").then((function(r){if(r.length<1)return alert("Mohon maaf belum ada barang masuk untuk saat ini, silahkan tambah dulu barangnya yah"),!1;a.barangs=r;for(var i=0;i<r.length;i++){var n={};n.value=r[i].id,n.label=r[i].nama_barang,t.barang.push(n)}})).catch((function(a){return console.error(a)}))}},created:function(){this.fetchAll(),this.getDataTable().then((function(a){console.log(a)})).catch((function(a){return console.error(a)}))}},s=e,l=(r("d8aa"),r("2877")),o=Object(l["a"])(s,i,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-4979a752.976a6015.js.map