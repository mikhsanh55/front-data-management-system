(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f270"],{d938:function(a,n,r){"use strict";r.r(n);var t=function(){var a=this,n=a.$createElement,r=a._self._c||n;return r("div",[r("CCard",[r("CCardHeader",[r("b",[a._v("Tambah")]),a._v(" Barang ")]),r("CCardBody",[r("CForm",{staticClass:"mt-4"},[r("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[r("CCol",{attrs:{sm:"8"}},[r("CSelect",{attrs:{label:"Vendor",horizontal:"",options:a.vendor},on:{"update:value":a.assignVendor},model:{value:a.barang.id_vendor,callback:function(n){a.$set(a.barang,"id_vendor",n)},expression:"barang.id_vendor"}}),r("CInput",{attrs:{type:"text",description:a.validator.kode_barang_msg,"is-valid":a.validator.kode_barang,autocomplete:"kode_barang",label:"Kode Barang",horizontal:"",placeholder:"Masukan Kode Barang"},on:{input:function(n){a.barang.kode_barang.length<1?a.validator.kode_barang=!1:a.validator.kode_barang=!0}},model:{value:a.barang.kode_barang,callback:function(n){a.$set(a.barang,"kode_barang",n)},expression:"barang.kode_barang"}}),r("CInput",{attrs:{type:"text",description:a.validator.nama_barang_msg,"is-valid":a.validator.nama_barang,autocomplete:"nama_barang",label:"Nama Barang",horizontal:"",placeholder:"Masukan Nama Barang"},on:{input:function(n){a.barang.nama_barang.length<1?a.validator.nama_barang=!1:a.validator.nama_barang=!0}},model:{value:a.barang.nama_barang,callback:function(n){a.$set(a.barang,"nama_barang",n)},expression:"barang.nama_barang"}}),r("CInput",{attrs:{type:"text",description:a.validator.spesifikasi_msg,"is-valid":a.validator.spesifikasi,autocomplete:"spesifikasi",label:"Spesifikasi Barang",horizontal:"",placeholder:"Masukan Spesifikasi Barang"},on:{input:function(n){a.barang.spesifikasi.length<1?a.validator.spesifikasi=!1:a.validator.spesifikasi=!0}},model:{value:a.barang.spesifikasi,callback:function(n){a.$set(a.barang,"spesifikasi",n)},expression:"barang.spesifikasi"}}),r("CInput",{attrs:{type:"number",description:a.validator.harga_dasar_msg,"is-valid":a.validator.harga_dasar,autocomplete:"harga_dasar",label:"Harga Dasar Barang",horizontal:"",placeholder:"Masukan Harga Dasar Barang"},on:{input:function(n){a.barang.harga_dasar.length<1?a.validator.harga_dasar=!1:a.validator.harga_dasar=!0}},model:{value:a.barang.harga_dasar,callback:function(n){a.$set(a.barang,"harga_dasar",n)},expression:"barang.harga_dasar"}}),r("CInput",{attrs:{type:"number",description:a.validator.harga_jual_msg,"is-valid":a.validator.harga_jual,autocomplete:"harga_jual",label:"Harga Jual Barang",horizontal:"",placeholder:"Masukan Harga Jual Barang"},on:{input:function(n){a.barang.harga_jual.length<1?a.validator.harga_jual=!1:a.validator.harga_jual=!0}},model:{value:a.barang.harga_jual,callback:function(n){a.$set(a.barang,"harga_jual",n)},expression:"barang.harga_jual"}}),r("CInput",{attrs:{type:"text",description:a.validator.satuan_msg,"is-valid":a.validator.satuan,autocomplete:"satuan",label:"Satuan Barang",horizontal:"",placeholder:"Masukan Satuan Barang"},on:{input:function(n){a.barang.satuan.length<1?a.validator.satuan=!1:a.validator.satuan=!0}},model:{value:a.barang.satuan,callback:function(n){a.$set(a.barang,"satuan",n)},expression:"barang.satuan"}}),r("CInput",{attrs:{type:"date",description:a.validator.exp_msg,"is-valid":a.validator.exp,autocomplete:"exp",label:"Tanggal Kadaluarsa Barang",horizontal:"",placeholder:"Masukan tanggal kadaluarsa Barang"},on:{input:function(n){a.barang.exp.length<1?a.validator.exp=!1:a.validator.exp=!0}},model:{value:a.barang.exp,callback:function(n){a.$set(a.barang,"exp",n)},expression:"barang.exp"}}),r("CTextarea",{attrs:{label:"Masukan Keterangan",description:a.validator.keterangan_msg,"is-valid":a.validator.keterangan,horizontal:"",rows:"3"},on:{input:function(n){a.barang.keterangan.length<1?a.validator.keterangan=!1:a.validator.keterangan=!0}},model:{value:a.barang.keterangan,callback:function(n){a.$set(a.barang,"keterangan",n)},expression:"barang.keterangan"}}),r("CInputFile",{ref:"file",staticClass:"mt-4 mb-4",attrs:{label:"Foto Barang",horizontal:"",id:"file"},on:{change:a.handleFile},model:{value:a.barang.foto,callback:function(n){a.$set(a.barang,"foto",n)},expression:"barang.foto"}})],1)],1)],1)],1),r("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[r("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(n){return n.preventDefault(),a.addBarang(n)}}},[r("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},e=[],s={name:"AddBarang",data:function(){return{vendorselected:1,vendor:[],validator:{kode_barang:null,kode_barang_msg:null,nama_barang:null,nama_barang_msg:null,spesifikasi:null,spesifikasi_msg:null,satuan:null,satuan_msg:null,harga_dasar:null,harag_dasar_msg:null,harga_jual:null,harga_jual_msg:null},barang:{id_vendor:null,kode_barang:null,nama_barang:null,foto:null,spesifikasi:null,harga_dasar:null,harga_jual:null,satuan:null,exp:null,keterangan:null},errors:[],label:"Tambah Barang"}},methods:{getVendor:function(){var a=this;this.vendor.push({value:"000",label:"Pilih Vendor"}),this.$http.get(localStorage.base_api+"vendor",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(n){for(var r=0;r<n.data.length;r++){var t={};t.value=n.data[r].id,t.label=n.data[r].nama_instansi,a.vendor.push(t)}console.log(a.vendor)})).catch((function(n){if(401==n.response.status)a.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),alert("Session Login kamu sudah habis! silahkan login kembali")})).then((function(){a.$router.replace({path:"/login"})})).catch((function(a){return alert("An error occured when get data :("),!1}));else if(500===n.response.status)return a.smallModal=!1,alert("Something wrong with the server"),!1}))},handleFile:function(a,n){var r=this;a=a[0];var t=a.name.substring(a.name.lastIndexOf(".")+1),e=["gif","png","jpg","jpeg"],s=a;if(0==e.includes(t))return this.$swal("Maaf tidak bisa ambil data :(","hubungi pengembanya","danger"),setTimeout((function(){r.$swal.close()}),2e3),n.target.value="",!1;console.log(s),this.barang.foto=s},assignVendor:function(a){this.barang.id_vendor=a},addBarang:function(){var a=this;if(this.errors=[],this.barang.kode_barang||(this.validator.kode_barang=!1,this.validator.kode_barang_msg="Harap isi kode barang",this.errors.push("kode_barang karyawan kosong")),this.barang.nama_barang||(this.validator.nama_barang=!1,this.validator.nama_barang_msg="Harap isi nama barang",this.errors.push("nama_barang karyawan kosong")),this.barang.spesifikasi||(this.validator.spesifikasi=!1,this.validator.spesifikasi_msg="Harap isi spesifikasi barang",this.errors.push("spesifikasi karyawan kosong")),this.barang.harga_jual||(this.validator.harga_jual=!1,this.validator.harga_jual_msg="Harap isi harga jual barang",this.errors.push("harga_jual karyawan kosong")),this.barang.harga_dasar||(this.validator.harga_dasar=!1,this.validator.harga_dasar_msg="Harap isi harga dasar barang",this.errors.push("harga_dasar karyawan kosong")),this.barang.keterangan||(this.validator.keterangan=!1,this.validator.keterangan_msg="Harap isi keterangan barang",this.errors.push("keterangan karyawan kosong")),this.barang.satuan||(this.validator.satuan=!1,this.validator.satuan_msg="Harap isi satuan barang",this.errors.push("satuan karyawan kosong")),this.barang.exp||(this.validator.exp=!1,this.validator.exp_msg="Harap isi tanggal kadaluarsa barang",this.errors.push("exp karyawan kosong")),this.barang.id_vendor&&"000"!=this.barang.id_vendor||(this.errors.push("Pilih vendor!"),this.$swal("Harap pilih vendor","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.$http.post(localStorage.base_api+"barang",this.barang,{headers:{Authorization:"bearer "+localStorage.token},redirect:"follow"}).then((function(n){a.label="Tambah Barang",a.$swal(n.data.message,"hubungi pengembangya","success"),setTimeout((function(){a.$swal.close(),a.$router.push({path:"/barang"})}),2e3),console.log(n)})).catch((function(n){return 401!=n.response.status?(a.label="Tambah Barang",console.error(n),a.$swal("Tidak bisa menambah data","hubungi pengembanya","danger"),setTimeout((function(){a.$swal.close()}),2e3),!1):(a.$store.dispatch("logout").then((function(){var n=window.location.href;n=n.split("/"),localStorage.setItem("prevPath",n[n.length-1]),a.$swal("Sesi login kamu udah habis","login lagi yah","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),2e3)})).catch((function(n){return a.$swal("Tidak bisa menambah data","hubungi pengembanya","danger"),setTimeout((function(){a.$swal.close()}),2e3),!1})),!1)}))}},created:function(){3==localStorage.level&&this.$router.push("/"),this.getVendor()}},i=s,o=r("2877"),l=Object(o["a"])(i,t,e,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21f270.33f6c60e.js.map