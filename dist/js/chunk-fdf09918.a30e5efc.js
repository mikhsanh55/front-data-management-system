(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdf09918"],{"352c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CCard",[a("CCardHeader",[a("b",[t._v("Detail")]),t._v(" User ")]),a("CCardBody",[a("CRow",{staticClass:"max-auto d-flex justify-content-center mb-4 mt-4"},[a("CCol",{attrs:{sm:"12"}},[t.user.foto?a("div",{staticClass:"mx-auto d-flex justify-content-center"},[a("img",{staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:t.user.foto}})]):a("div",{staticClass:"mx-auto d-flex justify-content-center"},[a("img",{staticClass:"img-thumbnail",staticStyle:{"border-radius":"50%",width:"70px",height:"70px"},attrs:{src:n("9089")}})])])],1),a("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[a("CCol",{attrs:{sm:"8"}},[a("table",{staticClass:"table table-bordered mt-4"},[a("tr",[a("th",{staticClass:"w-50"},[t._v("Nama")]),a("td",[t._v(t._s(t.user.nama))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("Email")]),a("td",[t._v(t._s(t.user.email))])]),a("tr",[a("th",{staticClass:"w-50"},[t._v("Level")]),a("td",[t._v(" "+t._s(t.user.nama_level)+" ")])])])])],1)],1)],1)],1)},o=[],i=n("8e44"),r={name:"DetailUser",data:function(){return{user:{id:0,nama:null,email:null,nama_level:null,foto:null}}},methods:{getData:function(){var t=this,e=new Headers;e.append("Authorization","bearer "+localStorage.token);var n={method:"POST",headers:e,redirect:"follow"};Object(i["f"])(this,localStorage.base_api+"user/"+this.$route.params.id,n).then((function(e){t.user=e})).catch((function(e){if(401!=e.response.status)return t.label="Update Barang",t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500),!1;t.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),t.$swal("Sesi login kamu sudah habis","login kagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(e){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500),!1}))}))},checkImage:function(t){var e=this,n=new Image;n.onload=function(){return console.log("ada"),e.image=1,!0},n.onerror=function(){return console.log("tidak ada"),!1},n.src=t}},created:function(){this.getData()}},u=r,c=n("2877"),s=Object(c["a"])(u,a,o,!1,null,null,null);e["default"]=s.exports},"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(i,r){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function o(t,e,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,r){"get"==o?t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)})):t.$http.post(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){i()})).catch((function(t){r(t)}))}))}function i(t){return new Promise((function(e,n){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],n=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),i=new Date(o.setDate(o.getDate()-2));e.push({date:i,data:t.data[a],link:"/po/"+t.data[a].id})}for(var r=0;r<e.length;r++){var u=new Date,c=new Date(e[r].date);u==c&&n.push({date:e[r].date,data:e[r]})}return localStorage.setItem("notif",JSON.stringify(n)),n})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}function r(t,e){return new Promise((function(n,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return a(t)}))}))}function u(t,e,n,a){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function c(t,e,n){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return c}))},9089:function(t,e,n){t.exports=n.p+"img/default.0dd67022.svg"}}]);
//# sourceMappingURL=chunk-fdf09918.a30e5efc.js.map