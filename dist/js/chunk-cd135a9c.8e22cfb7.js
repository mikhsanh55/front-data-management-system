(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd135a9c"],{"8e44":function(a,t,e){"use strict";function n(a,t,e,n,r){return new Promise((function(i,o){a.$http.post(t,e,n).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=t,e.setAttribute("download",r),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(a){o(a)}))}))}function r(a,t,e,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,o){"get"==r?a.$http.get(t,e).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),e=document.createElement("a");e.href=t,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(a){o(a)})):a.$http.post(t,e).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),e=document.createElement("a");e.href=t,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){i()})).catch((function(a){o(a)}))}))}function i(a){return new Promise((function(t,e){a.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var t=[],e=[],n=0;n<a.data.length;n++){var r=new Date(a.data[n].date_line),i=new Date(r.setDate(r.getDate()-2));t.push({date:i,data:a.data[n],link:"po/detail/"+a.data[n].id})}for(var o=0;o<t.length;o++){var s=new Date,l=new Date(t[o].date);s==l&&e.push({date:t[o].date,data:t[o]})}return localStorage.setItem("notif",JSON.stringify(t)),t})).then((function(a){return t(a)})).catch((function(a){return e(a)}))}))}function o(a,t){return new Promise((function(e,n){var r=-1;Promise.all(a.map((function(a){return r++,fetch(a,t[r])}))).then((function(a){return Promise.all(a.map((function(a){return a.json()})))})).then((function(a){e(a)})).catch((function(a){return n(a)}))}))}function s(a,t,e,n){return new Promise((function(n,r){fetch(t,e).then((function(t){return 401==t.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==t.status?(a.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):t.json()})).then((function(a){return n(a)})).catch((function(a){return r(a)}))}))}function l(a,t,e){return new Promise((function(n,r){fetch(t,e).then((function(t){return 401==t.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==t.status?(a.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):t.json()})).then((function(a){return n(a)})).catch((function(a){return r(a)}))}))}e.d(t,"c",(function(){return n})),e.d(t,"d",(function(){return r})),e.d(t,"a",(function(){return i})),e.d(t,"e",(function(){return o})),e.d(t,"f",(function(){return s})),e.d(t,"b",(function(){return l}))},d8aa:function(a,t,e){"use strict";var n=e("e65a"),r=e.n(n);r.a},e65a:function(a,t,e){},f88f:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("CCard",[e("CCardHeader",[e("b",[a._v("Order")]),a._v(" Barang ")]),e("CCardBody",[e("CForm",{staticClass:"mt-4"},[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{attrs:{sm:"8"}},[e("CSelect",{attrs:{placeholder:"Pilih Barang",label:a.labelBarang,horizontal:"",options:a.barang},on:{"update:value":a.assignNamaBarang},model:{value:a.rpo.nama_barang,callback:function(t){a.$set(a.rpo,"nama_barang",t)},expression:"rpo.nama_barang"}}),e("CTextarea",{attrs:{label:"Spesifikasi Barang",description:a.validator.spesifikasi_barang_msg,"is-valid":a.validator.spesifikasi_barang,horizontal:"",rows:"3",readonly:""},on:{input:function(t){a.rpo.spesifikasi_barang.length<1?a.validator.spesifikasi_barang=!1:a.validator.spesifikasi_barang=!0}},model:{value:a.rpo.spesifikasi_barang,callback:function(t){a.$set(a.rpo,"spesifikasi_barang",t)},expression:"rpo.spesifikasi_barang"}}),e("CInput",{attrs:{type:"number",description:a.validator.qty_msg,"is-valid":a.validator.qty,autocomplete:"qty",label:"Quantity",horizontal:"",placeholder:"Masukan Quantity"},model:{value:a.rpo.qty,callback:function(t){a.$set(a.rpo,"qty",t)},expression:"rpo.qty"}}),e("CInput",{attrs:{type:"number",description:a.validator.harga_jual_msg,"is-valid":a.validator.harga_jual,autocomplete:"harga_jual",label:"Harga Jual Satuan",horizontal:"",placeholder:"Masukan Harga Jual Satuan",readonly:""},model:{value:a.rpo.harga_jual,callback:function(t){a.$set(a.rpo,"harga_jual",t)},expression:"rpo.harga_jual"}}),e("CInput",{attrs:{type:"number",description:a.validator.tax_msg,"is-valid":a.validator.tax,autocomplete:"tax",label:"Pajak (%)",horizontal:"",placeholder:"Masukan Tax Rate"},on:{input:function(t){a.rpo.tax.length<1?a.validator.tax=!1:a.validator.tax=!0}},model:{value:a.rpo.tax,callback:function(t){a.$set(a.rpo,"tax",t)},expression:"rpo.tax"}}),e("CInput",{attrs:{type:"number",description:a.validator.disc_msg,"is-valid":a.validator.disc,autocomplete:"disc",label:"Disc %",horizontal:"",placeholder:"Masukan disc"},on:{input:function(t){a.rpo.disc.length<1?a.validator.disc=!1:a.validator.disc=!0}},model:{value:a.rpo.disc,callback:function(t){a.$set(a.rpo,"disc",t)},expression:"rpo.disc"}})],1),e("CCol",{staticClass:"d-flex justify-content-end mt-4",attrs:{sm:"8"}},[e("button",{staticClass:"btn btn-light text-primary",on:{click:function(t){return t.preventDefault(),a.addToTable(t)}}},[e("i",{staticClass:"fa fa-plus mr-2"}),a._v(a._s(a.label))])])],1)],1),e("br"),e("hr",{staticClass:"text-center w-75"}),e("br"),e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("v-client-table",{staticClass:"m-4",attrs:{data:a.order_barang,columns:a.tableFields,options:a.tableOptions,id:"request-table"},scopedSlots:a._u([{key:"aksi",fn:function(t){return e("div",{},[e("button",{staticClass:"btn btn-secondary text-danger m-1",on:{click:function(e){return a.deleteFromTable(t.row.id)}}},[e("i",{staticClass:"fa fa-trash"})])])}}])}),e("div",{staticClass:"d-flex justify-content-end"},[e("div"),e("table",{staticClass:"table table-bordered table-striped m-2 mr-3 justify-content-end w-50"},[e("tr",[e("th",{staticClass:"w-50 text-right"},[a._v("Sub Total")]),e("td",[a._v(a._s(a.rpo.sub_total))])]),e("tr",[e("th",{staticClass:"w-50 text-right"},[a._v("Discount")]),e("td",[a._v(a._s(a.rpo.disc))])]),e("tr",[e("th",{staticClass:"w-50 text-right"},[a._v("Tax Rate (%)")]),e("td",[a._v(a._s(a.rpo.tax_rate))])]),e("tr",[e("th",{staticClass:"w-50 text-right"},[a._v("Sales Fee")]),e("td",[a._v(a._s(a.rpo.sales_fee))])]),e("tr",[e("th",{staticClass:"w-50 text-right"},[a._v("Other Cost")]),e("td",[a._v(a._s(a.rpo.other))])]),e("tr",[e("th",{staticClass:"w-50 text-right"},[a._v("Grand Total")]),e("td",[a._v(a._s(a.rpo.sub_total-a.rpo.disc+a.rpo.tax_rate+a.rpo.sales_fee+a.rpo.other))])])])])],1)],1)],1),e("CCardFooter",{staticClass:"m-4 d-flex justify-content-end"},[e("router-link",{staticClass:"btn btn-light text-primary",attrs:{to:"/po",disabled:a.isEmpty}},[e("i",{staticClass:"fa fa-cart-plus mr-2"}),a._v(" Selesai ")])],1)],1)],1)],1)],1)},r=[],i=e("8e44");function o(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var s={name:"OrderPO",data:function(){var a;return{labelBarang:"Pilih Barang",isEmpty:!0,label:"Tambah",errors:[],tableFields:["no","kode_barang","nama_barang","spesifikasi_barang","harga_jual","qty","tax","disc","total","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",kode_barang:"Kode Barang",nama_barang:"Nama Barang",spesifikasi_barang:"Spesifikasi",harga_jual:"Harga Jual",qty:"qty",tax:"Pajak %",disc:"disc %",total:"Total",aksi:"Aksi"},sortable:["no","kode_barang","nama_barang","qty"],filterable:["no","kode_barang","nama_barang","spesifikasi_barang","harga_jual","qty","tax","disc","total"],columnsClasses:{no:"text-center align-middle",kode_barang:"align-middle",nama_barang:"align-middle",spesifikasi_barang:"align-middle",harga_jual:"text-center align-middle",qty:"text-center align-middle",tax:"text-center align-middle",disc:"text-center align-middle",total:"text-center align-middle",aksi:"text-center align-middle"}},barang:[],barangs:[],validator:{harga_jual:null,harga_jual_msg:null,spesifikasi_barang:null,spesifikasi_barang_msg:null,qty:null,qty_msg:null,tanggal:null,tanggal_msg:null},rpo:(a={id_po:null,id_barang:1,nama_barang:null,spesifikasi_barang:null,qty:0,tanggal:null,harga_jual:null,status:1,kode_barang:null,tax_rate:0,total:0,sub_total:0,sales_fee:0,other:0},o(a,"sub_total",0),o(a,"sales_tax_rate",0),o(a,"disc",0),o(a,"tax",0),o(a,"grand_total",0),a),order_barang:[]}},computed:{search:function(){return this.barang}},methods:{assignNamaBarang:function(a,t){this.rpo.id_barang=a,this.rpo.nama_barang=t.target.selectedOptions[0].innerHTML;for(var e=0;e<this.barangs.length;e++)if(this.barangs[e].id==a)return this.rpo.harga_jual=this.barangs[e].harga_jual,this.rpo.spesifikasi_barang=this.barangs[e].spesifikasi,this.rpo.kode_barang=this.barangs[e].kode_barang,void(this.rpo.tax=this.barangs[e].tax)},getRequest:function(a){var t=this;return new Promise((function(e,n){t.$http.get(a,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){e(a.data)})).catch((function(a){return alert("Ada sedikit error saat ambil data!"),console.log(a),n(a),!1}))}))},deleteFromTable:function(a){var t=this;this.$swal("Mohon tunggu","","info"),this.$http.delete(localStorage.base_api+"order/barang/po/"+a,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(){t.barang=[],t.order_barang=[],t.fetchAll(),t.getDataTable(),t.$swal.close()})).catch((function(a){t.$swal("Tidak bisa menghapus data","mohon hubungi pengembangnya","error"),console.error(a)}))},addToTable:function(){var a=this;if(this.errors=[],this.rpo.spesifikasi_barang||(this.validator.spesifikasi_barang=!1,this.validator.spesifikasi_barang_msg="Harap isi Spesifikasi barang",this.errors.push("spesifikasi_barang kosong")),this.rpo.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi qty barang",this.errors.push("qty kosong")),this.errors.length)return console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.rpo.id_po=this.$route.params.id,this.rpo.total=Math.round(this.rpo.harga_jual*this.rpo.qty+this.rpo.tax/100-this.rpo.disc/100*(this.rpo.harga_jual*this.rpo.qty)),this.$http.post(localStorage.base_api+"order/barang/po",this.rpo,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){var e;a.order_barang=[],a.rpo=(e={id_po:null,id_barang:1,nama_barang:null,spesifikasi_barang:null,qty:0,tanggal:null,harga_jual:null,status:1,kode_barang:null,tax_rate:0,total:0,sub_total:0,sales_fee:0,other:0},o(e,"sub_total",0),o(e,"sales_tax_rate",0),o(e,"disc",0),o(e,"tax",0),o(e,"grand_total",0),e),a.label="Tambah",a.getDataTable(),window.scrollBy({top:1e3,left:0,behavior:"smooth"})})).catch((function(t){return a.label="Tambah",console.error(t),!1}))},fetchAll:function(){var a=this,t=this;this.getRequest(localStorage.base_api+"barang").then((function(e){if(e.length<1)return alert("Mohon maaf belum ada barang masuk untuk saat ini, silahkan tambah dulu barangnya yah"),!1;a.barangs=e;for(var n=0;n<e.length;n++){var r={};r.value=e[n].id,r.label=e[n].nama_barang,t.barang.push(r)}})).catch((function(t){return console.error(t),a.$swal("Tidak bisa mengambil data barang","Mohon hubungi pengembangnya","error"),setTimeout((function(){return a.$swal.close()}),1500),!1}))},getDataTable:function(){var a=this;Object(i["f"])(this,localStorage.base_api+"order/barang/po/detail/"+this.$route.params.id,{method:"post",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(t){console.warn("REMIN"),console.log(t),t.forEach((function(t,e){Object(i["f"])(a,localStorage.base_api+"barang/"+t.id_barang,{method:"post",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(n){var r={id:t.id,no:++e,qty:t.qty,tax:t.tax,disc:t.disc,kode_barang:n.kode_barang,nama_barang:n.nama_barang,spesifikasi_barang:n.spesifikasi,harga_jual:n.harga_jual,total:n.harga_jual*t.qty};a.order_barang.push(r),a.rpo.sub_total+=parseInt(n.harga_jual*t.qty),a.rpo.disc+=parseInt(n.harga_jual*t.qty*(t.disc/100)),a.rpo.tax_rate+=parseInt(n.harga_jual*t.qty*(t.tax/100))})).catch((function(t){return console.error(t),a.$swal("Tidak bisa mengambil data barang","Mohon hubungi pengembangnya","error"),setTimeout((function(){return a.$swal.close()}),1500),!1}))}))})).catch((function(t){return console.error(t),a.$swal("Tidak bisa mengambil data barang","Mohon hubungi pengembangnya","error"),setTimeout((function(){return a.$swal.close()}),1500),!1}))}},created:function(){5!=localStorage.level&&4!=localStorage.level||this.$router.push("/"),this.fetchAll(),this.getDataTable()}},l=s,u=(e("d8aa"),e("2877")),c=Object(u["a"])(l,n,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-cd135a9c.8e22cfb7.js.map