(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f38d32ee"],{7568:function(a,t,n){},c57d:function(a,t,n){"use strict";var e=n("7568"),r=n.n(e);r.a},cdbb:function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("CCard",[n("CCardHeader",[n("p",[n("b",[a._v("Daftar")]),a._v(" Kurir")])]),n("CCardBody",[n("CRow",[n("CCol",{attrs:{sm:"12"}},[n("v-client-table",{attrs:{data:a.kurir,columns:a.tableFields,options:a.tableOptions,id:"kurir_table"},scopedSlots:a._u([{key:"foto",fn:function(a){return n("div",{},[n("img",{attrs:{src:a.row.foto}})])}},{key:"aksi",fn:function(t){return n("div",{staticClass:"d-flex justify-content-center"},[2!=a.data.level?n("button",{staticClass:"text-danger btn btn-secondary btn-sm",attrs:{title:"hapus data kurir"},on:{click:function(n){return a.deleteKurir(t.row.id)}}},[n("i",{ref:"id",staticClass:"fa fa-trash",attrs:{id:t.row.id}})]):a._e()])}}])})],1)],1)],1)],1),n("CModal",{attrs:{title:"Hapus Data Kurir",size:"sm",color:"danger",show:a.smallModal},on:{"update:show":function(t){a.smallModal=t}},scopedSlots:a._u([{key:"footer",fn:function(){return[n("CButton",{attrs:{color:"danger"},on:{click:function(t){return a.deleteKurir()}}},[a._v("Hapus")]),n("CButton",{attrs:{color:"secondary"},on:{click:function(t){a.smallModal=!1}}},[a._v("Batal")])]},proxy:!0}])},[a._v(" Data Kurir ini akan dihapus secara permanen? ")])],1)},r=[],o={name:"Kurir",data:function(){return{id:0,smallModal:!1,data:"",tableFields:["no","no_karyawan","nama_karyawan","email","wa_hp","aksi"],tableOptions:{perPage:10,pagination:{chunk:10,dropdown:!1,edge:!0,nav:"fixed"},headings:{no:"No",no_karyawan:"No Kurir",nama_karyawan:"Nama Kurir",email:"Email",wa_hp:"No Hp/WA",aksi:"Aksi"},sortable:["no","no_karyawan","nama_karyawan"],columnsClasses:{no:"text-center align-middle",no_karyawan:"align-middle",nama_karyawan:"align-middle",email:"align-middle",wa_hp:"text-center align-middle",aksi:"text-center align-middle"}},kurir:[]}},methods:{getData:function(){var a=this;this.$http.get("https://young-temple-67589.herokuapp.com/api/kurir",{headers:{Authorization:"bearer "+localStorage.getItem("token")},redirect:"follow"}).then((function(t){a.kurir=t.data;for(var n=0;n<a.kurir.length;n++)a.kurir[n].no=n+1;console.log(t)})).catch((function(t){return a.$swal("Tidak bisa ambil data","hubungi pengembangnya...","danger"),setTimeout((function(){a.$swal.close()}),1500),!1}))},deleteKurir:function(a){var t=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan akan menghapus data ini permanen",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n?t.$http.delete("https://young-temple-67589.herokuapp.com/api/kurir/"+a,{headers:{Authorization:"bearer "+localStorage.token}}).then((function(){t.$swal("data user berhasil dihapus","Mohon tunggu sebentar...","success"),setTimeout((function(){t.$swal.close(),t.$router.push("/kurir")}),1500)})).catch((function(a){return console.error(a.response),401!=a.response.status?(t.$swal("Tidak bisa hapus data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),console.log(a),!1):(t.$store.dispatch("logout").then((function(){var a=window.location.href;a=a.split("/"),localStorage.setItem("prevPath",a[a.length-1]),t.$swal("Sesi login kamu sudah habis","login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$router.replace({path:"/login"})}),1500)})).catch((function(a){return t.$swal("Tidak bisa hapus data","hubungi pengembangnya...","danger"),setTimeout((function(){t.$swal.close()}),1500),!1})),!1)})):t.$swal.close()}))}},created:function(){this.getData()},mounted:function(){this.data=this.$store.getters.userData}},i=o,s=(n("c57d"),n("2877")),l=Object(s["a"])(i,e,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-f38d32ee.d6f33538.js.map