(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa29d"],{"109a":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CRow",[s("CCol",{attrs:{sm:"12"}},[s("CCard",[s("CCardHeader",[s("b",[t._v("Notifikasi")])]),s("CCardBody",[s("CRow",[s("CCol",{attrs:{sm:"12",md:"12"}},[null!=t.datas?s("div",[s("table",{staticClass:"table table-borderless w-100"},t._l(t.datas,(function(a,e){return s("tr",{staticClass:"d-flex"},[s("td",{staticClass:"m-4",staticStyle:{"font-size":"20px"}},[s("i",{staticClass:"fa fa-file text-secondary"})]),s("td",{staticClass:"flex-grow-1"},[s("span",{staticClass:"badge badge-warning mt-2 mb-3 p-1"},[t._v("H-2 Pengiriman Barang")]),s("p",{staticClass:"p-0"},[s("b",[t._v("Pengiriman PO dengan kode 001 dua hari lagi")])]),s("a",{attrs:{href:"#"}},[s("b",{staticClass:"mt-3"},[s("span",{staticStyle:{color:"#e74c3c"},on:{click:function(s){return s.preventDefault(),t.processNotif(e,a.data.data.id)}}},[t._v("Lihat")])])])]),s("td",{staticClass:"flex-shrink-2"},[s("i",{staticClass:"fa fa-"}),t._v(" "+t._s(a.data.data.date_line)+" ")])])})),0)]):s("div",{staticClass:"d-flex justify-content-center"},[s("h3",{staticClass:"text-secondary"},[t._v("Belum ada Notifikasi")])])])],1)],1)],1)],1)],1)},i=[],n={name:"Notification",data:function(){return{datas:null}},methods:{processNotif:function(t,a){var s=this;this.datas.splice(t,1),localStorage.setItem("notif",JSON.stringify(this.datas)),setTimeout((function(){return s.$router.push("/po/detail/"+a)}),2e3)}},created:function(){0!=JSON.parse(localStorage.notif).length?(this.datas=JSON.parse(localStorage.notif),console.log(this.datas)):this.datas=null}},l=n,o=s("2877"),r=Object(o["a"])(l,e,i,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0aa29d.e93265fb.js.map