(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[2],{113:function(e,s,t){},114:function(e,s,t){},124:function(e,s,t){"use strict";t.r(s);var c=t(4),a=t(0),i=t(20),n=t(55),l=t(51),r=(t(113),t(1)),j=function(e){e.id;var s=e.content,t=e.create_at,c=(e.is_uped,e.reply_id,e.author),a=(e.ups,e.index),n=c.loginname,l=c.avatar_url;return Object(r.jsxs)("div",{className:"sz-replay__item",children:[Object(r.jsxs)("div",{className:"sz-replay__item--header",children:[Object(r.jsx)("div",{className:"avatar",children:Object(r.jsx)("img",{src:l,alt:n})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("div",{className:"username",children:n}),Object(r.jsxs)("div",{className:"reply-time",children:[a,"\u697c\u2022",Object(i.f)(t)]})]}),Object(r.jsxs)("div",{className:"operation",children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"ued-mobile",children:"\ue643"}),"\u70b9\u8d5e(0)"]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"ued-mobile",children:"\ue6f9"}),"\u56de\u590d"]})]})]}),Object(r.jsx)("div",{className:"sz-replay__item--body",dangerouslySetInnerHTML:{__html:"".concat(s)}})]})};t(114),s.default=function(){var e=Object(n.a)("getDetails",JSON.stringify({id:Object(i.d)("id")})),s=e.data,t=e.loading;return Object(r.jsx)(r.Fragment,{children:t?Object(r.jsx)(l.h,{image:{show:!1,height:80}}):Object(r.jsxs)("div",{className:"sz-details",children:[Object(r.jsxs)("div",{className:"sz-details__header",children:[Object(r.jsx)("h1",{className:"title",children:s.title}),Object(r.jsxs)("p",{className:"info",children:[Object(r.jsxs)("span",{children:["\u53d1\u5e03\u4e8e",Object(i.f)(s.create_at)]}),Object(r.jsxs)("span",{children:["\u4f5c\u8005",s.author?s.author.loginname:""]}),Object(r.jsxs)("span",{children:[s.visit_count,"\u6b21\u6d4f\u89c8"]})]})]}),Object(r.jsx)("div",{className:"sz-details__body",dangerouslySetInnerHTML:{__html:"".concat(s.content)}}),Object(r.jsxs)("div",{className:"sz-reply",children:[Object(r.jsx)("div",{className:"sz-reply__header",children:Object(r.jsxs)("h2",{className:"title",children:["\u8bc4\u8bba\uff08",s.reply_count,"\uff09"]})}),Object(r.jsxs)("div",{className:"sz-reply__list",children:[s.replies?s.replies.map((function(e,s){return Object(a.createElement)(j,Object(c.a)(Object(c.a)({},e),{},{key:e.id,index:s+1}))})):null,s.replies&&!s.replies.length?Object(r.jsx)("div",{className:"sz-no-data",children:"\u6682\u65e0\u6570\u636e"}):""]})]})]})})}},55:function(e,s,t){"use strict";var c=t(48),a=t(0),i=t(52);s.a=function(e,s){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Object(a.useState)({}),l=Object(c.a)(n,2),r=l[0],j=l[1],d=Object(a.useState)(!1),b=Object(c.a)(d,2),h=b[0],O=b[1],o=Object(a.useState)(!1),m=Object(c.a)(o,2),u=m[0],p=m[1];return Object(a.useEffect)((function(){i.a[e]&&!t&&(O(!0),p(!1),i.a[e](JSON.parse(s)).then((function(e){O(!1),p(!1),e.success&&j(e.data)})).catch((function(){O(!1),p(!0)})))}),[s,e,t]),{loading:h,error:u,data:r}}}}]);