(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de312"],{8532:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CCard",[e("CCardHeader",[e("b",[t._v("Edit")]),t._v(" Request Barang ")]),e("CCardBody",[e("CForm",{staticClass:"mt-4"},[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{attrs:{sm:"8"}},[e("CSelect",{attrs:{label:"Barang",horizontal:"",options:t.barang},on:{"update:value":t.assignBarang},model:{value:t.request_po.id_barang,callback:function(a){t.$set(t.request_po,"id_barang",a)},expression:"request_po.id_barang"}}),e("CInput",{attrs:{type:"date",label:"Tanggal",horizontal:"",description:t.validator.date_msg,"is-valid":t.validator.date},model:{value:t.request_po.date,callback:function(a){t.$set(t.request_po,"date",a)},expression:"request_po.date"}}),e("CInput",{attrs:{type:"number",label:"Quantity",horizontal:"",description:t.validator.qty_msg,"is-valid":t.validator.qty},model:{value:t.request_po.qty,callback:function(a){t.$set(t.request_po,"qty",a)},expression:"request_po.qty"}}),e("CTextarea",{attrs:{label:"Keterangan",description:t.validator.keterangan_msg,"is-valid":t.validator.keterangan,horizontal:"",rows:"3"},model:{value:t.request_po.keterangan,callback:function(a){t.$set(t.request_po,"keterangan",a)},expression:"request_po.keterangan"}}),e("CSelect",{attrs:{label:"Status",horizontal:"",options:t.status},on:{"update:value":t.assignStatus},model:{value:t.statusselected,callback:function(a){t.statusselected=a},expression:"statusselected"}})],1)],1)],1)],1),e("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[e("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(a){return a.preventDefault(),t.updateRequestPO(a)}}},[e("i",{staticClass:"fa fa-edit mr-2"}),t._v(t._s(t.label)+" ")])],1)],1)],1)},s=[],r={name:"EditRequestPO",data:function(){return{statusselected:4,barang:[],status:[{value:1,label:"Request"},{value:2,label:"Proses"},{value:3,label:"Dikirim"},{value:4,label:"Selesai"},{value:5,label:"Batal"}],errors:[],label:"Simpan Perubahan",validator:{date:null,qty:null,keterangan:null,date_msg:null,qty_msg:null,keterangan_msg:null},request_po:{id_barang:null,date:null,qty:null,keterangan:null,status:null}}},methods:{getData:function(){var t=this,a=new Headers;a.append("Authorization","bearer "+localStorage.token);var e={method:"POST",headers:a,redirect:"follow"};fetch("https://young-temple-67589.herokuapp.com/api/request/barang/"+this.$route.params.id,e).then((function(t){return t.json()})).then((function(a){if(40001==a.errcode)return t.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),t.$swal("Sesi login kamu sudah habis","Login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace("/login")}))})).catch((function(a){t.$swal("Mohon maaf tidak bisa meng-update data","Mohon hubungi pengembang...","error"),setTimeout((function(){return t.$swal.close(),!1}))})),!1;console.log(a.status),t.statusselected=Number(a.status),t.request_po=a})).catch((function(a){return t.$swal("Mohon maaf tidak bisa meng-update data","Mohon hubungi pengembang...","error"),setTimeout((function(){return t.$swal.close(),!1})),console.error(a),!1}))},assignStatus:function(t){this.request_po.status=t,console.log(this.request_po.status)},updateRequestPO:function(){var t=this;if(this.label="Loading...",this.errors=[],this.request_po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi tanggal",this.errors.push("date karyawan kosong")),this.request_po.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi kuantitas barang",this.errors.push("qty karyawan kosong")),this.request_po.keterangan||(this.validator.keterangan=!1,this.validator.keterangan_msg="Harap isi keterangan",this.errors.push("keterangan karyawan kosong")),this.errors.length)return this.label="Simpan Perubahan",console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.$http.post("https://young-temple-67589.herokuapp.com/api/request/barang/edit/"+this.$route.params.id,this.request_po,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(a){t.label="Simpan Perubahan",console.log(a),t.$swal("Update data berhasil","Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push("/data-request-barang")}))})).catch((function(a){t.$swal("Mohon maaf tidak bisa meng-update data","Mohon hubungi pengembang...","error"),setTimeout((function(){return t.$swal.close(),!1}))}))}},created:function(){var t=this;this.$http.get("https://young-temple-67589.herokuapp.com/api/barang",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var e=0;e<a.data.length;e++){var n={};n.value=a.data[e].id,n.label=a.data[e].nama_barang,t.barang.push(n)}})).then((function(){t.getData()})).catch((function(a){return t.$swal("Tidak bisa mengambil data barang","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1}))}},o=r,l=e("2877"),i=Object(l["a"])(o,n,s,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0de312.6fe10b0e.js.map