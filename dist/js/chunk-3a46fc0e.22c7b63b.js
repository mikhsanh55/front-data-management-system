(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a46fc0e"],{"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(r,i){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function o(t,e,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return new Promise((function(i,u){"get"==o?t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){u(t)})):t.$http.post(e,r,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){u(t)}))}))}function r(t){return new Promise((function(e,n){u(t,localStorage.base_api+"po",{method:"post",headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){for(var e=[],n=0;n<t.length;n++){var a=(new Date).setHours(0,0,0,0),o=new Date(t[n].date_line);a=new Date(a),o=new Date(o.setDate(o.getDate()-2)),a.getTime()==o.getTime()&&e.push({date:o,data:t[n],link:"po/detail/"+t[n].id})}return localStorage.setItem("notif",JSON.stringify(e)),e})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}function i(t,e){return new Promise((function(n,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return a(t)}))}))}function u(t,e,n,a){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function s(t,e,n){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return s}))},c5f1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CCard",[n("CCardHeader",[n("b",[t._v("Detail")]),t._v(" Request Barang ")]),n("CCardBody",[n("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[n("CCol",{staticClass:"mt-4",attrs:{sm:"12",md:"8"}},[n("table",{staticClass:"table table-bordered table-striped"},[n("tr",[n("th",{staticClass:"w-50"},[t._v("Tanggal")]),n("td",[t._v(t._s(t.request_po.date))])]),n("tr",[n("th",{staticClass:"w-50"},[t._v("Quantity")]),n("td",[t._v(" "+t._s(t.request_po.qty)+" ")])]),n("tr",[n("th",{staticClass:"w-50"},[t._v("Keterangan")]),n("td",[t._v(t._s(t.request_po.keterangan))])]),n("tr",[n("th",{staticClass:"w-50"},[t._v("Status")]),1==t.request_po.status?n("td",[t._v("Request")]):2==t.request_po.status?n("td",[t._v("Proses")]):3==t.request_po.status?n("td",[t._v("Dikirim")]):4==t.request_po.status?n("td",[t._v("Sukses")]):5==t.request_po.status?n("td",[t._v("Batal")]):t._e()])])])],1)],1)],1)],1)},o=[],r=n("8e44"),i={name:"DetailRequestPO",data:function(){return{request_po:[]}},methods:{getData:function(){var t=this,e=new Headers;e.append("Authorization","bearer "+localStorage.token);var n={method:"POST",headers:e,redirect:"follow"};Object(r["f"])(this,localStorage.base_api+"request/barang/"+this.$route.params.id,n).then((function(e){t.request_po=e})).catch((function(t){return alert("Tidak bisa mengambil data, hubungi pengembangnya yah"),console.error(t),!1}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&6!=localStorage.level&&5!=localStorage.level&&this.$router.push("/"),this.getData()}},u=i,s=n("2877"),c=Object(s["a"])(u,a,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3a46fc0e.22c7b63b.js.map