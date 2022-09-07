"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[372,381],{36345:function(e,n,t){var r=t(26234),a=t(59469),u=t(38166),i=(t(44855),t(1222)),o=t(45378),c=t(37091),d=t.n(c),l=t(17856);n.Z=function(e){var n=e.method,t=e.url,c=e.params,s=e.isPlaceholder,f=e.render,p=(0,o.Z)((0,u.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,r){d()({url:t,method:n,params:(0,a.Z)({},JSON.parse(c))}).then((function(n){e(n.data.data||n.data)})).catch((function(e){r(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{refreshDeps:[c,t],ready:Boolean(t)}),m=p.data,h=p.loading,g=p.error;return(0,l.jsx)(l.Fragment,{children:s?(0,l.jsx)(i.Z,{loading:h,error:Boolean(g),nodata:!1,children:f(t?m:null,!t||!g)}):f(t?m:null,!t||!g)})}},1222:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(24082),a=t(58489),u=t(77504),i=t(17856),o=function(e){var n=e.loading,t=e.error,o=e.nodata,c=e.children;return(0,i.jsxs)("div",{className:"app-wrapper",children:[n&&(0,i.jsx)("div",{className:"app-wrapper__loading",children:(0,i.jsx)(r.Z,{})}),t&&!n&&(0,i.jsxs)("div",{className:"app-wrapper__error",children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)("p",{style:{color:"#00000040",margin:"0"},children:"\u52a0\u8f7d\u5931\u8d25"})]}),!n&&!t&&o&&(0,i.jsx)("div",{className:"app-wrapper__nodata",children:(0,i.jsx)(a.Z,{image:a.Z.PRESENTED_IMAGE_SIMPLE})}),!n&&!t&&!o&&c]})}},59372:function(e,n,t){t.r(n);var r=t(59469),a=t(33374),u=t(44855),i=t(61038),o=t(47740),c=t(54662),d=t(36345),l=(t(23381),t(17856)),s={modifyLargeScreenElement:o.x4};n.default=(0,i.$j)((function(e){return{currentPage:e.largeScreen.currentPage,screen:e.largeScreen.screen}}),s)((function(e){var n=e.currentPage,t=e.screen,i=e.modifyLargeScreenElement,o=(0,u.useRef)(null),s=(0,u.useState)(0),f=(0,a.Z)(s,2),p=f[0],m=f[1],h=(0,u.useState)({}),g=(0,a.Z)(h,2),V=g[0],w=g[1];(0,u.useEffect)((function(){V.width&&t.width&&m(Number((V.width/Number(t.width)).toFixed(4)))}),[t.width,V.width]),(0,u.useEffect)((function(){var e=function(){var e;w({width:null===(e=o.current)||void 0===e?void 0:e.offsetWidth})};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[o.current]);return(0,l.jsx)("div",{className:"app-preview",ref:o,children:(0,l.jsx)("div",{className:"app-preview__container",style:{width:t.width,height:t.height,transform:"scale(".concat(p,")"),transformOrigin:"0 0",background:"url(".concat(t.backgroundImage,") no-repeat ").concat(t.backgroundColor,"  0% 0% / 100% 100%")},children:n&&n.widgets?function e(n,t,a){return(0,l.jsx)(l.Fragment,{children:n.map((function(n,u){if(n.widgets){var o=c.Z[n.code]||c.Z[n.type];if(o)return(0,l.jsx)("div",{className:"app-widget__item",style:{position:"absolute",width:n.coordinateValue.width,height:n.coordinateValue.height,left:n.coordinateValue.left,top:n.coordinateValue.top},children:(0,l.jsx)(d.Z,{isPlaceholder:!1,method:n.dataValue.method,url:n.dataValue.url,params:JSON.stringify(n.dataValue.params||{}),render:function(t,a){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o,{options:(0,r.Z)((0,r.Z)({},n.configureValue),n.coordinateValue),children:e(n.widgets,(0,r.Z)((0,r.Z)({},n),{},{dataValue:(0,r.Z)((0,r.Z)({},n.dataValue),{},{mock:n.dataValue.useInterface?t:n.dataValue.mock}),success:a,parentParams:n.dataValue.params}),n)})})}})},n.id)}else{var s=c.Z[n.code]||c.Z[n.type];if(s)return(0,l.jsx)("div",{className:"app-widget__item",style:{position:"absolute",width:n.coordinateValue.width,height:n.coordinateValue.height,left:n.coordinateValue.left,top:n.coordinateValue.top},children:(0,l.jsx)(d.Z,{isPlaceholder:!0,method:n.dataValue.useInterface?"":n.dataValue.method,url:n.dataValue.useInterface?"":t&&t.dataValue.useInterface?t.success?n.dataValue.url:"":n.dataValue.url,params:JSON.stringify(Object.assign((0,r.Z)({},n.dataValue.params),t&&t.dataValue&&t.dataValue.params?t.dataValue.params:{})||{}),render:function(e,u){var o=null;return o=n.dataValue.useInterface&&t&&t.dataValue?t.dataValue.mock:"mock"===n.dataValue.dataType?n.dataValue.mock:u?e:null,(0,l.jsx)(s,{modifyLargeScreenElement:i,parentWidget:a,paramName:n.dataValue.paramName,paramValue:t&&t.parentParams&&n.dataValue.paramName?t.parentParams[n.dataValue.paramName]:"",className:"".concat(n.configureValue.animateName),field:n.dataValue.field,data:o,options:(0,r.Z)((0,r.Z)({},n.configureValue),n.coordinateValue)})}})},n.id)}}))})}(n.widgets):null})})}))},47740:function(e,n,t){t.d(n,{FJ:function(){return o},Hc:function(){return a},JC:function(){return i},L9:function(){return m},UY:function(){return c},WX:function(){return p},iK:function(){return V},ny:function(){return s},o9:function(){return Z},qA:function(){return g},ru:function(){return w},ss:function(){return d},x4:function(){return f},xk:function(){return h},xn:function(){return l},zG:function(){return u}});var r=t(25162),a=function(e){return function(n){n(function(e){return{type:r.OV,datas:e}}(e))}},u=function(e,n){return function(t){t(function(e){return{type:r.zN,data:e}}(e)),n&&n()}},i=function(e,n){return function(t){t(function(e){return{type:r.m,id:e}}(e)),n&&n()}},o=function(e,n,t){return function(a){a(function(e,n){return{type:r.Vo,id:e,data:n}}(e,n)),t&&t()}},c=function(e,n){return function(t){t(function(e){return{type:r.zI,id:e}}(e)),n&&n()}},d=function(e,n){return function(t){t(function(e,n){return{type:r.WI,data:e,groupId:n}}(e,n))}},l=function(){return function(e){e({type:r.Kq})}},s=function(e,n){return function(t){t(function(e,n){return{type:r.bR,id:e,groupId:n}}(e,n))}},f=function(e,n,t){return function(a){a(function(e,n,t){return{type:r.CO,id:e,groupId:n,data:t}}(e,n,t))}},p=function(e,n){return function(t){t(function(e,n){return{type:r.gT,id:e,groupId:n}}(e,n))}},m=function(){return function(e){e({type:r.TQ})}},h=function(){return function(e){e({type:r.ZY})}},g=function(){return function(e){e({type:r.iZ})}},V=function(e){return function(n){n(function(e){return{type:r.t0,datas:e}}(e))}},w=function(){return function(e){e({type:r.oG})}},Z=function(){return function(e){e({type:r.PY})}}},23381:function(e,n,t){t.r(n),n.default={}}}]);