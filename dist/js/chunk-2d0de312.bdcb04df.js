(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de312"],{8532:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CCard",[a("CCardHeader",[a("b",[t._v("Edit")]),t._v(" Request Barang ")]),a("CCardBody",[a("CForm",{staticClass:"mt-4"},[a("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[a("CCol",{attrs:{sm:"8"}},[a("CInput",{attrs:{type:"date",label:"Tanggal",horizontal:"",description:t.validator.date_msg,"is-valid":t.validator.date},model:{value:t.request_po.date,callback:function(e){t.$set(t.request_po,"date",e)},expression:"request_po.date"}}),a("CInput",{attrs:{type:"number",label:"Quantity",horizontal:"",description:t.validator.qty_msg,"is-valid":t.validator.qty},model:{value:t.request_po.qty,callback:function(e){t.$set(t.request_po,"qty",e)},expression:"request_po.qty"}}),a("CTextarea",{attrs:{label:"Keterangan",description:t.validator.keterangan_msg,"is-valid":t.validator.keterangan,horizontal:"",rows:"3"},model:{value:t.request_po.keterangan,callback:function(e){t.$set(t.request_po,"keterangan",e)},expression:"request_po.keterangan"}}),a("CSelect",{attrs:{label:"Status",horizontal:"",options:t.status},on:{"update:value":t.assignStatus},model:{value:t.statusselected,callback:function(e){t.statusselected=e},expression:"statusselected"}})],1)],1)],1)],1),a("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[a("CButton",{attrs:{type:"submit",color:"primary"},on:{click:function(e){return e.preventDefault(),t.updateRequestPO(e)}}},[t._v(" "+t._s(t.label)+" ")])],1)],1)],1)},s=[],n={name:"EditRequestPO",data:function(){return{statusselected:4,status:[{value:1,label:"Request"},{value:2,label:"Proses"},{value:3,label:"Dikirim"},{value:4,label:"Selesai"},{value:5,label:"Batal"}],errors:[],label:"Update",validator:{date:null,qty:null,keterangan:null,date_msg:null,qty_msg:null,keterangan_msg:null},request_po:{date:null,qty:null,keterangan:null,status:null}}},methods:{getData:function(){var t=this,e=new Headers;e.append("Authorization","bearer "+localStorage.token);var a={method:"POST",headers:e,redirect:"follow"};fetch("https://young-temple-67589.herokuapp.com/api/request/barang/"+this.$route.params.id,a).then((function(t){return t.json()})).then((function(e){if(40001==e.errcode)return t.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){t.$router.replace({path:"/login"})})).catch((function(t){return alert("An error occured when get data :("),!1})),!1;console.log(e.status),t.statusselected=Number(e.status),t.request_po=e})).catch((function(t){return alert("Tidak bisa mengambil data, hubungi pengembangnya yah"),console.error(t),!1}))},assignStatus:function(t){this.request_po.status=t,console.log(this.request_po.status)},updateRequestPO:function(){var t=this;if(this.label="Loading...",this.errors=[],this.request_po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi tanggal",this.errors.push("date karyawan kosong")),this.request_po.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi kuantitas barang",this.errors.push("qty karyawan kosong")),this.request_po.keterangan||(this.validator.keterangan=!1,this.validator.keterangan_msg="Harap isi keterangan",this.errors.push("keterangan karyawan kosong")),this.errors.length)return console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.$http.post("https://young-temple-67589.herokuapp.com/api/request/barang/edit/"+this.$route.params.id,this.request_po,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(e){t.label="Update Data",console.log(e),alert("Data berhasil diupdate"),t.$router.push("/po/data-request-barang")})).catch((function(t){return console.error(t)}))}},created:function(){this.getData()}},o=n,l=a("2877"),i=Object(l["a"])(o,r,s,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0de312.bdcb04df.js.map