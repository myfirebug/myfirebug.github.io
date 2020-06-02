(this["webpackJsonpreact-text"]=this["webpackJsonpreact-text"]||[]).push([[6],{154:function(e,t,n){"use strict";n(88);var r=n(34),a=n.n(r),c=n(157),o=n.n(c),i={development:{api:"https://cnodejs.org/api/v1"},production:{api:"https://cnodejs.org/api/v1"}},s=n(158),l=n.n(s),u=function(e){o.a.defaults.baseURL=i.production[e]};function m(e,t,n,r){return n&&u(n),new Promise((function(n,a){o.a.get(e,{params:t,header:r}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}function f(e,t,n,r,a){var c=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];return n&&u(n),new Promise((function(n,i){o.a.post(e,c?l.a.stringify(t):t,{headers:r||{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}},a).then((function(e){n(e)})).catch((function(e){i(e)}))}))}o.a.defaults.timeout=6e4,o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",o.a.interceptors.request.use((function(e){return a.a.loading("loading...",0),e}),(function(e){return Promise.error(e)})),o.a.interceptors.response.use((function(e){return a.a.hide(),200===e.status?Promise.resolve(e.data):Promise.reject(e)}),(function(e){a.a.hide();var t=e.response;if(!t)return Promise.reject(e);t.status;return Promise.reject(e)}));t.a={getTopics:function(e){return m("/topics",e,"api")},getDetails:function(e){return m("/topic/".concat(e),{},"api")},login:function(e){return f("/accesstoken",e,"api")},user:function(e){return m("/user/".concat(e),"","api")},collect:function(e){return f("/topic_collect/collect",e,"api")},de_collect:function(e){return f("/topic_collect/de_collect ",e,"api")},myCollect:function(e){return m("/topic_collect/".concat(e),"","api")},messages:function(e){return m("messages",e,"api")},markOne:function(e,t){return f("/message/mark_one/".concat(e),t,"api")}}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(67);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},159:function(e,t,n){"use strict";var r=n(0),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var c=function(e){var t=e.animate,n=e.backgroundColor,c=e.backgroundOpacity,o=e.baseUrl,i=e.children,s=e.foregroundColor,l=e.foregroundOpacity,u=e.gradientRatio,m=e.uniqueKey,f=e.interval,p=e.rtl,d=e.speed,h=e.style,b=e.title,g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),y=m||Math.random().toString(36).substring(6),O=y+"-diff",v=y+"-animated-diff",E=y+"-aria",j=p?{transform:"scaleX(-1)"}:null,x="0; "+f+"; 1",w=d+"s";return Object(r.createElement)("svg",a({"aria-labelledby":E,role:"img",style:a(a({},h),j)},g),b?Object(r.createElement)("title",{id:E},b):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+O+")",style:{fill:"url("+o+"#"+v+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:O},i),Object(r.createElement)("linearGradient",{id:v},Object(r.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:c},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:x,dur:w,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:x,dur:w,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:c},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:x,dur:w,repeatCount:"indefinite"})))))};c.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var o=function(e){return e.children?Object(r.createElement)(c,a({},e)):Object(r.createElement)(i,a({},e))},i=function(e){return Object(r.createElement)(o,a({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=o},160:function(e,t,n){"use strict";var r=n(155),a=n(0),c=n.n(a),o=n(48),i=(n(161),Object(a.memo)((function(e){var t=e.hash,n=Object(a.useState)([{icon:"&#xe729;",name:"\u9996\u9875",path:"/home"},{icon:"&#xe68a;",name:"\u6d88\u606f",path:"/message"},{icon:"&#xe6a1;",name:"\u6211\u7684",path:"/my"}]),i=Object(r.a)(n,1)[0];return c.a.createElement("div",{className:"cn-footer"},c.a.createElement("ul",{className:"cn-nav"},i.map((function(e,n){return c.a.createElement("li",{className:["cn-nav__item",-1!==t.indexOf(e.path)?"is-active":""].join(" "),key:n},c.a.createElement(o.b,{to:{pathname:e.path}},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:"".concat(e.icon)},className:"ued-mobile"}),c.a.createElement("span",{className:"text"},e.name)))}))))})));t.a=i},161:function(e,t,n){},167:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(159),o=Object(r.memo)((function(e){var t=e.style;return a.a.createElement("div",{style:t},[0,0,0,0,0,0].map((function(e,t){return a.a.createElement(c.a,{key:t,width:"100%",speed:1,backgroundColor:"#eee",foregroundColor:"#f5f5f5",viewBox:"0 0 380 110"},a.a.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),a.a.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),a.a.createElement("rect",{x:"0",y:"56",width:"380",height:"12",rx:"6"}),a.a.createElement("rect",{x:"0",y:"78",width:"300",height:"6",rx:"3"}),a.a.createElement("rect",{x:"0",y:"100",width:"380",height:"0.5"}),a.a.createElement("circle",{cx:"20",cy:"20",r:"20"}))})))}));t.a=o},206:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(35),o=n(4),i=n(154),s=(n(206),n(160)),l=n(48),u=n(167),m=Object(r.memo)((function(e){var t=e.messages,n=e.getMessages,c=e.getMarkOne;Object(r.useEffect)((function(){n()}),[]);var o=Object(r.useCallback)((function(e,t){t||c(e)}),[t]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"cn-message"},t.length?t.map((function(e){return a.a.createElement("div",{onClick:function(){return o(e.id,e.has_read)},key:e.id,className:"cn-message__item ui-border-b "+(e.has_read?"":"is-notread")},a.a.createElement(l.b,{to:{pathname:"/my",search:"username=".concat(e.author.loginname)}},e.author.loginname),"\u56de\u590d\u4e86\u60a8\u7684\u8bdd\u9898",a.a.createElement(l.b,{to:{pathname:"/details",search:"id=".concat(e.topic.id)}},e.topic.title))})):a.a.createElement(u.a,{style:{padding:"15px 15px 0 15px"}})),a.a.createElement(s.a,{hash:"/message"}))}));t.default=Object(c.b)((function(e){return{messages:e.messages}}),{getMessages:function(){return function(e,t){var n={accesstoken:t().userInfo.token};i.a.messages(n).then((function(t){var n;t.success&&e((n=t.data,{type:o.g,data:n}))}))}},getMarkOne:function(e){return function(t,n){var r=n().userInfo.token;r&&i.a.markOne(e,{accesstoken:r}).then((function(n){n.success&&t(function(e){return{type:o.f,id:e}}(e))}))}}})(m)}}]);
//# sourceMappingURL=message.d05d5a48.chunk.js.map