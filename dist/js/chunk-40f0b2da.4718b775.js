(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40f0b2da"],{"46c3":function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("CCard",[e("CCardHeader",[e("p",[e("b",[a._v("Detail")]),a._v(" Karyawan")])]),e("CCardBody",[e("CForm",{staticClass:"mt-4"},[e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{attrs:{sm:"12"}},[a.uri+a.karyawan.foto?e("div",{staticClass:"mx-auto d-flex justify-content-center"},[e("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:a.karyawan.foto}})]):e("div",{staticClass:"mx-auto d-flex justify-content-center"},[e("img",{staticClass:"img-thumbnail",staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:n("9089")}})])])],1),e("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[e("CCol",{staticClass:"mt-4",attrs:{sm:"6"}},[e("table",{staticClass:"table table-bordered mt-4"},[e("tr",[e("th",{attrs:{width:"50%"}},[a._v("No Karyawan")]),e("td",[a._v(a._s(null==a.karyawan.no_karyawan?"Belum ada":a.karyawan.no_karyawan))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("Nama Karyawan")]),e("td",[a._v(a._s(null==a.karyawan.nama_karyawan?"Belum ada":a.karyawan.nama_karyawan))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("Email")]),e("td",[a._v(a._s(null==a.karyawan.email?"Belum ada":a.karyawan.email))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("No Hp/WA")]),e("td",[a._v(a._s(null==a.karyawan.wa_hp?"Belum ada":a.karyawan.wa_hp))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("Jenis Kelamin")]),e("td",[a._v(a._s(null==a.karyawan.jk?"Belum ada":1==a.karyawan.jk?"Laki-laki":"Perempuan"))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("KTP")]),e("td",[a._v(a._s(null==a.karyawan.ktp?"Belum ada":a.karyawan.ktp))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("No Rekening")]),e("td",[a._v(a._s(null==a.karyawan.no_rekening?"Belum ada":a.karyawan.no_rekening))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("NPWP")]),e("td",[a._v(a._s(null==a.karyawan.npwp?"Belum ada":a.karyawan.npwp))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("Alamat Karyawan")]),e("td",[a._v(a._s(null==a.karyawan.alamat?"Belum ada":a.karyawan.alamat))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("Tanggal Masuk Kerja")]),e("td",[a._v(a._s(null==a.karyawan.tgl_masuk_kerja?"Belum ada":a.karyawan.tgl_masuk_kerja))])]),e("tr",[e("th",{attrs:{width:"50%"}},[a._v("Jabatan")]),e("td",[a._v(" "+a._s(null==a.karyawan.nama_jabatan?"Belum ada":a.karyawan.nama_jabatan)+" ")])])])])],1)],1)],1)],1)],1)},r=[],o=n("8e44"),i={name:"DetailKaryawan",data:function(){return{uri:localStorage.base_uri,image:0,karyawan:{id:0,no_karyawan:null,nama_karyawan:null,foto:null,ktp:null,email:null,wa_hp:null,alamat:null,tgl_masuk_kerja:null,npwp:null,no_rekening:null,nama_jabatan:null}}},methods:{getData:function(){var a=this,t=new Headers;t.append("Authorization","bearer "+localStorage.token);var n={method:"POST",headers:t,redirect:"follow"};Object(o["f"])(this,localStorage.base_api+"karyawan/"+this.$route.params.id,n).then((function(t){a.karyawan=t,a.karyawan.foto=localStorage.base_uri+t.foto})).catch((function(t){return a.$swal("Tidak bisa mengambil data!","Mohon hubungi pengembangnya","error"),setTimeout((function(){return a.$swal.close()})),console.error(t),!1}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&7!=localStorage.level&&3!=localStorage.level&&this.$router.push("/"),this.getData()}},l=i,u=n("2877"),s=Object(u["a"])(l,e,r,!1,null,null,null);t["default"]=s.exports},"8e44":function(a,t,n){"use strict";function e(a,t,n,e,r){return new Promise((function(o,i){a.$http.post(t,n,e).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=t,n.setAttribute("download",r),document.body.appendChild(n),n.click()})).then((function(){o()})).catch((function(a){i(a)}))}))}function r(a,t,n,e){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(o,i){"get"==r?a.$http.get(t,n).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),n=document.createElement("a");n.href=t,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){o()})).catch((function(a){i(a)})):a.$http.post(t,n).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),n=document.createElement("a");n.href=t,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){o()})).catch((function(a){i(a)}))}))}function o(a){return new Promise((function(t,n){a.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var t=[],n=[],e=0;e<a.data.length;e++){var r=new Date(a.data[e].date_line),o=new Date(r.setDate(r.getDate()-2));t.push({date:o,data:a.data[e],link:"po/detail/"+a.data[e].id})}for(var i=0;i<t.length;i++){var l=(new Date).setHours(0,0,0,0),u=new Date(t[i].date).setHours(0,0,0,0);l=new Date(l),u=new Date(u),console.log("Current Date "+l),console.log("Notif Date "+u),l.getTime()==u.getTime()&&(console.warn("sama cuy"),console.log(u),n.push({date:u,data:t[i],link:"po/detail/"+t[i].id}))}return localStorage.setItem("notif",JSON.stringify(n)),n})).then((function(a){return t(a)})).catch((function(a){return n(a)}))}))}function i(a,t){return new Promise((function(n,e){var r=-1;Promise.all(a.map((function(a){return r++,fetch(a,t[r])}))).then((function(a){return Promise.all(a.map((function(a){return a.json()})))})).then((function(a){n(a)})).catch((function(a){return e(a)}))}))}function l(a,t,n,e){return new Promise((function(e,r){fetch(t,n).then((function(t){return 401==t.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==t.status?(a.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):t.json()})).then((function(a){return e(a)})).catch((function(a){return r(a)}))}))}function u(a,t,n){return new Promise((function(e,r){fetch(t,n).then((function(t){return 401==t.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==t.status?(a.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):t.json()})).then((function(a){return e(a)})).catch((function(a){return r(a)}))}))}n.d(t,"c",(function(){return e})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u}))},9089:function(a,t,n){a.exports=n.p+"img/default.0dd67022.svg"}}]);
//# sourceMappingURL=chunk-40f0b2da.4718b775.js.map