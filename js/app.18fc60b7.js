(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],h=0,l=[];h<i.length;h++)a=i[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&l.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c333905a"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"e9f9c2b8"}[e]+".css",s=u.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],h=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(h===n||h===s))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){c=l[i],h=c.getAttribute("data-href");if(h===n||h===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var c,h=document.createElement("script");h.charset="utf-8",h.timeout=120,u.nc&&h.setAttribute("nonce",u.nc),h.src=i(e);var l=new Error;c=function(t){h.onerror=h.onload=null,clearTimeout(f);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}s[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:h})}),12e4);h.onerror=h.onload=c,document.head.appendChild(h)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=h;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},1847:function(e,t,r){},"1fa8":function(e,t,r){"use strict";r("fe78")},2:function(e,t){},"2e0d":function(e,t,r){"use strict";r("a434"),r("a15b"),r("b0c0"),r("c740");var n=r("0ed6"),a=function(e,t,r){if(0==e.length)return e.push(t),t;var n=e.length-1;while(n>=0){if(r){if(e[n]["timestamp"]>t["timestamp"])return e.splice(n+1,0,t),e}else if(e[n]["timestamp"]<t["timestamp"])return e.splice(n+1,0,t),e;n--}return e.splice(0,0,t),e},s=function(e){for(var t=new Array(e[0].lastIndex),r=0;r<=e[0].lastIndex;r++)t[e[r].currentIndex]=e[r].signatureMessageFragment;return n.utf8StringFromTrytes(t.join())};t["a"]={addMessage:function(e,t){var r=JSON.parse(s(e));r["timestamp"]=e[0].timestamp,r["hash"]=e[0].hash,console.log(r),t.push(r)},fetchMessages:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return console.log("fetching..."),this.$IOTA.findTransactionObjects({addresses:[e]}).then((function(e){for(var o=0;o<e.length;o++){var i=e[o];r.$IOTA.getBundle(i.hash).then((function(e){var r=s(e),o=JSON.parse(r);return o["message"]||o["name"]?(t.findIndex((function(t){return t["hash"]==e[0].hash}))<0&&(o["timestamp"]=e[0].timestamp,o["hash"]=e[0].hash,a(t,o,n)),null):null})).catch((function(){return null}))}return null})).catch((function(){return null}))},postMessage:function(e,t){var r=this,n=JSON.stringify(e),a=this.$UTFConverter.trytesFromUTF8String(n),s="PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX",o=3,i=9,u=[{value:0,address:t,message:a}];return this.$IOTA.prepareTransfers(s,u).then((function(e){return r.$IOTA.sendTrytes(e,o,i)})).catch((function(e){return console.error(e),null}))},postThread:function(e,t){var r=this,n=JSON.stringify(e),a=this.$UTFConverter.trytesFromUTF8String(n),s="PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX",o=3,i=9,u=[{value:0,address:t,message:a}];return this.$IOTA.prepareTransfers(s,u).then((function(e){return r.$IOTA.sendTrytes(e,o,i)}))},generateAddressFromName:function(e,t){return this.$boardName+this.$Converter.asciiToTrytes(this.$MD5(e+t))}}},3:function(e,t){},4:function(e,t){},"4bfb":function(e,t,r){"use strict";r("1847")},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"globalSettings",(function(){return P}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"refreshTimeSetter"},[r("p",[e._v("Refresh interval")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.refreshTime,expression:"refreshTime"}],attrs:{name:"refreshtime",id:"refreshtime"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.refreshTime=t.target.multiple?r:r[0]},function(t){return e.onChangeRefreshTime(t)}]}},[r("option",{attrs:{value:"0"}},[e._v("Off")]),r("option",{attrs:{value:"30"}},[e._v("30s")]),r("option",{attrs:{value:"10"}},[e._v("10s")]),r("option",{attrs:{value:"4"}},[e._v("4s")]),r("option",{attrs:{value:"2"}},[e._v("2s")])])]),e._m(0),r("router-view")],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("img",{staticClass:"globe",attrs:{src:r("9dee")}}),n("h1",{staticClass:"title"},[e._v("TangleBoard")])])}],o={name:"App",data:function(){return{refreshTime:P.refreshTime}},methods:{onChangeRefreshTime:function(e){P.refreshTime=e.target.value,this.refreshTime=e.target.value}}},i=o,u=(r("034f"),r("2877")),c=Object(u["a"])(i,a,s,!1,null,null,null),h=c.exports,l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("ThreadList",{attrs:{msg:"Threads"}}),r("CreateThread",{attrs:{msg:"Create a new thread"}})],1)},d=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"threadlist"},[r("h1",{staticClass:"oswald"},[e._v(e._s(e.msg))]),r("table",{staticClass:"threads"},e._l(e.threads,(function(t){return r("tr",{key:t.hash},[r("th",[r("router-link",{attrs:{to:{name:"threadviewer",params:{name:t["name"],timestamp:t["timestamp"]}}}},[e._v(e._s(t["name"]))])],1),r("th",[e._v(e._s(new Date(1e3*t["timestamp"]).toLocaleString()))])])})),0)])},p=[],v=r("2e0d"),A={created:function(){this.fetchMessages=v["a"].fetchMessages},name:"ThreadList",data:function(){return{threads:[],intervalid1:null}},methods:{fetchThreads:function(){this.fetchMessages(this.$boardAddress,this.threads,!0)},startAutoFetchingThreads:function(){this.fetchThreads(),P.refreshTime>0&&(this.intervalid1=setInterval(function(){this.fetchThreads()}.bind(this),1e3*P.refreshTime))},stopAutoFetchingThreads:function(){clearInterval(this.intervalid1)}},props:{msg:String},mounted:function(){this.startAutoFetchingThreads()},beforeDestroy:function(){this.stopAutoFetchingThreads()}},g=A,T=(r("57fd"),Object(u["a"])(g,m,p,!1,null,"29fd88c4",null)),b=T.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"createthread"},[r("h1",{staticClass:"oswald"},[e._v(e._s(e.msg))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.threadNameInput,expression:"threadNameInput"}],attrs:{type:"text"},domProps:{value:e.threadNameInput},on:{input:function(t){t.target.composing||(e.threadNameInput=t.target.value)}}}),r("button",{on:{click:function(t){return e.createThread()}}},[e._v("Create")])])},C=[],_={created:function(){this.postThread=v["a"].postThread},name:"CreateThread",data:function(){return{threadNameInput:""}},props:{msg:String},methods:{createThread:function(){var e=this,t=this.threadNameInput,r=null;console.log(this.postThread),this.postThread({name:t},this.$boardAddress).then((function(n){r=n[0].timestamp,console.log("timeSTAAAAAAAMP",r),console.log(n[0].hash),e.$router.push({name:"threadviewer",params:{name:t,timestamp:r}})})).catch((function(e){console.error(e)})),this.threadNameInput=""}}},I=_,w=(r("4bfb"),r("1fa8"),Object(u["a"])(I,y,C,!1,null,"08d2864a",null)),O=w.exports,E={name:"Home",data:function(){return{refreshTime:P.refreshTime}},methods:{onChangeRefreshTime:function(e){P.refreshTime=e.target.value,this.refreshTime=e.target.value}},components:{ThreadList:b,CreateThread:O}},M=E,N=Object(u["a"])(M,f,d,!1,null,null,null),S=N.exports;n["a"].use(l["a"]);var $=[{path:"/",name:"Home",component:S},{path:"/threadviewer/:name/:timestamp",name:"threadviewer",component:function(){return r.e("about").then(r.bind(null,"dc6f"))}}],x=new l["a"]({routes:$}),F=x;n["a"].config.productionTip=!1,n["a"].prototype.$boardAddress="DATTTTRALIZEDCHANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",n["a"].prototype.$boardName="DAHENTRALIZEDCHAN",n["a"].prototype.$IOTA=r("b7ec").composeAPI({provider:"https://nodes.devnet.iota.org:443"}),n["a"].prototype.$UTFConverter=r("0ed6"),n["a"].prototype.$Converter=r("17c8"),n["a"].prototype.$MD5=r("6821");var P=new n["a"]({data:{refreshTime:4}});new n["a"]({router:F,render:function(e){return e(h)}}).$mount("#app")},"57fd":function(e,t,r){"use strict";r("c663")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,r){},9:function(e,t){},"9dee":function(e,t,r){e.exports=r.p+"img/globe2.9111d003.gif"},c663:function(e,t,r){},fe78:function(e,t,r){}});
//# sourceMappingURL=app.18fc60b7.js.map