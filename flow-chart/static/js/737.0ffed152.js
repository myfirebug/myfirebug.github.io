"use strict";(self.webpackChunkflow_chart=self.webpackChunkflow_chart||[]).push([[737,940,997,469,4,635],{65035:function(e,s,t){t.r(s);var a=t(29439),n=t(72791),r=t(6362),c=t(80542),d=(t(5940),t(1992)),i=t(80184);s.default=function(){var e=(0,n.useContext)(d.DiagramsConfigurationContext),s=(0,n.useState)(!1),t=(0,a.Z)(s,2),l=t[0],u=t[1],o=r.l0.useForm(),f=(0,a.Z)(o,1)[0],p=(0,c.k6)();(0,n.useEffect)((function(){f&&(0,f.setFieldValue)("title",e.data.title)}),[f,e.data.title]);var x=(0,n.useCallback)((function(s,t){switch(s){case"del":e.dispatch({type:"DEL_CARD"});break;case"copy":e.dispatch({type:"COPY_CARD"});break;case"selectAll":e.dispatch({type:"SELECT_ALL"});break;case"align":e.dispatch({type:"CARDS_ALIGN",align:t});break;case"undo":e.dispatch({type:"UNDO"});break;case"redo":e.dispatch({type:"REDO"})}}),[e]),h=(0,n.useCallback)((function(e){var s=e.ctrlKey,t=e.keyCode;if(s)switch(e.preventDefault(),t){case 65:x("selectAll");break;case 67:x("copy");break;case 76:x("align","left");break;case 82:x("align","right");break;case 84:x("align","top");break;case 66:x("align","bottom");break;case 83:break;case 90:x("undo");break;case 89:x("redo")}}),[x]);return(0,n.useEffect)((function(){return window.addEventListener("keydown",h),function(){window.removeEventListener("keydown",h)}}),[h]),(0,i.jsxs)("div",{className:"app-diagrams-configuration__header",children:[(0,i.jsxs)("div",{className:"left",children:[(0,i.jsx)(r.u,{placement:"bottom",title:"\u8fd4\u56de",children:(0,i.jsx)("div",{className:"return app-icon",onClick:function(){return p.goBack()},children:"\ue720"})}),(0,i.jsx)("div",{className:"app-icon logo",children:"\ue605"}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)("div",{className:"top",children:[(0,i.jsx)("span",{className:"title",children:e.data.title}),(0,i.jsx)("span",{className:"app-icon",onClick:function(){return u(!0)},children:"\uec88"})]}),(0,i.jsxs)("ul",{className:"menu",children:[(0,i.jsxs)("li",{className:"menu-item",children:[(0,i.jsx)("div",{className:"name",children:"\u6587\u4ef6"}),(0,i.jsxs)("dl",{className:"sub-menu",children:[(0,i.jsxs)("dd",{onClick:function(){return u(!0)},children:[(0,i.jsx)("span",{className:"app-icon",children:"\uec88"}),(0,i.jsx)("span",{className:"name",children:"\u91cd\u547d\u540d"})]}),(0,i.jsxs)("dd",{children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue63b"}),(0,i.jsx)("span",{className:"name",children:"\u4fdd\u5b58"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+S"})]}),(0,i.jsxs)("dd",{children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue8e7"}),(0,i.jsx)("span",{className:"name",children:"\u5173\u95ed"})]})]})]}),(0,i.jsxs)("li",{className:"menu-item",children:[(0,i.jsx)("div",{className:"name",children:"\u7f16\u8f91"}),(0,i.jsxs)("dl",{className:"sub-menu",children:[(0,i.jsxs)("dd",{onClick:function(){return x("undo")},className:0===e.data.undo.length?"is-disabled":"",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue61e"}),(0,i.jsx)("span",{className:"name",children:"\u64a4\u9500"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+Z"})]}),(0,i.jsxs)("dd",{onClick:function(){return x("redo")},className:0===e.data.redo.length?"is-disabled":"",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue60f"}),(0,i.jsx)("span",{className:"name",children:"\u6062\u590d"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+Y"})]}),(0,i.jsxs)("dd",{onClick:function(){return x("copy")},className:e.data.selectedCardsIds?"":"is-disabled",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue8b0"}),(0,i.jsx)("span",{className:"name",children:"\u62f7\u8d1d"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+C"})]}),(0,i.jsxs)("dd",{onClick:function(){return x("del")},className:e.data.selectedCardsIds?"":"is-disabled",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue7c3"}),(0,i.jsx)("span",{className:"name",children:"\u5220\u9664"}),(0,i.jsx)("span",{className:"value",children:"Delete"})]})]})]}),(0,i.jsxs)("li",{className:"menu-item",children:[(0,i.jsx)("div",{className:"name",children:"\u9009\u62e9"}),(0,i.jsx)("dl",{className:"sub-menu",children:(0,i.jsxs)("dd",{onClick:function(){return x("selectAll")},className:e.data.cards.length?"":"is-disabled",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue9c5"}),(0,i.jsx)("span",{className:"name",children:"\u5168\u9009"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+A"})]})})]}),(0,i.jsxs)("li",{className:"menu-item",children:[(0,i.jsx)("div",{className:"name",children:"\u5bf9\u9f50"}),(0,i.jsxs)("dl",{className:"sub-menu",children:[(0,i.jsxs)("dd",{onClick:function(){return x("align","left")},className:e.data.selectedCardsIds&&e.data.selectedCardsIds.split(",").length>1?"":"is-disabled",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue602"}),(0,i.jsx)("span",{className:"name",children:"\u5de6\u5bf9\u9f50"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+L"})]}),(0,i.jsxs)("dd",{onClick:function(){return x("align","right")},className:e.data.selectedCardsIds&&e.data.selectedCardsIds.split(",").length>1?"":"is-disabled",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue65b"}),(0,i.jsx)("span",{className:"name",children:"\u53f3\u5bf9\u9f50"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+R"})]}),(0,i.jsxs)("dd",{onClick:function(){return x("align","top")},className:e.data.selectedCardsIds&&e.data.selectedCardsIds.split(",").length>1?"":"is-disabled",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue603"}),(0,i.jsx)("span",{className:"name",children:"\u9876\u7aef\u5bf9\u9f50"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+T"})]}),(0,i.jsxs)("dd",{onClick:function(){return x("align","bottom")},className:e.data.selectedCardsIds&&e.data.selectedCardsIds.split(",").length>1?"":"is-disabled",children:[(0,i.jsx)("span",{className:"app-icon",children:"\ue604"}),(0,i.jsx)("span",{className:"name",children:"\u5e95\u7aef\u5bf9\u9f50"}),(0,i.jsx)("span",{className:"value",children:"Ctrl+B"})]})]})]})]})]})]}),(0,i.jsx)("div",{className:"right",children:(0,i.jsx)(r.zx,{type:"primary",children:"\u4fdd\u5b58"})}),(0,i.jsx)(r.u_,{title:"\u4fee\u6539\u6d41\u7a0b\u56fe\u6807\u9898",open:l,onOk:function(){(0,f.validateFields)().then((function(s){e.dispatch({type:"MODIFY_DIAGRAMS_TITLE",title:s.title}),r.yw.success("\u4fee\u6539\u6210\u529f"),u(!1)}))},onCancel:function(){u(!1)},children:(0,i.jsx)(r.l0,{style:{maxWidth:600},autoComplete:"off",form:f,children:(0,i.jsx)(r.l0.Item,{label:"\u6d41\u7a0b\u56fe\u540d\u79f0",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6d41\u7a0b\u56fe\u540d\u79f0"}],children:(0,i.jsx)(r.II,{})})})})]})}},99512:function(e,s,t){t.r(s);var a=t(1413),n=t(29439),r=t(72791),c=t(6362),d=t(10133),i=(t(59997),t(28101)),l=t(1992),u=t(80184),o=c.UO.Panel;s.default=function(){var e=(0,r.useContext)(l.DiagramsConfigurationContext),s=(0,r.useState)([]),t=(0,n.Z)(s,2),f=t[0],p=t[1],x=(0,r.useState)([]),h=(0,n.Z)(x,2),m=h[0],C=h[1];(0,r.useEffect)((function(){i.Z.cardList().then((function(e){var s=e.data;p(s.filter((function(e){return"base"===e.type}))),C(s.filter((function(e){return"other"===e.type})))}))}),[]);var g=(0,r.useCallback)((function(s){e.dispatch({type:"ADD_CARD",data:(0,a.Z)((0,a.Z)({},s),{},{id:(0,d.M8)(),inParams:s.inParams?s.inParams.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:(0,d.M8)()})})):[],ports:s.ports?s.ports.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:(0,d.M8)()})})):[]})})}),[e]);return(0,u.jsx)("div",{className:"app-diagrams-configuration__menus",children:(0,u.jsx)("div",{className:"body",children:(0,u.jsxs)(c.UO,{defaultActiveKey:["1"],children:[(0,u.jsx)(o,{header:"\u57fa\u7840\u5361\u7247",children:(0,u.jsx)("ul",{className:"menu-list",children:f.map((function(e){return(0,u.jsx)("li",{className:"menu-item",onClick:function(){return g(e)},children:e.title},e.id)}))})},"1"),(0,u.jsx)(o,{header:"\u5176\u4ed6\u5361\u7247",children:(0,u.jsx)("ul",{className:"menu-list",children:m.map((function(e){return(0,u.jsx)("li",{className:"menu-item",onClick:function(){return g(e)},children:e.title},e.id)}))})},"2")]})})})}},76485:function(e,s,t){t.r(s);var a=t(1413),n=t(72791),r=t(6362),c=(t(95469),t(25925)),d=t(1992),i=t(80184);s.default=function(){var e=(0,n.useContext)(d.DiagramsConfigurationContext),s=(0,n.useMemo)((function(){var s=e.data,t=s.cards,a=s.selectedCardsIds,n=[];if(a&&a.includes(","))return n;var r=t.findIndex((function(e){return a&&a.includes(e.id)}));return-1!==r&&(n=t[r].inParams),n}),[e]),t=(0,n.useCallback)((function(s,t){var n=e.data,r=n.cards,c=n.selectedCardsIds;if(c&&!c.includes(",")){var d=r.find((function(e){return e.id===c})),i=null===d||void 0===d?void 0:d.inParams;i&&e.dispatch({type:"MODIFY_CARD",data:{inParams:i.map((function(e){return e.id===s?(0,a.Z)((0,a.Z)({},e),{},{value:t}):e}))}})}}),[e]);return(0,i.jsx)("div",{className:"app-diagrams-configuration__settings",children:(0,i.jsx)("div",{className:"body",children:(0,i.jsxs)(r.mQ,{defaultActiveKey:"1",centered:!0,destroyInactiveTabPane:!0,children:[(0,i.jsx)(r.mQ.TabPane,{tab:"\u56fe\u5c42",children:e.data.cards.length?(0,i.jsx)("ul",{className:"card-list",children:e.data.cards.map((function(s){return(0,i.jsx)("li",{onClick:function(){return e.dispatch({type:"SELECTS_CARD",ids:s.id})},className:"card-item ".concat(e.data.selectedCardsIds&&e.data.selectedCardsIds.includes(s.id)?"is-active":""),children:(0,i.jsx)("div",{className:"title",children:s.title})},s.id)}))}):(0,i.jsx)(r.x4,{status:"404",title:"\u6682\u65e0\u6570\u636e",subTitle:"\u70b9\u51fb\u5361\u7247\uff0c\u6dfb\u52a0\u5361\u7247"})},"1"),(0,i.jsx)(r.mQ.TabPane,{tab:"\u914d\u7f6e",children:s.length?(0,i.jsx)(c.Z,{list:s,changeHandler:t}):(0,i.jsx)(r.x4,{status:"404",title:"\u6682\u65e0\u6570\u636e",subTitle:"\u9700\u8981\u9009\u4e2d\u5355\u4e2a\u5361\u7247\u624d\u6709\u6570\u636e\u54e6"})},"2")]})})})}},1992:function(e,s,t){t.r(s),t.d(s,{DiagramsConfigurationContext:function(){return C},default:function(){return g}});var a=t(1413),n=t(29439),r=t(72791),c=t(89982),d=t(65035),i=t(76485),l=t(99512),u=(t(82004),t(25161)),o=t(10133),f=t(30256),p=t(80184),x=function(e){var s=e.s,t=e.e,a=(0,r.useMemo)((function(){var e=Math.abs(t.y-s.y),a=Math.floor(e/3*2),n={x:s.x,y:s.y+4+a},r={x:t.x,y:t.y-4-a};return"M ".concat(s.x," ").concat(s.y,"\n       L ").concat(s.x," ").concat(s.y+4,"\n       C ").concat(n.x," ").concat(n.y," ").concat(r.x," ").concat(r.y," ").concat(t.x," ").concat(t.y-4,"\n       L ").concat(t.x," ").concat(t.y,"\n      ")}),[s,t]);return(0,p.jsx)(c.Path,{data:a,stroke:"#1890ff",strokeWidth:2})},h=t(6362),m=t(39233),C=r.createContext({data:u.initialState,dispatch:function(){}}),g=function(){var e=(0,r.useReducer)(u.diagrams,u.initialState),s=(0,n.Z)(e,2),t=s[0],g=s[1],y=(0,r.useState)({x:0,y:0,width:window.innerWidth-600,height:window.innerHeight-62}),j=(0,n.Z)(y,2),D=j[0],I=j[1],N=(0,r.useRef)(""),v=(0,r.useState)({sx:0,sy:0,ex:0,ey:0,distanceCardX:0,distanceCardY:0,distanceStageX:0,distanceStageY:0,distanceGroupX:0,distanceGroupY:0}),Z=(0,n.Z)(v,2),A=Z[0],_=Z[1],E=(0,r.useState)(""),S=(0,n.Z)(E,2),R=S[0],b=S[1],k=(0,r.useRef)({id:"",source:{cell:"",port:""},target:{cell:"",port:""},data:{source:"",target:""}});(0,r.useEffect)((function(){I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{x:t.x,y:t.y})}))}),[t.x,t.y]),(0,r.useEffect)((function(){var e=function(){I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{width:window.innerWidth-600,height:window.innerHeight-62})}))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,r.useEffect)((function(){(0,o.Gr)("id")||g({type:"DIAGRAMS",data:{id:null,title:"\u672a\u547d\u540d\u6d41\u7a0b\u56fe",description:"",selectedCardsIds:"",x:0,y:0,cards:[],edges:[],undo:[],redo:[]}})}),[]);var O=(0,r.useCallback)((function(e){var s=e.evt,n=s.offsetX,r=s.offsetY,c=s.ctrlKey,d=e.target.attrs,i=d.type,l=d.id,u=d.cardId,f=d.portId,p=d.group;switch(i&&(N.current=i),i){case"stage":t.selectedCardsIds&&g({type:"SELECTS_CARD",ids:""});break;case"port":b(p),k.current={id:(0,o.M8)(),source:{cell:"right"===p?u:"",port:"right"===p?f:""},target:{cell:"left"===p?u:"",port:"left"===p?f:""},data:{source:"right"===p?u:"",target:"left"===p?u:""}}}"stage"!==i&&(t.selectedCardsIds&&t.selectedCardsIds.includes(l)||g({type:"SELECTS_CARD",ids:l||u}),c&&!t.selectedCardsIds.includes(l)&&g({type:"SELECTS_CARD",ids:t.selectedCardsIds?"".concat(t.selectedCardsIds,",").concat(l):l})),_((function(e){return(0,a.Z)((0,a.Z)({},e),{},{sx:n,sy:r,ex:n,ey:r,distanceCardX:n-e.distanceGroupX,distanceCardY:r-e.distanceGroupY,distanceStageX:n-D.x,distanceStageY:r-D.y,distanceGroupX:0,distanceGroupY:0})}))}),[t.selectedCardsIds,D.x,D.y,k]),M=(0,r.useCallback)((function(e){var s=e.evt,t=s.offsetX,n=s.offsetY;switch(_((function(e){return(0,a.Z)((0,a.Z)({},e),{},{ex:t,ey:n})})),N.current){case"move":_((function(e){return(0,a.Z)((0,a.Z)({},e),{},{distanceGroupX:t-e.distanceCardX,distanceGroupY:n-e.distanceCardY})}));break;case"stage":I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{x:t-A.distanceStageX,y:n-A.distanceStageY})}))}}),[A.distanceStageX,A.distanceStageY]),G=(0,r.useCallback)((function(e){var s=e.target.attrs,n=s.type,r=s.cardId,c=s.portId,d=s.group;switch(n){case"stage":g({type:"MODIFY_DIAGRAMS_COORDINATE",coordinate:{x:D.x,y:D.y}});break;case"port":if(!d)return;if(R!==d){var i=(0,a.Z)((0,a.Z)({},k.current),{},{source:{cell:"right"===d?r:k.current.source.cell,port:"right"===d?c:k.current.source.port},target:{cell:"left"===d?r:k.current.target.cell,port:"left"===d?c:k.current.target.port},data:{source:"right"===d?r:k.current.source.cell,target:"left"===d?r:k.current.target.cell}});if(i.source.cell===i.target.cell)return void h.yw.error("\u540c\u4e00\u5361\u7247\u4e0d\u80fd\u8fde\u63a5");if(t.edges.length)-1===t.edges.findIndex((function(e){return e.source.cell===i.source.cell&&e.source.port===i.source.port||e.target.cell===i.target.cell&&e.target.port===i.target.port}))?g({type:"ADD_EDGE",edge:i}):h.yw.error("\u8be5\u8282\u70b9\u5df2\u7ecf\u8fde\u63a5\u4e86");else g({type:"ADD_EDGE",edge:i})}else h.yw.error("\u53ea\u80fdinPort\u8fde\u63a5outPort");break;case"move":_((function(e){return g({type:"MODIFY_CARDS_COORDINATE",coordinate:{x:e.distanceGroupX,y:e.distanceGroupY}}),(0,a.Z)((0,a.Z)({},e),{},{distanceGroupX:0,distanceGroupY:0})}))}N.current=""}),[N,D.x,D.y,R,t.edges,k]),L=(0,r.useMemo)((function(){var e=[],s=t.edges,a=t.cards,n=t.selectedCardsIds;return s&&s.forEach((function(s){var t={id:s.id,target:{x:0,y:0},source:{x:0,y:0}},r=a.find((function(e){return e.id===s.data.source})),c=a.find((function(e){return e.id===s.data.target}));if(r&&c){var d=n&&n.includes(r.id),i=n&&n.includes(c.id),l={source:{x:d?A.distanceGroupX:0,y:d?A.distanceGroupY:0},target:{x:i?A.distanceGroupX:0,y:i?A.distanceGroupY:0}},u=r.ports.find((function(e){return e.id===s.source.port})),o=c.ports.find((function(e){return e.id===s.target.port}));u&&o&&("left"===u.group?(t.source.x=r.x+m.JX+m.cu/2+l.source.x,t.source.y=r.y+m.Qf+m.eE+m.cu/2+ +l.source.y):(t.source.x=r.x+r.width-m.JX-m.cu/2+ +l.source.x,t.source.y=r.y+m.Qf+m.eE+m.cu/2+ +l.source.y),"left"===o.group?(t.target.x=c.x+m.JX+m.cu/2+l.target.x,t.target.y=c.y+m.Qf+m.eE+m.cu/2+ +l.target.y):(t.target.x=c.x+c.width-m.JX-m.cu/2+ +l.target.x,t.target.y=c.y+m.Qf+m.eE+m.cu/2+ +l.target.y),e.push(t))}})),e}),[t,A.distanceGroupX,A.distanceGroupY]),w=(0,r.useMemo)((function(){return t.selectedCardsIds?t.cards.filter((function(e){return t.selectedCardsIds.includes(e.id)})):[]}),[t]),Y=(0,r.useMemo)((function(){return t.selectedCardsIds?t.cards.filter((function(e){return!t.selectedCardsIds.includes(e.id)})):t.cards}),[t]);return(0,p.jsx)(C.Provider,{value:{dispatch:g,data:t},children:(0,p.jsxs)("div",{className:"app-diagrams-configuration",children:[(0,p.jsx)(d.default,{}),(0,p.jsxs)("div",{className:"app-diagrams-configuration__body",children:[(0,p.jsx)(l.default,{}),(0,p.jsx)("div",{className:"app-diagrams-configuration__container",id:"js_stage",children:(0,p.jsxs)(c.Stage,(0,a.Z)((0,a.Z)({},D),{},{type:"stage",onMouseDown:O,onMouseMove:M,onMouseUp:G,children:[(0,p.jsxs)(c.Layer,{children:[Y?Y.map((function(e){return(0,p.jsx)(f.Z,{config:e,SelectedCardsIds:t.selectedCardsIds},e.id)})):null,(0,p.jsx)(c.Group,{x:A.distanceGroupX,y:A.distanceGroupY,children:w?w.map((function(e){return(0,p.jsx)(f.Z,{config:e,SelectedCardsIds:t.selectedCardsIds},e.id)})):null})]}),(0,p.jsx)(c.Layer,{children:"port"===N.current?(0,p.jsx)(x,{s:{x:A.sx-t.x,y:A.sy-t.y},e:{x:A.ex-t.x,y:A.ey-t.y}}):null}),(0,p.jsx)(c.Layer,{children:L.map((function(e){return(0,p.jsx)(x,{s:{x:e.source.x,y:e.source.y},e:{x:e.target.x,y:e.target.y}},e.id)}))})]}))}),(0,p.jsx)(i.default,{})]}),(0,p.jsx)("div",{className:"app-diagrams-configuration__footer"})]})})}},25161:function(e,s,t){t.r(s),t.d(s,{diagrams:function(){return o},initialState:function(){return l}});var a=t(1413),n=t(93433),r=t(39233),c=t(6635),d=t(10133),i=function(e){var s=r.Qf;return e.ports.some((function(e){return e.visible}))&&(s+=r.cu+r.eE),e.inParams.forEach((function(){s+=r.cu})),s+=r.eE},l={id:null,title:"",description:"",createTime:"",selectedCardsIds:"",x:0,y:0,cards:[],edges:[],undo:[],redo:[]};function u(e){var s=(0,n.Z)(e.undo),t=(0,n.Z)(e.redo);if(s.length>=50){var a=s.shift();s.push({x:e.x,y:e.y,title:e.title,cards:e.cards,edges:e.edges,selectedCardsIds:e.selectedCardsIds}),0!==t.length&&a&&(t.pop(),t.unshift(a))}else s.push({x:e.x,y:e.y,title:e.title,cards:e.cards,edges:e.edges,selectedCardsIds:e.selectedCardsIds});return{undo:s,redo:t}}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,s=arguments.length>1?arguments[1]:void 0,t=JSON.parse(JSON.stringify(e));switch(s.type){case c.DIAGRAMS:return(0,a.Z)((0,a.Z)({},s.data),{},{cards:s.data.cards.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{height:i(e)})}))});case c.MODIFY_DIAGRAMS_TITLE:return(0,a.Z)((0,a.Z)({},t),{},{title:s.title},u(t));case c.ADD_CARD:return(0,a.Z)((0,a.Z)({},t),{},{cards:[].concat((0,n.Z)(t.cards),[(0,a.Z)((0,a.Z)({},s.data),{},{x:s.data.x-t.x,y:s.data.y-t.y,ports:s.data.ports.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:(0,d.M8)()})})),height:i(s.data)})]),selectedCardsIds:s.data.id},u(t));case c.MODIFY_CARD:return(0,a.Z)((0,a.Z)({},t),{},{cards:t.cards.map((function(e){return t.selectedCardsIds.includes(e.id)?(0,a.Z)((0,a.Z)({},e),s.data):e}))},u(t));case c.SELECTS_CARD:return(0,a.Z)((0,a.Z)({},t),{},{selectedCardsIds:s.ids});case c.MODIFY_DIAGRAMS_COORDINATE:return(0,a.Z)((0,a.Z)((0,a.Z)({},t),s.coordinate),u(t));case c.MODIFY_CARDS_COORDINATE:return(0,a.Z)((0,a.Z)({},t),{},{cards:t.cards.map((function(e){return t.selectedCardsIds&&t.selectedCardsIds.includes(e.id)?(0,a.Z)((0,a.Z)({},e),{},{x:e.x+s.coordinate.x,y:e.y+s.coordinate.y}):e}))},u(t));case c.ADD_EDGE:return(0,a.Z)((0,a.Z)({},t),{},{edges:[].concat((0,n.Z)(t.edges),[s.edge])},u(t));case c.DEL_CARD:return(0,a.Z)((0,a.Z)({},t),{},{cards:t.cards.filter((function(e){return!t.selectedCardsIds.includes(e.id)})),edges:t.edges.filter((function(e){return!t.selectedCardsIds.includes(e.data.source)&&!t.selectedCardsIds.includes(e.data.target)})),selectedCardsIds:""},u(t));case c.COPY_CARD:var r=[],o=t.cards.filter((function(e){return t.selectedCardsIds.includes(e.id)})).map((function(e){var s=(0,d.M8)();return r.push(s),(0,a.Z)((0,a.Z)({},e),{},{title:"".concat(e.title,"[\u590d\u5236]"),id:s,ports:e.ports.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:(0,d.M8)()})}))})}));return(0,a.Z)((0,a.Z)({},t),{},{cards:[].concat((0,n.Z)(t.cards),(0,n.Z)(o)),selectedCardsIds:r.join(",")},u(t));case c.SELECT_ALL:var f=[];return t.cards.forEach((function(e){f.push(e.id)})),(0,a.Z)((0,a.Z)({},t),{},{selectedCardsIds:f.join(",")},u(t));case c.CARDS_ALIGN:for(var p=t.cards.filter((function(e){return t.selectedCardsIds.includes(e.id)})),x=p[0].x,h=p[0].y,m=p[0].y+p[0].height,C=p[0].x+p[0].width,g=1;g<p.length;g++)x>=p[g].x&&(x=p[g].x),h>=p[g].y&&(h=p[g].y),m<=p[g].y+p[g].height&&(m=p[g].y+p[g].height),C<=p[g].x+p[g].width&&(C=p[g].x+p[g].width);return t.cards=t.cards.map((function(e){return t.selectedCardsIds.includes(e.id)?(0,a.Z)((0,a.Z)({},e),{},{x:"left"===s.align?x:"right"===s.align?C-e.width:e.x,y:"top"===s.align?h:"bottom"===s.align?m-e.height:e.y}):e})),(0,a.Z)((0,a.Z)({},t),u(t));case c.UNDO:if(t.undo.length){var y=t.undo.pop();y&&(t=(0,a.Z)((0,a.Z)({},t),{},{redo:[].concat((0,n.Z)(t.redo),[{x:t.x,y:t.y,title:t.title,cards:t.cards,edges:t.edges,selectedCardsIds:t.selectedCardsIds}])},y))}return(0,a.Z)({},t);case c.REDO:if(t.redo.length){var j=t.redo.pop();j&&(t=(0,a.Z)((0,a.Z)({},t),{},{undo:[].concat((0,n.Z)(t.undo),[{x:t.x,y:t.y,title:t.title,cards:t.cards,edges:t.edges,selectedCardsIds:t.selectedCardsIds}])},j))}return(0,a.Z)({},t);default:return e}}},6635:function(e,s,t){t.r(s),t.d(s,{ADD_CARD:function(){return c},ADD_EDGE:function(){return u},CARDS_ALIGN:function(){return x},COPY_CARD:function(){return f},DEL_CARD:function(){return o},DIAGRAMS:function(){return a},MODIFY_CARD:function(){return d},MODIFY_CARDS_COORDINATE:function(){return i},MODIFY_DIAGRAMS_COORDINATE:function(){return r},MODIFY_DIAGRAMS_TITLE:function(){return n},REDO:function(){return m},SELECTS_CARD:function(){return l},SELECT_ALL:function(){return p},UNDO:function(){return h}});var a="DIAGRAMS",n="MODIFY_DIAGRAMS_TITLE",r="MODIFY_DIAGRAMS_COORDINATE",c="ADD_CARD",d="MODIFY_CARD",i="MODIFY_CARDS_COORDINATE",l="SELECTS_CARD",u="ADD_EDGE",o="DEL_CARD",f="COPY_CARD",p="SELECT_ALL",x="CARDS_ALIGN",h="UNDO",m="REDO"},5940:function(e,s,t){t.r(s),s.default={}},59997:function(e,s,t){t.r(s),s.default={}},95469:function(e,s,t){t.r(s),s.default={}},82004:function(e,s,t){t.r(s),s.default={}}}]);