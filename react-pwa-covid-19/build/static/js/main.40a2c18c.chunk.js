(this["webpackJsonpreact-pwa-covid-19"]=this["webpackJsonpreact-pwa-covid-19"]||[]).push([[0],{27:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},33:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),o=a.n(r),c=(a(32),a(11)),i=(a(33),a(5)),s=a(25),u=(a(34),a(9)),m=a.n(u),d=a(26),h=a(10);var g=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),u=Object(c.a)(o,2),g=u[0],E=u[1],f=Object(n.useState)(""),p=Object(c.a)(f,2),v=p[0],w=p[1];Object(n.useEffect)((function(){m.a.all([m.a.get("https://corona.lmao.ninja/v2/all"),m.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){console.log(e[0].data),console.log(e[1].data),r(e[0].data),E(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var y=new Date(parseInt(a.updated)).toString(),x=g.filter((function(e){return""!==v?e.country.toLowerCase().includes(v):e})).map((function(e,t){return l.a.createElement(i.a,{key:t,bg:"light",text:"dark",className:"text-center",style:{margin:"10px"}},l.a.createElement(i.a.Img,{variant:"top",src:e.countryInfo.flag,style:{height:"200px"}}),l.a.createElement(i.a.Body,null,l.a.createElement(i.a.Title,null,e.country),l.a.createElement(i.a.Text,null,"Cases ",e.cases),l.a.createElement(i.a.Text,null,"Deaths ",e.deaths),l.a.createElement(i.a.Text,null,"Recovered ",e.recovered),l.a.createElement(i.a.Text,null,"Today's cases ",e.todayCases),l.a.createElement(i.a.Text,null,"Today's deaths ",e.todayDeaths),l.a.createElement(i.a.Text,null,"Active ",e.active),l.a.createElement(i.a.Text,null,"Critical ",e.critical)))}));return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h2",{style:{textAlign:"center",color:"white"}},"Covid-19 Live Status "),l.a.createElement("br",null),l.a.createElement(s.a,{style:{margin:"10px"}},l.a.createElement(i.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(i.a.Body,null,l.a.createElement(i.a.Title,null,"Cases"),l.a.createElement(i.a.Text,null,a.cases)),l.a.createElement(i.a.Footer,null,l.a.createElement("small",null,"Last updated ",y))),l.a.createElement(i.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(i.a.Body,null,l.a.createElement(i.a.Title,null,"Deaths"),l.a.createElement(i.a.Text,null,a.deaths)),l.a.createElement(i.a.Footer,null,l.a.createElement("small",null,"Last updated 3 mins ago"))),l.a.createElement(i.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(i.a.Body,null,l.a.createElement(i.a.Title,null,"Recovered"),l.a.createElement(i.a.Text,null,a.recovered)),l.a.createElement(i.a.Footer,null,l.a.createElement("small",null,"Last updated 3 mins ago")))),l.a.createElement("br",null),l.a.createElement(h.a,{style:{margin:"10px"}},l.a.createElement(h.a.Group,{controlId:"formGroupSearch"},l.a.createElement(h.a.Control,{type:"email",placeholder:"Search Country",onChange:function(e){return w(e.target.value)}}))),l.a.createElement(d.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},x))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.40a2c18c.chunk.js.map