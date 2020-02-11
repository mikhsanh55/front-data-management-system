(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ea3c4d4"],{5975:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",[t("CCard",[t("CCardHeader",[t("b",[a._v("Edit")]),a._v(" Barang ")]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"8"}},[t("CSelect",{attrs:{label:"Pilih Vendor",horizontal:"",options:a.vendor},on:{"update:value":a.assignVendor},model:{value:a.barang.id_vendor,callback:function(n){a.$set(a.barang,"id_vendor",n)},expression:"barang.id_vendor"}}),t("CInput",{attrs:{type:"text",description:a.validator.kode_barang_msg,"is-valid":a.validator.kode_barang,autocomplete:"kode_barang",label:"Kode Barang",horizontal:"",placeholder:"Masukan Kode Barang"},on:{input:function(n){a.barang.kode_barang.length<1?a.validator.kode_barang=!1:a.validator.kode_barang=!0}},model:{value:a.barang.kode_barang,callback:function(n){a.$set(a.barang,"kode_barang",n)},expression:"barang.kode_barang"}}),t("CInput",{attrs:{type:"text",description:a.validator.nama_barang_msg,"is-valid":a.validator.nama_barang,autocomplete:"nama_barang",label:"Nama Barang",horizontal:"",placeholder:"Masukan Nama Barang"},on:{input:function(n){a.barang.nama_barang.length<1?a.validator.nama_barang=!1:a.validator.nama_barang=!0}},model:{value:a.barang.nama_barang,callback:function(n){a.$set(a.barang,"nama_barang",n)},expression:"barang.nama_barang"}}),t("CInput",{attrs:{type:"text",description:a.validator.spesifikasi_msg,"is-valid":a.validator.spesifikasi,autocomplete:"spesifikasi",label:"Spesifikasi Barang",horizontal:"",placeholder:"Masukan Spesifikasi Barang"},on:{input:function(n){a.barang.spesifikasi.length<1?a.validator.spesifikasi=!1:a.validator.spesifikasi=!0}},model:{value:a.barang.spesifikasi,callback:function(n){a.$set(a.barang,"spesifikasi",n)},expression:"barang.spesifikasi"}}),t("CInput",{attrs:{type:"number",description:a.validator.harga_dasar_msg,"is-valid":a.validator.harga_dasar,autocomplete:"harga_dasar",label:"Harga Dasar Barang",horizontal:"",placeholder:"Masukan Harga Dasar Barang"},on:{input:function(n){a.barang.harga_dasar.length<1?a.validator.harga_dasar=!1:a.validator.harga_dasar=!0}},model:{value:a.barang.harga_dasar,callback:function(n){a.$set(a.barang,"harga_dasar",n)},expression:"barang.harga_dasar"}}),t("CInput",{attrs:{type:"number",description:a.validator.harga_jual_msg,"is-valid":a.validator.harga_jual,autocomplete:"harga_jual",label:"Harga Jual Barang",horizontal:"",placeholder:"Masukan Harga Jual Barang"},on:{input:function(n){a.barang.harga_jual.length<1?a.validator.harga_jual=!1:a.validator.harga_jual=!0}},model:{value:a.barang.harga_jual,callback:function(n){a.$set(a.barang,"harga_jual",n)},expression:"barang.harga_jual"}}),t("CInput",{attrs:{type:"text",description:a.validator.satuan_msg,"is-valid":a.validator.satuan,autocomplete:"satuan",label:"Satuan Barang",horizontal:"",placeholder:"Masukan Satuan Barang"},on:{input:function(n){a.barang.satuan.length<1?a.validator.satuan=!1:a.validator.satuan=!0}},model:{value:a.barang.satuan,callback:function(n){a.$set(a.barang,"satuan",n)},expression:"barang.satuan"}}),t("CInput",{attrs:{type:"date",description:a.validator.exp_msg,"is-valid":a.validator.exp,autocomplete:"exp",label:"Tanggal Kadaluarsa Barang",horizontal:"",placeholder:"Masukan tanggal kadaluarsa Barang"},on:{input:function(n){a.barang.exp.length<1?a.validator.exp=!1:a.validator.exp=!0}},model:{value:a.barang.exp,callback:function(n){a.$set(a.barang,"exp",n)},expression:"barang.exp"}}),t("CTextarea",{attrs:{label:"Masukan Keterangan",description:a.validator.keterangan_msg,"is-valid":a.validator.keterangan,horizontal:"",rows:"3"},on:{input:function(n){a.barang.keterangan.length<1?a.validator.keterangan=!1:a.validator.keterangan=!0}},model:{value:a.barang.keterangan,callback:function(n){a.$set(a.barang,"keterangan",n)},expression:"barang.keterangan"}}),t("CInputFile",{ref:"file",staticClass:"mt-4 mb-4",attrs:{label:"Foto Barang",horizontal:"",id:"file"},on:{change:a.handleFile}}),null!=a.barang.foto?t("div",[t("img",{attrs:{src:"https://young-temple-67589.herokuapp.com/"+a.barang.foto,width:"80",height:"80"}})]):a._e()],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"light"},on:{click:a.updateBarang}},[t("i",{staticClass:"fa fa-edit mr-2"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},r=[],i=t("8e44"),o={name:"AddBarang",data:function(){return{vendor:[],validator:{kode_barang:null,kode_barang_msg:null,nama_barang:null,nama_barang_msg:null,spesifikasi:null,spesifikasi_msg:null,satuan:null,satuan_msg:null},barang:{id_vendor:1,kode_barang:null,nama_barang:null,foto:null,spesifikasi:null,harga_jual:null,harga_dasar:null,satuan:null,exp:null,keterangan:null},errors:[],label:"Simpan Perubahan"}},methods:{getData:function(){var a=this,n=new Headers;n.append("Authorization","bearer "+localStorage.getItem("token"));var t={method:"POST",headers:n,redirect:"follow"};Object(i["f"])(this,localStorage.base_api+"barang/"+this.$route.params.id,t).then((function(n){a.barang=n})).catch((function(n){a.$swal("Tidak bisa mengambil data","hubungi pengembanya","danger"),setTimeout((function(){a.$swal.close()}),2e3)}))},handleFile:function(a,n){var t=this;a=a[0];var e=a.name.substring(a.name.lastIndexOf(".")+1),r=["gif","png","jpg","jpeg"],i=a;if(0==r.includes(e))return this.$swal("File tidak valid","harap upload gambar yah","danger"),setTimeout((function(){t.$swal.close()}),2e3),n.target.value="",!1;console.log(i),this.barang.foto=i},assignVendor:function(a){this.barang.id_vendor=a},updateBarang:function(){var a=this;if(this.label="Loading...",this.errors=[],this.barang.kode_barang||(this.validator.kode_barang=!1,this.validator.kode_barang_msg="Harap isi kode barang",this.errors.push("kode_barang karyawan kosong")),this.barang.nama_barang||(this.validator.nama_barang=!1,this.validator.nama_barang_msg="Harap isi nama barang",this.errors.push("nama_barang karyawan kosong")),this.barang.spesifikasi||(this.validator.spesifikasi=!1,this.validator.spesifikasi_msg="Harap isi spesifikasi barang",this.errors.push("spesifikasi karyawan kosong")),this.barang.harga_jual||(this.validator.harga_jual=!1,this.validator.harga_jual_msg="Harap isi harga jual barang",this.errors.push("harga_jual karyawan kosong")),this.barang.satuan||(this.validator.satuan=!1,this.validator.satuan_msg="Harap isi satuan barang",this.errors.push("satuan karyawan kosong")),this.barang.exp||(this.validator.exp=!1,this.validator.exp_msg="Harap isi tanggal kadaluarsa barang",this.errors.push("exp karyawan kosong")),this.errors.length)return console.log(this.errors),window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.barang.harga_dasar=this.barang.harga_jual,this.$http.post(localStorage.base_api+"barang/edit/"+this.$route.params.id,this.barang,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(n){a.label="Simpan Perubahan",a.$swal("Data berhasil diupdate","Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),setTimeout((function(){a.$swal.close(),a.$router.push({path:"/barang"})}),1500)}),2e3)})).catch((function(n){if(401!=n.response.status)return a.label="Simpan Perubahan",console.log(n),a.$swal("Tidak bisa update data","Harap hubungi pengembanya","danger"),setTimeout((function(){a.$swal.close()}),2e3),!1;a.$store.dispatch("logout").then((function(){var n=window.location.href;n=n.split("/"),localStorage.setItem("prevPath",n[n.length-1]),a.$swal("Sesi login kamu udah habis","Login lagi yah","warning"),setTimeout((function(){a.$swal.close(),a.$router.push({path:"/login"})}),2e3)})).catch((function(n){return a.$swal("Tidak bisa update data","Harap hubungi pengembanya","danger"),setTimeout((function(){a.$swal.close()}),2e3),!1}))}))},getVendor:function(){var a=this;this.$http.get(localStorage.base_api+"vendor",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(n){for(var t=0;t<n.data.length;t++){var e={};e.value=n.data[t].id,e.label=n.data[t].nama_instansi,a.vendor.push(e)}console.log(a.vendor)})).then((function(){a.getData()})).catch((function(a){console.error("error "+a)}))}},created:function(){this.getVendor(),this.getData()}},s=o,l=t("2877"),u=Object(l["a"])(s,e,r,!1,null,null,null);n["default"]=u.exports},"8e44":function(a,n,t){"use strict";function e(a,n,t,e,r){return new Promise((function(i,o){a.$http.post(n,t,e).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/vnd.ms-excel"})),t=document.createElement("a");t.href=n,t.setAttribute("download",r),document.body.appendChild(t),t.click()})).then((function(){i()})).catch((function(a){o(a)}))}))}function r(a,n,t,e){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(i,o){"get"==r?a.$http.get(n,t).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=n,t.setAttribute("download",e),document.body.appendChild(t),t.click()})).then((function(){i()})).catch((function(a){o(a)})):a.$http.post(n,t).then((function(a){var n=URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),t=document.createElement("a");t.href=n,t.setAttribute("download",e),document.body.appendChild(t),t.click()})).then((function(){i()})).catch((function(a){o(a)}))}))}function i(a){return new Promise((function(n,t){a.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(a){for(var n=[],t=[],e=0;e<a.data.length;e++){var r=new Date(a.data[e].date_line),i=new Date(r.setDate(r.getDate()-2));n.push({date:i,data:a.data[e],link:"/po/"+a.data[e].id})}for(var o=0;o<n.length;o++){var s=new Date,l=new Date(n[o].date);s==l&&t.push({date:n[o].date,data:n[o]})}return localStorage.setItem("notif",JSON.stringify(t)),t})).then((function(a){return n(a)})).catch((function(a){return t(a)}))}))}function o(a,n){return new Promise((function(t,e){var r=-1;Promise.all(a.map((function(a){return r++,fetch(a,n[r])}))).then((function(a){return Promise.all(a.map((function(a){return a.json()})))})).then((function(a){t(a)})).catch((function(a){return e(a)}))}))}function s(a,n,t,e){return new Promise((function(e,r){fetch(n,t).then((function(n){return 401==n.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==n.status?(a.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):n.json()})).then((function(a){return e(a)})).catch((function(a){return r(a)}))}))}function l(a,n,t){return new Promise((function(e,r){fetch(n,t).then((function(n){return 401==n.status?(a.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$store.dispatch("logout").then((function(){return a.$router.replace("/login")}))}),1500),!1):500==n.status?(a.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1):n.json()})).then((function(a){return e(a)})).catch((function(a){return r(a)}))}))}t.d(n,"c",(function(){return e})),t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return i})),t.d(n,"e",(function(){return o})),t.d(n,"f",(function(){return s})),t.d(n,"b",(function(){return l}))}}]);
//# sourceMappingURL=chunk-2ea3c4d4.31fc1b5f.js.map