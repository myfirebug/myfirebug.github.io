"use strict";(self.webpackChunkcli=self.webpackChunkcli||[]).push([[908,10,94],{5010:function(e,t,a){a.r(t);var n=a(7294);t.default=e=>{let{params:t,setParams:a}=e;const[r]=(0,n.useState)([{name:"全部",value:""},{name:"精华",value:"good"},{name:"分享",value:"share"},{name:"问答",value:"ask"},{name:"招聘",value:"job"},{name:"客户端测试",value:"dev"}]);return n.createElement("div",{className:"cms-tab"},r.map((e=>n.createElement("span",{className:"cms-tab__item "+(t.tab===e.value?"is-active":""),onClick:()=>a((t=>({...t,page:1,tab:e.value,update:(new Date).getTime()}))),key:e.value},e.name))))}},5612:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),r=a(8349),c=a(5010),l=a(8981),s=a(589);var u=e=>{let{loadMore:t,threshold:a=100,isMore:r,loadingText:c="加载中...",noMoreText:l="——到底了——",update:u,visible:o=!0}=e;const i=(0,n.useRef)(!1);async function m(){if(!i.current){i.current=!0;try{const e=await t();return i.current=!1,e}catch(e){throw i.current=!1,e}}}const d=(0,n.useCallback)((()=>{s.oB.getScrollTop()+s.oB.getClientHeight()+a>s.oB.getScrollHeight()&&r&&m()}),[a,m,r]);return(0,n.useEffect)((()=>{m()}),[u]),(0,n.useEffect)((()=>(window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)})),[d]),n.createElement("div",{className:"cms-infinite-scroll"},o?r?n.createElement("div",{className:"cms-infinite-scroll__loading"},n.createElement("span",{className:"loading"}),n.createElement("span",{className:"text"},c)):n.createElement("div",{className:"cms-infinite-scroll__nomore"},l):null)};var o=e=>{let{pullingText:t="下拉刷新",canReleaseText:a="松开刷新",refreshingText:r="加载中…",completeText:c="刷新成功",threshold:l=45,infinite:u=1e3,callBack:o,children:i}=e;const m=(0,n.useRef)(null),d=(0,n.useRef)(0),p=(0,n.useRef)(0),f=(0,n.useRef)(""),[v,g]=(0,n.useState)(""),h=(0,n.useRef)();(0,n.useEffect)((()=>()=>{h.current&&clearTimeout(h.current)}),[h]);const E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;null!==m.current&&(m.current.style.transitionDuration=`${t}s`,m.current.style.transform=`translate(0px, ${e}px) translateZ(0px)`)},T=e=>{let n=(e.touches?e.touches[0].pageY:e.clientX)-d.current-s.oB.getScrollTop();n>0&&(n>l&&(n=l),E(n,0),g(t),f.current="pulling",n>=l-10&&(g(a),f.current="canRelease")),p.current=n},w=()=>{document.removeEventListener("touchmove",T,!1),document.removeEventListener("touchend",w,!1),"canRelease"===f.current&&p.current>=l-10?(g(r),f.current="refreshing","function"==typeof o&&o(),h.current&&clearTimeout(h.current),h.current=setTimeout((()=>{g(c),f.current="complete",E(0,.5)}),u)):(E(0,.5),f.current="")};return n.createElement("div",{ref:m,className:"cms-pull-to-refresh",onTouchStart:e=>{s.oB.getScrollTop()<=0&&(document.addEventListener("touchmove",T,!1),document.addEventListener("touchend",w,!1));const t=e.touches?e.touches[0].pageY:e.clientY;d.current=t,"pulling"===f.current&&E(0,0),"complete"===f.current&&(f.current=""),p.current=0}},n.createElement("div",{className:"cms-pull-to-refresh__wrapper"},v),i)};var i=()=>{const[e,t]=(0,n.useState)({page:1,limit:20,tab:"",update:0}),{getTopics:a,topics:s,topicsLoading:i,isMore:m}=(0,r.B)(),d=(0,n.useCallback)((async()=>{!i&&m&&(await a(e),t((e=>({...e,page:e.page+1}))))}),[a,m,e,i]),p=(0,n.useCallback)((()=>{t((e=>({...e,page:1,update:(new Date).getTime()})))}),[t]);return(0,n.useEffect)((()=>{1===e.page&&window.scrollTo(0,0)}),[e.page]),n.createElement("div",{className:"cms-home"},n.createElement(c.default,{params:e,setParams:t}),n.createElement(o,{callBack:p,infinite:2e3},n.createElement(l.default,{topics:s,topicsLoading:i}),n.createElement(u,{loadMore:d,isMore:m,visible:1!==e.page,update:e.update})))}}}]);
//# sourceMappingURL=908.1c0a120db1.chunk.js.map