(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665685d4"],{"87f2":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CCard",[e("CCardHeader",[e("b",[t._v("Detail")]),t._v(" Barang ")]),e("CCardBody",[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{staticClass:"mt-4",attrs:{sm:"12"}},[t.product.foto?e("div",{staticClass:"mx-auto d-flex justify-content-center"},[e("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:t.product.foto}})]):e("div",{staticClass:"mx-auto d-flex justify-content-center"},[e("img",{staticClass:"img-thumbnail",staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:s("9089")}})])])],1),e("br"),e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{staticClass:"mt-4",attrs:{sm:"8"}},[e("table",{staticClass:"table table-bordered table-striped"},[e("tr",[e("th",{staticClass:"w-50"},[t._v("Kode Barang")]),e("td",[t._v(t._s(t.product.kode_barang))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Nama Barang")]),e("td",[t._v(t._s(t.product.nama_barang))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Nama Vendor")]),e("td",[t._v(" "+t._s(t.product.nama_vendor)+" ")])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Spesifikasi Barang")]),e("td",[t._v(t._s(t.product.spesifikasi))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Harga Jual")]),e("td",[t._v(t._s(t.product.harga_jual))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Harga Dasar")]),e("td",[t._v(" "+t._s(t.product.harga_dasar)+" ")])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Satuan")]),e("td",[t._v(" "+t._s(t.product.satuan)+" ")])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Keterangan")]),e("td",[t._v(" "+t._s(t.product.keterangan)+" ")])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Tanggal Kadaluwarsa")]),e("td",[t._v(" "+t._s(t.product.exp)+" ")])])])])],1)],1)],1)],1)},r=[],o={name:"DetailListHarga",data:function(){return{product:[]}},methods:{getData:function(){var t=this,a=new Headers;a.append("Authorization","bearer "+localStorage.getItem("token")),a.append("Access-Control-Allow-Origin","*"),a.append("Access-Control-Allow-Methods","*"),a.append("Access-Control-Allow-Headers","*");var s={method:"POST",headers:a,redirect:"follow"};fetch("https://young-temple-67589.herokuapp.com/api/barang/"+this.$route.params.id,s).then((function(t){return t.json()})).then((function(a){console.log(a),t.product=a})).catch((function(t){return alert("Cannot get data!"),console.log(t),!1}))}},filters:{},created:function(){this.getData()}},n=o,c=s("2877"),i=Object(c["a"])(n,e,r,!1,null,null,null);a["default"]=i.exports},9089:function(t,a,s){t.exports=s.p+"img/default.c568ee33.svg"}}]);
//# sourceMappingURL=chunk-665685d4.a0c94d7e.js.map