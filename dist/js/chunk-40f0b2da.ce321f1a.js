(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40f0b2da"],{"46c3":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CCard",[e("CCardHeader",[e("p",[e("b",[t._v("Detail")]),t._v(" Karyawan")])]),e("CCardBody",[e("CForm",{staticClass:"mt-4"},[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{attrs:{sm:"12"}},[t.uri+t.karyawan.foto?e("div",{staticClass:"mx-auto d-flex justify-content-center"},[e("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:t.karyawan.foto}})]):e("div",{staticClass:"mx-auto d-flex justify-content-center"},[e("img",{staticClass:"img-thumbnail",staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:n("9089")}})])])],1),e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{staticClass:"mt-4",attrs:{sm:"6"}},[e("table",{staticClass:"table table-bordered mt-4"},[e("tr",[e("th",{attrs:{width:"50%"}},[t._v("No Karyawan")]),e("td",[t._v(t._s(null==t.karyawan.no_karyawan?"Belum ada":t.karyawan.no_karyawan))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("Nama Karyawan")]),e("td",[t._v(t._s(null==t.karyawan.nama_karyawan?"Belum ada":t.karyawan.nama_karyawan))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("Email")]),e("td",[t._v(t._s(null==t.karyawan.email?"Belum ada":t.karyawan.email))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("No Hp/WA")]),e("td",[t._v(t._s(null==t.karyawan.whatsapp?"Belum ada":t.karyawan.whatsapp))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("Jenis Kelamin")]),e("td",[t._v(t._s(null==t.karyawan.jk?"Belum ada":1==t.karyawan.jk?"Laki-laki":"Perempuan"))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("KTP")]),e("td",[t._v(t._s(null==t.karyawan.ktp?"Belum ada":t.karyawan.ktp))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("No Rekening")]),e("td",[t._v(t._s(null==t.karyawan.no_rekening?"Belum ada":t.karyawan.no_rekening))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("NPWP")]),e("td",[t._v(t._s(null==t.karyawan.npwp?"Belum ada":t.karyawan.npwp))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("Alamat Karyawan")]),e("td",[t._v(t._s(null==t.karyawan.alamat?"Belum ada":t.karyawan.alamat))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("Tanggal Masuk Kerja")]),e("td",[t._v(t._s(null==t.karyawan.tgl_masuk_kerja?"Belum ada":t.karyawan.tgl_masuk_kerja))])]),e("tr",[e("th",{attrs:{width:"50%"}},[t._v("Jabatan")]),e("td",[t._v(" "+t._s(null==t.karyawan.nama_jabatan?"Belum ada":t.karyawan.nama_jabatan)+" ")])])])])],1)],1)],1)],1)],1)},r=[],o=n("8e44"),i={name:"DetailKaryawan",data:function(){return{uri:localStorage.base_uri,image:0,karyawan:{id:0,no_karyawan:null,nama_karyawan:null,foto:null,ktp:null,email:null,wa_hp:null,alamat:null,tgl_masuk_kerja:null,npwp:null,no_rekening:null,nama_jabatan:null}}},methods:{getData:function(){var t=this,a=new Headers;a.append("Authorization","bearer "+localStorage.token);var n={method:"POST",headers:a,redirect:"follow"};Object(o["g"])(this,localStorage.base_api+"karyawan/"+this.$route.params.id,n).then((function(a){console.log(a),t.karyawan=a,t.karyawan.foto=localStorage.base_uri+a.foto})).catch((function(a){return t.$swal("Tidak bisa mengambil data!","Mohon hubungi pengembangnya","error"),setTimeout((function(){return t.$swal.close()})),console.error(a),!1}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&7!=localStorage.level&&3!=localStorage.level&&this.$router.push("/"),this.getData()}},u=i,l=n("2877"),s=Object(l["a"])(u,e,r,!1,null,null,null);a["default"]=s.exports},"8e44":function(t,a,n){"use strict";function e(t,a,n,e,r){return new Promise((function(o,i){t.$http.post(a,n,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=a,n.setAttribute("download",r),document.body.appendChild(n),n.click()})).then((function(){o()})).catch((function(t){i(t)}))}))}function r(){var t;return t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),t}function o(t,a,n){return new Promise((function(e,o){var i=r();i.responseType="json","withCredentials"in i?i.open("POST",t,!0):"undefined"!=typeof XDomainRequest?(i=new XDomainRequest,i.open("POST",t)):i=null,i||o(),i.setRequestHeader("Authorization","bearer "+localStorage.token),i.onload=function(){var t=URL.createObjectURL(new Blob([i.response],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.href=t,a.setAttribute("download",n),document.body.appendChild(a),a.click(),e()},i.onerror=function(){o()},i.send(a)}))}function i(t,a,n,e){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,i){"get"==r?t.$http.get(a,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=a,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){o()})).catch((function(t){i(t)})):t.$http.post(a,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=a,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){o()})).catch((function(t){i(t)}))}))}function u(t){return new Promise((function(a,n){t.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var a=[],n=[],e=0;e<t.data.length;e++){var r=new Date(t.data[e].date_line),o=new Date(r.setDate(r.getDate()-2));a.push({date:o,data:t.data[e],link:"po/detail/"+t.data[e].id})}for(var i=0;i<a.length;i++){var u=new Date,l=new Date(a[i].date);u==l&&n.push({date:a[i].date,data:a[i]})}return localStorage.setItem("notif",JSON.stringify(a)),a})).then((function(t){return a(t)})).catch((function(t){return n(t)}))}))}function l(t,a){return new Promise((function(n,e){var r=-1;Promise.all(t.map((function(t){return r++,fetch(t,a[r])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return e(t)}))}))}function s(t,a,n,e){return new Promise((function(e,r){fetch(a,n).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return e(t)})).catch((function(t){return r(t)}))}))}function c(t,a,n){return new Promise((function(e,r){fetch(a,n).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return e(t)})).catch((function(t){return r(t)}))}))}n.d(a,"c",(function(){return e})),n.d(a,"d",(function(){return o})),n.d(a,"e",(function(){return i})),n.d(a,"a",(function(){return u})),n.d(a,"f",(function(){return l})),n.d(a,"g",(function(){return s})),n.d(a,"b",(function(){return c}))},9089:function(t,a,n){t.exports=n.p+"img/default.c568ee33.svg"}}]);
//# sourceMappingURL=chunk-40f0b2da.ce321f1a.js.map