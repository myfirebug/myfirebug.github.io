(self.webpackChunkflow_chart=self.webpackChunkflow_chart||[]).push([[398],{14919:function(e,t,n){"use strict";var r=n(6362),a=n(28101),i=n(80184);t.Z=function(e){var t=e.text,n=e.requestName,o=e.reload,s=e.params,c=e.callback,l=e.children;return(0,i.jsx)(r.gn,{title:"\u786e\u8ba4".concat(t,"\u5417?"),okText:"\u662f",cancelText:"\u5426",onConfirm:function(){if(!a.Z[n])return r.yw.error("\u8be5\u63a5\u53e3\u4e0d\u5b58\u5728\uff0c\u8bf7\u68c0\u67e5"),!1;a.Z[n](s).then((function(e){e&&(r.yw.success("".concat(t,"\u6210\u529f")),o&&o(),c&&c())}))},children:(0,i.jsx)("span",{className:"link",children:l||t})},"popconfirm")}},56958:function(e,t){"use strict";var n={bordered:!0,pagination:{show:!0,pageSize:10,current:1},showHeader:!0,hasData:!0,tableLayout:void 0,dateValueType:"date",search:{span:6,collapseRender:void 0,labelWidth:100},options:{show:!0,density:!0,setting:!0},rowKey:"id"};t.Z=n},53910:function(e,t,n){"use strict";n.r(t);var r=n(74165),a=n(15861),i=n(1413),o=n(29439),s=n(72791),c=n(27712),l=n(56958),d=n(83847),u=n(66155),f=n(6362),p=n(59044),h=n(80542),g=n(28101),m=n(14919),v=n(80184),y={getStrategy:u.A};t.default=(0,d.connect)((function(e){return{strategy:e.authorization.strategy}}),y)((function(e){e.strategy;var t=e.getStrategy,n=e.path;(0,s.useEffect)((function(){t(n)}),[n,t]);var d=(0,h.k6)(),u=(0,s.useRef)(),y=(0,s.useState)({visible:!1,type:"design",width:"100%",title:""}),x=(0,o.Z)(y,2),w=x[0],b=x[1],Z=[{title:"\u5e8f\u53f7",dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u6d41\u7a0b\u56fe\u540d\u79f0",dataIndex:"title",ellipsis:!0,tip:"\u6807\u9898\u8fc7\u957f\u4f1a\u81ea\u52a8\u6536\u7f29",fieldProps:{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"}},{title:"\u6d41\u7a0b\u56fe\u63cf\u8ff0",dataIndex:"description",ellipsis:!0,search:!1},{title:"\u521b\u5efa\u65f6\u95f4",key:"createTime",dataIndex:"createTime",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createTime",valueType:"dateRange",hideInTable:!0,search:{transform:function(e){return{startTime:e[0],endTime:e[1]}}}},{title:"\u64cd\u4f5c",render:function(e,t){var n;return(0,v.jsxs)("div",{className:"app-table__operation",children:[(0,v.jsx)("span",{onClick:function(){d.push("/frame/configuration?id=".concat(t.id))},className:"link",children:"\u7f16\u8f91"}),(0,v.jsx)(m.Z,{text:"\u5220\u9664",requestName:"diagramsDelete",params:{ids:[t.id]},reload:null===(n=u.current)||void 0===n?void 0:n.reloadAndRest}),(0,v.jsx)("span",{onClick:function(){d.push("/frame/preview?id=".concat(t.id))},className:"link",children:"\u9884\u89c8"})]})}}],k=(0,s.useState)([]),T=(0,o.Z)(k,2),P=T[0],j=T[1],C={onChange:function(e){j(e)}},S=function(){d.push("/frame/configuration")};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.dy,{title:w.title,width:w.width,destroyOnClose:!0,headerStyle:{display:"none"},bodyStyle:{padding:0,background:"#535353"},onClose:function(){return b((function(e){return(0,i.Z)((0,i.Z)({},e),{},{visible:!1})}))},visible:w.visible}),(0,v.jsx)(c.ZP,(0,i.Z)((0,i.Z)({},l.Z),{},{columns:Z,actionRef:u,headerTitle:"\u6d41\u7a0b\u56fe\u7ba1\u7406",cardBordered:!0,search:{labelWidth:"auto"},request:(0,a.Z)((0,r.Z)().mark((function e(){var t=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:{},t.length>1?t[1]:void 0,t.length>2?t[2]:void 0,e.abrupt("return",g.Z.diagramsList());case 4:case"end":return e.stop()}}),e)}))),rowSelection:(0,i.Z)({},C),toolBarRender:function(){return[(0,v.jsx)(f.zx,{icon:(0,v.jsx)(p.PlusOutlined,{}),onClick:S,type:"primary",children:"\u6dfb\u52a0"},"button")]},tableAlertOptionRender:function(){var e;return(0,v.jsx)(f.T,{size:16,children:(0,v.jsx)(m.Z,{text:"\u6279\u91cf\u5220\u9664",requestName:"diagramsDelete",params:{ids:[P]},reload:null===(e=u.current)||void 0===e?void 0:e.reloadAndRest})})}}))]})}))},28101:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(1413),a=n(74569),i=n.n(a),o={development:{default:"http://172.19.20.12:9905",geo:"http://geo.datav.aliyun.com/areas_v3/bound/",local:window.location.href.split("#")[0]},test:{default:"http://172.19.20.12:9905",geo:"http://geo.datav.aliyun.com/areas_v3/bound/",local:"http://geo.datav.aliyun.com/"},production:{default:"http://192.168.200.7:9905",geo:"http://geo.datav.aliyun.com/areas_v3/bound/",local:"https://myfirebug.github.io"}},s=n(32808),c=n.n(s),l=n(6362),d="production",u=[],f=0,p=function(e){for(var t=0,n=u.length;t<n;t++)if(u[t]===e){u.splice(t,1);break}},h=function(e){var t=document.getElementById("js_loading");e&&f--,f<=0&&t&&(t.style.display="none")};function g(e){var t,n=function(e){return(0,r.Z)((0,r.Z)({},e),{},{url:e.url||"",method:e.method||"post",params:e.params,loading:"boolean"!==typeof e.loading||e.loading,servicePrefix:e.servicePrefix||"default",data:e.data,responseType:e.responseType||"json"})}(e);return function(e){if(e){f++;var t=document.getElementById("js_loading");e&&t&&(t.style.display="fixed")}}(n.loading),n.servicePrefix&&(t=n.servicePrefix,d&&(i().defaults.baseURL=o[d][t])),new Promise((function(e,t){i()(n).then((function(t){h(n.loading),e(t)})).catch((function(e){h(n.loading),t(e)}))}))}function m(e){return g((0,r.Z)((0,r.Z)({},e),{},{method:"get"}))}function v(e){return g((0,r.Z)((0,r.Z)({},e),{},{method:"post"}))}i().defaults.timeout=6e4,i().defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",i().defaults.withCredentials=!0,i().interceptors.request.use((function(e){var t;return e.headers,e.cancelToken=new(i().CancelToken)((function(e){t=e})),"function"===typeof t&&function(e,t){for(var n=0,r=u.length;n<r;n++)if(u[n]===e)return void t(e);u.push(e)}("".concat(e.url,"?").concat(c().stringify(e.params),"&method=").concat(e.method),t),e}),(function(e){return Promise.reject(e)})),i().interceptors.response.use((function(e){var t=e.config,n=e.status,r=e.data,a=r.code,i=r.message,o=r.data;if(t&&p("".concat(t.url,"?").concat(c().stringify(t.params),"&method=").concat(t.method)),200===n)return void 0===a?Promise.resolve(e.data):0!==a?(l.yw.error(i||"\u83b7\u53d6\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458"),Promise.resolve(o)):Promise.resolve(o);var s=new Error("\u8bf7\u6c42\u51fa\u73b0\u5f02\u5e38, HTTP \u72b6\u6001\u7801\u4e0d\u4e3a 200");return Promise.reject(s)}),(function(e){var t=e.config,n=e.message,r=e.response.status;switch(t&&p("".concat(t.url,"?").concat(c().stringify(t.params),"&method=").concat(t.method)),n&&p("".concat(n)),r){case 401:default:break;case 403:window.sessionStorage.clear(),l.yw.error("token\u5931\u6548");break;case 404:l.yw.error("\u63a5\u53e3\u4e0d\u5b58\u5728");break;case 500:l.yw.error("\u670d\u52a1\u5668\u9519\u8bef")}return Promise.reject({data:null,code:r,message:"\u5931\u8d25",success:!1})}));var y={getGeo:function(e){return m({url:"/geo/areas_v3/bound/".concat(e.field,".json"),loading:!0,servicePrefix:"local"})},login:function(e){return v({url:"/login",loading:!0,data:e,servicePrefix:"local"})},cardList:function(e){return m({url:"/card-list",loading:!0,data:e,servicePrefix:"local"})},cardDelete:function(e){return v({url:"/card-delete",loading:!0,data:e,servicePrefix:"local"})},diagramsList:function(e){return m({url:"/card-list",loading:!0,data:e,servicePrefix:"local"})},diagramsDelete:function(e){return v({url:"/card-delete",loading:!0,data:e,servicePrefix:"local"})}}},24654:function(){}}]);