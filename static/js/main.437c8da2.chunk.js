(this.webpackJsonpecnnp=this.webpackJsonpecnnp||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/gallery1.af16a1a9.jpg"},30:function(e,t,n){e.exports=n.p+"static/media/gallery2.f3253ad3.jpg"},31:function(e,t,n){e.exports=n.p+"static/media/gallery3.e7081544.jpg"},34:function(e,t,n){e.exports=n(54)},39:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),i=(n(39),n(12)),l=n(13),s=n(15),u=n(14),m=n(55),d=n(56),f=n(57),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{sm:"4"}),r.a.createElement(f.a,{sm:"4"},r.a.createElement("hr",null),r.a.createElement("div",{className:"twelve columns"},r.a.createElement("div",{class:"widget"},r.a.createElement("h5",{className:"footer-text"},"EC&NP"))),r.a.createElement("hr",null)),r.a.createElement(f.a,{sm:"4"}))))}}]),n}(a.Component),v=n(22),E=n(33),h=n(58),g=n(59),b=n(60),w=n(61),x=n(29),j=n.n(x),k=n(30),y=n.n(k),N=n(31),O=n.n(N),C=[{src:"".concat(j.a),altText:"",caption:""},{src:"".concat(y.a),altText:"",caption:""},{src:"".concat(O.a),altText:"",caption:""}],T=function(e){var t=Object(a.useState)(0),n=Object(v.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(!1),l=Object(v.a)(i,2),s=l[0],u=l[1],m=function(){if(!s){var e=c===C.length-1?0:c+1;o(e)}},d=function(){if(!s){var e=0===c?C.length-1:c-1;o(e)}},f=C.map((function(e){return r.a.createElement(E.a,{onExiting:function(){return u(!0)},onExited:function(){return u(!1)},key:e.src},r.a.createElement("img",{className:"image-sizing",src:e.src,alt:e.altText}),r.a.createElement(h.a,{captionText:e.caption,captionHeader:e.caption}))}));return r.a.createElement(g.a,{activeIndex:c,next:m,previous:d},r.a.createElement(b.a,{items:C,activeIndex:c,onClickHandler:function(e){s||o(e)}}),f,r.a.createElement(w.a,{direction:"prev",directionText:"Previous",onClickHandler:d}),r.a.createElement(w.a,{direction:"next",directionText:"Next",onClickHandler:m}))},S=(n(49),n(6)),W=n(62),A=n(63),H=Object(S.d)((function(e){return r.a.createElement("div",{className:""},r.a.createElement(W.a,{className:"navigation",dark:!0,extended:"md"},r.a.createElement(A.a,{href:"/"},"EXHORBI CONSULT & NOLI PUBLISHERS")))})),I=n(64),P=n(65),L=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement(I.a,{className:"jumbotron"},r.a.createElement(T,null),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",{className:"lead"},r.a.createElement(P.a,{color:"primary"},"Exhorbi Consult")),r.a.createElement("p",{className:"lead"},r.a.createElement(P.a,{color:"primary"},"Noli Publishers"))),r.a.createElement("br",null),r.a.createElement(p,null))}}]),n}(a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=n(19);n(53);o.a.render(r.a.createElement(B.a,null,r.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ecnnp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ecnnp","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.437c8da2.chunk.js.map