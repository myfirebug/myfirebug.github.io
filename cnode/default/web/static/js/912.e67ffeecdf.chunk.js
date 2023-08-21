(self.webpackChunkcli=self.webpackChunkcli||[]).push([[912,898,33,49],{8349:function(e,t,r){"use strict";r.d(t,{B:function(){return p}});var i=r(7294);class n{static getTopic(e){return`/topic/${e}`}static topicCollectByLoginname(e){return`/topic_collect/${e}`}static addReply(e){return`/topic/${e}/replies`}static replyUps(e){return`/reply/${e}/ups`}}n.getTopics="/topics",n.addTopics="/topics",n.updateTopics="/topics/update",n.topicCollect="/topic_collect/collect";var a=r(2861),s=r(129),o=r.n(s);a.Z.defaults.baseURL="https://cnodejs.org/api/v1";const c=[],l=function(e){for(let t=0,r=c.length;t<r;t++)if(c[t]===e){c.splice(t,1);break}};a.Z.interceptors.request.use((e=>{const t=a.Z.CancelToken.source();return"object"==typeof e.headers&&(e.headers.Authorization="Bearer 123"),e.cancelToken=t.token,function(e,t){for(let r=0,i=c.length;r<i;r++)if(c[r]===e)return void t.cancel();c.push(e)}(`${e.url}?${o().stringify(e.params)}&method=${e.method}`,t),e}),(e=>Promise.reject(e))),a.Z.interceptors.response.use((e=>{const{config:t,status:r}=e;if(console.log(t,"config"),t&&l(`${t.url}?${o().stringify(t.params)}&method=${t.method}`),200!==r)throw new Error("请求出现异常, HTTP 状态码不为 200");return e.data.data}),(e=>{const{config:t}=e;return t&&l(`${t.url}?${o().stringify(t.params)}&method=${t.method}`),Promise.reject(e)}));var u=a.Z;const m={topicService:{getTopics(e){return u.get(n.getTopics,{params:e})},getTopic(e){return u.get(n.getTopic(e))}}};var d=r(589);function p(){const[e,t]=(0,i.useState)([]),[r,n]=(0,i.useState)(!0),[a,s]=(0,i.useState)(!1),o=(0,i.useCallback)((async e=>{s(!0);const r=await m.topicService.getTopics(e);d.aB.isMobile()?1===e.page?t(r):t((e=>[...e,...r])):t(r),s(!1),n(!(!r||!r.length))}),[]),c=(0,i.useCallback)(((e,t,r)=>{let i="";if(e)i="精华";else if(r)i="置顶";else switch(t){case"share":i="分享";break;case"ask":i="问答";break;case"job":i="招聘";break;default:i="暂无"}return i}),[]),[l,u]=(0,i.useState)({id:"",author_id:"",tab:"",content:"",title:"",last_reply_at:"",good:!1,top:!1,reply_count:0,visit_count:0,create_at:"",author:{loginname:"",avatar_url:""},replies:[]}),[p,h]=(0,i.useState)(!1);return{topics:e,topicsLoading:a,getTopics:o,topicDetail:l,topicDetailLoading:p,getTopic:(0,i.useCallback)((e=>{h(!0),m.topicService.getTopic(e).then((e=>{u(e),h(!1)})).catch((()=>{h(!1)}))}),[]),getLabel:c,isMore:r}}},4898:function(e,t,r){"use strict";r.r(t);var i=r(7294);t.default=e=>{let{avatar:t,alt:r="图片",isRound:n=!1,size:a="default"}=e;return i.createElement("div",{className:`cms-avatar cms-avatar__${a} ${n?"is-round":""}`},i.createElement("img",{src:t,alt:r}))}},8033:function(e,t,r){"use strict";r.r(t);var i=r(7294);const n=(0,i.memo)((e=>{const{title:t,children:r,style:n,className:a}=e;return i.createElement("div",{className:`cms-module ${a||""}`,style:n},t&&i.createElement("div",{className:"cms-module__header "+("string"==typeof t?"is-bold":"")},t),i.createElement("div",{className:"cms-module__body"},r))}));t.default=n},4669:function(e,t,r){"use strict";r.r(t);var i=r(7294),n=r(9250),a=r(9655),s=r(8349),o=r(8033),c=r(589),l=r(49),u=r(3556);t.default=()=>{const{id:e}=(0,n.UO)(),{getTopic:t,topicDetail:r,getLabel:m,topicDetailLoading:d}=(0,s.B)(),[p]=(0,a.lr)();return(0,i.useEffect)((()=>{t(e)}),[e,t]),i.createElement(i.Fragment,null,i.createElement(o.default,{className:"cms-topic"},d?i.createElement(u.Z,{type:1,text:"加载中..."}):null,i.createElement("div",{className:"cms-topic__header"},i.createElement("h1",{className:"title"},(null==r?void 0:r.title)||p.get("title")),i.createElement("div",{className:"labels"},i.createElement("span",null,"发布于 ",c.Ye.timeAgo(r.create_at)||"--"),i.createElement("span",null,"作者",i.createElement(a.rU,{to:`/user/${r.author.loginname}`},r.author.loginname||"--")),i.createElement("span",null," ",r.visit_count," 次浏览"),i.createElement("span",null,"来自",m(null==r?void 0:r.good,null==r?void 0:r.tab,null==r?void 0:r.top)))),i.createElement("div",{className:"cms-topic__body",dangerouslySetInnerHTML:{__html:null==r?void 0:r.content}})),r.replies.length?i.createElement(l.default,{replies:r.replies}):null)}},49:function(e,t,r){"use strict";r.r(t);var i=r(7294),n=r(589),a=r(9655),s=r(8033),o=r(4898);t.default=e=>{let{replies:t}=e;return i.createElement(s.default,{className:"cms-reply",style:{marginTop:"15px"},title:`${t.length}　回复`},t.map(((e,t)=>i.createElement("div",{className:"cms-reply__item",key:e.id},i.createElement("div",{className:"card"},i.createElement(o.default,{size:"small",avatar:e.author.avatar_url,alt:e.author.loginname}),i.createElement("div",{className:"content"},i.createElement("div",{className:"user-info"},i.createElement(a.rU,{to:`/user/${e.author.loginname}`},e.author.loginname),i.createElement("span",{className:"reply-time"},`${t+1}楼 • ${n.Ye.timeAgo(e.create_at)}`)),i.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})))))))}},589:function(e,t,r){"use strict";r.d(t,{aB:function(){return i},oB:function(){return a},Ye:function(){return n}});const i={NAV:window.navigator,UA(){return this.NAV.userAgent.toLowerCase()},isIpad(){return/ipad/i.test(this.UA())},isIphone(){return/iphone/i.test(this.UA())},isIpod(){return/ipod/i.test(this.UA())},isIos(){return/ipad|iphone|ipod/i.test(this.UA())},isAndroid(){return/android/i.test(this.UA())},isIe(){return/(trident|microsoft)/i.test(this.NAV?this.NAV.appName:"")},isMobile(){return this.isIphone||this.isIos||this.isAndroid},isChrome(){return/chrome/i.test(this.UA())},isFirefox(){return/firefox/i.test(this.UA())},isOpera(){return/opera/i.test(this.UA())},isSafari(){return/safari/i.test(this.UA())},isEdge(){return/edge/i.test(this.UA())},isWechat(){return/micromessenger/i.test(this.UA())},isQqbrowser(){return/qqbrowser/i.test(this.UA())},isUcbrowser(){return/ucbrowser/i.test(this.UA())},isVideo(){return this.isChrome||this.isFirefox||this.isOpera||this.isSafari||this.isEdge},isCssVar(){return window.CSS&&window.CSS.supports&&window.CSS.supports("--a","0")}};window.localStorage,window.sessionStorage;r(4227);const n={timeAgo(e){if(!e)return"";var t=new Date(e),r=(new Date).getTime()-t.getTime();return r<0?"":r/1e3<30?"刚刚":r/1e3<60?parseInt(r/1e3+"")+"秒前":r/6e4<60?parseInt(r/6e4+"")+"分钟前":r/36e5<24?parseInt(r/36e5+"")+"小时前":r/864e5<31?parseInt(r/864e5+"")+"天前":r/2592e6<12?parseInt(r/2592e6+"")+"月前":parseInt(r/31536e6+"")+"年前"}},a={getScrollTop(){let e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},getClientHeight(){let e=0;return e=document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight),e},getScrollHeight(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}},4227:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";const urlUtil={getUrlParam(e,t){let r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),i=(t||window.location.href).split("?").length>1&&(t||window.location.href).split("?")[1].match(r);return i?decodeURIComponent(i[2]):""},replaceParamVal(paramName,replaceWith,url){let oUrl=url||window.location.href,re=eval("/("+paramName+"=)([^&]*)/gi"),nUrl=oUrl.replace(re,paramName+"="+replaceWith);return nUrl}}},4654:function(){}}]);
//# sourceMappingURL=912.e67ffeecdf.chunk.js.map