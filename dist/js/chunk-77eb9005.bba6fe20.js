(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77eb9005"],{"4fdc":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("CCard",[e("CCardHeader",[e("b",[t._v("Detail")]),t._v(" Order Barang ")]),e("CCardBody",[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{staticClass:"mt-4",attrs:{sm:"8"}},[e("table",{staticClass:"table table-bordered table-striped"},[e("tr",[e("th",{staticClass:"w-50"},[t._v("Kode Barang")]),e("td",[t._v(t._s(t.order_barang.kode_barang))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Nama Barang")]),e("td",[t._v(t._s(t.order_barang.nama_barang))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Nama Vendor")]),e("td",[t._v(t._s(t.order_barang.nama_vendor))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Spesifikasi")]),e("td",[t._v(t._s(t.order_barang.spesifikasi))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Harga Jual")]),e("td",[t._v(t._s(t.order_barang.harga_jual))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Satuan")]),e("td",[t._v(t._s(t.order_barang.satuan))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Keterangan")]),e("td",[t._v(t._s(t.order_barang.keterangan))])])])])],1)],1)],1)],1)},r=[],o=e("8e44"),i={name:"DetailOrderBarangPesanan",data:function(){return{order_barang:{}}},created:function(){var t=this;1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),Object(o["f"])(this,localStorage.base_api+"order/barang/po/"+this.$route.params.id,{method:"post",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(n){Object(o["f"])(t,"https://young-temple-67589.herokuapp.com/api/barang/"+n.id_barang,{method:"post",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(n){t.order_barang=n,console.warn("WARN"),console.log(t.order_barang)})).catch((function(t){return console.error(t)}))})).catch((function(t){return console.error(t)}))}},c=i,s=e("2877"),u=Object(s["a"])(c,a,r,!1,null,null,null);n["default"]=u.exports},"8e44":function(t,n,e){"use strict";function a(t,n,e,a,r){return new Promise((function(o,i){t.$http.post(n,e,a).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=n,e.setAttribute("download",r),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){i(t)}))}))}function r(t,n,e,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,i){"get"==r?t.$http.get(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){i(t)})):t.$http.post(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){i(t)}))}))}function o(t){return new Promise((function(n,e){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var n=[],e=[],a=0;a<t.data.length;a++){var r=new Date(t.data[a].date_line),o=new Date(r.setDate(r.getDate()-2));n.push({date:o,data:t.data[a],link:"/po/"+t.data[a].id})}for(var i=0;i<n.length;i++){var c=new Date,s=new Date(n[i].date);c==s&&e.push({date:n[i].date,data:n[i]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return n(t)})).catch((function(t){return e(t)}))}))}function i(t,n){return new Promise((function(e,a){var r=-1;Promise.all(t.map((function(t){return r++,fetch(t,n[r])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return a(t)}))}))}function c(t,n,e,a){return new Promise((function(a,r){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return r(t)}))}))}function s(t,n,e){return new Promise((function(a,r){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return r(t)}))}))}e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"f",(function(){return c})),e.d(n,"b",(function(){return s}))}}]);
//# sourceMappingURL=chunk-77eb9005.bba6fe20.js.map