(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2ee5d52"],{1891:function(t,e,n){"use strict";var a=n("9d38"),o=n.n(a);o.a},"36b5":function(t,e,n){},"63e2":function(t,e,n){"use strict";var a=n("36b5"),o=n.n(a);o.a},6906:function(t,e,n){"use strict";var a=n("d85b"),o=n.n(a);o.a},"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(r,i){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function o(t,e,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get";return new Promise((function(r,i){"get"==o?t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){i(t)})):t.$http.post(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function r(t){return new Promise((function(e,n){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],n=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),r=new Date(o.setDate(o.getDate()-2));e.push({date:r,data:t.data[a],link:"/po/"+t.data[a].id})}for(var i=0;i<e.length;i++){var s=new Date,c=new Date(e[i].date);s==c&&n.push({date:e[i].date,data:e[i]})}return localStorage.setItem("notif",JSON.stringify(n)),n})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}function i(t,e){return new Promise((function(n,a){var o=-1;Promise.all(t.map((function(t){return o++,fetch(t,e[o])}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){n(t)})).catch((function(t){return a(t)}))}))}function s(t,e,n,a){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa mengambil data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}function c(t,e,n){return new Promise((function(a,o){fetch(e,n).then((function(e){return 401==e.status?(t.$swal("Maaf sesi login kamu sudah habis","silahkan login lagi yah...","warning"),setTimeout((function(){t.$swal.close(),t.$store.dispatch("logout").then((function(){return t.$router.replace("/login")}))}),1500),!1):500==e.status?(t.$swal("Tidak bisa menghapus data","Mohon hubungi pengembangnya...","error"),setTimeout((function(){t.$swal.close()}),1500),!1):e.json()})).then((function(t){return a(t)})).catch((function(t){return o(t)}))}))}n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return c}))},"9d38":function(t,e,n){},d85b:function(t,e,n){},f593:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-app"},[n("TheSidebar"),n("div",{staticClass:"c-wrapper"},[n("TheHeader"),n("div",{staticClass:"c-body"},[n("main",{staticClass:"c-main"},[n("CContainer",{attrs:{fluid:""}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)],1)]),n("TheFooter")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CSidebar",{attrs:{fixed:"",minimize:t.minimize,show:t.show},on:{"update:show":function(e){t.show=e}}},[n("CSidebarBrand",{staticClass:"pt-3 pb-3",attrs:{imgFull:{width:118,height:36,alt:"Logo",src:"img/brand/ALKES.png"},imgMinimized:{width:118,height:36,alt:"Logo",src:"img/brand/ALKES.png"},wrappedInLink:{href:"/",target:"_self"}}}),n("CRenderFunction",{attrs:{flat:"","content-to-render":t.nav}}),n("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(e){t.minimize=!t.minimize}}})],1)},i=[],s=(JSON.parse(localStorage.getItem("menu")),{name:"TheSidebar",data:function(){return{menu:JSON.parse(localStorage.menu),minimize:!1,nav:[{_name:"CSidebarNav",_children:JSON.parse(localStorage.menu)}],show:"responsive"}},mounted:function(){var t=this;this.$root.$on("toggle-sidebar",(function(){var e=!0===t.show||"responsive"===t.show;t.show=!e&&"responsive"})),this.$root.$on("toggle-sidebar-mobile",(function(){var e="responsive"===t.show||!1===t.show;t.show=!!e||"responsive"}))}}),c=s,u=n("2877"),l=Object(u["a"])(c,r,i,!1,null,null,null),d=l.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[n("CToggler",{directives:[{name:"c-emit-root-event",rawName:"v-c-emit-root-event:toggle-sidebar-mobile",arg:"toggle-sidebar-mobile"}],staticClass:"ml-3 d-lg-none",attrs:{"in-header":""}}),n("CToggler",{directives:[{name:"c-emit-root-event",rawName:"v-c-emit-root-event:toggle-sidebar",arg:"toggle-sidebar"}],staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""}}),n("CHeaderBrand",{staticClass:"mx-auto d-lg-none pt-2 pd-2",attrs:{src:"img/brand/ALKES.png",width:"77",height:"36",alt:"ALKES Logo"}}),n("CHeaderNav",{staticClass:"mr-4"},[n("TheHeaderDropdownAccnt")],1),n("CSubheader",{staticClass:"px-3"},[n("CBreadcrumbRouter",{staticClass:"border-0"})],1)],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:t._u([{key:"toggler",fn:function(){return[n("CHeaderNavLink",[n("div",{staticClass:"c-avatar"},[n("img",{staticClass:"c-avatar-img ",attrs:{src:"https://young-temple-67589.herokuapp.com/"+t.user.foto,width:"70",height:"70"}})])])]},proxy:!0}])},[n("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[n("strong",[t._v("Account")])]),n("CDropdownItem",[n("router-link",{attrs:{to:"/profile"}},[n("CIcon",{attrs:{name:"cil-user"}}),t._v(" Profil ")],1)],1),7==t.data.level?n("CDropdownItem",[n("router-link",{staticClass:"d-block w-100",attrs:{to:"/notification",disabled:t.jumlahNotif>0}},[n("CIcon",{attrs:{name:"cil-bell"}}),t._v(" Notifikasi "),n("CBadge",{staticClass:"text-right ml-4",attrs:{color:t.jumlahNotif>0?"info":"secondary"}},[t._v(t._s(t.jumlahNotif))])],1)],1):t._e(),n("CDropdownItem",[n("span",{on:{click:t.logout}},[n("CIcon",{attrs:{name:"cil-lock-locked"}}),t._v(" Keluar ")],1)])],1)},p=[],g=n("8e44"),b={name:"TheHeaderDropdownAccnt",data:function(){return{jumlahNotif:0,data:"",user:""}},methods:{logout:function(){var t=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan keluar dari aplikasi yang nyaman ini",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?t.$store.dispatch("logout").then((function(){return t.$swal.close()})).then((function(){return t.$router.replace("/login")})):t.$swal.close()}))}},created:function(){var t=this;Object(g["a"])(this).then((function(e){t.jumlahNotif=e.length})).catch((function(t){return console.error("Notif error "+t)}));var e=JSON.parse(localStorage.user);Object(g["f"])(this,"https://young-temple-67589.herokuapp.com/api/karyawan/"+e.id,{method:"post",headers:{Authorization:"bearer "+localStorage.token}}).then((function(e){t.user=e})).catch((function(t){return console.error(t),!1}))}},w=b,v=(n("6906"),Object(u["a"])(w,m,p,!1,null,"50d8e9e2",null)),C=v.exports,k={name:"TheHeader",components:{TheHeaderDropdownAccnt:C}},$=k,S=(n("1891"),Object(u["a"])($,h,f,!1,null,"c87f9040",null)),_=S.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CFooter",[n("div",{staticClass:"d-flex justify-content-center mx-auto"},[n("a",{attrs:{href:"https://icommits.co.id",target:"_blank"}},[t._v("Alkes")]),n("span",{staticClass:"ml-1"},[t._v("© 2019 Icommits.")])])])},T=[],j={name:"TheFooter"},N=j,x=Object(u["a"])(N,y,T,!1,null,null,null),O=x.exports,L={name:"TheContainer",components:{TheSidebar:d,TheHeader:_,TheFooter:O}},A=L,D=(n("63e2"),Object(u["a"])(A,a,o,!1,null,"a1338ab2",null));e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-a2ee5d52.b254eddc.js.map