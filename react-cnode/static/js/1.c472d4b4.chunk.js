(this["webpackJsonpreact-text"]=this["webpackJsonpreact-text"]||[]).push([[1],{156:function(e,t,n){"use strict";function r(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.href.split("?").length>1&&window.location.href.split("?")[1].match(t);return n?decodeURIComponent(n[2]):null}function o(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a}));var a=function(e){if(!e)return"";var t=new Date(e),n=(new Date).getTime()-t.getTime();return n<0?"":n/1e3<30?"\u521a\u521a":n/1e3<60?parseInt(n/1e3)+"\u79d2\u524d":n/6e4<60?parseInt(n/6e4)+"\u5206\u949f\u524d":n/36e5<24?parseInt(n/36e5)+"\u5c0f\u65f6\u524d":n/864e5<31?parseInt(n/864e5)+"\u5929\u524d":n/2592e6<12?parseInt(n/2592e6)+"\u6708\u524d":parseInt(n/31536e6)+"\u5e74\u524d"}},159:function(e,t,n){"use strict";var r=n(0),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var a=function(e){var t=e.animate,n=e.backgroundColor,a=e.backgroundOpacity,i=e.baseUrl,l=e.children,c=e.foregroundColor,u=e.foregroundOpacity,s=e.gradientRatio,f=e.uniqueKey,d=e.interval,p=e.rtl,m=e.speed,h=e.style,v=e.title,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),y=f||Math.random().toString(36).substring(6),g=y+"-diff",E=y+"-animated-diff",w=y+"-aria",O=p?{transform:"scaleX(-1)"}:null,j="0; "+d+"; 1",x=m+"s";return Object(r.createElement)("svg",o({"aria-labelledby":w,role:"img",style:o(o({},h),O)},b),v?Object(r.createElement)("title",{id:w},v):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+i+"#"+g+")",style:{fill:"url("+i+"#"+E+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:g},l),Object(r.createElement)("linearGradient",{id:E},Object(r.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:a},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-s+"; "+-s+"; 1",keyTimes:j,dur:x,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:u},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-s/2+"; "+-s/2+"; "+(1+s/2),keyTimes:j,dur:x,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:a},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+s),keyTimes:j,dur:x,repeatCount:"indefinite"})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var i=function(e){return e.children?Object(r.createElement)(a,o({},e)):Object(r.createElement)(l,o({},e))},l=function(e){return Object(r.createElement)(i,o({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=i},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=d(o),i=d(n(14)),l=d(n(1)),c=n(163),u=d(n(164)),s=d(n(165)),f=d(n(166));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,b=0,y=0,g=0,E="data-lazyload-listened",w=[],O=[],j=!1;try{var x=Object.defineProperty({},"passive",{get:function(){j=!0}});window.addEventListener("test",null,x)}catch(R){}var _=!!j&&{capture:!1,passive:!0},C=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,u.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),r=void 0,o=void 0,a=void 0,l=void 0;try{var c=t.getBoundingClientRect();r=c.top,o=c.left,a=c.height,l=c.width}catch(R){r=v,o=b,a=g,l=y}var u=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,f=Math.max(r,0),d=Math.max(o,0),p=Math.min(u,r+a)-f,m=Math.min(s,o+l)-d,h=void 0,E=void 0,w=void 0,O=void 0;try{var j=n.getBoundingClientRect();h=j.top,E=j.left,w=j.height,O=j.width}catch(R){h=v,E=b,w=g,O=y}var x=h-f,_=E-d,C=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return x-C[0]<=p&&x+w+C[1]>=0&&_-C[0]<=m&&_+O+C[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(R){n=v,r=g}var a=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=a&&n+r+l[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},k=function(){O.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),O=[]},M=function(){for(var e=0;e<w.length;++e){var t=w[e];C(t)}k()},N=void 0,P=null,T=function(e){function t(e){p(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return h(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===N||"debounce"===N&&void 0===this.props.debounce;if(n&&((0,c.off)(e,"scroll",P,_),(0,c.off)(window,"resize",P,_),P=null),P||(void 0!==this.props.debounce?(P=(0,s.default)(M,"number"===typeof this.props.debounce?this.props.debounce:300),N="debounce"):void 0!==this.props.throttle?(P=(0,f.default)(M,"number"===typeof this.props.throttle?this.props.throttle:300),N="throttle"):P=M),this.props.overflow){var r=(0,u.default)(i.default.findDOMNode(this));if(r&&"function"===typeof r.getAttribute){var o=+r.getAttribute(E)+1;1===o&&r.addEventListener("scroll",P,_),r.setAttribute(E,o)}}else if(0===w.length||n){var a=this.props,l=a.scroll,d=a.resize;l&&(0,c.on)(e,"scroll",P,_),d&&(0,c.on)(window,"resize",P,_)}w.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,u.default)(i.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(E)-1;0===t?(e.removeEventListener("scroll",P,_),e.removeAttribute(E)):e.setAttribute(E,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!==typeof window&&((0,c.off)(window,"resize",P,_),(0,c.off)(window,"scroll",P,_))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:a.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(o.Component);T.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},T.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var D=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){p(this,o);var e=m(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+D(t),e}return h(o,n),r(o,[{key:"render",value:function(){return a.default.createElement(T,e,a.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=T,t.forceCheck=M,t.forceVisible=function(){for(var e=0;e<w.length;++e){var t=w[e];t.visible=!0,t.forceUpdate()}k()}},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),a=o.position,i=o.overflow,l=o["overflow-x"],c=o["overflow-y"];if("static"===a&&t)r=r.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(c))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,o=void 0,a=void 0,i=void 0,l=void 0,c=function c(){var u=+new Date-i;u<t&&u>=0?r=setTimeout(c,t-u):(r=null,n||(l=e.apply(a,o),r||(a=null,o=null)))};return function(){a=this,o=arguments,i=+new Date;var u=n&&!r;return r||(r=setTimeout(c,t)),u&&(l=e.apply(a,o),a=null,o=null),l}}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,o;return t||(t=250),function(){var a=n||this,i=+new Date,l=arguments;r&&i<r+t?(clearTimeout(o),o=setTimeout((function(){r=i,e.apply(a,l)}),t)):(r=i,e.apply(a,l))}}},167:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(159),i=Object(r.memo)((function(e){var t=e.style;return o.a.createElement("div",{style:t},[0,0,0,0,0,0].map((function(e,t){return o.a.createElement(a.a,{key:t,width:"100%",speed:1,backgroundColor:"#eee",foregroundColor:"#f5f5f5",viewBox:"0 0 380 110"},o.a.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),o.a.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),o.a.createElement("rect",{x:"0",y:"56",width:"380",height:"12",rx:"6"}),o.a.createElement("rect",{x:"0",y:"78",width:"300",height:"6",rx:"3"}),o.a.createElement("rect",{x:"0",y:"100",width:"380",height:"0.5"}),o.a.createElement("circle",{cx:"20",cy:"20",r:"20"}))})))}));t.a=i},169:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(48),i=n(162),l=n.n(i),c=n(156),u=Object(r.memo)((function(e){var t=e.id,n=e.author,i=n.avatar_url,u=n.loginname,s=(e.create_at,e.title),f=e.reply_count,d=e.visit_count,p=e.last_reply_at,m=e.tab,h=e.good,v=e.top,b=Object(r.useMemo)((function(){var e="";if(h)e="\u7cbe\u534e";else if(v)e="\u7f6e\u9876";else switch(m){case"share":e="\u5206\u4eab";break;case"ask":e="\u95ee\u7b54";break;case"job":e="\u62db\u8058";break;default:e="\u6682\u65e0"}return e}),[h,m,v]);return o.a.createElement("li",{className:"cn-topics-item ui-border-b"},o.a.createElement(a.b,{to:{pathname:"/my",search:"username=".concat(u)}},o.a.createElement("div",{className:"cn-topics-item__hd"},o.a.createElement("div",{className:"user-avatar"},o.a.createElement(l.a,{key:t},o.a.createElement("img",{src:i,alt:"\u5934\u50cf"}))),o.a.createElement("div",{className:"user-info"},o.a.createElement("p",{className:"user-name"},u),o.a.createElement("p",{className:"create-at"},Object(c.c)(p))))),o.a.createElement(a.b,{to:{pathname:"/details",search:"id=".concat(t)}},o.a.createElement("div",{className:"cn-topics-item__bd"},h||v||m?o.a.createElement("span",{className:"put-top"},b):null,s)),void 0!==f&&void 0!==d?o.a.createElement("div",{className:"cn-topics-item__ft"},o.a.createElement("span",null,o.a.createElement("i",{className:"ued-mobile"},"\ue666"),f),o.a.createElement("span",null,o.a.createElement("i",{className:"ued-mobile"},"\ue637"),d)):null)})),s=(n(201),n(167)),f=Object(r.memo)((function(e){var t=e.topics,n=e.style;return o.a.createElement(o.a.Fragment,null,t.length?o.a.createElement("ul",{className:"cn-topics-list",style:n},t.map((function(e){return o.a.createElement(u,Object.assign({key:e.id},e))}))):o.a.createElement(s.a,{style:{padding:"15px 15px 0 15px"}}))}));t.a=f},201:function(e,t,n){}}]);
//# sourceMappingURL=1.c472d4b4.chunk.js.map