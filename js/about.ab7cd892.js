(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0c55":function(e,t,s){"use strict";s("b802")},"28d3":function(e,t,s){"use strict";s("a7be")},3275:function(e,t,s){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,s){var a=s("1d80"),r=s("5899"),n="["+r+"]",o=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),u=function(e){return function(t){var s=String(a(t));return 1&e&&(s=s.replace(o,"")),2&e&&(s=s.replace(i,"")),s}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,s){var a=s("861d"),r=s("d2bb");e.exports=function(e,t,s){var n,o;return r&&"function"==typeof(n=t.constructor)&&n!==s&&a(o=n.prototype)&&o!==s.prototype&&r(e,o),e}},a7be:function(e,t,s){},a9e3:function(e,t,s){"use strict";var a=s("83ab"),r=s("da84"),n=s("94ca"),o=s("6eeb"),i=s("5135"),u=s("c6b6"),m=s("7156"),c=s("c04e"),h=s("d039"),g=s("7c73"),l=s("241c").f,p=s("06cf").f,f=s("9bf2").f,d=s("58a8").trim,v="Number",y=r[v],N=y.prototype,b=u(g(N))==v,T=function(e){var t,s,a,r,n,o,i,u,m=c(e,!1);if("string"==typeof m&&m.length>2)if(m=d(m),t=m.charCodeAt(0),43===t||45===t){if(s=m.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(m.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+m}for(n=m.slice(2),o=n.length,i=0;i<o;i++)if(u=n.charCodeAt(i),u<48||u>r)return NaN;return parseInt(n,a)}return+m};if(n(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var _,M=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof M&&(b?h((function(){N.valueOf.call(s)})):u(s)!=v)?m(new y(T(t)),s,M):T(t)},I=a?l(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;I.length>A;A++)i(y,_=I[A])&&!i(M,_)&&f(M,_,p(y,_));M.prototype=N,N.constructor=M,o(r,v,M)}},b802:function(e,t,s){},dc6f:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v(e._s(this.$route.params.name))]),s("MessageList",{attrs:{threadTimestamp:e.$route.params.timestamp,threadName:e.$route.params.name,messages:e.messages}}),s("CreateMessage",{attrs:{threadName:e.$route.params.name,threadTimestamp:e.$route.params.timestamp}})],1)},r=[],n=(s("a9e3"),s("b0c0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.messages,(function(t){return s("span",{key:t.hash},[s("Message",{attrs:{hoverTarget:e.hoverTarget,threadName:e.$route.params.name,threadTimestamp:e.$route.params.timestamp,msg:t}})],1)})),0)}),o=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{message:!0,highlight:e.hoverTarget==e.msg.hash}},[s("span",{staticClass:"msgheader"},[s("p",{staticClass:"hash"},[e._v("Hash: "+e._s(e.msg.hash.substring(1,10)))]),s("button",{staticClass:"replybutton",attrs:{type:"button"},on:{click:function(t){return e.openReplyPrompt()}}},[e._v("Reply")]),s("p",{staticClass:"timestamp"},[e._v(e._s(new Date(1e3*e.msg.timestamp).toLocaleString()))])]),s("span",{staticClass:"msgbody"},["replyTarget"in e.msg?s("a",{staticClass:"replyhash",on:{hover:function(t){return e.console.log("hi")},mouseover:function(t){return e.$parent.hoverOn(e.msg.replyTarget)},mouseleave:function(t){return e.$parent.hoverOff()}}},[e._v(" >"+e._s(e.msg.replyTarget.substring(1,10))+" ")]):e._e(),s("p",{staticClass:"messagetext"},[e._v(e._s(e.msg.message))])])])},u=[],m=s("2e0d"),c={created:function(){this.postMessage=m["a"].postMessage,this.generateAddressFromName=m["a"].generateAddressFromName},name:"Message",data:function(){return{hover:!0}},methods:{openReplyPrompt:function(){var e=prompt('Reply to: "'+this.msg.message+'"');if(null!=e){var t={message:e,replyTarget:this.msg.hash},s=this.generateAddressFromName(this.threadName,this.threadTimestamp);this.postMessage(t,s)}},test:function(){console.log("boi"),console.log(this.hoverTarget)}},props:{msg:Object,threadName:String,threadTimestamp:Number,hoverTarget:String}},h=c,g=(s("ece3"),s("2877")),l=Object(g["a"])(h,i,u,!1,null,"76da1d1a",null),p=l.exports,f={name:"MessageList",components:{Message:p},data:function(){return{hoverTarget:null}},methods:{hoverOn:function(e){this.hoverTarget=e},hoverOff:function(){this.hoverTarget=null}},props:{messages:Array,threadName:String,threadTimestamp:Number}},d=f,v=(s("0c55"),Object(g["a"])(d,n,o,!1,null,"6dd07d9a",null)),y=v.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"createmessage"},[s("h3",[e._v("Write new message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageInput,expression:"messageInput"}],staticClass:"createmessagebox",attrs:{type:"text"},domProps:{value:e.messageInput},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.shiftKey?t.ctrlKey||t.altKey||t.metaKey?null:e.newline(t):null}],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.postMessageButton(t)},input:function(t){t.target.composing||(e.messageInput=t.target.value)}}})])},b=[],T={created:function(){this.postMessage=m["a"].postMessage,this.generateAddressFromName=m["a"].generateAddressFromName},name:"CreateMessage",data:function(){return{messageInput:null}},props:{threadName:String,threadTimestamp:Number},methods:{newline:function(){this.messageInput="".concat(this.messageInput,"\n")},postMessageButton:function(){console.log("threadNames"),console.log(this.threadName);var e=this.generateAddressFromName(this.threadName,this.threadTimestamp),t=this.messageInput;this.postMessage({message:t},e),this.messageInput=""}}},_=T,M=(s("28d3"),Object(g["a"])(_,N,b,!1,null,"8ad9c140",null)),I=M.exports,A=s("56d7"),E={created:function(){this.fetchMessages=m["a"].fetchMessages,this.generateAddressFromName=m["a"].generateAddressFromName},name:"ThreadViewer",components:{MessageList:y,CreateMessage:I},data:function(){return{messages:[],threadAdress:null,intervalid1:null}},methods:{fetchMessagesforThread:function(){this.fetchMessages(this.threadAdress,this.messages)},startAutoFetchingMessages:function(){this.fetchMessagesforThread(),console.log("refresh time is: "+1e3*A["globalSettings"].refreshTime),A["globalSettings"].refreshTime>0&&(this.intervalid1=setInterval(function(){this.fetchMessagesforThread()}.bind(this),1e3*A["globalSettings"].refreshTime))},stopAutoFetchingMessages:function(){clearInterval(this.intervalid1)}},props:{name:String,timestamp:Number},beforeMount:function(){this.threadAdress=this.generateAddressFromName(this.$route.params.name,this.$route.params.timestamp),this.startAutoFetchingMessages()},mounted:function(){},beforeDestroy:function(){this.stopAutoFetchingMessages()}},k=E,C=Object(g["a"])(k,a,r,!1,null,null,null);t["default"]=C.exports},ece3:function(e,t,s){"use strict";s("3275")}}]);
//# sourceMappingURL=about.ab7cd892.js.map