"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[774,448,730,781],{36345:function(e,a,t){var r=t(26234),n=t(38166),i=(t(44855),t(1222)),d=t(45378),l=t(37091),o=t.n(l),c=t(17856);a.Z=function(e){var a=e.method,t=e.url,l=e.params,s=e.isPlaceholder,u=e.render,m=(0,d.Z)((0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,r){o()({url:t,method:a,params:JSON.parse(l)}).then((function(a){e(a.data.data||a.data)})).catch((function(e){r(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{refreshDeps:[l,t],ready:Boolean(t)}),f=m.data,p=m.loading,g=m.error;return(0,c.jsx)(c.Fragment,{children:s?(0,c.jsx)(i.Z,{loading:p,error:Boolean(g),nodata:!1,children:u(t?f:null,!t||!g)}):u(t?f:null,!t||!g)})}},1222:function(e,a,t){t.d(a,{Z:function(){return l}});var r=t(24082),n=t(58489),i=t(77504),d=t(17856),l=function(e){var a=e.loading,t=e.error,l=e.nodata,o=e.children;return(0,d.jsxs)("div",{className:"app-wrapper",children:[a&&(0,d.jsx)("div",{className:"app-wrapper__loading",children:(0,d.jsx)(r.Z,{})}),t&&!a&&(0,d.jsxs)("div",{className:"app-wrapper__error",children:[(0,d.jsx)(i.Z,{}),(0,d.jsx)("p",{style:{color:"#00000040",margin:"0"},children:"\u52a0\u8f7d\u5931\u8d25"})]}),!a&&!t&&l&&(0,d.jsx)("div",{className:"app-wrapper__nodata",children:(0,d.jsx)(n.Z,{image:n.Z.PRESENTED_IMAGE_SIMPLE})}),!a&&!t&&!l&&o]})}},54448:function(e,a,t){t.r(a);var r=t(17856);a.default=function(e){var a=e.screen,t=Array.from(new Array(a.horizontalNumber*a.verticalNumber).keys());return(0,r.jsx)(r.Fragment,{children:a.showAuxiliary?(0,r.jsx)("div",{style:{padding:"".concat(a.interval,"px 0  0 ").concat(a.interval,"px")},className:"app-auxiliary__list",children:t.map((function(e){return(0,r.jsx)("div",{style:{width:"calc(".concat(100/a.horizontalNumber,"% - ").concat(a.interval,"px)"),height:"calc(".concat(100/a.verticalNumber,"% - ").concat(a.interval,"px)"),margin:"0 ".concat(a.interval,"px  ").concat(a.interval,"px 0"),borderColor:a.auxiliaryBorderColor},className:"app-auxiliary__item"},e)}))}):null})}},48730:function(e,a,t){t.r(a);var r=t(59469),n=t(51422),i=t(17856);a.default=function(e){var a=e.item,t=e.currentWidgetId,d=e.cale,l=e.currentWidget,o=e.modifyLargeScreenElement,c=e.children,s=e.className,u=e.currentWidgetGroupId;return(0,i.jsx)(n.s,{style:{display:a.configureValue.display},className:a.id!==t?"react-draggable-disabled ".concat(s):s,default:{x:a.coordinateValue.left,y:a.coordinateValue.top,width:a.coordinateValue.width,height:a.coordinateValue.height},position:{x:a.coordinateValue.left,y:a.coordinateValue.top},resizeHandleWrapperClass:"handle",resizeHandleWrapperStyle:{position:"absolute",left:0,top:0,right:0,bottom:0,border:"dashed 2px #1890ff"},resizeHandleStyles:{bottom:{width:20,height:20,background:"#1890ff",borderRadius:10,left:"50%",bottom:-10,marginLeft:-10,zIndex:1},bottomLeft:{background:"#1890ff",borderRadius:10,zIndex:1},bottomRight:{background:"#1890ff",borderRadius:10,zIndex:1},left:{width:20,height:20,background:"#1890ff",borderRadius:10,top:"50%",left:-10,marginTop:-10,zIndex:1},right:{width:20,height:20,background:"#1890ff",borderRadius:10,top:"50%",right:-10,marginTop:-10,zIndex:1},top:{width:20,height:20,background:"#1890ff",borderRadius:10,left:"50%",top:-10,marginLeft:-10,zIndex:1},topLeft:{background:"#1890ff",borderRadius:10,zIndex:1},topRight:{background:"#1890ff",borderRadius:10,zIndex:1}},size:{width:a.coordinateValue.width,height:a.coordinateValue.height},scale:d,disableDragging:a.id!==t,onDragStop:function(e,a){o(t,u,(0,r.Z)((0,r.Z)({},l),{},{coordinateValue:(0,r.Z)((0,r.Z)({},l.coordinateValue),{},{left:Number(a.lastX.toFixed(0)),top:Number(a.lastY.toFixed(0))})}))},onResizeStop:function(e,a,n,i,d){o(t,u,(0,r.Z)((0,r.Z)({},l),{},{coordinateValue:{width:n.offsetWidth,height:n.offsetHeight,left:Number(d.x.toFixed(0)),top:Number(d.y.toFixed(0))}}))},bounds:"parent",children:c},a.id)}},71781:function(e,a,t){t.r(a);var r=t(17856);a.default=function(e){var a=e.screen;return(0,r.jsx)(r.Fragment,{children:a.gridFlag?(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",height:"100%",id:"canvas",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{patternUnits:"userSpaceOnUse",id:"p1",x:"0",y:"0",width:a.gridSize,height:a.gridSize,children:(0,r.jsx)("rect",{x:"0",y:"0",stroke:a.gridBorderColor,fill:"none",width:a.gridSize+.5,height:a.gridSize+.5})})}),(0,r.jsx)("rect",{id:"wrapper",className:"grid",x:"0",y:"0",fill:"url(#p1)",width:"100%",height:"100%"})]}):null})}},61774:function(e,a,t){t.r(a);var r=t(59469),n=t(44855),i=t(20884),d=t(54662),l=t(36345),o=t(48730),c=t(71781),s=t(54448),u=t(17856);a.default=function(e){var a=e.currentPage,t=e.currentWidgetId,m=e.modifyLargeScreenElement,f=e.changeLargeScreenElement,p=e.currentWidget,g=e.cale,h=e.screen,x=e.currentWidgetGroupId,v=function(){var e;null===(e=document.querySelector("#js-content-menu"))||void 0===e||e.setAttribute("style","display: none")},w=function(e,a){e.preventDefault(),e.stopPropagation(),v(),a.id!==t&&f(a.id,a.id)},V=function(e,a,r){e.preventDefault(),e.stopPropagation(),v(),a.id!==t&&(!e.ctrlKey||r||x?f(a.id,null===r||void 0===r?void 0:r.id):f(t?"".concat(t,",").concat(a.id):a.id))};(0,n.useEffect)((function(){var e=function(e){v()},a=document.querySelector("#js-elements-body");return window.addEventListener("click",e),window.addEventListener("contextmenu",e),null===a||void 0===a||a.addEventListener("scroll",e),function(){window.removeEventListener("click",e),window.removeEventListener("contextmenu",e),null===a||void 0===a||a.removeEventListener("scroll",e)}}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.default,{screen:h}),(0,u.jsx)(s.default,{screen:h}),a&&a.widgets?function e(a,n,c){return(0,u.jsx)(u.Fragment,{children:a.map((function(a,s){if(a.widgets){var f=d.Z[a.code]||d.Z[a.type];if(f)return(0,u.jsx)(o.default,{item:a,currentWidgetId:t,currentWidgetGroupId:x,currentWidget:p,cale:g,modifyLargeScreenElement:m,className:"react-draggable-group",children:(0,u.jsxs)("div",{onContextMenu:function(e){w(e,a),(0,i._u)(e)},onClick:function(e){return w(e,a)},className:"app-widget__item ".concat(t.includes(a.id)?"is-active":""),children:[(0,u.jsxs)("div",{className:"mask",children:[(0,u.jsx)("div",{className:"line-top"}),(0,u.jsx)("div",{className:"line-left"}),(0,u.jsxs)("div",{className:"label",children:[a.coordinateValue.left,",",a.coordinateValue.top]})]}),(0,u.jsx)(l.Z,{isPlaceholder:!0,method:a.dataValue.method,url:a.dataValue.url,params:JSON.stringify(a.dataValue.params||{}),render:function(t,n){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(f,{options:(0,r.Z)((0,r.Z)({},a.configureValue),a.coordinateValue),className:a.id===x?"is-active":"",children:e(a.widgets,(0,r.Z)((0,r.Z)({},a),{},{dataValue:(0,r.Z)((0,r.Z)({},a.dataValue),{},{mock:a.dataValue.useInterface?t:a.dataValue.mock}),success:n,parentParams:a.dataValue.params}),a)})})}})]})},a.id)}else{var h=d.Z[a.code]||d.Z[a.type];if(h)return(0,u.jsx)(o.default,{item:a,currentWidgetGroupId:x,currentWidgetId:t,currentWidget:p,cale:g,modifyLargeScreenElement:m,className:"",children:(0,u.jsxs)("div",{onContextMenu:function(e){(0,i._u)(e),V(e,a,n)},onClick:function(e){return V(e,a,n)},className:"app-widget__item ".concat(t.includes(a.id)?"is-active":""),children:[(0,u.jsxs)("div",{className:"mask",children:[(0,u.jsx)("div",{className:"line-top"}),(0,u.jsx)("div",{className:"line-left"}),(0,u.jsxs)("div",{className:"label",children:[a.coordinateValue.left,",",a.coordinateValue.top]})]}),(0,u.jsx)(l.Z,{isPlaceholder:!0,method:a.dataValue.useInterface?"":a.dataValue.method,url:a.dataValue.useInterface?"":n&&n.dataValue&&n.dataValue.useInterface?n.success?a.dataValue.url:"":a.dataValue.url,params:JSON.stringify(Object.assign((0,r.Z)({},a.dataValue.params),n&&n.parentParams?n.parentParams:{})||{}),render:function(e,t){var i=null;return i=a.dataValue.useInterface&&n&&n.dataValue?n.dataValue.mock:"mock"===a.dataValue.dataType?a.dataValue.mock:t?e:null,(0,u.jsx)(h,{modifyLargeScreenElement:m,parentWidget:c,paramName:a.dataValue.paramName,paramValue:n&&n.parentParams&&a.dataValue.paramName?n.parentParams[a.dataValue.paramName]:"",className:"".concat(a.configureValue.animateName),field:a.dataValue.field,data:i,options:(0,r.Z)((0,r.Z)({},a.configureValue),a.coordinateValue)})}})]})},a.id)}}))})}(a.widgets):null]})}}}]);