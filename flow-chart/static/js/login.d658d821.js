(self.webpackChunkflow_chart=self.webpackChunkflow_chart||[]).push([[535,87,213],{444813:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(529439),a=t(72791),o=t(906362),i=t(759044),s=t(783847),c=t(280542),l=(t(847213),t(556309)),u=t(528101),d=t(993719),f=t(780184),m={saveUserInfo:function(e){return function(n){n(function(e){return{type:l.fN,data:e}}(e))}}},h=(0,s.connect)((function(e){return{counter:e.counter,userinfo:e.userinfo}}),m)((function(e){var n=e.saveUserInfo,t=(e.userinfo,(0,c.k6)()),s=o.l0.useForm(),l=(0,r.Z)(s,1)[0],m=(0,a.useCallback)((function(){t.replace("/frame/home")}),[t]);return(0,a.useEffect)((function(){d.Z.getItem("token")&&m()}),[m]),(0,f.jsx)("div",{className:"app-login",children:(0,f.jsxs)("div",{className:"app-login__form",children:[(0,f.jsxs)("div",{className:"header",children:[(0,f.jsx)("div",{className:"logo"}),(0,f.jsx)("h2",{className:"title",children:"\u6d41\u7a0b\u56fe\u7ba1\u7406\u7cfb\u7edf"})]}),(0,f.jsx)("div",{className:"body",children:(0,f.jsxs)(o.l0,{name:"basic-login",form:l,initialValues:{remember:!0,agreement:!0},onFinish:function(e){u.Z.login(e).then((function(e){e&&(n(e),d.Z.setItem("token",e.token),m())}))},autoComplete:"off",children:[(0,f.jsx)(o.l0.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],children:(0,f.jsx)(o.II,{size:"large",prefix:(0,f.jsx)(i.UserOutlined,{className:"site-form-item-icon"}),placeholder:"\u8d26\u6237"})}),(0,f.jsx)(o.l0.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:(0,f.jsx)(o.II.Password,{size:"large",prefix:(0,f.jsx)(i.LockOutlined,{className:"site-form-item-icon"}),placeholder:"\u5bc6\u7801"})}),(0,f.jsx)(o.l0.Item,{children:(0,f.jsx)(o.zx,{type:"primary",htmlType:"submit",block:!0,size:"large",children:"\u767b\u5f55"})}),(0,f.jsx)(o.l0.Item,{name:"agreement",valuePropName:"checked",children:(0,f.jsxs)(o.XZ,{className:"agreement",children:["\u5df2\u9605\u8bfb\u5e76\u540c\u610f",(0,f.jsx)("span",{children:"\u300a\u7528\u6237\u4f7f\u7528\u534f\u8bae\u300b"}),"\u53ca",(0,f.jsx)("span",{children:"\u300a\u7528\u6237\u9690\u79c1\u534f\u8bae\u300b"})]})})]})})]})})}))},528101:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(601413),a=t(474569),o=t.n(a),i={development:{default:"http://172.19.20.12:9905",geo:"http://geo.datav.aliyun.com/areas_v3/bound/",local:window.location.href.split("#")[0]},test:{default:"http://172.19.20.12:9905",geo:"http://geo.datav.aliyun.com/areas_v3/bound/",local:"http://geo.datav.aliyun.com/"},production:{default:"http://192.168.200.7:9905",geo:"http://geo.datav.aliyun.com/areas_v3/bound/",local:"https://myfirebug.github.io"}},s=t(432808),c=t.n(s),l=t(906362),u="production",d=[],f=0,m=function(e){for(var n=0,t=d.length;n<t;n++)if(d[n]===e){d.splice(n,1);break}},h=function(e){var n=document.getElementById("js_loading");e&&f--,f<=0&&n&&(n.style.display="none")};function p(e){var n,t=function(e){return(0,r.Z)((0,r.Z)({},e),{},{url:e.url||"",method:e.method||"post",params:e.params,loading:"boolean"!==typeof e.loading||e.loading,servicePrefix:e.servicePrefix||"default",data:e.data,responseType:e.responseType||"json"})}(e);return function(e){if(e){f++;var n=document.getElementById("js_loading");e&&n&&(n.style.display="fixed")}}(t.loading),t.servicePrefix&&(n=t.servicePrefix,u&&(o().defaults.baseURL=i[u][n])),new Promise((function(e,n){o()(t).then((function(n){h(t.loading),e(n)})).catch((function(e){h(t.loading),n(e)}))}))}function g(e){return p((0,r.Z)((0,r.Z)({},e),{},{method:"get"}))}function v(e){return p((0,r.Z)((0,r.Z)({},e),{},{method:"post"}))}o().defaults.timeout=6e4,o().defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",o().defaults.withCredentials=!0,o().interceptors.request.use((function(e){var n;return e.headers,e.cancelToken=new(o().CancelToken)((function(e){n=e})),"function"===typeof n&&function(e,n){for(var t=0,r=d.length;t<r;t++)if(d[t]===e)return void n(e);d.push(e)}("".concat(e.url,"?").concat(c().stringify(e.params),"&method=").concat(e.method),n),e}),(function(e){return Promise.reject(e)})),o().interceptors.response.use((function(e){var n=e.config,t=e.status,r=e.data,a=r.code,o=r.message,i=r.data;if(n&&m("".concat(n.url,"?").concat(c().stringify(n.params),"&method=").concat(n.method)),200===t)return void 0===a?Promise.resolve(e.data):0!==a?(l.yw.error(o||"\u83b7\u53d6\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458"),Promise.resolve(i)):Promise.resolve(i);var s=new Error("\u8bf7\u6c42\u51fa\u73b0\u5f02\u5e38, HTTP \u72b6\u6001\u7801\u4e0d\u4e3a 200");return Promise.reject(s)}),(function(e){var n=e.config,t=e.message,r=e.response.status;switch(n&&m("".concat(n.url,"?").concat(c().stringify(n.params),"&method=").concat(n.method)),t&&m("".concat(t)),r){case 401:default:break;case 403:window.sessionStorage.clear(),l.yw.error("token\u5931\u6548");break;case 404:l.yw.error("\u63a5\u53e3\u4e0d\u5b58\u5728");break;case 500:l.yw.error("\u670d\u52a1\u5668\u9519\u8bef")}return Promise.reject({data:null,code:r,message:"\u5931\u8d25",success:!1})}));var x={getGeo:function(e){return g({url:"/geo/areas_v3/bound/".concat(e.field,".json"),loading:!0,servicePrefix:"local"})},login:function(e){return v({url:"/login",loading:!0,data:e,servicePrefix:"local"})},cardList:function(e){return g({url:"/card-list",loading:!0,data:e,servicePrefix:"local"})},cardDelete:function(e){return v({url:"/card-delete",loading:!0,data:e,servicePrefix:"local"})},diagramsList:function(e){return g({url:"/card-list",loading:!0,data:e,servicePrefix:"local"})},diagramsDelete:function(e){return v({url:"/card-delete",loading:!0,data:e,servicePrefix:"local"})}}},847213:function(e,n,t){"use strict";t.r(n),n.default={}},824654:function(){}}]);