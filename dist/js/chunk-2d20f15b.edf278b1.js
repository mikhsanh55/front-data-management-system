(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f15b"],{b1b8:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CCard",[e("CCardHeader",[e("b",[t._v("Detail")]),t._v(" Vendor ")]),e("CCardBody",[e("CRow",{staticClass:"max-auto d-flex justify-content-center mb-4 mt-4"},[e("CCol",{attrs:{sm:"12"}},[e("div",{staticClass:"mx-auto d-flex justify-content-center"},[e("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:"https://young-temple-67589.herokuapp.com/"+t.vendor.foto}})])])],1),e("CRow",{staticClass:"mx-auto d-flex justify-content-center mt-4"},[e("CCol",{attrs:{sm:"8"}},[e("table",{staticClass:"table table-borderless"},[e("tr",[e("th",[t._v("Nama")]),e("td",[t._v(t._s(t.vendor.nama))])]),e("tr",[e("th",[t._v("No Rekening")]),e("td",[t._v(t._s(t.vendor.no_rekening))])]),e("tr",[e("th",[t._v("Email")]),e("td",[t._v(t._s(t.vendor.email))])]),e("tr",[e("th",[t._v("NO HP/WA")]),e("td",[t._v(t._s(t.vendor.wa_hp))])]),e("tr",[e("th",[t._v("Perusahaan")]),e("td",[t._v(t._s(t.vendor.nama_instansi))])]),e("tr",[e("th",[t._v("Karakteristik Perusahaan")]),e("td",[t._v(t._s(t.vendor.karakteristik_perusahaan))])]),e("tr",[e("th",[t._v("Alamat")]),e("td",[t._v(t._s(t.vendor.alamat))])])])])],1)],1)],1)],1)},o=[],r={name:"DetailVendor",data:function(){return{vendor:{id:0,nama:null,no_rekening:null,wa_hp:null,nama_instansi:null,karakteristik_perusahaan:null,alamat:null,email:null,foto:null}}},methods:{getData:function(){var t=this,a=new Headers;a.append("Authorization","bearer "+localStorage.token);var e={method:"POST",headers:a,redirect:"follow"};fetch("https://young-temple-67589.herokuapp.com/api/vendor/"+this.$route.params.id,e).then((function(t){return t.json()})).then((function(a){1==t.checkImage("https://young-temple-67589.herokuapp.com/"+t.vendor.foto)?t.image=1:t.image=0,t.vendor=a})).catch((function(a){if(401!=a.response.status)return t.label="Update Barang",console.log(a),t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1;t.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),t.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(a){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1}))}))},checkImage:function(t){var a=this,e=new Image;e.onload=function(){return console.log("ada"),a.image=1,!0},e.onerror=function(){return console.log("tidak ada"),!1},e.src=t}},created:function(){this.getData()}},s=r,i=e("2877"),l=Object(i["a"])(s,n,o,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20f15b.edf278b1.js.map