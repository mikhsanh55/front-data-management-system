(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a45ac"],{"05a2":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("CCard",[t("CCardHeader",[t("p",[t("b",[a._v("Edit")]),a._v(" Vendor")])]),t("CCardBody",[t("CForm",{staticClass:"mt-4"},[t("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[t("CCol",{attrs:{sm:"8"}},[t("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[t("small",[a._v("Penambahan Vendor berhasil!")])]),a.errors.length>0?t("div",a._l(a.errors,(function(e){return t("p",{staticClass:"alert alert-danger"},[t("small",[a._v(a._s(e))])])})),0):a._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:a.vendor.id,expression:"vendor.id"}],ref:"id",attrs:{type:"hidden",name:"id"},domProps:{value:a.vendor.id},on:{input:function(e){e.target.composing||a.$set(a.vendor,"id",e.target.value)}}}),t("CInput",{attrs:{type:"text",description:"Masukan Nama vendor",autocomplete:"nama_vendor",label:"Nama vendor",horizontal:"",placeholder:"Masukan Nama vendor"},model:{value:a.vendor.nama,callback:function(e){a.$set(a.vendor,"nama",e)},expression:"vendor.nama"}}),t("CInput",{attrs:{type:"text",description:"Masukan Nomer Rekening",autocomplete:"no_rekening",label:"Nomer Rekening",horizontal:"",placeholder:"Masukan Nomer Rekening"},model:{value:a.vendor.no_rekening,callback:function(e){a.$set(a.vendor,"no_rekening",e)},expression:"vendor.no_rekening"}}),t("CInputFile",{ref:"file",staticClass:"mt-4 mb-4",attrs:{label:"Foto Vendor",horizontal:"",id:"file"}}),t("CInput",{attrs:{type:"text",description:"Masukan Email",autocomplete:"email",label:"Email",horizontal:"",placeholder:"Masukan Email"},model:{value:a.vendor.email,callback:function(e){a.$set(a.vendor,"email",e)},expression:"vendor.email"}}),t("CInput",{attrs:{type:"text",description:"Masukan Whatsapp",autocomplete:"wa_hp",label:"Whatsapp",horizontal:"",placeholder:"Masukan Whatsapp"},model:{value:a.vendor.wa_hp,callback:function(e){a.$set(a.vendor,"wa_hp",e)},expression:"vendor.wa_hp"}}),t("CInput",{attrs:{type:"text",description:"Masukan Perusahaan",autocomplete:"nama_instansi",label:"Perusahaan",horizontal:"",placeholder:"Masukan Perusahaan"},model:{value:a.vendor.nama_instansi,callback:function(e){a.$set(a.vendor,"nama_instansi",e)},expression:"vendor.nama_instansi"}}),t("CInput",{attrs:{type:"text",description:"Masukan Karakteristik Perusahaan",autocomplete:"karakteristik_perusahaan",label:"Karakteristik Perusahaan",horizontal:"",placeholder:"Masukan Karakteristik Perusahaan"},model:{value:a.vendor.karakteristik_perusahaan,callback:function(e){a.$set(a.vendor,"karakteristik_perusahaan",e)},expression:"vendor.karakteristik_perusahaan"}}),t("CTextarea",{attrs:{label:"Masukan Alamat Vendor",placeholder:"Masukan Alamat Vendor",horizontal:"",rows:"3"},model:{value:a.vendor.alamat,callback:function(e){a.$set(a.vendor,"alamat",e)},expression:"vendor.alamat"}}),t("div",[t("img",{attrs:{src:"https://young-temple-67589.herokuapp.com/"+a.vendor.foto,width:"80",height:"80"}})])],1)],1)],1)],1),t("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[t("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(e){return e.preventDefault(),a.updateVendor(e)}}},[t("i",{staticClass:"fa fa-edit mr-2"}),a._v(a._s(a.label)+" ")])],1)],1)],1)},r=[],o={name:"addVendor",data:function(){return{label:"Simpan Perubahan",vendor:{nama:null,foto:null,email:null,wa_hp:null,alamat:null,no_rekening:null,nama_instansi:null,karakteristik_perusahaan:null},validMsg:!1,errors:[]}},methods:{checkImage:function(a){var e=this,t=new Image;t.onload=function(){return console.log("ada"),e.image=1,!0},t.onerror=function(){return console.log("tidak ada"),!1},t.src=a},getData:function(){var a=this,e=new Headers;e.append("Authorization","bearer "+localStorage.getItem("token"));var t={method:"POST",headers:e,redirect:"follow"};fetch("https://young-temple-67589.herokuapp.com/api/vendor/"+this.$route.params.id,t).then((function(a){return a.json()})).then((function(e){console.log(e),a.vendor=e})).catch((function(e){return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),!1}))},updateVendor:function(){var a=this;this.errors=[],this.vendor.nama||this.errors.push("Nama vendor Wajib diisi"),this.vendor.email||this.errors.push("Email Wajib diisi"),this.vendor.wa_hp||this.errors.push("Whatsapp Wajib diisi"),this.vendor.alamat||this.errors.push("Alamat Wajib diisi"),this.vendor.no_rekening||this.errors.push("Nomer rekening Wajib diisi"),this.vendor.nama_instansi||this.errors.push("Data Perusahaan wajib diisi"),this.vendor.karakteristik_perusahaan||this.errors.push("Data Karakteristik Perusahaan wajib diisi"),this.errors.length||(this.label="Loading...",this.$http.post("https://young-temple-67589.herokuapp.com/api/vendor/edit/"+this.$route.params.id,this.vendor,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(e){a.label="Simpan Perubahan",a.$swal("Data vendor berhasil diperbaharui","Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/vendor")}),1500)})).catch((function(e){return a.label="Simpan Perubahan",console.log(e.response),401==e.response.status?(a.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){a.$swal.close(),a.$router.replace({path:"/login"})}),1500)):500==e.response.status&&(a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500)),!1})))}},created:function(){this.getData()}},s=o,i=t("2877"),l=Object(i["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0a45ac.95e65b5c.js.map