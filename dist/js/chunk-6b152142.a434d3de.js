(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b152142"],{"188c":function(t,n,e){"use strict";n["a"]={methods:{toRupiah:function(t){var n=t.toString().replace(/[^, \d]/g,"").toString(),e=n.split(","),a=e[0].length%3,i=e[0].substr(0,a),o=e[0].substr(a).match(/\d{3}/gi),r="";return o&&null!=o.length&&(r=a?".":"",i+=r+o.join(".")),i=void 0!=e[1]?i+","+e[1]:i,i},toFloatRupiah:function(t){t=t.split(".");for(var n=0;n<t.length;n++)t[n].includes(",")&&(t[n]=t[n].replace(/,/g,"."));return t.join("")}}}},"31ea":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("CCard",[a("CCardHeader",[a("b",[t._v("Detail")]),t._v(" Kwitansi ")]),a("CCardBody",[a("CRow",{staticClass:"max-auto d-flex justify-content-center mb-4 mt-4"},[a("CCol",{attrs:{sm:"12"}},[t.kwitansi.foto?a("div",{staticClass:"mx-auto d-flex justify-content-center"},[a("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:t.kwitansi.foto}})]):a("div",{staticClass:"mx-auto d-flex justify-content-center"},[a("img",{staticClass:"img-thumbnail",staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:e("9089")}})])])],1),a("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[a("CCol",{attrs:{sm:"12",md:"8"}},[a("table",{staticClass:"table table-bordered mt-4"},[a("tr",[a("th",{staticClass:"w-50"},[t._v("Diterima dari")]),a("td",[t._v(t._s(t.kwitansi.terima_dari))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("Uang Terbuka")]),a("td",[t._v(t._s(t._f("formatRupiah")(t.kwitansi.uang)))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("Uang")]),a("td",[t._v(" "+t._s(t._f("formatRupiah")(t.kwitansi.uang))+" ")])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("Guna Pembayaran")]),a("td",[t._v(" "+t._s(t.kwitansi.guna_pembayaran)+" ")])])])])],1)],1)],1)],1)},i=[],o=e("188c"),r=e("8e44"),u={name:"DetailKwitansi",mixins:[o["a"]],data:function(){return{kwitansi:{no:null,terima_dari:null,uang_terbuka:null,uang:null,guna_pembayaran:null}}},filters:{formatRupiah:function(t){return this.toRupiah(t)}},methods:{getData:function(){var t=this,n=new Headers;n.append("Authorization","bearer "+localStorage.token);var e={method:"POST",headers:n,redirect:"follow"};Object(r["f"])(this,"https://young-temple-67589.herokuapp.com/api/Kwitansi/"+this.$route.params.id,e).then((function(n){t.kwitansi=n})).catch((function(n){if(401!=n.response.status)return console.log(n),t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1;t.$store.dispatch("logout").then((function(){var n=window.location.href;n=n.split("/"),localStorage.setItem("prevPath",n[n.length-1]),t.$swal("Sesi login kamu sudah habis","login kagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(n){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1}))}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&3!=localStorage.level&&this.$router.push("/"),this.getData()}},s=u,c=e("2877"),l=Object(c["a"])(s,a,i,!1,null,null,null);n["default"]=l.exports},"8e44":function(t,n,e){"use strict";function a(t,n,e,a,i){return new Promise((function(o,r){t.$http.post(n,e,a).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),e=document.createElement("a");e.href=n,e.setAttribute("download",i),document.body.appendChild(e),e.click()})).then((function(){o()})).catch((function(t){r(t)}))}))}function i(t,n,e,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return new Promise((function(r,u){"get"==i?t.$http.get(n,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){r()})).catch((function(t){u(t)})):t.$http.post(n,o,e).then((function(t){var n=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),e=document.createElement("a");e.href=n,e.setAttribute("download",a),document.body.appendChild(e),e.click()})).then((function(){r()})).catch((function(t){u(t)}))}))}function o(t){return new Promise((function(n,e){u(t,localStorage.base_api+"po",{method:"post",headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){for(var n=[],e=0;e<t.length;e++){var a=(new Date).setHours(0,0,0,0),i=new Date(t[e].date_line);a=new Date(a),i=new Date(i.setDate(i.getDate()-2)),a.getTime()==i.getTime()&&n.push({date:i,data:t[e],link:"po/detail/"+t[e].id})}return localStorage.setItem("notif",JSON.stringify(n)),n})).then((function(t){return n(t)})).catch((function(t){return e(t)}))}))}function r(t,n){return new Promise((function(e,a){var i=-1;Promise.all(t.map((function(t){return i++,fetch(t,n[i])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){e(t)})).catch((function(t){return a(t)}))}))}function u(t,n,e,a){return new Promise((function(a,i){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return i(t)}))}))}function s(t,n,e){return new Promise((function(a,i){fetch(n,e).then((function(n){return 401==n.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==n.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):n.json()})).then((function(t){return a(t)})).catch((function(t){return i(t)}))}))}e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return o})),e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return u})),e.d(n,"b",(function(){return s}))},9089:function(t,n,e){t.exports=e.p+"img/default.0dd67022.svg"}}]);
//# sourceMappingURL=chunk-6b152142.a434d3de.js.map