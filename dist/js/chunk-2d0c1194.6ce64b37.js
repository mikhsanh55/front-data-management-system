(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1194"],{4530:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[a._v("Tambah")]),a._v(" Asset")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"12",md:"8"}},[t("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[t("small",[a._v("Penambahan Asset berhasil!")])]),t("CInput",{attrs:{type:"text",description:a.validator.kode_msg,"is-valid":a.validator.kode,autocomplete:"kode",label:"Kode Asset",horizontal:"",placeholder:"Masukan Kode Asset"},on:{input:function(e){a.asset.kode.length<1?a.validator.kode=!1:a.validator.kode=!0}},model:{value:a.asset.kode,callback:function(e){a.$set(a.asset,"kode",e)},expression:"asset.kode"}}),t("CTextarea",{attrs:{description:a.validator.deskripsi_barang_msg,"is-valid":a.validator.deskripsi_barang,label:"Masukan Deskripsi Asset",placeholder:"Masukan Deskripsi Asset",horizontal:"",rows:"3"},on:{input:function(e){a.asset.deskripsi_barang.length<1?a.validator.deskripsi_barang=!1:a.validator.deskripsi_barang=!0}},model:{value:a.asset.deskripsi_barang,callback:function(e){a.$set(a.asset,"deskripsi_barang",e)},expression:"asset.deskripsi_barang"}}),t("CSelect",{attrs:{label:"Karyawan",horizontal:"",options:a.karyawan},on:{"update:value":a.assignKaryawan},model:{value:a.asset.id_karyawan,callback:function(e){a.$set(a.asset,"id_karyawan",e)},expression:"asset.id_karyawan"}}),t("CInput",{attrs:{type:"date",description:a.validator.tanggal_beli_msg,"is-valid":a.validator.tanggal_beli,autocomplete:"tanggal_beli",label:"Tanggal Beli",horizontal:"",placeholder:"Masukan Tanggal Beli"},on:{input:function(e){a.asset.tanggal_beli.length<1?a.validator.tanggal_beli=!1:a.validator.tanggal_beli=!0}},model:{value:a.asset.tanggal_beli,callback:function(e){a.$set(a.asset,"tanggal_beli",e)},expression:"asset.tanggal_beli"}}),t("CInput",{attrs:{type:"date",description:a.validator.tanggal_expired_msg,"is-valid":a.validator.tanggal_expired,autocomplete:"tanggal_expired",label:"Tanggal Expired",horizontal:"",placeholder:"Masukan Tanggal Expired"},on:{input:function(e){a.asset.tanggal_expired.length<1?a.validator.tanggal_expired=!1:a.validator.tanggal_expired=!0}},model:{value:a.asset.tanggal_expired,callback:function(e){a.$set(a.asset,"tanggal_expired",e)},expression:"asset.tanggal_expired"}})],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"primary"},on:{click:function(e){return e.preventDefault(),a.addAsset(e)}}},[t("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},l=[],i={name:"AddAsset",data:function(){return{base_api:localStorage.base_api,label:"Tambah Asset",jabatanselected:1,karyawanselected:1,validator:{kode:null,kode_msg:null,deskripsi_barang:null,deskripsi_barang_msg:null,tanggal_beli:null,tanggal_beli_msg:null,tanggal_expired:null,tanggal_expired_msg:null},asset:{kode:null,deskripsi_barang:null,id_karyawan:null,jabatan:null,tanggal_beli:"0000-00-00",tanggal_expired:"0000-00-00"},validMsg:!1,karyawan:[],errors:[]}},methods:{getKaryawan:function(){var a=this,e=new Headers;e.append("Authorization","bearer "+localStorage.getItem("token"));var t={method:"GET",headers:e,redirect:"follow"};fetch(this.base_api+"karyawan",t).then((function(a){return a.json()})).then((function(e){a.karyawan.push({value:"000",label:"Pilih Karyawan"});for(var t=0;t<e.length;t++){var s={};s.value=e[t].id,s.label=e[t].nama_karyawan,a.karyawan.push(s)}})).catch((function(e){return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),console.error(e),!1}))},assignJabatan:function(a){this.asset.jabatan=a},assignKaryawan:function(a){this.asset.id_karyawan=a},addAsset:function(){var a=this;if(this.errors=[],this.asset.kode||(this.validator.kode=!1,this.validator.kode_msg="Harap isi kode asset",this.errors.push("kode asset kosong")),this.asset.tanggal_beli&&"0000-00-00"!=this.asset.tanggal_beli||(this.validator.tanggal_beli=!1,this.validator.tanggal_beli_msg="Harap isi tanggal beli",this.errors.push("tgl_beli karyawan kosong")),this.asset.tanggal_expired&&"0000-00-00"!=this.asset.tanggal_expired||(this.validator.tanggal_expired=!1,this.validator.tgl_expired_msg="Harap isi tanggal kadaluarsa",this.errors.push("tgl_expired karyawan kosong")),this.asset.id_karyawan&&"000"!=this.asset.id_karyawan||(this.errors.push("Pilih Karyawan"),this.$swal("Harap Pilih Karyawan","","warning"),setTimeout((function(){return a.$swal.close()}),1500)),this.errors.length)return window.scrollBy({top:-500,left:0,behavior:"smooth"}),!1;this.label="Loading...",this.$http.post(this.base_api+"assets",this.asset,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(e){a.label="Tambah Asset",a.$swal("Tambah data asset berhasil","Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push({path:"/asset"})}),1500)})).catch((function(e){return a.label="Tambah Asset",401==e.response.status?a.$store.dispatch("logout").then((function(){var e=window.location.href;e=e.split("/"),localStorage.setItem("prevPath",e[e.length-1]),a.$swal("Sesi login kamu sudah habis","login kagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500)})).catch((function(e){return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500),!1})):500==e.response.status&&(a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","error"),setTimeout((function(){a.$swal.close()}),1500)),console.log(e.response),!1}))}},created:function(){1!=localStorage.level&&2!=localStorage.level&&7!=localStorage.level&&3!=localStorage.level&&this.$router.push("/"),this.getKaryawan()}},n=i,r=t("2877"),o=Object(r["a"])(n,s,l,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0c1194.6ce64b37.js.map