(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4a02136"],{"8e44":function(a,t,n){"use strict";function e(a,t,n,e,i){return new Promise((function(r,o){a.$http.post(t,n,e).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=t,n.setAttribute("download",i),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(a){o(a)}))}))}function i(a,t,n,e){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,o){"get"==i?a.$http.get(t,n).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),n=document.createElement("a");n.href=t,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(a){o(a)})):a.$http.post(t,n).then((function(a){var t=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),n=document.createElement("a");n.href=t,n.setAttribute("download",e),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(a){o(a)}))}))}function r(a){return new Promise((function(t,n){a.$http.get(localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var t=[],n=0;n<a.data.length;n++){var e=(new Date).setHours(0,0,0,0),i=new Date(a.data[n].date_line);e=new Date(e),i=new Date(i.setDate(i.getDate()-2)),e.getTime()==i.getTime()&&t.push({date:i,data:a.data[n],link:"po/detail/"+a.data[n].id})}return localStorage.setItem("notif",JSON.stringify(t)),t})).then((function(a){return t(a)})).catch((function(a){return n(a)}))}))}function o(a,t){return new Promise((function(n,e){var i=-1;Promise.all(a.map((function(a){return i++,fetch(a,t[i])}))).then((function(a){return Promise.all(a.map((function(a){return a.json()})))})).then((function(a){n(a)})).catch((function(a){return e(a)}))}))}function s(a,t,n,e){return new Promise((function(e,i){fetch(t,n).then((function(t){return 401==t.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==t.status?(a.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):t.json()})).then((function(a){return e(a)})).catch((function(a){return i(a)}))}))}function u(a,t,n){return new Promise((function(e,i){fetch(t,n).then((function(t){return 401==t.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==t.status?(a.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):t.json()})).then((function(a){return e(a)})).catch((function(a){return i(a)}))}))}n.d(t,"c",(function(){return e})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u}))},e457:function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[a._v("Tambah")]),a._v(" Kwitansi")])]),n("CCardBody",[n("CForm",{staticClass:"mt-4"},[n("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[n("CCol",{attrs:{sm:"8"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[n("small",[a._v("Penambahan Kwitansi berhasil!")])]),a.errors.length>0?n("div",a._l(a.errors,(function(t){return n("p",{staticClass:"alert alert-danger"},[n("small",[a._v(a._s(t))])])})),0):a._e(),n("CSelect",{attrs:{label:"Guna Pembayaran",horizontal:"",options:a.guna_pembayaran},on:{"update:value":a.assignGunaPembayaran},model:{value:a.kwitansi.guna_pembayaran,callback:function(t){a.$set(a.kwitansi,"guna_pembayaran",t)},expression:"kwitansi.guna_pembayaran"}}),n("CInput",{attrs:{type:"text",description:"Masukan Nomer Kwitansi",autocomplete:"no_kwitansi",label:"Nomer Kwitansi",horizontal:"",placeholder:"Masukan Nomer Kwitansi"},model:{value:a.kwitansi.no,callback:function(t){a.$set(a.kwitansi,"no",t)},expression:"kwitansi.no"}}),n("CInput",{attrs:{type:"text",description:"Masukan Nama Penerima",autocomplete:"terima_dari",label:"Nama Penerima",horizontal:"",placeholder:"Masukan Nama Penerima",readonly:""},model:{value:a.kwitansi.terima_dari,callback:function(t){a.$set(a.kwitansi,"terima_dari",t)},expression:"kwitansi.terima_dari"}}),n("CInput",{attrs:{type:"number",description:"Masukan Uang Terbilang",autocomplete:"uang_terbilang",label:"Uang Terbilang",horizontal:"",placeholder:"Masukan Uang Terbilang"},model:{value:a.kwitansi.uang,callback:function(t){a.$set(a.kwitansi,"uang",t)},expression:"kwitansi.uang"}})],1)],1)],1)],1),n("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[n("CButton",{attrs:{type:"submit",size:"md",color:"primary"},on:{click:function(t){return t.preventDefault(),a.addKwitansi(t)}}},[n("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},i=[],r=n("8e44"),o={name:"AddKwitansi",data:function(){return{label:"Tambah Kwitansi",kwitansi:{no:null,terima_dari:null,uang:null,guna_pembayaran:null},validMsg:!1,errors:[],guna_pembayaran:[],po:[]}},methods:{assignGunaPembayaran:function(a){var t=this;this.po.forEach((function(n){n.id==a&&(t.kwitansi.guna_pembayaran=n.id,t.kwitansi.no=n.no_invoice,t.kwitansi.terima_dari=n.konsumen)}))},addKwitansi:function(){var a=this;this.errors=[],this.kwitansi.no||this.errors.push("Nomer Kwitansi Wajib diisi"),this.kwitansi.terima_dari||this.errors.push("Nama penerima wajib diisi"),this.kwitansi.uang||this.errors.push("Uang Terbilang Wajib diisi"),this.kwitansi.guna_pembayaran&&"000"!=this.kwitansi.guna_pembayaran||(this.errors.push("Guan Pembayaran Wajib diisi"),this.$swal("Harap Pilih Guna Pembayaran","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.errors.length||(this.label="Loading...",this.$http.post(localStorage.base_api+"kwitansi",this.kwitansi,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){a.label="Tambah Kwitansi",a.$swal("Kwitansi berhasil ditambah","Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/kwitansi")}),1500)})).catch((function(t){return a.label="Tambah Kwitansi",a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),!1})))}},created:function(){var a=this;1!=localStorage.level&&2!=localStorage.level&&3!=localStorage.level&&this.$router.push("/"),Object(r["f"])(this,localStorage.base_api+"po",{headers:{Authorization:"bearer "+localStorage.token}},"get").then((function(t){a.po=t,a.guna_pembayaran.push({value:"000",label:"Pilih Guna Pembayaran"}),a.po.forEach((function(t,n){var e={};e.value=t.id,e.label=t.no,a.guna_pembayaran.push(e)}))})).catch((function(t){if(401!=t.response.status)return alert("There an error occured"),console.log(t),!1;a.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){a.$router.replace({path:"/login"})})).catch((function(a){return alert("An error occured when get data :("),console.errr("error add kwitansi"+a),!1}))}))}},s=o,u=n("2877"),l=Object(u["a"])(s,e,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-e4a02136.e7955517.js.map