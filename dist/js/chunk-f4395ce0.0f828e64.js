(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4395ce0"],{1589:function(t,e,n){"use strict";var a=n("3357"),o=n.n(a);o.a},"1da3":function(t,e,n){},3357:function(t,e,n){},"511c":function(t,e,n){"use strict";var a=n("1da3"),o=n.n(a);o.a},"8e44":function(t,e,n){"use strict";function a(t,e,n,a,o){return new Promise((function(r,i){t.$http.post(e,n,a).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).then((function(){r()})).catch((function(t){i(t)}))}))}function o(t,e,n,a){return new Promise((function(o,r){t.$http.get(e,n).then((function(t){var e=URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).then((function(){o()})).catch((function(t){r(t)}))}))}function r(t){return new Promise((function(e,n){t.$http.get("https://young-temple-67589.herokuapp.com/api/po",{headers:{Authorization:"bearer "+localStorage.token}}).then((function(t){for(var e=[],n=[],a=0;a<t.data.length;a++){var o=new Date(t.data[a].date_line),r=new Date(o.setDate(o.getDate()-2));e.push({date:r,data:t.data[a],link:"/po/"+t.data[a].id})}for(var i=0;i<e.length;i++){var s=new Date,c=new Date(e[i].date);s==c&&n.push({date:e[i].date,data:e[i]})}return localStorage.setItem("notif",JSON.stringify(n)),n})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},"9a70":function(t,e,n){"use strict";var a=n("ba3c"),o=n.n(a);o.a},ba3c:function(t,e,n){},f593:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-app"},[n("TheSidebar"),n("div",{staticClass:"c-wrapper"},[n("TheHeader"),n("div",{staticClass:"c-body"},[n("main",{staticClass:"c-main"},[n("CContainer",{attrs:{fluid:""}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)],1)]),n("TheFooter")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CSidebar",{attrs:{fixed:"",minimize:t.minimize,show:t.show},on:{"update:show":function(e){t.show=e}}},[n("CSidebarBrand",{staticClass:"pt-3 pb-3",attrs:{imgFull:{width:118,height:36,alt:"Logo",src:"img/brand/ALKES.png"},imgMinimized:{width:118,height:36,alt:"Logo",src:"img/brand/ALKES.png"},wrappedInLink:{href:"https://localhost:8080",target:"_self"}}}),n("CRenderFunction",{attrs:{flat:"","content-to-render":t.nav}}),n("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(e){t.minimize=!t.minimize}}})],1)},i=[],s=(JSON.parse(localStorage.getItem("menu")),{name:"TheSidebar",data:function(){return{menu:JSON.parse(localStorage.menu),minimize:!1,nav:[{_name:"CSidebarNav",_children:JSON.parse(localStorage.menu)}],show:"responsive"}},mounted:function(){var t=this;this.$root.$on("toggle-sidebar",(function(){var e=!0===t.show||"responsive"===t.show;t.show=!e&&"responsive"})),this.$root.$on("toggle-sidebar-mobile",(function(){var e="responsive"===t.show||!1===t.show;t.show=!!e||"responsive"}))}}),c=s,l=n("2877"),d=Object(l["a"])(c,r,i,!1,null,null,null),u=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[n("CToggler",{directives:[{name:"c-emit-root-event",rawName:"v-c-emit-root-event:toggle-sidebar-mobile",arg:"toggle-sidebar-mobile"}],staticClass:"ml-3 d-lg-none",attrs:{"in-header":""}}),n("CToggler",{directives:[{name:"c-emit-root-event",rawName:"v-c-emit-root-event:toggle-sidebar",arg:"toggle-sidebar"}],staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""}}),n("CHeaderBrand",{staticClass:"mx-auto d-lg-none pt-2 pd-2",attrs:{src:"img/brand/ALKES.png",width:"77",height:"36",alt:"ALKES Logo"}}),n("CHeaderNav",{staticClass:"mr-4"},[n("TheHeaderDropdownAccnt")],1),n("CSubheader",{staticClass:"px-3"},[n("CBreadcrumbRouter",{staticClass:"border-0"})],1)],1)},m=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:t._u([{key:"toggler",fn:function(){return[n("CHeaderNavLink",[n("div",{staticClass:"c-avatar"},[n("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/6.jpg"}})])])]},proxy:!0}])},[n("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[n("strong",[t._v("Account")])]),n("CDropdownItem",[n("router-link",{attrs:{to:"/profile"}},[n("CIcon",{attrs:{name:"cil-user"}}),t._v(" Profil ")],1)],1),7==t.data.level?n("CDropdownItem",[n("router-link",{staticClass:"d-block w-100",attrs:{to:"/notification",disabled:t.jumlahNotif>0}},[n("CIcon",{attrs:{name:"cil-bell"}}),t._v(" Notifikasi "),n("CBadge",{staticClass:"text-right ml-4",attrs:{color:t.jumlahNotif>0?"info":"secondary"}},[t._v(t._s(t.jumlahNotif))])],1)],1):t._e(),n("CDropdownItem",[n("span",{on:{click:t.logout}},[n("CIcon",{attrs:{name:"cil-lock-locked"}}),t._v(" Keluar ")],1)])],1)},p=[],g=n("8e44"),v={name:"TheHeaderDropdownAccnt",data:function(){return{jumlahNotif:0,data:""}},methods:{logout:function(){var t=this;this.$swal({title:"Kamu yakin? :(",text:"Kamu akan keluar dari aplikasi yang nyaman ini",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?t.$store.dispatch("logout").then((function(){return t.$swal.close()})).then((function(){return t.$router.replace("/login")})):t.$swal.close()}))}},created:function(){var t=this;Object(g["a"])(this).then((function(e){t.jumlahNotif=e.length})).catch((function(t){return console.error("Notif error "+t)}))},mounted:function(){this.data=this.$store.getters.userData,console.log(this.data)}},b=v,w=(n("9a70"),Object(l["a"])(b,f,p,!1,null,"048a3190",null)),C=w.exports,k={name:"TheHeader",components:{TheHeaderDropdownAccnt:C}},_=k,S=(n("511c"),Object(l["a"])(_,h,m,!1,null,"0eb166d8",null)),$=S.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CFooter",[n("div",{staticClass:"d-flex justify-content-center mx-auto"},[n("a",{attrs:{href:"https://icommits.co.id",target:"_blank"}},[t._v("Alkes")]),n("span",{staticClass:"ml-1"},[t._v("© 2019 Icommits.")])])])},x=[],j={name:"TheFooter"},D=j,T=Object(l["a"])(D,N,x,!1,null,null,null),y=T.exports,L={name:"TheContainer",components:{TheSidebar:u,TheHeader:$,TheFooter:y}},O=L,A=(n("1589"),Object(l["a"])(O,a,o,!1,null,"17084b42",null));e["default"]=A.exports}}]);
//# sourceMappingURL=chunk-f4395ce0.0f828e64.js.map