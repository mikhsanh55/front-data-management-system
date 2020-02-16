(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2cf4"],{2660:function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[a._v("Tambah")]),a._v(" Vendor")])]),n("CCardBody",[n("CForm",{staticClass:"mt-4"},[n("CRow",{staticClass:"mx-auto d-flex justify-content-center"},[n("CCol",{attrs:{sm:"8"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:1==a.validMsg,expression:"validMsg == true"}],staticClass:"alert alert-success"},[n("small",[a._v("Penambahan Vendor berhasil!")])]),a.errors.length>0?n("div",a._l(a.errors,(function(e){return n("p",{staticClass:"alert alert-danger"},[n("small",[a._v(a._s(e))])])})),0):a._e(),n("CInput",{attrs:{type:"text",description:"Masukan Nama vendor",autocomplete:"nama",label:"Nama vendor",horizontal:"",placeholder:"Masukan Nama vendor"},model:{value:a.vendor.nama,callback:function(e){a.$set(a.vendor,"nama",e)},expression:"vendor.nama"}}),n("CInput",{attrs:{type:"text",description:"Masukan Nomer Rekening",autocomplete:"no_rekening",label:"Nomer Rekening",horizontal:"",placeholder:"Masukan Nomer Rekening"},model:{value:a.vendor.no_rekening,callback:function(e){a.$set(a.vendor,"no_rekening",e)},expression:"vendor.no_rekening"}}),n("CInputFile",{ref:"file",staticClass:"mt-4 mb-4",attrs:{label:"Foto Vendor",horizontal:"",id:"file"},on:{change:a.handleFile}}),n("CInput",{attrs:{type:"text",description:"Masukan Email",autocomplete:"email",label:"Email",horizontal:"",placeholder:"Masukan Email"},model:{value:a.vendor.email,callback:function(e){a.$set(a.vendor,"email",e)},expression:"vendor.email"}}),n("CInput",{attrs:{type:"text",description:"Masukan Whatsapp",autocomplete:"whatsapp",label:"Whatsapp",horizontal:"",placeholder:"Masukan Whatsapp"},model:{value:a.vendor.wa_hp,callback:function(e){a.$set(a.vendor,"wa_hp",e)},expression:"vendor.wa_hp"}}),n("CInput",{attrs:{type:"text",description:"Masukan Perusahaan",autocomplete:"perusahaan",label:"Perusahaan",horizontal:"",placeholder:"Masukan Perusahaan"},model:{value:a.vendor.nama_instansi,callback:function(e){a.$set(a.vendor,"nama_instansi",e)},expression:"vendor.nama_instansi"}}),n("CInput",{attrs:{type:"text",description:"Masukan Karakteristik Perusahaan",autocomplete:"karakteristik_perusahaan",label:"Karakteristik Perusahaan",horizontal:"",placeholder:"Masukan Karakteristik Perusahaan"},model:{value:a.vendor.karakteristik_perusahaan,callback:function(e){a.$set(a.vendor,"karakteristik_perusahaan",e)},expression:"vendor.karakteristik_perusahaan"}}),n("CTextarea",{attrs:{label:"Masukan Alamat Vendor",placeholder:"Masukan Alamat Vendor",horizontal:"",rows:"3"},model:{value:a.vendor.alamat,callback:function(e){a.$set(a.vendor,"alamat",e)},expression:"vendor.alamat"}})],1)],1)],1)],1),n("CCardFooter",{staticClass:"d-flex justify-content-center mt-4"},[n("CButton",{attrs:{type:"submit",color:"light"},on:{click:function(e){return e.preventDefault(),a.addVendor(e)}}},[n("i",{staticClass:"fa fa-plus mr-1"}),a._v(a._s(a.label_btn)+" ")])],1)],1)],1)},r=[],s={name:"addVendor",data:function(){return{data:JSON.parse(localStorage.user),vendor:{nama:null,foto:null,email:null,wa_hp:null,alamat:null,no_rekening:null,nama_instansi:null,karakteristik_perusahaan:null},validMsg:!1,errors:[],label_btn:"Tambah Vendor"}},methods:{handleFile:function(a,e){var n=this;a=a[0];var t=a.name.substring(a.name.lastIndexOf(".")+1),r=["gif","png","jpg","jpeg"],s=a;if(0==r.includes(t))return this.$swal("File tidak valid","harap upload gambar yah :)","warning"),setTimeout((function(){n.$swal.close()}),2e3),e.target.value="",!1;console.log(s),this.vendor.foto=s},addVendor:function(){var a=this;if(this.errors=[],this.vendor.nama||this.errors.push("Nama vendor Wajib diisi"),this.vendor.email||this.errors.push("Email Wajib diisi"),this.vendor.wa_hp||this.errors.push("Whatsapp Wajib diisi"),this.vendor.alamat||this.errors.push("Alamat Wajib diisi"),this.vendor.no_rekening||this.errors.push("Nomer rekening Wajib diisi"),this.vendor.nama_instansi||this.errors.push("Data Perusahaan wajib diisi"),this.vendor.karakteristik_perusahaan||this.errors.push("Data Karakteristik Perusahaan wajib diisi"),!this.errors.length){var e=new FormData;e.append("nama",this.vendor.nama),e.append("email",this.vendor.email),e.append("wa_hp",this.vendor.wa_hp),e.append("alamat",this.vendor.alamat),e.append("no_rekening",this.vendor.no_rekening),e.append("nama_instansi",this.vendor.nama_instansi),e.append("karakteristik_perusahaan",this.vendor.karakteristik_perusahaan),null!=this.vendor.foto&&e.append("foto",this.vendor.foto),this.label_btn="Loading...",this.$http.post(localStorage.base_api+"vendor",e,{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(e){a.label_btn="Tambah Vendor",a.$swal("Vendor berhasil ditambah","Mohon tunggu sebentar...","success"),setTimeout((function(){a.$swal.close(),a.$router.push("/vendor")}),1500)})).catch((function(e){return a.label_btn="Tambah Vendor",e.response&&console.log(e),a.$swal(e.response.data.message,"hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),!1}))}}},created:function(){3!=this.data.level&&4!=this.data.level&&6!=this.data.level&&7!=this.data.level||this.$router.push("/")}},i=s,o=n("2877"),l=Object(o["a"])(i,t,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b2cf4.afd05315.js.map