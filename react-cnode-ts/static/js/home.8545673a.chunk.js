(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{111:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var c=t(60),n=t.n(c),s=t(74),i=t(4),r=t(63),o=t(48),u=t(0),l=(t(77),t(50)),j=t.n(l),b=t(1),m=function(e){var a=e.tab,t=e.onChange,c=Object(u.useState)([{name:"\u5168\u90e8",value:""},{name:"\u95ee\u7b54",value:"ask"},{name:"\u5206\u4eab",value:"share"},{name:"\u62db\u8058",value:"job"},{name:"\u7cbe\u534e",value:"good"},{name:"\u6d4b\u8bd5",value:"dev"}]),n=Object(o.a)(c,1)[0];return Object(b.jsx)("div",{className:"sz-tab",children:n.map((function(e){return Object(b.jsx)("div",{onClick:function(){window.scrollTo(0,0),t((function(a){return Object(i.a)(Object(i.a)({},a),{},{tab:e.value,page:1,LOADING:!0,update:e.value!==a.tab?(new Date).getTime():a.update})}))},className:j()("sz-tab__item",{"is-active":e.value===a}),children:e.name},e.value)}))})},O=t(20),d=t(16),p=t(3),h=(t(78),Object(u.memo)((function(e){var a=e.title,t=e.reply_count,c=e.visit_count,n=e.author,s=e.top,i=e.create_at,r=e.good,o=e.tab,l=e.id,j=Object(p.g)(),m=Object(u.useMemo)((function(){var e="";if(r)e="\u7cbe\u534e";else if(s)e="\u7f6e\u9876";else switch(o){case"share":e="\u5206\u4eab";break;case"ask":e="\u95ee\u7b54";break;case"job":e="\u62db\u8058";break;default:e="\u6682\u65e0"}return e}),[r,o,s]);return Object(b.jsxs)("div",{className:"sz-topics__item",children:[Object(b.jsxs)("div",{className:"sz-topics__header",onClick:function(){return j.push("/my?loginname=".concat(n.loginname))},children:[Object(b.jsx)("div",{className:"user-avatar",children:Object(b.jsx)("img",{src:n.avatar_url,alt:n.loginname})}),Object(b.jsxs)("div",{className:"user-info",children:[Object(b.jsx)("p",{className:"user-name",children:n.loginname}),Object(b.jsx)("p",{className:"create-at",children:i?Object(O.f)(i):""})]})]}),Object(b.jsxs)(d.b,{to:"/details?id=".concat(l),className:"sz-topics__body",children:[m?Object(b.jsx)("span",{className:"put-top",children:m}):null,a]}),Object(b.jsxs)("div",{className:"sz-topics__footer",children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{className:"ued-mobile",children:"\ue666"}),t]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{className:"ued-mobile",children:"\ue637"}),c]})]})]})}))),f=t(53),v=t(52),x=t(58),g=t(51);t(111),a.default=function(){var e=Object(u.useState)({page:1,tab:"",limit:10,update:0,LOADING:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(u.useState)([]),j=Object(o.a)(l,2),O=j[0],d=j[1],p=Object(u.useState)(!0),N=Object(o.a)(p,2),_=N[0],k=N[1];function w(){return(w=Object(r.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1===t.page&&d([]),e.next=3,v.a.getTopics({page:t.page,tab:t.tab,limit:t.limit,LOADING:t.LOADING});case 3:if(!((a=e.sent).data instanceof Array)){e.next=10;break}if(0!==a.data.length){e.next=8;break}return k(!1),e.abrupt("return");case 8:c((function(e){return Object(i.a)(Object(i.a)({},e),{},{page:e.page+1,LOADING:!1})})),d((function(e){return 1===t.page?a.data:[].concat(Object(s.a)(e),Object(s.a)(a.data))}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=Object(u.useCallback)((function(){c((function(e){return Object(i.a)(Object(i.a)({},e),{},{page:1,update:(new Date).getTime()})}))}),[c]);return Object(b.jsxs)("div",{className:"sz-home",children:[Object(b.jsx)(m,{tab:t.tab,onChange:c}),Object(b.jsxs)(g.g,{callBack:z,infinite:2e3,children:[Object(b.jsx)("div",{className:"sz-topics__list",children:O.map((function(e){return Object(b.jsx)(h,Object(i.a)({},e))}))}),_&&1===t.page?Object(b.jsx)(x.a,{image:{show:!0},rows:5}):null,Object(b.jsx)(g.c,{loadMore:function(){return w.apply(this,arguments)},isMore:_,update:t.update})]}),Object(b.jsx)(f.a,{value:"home"})]})}},53:function(e,a,t){"use strict";var c=t(4),n=t(48),s=t(0),i=t(16),r=t(12),o=t(50),u=t.n(o),l=(t(54),t(1));a.a=Object(r.b)((function(e){return{loginname:e.userInfo.loginname}}))((function(e){var a=e.loginname,t=e.value,r=void 0===t?"home":t,o=Object(s.useState)([{icon:"&#xe729;",name:"\u9996\u9875",path:"home",search:""},{icon:"&#xe68a;",name:"\u6d88\u606f",path:"message",search:""},{icon:"&#xe6a1;",name:"\u6211\u7684",path:"my",search:""}]),j=Object(n.a)(o,2),b=j[0],m=j[1];return Object(s.useEffect)((function(){a&&m((function(e){return e.map((function(e,t){return Object(c.a)(Object(c.a)({},e),{},{search:2===t?"loginname=".concat(a):""})}))}))}),[m,a]),Object(l.jsx)("div",{className:"sz-footer",children:Object(l.jsx)("ul",{className:"sz-nav",children:b.map((function(e,a){return Object(l.jsx)("li",{className:u()("sz-nav__item",{"is-active":r===e.path}),children:Object(l.jsxs)(i.b,{to:{pathname:"/".concat(e.path),search:e.search},children:[Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:"".concat(e.icon)},className:"ued-mobile"}),Object(l.jsx)("span",{className:"text",children:e.name})]})},a)}))})})}))},54:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){}}]);