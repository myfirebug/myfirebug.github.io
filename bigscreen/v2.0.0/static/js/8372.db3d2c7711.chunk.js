"use strict";(self.webpackChunklarge_screen_configuration=self.webpackChunklarge_screen_configuration||[]).push([[8372,780,6739],{98372:function(e,n,l){l.r(n);var i=l(67294),t=l(89250),a=l(4214),d=l(50780),o=l(46020),u=l.n(o),r=l(24404),g=l(240),c=l(30076),v=l(75735),s=l(72389),E=l(5676),I=l(83309),f=l(69483),p=l.n(f);n.default=()=>{var e,n,l,o,f,m,w,D,T,_,y,V,G,M,h,b,F,L,O,C;let W=(0,t.TH)();const[S,Y]=(0,i.useReducer)(d.pageReducer,d.initialState),[,N]=(0,i.useState)(!1),[A,P]=(0,i.useState)(!0);(0,t.s0)();(0,i.useEffect)((()=>{const e=new URLSearchParams(W.search);if(e.size){const n=e.get("pageId");n&&p().getItem(I.Ow,((e,l)=>{if(l){const e=l.find((e=>e.pageId===n));e&&Y({type:"PAGE",data:e})}}))}else Y({type:"PAGE",data:{name:"未命名页面",id:"",url:"",createTime:"",count:0,pageId:(0,g.M8)(),screenRatio:"4*4",widgets:[],configuration:{configureValue:{...c.MP.configureValue}}}})}),[W]);const k=(0,i.useMemo)((()=>{let e=[];return null!=S&&S.pageId?(e=["layer","page"],e=null!=S&&S.widgetId?null!=S&&S.elementId?["layer","element","widget","page","data"]:["layer","widget","page","data"]:["layer","page"]):e=["layer"],e}),[null==S?void 0:S.elementId,null==S?void 0:S.pageId,null==S?void 0:S.widgetId]),R=(0,i.useCallback)(((e,n,l)=>{switch(e){case"widget":return void((null==S?void 0:S.widgetId)!==n&&Y({type:"SELECT_WIDGET",widgetId:n}));case"element":return void((null==S?void 0:S.elementId)!==n&&Y({type:"SELECT_ELEMENT",widgetId:l,elementId:n}))}}),[null==S?void 0:S.elementId,null==S?void 0:S.widgetId]),x=(0,i.useMemo)((()=>{var e;return null==S||null===(e=S.page)||void 0===e?void 0:e.widgets.find((e=>(null==S?void 0:S.widgetId)&&e.widgetId===(null==S?void 0:S.widgetId)))}),[null==S||null===(e=S.page)||void 0===e?void 0:e.widgets,null==S?void 0:S.widgetId]),Z=(0,i.useMemo)((()=>null==x?void 0:x.elements.find((e=>(null==S?void 0:S.elementId)&&e.elementId===(null==S?void 0:S.elementId)))),[null==x?void 0:x.elements,null==S?void 0:S.elementId]),z=(0,i.useCallback)((e=>{var n,l,t,a;return e.element&&v.Z[(0,g.fm)(e.element)]?i.createElement(v.Z[(0,g.fm)(e.element)],{options:e.configuration.configureValue,data:null===(n=e.configuration)||void 0===n||null===(l=n.dataValue)||void 0===l?void 0:l.mock,field:null===(t=e.configuration)||void 0===t||null===(a=t.dataValue)||void 0===a?void 0:a.field}):i.createElement("div",null,"你访问的组件不存在请联系售后人员")}),[]),H=(0,i.useCallback)((e=>{var n,l,t,d;return i.createElement(i.Fragment,null,(null==S?void 0:S.widgetId)===e.widgetId?i.createElement(a.k1,null):null,i.createElement(E.Z,{data:e,header:i.createElement(s.Z,{datas:(null==e?void 0:e.elements.filter((e=>"header"===e.position)))||[],configureValue:null==S||null===(n=S.page)||void 0===n||null===(l=n.configuration)||void 0===l?void 0:l.configureValue,column:I.yt,row:I.GK,gap:I.gq,render:z,isDroppable:!0,isResizable:!0,staticed:!0}),body:i.createElement(s.Z,{configureValue:null==S||null===(t=S.page)||void 0===t||null===(d=t.configuration)||void 0===d?void 0:d.configureValue,datas:(null==e?void 0:e.elements.filter((e=>"body"===e.position)))||[],column:I.UK,row:I.XR,gap:I.hU,render:z,isDroppable:!0,isResizable:!0,staticed:!0})}))}),[null==S||null===(n=S.page)||void 0===n||null===(l=n.configuration)||void 0===l?void 0:l.configureValue,null==S?void 0:S.widgetId,z]),J=(0,i.useCallback)(((e,n,l)=>{var i;Y({type:"ADD_WIDGET",data:{...n,widgetId:(0,g.M8)(),x:e.x,y:e.y,position:l,url:"",elements:null==n||null===(i=n.elements)||void 0===i?void 0:i.map((e=>({...e,elementId:(0,g.M8)(),url:""})))}})}),[]),U=(0,i.useCallback)((e=>{Y({type:"MODIFY_WIDGET",data:{x:e.x,y:e.y,widgetId:e.i}})}),[]),K=(0,i.useCallback)((e=>{Y({type:"MODIFY_WIDGET",data:{row:e.w,column:e.h,widgetId:e.i}})}),[]),$=(0,i.useCallback)((e=>{Y({type:"DELETE_WIDGET",id:e.widgetId})}),[]);return i.createElement("div",{className:"cms-config-layout"},i.createElement(a.G6,{name:null==S||null===(o=S.page)||void 0===o?void 0:o.name,pageType:"page",modifyNameSuccessHander:e=>{Y({type:"MODIFY_PAGE",data:{name:e}})},previewHandler:()=>N(!0),publishHandler:()=>{Y({type:"SELECT_WIDGET",widgetId:""}),P(!1),setTimeout((()=>{u()(document.getElementById("js_page"),{allowTaint:!0,scale:.5,backgroundColor:"rgb(9, 5, 72)"}).then((e=>{try{Y({type:"MODIFY_PAGE",data:{url:null==e?void 0:e.toDataURL()}}),r.ZP.success("发布成功")}catch(e){r.ZP.error("存在跨域资源，缩略图获取失败")}}))}),10)}}),i.createElement("div",{className:"cms-config-layout__content"},i.createElement(a.Gd,{navs:["widget"],render:e=>"widget"===e?i.createElement(a.zc,null):null}),i.createElement(a.JE,null,i.createElement("div",{style:{position:"relative",width:`${(null==S||null===(f=S.page)||void 0===f||null===(m=f.configuration)||void 0===m||null===(w=m.configureValue)||void 0===w?void 0:w.pageConfigWidth)||1366}px`,height:`${(null==S||null===(D=S.page)||void 0===D||null===(T=D.configuration)||void 0===T||null===(_=T.configureValue)||void 0===_?void 0:_.pageConfigHeight)||768}px`},id:"js_page"},i.createElement(E.Z,{data:(null==S?void 0:S.page)||{},header:null,body:i.createElement(s.Z,{datas:(null==S||null===(y=S.page)||void 0===y||null===(V=y.widgets)||void 0===V?void 0:V.filter((e=>"body"===e.position)))||[],render:H,configureValue:null==S||null===(G=S.page)||void 0===G||null===(M=G.configuration)||void 0===M?void 0:M.configureValue,row:null==S||null===(h=S.page)||void 0===h||null===(b=h.configuration)||void 0===b||null===(F=b.configureValue)||void 0===F?void 0:F.verticalNumber,column:null==S||null===(L=S.page)||void 0===L||null===(O=L.configuration)||void 0===O||null===(C=O.configureValue)||void 0===C?void 0:C.horizontalNumber,onDrop:(e,n)=>J(e,n,"body"),isDroppable:A,isResizable:A,staticed:!A,onDragStop:U,onResizeStop:K,onClose:$})}))),i.createElement(a.yO,{navs:k,render:e=>{return"layer"===e?i.createElement("div",null,i.createElement(a.TC,{datas:null!=S&&S.page?[null==S?void 0:S.page]:[],pageId:null==S?void 0:S.pageId,widgetId:null==S?void 0:S.widgetId,elementId:null==S?void 0:S.elementId,onSelected:R})):"widget"===e?i.createElement(a.hp,{configureValue:(null==x||null===(n=x.configuration)||void 0===n?void 0:n.configureValue)||{},onFinish:e=>{var n;Y({type:"MODIFY_WIDGET",data:{...x,configuration:{...null==x?void 0:x.configuration,configureValue:{...null==x||null===(n=x.configuration)||void 0===n?void 0:n.configureValue,...e}}}})}}):"element"===e?i.createElement(a.Kp,{element:null==Z?void 0:Z.element,configureValue:(null==Z?void 0:Z.configuration.configureValue)||{},onFinish:e=>{var n;Y({type:"MODIFY_ELEMENT",data:{...Z,configuration:{...null==Z?void 0:Z.configuration,configureValue:{...null==Z||null===(n=Z.configuration)||void 0===n?void 0:n.configureValue,...e}}}})}}):"data"===e?i.createElement(a.$X,{widgetDataValue:null==x||null===(l=x.configuration)||void 0===l?void 0:l.dataValue,widgetOnFinish:e=>{var n;Y({type:"MODIFY_WIDGET",data:{...x,configuration:{...null==x?void 0:x.configuration,dataValue:{...null==x||null===(n=x.configuration)||void 0===n?void 0:n.dataValue,...e}}}})},elementDataValue:null==Z?void 0:Z.configuration.dataValue,elementOnFinish:e=>{var n;Y({type:"MODIFY_ELEMENT",data:{...Z,configuration:{...null==Z?void 0:Z.configuration,dataValue:{...null==Z||null===(n=Z.configuration)||void 0===n?void 0:n.dataValue,...e}}}})}}):"page"===e?i.createElement(a.JB,{configureValue:null==S||null===(t=S.page)||void 0===t||null===(d=t.configuration)||void 0===d?void 0:d.configureValue,onFinish:e=>{var n;const l=null==S||null===(n=S.page)||void 0===n?void 0:n.configuration;Y({type:"MODIFY_PAGE",data:{configuration:{...l,configureValue:{...null==l?void 0:l.configureValue,...e}}}})}}):i.createElement("div",null,e);var n,l,t,d}})))}},50780:function(e,n,l){l.r(n),l.d(n,{initialState:function(){return t},pageReducer:function(){return a}});var i=l(86739);const t={page:{name:"未命名页面",id:"",createTime:"",url:"",count:0,configuration:{},widgets:[],pageId:"",screenRatio:""},elementId:void 0,widgetId:void 0,pageId:void 0},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;const l=JSON.parse(JSON.stringify(e));switch(n.type){case i.PAGE:return l.page=n.data,l.pageId=n.data.pageId,l;case i.MODIFY_PAGE:return l.page={...e.page,...n.data},l;case i.SELECT_WIDGET:return l.widgetId=n.widgetId,l.elementId="",l;case i.ADD_WIDGET:return l.page.widgets=[...l.page.widgets,n.data],l.widgetId=n.data.widgetId,l.elementId="",l;case i.MODIFY_WIDGET:{const e=l.page.widgets.findIndex((e=>e.widgetId===n.data.widgetId));return-1!==e&&(l.page.widgets[e]={...l.page.widgets[e],...n.data}),l}case i.DELETE_WIDGET:return l.page.widgets=l.page.widgets.filter((e=>e.widgetId!==n.id)),n.id===l.widgetId&&(l.widgetId=""),l;case i.SELECT_ELEMENT:return l.widgetId=n.widgetId,l.elementId=n.elementId,l;case i.MODIFY_ELEMENT:{const e=l.page.widgets.findIndex((e=>e.widgetId===l.widgetId));if(-1!==e){const i=l.page.widgets[e].elements.findIndex((e=>e.elementId===l.elementId));-1!==i&&(l.page.widgets[e].elements[i]=n.data)}return l}}}},86739:function(e,n,l){l.r(n),l.d(n,{ADD_WIDGET:function(){return d},DELETE_WIDGET:function(){return o},MODIFY_ELEMENT:function(){return g},MODIFY_PAGE:function(){return t},MODIFY_WIDGET:function(){return u},PAGE:function(){return i},SELECT_ELEMENT:function(){return r},SELECT_WIDGET:function(){return a}});const i="PAGE",t="MODIFY_PAGE",a="SELECT_WIDGET",d="ADD_WIDGET",o="DELETE_WIDGET",u="MODIFY_WIDGET",r="SELECT_ELEMENT",g="MODIFY_ELEMENT"}}]);
//# sourceMappingURL=8372.db3d2c7711.chunk.js.map