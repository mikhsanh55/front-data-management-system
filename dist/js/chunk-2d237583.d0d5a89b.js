(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237583"],{fb5f:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("CCard",[e("CCardHeader",[e("b",[a._v("Tambah")]),a._v(" Request Barang ")]),e("CCardBody",[e("CForm",{staticClass:"mt-4"},[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{attrs:{sm:"8"}},[e("CSelect",{attrs:{label:"Barang",horizontal:"",options:a.barang},on:{"update:value":a.assignBarang},model:{value:a.request_po.id_barang,callback:function(t){a.$set(a.request_po,"id_barang",t)},expression:"request_po.id_barang"}}),e("CInput",{attrs:{type:"date",label:"Tanggal",horizontal:"",description:a.validator.date_msg,"is-valid":a.validator.date},model:{value:a.request_po.date,callback:function(t){a.$set(a.request_po,"date",t)},expression:"request_po.date"}}),e("CInput",{attrs:{type:"number",label:"Quantity",horizontal:"",description:a.validator.qty_msg,"is-valid":a.validator.qty},model:{value:a.request_po.qty,callback:function(t){a.$set(a.request_po,"qty",t)},expression:"request_po.qty"}}),e("CTextarea",{attrs:{label:"Keterangan",description:a.validator.keterangan_msg,"is-valid":a.validator.keterangan,horizontal:"",rows:"3"},model:{value:a.request_po.keterangan,callback:function(t){a.$set(a.request_po,"keterangan",t)},expression:"request_po.keterangan"}}),e("CSelect",{attrs:{label:"Status",horizontal:"",options:a.status},on:{"update:value":a.assignStatus},model:{value:a.request_po.status,callback:function(t){a.$set(a.request_po,"status",t)},expression:"request_po.status"}})],1)],1)],1)],1),e("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[e("CButton",{attrs:{type:"submit",color:"primary"},on:{click:function(t){return t.preventDefault(),a.addRequestPO(t)}}},[e("i",{staticClass:"fa fa-plus mr-2"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},r=[],n={name:"AddRequestPO",data:function(){return{statusselected:1,barang:[],status:[{value:"000",label:"Pilih Status"},{value:1,label:"Request"},{value:2,label:"Proses"},{value:3,label:"Dikirim"},{value:4,label:"Selesai"},{value:5,label:"Batal"}],errors:[],label:"Tambah Request Barang",validator:{date:null,qty:null,keterangan:null,date_msg:null,qty_msg:null,keterangan_msg:null},request_po:{id_barang:null,date:null,qty:null,keterangan:null,status:null}}},methods:{assignBarang:function(a){this.request_po.id_barang=a},assignStatus:function(a){this.request_po.status=a},addRequestPO:function(){var a=this;if(this.label="Loading...",this.errors=[],this.request_po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi tanggal",this.errors.push("date karyawan kosong")),this.request_po.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi kuantitas barang",this.errors.push("qty karyawan kosong")),this.request_po.keterangan||(this.validator.keterangan=!1,this.validator.keterangan_msg="Harap isi keterangan",this.errors.push("keterangan karyawan kosong")),this.request_po.id_barang&&"000"!=this.request_po.id_barang||(this.errors.push("Harap pilih barang"),this.$swal("Harap pilih barang","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.request_po.status&&"000"!=this.request_po.status||(this.errors.push("Harap pilih status"),this.$swal("Harap pilih status","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.errors.length)return this.label="Tambah Request Barang",console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.$http.post(localStorage.base_api+"request/barang",this.request_po,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(t){a.label="Tambah Request Barang",a.$swal("Penambahan Request Barang berhasil","Mohon tunggu sebentar","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/data-request-barang")}),1500)})).catch((function(t){return a.$swal("Penambahan Request Barang gagal","Mohon tunggu sebentar","error"),setTimeout((function(){return a.$swal.close()}),1500),!1}))}},created:function(){var a=this;this.barang.push({value:"000",label:"Pilih Barang"}),1!=localStorage.level&&2!=localStorage.level&&6!=localStorage.level&&5!=localStorage.level&&this.$router.push("/"),this.$http.get(localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=0;e<t.data.length;e++){var s={};s.value=t.data[e].id,s.label=t.data[e].nama_barang,a.barang.push(s)}a.request_po.id_barang=a.barang[0].id})).catch((function(t){return a.$swal("Tidak bisa mengambil data barang","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1}))}},l=n,o=e("2877"),i=Object(o["a"])(l,s,r,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d237583.d0d5a89b.js.map