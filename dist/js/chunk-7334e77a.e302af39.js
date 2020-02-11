(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7334e77a"],{8532:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CCard",[a("CCardHeader",[a("b",[t._v("Edit")]),t._v(" Request Barang ")]),a("CCardBody",[a("CForm",{staticClass:"mt-4"},[a("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[a("CCol",{attrs:{sm:"8"}},[a("CSelect",{attrs:{label:"Barang",horizontal:"",options:t.barang},on:{"update:value":t.assignBarang},model:{value:t.request_po.id_barang,callback:function(e){t.$set(t.request_po,"id_barang",e)},expression:"request_po.id_barang"}}),a("CInput",{attrs:{type:"date",label:"Tanggal",horizontal:"",description:t.validator.date_msg,"is-valid":t.validator.date},model:{value:t.request_po.date,callback:function(e){t.$set(t.request_po,"date",e)},expression:"request_po.date"}}),a("CInput",{attrs:{type:"number",label:"Quantity",horizontal:"",description:t.validator.qty_msg,"is-valid":t.validator.qty},model:{value:t.request_po.qty,callback:function(e){t.$set(t.request_po,"qty",e)},expression:"request_po.qty"}}),a("CTextarea",{attrs:{label:"Keterangan",description:t.validator.keterangan_msg,"is-valid":t.validator.keterangan,horizontal:"",rows:"3"},model:{value:t.request_po.keterangan,callback:function(e){t.$set(t.request_po,"keterangan",e)},expression:"request_po.keterangan"}}),a("CSelect",{attrs:{label:"Status",horizontal:"",options:t.status},on:{"update:value":t.assignStatus},model:{value:t.request_po.status,callback:function(e){t.$set(t.request_po,"status",e)},expression:"request_po.status"}})],1)],1)],1)],1),a("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[a("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(e){return e.preventDefault(),t.updateRequestPO(e)}}},[a("i",{staticClass:"fa fa-edit mr-2"}),t._v(t._s(t.label)+" ")])],1)],1)],1)},o=[],r=a("8e44"),s={name:"EditRequestPO",data:function(){return{statusselected:4,barang:[],status:[{value:1,label:"Request"},{value:2,label:"Proses"},{value:3,label:"Dikirim"},{value:4,label:"Selesai"},{value:5,label:"Batal"}],errors:[],label:"Simpan Perubahan",validator:{date:null,qty:null,keterangan:null,date_msg:null,qty_msg:null,keterangan_msg:null},request_po:{id_barang:null,date:null,qty:null,keterangan:null,status:null}}},methods:{getData:function(){var t=this,e=new Headers;e.append("Authorization","bearer "+localStorage.token);var a={method:"POST",headers:e,redirect:"follow"};Object(r["f"])(localStorage.base_api+"request/barang/detail/"+this.$route.params.id,a).then((function(e){console.log(e),t.request_po=e})).catch((function(e){return t.$swal("Mohon maaf tidak bisa meng-update data","Mohon hubungi pengembang...","error"),setTimeout((function(){return t.$swal.close(),!1})),console.error(e),!1}))},assignStatus:function(t){this.request_po.status=t,console.log(this.request_po.status)},assignBarang:function(t){this.request_po.id_barang=t},updateRequestPO:function(){var t=this;if(this.label="Loading...",this.errors=[],this.request_po.date||(this.validator.date=!1,this.validator.date_msg="Harap isi tanggal",this.errors.push("date karyawan kosong")),this.request_po.qty||(this.validator.qty=!1,this.validator.qty_msg="Harap isi kuantitas barang",this.errors.push("qty karyawan kosong")),this.request_po.keterangan||(this.validator.keterangan=!1,this.validator.keterangan_msg="Harap isi keterangan",this.errors.push("keterangan karyawan kosong")),this.errors.length)return this.label="Simpan Perubahan",console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.$http.post(localStorage.base_api+"request/barang/edit/"+this.$route.params.id,this.request_po,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(e){t.label="Simpan Perubahan",console.log(e),t.$swal("Update data berhasil","Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push("/data-request-barang")}))})).catch((function(e){t.$swal("Mohon maaf tidak bisa meng-update data","Mohon hubungi pengembang...","error"),setTimeout((function(){return t.$swal.close(),!1}))}))}},created:function(){var t=this;this.$http.get(localStorage.base_api+"barang",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(e){for(var a=0;a<e.data.length;a++){var n={};n.value=e.data[a].id,n.label=e.data[a].nama_barang,t.barang.push(n)}})).then((function(){console.warn(t.$route.params.id),fetch(localStorage.base_api+"request/barang/"+t.$route.params.id,{method:"post",headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){return t.json()})).then((function(e){t.request_po=e,console.warn(e.status)})).catch((function(t){return console.error("DUDE "+t),!1}))})).catch((function(e){return console.error(e),t.$swal("Tidak bisa mengambil data barang","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1}))}},i=s,u=a("2877"),l=Object(u["a"])(i,n,o,!1,null,null,null);e["default"]=l.exports},"8e44":function(t,e,a){"use strict";function n(t,e,a,n,o){return new Promise((function(r,s){t.$http.post(e,a,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.href=e,a.setAttribute("download",o),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){s(t)}))}))}function o(t,e,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,s){"get"==o?t.$http.get(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){s(t)})):t.$http.post(e,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=document.createElement("a");a.href=e,a.setAttribute("download",n),document.body.appendChild(a),a.click()})).then((function(){r()})).catch((function(t){s(t)}))}))}function r(t){return new Promise((function(e,a){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],a=[],n=0;n<t.data.length;n++){var o=new Date(t.data[n].date_line),r=new Date(o.setDate(o.getDate()-2));e.push({date:r,data:t.data[n],link:"/po/"+t.data[n].id})}for(var s=0;s<e.length;s++){var i=new Date,u=new Date(e[s].date);i==u&&a.push({date:e[s].date,data:e[s]})}return localStorage.setItem("notif",JSON.stringify(a)),a})).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}function s(t,e){return new Promise((function(a,n){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){a(t)})).catch((function(t){return n(t)}))}))}function i(t,e,a,n){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}function u(t,e,a){return new Promise((function(n,o){fetch(e,a).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return n(t)})).catch((function(t){return o(t)}))}))}a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return i})),a.d(e,"b",(function(){return u}))}}]);
//# sourceMappingURL=chunk-7334e77a.e302af39.js.map