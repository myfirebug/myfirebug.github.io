"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[54,808,448,730,781,648,492,990,26,431,359,769,447],{1222:function(e,n,a){a.d(n,{Z:function(){return l}});var r=a(76202),t=a(89604),i=a(77504),c=a(17856),l=function(e){var n=e.loading,a=e.error,l=e.nodata,s=e.children;return(0,c.jsxs)("div",{className:"app-wrapper",children:[n&&(0,c.jsx)("div",{className:"app-wrapper__loading",children:(0,c.jsx)(r.Z,{tip:"loading..."})}),a&&!n&&(0,c.jsxs)("div",{className:"app-wrapper__error",children:[(0,c.jsx)(i.Z,{}),(0,c.jsx)("p",{style:{color:"#00000040",margin:"0"},children:"\u52a0\u8f7d\u5931\u8d25"})]}),!n&&!a&&l&&(0,c.jsx)("div",{className:"app-wrapper__nodata",children:(0,c.jsx)(t.Z,{image:t.Z.PRESENTED_IMAGE_SIMPLE})}),!n&&!a&&!l&&s]})}},7808:function(e,n,a){a.r(n);var r=a(59469),t=a(33374),i=a(44855),c=a(16340),l=a(59654),s=a(14033),d=a(39237),o=a(20884),u=a(59721),p=a(17856);n.default=function(e){var n=e.setModal,a=e.addLargeScreenPage,f=e.modifyLargeScreenPage,g=e.details,m=(0,u.cI)(),h=(0,t.Z)(m,1)[0];(0,i.useEffect)((function(){g.name&&h.setFieldsValue({name:g.name})}),[g.name,h]);var x=function(e){c.ZP.success(e),n((function(e){return(0,r.Z)((0,r.Z)({},e),{},{visible:!1})}))};return(0,p.jsxs)(l.Z,{name:"basic",onFinish:function(e){var n=(0,r.Z)((0,r.Z)({},e),{},{id:g.id||(0,o.M8)(),widgets:g.widgets||[]});g.id?f(g.id,n,(function(){x("\u7f16\u8f91\u6210\u529f")})):a(n,(function(){x("\u65b0\u589e\u6210\u529f")}))},autoComplete:"off",form:h,children:[(0,p.jsx)(l.Z.Item,{name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9875\u9762\u540d\u79f0"}],children:(0,p.jsx)(s.Z,{placeholder:"\u8bf7\u8f93\u5165\u9875\u9762\u540d\u79f0"})}),(0,p.jsx)(l.Z.Item,{children:(0,p.jsx)(d.Z,{type:"primary",block:!0,htmlType:"submit",children:"\u4fdd\u5b58"})})]})}},54448:function(e,n,a){a.r(n);var r=a(17856);n.default=function(e){var n=e.screen,a=Array.from(new Array(n.horizontalNumber*n.verticalNumber).keys());return(0,r.jsx)(r.Fragment,{children:n.showAuxiliary?(0,r.jsx)("div",{style:{padding:"".concat(n.interval,"px 0  0 ").concat(n.interval,"px")},className:"app-auxiliary__list",children:a.map((function(e){return(0,r.jsx)("div",{style:{width:"calc(".concat(100/n.horizontalNumber,"% - ").concat(n.interval,"px)"),height:"calc(".concat(100/n.verticalNumber,"% - ").concat(n.interval,"px)"),margin:"0 ".concat(n.interval,"px  ").concat(n.interval,"px 0"),borderColor:n.auxiliaryBorderColor},className:"app-auxiliary__item"},e)}))}):null})}},48730:function(e,n,a){a.r(n);var r=a(59469),t=a(51422),i=a(17856);n.default=function(e){var n=e.item,a=e.currentWidgetId,c=e.cale,l=e.currentWidget,s=e.modifyLargeScreenElement,d=e.children,o=e.className;return(0,i.jsx)(t.s,{style:{display:n.configureValue.display},className:n.id!==a?"react-draggable-disabled ".concat(o):o,default:{x:n.coordinateValue.left,y:n.coordinateValue.top,width:n.coordinateValue.width,height:n.coordinateValue.height},position:{x:n.coordinateValue.left,y:n.coordinateValue.top},resizeHandleWrapperClass:"handle",resizeHandleWrapperStyle:{position:"absolute",left:0,top:0,right:0,bottom:0,border:"dashed 2px #1890ff"},resizeHandleStyles:{bottom:{width:20,height:20,background:"#1890ff",borderRadius:10,left:"50%",bottom:-10,marginLeft:-10,zIndex:1},bottomLeft:{background:"#1890ff",borderRadius:10,zIndex:1},bottomRight:{background:"#1890ff",borderRadius:10,zIndex:1},left:{width:20,height:20,background:"#1890ff",borderRadius:10,top:"50%",left:-10,marginTop:-10,zIndex:1},right:{width:20,height:20,background:"#1890ff",borderRadius:10,top:"50%",right:-10,marginTop:-10,zIndex:1},top:{width:20,height:20,background:"#1890ff",borderRadius:10,left:"50%",top:-10,marginLeft:-10,zIndex:1},topLeft:{background:"#1890ff",borderRadius:10,zIndex:1},topRight:{background:"#1890ff",borderRadius:10,zIndex:1}},size:{width:n.coordinateValue.width,height:n.coordinateValue.height},scale:c,disableDragging:n.id!==a,onDragStop:function(e,n){s(a,(0,r.Z)((0,r.Z)({},l),{},{coordinateValue:(0,r.Z)((0,r.Z)({},l.coordinateValue),{},{left:Number(n.lastX.toFixed(0)),top:Number(n.lastY.toFixed(0))})}))},onResizeStop:function(e,n,t,i,c){s(a,(0,r.Z)((0,r.Z)({},l),{},{coordinateValue:{width:t.offsetWidth,height:t.offsetHeight,left:Number(c.x.toFixed(0)),top:Number(c.y.toFixed(0))}}))},bounds:"parent",children:d},n.id)}},71781:function(e,n,a){a.r(n);var r=a(17856);n.default=function(e){var n=e.screen;return(0,r.jsx)(r.Fragment,{children:n.gridFlag?(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",height:"100%",id:"canvas",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{patternUnits:"userSpaceOnUse",id:"p1",x:"0",y:"0",width:n.gridSize,height:n.gridSize,children:(0,r.jsx)("rect",{x:"0",y:"0",stroke:n.gridBorderColor,fill:"none",width:n.gridSize+.5,height:n.gridSize+.5})})}),(0,r.jsx)("rect",{id:"wrapper",className:"grid",x:"0",y:"0",fill:"url(#p1)",width:"100%",height:"100%"})]}):null})}},50928:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var r=a(59469),t=a(17063),i=a(33374),c=a(44855),l=a(1222),s=a(37091),d=a.n(s),o=a(17856),u=function(e){var n=e.method,a=e.url,r=e.params,t=e.isPlaceholder,s=e.render,u=(0,c.useState)(null),p=(0,i.Z)(u,2),f=p[0],g=p[1],m=(0,c.useState)(!1),h=(0,i.Z)(m,2),x=h[0],j=h[1],b=(0,c.useState)(!1),v=(0,i.Z)(b,2),Z=v[0],N=v[1],y=(0,c.useState)(!1),S=(0,i.Z)(y,2),w=S[0],k=S[1];return(0,c.useEffect)((function(){a&&(N(!1),j(!0),d()({url:a,method:n,params:JSON.parse(r)}).then((function(e){j(!1),k(!0),g(e.data.data||e.data)})).catch((function(e){j(!1),k(!1),N(!1)})))}),[a,r]),(0,o.jsx)(o.Fragment,{children:t?(0,o.jsx)(l.Z,{loading:x,error:Boolean(Z),nodata:!1,children:s(f,w)}):s(f,w)})},p=a(48730),f=a(71781),g=a(54448),m=function(e){var n=e.currentPage,a=e.currentWidgetId,i=e.modifyLargeScreenElement,c=e.changeLargeScreenElement,l=e.currentWidget,s=e.cale,d=e.screen,m=e.currentWidgetGroupId;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.default,{screen:d}),(0,o.jsx)(g.default,{screen:d}),n&&n.widgets?function e(n,d){return(0,o.jsx)(o.Fragment,{children:n.map((function(n,f){if(n.widgets){var g=t.Z[n.code]||t.Z[n.type];if(g)return(0,o.jsx)(p.default,{item:n,currentWidgetId:a,currentWidget:l,cale:s,modifyLargeScreenElement:i,className:"react-draggable-group",children:(0,o.jsxs)("div",{onClick:function(e){e.preventDefault(),e.stopPropagation(),n.id!==a&&c(n.id,n.id)},className:"app-widget__item ".concat(a.includes(n.id)?"is-active":""),children:[(0,o.jsxs)("div",{className:"mask",children:[(0,o.jsx)("div",{className:"line-top"}),(0,o.jsx)("div",{className:"line-left"}),(0,o.jsxs)("div",{className:"label",children:[n.coordinateValue.left,",",n.coordinateValue.top]})]}),(0,o.jsx)(u,{isPlaceholder:!0,method:n.dataValue.method,url:n.dataValue.url,params:JSON.stringify(n.dataValue.params||{}),render:function(a,t){return(0,o.jsx)(g,{options:(0,r.Z)((0,r.Z)({},n.configureValue),n.coordinateValue),className:n.id===m?"is-active":"",children:e(n.widgets,(0,r.Z)((0,r.Z)({},n),{},{dataValue:(0,r.Z)((0,r.Z)({},n.dataValue),{},{mock:n.dataValue.useInterface?a:n.dataValue.mock}),success:t}))})}})]})},n.id)}else{var h=t.Z[n.code]||t.Z[n.type];if(h)return(0,o.jsx)(p.default,{item:n,currentWidgetId:a,currentWidget:l,cale:s,modifyLargeScreenElement:i,className:"",children:(0,o.jsxs)("div",{onClick:function(e){e.preventDefault(),e.stopPropagation(),n.id!==a&&(!e.ctrlKey||d||m?c(n.id,null===d||void 0===d?void 0:d.id):c(a?"".concat(a,",").concat(n.id):n.id))},className:"app-widget__item ".concat(a.includes(n.id)?"is-active":""),children:[(0,o.jsxs)("div",{className:"mask",children:[(0,o.jsx)("div",{className:"line-top"}),(0,o.jsx)("div",{className:"line-left"}),(0,o.jsxs)("div",{className:"label",children:[n.coordinateValue.left,",",n.coordinateValue.top]})]}),void 0,(0,o.jsx)(u,{isPlaceholder:!0,method:n.dataValue.useInterface?"":n.dataValue.method,url:n.dataValue.useInterface?"":d&&d.dataValue.useInterface?d.success?n.dataValue.url:"":n.dataValue.url,params:JSON.stringify(n.dataValue.params||{}),render:function(e,a){var t=null;return t=n.dataValue.useInterface&&d&&d.dataValue?d.dataValue.mock:"mock"===n.dataValue.dataType?n.dataValue.mock:a?e:null,(0,o.jsx)(h,{className:"".concat(n.configureValue.animateName),field:n.dataValue.field,data:t,options:(0,r.Z)((0,r.Z)({},n.configureValue),n.coordinateValue)})}})]})},n.id)}}))})}(n.widgets):null]})}},78648:function(e,n,a){a.r(n);var r=a(59469),t=a(44855),i=a(16340),c=a(39024),l=a(38273),s=a(61577),d=a(21400),o=a(43049),u=a(39647),p=a(17063),f=a(20884),g=(a(21492),a(78274)),m=a(17856),h=u.Z.widgetConfiguration;n.default=function(e){var n=e.addLargeScreenElement,a=e.currentPageId,u=e.pastPage,x=e.futurePage,j=e.currentWidgetId,b=e.currentWidget,v=e.undoLargeScreen,Z=e.redoLargeScreen,N=e.modifyLargeScreenElement,y=e.currentWidgetGroupId,S=e.delLargeScreenElement,w=e.copyLargeScreenElement,k=e.group,V=e.cancelGroup,L=(0,g.k6)(),C=function(e){a?h[e]?n((0,r.Z)({id:(0,f.M8)()},h[e])):i.ZP.info("\u8be5\u7ec4\u4ef6\u6b63\u5728\u5f00\u53d1\u4e2d..."):i.ZP.error("\u8bf7\u5148\u6dfb\u52a0\u9875\u9762\u54e6")},I=(0,t.useCallback)((function(){u.length&&v()}),[u.length,v]),P=(0,t.useCallback)((function(){x.length&&Z()}),[x.length,Z]),E=(0,t.useCallback)((function(){j&&!j.includes(",")&&(S(),i.ZP.success("\u5220\u9664\u6210\u529f"))}),[j]),_=(0,t.useCallback)((function(){j&&!j.includes(",")&&(w(),i.ZP.success("\u590d\u5236\u6210\u529f"))}),[j]),F=(0,t.useCallback)((function(){j&&j.includes(",")&&(k(),i.ZP.success("\u5206\u7ec4\u6210\u529f"))}),[j]),W=(0,t.useCallback)((function(){j&&!j.includes(",")&&(V(),i.ZP.success("\u53d6\u6d88\u5206\u7ec4\u6210\u529f"))}),[j]),z=(0,t.useCallback)((function(e){if(j){var n=JSON.parse(JSON.stringify(b));switch(e){case"top":n.coordinateValue.top=n.coordinateValue.top-1;break;case"left":n.coordinateValue.left=n.coordinateValue.left-1;break;case"bottom":n.coordinateValue.top=n.coordinateValue.top+1;break;default:n.coordinateValue.left=n.coordinateValue.left+1}N(j,n)}}),[j,b,N]),O=function(e,n){c.Z.confirm({title:"\u60a8\u786e\u5b9a\u8981".concat(e,"?"),icon:(0,m.jsx)(s.Z,{}),content:"\u6e29\u99a8\u63d0\u793a",onOk:function(){n&&n()}})};return(0,t.useEffect)((function(){var e=function(e){if(e.preventDefault(),e.stopPropagation(),e.ctrlKey)switch(e.keyCode){case 90:e.altKey?P():I();break;case 37:z("left");break;case 38:z("top");break;case 39:z("right");break;case 40:z("bottom")}else if(46===e.keyCode)O("\u5220\u9664",E)};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[I,P,z,E,_,j,O]),(0,m.jsxs)("div",{className:"app-screen-disign__header",children:[(0,m.jsx)("ul",{className:"app-screen-disign__header--left",children:p.R.map((function(e,n){return(0,m.jsxs)("li",{className:"".concat(a?"":"is-disabled"),onClick:function(){e.datas||C(e.widgetName)},children:[(0,m.jsx)("span",{className:"app-icon",dangerouslySetInnerHTML:{__html:e.icon}}),(0,m.jsx)("p",{children:e.name}),e.datas&&e.datas.length?(0,m.jsx)("div",{className:"elements",children:e.datas.map((function(e,n){return(0,m.jsxs)("div",{onClick:function(){e.widgetName&&C(e.widgetName)},children:[(0,m.jsx)("div",{className:"img",children:e.src?(0,m.jsx)("img",{src:e.src}):(0,m.jsx)(d.Z,{})}),(0,m.jsx)("div",{className:"name",title:e.name,children:e.name})]},n)}))}):""]},e.type)}))}),(0,m.jsxs)("div",{className:"app-screen-disign__header--center",children:[(0,m.jsxs)("ul",{className:"shortcuts-group",children:[(0,m.jsx)("li",{onClick:F,className:"".concat(y||!j.includes(",")?"is-disabled":""),children:(0,m.jsxs)(l.Z,{title:"\u5206\u7ec4",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue83f"}),(0,m.jsx)("p",{children:"\u5206\u7ec4"})]})}),(0,m.jsx)("li",{onClick:W,className:"".concat(y&&y===j?"":"is-disabled"),children:(0,m.jsxs)(l.Z,{title:"\u62c6\u5206",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue632"}),(0,m.jsx)("p",{children:"\u62c6\u5206"})]})})]}),(0,m.jsxs)("ul",{className:"shortcuts-group",children:[(0,m.jsx)("li",{onClick:_,className:"".concat(j&&!j.includes(",")?"":"is-disabled"),children:(0,m.jsxs)(l.Z,{title:"\u590d\u5236",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue7bc"}),(0,m.jsx)("p",{children:"\u590d\u5236"})]})}),(0,m.jsx)("li",{onClick:E,className:"".concat(j&&!j.includes(",")?"":"is-disabled"),children:(0,m.jsxs)(l.Z,{title:"\u5220\u9664(ctrl+delete)",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue7c3"}),(0,m.jsx)("p",{children:"\u5220\u9664"})]})})]}),(0,m.jsxs)("ul",{className:"shortcuts-group",children:[(0,m.jsx)("li",{onClick:function(){return z("top")},className:"".concat(!j||j.includes(",")?"is-disabled":""),children:(0,m.jsxs)(l.Z,{title:"\u4e0a\u79fb(ctrl+\u2191)",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue7ef"}),(0,m.jsx)("p",{children:"\u4e0a\u79fb"})]})}),(0,m.jsx)("li",{onClick:function(){return z("bottom")},className:"".concat(!j||j.includes(",")?"is-disabled":""),children:(0,m.jsxs)(l.Z,{title:"\u4e0b\u79fb(ctrl+\u2193)",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue7f1"}),(0,m.jsx)("p",{children:"\u4e0b\u79fb"})]})}),(0,m.jsx)("li",{onClick:function(){return z("left")},className:"".concat(!j||j.includes(",")?"is-disabled":""),children:(0,m.jsxs)(l.Z,{title:"\u5de6\u79fb(ctrl+\u2190)",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue7f0"}),(0,m.jsx)("p",{children:"\u5de6\u79fb"})]})}),(0,m.jsx)("li",{onClick:function(){return z("right")},className:"".concat(!j||j.includes(",")?"is-disabled":""),children:(0,m.jsxs)(l.Z,{title:"\u53f3\u79fb(ctrl+\u2192)",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue7ee"}),(0,m.jsx)("p",{children:"\u53f3\u79fb"})]})})]}),(0,m.jsxs)("ul",{className:"shortcuts-group",children:[(0,m.jsx)("li",{className:"".concat(a?"":"is-disabled"),children:(0,m.jsxs)(l.Z,{title:"\u4fdd\u5b58(ctrl+s)",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue791"}),(0,m.jsx)("p",{children:"\u4fdd\u5b58"})]})}),(0,m.jsx)("li",{className:"".concat(a?"":"is-disabled"),children:(0,m.jsxs)(l.Z,{title:"\u9884\u89c8(ctrl+p)",placement:"bottom",children:[(0,m.jsx)("span",{className:"app-icon",children:"\ue78f"}),(0,m.jsx)("p",{children:"\u9884\u89c8"})]})})]})]}),(0,m.jsx)("ul",{className:"app-screen-disign__header--right",children:(0,m.jsx)("li",{onClick:function(){return L.goBack()},children:(0,m.jsx)(o.Z,{})})})]})}},95397:function(e,n,a){a.r(n),a.d(n,{default:function(){return Z}});var r=a(59469),t=a(33374),i=a(44855),c=(a(990),a(39024)),l=a(16340),s=a(39237),d=a(38273),o=a(78288),u=a(61577),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"},f=a(17240),g=function(e,n){return i.createElement(f.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:p}))};g.displayName="FormOutlined";var m=i.forwardRef(g),h=a(95741),x=a(56365),j=a(29072),b=a(7808),v=a(17856),Z=function(e){var n=e.pages,a=e.addLargeScreenPage,p=e.delLargeScreenPage,f=e.modifyLargeScreenPage,g=e.changeLargeScreenPage,Z=e.currentPageId,N=e.leftFlag,y=e.setLeftFlag,S=(0,i.useState)({visible:!1,title:"",details:{}}),w=(0,t.Z)(S,2),k=w[0],V=w[1];return(0,v.jsxs)("div",{className:"app-screen-disign__body--left",style:{left:N?0:-200},children:[(0,v.jsx)(c.Z,{title:k.title,visible:k.visible,footer:null,destroyOnClose:!0,onCancel:function(){return V((function(e){return(0,r.Z)((0,r.Z)({},e),{},{visible:!1})}))},children:(0,v.jsx)(b.default,{setModal:V,addLargeScreenPage:a,modifyLargeScreenPage:f,details:k.details})}),(0,v.jsx)("div",{className:"body",children:(0,v.jsx)(s.Z,{type:"primary",block:!0,onClick:function(){return V((function(e){return{visible:!0,title:"\u65b0\u589e\u9875\u9762",details:{}}}))},icon:(0,v.jsx)(o.Z,{}),children:"\u65b0\u589e\u9875\u9762"})}),(0,v.jsx)("div",{className:"header",children:"\u9875\u9762\u5217\u8868"}),(0,v.jsx)("ul",{className:"page",children:n.map((function(e){return(0,v.jsxs)("li",{"data-id":e.id,onClick:function(){e.id!==Z&&g(e.id,(function(){l.ZP.success("\u9875\u9762\u5207\u6362\u6210\u529f")}))},className:"page-item ".concat(e.id===Z?"is-active":"is-noactive"),children:[(0,v.jsx)("div",{className:"name",children:e.name}),e.id!==Z&&(0,v.jsxs)("div",{className:"page-item__operation",children:[(0,v.jsx)(d.Z,{title:"\u7f16\u8f91",placement:"top",children:(0,v.jsx)("span",{onClick:function(n){return function(e,n){n.stopPropagation(),V((function(n){return{visible:!0,title:"\u65b0\u589e\u9875\u9762",details:e}}))}(e,n)},children:(0,v.jsx)(m,{})})}),(0,v.jsx)(d.Z,{title:"\u5220\u9664",placement:"top",children:(0,v.jsx)("span",{onClick:function(n){return function(e,n){n.stopPropagation(),c.Z.confirm({title:"\u6e29\u99a8\u63d0\u793a",icon:(0,v.jsx)(u.Z,{}),content:"\u786e\u5b9a\u8981\u5220\u9664\u8be5\u9875\u9762\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){p(e.id,(function(){l.ZP.success("\u5220\u9664\u6210\u529f")}))}})}(e,n)},children:(0,v.jsx)(h.Z,{})})})]})]},e.id)}))}),(0,v.jsx)("div",{onClick:function(){return y(!N)},className:"operation",children:N?(0,v.jsx)(x.Z,{}):(0,v.jsx)(j.Z,{})})]})}},61026:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var r=a(59469),t=a(45308),i=a(33374),c=a(44855),l=(a(78431),a(14033)),s=a(67790),d=a(10962),o=a(35025),u=a(59654),p=a(95887),f=a(24318),g=a(2992),m=a(9782),h=a(6533),x=a(39237),j=a(39746),b=a(1222),v=a(24687),Z=a(19530),N=a(39924),y=a(70437),S=a(56365),w=a(29072),k=a(39647),V=a(89648),L=a.n(V),C=(a(45149),a(17856)),I=function(e){var n=e.value,a=e.onChange,t=e.options,i=void 0===t?{}:t,l=(0,c.useRef)(null),s=(0,c.useRef)(null),d=(0,c.useCallback)((function(){if(!s.current){var e=(0,r.Z)({mode:"code",onChange:function(){var e;a&&a(null===(e=s.current)||void 0===e?void 0:e.get())}},i);s.current=new(L())(l.current,e,n)}}),[a,i,n]);return(0,c.useEffect)((function(){d()}),[d]),(0,c.useEffect)((function(){return function(){s.current&&s.current.destroy()}}),[s]),(0,C.jsx)("div",{ref:l,className:"app-json-editor"})},P=k.Z.widgetTypesConfiguration,E=k.Z.widgetConfiguration,_=k.Z.baseConfiguration,F=l.Z.TextArea,W=s.Z.TabPane,z=d.Z.Option,O=o.Z.Panel,R=function(e){var n=e.screen,a=e.modifyScreen,k=e.currentWidgetId,V=e.currentWidget,L=e.modifyLargeScreenElement,R=e.currentPage,q=e.setRightFlag,T=e.rightFlag,A=e.currentWidgetGroupId,G=e.showOrHideLargeScreenElement,H=e.changeLargeScreenElement,B=(0,c.useState)("1"),D=(0,i.Z)(B,2),M=D[0],J=D[1],U=u.Z.useForm(),K=(0,i.Z)(U,1)[0],Y=u.Z.useForm(),X=(0,i.Z)(Y,1)[0],Q=u.Z.useForm(),$=(0,i.Z)(Q,1)[0],ee=u.Z.useForm(),ne=(0,i.Z)(ee,1)[0];(0,c.useEffect)((function(){V.configureValue&&K.setFieldsValue(V.configureValue),V.coordinateValue&&$.setFieldsValue(V.coordinateValue),V.dataValue&&ne.setFieldsValue(V.dataValue)}),[V]);var ae=function(e,n){return Object.prototype.toString.call(e)==n},re=function(e,n,a,r){if(r){var i=JSON.parse(JSON.stringify(V));i[r][n]=a,e&&e(k,i)}else e&&e((0,t.Z)({},n,a))},te=function(e,n,a,r){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return(0,C.jsxs)(C.Fragment,{children:["Input"===e.componentName&&(0,C.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,C.jsx)(l.Z,{allowClear:!0,disabled:e.disabled,onBlur:function(n){return i&&re(a,e.name,n.target.value,r)},placeholder:e.placeholder})}),"InputNumber"===e.componentName&&(0,C.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,C.jsx)(p.Z,{disabled:e.disabled,min:e.min,max:e.max,onBlur:function(n){return i&&re(a,e.name,n.target.value?Number(n.target.value):0,r)},style:{width:"100%"},placeholder:e.placeholder})}),"TextArea"===e.componentName&&(0,C.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,C.jsx)(F,{allowClear:!0,disabled:e.disabled,onBlur:function(n){return i&&re(a,e.name,n.target.value,r)},rows:8,placeholder:e.placeholder})}),"Switch"===e.componentName&&(0,C.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,valuePropName:"checked",rules:[{required:e.require}],children:(0,C.jsx)(f.Z,{disabled:e.disabled||"useInterface"===e.name&&!A,onChange:function(n){return i&&re(a,e.name,n,r)}})}),"Slider"===e.componentName&&(0,C.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,C.jsx)(g.Z,{min:e.min||0,max:e.max||100,disabled:e.disabled,onAfterChange:function(n){return i&&re(a,e.name,n,r)}})}),"Select"===e.componentName&&(0,C.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,C.jsx)(d.Z,{allowClear:!0,disabled:e.disabled,onChange:function(n){return i&&re(a,e.name,n,r)},placeholder:e.placeholder,children:e.options.map((function(e){return(0,C.jsx)(z,{value:e.code,children:e.name},e.code)}))})}),"SketchPicker"===e.componentName&&(0,C.jsx)(u.Z.Item,{label:e.label,children:(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(h.Z,{span:12,children:(0,C.jsx)(u.Z.Item,{noStyle:!0,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,C.jsx)(l.Z,{allowClear:!0,disabled:e.disabled,onBlur:function(n){return i&&re(a,e.name,n.target.value,r)},placeholder:e.placeholder})})}),(0,C.jsx)(h.Z,{span:11,offset:1,children:(0,C.jsx)(u.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(){return(0,C.jsxs)("div",{className:"color-wrapper",style:{background:n.getFieldValue(e.name),width:"100%"},children:["\u83b7\u53d6\u989c\u8272",(0,C.jsx)("div",{className:"color",children:(0,C.jsx)(j.AI,{color:n.getFieldValue(e.name),onChangeComplete:function(c){n.setFieldsValue((0,t.Z)({},e.name,"rgba(".concat(c.rgb.r,",").concat(c.rgb.g,",").concat(c.rgb.b,",").concat(c.rgb.a,")"))),i?re(a,e.name,"rgba(".concat(c.rgb.r,",").concat(c.rgb.g,",").concat(c.rgb.b,",").concat(c.rgb.a,")"),r):n.setFieldValue(e.name,"rgba(".concat(c.rgb.r,",").concat(c.rgb.g,",").concat(c.rgb.b,",").concat(c.rgb.a,")"))}})})]})}})})]})}),"JsonEdit"===e.componentName&&(0,C.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,C.jsx)(u.Z.Item,{shouldUpdate:!0,noStyle:!0,children:(0,C.jsx)(I,{value:n.getFieldValue(e.name),onChange:function(t){return i?re(a,e.name,t,r):n.setFieldValue(e.name,t)}})})})]})},ie=function e(n,a,r,t){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return n.map((function(n,c){if(ae(n,"[object Object]")){var l=void 0!==n.relationFields?n.relationFields.split(","):[];return(0,C.jsx)("div",{children:l.length?(0,C.jsx)(u.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(e){var c=e.getFieldValue;if(l.every((function(e){return n.relationValues.includes(String(c(e)))})))return te(n,a,r,t,i)}}):te(n,a,r,t,i)},c)}if(ae(n,"[object Array]"))return(0,C.jsx)("div",{children:n.map((function(n,c){var l=void 0!==n.relationFields?n.relationFields.split(","):[];return(0,C.jsx)(o.Z,{children:void 0===n.relationFields?(0,C.jsx)(O,{header:n.name,children:e(n.list,a,r,t,i)},n+c):(0,C.jsx)(u.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(s){var d=s.getFieldValue;if(l.every((function(e){return n.relationValues.includes(String(d(e)))})))return(0,C.jsx)(o.Z,{children:(0,C.jsx)(O,{header:n.name,children:e(n.list,a,r,t,i)},n+c)},c)}})},c)}))},c)}))},ce=function(e,n,a){e.stopPropagation(),e.preventDefault(),n!==k&&H(n,a)},le=function(e,n,a){e.stopPropagation(),e.preventDefault(),G(n,a)};return(0,C.jsxs)("div",{className:"app-screen-disign__body--right",style:{right:T?0:-400},children:[(0,C.jsx)("div",{onClick:function(){return q(!T)},className:"operation",children:T?(0,C.jsx)(S.Z,{}):(0,C.jsx)(w.Z,{})}),(0,C.jsxs)(s.Z,{className:"custom-tabs",activeKey:M,onChange:function(e){return J(e)},destroyInactiveTabPane:!0,children:[(0,C.jsx)(W,{tab:"\u56fe\u5c42\u7ba1\u7406",children:(0,C.jsx)(b.Z,{loading:!1,error:!1,nodata:Boolean(R&&R.widgets&&!R.widgets.length),children:(0,C.jsx)("div",{className:"app-screen-disign__layer",children:function e(n,a){return n.map((function(n){return n.widgets?(0,C.jsxs)("div",{className:"app-screen-disign__layer",children:[(0,C.jsxs)("div",{onClick:function(e){return ce(e,n.id,n.id)},className:"header ".concat(n.id===k?"is-active":""),children:[(0,C.jsx)("span",{onClick:function(e){return le(e,n.id)},className:"show",children:"block"===n.configureValue.styleDisplay?(0,C.jsx)(v.Z,{}):(0,C.jsx)(Z.Z,{})}),(0,C.jsx)("span",{className:"file",children:(0,C.jsx)(N.Z,{})}),(0,C.jsx)("span",{className:"label",children:n.label})]}),e(n.widgets,n.id)]},n.id):(0,C.jsx)("div",{className:"app-screen-disign__layer--item",children:(0,C.jsxs)("div",{onClick:function(e){return ce(e,n.id,a)},className:"header ".concat(n.id===k?"is-active":""),children:[(0,C.jsx)("span",{onClick:function(e){return le(e,n.id,a)},className:"show",children:"block"===n.configureValue.styleDisplay?(0,C.jsx)(v.Z,{}):(0,C.jsx)(Z.Z,{})}),(0,C.jsx)("span",{className:"file",children:(0,C.jsx)(y.Z,{})}),(0,C.jsx)("span",{className:"label",children:n.label})]})},n.id)}))}(R.widgets||[])})})},"5"),(0,C.jsx)(W,{tab:"\u9879\u76ee\u914d\u7f6e",children:(0,C.jsx)(u.Z,{preserve:!0,form:X,labelCol:{span:6},wrapperCol:{span:18},autoComplete:"off",labelAlign:"left",initialValues:n,children:ie(_.page.configure||[],X,a,"")})},"1"),k&&!k.includes(",")&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(W,{tab:"\u914d\u7f6e",children:(0,C.jsx)(u.Z,{form:K,labelCol:{span:6},wrapperCol:{span:18},autoComplete:"off",labelAlign:"left",children:P[V.code]?ie(P[V.code].configure||[],K,L,"configureValue",!0):P[V.type]?ie(P[V.type].configure||[],K,L,"configureValue",!0):null})},"2"),P[V.code]&&P[V.code].data||P[V.type]&&P[V.type].data?(0,C.jsx)(W,{tab:"\u6570\u636e",children:(0,C.jsxs)(u.Z,{preserve:!0,form:ne,labelCol:{span:6},wrapperCol:{span:18},autoComplete:"off",labelAlign:"left",onFinish:function(e){var n=JSON.parse(JSON.stringify(V));n.dataValue=e,E[n.code]&&(n.dataValue=(0,r.Z)((0,r.Z)({},E[n.code].dataValue),e),L(k,n))},children:[P[V.code]?ie(P[V.code].data||[],ne,L,"dataValue",!1):P[V.type]?ie(P[V.type].data||[],ne,L,"dataValue",!1):null,(0,C.jsx)(u.Z.Item,{wrapperCol:{offset:6,span:18},children:(0,C.jsx)(x.Z,{type:"primary",htmlType:"submit",block:!0,children:"\u4fdd\u5b58"})})]})},"3"):null,(0,C.jsx)(W,{tab:"\u5750\u6807",children:(0,C.jsx)(u.Z,{preserve:!0,form:$,labelCol:{span:6},wrapperCol:{span:18},autoComplete:"off",labelAlign:"left",children:ie(_.coordinate.configure||[],$,L,"coordinateValue",!0)})},"4")]})]})]})}},48359:function(e,n,a){a.r(n);a(84769);var r=a(17856);n.default=function(){var e=Array.from(new Array(100).keys());return(0,r.jsxs)("div",{className:"app-screen-disign__ruler",children:[(0,r.jsx)("div",{className:"app-screen-disign__ruler--hwrapper",children:(0,r.jsxs)("div",{className:"app-screen-disign__ruler--h",children:[(0,r.jsxs)("span",{className:"ruler-h-50",children:[(0,r.jsx)("b",{children:"50"}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]}),e.map((function(e,n){return(0,r.jsxs)("span",{className:"ruler-h-50",children:[(0,r.jsx)("b",{children:50*n}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]},n)}))]})}),(0,r.jsx)("div",{className:"app-screen-disign__ruler--vwrapper",children:(0,r.jsxs)("div",{className:"app-screen-disign__ruler--v",children:[(0,r.jsxs)("span",{className:"ruler-h-50",children:[(0,r.jsx)("b",{children:"50"}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]}),e.map((function(e,n){return(0,r.jsxs)("span",{className:"ruler-h-50",children:[(0,r.jsx)("b",{children:50*n}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]},n)}))]})})]})}},42054:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var r=a(33374),t=a(44855),i=a(61038),c=a(2992),l=a(25162),s=a(78648),d=a(95397),o=a(61026),u=a(48359),p=a(50928),f=(a(80447),a(17856)),g={getLargeScreenPages:function(e){return function(n){n(function(e){return{type:l.OV,datas:e}}(e))}},addLargeScreenPage:function(e,n){return function(a){a(function(e){return{type:l.zN,data:e}}(e)),n&&n()}},delLargeScreenPage:function(e,n){return function(a){a(function(e){return{type:l.m,id:e}}(e)),n&&n()}},modifyLargeScreenPage:function(e,n,a){return function(r){r(function(e,n){return{type:l.Vo,id:e,data:n}}(e,n)),a&&a()}},addLargeScreenElement:function(e,n){return function(a){a(function(e,n){return{type:l.WI,data:e,groupId:n}}(e,n))}},delLargeScreenElement:function(){return function(e){e({type:l.Kq})}},modifyLargeScreenElement:function(e,n){return function(a){a(function(e,n){return{type:l.CO,id:e,data:n}}(e,n))}},undoLargeScreen:function(){return function(e){e({type:l.ZY})}},redoLargeScreen:function(){return function(e){e({type:l.iZ})}},modifyScreen:function(e){return function(n){n(function(e){return{type:l.t0,datas:e}}(e))}},changeLargeScreenPage:function(e,n){return function(a){a(function(e){return{type:l.zI,id:e}}(e)),n&&n()}},changeLargeScreenElement:function(e,n){return function(a){a(function(e,n){return{type:l.gT,id:e,groupId:n}}(e,n))}},copyLargeScreenElement:function(){return function(e){e({type:l.TQ})}},group:function(){return function(e){e({type:l.oG})}},cancelGroup:function(){return function(e){e({type:l.PY})}},showOrHideLargeScreenElement:function(e,n){return function(a){a(function(e,n){return{type:l.bR,id:e,groupId:n}}(e,n))}}},m=(0,i.$j)((function(e){return{pages:e.largeScreen.pages,pastPage:e.largeScreen.pastPage,futurePage:e.largeScreen.futurePage,currentPage:e.largeScreen.currentPage,currentWidgetId:e.largeScreen.currentWidgetId,screen:e.largeScreen.screen,currentWidget:e.largeScreen.currentWidget,currentWidgetGroupId:e.largeScreen.currentWidgetGroupId}}),g)((function(e){var n=e.modifyScreen,a=e.screen,i=e.pages,l=e.addLargeScreenPage,g=e.delLargeScreenPage,m=e.modifyLargeScreenPage,h=e.changeLargeScreenPage,x=e.addLargeScreenElement,j=e.currentPage,b=e.currentWidgetId,v=e.currentWidget,Z=e.modifyLargeScreenElement,N=e.pastPage,y=e.futurePage,S=e.undoLargeScreen,w=e.redoLargeScreen,k=e.changeLargeScreenElement,V=e.currentWidgetGroupId,L=e.delLargeScreenElement,C=e.copyLargeScreenElement,I=e.group,P=e.cancelGroup,E=e.showOrHideLargeScreenElement,_=(0,t.useRef)(null),F=(0,t.useState)({}),W=(0,r.Z)(F,2),z=W[0],O=W[1],R=(0,t.useState)(0),q=(0,r.Z)(R,2),T=q[0],A=q[1],G=(0,t.useState)(!0),H=(0,r.Z)(G,2),B=H[0],D=H[1],M=(0,t.useState)(!0),J=(0,r.Z)(M,2),U=J[0],K=J[1];(0,t.useEffect)((function(){z.width&&a.width&&A(Number((z.width/Number(a.width)).toFixed(4)))}),[a.width,z.width]),(0,t.useEffect)((function(){var e=function(){var e;O({width:null===(e=_.current)||void 0===e?void 0:e.offsetWidth})};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[_.current]);return(0,f.jsxs)("div",{className:"app-screen-disign",children:[(0,f.jsx)(s.default,{undoLargeScreen:S,redoLargeScreen:w,addLargeScreenElement:x,currentPageId:j.id,pastPage:N,futurePage:y,currentWidgetId:b,modifyLargeScreenElement:Z,delLargeScreenElement:L,copyLargeScreenElement:C,currentWidgetGroupId:V,group:I,cancelGroup:P,currentWidget:v}),(0,f.jsxs)("div",{className:"app-screen-disign__body",children:[(0,f.jsx)(d.default,{setLeftFlag:D,leftFlag:B,pages:i,addLargeScreenPage:l,delLargeScreenPage:g,modifyLargeScreenPage:m,currentPageId:j.id,changeLargeScreenPage:h}),(0,f.jsxs)("div",{style:{paddingLeft:B?200:0,paddingRight:U&&i.length?400:0},className:"app-screen-disign__body--center",children:[(0,f.jsx)("div",{className:"body",ref:_,children:(0,f.jsxs)("div",{className:"elements-wrap",children:[(0,f.jsx)(u.default,{}),(0,f.jsx)("div",{onClick:function(e){b&&k("")},className:"elements-wrap-canvas",style:{position:"absolute",zIndex:1,left:66,top:66,width:a.width,height:a.height,transform:"scale(".concat(T,")"),transformOrigin:"0 0",background:"url(".concat(a.backgroundImage,") no-repeat ").concat(a.backgroundColor,"  0% 0% / 100% 100%")},children:(0,f.jsx)(p.default,{currentPage:j,currentWidgetId:b,cale:T,screen:a,currentWidgetGroupId:V,changeLargeScreenElement:k,currentWidget:v,modifyLargeScreenElement:Z})})]})}),(0,f.jsxs)("div",{className:"footer",children:[(0,f.jsx)("span",{children:"\u7f29\u653e\u6bd4\u4f8b\uff1a"}),(0,f.jsx)(c.Z,{style:{width:300},min:5,max:100,tipFormatter:function(e){return"".concat(e,"%")},onChange:function(e){return A(e/100)},value:100*T})]})]}),i.length?(0,f.jsx)(o.default,{rightFlag:U,setRightFlag:K,screen:a,currentPage:j,modifyLargeScreenElement:Z,modifyScreen:n,currentWidget:v,showOrHideLargeScreenElement:E,changeLargeScreenElement:k,currentWidgetGroupId:V,currentWidgetId:b}):null]})]})}))},95741:function(e,n,a){a.d(n,{Z:function(){return s}});var r=a(59469),t=a(44855),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=a(17240),l=function(e,n){return t.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};l.displayName="DeleteOutlined";var s=t.forwardRef(l)},21492:function(e,n,a){a.r(n),n.default={}},990:function(e,n,a){a.r(n),n.default={}},78431:function(e,n,a){a.r(n),n.default={}},84769:function(e,n,a){a.r(n),n.default={}},80447:function(e,n,a){a.r(n),n.default={}}}]);