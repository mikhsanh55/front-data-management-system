(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5600f3fa"],{4253:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[a._v("Edit")]),a._v(" Barang Pesanan")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"8"}},[t("CInput",{attrs:{type:"text",description:a.validator.no_msg,"is-valid":a.validator.no,autocomplete:"no",label:"No Pesanan",horizontal:"",placeholder:"Masukan No Pesanan"},on:{input:function(n){a.barang_pesanan.no.length<1?a.validator.no=!1:a.validator.no=!0}},model:{value:a.barang_pesanan.no,callback:function(n){a.$set(a.barang_pesanan,"no",n)},expression:"barang_pesanan.no"}}),t("CInput",{attrs:{type:"date",description:a.validator.tanggal_msg,"is-valid":a.validator.tanggal,autocomplete:"tanggal",label:"Tanggal",horizontal:"",placeholder:"Masukan tanggal"},on:{input:function(n){a.barang_pesanan.tanggal.length<1?a.validator.tanggal=!1:a.validator.tanggal=!0}},model:{value:a.barang_pesanan.tanggal_pesanan,callback:function(n){a.$set(a.barang_pesanan,"tanggal_pesanan",n)},expression:"barang_pesanan.tanggal_pesanan"}}),t("CTextarea",{attrs:{label:"Masukan Keterangan",horizontal:"",rows:"3"},model:{value:a.barang_pesanan.keterangan,callback:function(n){a.$set(a.barang_pesanan,"keterangan",n)},expression:"barang_pesanan.keterangan"}})],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(n){return n.preventDefault(),a.updateBarangPesanan(n)}}},[t("i",{staticClass:"fa fa-edit mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},o=[],r=t("8e44"),s={name:"EditBarangPesanan",data:function(){return{label:"Simpan Perubahan",validator:{no:null,no_msg:null,tanggal:null,tanggal_msg:null},barang_pesanan:{no:null,tanggal:null,tanggal_pesanan:null,keterangan:null},validMsg:!1,errors:[]}},methods:{updateBarangPesanan:function(){var a=this;this.errors=[],this.barang_pesanan.no||(this.validator.no=!1,this.validator.no_msg="Harap isi no karyawan",this.errors.push("no pesanan kosong")),this.barang_pesanan.tanggal_pesanan||(this.validator.tanggal_pesanan=!1,this.validator.tanggal_pesanan_msg="Harap isi tanggal_pesanan karyawan",this.errors.push("tanggal pesanan kosong")),this.errors.length||(console.log(this.barang_pesanan),this.barang_pesanan.tanggal=this.barang_pesanan.tanggal_pesanan,this.label="Loading...",this.$http.post("https://young-temple-67589.herokuapp.com/api/barang/pesanan/edit/"+this.$route.params.id,this.barang_pesanan,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(n){a.label="Simpan Perubahan",a.$swal(n.data.message,"Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/barang-pesanan")}),1500)})).catch((function(n){if(401!=n.response.status)return a.label="Simpan Perubahan",a.$swal("Tidak bisa menambah data","hubungi pengembangnya yah","error"),setTimeout((function(){a.$swal.close()}),1500),!1;a.$store.dispatch("logout").then((function(){var n=window.location.href;return n=n.split("/"),localStorage.setItem("prevPath",n[n.length-1]),a.$swal("Sesi Login kamu udah habis","login lagi yah","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500),!1})).catch((function(n){return a.$swal("Tidak bisa update data","hubungi pengembangnya yah","error"),setTimeout((function(){a.$swal.close()}),1500),!1}))})))}},created:function(){var a=this;Object(r["d"])(this,"https://young-temple-67589.herokuapp.com/api/barang/pesanan/"+this.$route.params.id,{method:"POST",headers:{Authorization:"bearer "+localStorage.token}},"post").then((function(n){a.barang_pesanan=n})).catch((function(n){return a.$swal("Tidak bisa mengambil data","Moho hubungi pengembangnya...","error"),setTimeout((function(){return a.$swal.close()})),!1}))}},i=s,l=t("2877"),u=Object(l["a"])(i,e,o,!1,null,null,null);n["default"]=u.exports},"8e44":function(a,n,t){"use strict";function e(a,n,t,e,o){return new Promise((function(r,s){a.$http.post(n,t,e).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),t=document.createElement("a");t.href=n,t.setAttribute("download",o),document.body.appendChild(t),t.click()})).then((function(){r()})).catch((function(a){s(a)}))}))}function o(a,n,t,e){return new Promise((function(o,r){a.$http.get(n,t).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=n,t.setAttribute("download",e),document.body.appendChild(t),t.click()})).then((function(){o()})).catch((function(a){r(a)}))}))}function r(a,n,t,e){return new Promise((function(a,e){fetch(n,t).then((function(a){return a.json()})).then((function(n){return a(n)})).catch((function(a){return e(a)}))}))}function s(a){return new Promise((function(n,t){a.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var n=[],t=[],e=0;e<a.data.length;e++){var o=new Date(a.data[e].date_line),r=new Date(o.setDate(o.getDate()-2));n.push({date:r,data:a.data[e],link:"/po/"+a.data[e].id})}for(var s=0;s<n.length;s++){var i=new Date,l=new Date(n[s].date);i==l&&t.push({date:n[s].date,data:n[s]})}return localStorage.setItem("notif",JSON.stringify(t)),t})).then((function(a){return n(a)})).catch((function(a){return t(a)}))}))}function i(){return new Promise((function(a,n){fetch("https://young-temple-67589.herokuapp.com/api/order/barang/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){return a.json()})).then((function(a){console.warn("ORDER BARANG"),console.log(a),a.forEach((function(a,n){fetch("https://young-temple-67589.herokuapp.com/api/po/"+a.id_po,{method:"post",headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){return a.json()})).then((function(a){console.warn("PO"),console.log(a)}))}))}))}))}t.d(n,"b",(function(){return e})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return s})),t.d(n,"e",(function(){return i}))}}]);
//# sourceMappingURL=chunk-5600f3fa.c973c1d0.js.map