(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6655e1aa"],{"87f2":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CCard",[e("CCardHeader",[e("b",[t._v("Detail")]),t._v(" Barang ")]),e("CCardBody",[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{staticClass:"mt-4 d-flex justify-content-center",attrs:{sm:"12"}},[e("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:t.product.foto}})])],1),e("br"),e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{staticClass:"mt-4",attrs:{sm:"8"}},[e("table",{staticClass:"table table-bordered table-striped"},[e("tr",[e("th",{staticClass:"w-50"},[t._v("Kode Barang")]),e("td",[t._v(t._s(t.product.kode_barang))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Nama Barang")]),e("td",[t._v(t._s(t.product.nama_barang))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Nama Vendor")]),e("td",[t._v(" "+t._s(t.product.nama_vendor)+" ")])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Spesifikasi Barang")]),e("td",[t._v(t._s(t.product.spesifikasi))])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Harga Jual")]),e("td",[t._v(t._s(t.product.harga_jual))])]),1==t.data.level||2==t.data.level||5==t.data.level?e("tr",[e("th",{staticClass:"w-50"},[t._v("Harga Dasar")]),e("td",[t._v(" "+t._s(t.product.harga_dasar)+" ")])]):t._e(),e("tr",[e("th",{staticClass:"w-50"},[t._v("Satuan")]),e("td",[t._v(" "+t._s(t.product.satuan)+" ")])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Keterangan")]),e("td",[t._v(" "+t._s(t.product.keterangan)+" ")])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Tanggal Kadaluwarsa")]),e("td",[t._v(" "+t._s(t.product.exp)+" ")])]),e("tr",[e("th",{staticClass:"w-50"},[t._v("Stock")]),e("td",[t._v(" "+t._s(t.product.stock)+" ")])])])])],1)],1)],1)],1)},r=[],o=e("8e44"),s={name:"DetailListHarga",data:function(){return{data:"",product:[]}},methods:{getData:function(){var t=this,a=new Headers;a.append("Authorization","bearer "+localStorage.getItem("token")),a.append("Access-Control-Allow-Origin","*"),a.append("Access-Control-Allow-Methods","*"),a.append("Access-Control-Allow-Headers","*");var e={method:"POST",headers:a,redirect:"follow"};Object(o["f"])(this,localStorage.base_api+"barang/"+this.$route.params.id,e).then((function(a){console.log(a),t.product=a})).catch((function(t){return alert("Cannot get data!"),console.log(t),!1}))}},created:function(){3==localStorage.level&&this.$router.push("/"),this.getData(),this.data=JSON.parse(localStorage.user)}},c=s,i=e("2877"),u=Object(i["a"])(c,n,r,!1,null,null,null);a["default"]=u.exports},"8e44":function(t,a,e){"use strict";function n(t,a,e,n,r){return new Promise((function(o,s){t.$http.post(a,e,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=a,e.setAttribute("download",r),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){s(t)}))}))}function r(t,a,e,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,s){"get"==r?t.$http.get(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){s(t)})):t.$http.post(a,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=a,e.setAttribute("download",n),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){s(t)}))}))}function o(t){return new Promise((function(a,e){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var a=[],e=[],n=0;n<t.data.length;n++){var r=new Date(t.data[n].date_line),o=new Date(r.setDate(r.getDate()-2));a.push({date:o,data:t.data[n],link:"/po/"+t.data[n].id})}for(var s=0;s<a.length;s++){var c=new Date,i=new Date(a[s].date);c==i&&e.push({date:a[s].date,data:a[s]})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return a(t)})).catch((function(t){return e(t)}))}))}function s(t,a){return new Promise((function(e,n){var r=-1;Promise.all(t.map((function(t){return r++,fetch(t,a[r])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return n(t)}))}))}function c(t,a,e,n){return new Promise((function(n,r){fetch(a,e).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))}function i(t,a,e){return new Promise((function(n,r){fetch(a,e).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))}e.d(a,"c",(function(){return n})),e.d(a,"d",(function(){return r})),e.d(a,"a",(function(){return o})),e.d(a,"e",(function(){return s})),e.d(a,"f",(function(){return c})),e.d(a,"b",(function(){return i}))}}]);
//# sourceMappingURL=chunk-6655e1aa.2a0969bd.js.map