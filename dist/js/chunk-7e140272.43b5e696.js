(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e140272"],{"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(i,s){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){s(t)}))}))}function o(t,e,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,s){"get"==o?t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){s(t)})):t.$http.post(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){s(t)}))}))}function i(t){return new Promise((function(e,n){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],n=0;n<t.data.length;n++){var a=(new Date).setHours(0,0,0,0),o=new Date(t.data[n].date_line);a=new Date(a),o=new Date(o.setDate(o.getDate()-2)),a.getTime()==o.getTime()&&e.push({date:o,data:t.data[n],link:"po/detail/"+t.data[n].id})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}function s(t,e){return new Promise((function(n,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return a(t)}))}))}function r(t,e,n,a){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function l(t,e,n){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return l}))},9089:function(t,e,n){t.exports=n.p+"img/default.c568ee33.svg"},b1df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CCard",[a("CCardHeader",[a("b",[t._v("Detail")]),t._v(" Sales ")]),a("CCardBody",[a("CRow",{staticClass:"max-auto d-flex justify-content-center mb-4 mt-4"},[a("CCol",{attrs:{sm:"12"}},[t.sales.foto?a("div",{staticClass:"mx-auto d-flex justify-content-center"},[a("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:t.sales.foto}})]):a("div",{staticClass:"mx-auto d-flex justify-content-center"},[a("img",{staticClass:"img-thumbnail",staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:n("9089")}})])])],1),a("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[a("CCol",{attrs:{sm:"8"}},[a("table",{staticClass:"table table-bordered mt-4"},[a("tr",[a("th",{staticClass:"w-50"},[t._v("Nama")]),a("td",[t._v(t._s(t.sales.nama_karyawan))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("Jenis Kelamin")]),1==t.sales.jk?a("td",[t._v("Laki - laki")]):a("td",[t._v("Perempuan")])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("Email")]),a("td",[t._v(t._s(t.sales.email))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("No HP / WA")]),a("td",[t._v(t._s(t.sales.wa_hp))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("No KTP")]),a("td",[t._v(t._s(t.sales.ktp))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("No NPWP")]),a("td",[t._v(t._s(t.sales.npwp))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("No Rekening")]),a("td",[t._v(t._s(t.sales.no_rekening))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("Tanggal Masuk Kerja")]),a("td",[t._v(t._s(t.sales.nama_jabatan))])])])])],1)],1)],1)],1)},o=[],i=n("8e44"),s={name:"DetailSales",data:function(){return{sales:{id:0,no_karyawan:null,nama_karyawan:null,foto:null,ktp:null,email:null,wa_hp:null,alamat:null,tgl_masuk_kerja:null,npwp:null,no_rekening:null,nama_jabatan:null}}},methods:{getData:function(){var t=this,e=new Headers;e.append("Authorization","bearer "+localStorage.token);var n={method:"POST",headers:e,redirect:"follow"};Object(i["f"])(this,localStorage.base_api+"karyawan/"+this.$route.params.id,n).then((function(e){t.sales=e})).catch((function(e){if(401!=e.response.status)return console.log(e),t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500),!1;t.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),t.$swal("Sesi login kamu sudah habis","login kagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(e){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500),!1}))}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&this.$router.push("/"),this.getData()}},r=s,l=n("2877"),u=Object(l["a"])(r,a,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e140272.43b5e696.js.map