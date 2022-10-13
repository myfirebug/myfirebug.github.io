"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[372,381],{40094:function(n,e,t){t.d(e,{Z:function(){return f}});var r=t(26234),a=t(38166),u=(t(44855),t(7885)),i=t(63748),o=t(17856),c=function(n){var e=n.loading,t=n.error,r=n.nodata,a=n.children;return(0,o.jsxs)("div",{className:"app-wrapper",children:[e&&(0,o.jsx)("div",{className:"app-wrapper__loading",children:(0,o.jsx)(u.yC,{})}),t&&!e&&(0,o.jsxs)("div",{className:"app-wrapper__error",children:[(0,o.jsx)(i.CloseCircleOutlined,{}),(0,o.jsx)("p",{style:{color:"#00000040",margin:"0"},children:"\u52a0\u8f7d\u5931\u8d25"})]}),!e&&!t&&r&&(0,o.jsx)("div",{className:"app-wrapper__nodata",children:(0,o.jsx)(u.HY,{image:u.HY.PRESENTED_IMAGE_SIMPLE})}),!e&&!t&&!r&&a]})},d=t(23853),s=t(37091),l=t.n(s),f=function(n){var e=n.method,t=n.url,u=n.params,i=n.isPlaceholder,s=n.render,f=(0,d.useRequest)((0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,new Promise((function(n,r){l()({url:"http://localhost:6001/configuration"===t?"https://myfirebug.github.io/bigscreen/configuration":t,method:e,params:JSON.parse(u)}).then((function(e){n(e)})).catch((function(n){r(n)}))}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),{refreshDeps:[u,t],ready:Boolean(t)}),p=f.data,m=f.loading,h=f.error;return(0,o.jsx)(o.Fragment,{children:i?(0,o.jsx)(c,{loading:m,error:Boolean(h),nodata:!1,children:s(t?p:null,!t||!h)}):s(t?p:null,!t||!h)})}},59372:function(n,e,t){t.r(e);var r=t(59469),a=t(52447),u=t(44855),i=t(10401),o=t(47740),c=t(20884),d=t(73247),s=t(40094),l=(t(23381),t(17856)),f={modifyLargeScreenElement:o.x4};e.default=(0,i.connect)((function(n){return{currentPage:n.largeScreen.currentPage,screen:n.largeScreen.screen}}),f)((function(n){var e=n.currentPage,t=n.screen,i=n.modifyLargeScreenElement,o=(0,u.useRef)(null),f=(0,u.useState)(0),p=(0,a.Z)(f,2),m=p[0],h=p[1],g=(0,u.useState)({}),V=(0,a.Z)(g,2),w=V[0],y=V[1];(0,u.useEffect)((function(){w.width&&t.width&&h(Number((w.width/Number(t.width)).toFixed(4)))}),[t.width,w.width]),(0,u.useEffect)((function(){var n=function(){var n;y({width:null===(n=o.current)||void 0===n?void 0:n.offsetWidth})};return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[o.current]);return(0,l.jsxs)("div",{className:"app-preview",ref:o,children:[(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n          body {\n            background: url(".concat(t.backgroundImage,") no-repeat ").concat(t.backgroundColor,"  0% 0% / 100% 100%\n          }")}}),(0,l.jsx)("div",{className:"app-preview__container",style:{width:t.width,height:t.height,transform:"scale(".concat(m,")"),transformOrigin:"0 0"},children:e&&e.widgets?function n(t,a,u){return(0,l.jsx)(l.Fragment,{children:t.map((function(t,o){if(t.widgets){var f=d.Z[t.code]||d.Z[t.type];if(f){for(var p={},m=0;m<e.widgets.length;m++)e.widgets[m].linkageIds.includes(t.id)&&(p=(0,r.Z)((0,r.Z)({},p),e.widgets[m].dataValue.params));return(0,l.jsx)("div",{className:"app-widget__item",style:(0,r.Z)({position:"absolute",width:t.coordinateValue.width,height:t.coordinateValue.height,left:t.coordinateValue.left,top:t.coordinateValue.top},(0,c.Wi)((0,r.Z)((0,r.Z)({},t.configureValue),t.coordinateValue))),children:(0,l.jsx)(s.Z,{isPlaceholder:!0,method:t.dataValue.method,url:t.dataValue.url,params:JSON.stringify((0,r.Z)((0,r.Z)({},t.dataValue.params),p)||{}),render:function(e,a){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(f,{options:(0,r.Z)({},t.coordinateValue),children:n(t.widgets,(0,r.Z)((0,r.Z)({},t),{},{dataValue:(0,r.Z)((0,r.Z)({},t.dataValue),{},{mock:t.dataValue.useInterface?e:t.dataValue.mock}),success:a,parentParams:(0,r.Z)((0,r.Z)({},t.dataValue.params),p)}),t)})})}})},t.id)}}else{var h=d.Z[t.code]||d.Z[t.type];if(h){for(var g={},V=0;V<e.widgets.length;V++)e.widgets[V].linkageIds.includes(t.id)&&(g=(0,r.Z)((0,r.Z)({},g),e.widgets[V].dataValue.params));return(0,l.jsx)("div",{className:"app-widget__item",style:{position:"absolute",width:t.coordinateValue.width,height:t.coordinateValue.height,left:t.coordinateValue.left,top:t.coordinateValue.top},children:(0,l.jsx)(s.Z,{isPlaceholder:!0,method:t.dataValue.useInterface?"":t.dataValue.method,url:t.dataValue.useInterface?"":a&&a.dataValue.useInterface?a.success?t.dataValue.url:"":t.dataValue.url,params:JSON.stringify(Object.assign((0,r.Z)({},t.dataValue.params),a&&a.parentParams?a.parentParams:{},g)||{}),render:function(n,e){var o=null;return o=t.dataValue.useInterface&&a&&a.dataValue?a.dataValue.mock:"mock"===t.dataValue.dataType?t.dataValue.mock:e?n:null,(0,l.jsx)(h,{modifyLargeScreenElement:i,parentWidget:u,paramName:t.dataValue.paramName,paramValue:a&&a.parentParams&&t.dataValue.paramName?a.parentParams[t.dataValue.paramName]:"",className:"".concat(t.configureValue.animateName),field:t.dataValue.field,data:o,options:(0,r.Z)((0,r.Z)({},t.configureValue),t.coordinateValue)})}})},t.id)}}}))})}(e.widgets):null})]})}))},47740:function(n,e,t){t.d(e,{C4:function(){return v},FJ:function(){return o},Fk:function(){return Z},Hc:function(){return a},JC:function(){return i},L9:function(){return m},UY:function(){return c},WX:function(){return p},h6:function(){return x},iK:function(){return V},ny:function(){return l},o9:function(){return y},qA:function(){return g},r0:function(){return j},ru:function(){return w},ss:function(){return d},x4:function(){return f},xk:function(){return h},xn:function(){return s},zG:function(){return u}});var r=t(25162),a=function(n){return function(e){e(function(n){return{type:r.OV,data:n}}(n))}},u=function(n,e){return function(t){t(function(n){return{type:r.zN,data:n}}(n)),e&&e()}},i=function(n,e){return function(t){t(function(n){return{type:r.m,id:n}}(n)),e&&e()}},o=function(n,e,t){return function(a){a(function(n,e){return{type:r.Vo,id:n,data:e}}(n,e)),t&&t()}},c=function(n,e){return function(t){t(function(n){return{type:r.zI,id:n}}(n)),e&&e()}},d=function(n,e){return function(t){t(function(n,e){return{type:r.WI,data:n,groupId:e}}(n,e))}},s=function(){return function(n){n({type:r.Kq})}},l=function(n,e){return function(t){t(function(n,e){return{type:r.bR,id:n,groupId:e}}(n,e))}},f=function(n,e,t){return function(a){a(function(n,e,t){return{type:r.CO,id:n,groupId:e,data:t}}(n,e,t))}},p=function(n,e){return function(t){t(function(n,e){return{type:r.gT,id:n,groupId:e}}(n,e))}},m=function(){return function(n){n({type:r.TQ})}},h=function(){return function(n){n({type:r.ZY})}},g=function(){return function(n){n({type:r.iZ})}},V=function(n){return function(e){e(function(n){return{type:r.t0,datas:n}}(n))}},w=function(){return function(n){n({type:r.oG})}},y=function(){return function(n){n({type:r.PY})}},Z=function(){return function(n){n({type:r.S_})}},v=function(){return function(n){n({type:r.UQ})}},x=function(){return function(n){n({type:r.m9})}},j=function(){return function(n){n({type:r.xT})}}},23381:function(n,e,t){t.r(e),e.default={}}}]);