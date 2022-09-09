"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[943,808,448,730,781,757,492,990,359,517,447],{36345:function(e,n,t){var r=t(26234),a=t(59469),i=t(38166),c=(t(44855),t(1222)),s=t(45378),l=t(37091),d=t.n(l),o=t(17856);n.Z=function(e){var n=e.method,t=e.url,l=e.params,u=e.isPlaceholder,f=e.render,m=(0,s.Z)((0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,r){d()({url:t,method:n,params:(0,a.Z)({},JSON.parse(l))}).then((function(n){e(n.data.data||n.data)})).catch((function(e){r(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{refreshDeps:[l,t],ready:Boolean(t)}),p=m.data,g=m.loading,h=m.error;return(0,o.jsx)(o.Fragment,{children:u?(0,o.jsx)(c.Z,{loading:g,error:Boolean(h),nodata:!1,children:f(t?p:null,!t||!h)}):f(t?p:null,!t||!h)})}},7808:function(e,n,t){t.r(n);var r=t(59469),a=t(33374),i=t(44855),c=t(31969),s=t(98843),l=t(6897),d=t(73380),o=t(20884),u=t(79397),f=t(17856);n.default=function(e){var n=e.setModal,t=e.addLargeScreenPage,m=e.modifyLargeScreenPage,p=e.details,g=(0,u.cI)(),h=(0,a.Z)(g,1)[0];(0,i.useEffect)((function(){p.name&&h.setFieldsValue({name:p.name})}),[p.name,h]);var x=function(e){c.ZP.success(e),n((function(e){return(0,r.Z)((0,r.Z)({},e),{},{visible:!1})}))};return(0,f.jsxs)(s.Z,{name:"basic",onFinish:function(e){var n=(0,r.Z)((0,r.Z)({},e),{},{id:p.id||(0,o.M8)(),widgets:p.widgets||[]});p.id?m(p.id,n,(function(){x("\u7f16\u8f91\u6210\u529f")})):t(n,(function(){x("\u65b0\u589e\u6210\u529f")}))},autoComplete:"off",form:h,children:[(0,f.jsx)(s.Z.Item,{name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9875\u9762\u540d\u79f0"}],children:(0,f.jsx)(l.Z,{placeholder:"\u8bf7\u8f93\u5165\u9875\u9762\u540d\u79f0"})}),(0,f.jsx)(s.Z.Item,{children:(0,f.jsx)(d.Z,{type:"primary",block:!0,htmlType:"submit",children:"\u4fdd\u5b58"})})]})}},54448:function(e,n,t){t.r(n);var r=t(17856);n.default=function(e){var n=e.screen,t=Array.from(new Array(n.horizontalNumber*n.verticalNumber).keys());return(0,r.jsx)(r.Fragment,{children:n.showAuxiliary?(0,r.jsx)("div",{style:{padding:"".concat(n.interval,"px 0  0 ").concat(n.interval,"px")},className:"app-auxiliary__list",children:t.map((function(e){return(0,r.jsx)("div",{style:{width:"calc(".concat(100/n.horizontalNumber,"% - ").concat(n.interval,"px)"),height:"calc(".concat(100/n.verticalNumber,"% - ").concat(n.interval,"px)"),margin:"0 ".concat(n.interval,"px  ").concat(n.interval,"px 0"),borderColor:n.auxiliaryBorderColor},className:"app-auxiliary__item"},e)}))}):null})}},48730:function(e,n,t){t.r(n);var r=t(59469),a=t(51422),i=t(17856);n.default=function(e){var n=e.item,t=e.currentWidgetId,c=e.cale,s=e.currentWidget,l=e.modifyLargeScreenElement,d=e.children,o=e.className,u=e.currentWidgetGroupId;return(0,i.jsx)(a.s,{style:{display:n.configureValue.display},className:n.id!==t?"react-draggable-disabled ".concat(o):o,default:{x:n.coordinateValue.left,y:n.coordinateValue.top,width:n.coordinateValue.width,height:n.coordinateValue.height},position:{x:n.coordinateValue.left,y:n.coordinateValue.top},resizeHandleWrapperClass:"handle",resizeHandleWrapperStyle:{position:"absolute",left:0,top:0,right:0,bottom:0,border:"dashed 2px #1890ff"},resizeHandleStyles:{bottom:{width:20,height:20,background:"#1890ff",borderRadius:10,left:"50%",bottom:-10,marginLeft:-10,zIndex:1},bottomLeft:{background:"#1890ff",borderRadius:10,zIndex:1},bottomRight:{background:"#1890ff",borderRadius:10,zIndex:1},left:{width:20,height:20,background:"#1890ff",borderRadius:10,top:"50%",left:-10,marginTop:-10,zIndex:1},right:{width:20,height:20,background:"#1890ff",borderRadius:10,top:"50%",right:-10,marginTop:-10,zIndex:1},top:{width:20,height:20,background:"#1890ff",borderRadius:10,left:"50%",top:-10,marginLeft:-10,zIndex:1},topLeft:{background:"#1890ff",borderRadius:10,zIndex:1},topRight:{background:"#1890ff",borderRadius:10,zIndex:1}},size:{width:n.coordinateValue.width,height:n.coordinateValue.height},scale:c,disableDragging:n.id!==t,onDragStop:function(e,n){l(t,u,(0,r.Z)((0,r.Z)({},s),{},{coordinateValue:(0,r.Z)((0,r.Z)({},s.coordinateValue),{},{left:Number(n.lastX.toFixed(0)),top:Number(n.lastY.toFixed(0))})}))},onResizeStop:function(e,n,a,i,c){l(t,u,(0,r.Z)((0,r.Z)({},s),{},{coordinateValue:{width:a.offsetWidth,height:a.offsetHeight,left:Number(c.x.toFixed(0)),top:Number(c.y.toFixed(0))}}))},bounds:"parent",children:d},n.id)}},71781:function(e,n,t){t.r(n);var r=t(17856);n.default=function(e){var n=e.screen;return(0,r.jsx)(r.Fragment,{children:n.gridFlag?(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",height:"100%",id:"canvas",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{patternUnits:"userSpaceOnUse",id:"p1",x:"0",y:"0",width:n.gridSize,height:n.gridSize,children:(0,r.jsx)("rect",{x:"0",y:"0",stroke:n.gridBorderColor,fill:"none",width:n.gridSize+.5,height:n.gridSize+.5})})}),(0,r.jsx)("rect",{id:"wrapper",className:"grid",x:"0",y:"0",fill:"url(#p1)",width:"100%",height:"100%"})]}):null})}},61774:function(e,n,t){t.r(n);var r=t(59469),a=t(44855),i=t(20884),c=t(54662),s=t(36345),l=t(48730),d=t(71781),o=t(54448),u=t(17856);n.default=function(e){var n=e.currentPage,t=e.currentWidgetId,f=e.modifyLargeScreenElement,m=e.changeLargeScreenElement,p=e.currentWidget,g=e.cale,h=e.screen,x=e.currentWidgetGroupId,j=function(){var e;null===(e=document.querySelector("#js-content-menu"))||void 0===e||e.setAttribute("style","display: none")},v=function(e,n){e.preventDefault(),e.stopPropagation(),j(),n.id!==t&&m(n.id,n.id)},b=function(e,n,r){e.preventDefault(),e.stopPropagation(),j(),n.id!==t&&(!e.ctrlKey||r||x?m(n.id,null===r||void 0===r?void 0:r.id):m(t?"".concat(t,",").concat(n.id):n.id))};(0,a.useEffect)((function(){var e=function(e){j()},n=document.querySelector("#js-elements-body");return window.addEventListener("click",e),window.addEventListener("contextmenu",e),null===n||void 0===n||n.addEventListener("scroll",e),function(){window.removeEventListener("click",e),window.removeEventListener("contextmenu",e),null===n||void 0===n||n.removeEventListener("scroll",e)}}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.default,{screen:h}),(0,u.jsx)(o.default,{screen:h}),n&&n.widgets?function e(n,a,d){return(0,u.jsx)(u.Fragment,{children:n.map((function(n,o){if(n.widgets){var m=c.Z[n.code]||c.Z[n.type];if(m)return(0,u.jsx)(l.default,{item:n,currentWidgetId:t,currentWidgetGroupId:x,currentWidget:p,cale:g,modifyLargeScreenElement:f,className:"react-draggable-group",children:(0,u.jsxs)("div",{onContextMenu:function(e){v(e,n),(0,i._u)(e)},onClick:function(e){return v(e,n)},className:"app-widget__item ".concat(t.includes(n.id)?"is-active":""),children:[(0,u.jsxs)("div",{className:"mask",children:[(0,u.jsx)("div",{className:"line-top"}),(0,u.jsx)("div",{className:"line-left"}),(0,u.jsxs)("div",{className:"label",children:[n.coordinateValue.left,",",n.coordinateValue.top]})]}),(0,u.jsx)(s.Z,{isPlaceholder:!0,method:n.dataValue.method,url:n.dataValue.url,params:JSON.stringify(n.dataValue.params||{}),render:function(t,a){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m,{options:(0,r.Z)((0,r.Z)({},n.configureValue),n.coordinateValue),className:n.id===x?"is-active":"",children:e(n.widgets,(0,r.Z)((0,r.Z)({},n),{},{dataValue:(0,r.Z)((0,r.Z)({},n.dataValue),{},{mock:n.dataValue.useInterface?t:n.dataValue.mock}),success:a,parentParams:n.dataValue.params}),n)})})}})]})},n.id)}else{var h=c.Z[n.code]||c.Z[n.type];if(h)return(0,u.jsx)(l.default,{item:n,currentWidgetGroupId:x,currentWidgetId:t,currentWidget:p,cale:g,modifyLargeScreenElement:f,className:"",children:(0,u.jsxs)("div",{onContextMenu:function(e){(0,i._u)(e),b(e,n,a)},onClick:function(e){return b(e,n,a)},className:"app-widget__item ".concat(t.includes(n.id)?"is-active":""),children:[(0,u.jsxs)("div",{className:"mask",children:[(0,u.jsx)("div",{className:"line-top"}),(0,u.jsx)("div",{className:"line-left"}),(0,u.jsxs)("div",{className:"label",children:[n.coordinateValue.left,",",n.coordinateValue.top]})]}),(0,u.jsx)(s.Z,{isPlaceholder:!0,method:n.dataValue.useInterface?"":n.dataValue.method,url:n.dataValue.useInterface?"":a&&a.dataValue&&a.dataValue.useInterface?a.success?n.dataValue.url:"":n.dataValue.url,params:JSON.stringify(Object.assign((0,r.Z)({},n.dataValue.params),a&&a.parentParams?a.parentParams:{})||{}),render:function(e,t){var i=null;return i=n.dataValue.useInterface&&a&&a.dataValue?a.dataValue.mock:"mock"===n.dataValue.dataType?n.dataValue.mock:t?e:null,(0,u.jsx)(h,{modifyLargeScreenElement:f,parentWidget:d,paramName:n.dataValue.paramName,paramValue:a&&a.parentParams&&n.dataValue.paramName?a.parentParams[n.dataValue.paramName]:"",className:"".concat(n.configureValue.animateName),field:n.dataValue.field,data:i,options:(0,r.Z)((0,r.Z)({},n.configureValue),n.coordinateValue)})}})]})},n.id)}}))})}(n.widgets):null]})}},79757:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(59469),a=t(44855),i=t(31969),c=t(70866),s=t(27217),l=t(61577),d=t(21400),o=t(43049),u=t(48836),f=t(54662),m=t(25666),p=function(e){var n=e.children,t=(0,a.useRef)(document.createElement("div"));return(0,a.useEffect)((function(){return document.body.appendChild(t.current),function(){document.body.removeChild(t.current)}}),[]),m.createPortal(n,t.current)},g=t(20884),h=(t(21492),t(78274)),x=t(17856),j=u.Z.widgetConfiguration,v=function(e){var n=e.addLargeScreenElement,t=e.currentPageId,u=e.pastPage,m=e.futurePage,v=e.currentWidgetId,b=e.currentWidget,N=e.undoLargeScreen,y=e.redoLargeScreen,L=e.modifyLargeScreenElement,w=e.currentWidgetGroupId,S=e.delLargeScreenElement,Z=e.copyLargeScreenElement,k=e.group,P=e.cancelGroup,E=e.currentPage,V=e.topLargescreenElement,I=e.bottomLargescreenElement,C=e.upLargescreenElement,_=e.downLargescreenElement,W=(0,h.k6)(),z=function(e){t?j[e]?n((0,r.Z)({id:(0,g.M8)(),linkageIds:""},j[e])):i.ZP.info("\u8be5\u7ec4\u4ef6\u6b63\u5728\u5f00\u53d1\u4e2d..."):i.ZP.error("\u8bf7\u5148\u6dfb\u52a0\u9875\u9762\u54e6")},F=(0,a.useCallback)((function(){u.length&&N()}),[u.length,N]),R=(0,a.useCallback)((function(){m.length&&y()}),[m.length,y]),G=(0,a.useCallback)((function(e){v&&!v.includes(",")&&(S(),i.ZP.success("\u5220\u9664\u6210\u529f"))}),[v]),O=(0,a.useCallback)((function(e){v&&!v.includes(",")&&(Z(),i.ZP.success("\u590d\u5236\u6210\u529f"))}),[v]),H=(0,a.useCallback)((function(e){v&&v.includes(",")&&(k(),i.ZP.success("\u5206\u7ec4\u6210\u529f"))}),[v]),M=(0,a.useCallback)((function(e){v&&w===v&&(P(),i.ZP.success("\u53d6\u6d88\u5206\u7ec4\u6210\u529f"))}),[v]),T=(0,a.useCallback)((function(e){if(v){var n=JSON.parse(JSON.stringify(b));switch(e){case"top":n.coordinateValue.top=n.coordinateValue.top-1;break;case"left":n.coordinateValue.left=n.coordinateValue.left-1;break;case"bottom":n.coordinateValue.top=n.coordinateValue.top+1;break;default:n.coordinateValue.left=n.coordinateValue.left+1}L(v,w,n)}}),[v,b,L]),J=function(e,n){c.Z.confirm({title:"\u60a8\u786e\u5b9a\u8981".concat(e,"?"),icon:(0,x.jsx)(l.Z,{}),content:"\u6e29\u99a8\u63d0\u793a",onOk:function(){n&&n()}})};(0,a.useEffect)((function(){var e=function(e){if(e.preventDefault(),e.stopPropagation(),e.ctrlKey)switch(e.keyCode){case 90:e.altKey?R():F();break;case 37:T("left");break;case 38:T("top");break;case 39:T("right");break;case 40:T("bottom")}else if(46===e.keyCode)J("\u5220\u9664",G)};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[F,R,T,G,O,v,J]);var A=(0,a.useMemo)((function(){if(!E.widgets)return false;var e=E.widgets.findIndex((function(e){return e.id===w}));if(-1!==e&&w!==v){if(E.widgets[e].widgets.findIndex((function(e){return e.id===v}))>0)return!0}else if(E.widgets.findIndex((function(e){return e.id===v}))>0)return!0;return false}),[E,w,v]),B=(0,a.useMemo)((function(){if(!E.widgets)return false;var e=E.widgets.findIndex((function(e){return e.id===w}));if(-1!==e&&w!==v){if(E.widgets[e].widgets.findIndex((function(e){return e.id===v}))!=E.widgets[e].widgets.length-1)return!0}else if(E.widgets.findIndex((function(e){return e.id===v}))!==E.widgets.length-1)return!0;return false}),[E,w,v]);return(0,x.jsxs)("div",{className:"app-screen-disign__header",children:[(0,x.jsx)(p,{children:(0,x.jsxs)("ul",{className:"app-content-menu",id:"js-content-menu",children:[(0,x.jsxs)("li",{onClick:O,className:"app-content-menu__item ".concat(v&&!v.includes(",")?"":"is-disabled"),children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7bc"}),(0,x.jsx)("span",{className:"name",children:"\u590d\u5236\u56fe\u5c42"})]}),(0,x.jsxs)("li",{onClick:function(){return J("\u5220\u9664",G)},className:"app-content-menu__item is-border ".concat(v&&!v.includes(",")?"":"is-disabled"),children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7c3"}),(0,x.jsx)("span",{className:"name",children:"\u5220\u9664\u56fe\u5c42"}),(0,x.jsx)("span",{children:"delete"})]}),(0,x.jsxs)("li",{onClick:function(){A&&C()},className:"app-content-menu__item ".concat(A?"":"is-disabled"),children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7ef"}),(0,x.jsx)("span",{className:"name",children:"\u4e0a\u79fb\u4e00\u5c42"}),(0,x.jsx)("span",{children:"alt+\u2191"})]}),(0,x.jsxs)("li",{onClick:function(){B&&_()},className:"app-content-menu__item ".concat(B?"":"is-disabled"),children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7f1"}),(0,x.jsx)("span",{className:"name",children:"\u4e0b\u79fb\u4e00\u5c42"}),(0,x.jsx)("span",{children:"alt+\u2193"})]}),(0,x.jsxs)("li",{onClick:function(){A&&V()},className:"app-content-menu__item ".concat(A?"":"is-disabled"),children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue786"}),(0,x.jsx)("span",{className:"name",children:"\u7f6e\u9876\u56fe\u5c42"}),(0,x.jsx)("span",{children:"ctrl+shfit+\u2191"})]}),(0,x.jsxs)("li",{onClick:function(){B&&I()},className:"app-content-menu__item is-border ".concat(B?"":"is-disabled"),children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue742"}),(0,x.jsx)("span",{className:"name",children:"\u7f6e\u5e95\u56fe\u5c42"}),(0,x.jsx)("span",{children:"ctrl+shfit+\u2193"})]}),(0,x.jsxs)("li",{onClick:H,className:"app-content-menu__item  ".concat(w||!v.includes(",")?"is-disabled":""),children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue83f"}),(0,x.jsx)("span",{className:"name",children:"\u5206\u7ec4"})]}),(0,x.jsxs)("li",{onClick:M,className:"app-content-menu__item  ".concat(w&&w===v?"":"is-disabled"),children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue632"}),(0,x.jsx)("span",{className:"name",children:"\u62c6\u5206"})]})]})}),(0,x.jsx)("ul",{className:"app-screen-disign__header--left",children:f.R.map((function(e,n){return(0,x.jsxs)("li",{className:"".concat(t?"":"is-disabled"),onClick:function(){e.datas||z(e.widgetName)},children:[(0,x.jsx)("span",{className:"app-icon",dangerouslySetInnerHTML:{__html:e.icon}}),(0,x.jsx)("p",{children:e.name}),e.datas&&e.datas.length?(0,x.jsx)("div",{className:"elements",children:e.datas.map((function(n,t){return(0,x.jsxs)("div",{onClick:function(){n.widgetName&&("form"===e.type&&w||"form"!==e.type)&&z(n.widgetName)},children:[(0,x.jsx)("div",{className:"img",children:n.src?(0,x.jsx)("img",{src:n.src}):(0,x.jsx)(d.Z,{})}),(0,x.jsx)("div",{className:"name",title:n.name,children:n.name})]},t)}))}):""]},e.type)}))}),(0,x.jsxs)("div",{className:"app-screen-disign__header--center",children:[(0,x.jsxs)("ul",{className:"shortcuts-group",children:[(0,x.jsx)("li",{onClick:H,className:"".concat(w||!v.includes(",")?"is-disabled":""),children:(0,x.jsxs)(s.Z,{title:"\u5206\u7ec4",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue83f"}),(0,x.jsx)("p",{children:"\u5206\u7ec4"})]})}),(0,x.jsx)("li",{onClick:M,className:"".concat(w&&w===v?"":"is-disabled"),children:(0,x.jsxs)(s.Z,{title:"\u62c6\u5206",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue632"}),(0,x.jsx)("p",{children:"\u62c6\u5206"})]})})]}),(0,x.jsxs)("ul",{className:"shortcuts-group",children:[(0,x.jsx)("li",{onClick:O,className:"".concat(v&&!v.includes(",")?"":"is-disabled"),children:(0,x.jsxs)(s.Z,{title:"\u590d\u5236",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7bc"}),(0,x.jsx)("p",{children:"\u590d\u5236"})]})}),(0,x.jsx)("li",{onClick:function(){return J("\u5220\u9664",G)},className:"".concat(v&&!v.includes(",")?"":"is-disabled"),children:(0,x.jsxs)(s.Z,{title:"\u5220\u9664(ctrl+delete)",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7c3"}),(0,x.jsx)("p",{children:"\u5220\u9664"})]})})]}),(0,x.jsxs)("ul",{className:"shortcuts-group",children:[(0,x.jsx)("li",{onClick:function(){return T("top")},className:"".concat(!v||v.includes(",")?"is-disabled":""),children:(0,x.jsxs)(s.Z,{title:"\u4e0a\u79fb(ctrl+\u2191)",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7ef"}),(0,x.jsx)("p",{children:"\u4e0a\u79fb"})]})}),(0,x.jsx)("li",{onClick:function(){return T("bottom")},className:"".concat(!v||v.includes(",")?"is-disabled":""),children:(0,x.jsxs)(s.Z,{title:"\u4e0b\u79fb(ctrl+\u2193)",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7f1"}),(0,x.jsx)("p",{children:"\u4e0b\u79fb"})]})}),(0,x.jsx)("li",{onClick:function(){return T("left")},className:"".concat(!v||v.includes(",")?"is-disabled":""),children:(0,x.jsxs)(s.Z,{title:"\u5de6\u79fb(ctrl+\u2190)",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7f0"}),(0,x.jsx)("p",{children:"\u5de6\u79fb"})]})}),(0,x.jsx)("li",{onClick:function(){return T("right")},className:"".concat(!v||v.includes(",")?"is-disabled":""),children:(0,x.jsxs)(s.Z,{title:"\u53f3\u79fb(ctrl+\u2192)",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue7ee"}),(0,x.jsx)("p",{children:"\u53f3\u79fb"})]})})]}),(0,x.jsxs)("ul",{className:"shortcuts-group",children:[(0,x.jsx)("li",{className:"".concat(t?"":"is-disabled"),children:(0,x.jsxs)(s.Z,{title:"\u4fdd\u5b58(ctrl+s)",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue791"}),(0,x.jsx)("p",{children:"\u4fdd\u5b58"})]})}),(0,x.jsx)("li",{onClick:function(){t&&W.push("/frame/preview?pageId=".concat(t))},className:"".concat(t?"":"is-disabled"),children:(0,x.jsxs)(s.Z,{title:"\u9884\u89c8(ctrl+p)",placement:"bottom",children:[(0,x.jsx)("span",{className:"app-icon",children:"\ue78f"}),(0,x.jsx)("p",{children:"\u9884\u89c8"})]})})]})]}),(0,x.jsx)("ul",{className:"app-screen-disign__header--right",children:(0,x.jsx)("li",{onClick:function(){return W.goBack()},children:(0,x.jsx)(o.Z,{})})})]})}},95397:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(59469),a=t(33374),i=t(44855),c=(t(990),t(70866)),s=t(31969),l=t(73380),d=t(27217),o=t(78288),u=t(61577),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"},m=t(17240),p=function(e,n){return i.createElement(m.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:f}))};p.displayName="FormOutlined";var g=i.forwardRef(p),h=t(95741),x=t(56365),j=t(29072),v=t(7808),b=t(17856),N=function(e){var n=e.pages,t=e.addLargeScreenPage,f=e.delLargeScreenPage,m=e.modifyLargeScreenPage,p=e.changeLargeScreenPage,N=e.currentPageId,y=e.leftFlag,L=e.setLeftFlag,w=(0,i.useState)({visible:!1,title:"",details:{}}),S=(0,a.Z)(w,2),Z=S[0],k=S[1];return(0,b.jsxs)("div",{className:"app-screen-disign__body--left",style:{left:y?0:-200},children:[(0,b.jsx)(c.Z,{title:Z.title,visible:Z.visible,footer:null,destroyOnClose:!0,onCancel:function(){return k((function(e){return(0,r.Z)((0,r.Z)({},e),{},{visible:!1})}))},children:(0,b.jsx)(v.default,{setModal:k,addLargeScreenPage:t,modifyLargeScreenPage:m,details:Z.details})}),(0,b.jsx)("div",{className:"body",children:(0,b.jsx)(l.Z,{type:"primary",block:!0,onClick:function(){return k((function(e){return{visible:!0,title:"\u65b0\u589e\u9875\u9762",details:{}}}))},icon:(0,b.jsx)(o.Z,{}),children:"\u65b0\u589e\u9875\u9762"})}),(0,b.jsx)("div",{className:"header",children:"\u9875\u9762\u5217\u8868"}),(0,b.jsx)("ul",{className:"page",children:n.map((function(e){return(0,b.jsxs)("li",{"data-id":e.id,onClick:function(){e.id!==N&&p(e.id,(function(){s.ZP.success("\u9875\u9762\u5207\u6362\u6210\u529f")}))},className:"page-item ".concat(e.id===N?"is-active":"is-noactive"),children:[(0,b.jsx)("div",{className:"name",children:e.name}),e.id!==N&&(0,b.jsxs)("div",{className:"page-item__operation",children:[(0,b.jsx)(d.Z,{title:"\u7f16\u8f91",placement:"top",children:(0,b.jsx)("span",{onClick:function(n){return function(e,n){n.stopPropagation(),k((function(n){return{visible:!0,title:"\u65b0\u589e\u9875\u9762",details:e}}))}(e,n)},children:(0,b.jsx)(g,{})})}),(0,b.jsx)(d.Z,{title:"\u5220\u9664",placement:"top",children:(0,b.jsx)("span",{onClick:function(n){return function(e,n){n.stopPropagation(),c.Z.confirm({title:"\u6e29\u99a8\u63d0\u793a",icon:(0,b.jsx)(u.Z,{}),content:"\u786e\u5b9a\u8981\u5220\u9664\u8be5\u9875\u9762\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){f(e.id,(function(){s.ZP.success("\u5220\u9664\u6210\u529f")}))}})}(e,n)},children:(0,b.jsx)(h.Z,{})})})]})]},e.id)}))}),(0,b.jsx)("div",{onClick:function(){return L(!y)},className:"operation",children:y?(0,b.jsx)(x.Z,{}):(0,b.jsx)(j.Z,{})})]})}},48359:function(e,n,t){t.r(n);t(84769);var r=t(17856);n.default=function(){var e=Array.from(new Array(100).keys());return(0,r.jsxs)("div",{className:"app-screen-disign__ruler",children:[(0,r.jsx)("div",{className:"app-screen-disign__ruler--hwrapper",children:(0,r.jsxs)("div",{className:"app-screen-disign__ruler--h",children:[(0,r.jsxs)("span",{className:"ruler-h-50",children:[(0,r.jsx)("b",{children:"50"}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]}),e.map((function(e,n){return(0,r.jsxs)("span",{className:"ruler-h-50",children:[(0,r.jsx)("b",{children:50*n}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]},n)}))]})}),(0,r.jsx)("div",{className:"app-screen-disign__ruler--vwrapper",children:(0,r.jsxs)("div",{className:"app-screen-disign__ruler--v",children:[(0,r.jsxs)("span",{className:"ruler-h-50",children:[(0,r.jsx)("b",{children:"50"}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]}),e.map((function(e,n){return(0,r.jsxs)("span",{className:"ruler-h-50",children:[(0,r.jsx)("b",{children:50*n}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]},n)}))]})})]})}},51911:function(e,n,t){t.r(n);var r=t(33374),a=t(44855),i=t(61038),c=t(41324),s=t(47740),l=t(79757),d=t(95397),o=t(61026),u=t(48359),f=t(61774),m=(t(80447),t(17856)),p={getLargeScreenPages:s.Hc,addLargeScreenPage:s.zG,delLargeScreenPage:s.JC,modifyLargeScreenPage:s.FJ,addLargeScreenElement:s.ss,delLargeScreenElement:s.xn,modifyLargeScreenElement:s.x4,undoLargeScreen:s.xk,redoLargeScreen:s.qA,modifyScreen:s.iK,changeLargeScreenPage:s.UY,changeLargeScreenElement:s.WX,copyLargeScreenElement:s.L9,group:s.ru,cancelGroup:s.o9,showOrHideLargeScreenElement:s.ny,topLargescreenElement:s.h6,bottomLargescreenElement:s.r0,upLargescreenElement:s.Fk,downLargescreenElement:s.C4};n.default=(0,i.$j)((function(e){return{pages:e.largeScreen.pages,pastPage:e.largeScreen.pastPage,futurePage:e.largeScreen.futurePage,currentPage:e.largeScreen.currentPage,currentWidgetId:e.largeScreen.currentWidgetId,screen:e.largeScreen.screen,currentWidget:e.largeScreen.currentWidget,currentWidgetGroupId:e.largeScreen.currentWidgetGroupId}}),p)((function(e){var n=e.modifyScreen,t=e.screen,i=e.pages,s=e.addLargeScreenPage,p=e.delLargeScreenPage,g=e.modifyLargeScreenPage,h=e.changeLargeScreenPage,x=e.addLargeScreenElement,j=e.currentPage,v=e.currentWidgetId,b=e.currentWidget,N=e.modifyLargeScreenElement,y=e.pastPage,L=e.futurePage,w=e.undoLargeScreen,S=e.redoLargeScreen,Z=e.changeLargeScreenElement,k=e.currentWidgetGroupId,P=e.delLargeScreenElement,E=e.copyLargeScreenElement,V=e.group,I=e.cancelGroup,C=e.showOrHideLargeScreenElement,_=e.topLargescreenElement,W=e.bottomLargescreenElement,z=e.upLargescreenElement,F=e.downLargescreenElement,R=(0,a.useRef)(null),G=(0,a.useState)({}),O=(0,r.Z)(G,2),H=O[0],M=O[1],T=(0,a.useState)(0),J=(0,r.Z)(T,2),A=J[0],B=J[1],D=(0,a.useState)(!0),q=(0,r.Z)(D,2),K=q[0],U=q[1],Y=(0,a.useState)(!0),X=(0,r.Z)(Y,2),Q=X[0],$=X[1];(0,a.useEffect)((function(){H.width&&t.width&&B(Number((H.width/Number(t.width)).toFixed(4)))}),[t.width,H.width]),(0,a.useEffect)((function(){var e=function(){var e;M({width:null===(e=R.current)||void 0===e?void 0:e.offsetWidth})};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[R.current]);return(0,m.jsxs)("div",{className:"app-screen-disign",children:[(0,m.jsx)(l.default,{undoLargeScreen:w,redoLargeScreen:S,addLargeScreenElement:x,currentPageId:j.id,pastPage:y,futurePage:L,currentWidgetId:v,modifyLargeScreenElement:N,delLargeScreenElement:P,copyLargeScreenElement:E,currentWidgetGroupId:k,topLargescreenElement:_,bottomLargescreenElement:W,upLargescreenElement:z,downLargescreenElement:F,group:V,currentPage:j,cancelGroup:I,currentWidget:b}),(0,m.jsxs)("div",{className:"app-screen-disign__body",children:[(0,m.jsx)(d.default,{setLeftFlag:U,leftFlag:K,pages:i,addLargeScreenPage:s,delLargeScreenPage:p,modifyLargeScreenPage:g,currentPageId:j.id,changeLargeScreenPage:h}),(0,m.jsxs)("div",{style:{paddingLeft:K?200:0,paddingRight:Q&&i.length?400:0},className:"app-screen-disign__body--center",children:[(0,m.jsx)("div",{className:"body",id:"js-elements-body",ref:R,children:(0,m.jsxs)("div",{className:"elements-wrap",children:[(0,m.jsx)(u.default,{}),(0,m.jsx)("div",{onClick:function(e){v&&Z("")},className:"elements-wrap-canvas",style:{position:"absolute",zIndex:1,left:66,top:66,width:t.width,height:t.height,transform:"scale(".concat(A,")"),transformOrigin:"0 0",background:"url(".concat(t.backgroundImage,") no-repeat ").concat(t.backgroundColor,"  0% 0% / 100% 100%")},children:(0,m.jsx)(f.default,{currentPage:j,currentWidgetId:v,cale:A,screen:t,currentWidgetGroupId:k,changeLargeScreenElement:Z,currentWidget:b,modifyLargeScreenElement:N})})]})}),(0,m.jsxs)("div",{className:"footer",children:[(0,m.jsx)("span",{children:"\u7f29\u653e\u6bd4\u4f8b\uff1a"}),(0,m.jsx)(c.Z,{style:{width:300},min:5,max:100,tipFormatter:function(e){return"".concat(e,"%")},onChange:function(e){return B(e/100)},value:100*A})]})]}),i.length?(0,m.jsx)(o.default,{rightFlag:Q,setRightFlag:$,screen:t,currentPage:j,modifyLargeScreenElement:N,modifyScreen:n,currentWidget:b,showOrHideLargeScreenElement:C,changeLargeScreenElement:Z,currentWidgetGroupId:k,currentWidgetId:v}):null]})]})}))},47740:function(e,n,t){t.d(n,{C4:function(){return N},FJ:function(){return s},Fk:function(){return b},Hc:function(){return a},JC:function(){return c},L9:function(){return p},UY:function(){return l},WX:function(){return m},h6:function(){return y},iK:function(){return x},ny:function(){return u},o9:function(){return v},qA:function(){return h},r0:function(){return L},ru:function(){return j},ss:function(){return d},x4:function(){return f},xk:function(){return g},xn:function(){return o},zG:function(){return i}});var r=t(25162),a=function(e){return function(n){n(function(e){return{type:r.OV,datas:e}}(e))}},i=function(e,n){return function(t){t(function(e){return{type:r.zN,data:e}}(e)),n&&n()}},c=function(e,n){return function(t){t(function(e){return{type:r.m,id:e}}(e)),n&&n()}},s=function(e,n,t){return function(a){a(function(e,n){return{type:r.Vo,id:e,data:n}}(e,n)),t&&t()}},l=function(e,n){return function(t){t(function(e){return{type:r.zI,id:e}}(e)),n&&n()}},d=function(e,n){return function(t){t(function(e,n){return{type:r.WI,data:e,groupId:n}}(e,n))}},o=function(){return function(e){e({type:r.Kq})}},u=function(e,n){return function(t){t(function(e,n){return{type:r.bR,id:e,groupId:n}}(e,n))}},f=function(e,n,t){return function(a){a(function(e,n,t){return{type:r.CO,id:e,groupId:n,data:t}}(e,n,t))}},m=function(e,n){return function(t){t(function(e,n){return{type:r.gT,id:e,groupId:n}}(e,n))}},p=function(){return function(e){e({type:r.TQ})}},g=function(){return function(e){e({type:r.ZY})}},h=function(){return function(e){e({type:r.iZ})}},x=function(e){return function(n){n(function(e){return{type:r.t0,datas:e}}(e))}},j=function(){return function(e){e({type:r.oG})}},v=function(){return function(e){e({type:r.PY})}},b=function(){return function(e){e({type:r.S_})}},N=function(){return function(e){e({type:r.UQ})}},y=function(){return function(e){e({type:r.m9})}},L=function(){return function(e){e({type:r.xT})}}},95741:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(59469),a=t(44855),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=t(17240),s=function(e,n){return a.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};s.displayName="DeleteOutlined";var l=a.forwardRef(s)},21492:function(e,n,t){t.r(n),n.default={}},990:function(e,n,t){t.r(n),n.default={}},84769:function(e,n,t){t.r(n),n.default={}},80447:function(e,n,t){t.r(n),n.default={}}}]);