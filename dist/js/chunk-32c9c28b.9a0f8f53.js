(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32c9c28b"],{"8e44":function(t,a,n){"use strict";function e(t,a,n,e,i){return new Promise((function(r,o){t.$http.post(a,n,e).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=a,n.setAttribute("download",i),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){o(t)}))}))}function i(t,a,n,e){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,o){"get"==i?t.$http.get(a,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=a,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){o(t)})):t.$http.post(a,n).then((function(t){var a=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=a,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){o(t)}))}))}function r(t){return new Promise((function(a,n){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var a=[],n=[],e=0;e<t.data.length;e++){var i=new Date(t.data[e].date_line),r=new Date(i.setDate(i.getDate()-2));a.push({date:r,data:t.data[e],link:"/po/"+t.data[e].id})}for(var o=0;o<a.length;o++){var s=new Date,u=new Date(a[o].date);s==u&&n.push({date:a[o].date,data:a[o]})}return localStorage.setItem("notif",JSON.stringify(n)),n})).then((function(t){return a(t)})).catch((function(t){return n(t)}))}))}function o(t,a){return new Promise((function(n,e){var i=-1;Promise.all(t.map((function(t){return i++,fetch(t,a[i])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return e(t)}))}))}function s(t,a,n,e){return new Promise((function(e,i){fetch(a,n).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return e(t)})).catch((function(t){return i(t)}))}))}function u(t,a,n){return new Promise((function(e,i){fetch(a,n).then((function(a){return 401==a.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==a.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):a.json()})).then((function(t){return e(t)})).catch((function(t){return i(t)}))}))}n.d(a,"c",(function(){return e})),n.d(a,"d",(function(){return i})),n.d(a,"a",(function(){return r})),n.d(a,"e",(function(){return o})),n.d(a,"f",(function(){return s})),n.d(a,"b",(function(){return u}))},"8ffc":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[t._v("Edit")]),t._v(" Kwitansi")])]),n("CCardBody",[n("CForm",{staticClass:"mt-4"},[n("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[n("CCol",{attrs:{sm:"8"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:1==t.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[n("small",[t._v("Perubahan Data Kwitansi berhasil!")])]),t.errors.length>0?n("div",t._l(t.errors,(function(a){return n("p",{staticClass:"alert alert-danger"},[n("small",[t._v(t._s(a))])])})),0):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.kwitansi.id,expression:"kwitansi.id"}],ref:"id",attrs:{type:"hidden",name:"id"},domProps:{value:t.kwitansi.id},on:{input:function(a){a.target.composing||t.$set(t.kwitansi,"id",a.target.value)}}}),n("CSelect",{attrs:{label:"Guna Pembayaran",horizontal:"",options:t.guna_pembayaran},on:{"update:value":t.assignGunaPembayaran},model:{value:t.kwitansi.guna_pembayaran,callback:function(a){t.$set(t.kwitansi,"guna_pembayaran",a)},expression:"kwitansi.guna_pembayaran"}}),n("CInput",{attrs:{type:"text",description:"Masukan Nomer Kwitansi",autocomplete:"no",label:"Nomer Kwitansi",horizontal:"",placeholder:"Masukan Nomer Kwitansi",readonly:""},model:{value:t.kwitansi.no,callback:function(a){t.$set(t.kwitansi,"no",a)},expression:"kwitansi.no"}}),n("CInput",{attrs:{type:"text",description:"Masukan Nama Penerima",autocomplete:"terima_dari",label:"Nama Penerima",horizontal:"",placeholder:"Masukan Nama Penerima",readonly:""},model:{value:t.kwitansi.terima_dari,callback:function(a){t.$set(t.kwitansi,"terima_dari",a)},expression:"kwitansi.terima_dari"}}),n("CInput",{attrs:{type:"number",description:"Masukan Uang Terbilang",autocomplete:"uang",label:"Uang Terbilang",horizontal:"",placeholder:"Masukan Uang Terbilang"},model:{value:t.kwitansi.uang,callback:function(a){t.$set(t.kwitansi,"uang",a)},expression:"kwitansi.uang"}})],1)],1)],1)],1),n("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[n("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(a){return a.preventDefault(),t.updateKwitansi(a)}}},[n("i",{staticClass:"fa fa-edit mr-2"}),t._v(t._s(t.label)+" ")])],1)],1)],1)},i=[],r=n("8e44"),o={name:"EditKwitansi",data:function(){return{label:"Simpan Perubahan",kwitansi:{no:null,terima_dari:null,uang:null,guna_pembayaran:null},validMsg:!1,errors:[],guna_pembayaran:[],po:[]}},methods:{assignGunaPembayaran:function(t){var a=this;this.po.forEach((function(n){if(n.id==t)return a.kwitansi.guna_pembayaran=n.no,a.kwitansi.no=n.no_invoice,void(a.kwitansi.terima_dari=n.konsumen)}))},getData:function(){var t=this,a=new Headers;a.append("Authorization","bearer "+localStorage.getItem("token"));var n={method:"POST",headers:a,redirect:"follow"};Object(r["f"])(this,localStorage.base_api+"kwitansi/"+this.$route.params.id,n).then((function(a){console.log(a),t.kwitansi=a})).catch((function(a){return t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500),!1}))},updateKwitansi:function(){var t=this;this.errors=[],this.kwitansi.no||this.errors.push("Nomer Kwitansi Wajib diisi"),this.kwitansi.terima_dari||this.errors.push("Nama penerima wajib diisi"),this.kwitansi.uang||this.errors.push("Uang Terbilang Wajib diisi"),this.kwitansi.guna_pembayaran||this.errors.push("Guan Pembayaran Wajib diisi"),this.errors.length||(this.label="Loading...",this.$http.post(localStorage.base_api+"kwitansi/edit/"+this.$route.params.id,this.kwitansi,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(a){t.label="Simpan Perubahan",t.$swal("Perubahan berhasil disimpan","Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push("/kwitansi")}),1500)})).catch((function(a){return t.label="Simpan Perubahan",t.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1})))}},created:function(){var t=this;Object(r["f"])(this,"https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}},"get").then((function(a){console.log(a),t.po=a,a.forEach((function(a,n){var e={};e.value=a.id,e.label=a.no,t.guna_pembayaran.push(e)})),t.getData()})).catch((function(a){if(401!=a.response.status)return alert("There an error occured"),console.log(a.response),!1;t.$store.dispatch("logout").then((function(){var t=window.location.href;t=t.split("/"),localStorage.setItem("prevPath",t[t.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){t.$router.replace({path:"/login"})})).catch((function(t){return alert("An error occured when get data :("),!1}))}))}},s=o,u=n("2877"),l=Object(u["a"])(s,e,i,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-32c9c28b.9a0f8f53.js.map