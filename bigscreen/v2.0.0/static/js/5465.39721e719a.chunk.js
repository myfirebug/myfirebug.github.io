"use strict";(self.webpackChunklarge_screen_configuration=self.webpackChunklarge_screen_configuration||[]).push([[5465],{538:function(e,l,n){var t=n(67294),i=n(2639),a=n(5676),o=n(240),d=n(83309),u=n(75735),r=n(72389);l.Z=e=>{var l,n,c,m,g,s,v,f;let{open:E,onClose:p,data:w}=e;const y=(0,t.useCallback)((e=>{var l,n,i,a;return e.element&&u.Z[(0,o.fm)(e.element)]?t.createElement(u.Z[(0,o.fm)(e.element)],{options:e.configuration.configureValue,data:null===(l=e.configuration)||void 0===l||null===(n=l.dataValue)||void 0===n?void 0:n.mock,field:null===(i=e.configuration)||void 0===i||null===(a=i.dataValue)||void 0===a?void 0:a.field}):t.createElement("div",null,"你访问的组件不存在请联系售后人员")}),[]);return t.createElement(i.Z,{open:E,onClose:p,onCancel:p,footer:null,title:"微件预览",destroyOnClose:!0,width:null!=w&&null!==(l=w.configuration)&&void 0!==l&&null!==(n=l.configureValue)&&void 0!==n&&n.widgetConfigWidth?(null==w||null===(c=w.configuration)||void 0===c||null===(m=c.configureValue)||void 0===m?void 0:m.widgetConfigWidth)+30:630},t.createElement(a.Z,{data:w,style:{width:`${(null==w||null===(g=w.configuration)||void 0===g||null===(s=g.configureValue)||void 0===s?void 0:s.widgetConfigWidth)||600}px`,height:`${(null==w||null===(v=w.configuration)||void 0===v||null===(f=v.configureValue)||void 0===f?void 0:f.widgetConfigHeight)||400}px`},header:t.createElement(r.Z,{datas:(null==w?void 0:w.elements.filter((e=>"header"===e.position)))||[],isDroppable:!1,isResizable:!1,column:d.yt,row:d.GK,gap:d.gq,render:y,staticed:!0}),body:t.createElement(r.Z,{datas:(null==w?void 0:w.elements.filter((e=>"body"===e.position)))||[],isDroppable:!1,isResizable:!1,column:d.UK,row:d.XR,gap:d.hU,render:y,staticed:!0})}))}},95465:function(e,l,n){n.r(l);var t=n(67294),i=n(89250),a=n(75735),o=n(4214),d=n(30076),u=n(5676),r=n(4221),c=n(240),m=n(83309),g=n(538),s=n(69483),v=n.n(s),f=n(46020),E=n.n(f),p=n(24404),w=n(2639),y=n(48093),I=n(34041),h=n(34002),V=n(72389);l.default=()=>{var e,l,n,s,f,b,C,D;let T=(0,i.TH)();const Z=(0,i.s0)(),[M,S]=(0,t.useReducer)(r.widgetReducer,r.initialState),[_,N]=(0,t.useState)(!1),[O,k]=(0,t.useState)(!0);(0,t.useEffect)((()=>{const e=new URLSearchParams(T.search);if(e.size){const l=e.get("widgetId");l&&v().getItem(m.mv,((e,n)=>{if(n){const e=n.find((e=>e.widgetId===l));e&&S({type:"WIDGET",data:e})}}))}else S({type:"WIDGET",data:{name:"未命名微件",url:"",id:"",createTime:"",type:"text",count:0,x:0,y:0,column:1,row:1,widgetId:(0,c.M8)(),configuration:{configureValue:d.X3.configureValue,dataValue:d.X3.dataValue},elements:[]}})}),[T]);const F=(0,t.useCallback)((e=>{S({type:"MODIFY_ELEMENT",data:{x:e.x,y:e.y,elementId:e.i}})}),[]),x=(0,t.useCallback)((e=>{S({type:"MODIFY_ELEMENT",data:{row:e.w,column:e.h,elementId:e.i}})}),[]),L=(0,t.useCallback)(((e,l,n)=>{S({type:"ADD_ELEMENT",data:{...l,x:e.x,y:e.y,position:n,elementId:(0,c.M8)()}})}),[]),R=(0,t.useCallback)((e=>{var l,n,i,d;return e.element&&a.Z[(0,c.fm)(e.element)]?t.createElement(t.Fragment,null,(null==M?void 0:M.elementId)===e.elementId?t.createElement(o.k1,null):null,t.createElement(a.Z[(0,c.fm)(e.element)],{options:e.configuration.configureValue,data:null===(l=e.configuration)||void 0===l||null===(n=l.dataValue)||void 0===n?void 0:n.mock,field:null===(i=e.configuration)||void 0===i||null===(d=i.dataValue)||void 0===d?void 0:d.field})):t.createElement("div",null,"你访问的组件不存在请联系售后人员")}),[null==M?void 0:M.elementId]),G=(0,t.useMemo)((()=>{let e=[];return e=null!=M&&M.widgetId?null!=M&&M.elementId?["layer","element","widget","data"]:["layer","widget","data"]:["layer","widget"],e}),[null==M?void 0:M.elementId,null==M?void 0:M.widgetId]),W=(0,t.useCallback)(((e,l)=>{"element"===e&&l&&(null==M?void 0:M.elementId)!==l&&S({type:"SELECT_ELEMENT",id:l})}),[null==M?void 0:M.elementId]),J=(0,t.useMemo)((()=>{let e=[];for(let l in m.JN)e.push({label:m.JN[l],value:l});return e}),[]),Y=(0,t.useMemo)((()=>null==M?void 0:M.widget),[null==M?void 0:M.widget]),z=(0,t.useMemo)((()=>null==Y?void 0:Y.elements.find((e=>e.elementId===(null==M?void 0:M.elementId)))),[null==M?void 0:M.elementId,Y]),H=(0,t.useCallback)((e=>{S({type:"DELETE_ELEMENT",id:e.elementId})}),[]);return t.createElement("div",{className:"cms-config-layout"},t.createElement(o.G6,{logo:"",name:null==M?void 0:M.widget.name,pageType:"widget",modifyNameSuccessHander:e=>{S({type:"MODIFY_WIDGET",data:{name:e}})},previewHandler:()=>N(!0),publishHandler:()=>{k(!1),setTimeout((()=>{E()(document.getElementById("js_widget"),{allowTaint:!0,scale:.5,backgroundColor:"rgb(9, 5, 72)"}).then((e=>{try{S({type:"MODIFY_WIDGET",data:{url:null==e?void 0:e.toDataURL()}})}catch(e){p.ZP.error("存在跨域资源，缩略图获取失败")}}))}),10)}}),t.createElement("div",{className:"cms-config-layout__content"},t.createElement(o.Gd,{navs:["element"],render:e=>"element"===e?t.createElement(o.My,null):null}),t.createElement(o.JE,null,t.createElement("div",{style:{position:"relative",width:`${(null==Y||null===(e=Y.configuration)||void 0===e||null===(l=e.configureValue)||void 0===l?void 0:l.widgetConfigWidth)||600}px`,height:`${(null==Y||null===(n=Y.configuration)||void 0===n||null===(s=n.configureValue)||void 0===s?void 0:s.widgetConfigHeight)||400}px`},id:"js_widget"},t.createElement(u.Z,{header:t.createElement(V.Z,{column:m.yt,row:m.GK,gap:m.gq,configureValue:null==Y||null===(f=Y.configuration)||void 0===f?void 0:f.configureValue,datas:(null==Y?void 0:Y.elements.filter((e=>"header"===e.position)))||[],render:R,onDrop:(e,l)=>L(e,l,"header"),onDragStop:F,onResizeStop:x,isDroppable:O,isResizable:O,staticed:!O,onClose:H}),body:t.createElement(V.Z,{column:m.UK,row:m.XR,gap:m.hU,configureValue:null==Y||null===(b=Y.configuration)||void 0===b?void 0:b.configureValue,datas:(null==Y?void 0:Y.elements.filter((e=>"body"===e.position)))||[],render:R,onDrop:(e,l)=>L(e,l,"body"),onDragStop:F,onResizeStop:x,isDroppable:O,isResizable:O,staticed:!O,onClose:H}),data:(null==M?void 0:M.widget)||{}}))),t.createElement(o.yO,{navs:G,render:e=>{return"layer"===e?t.createElement(o.TC,{datas:null!=M&&M.widget?[null==M?void 0:M.widget]:[],widgetId:null==M?void 0:M.widgetId,elementId:null==M?void 0:M.elementId,onSelected:W}):"widget"===e?t.createElement(o.hp,{configureValue:(null==M||null===(l=M.widget)||void 0===l||null===(n=l.configuration)||void 0===n?void 0:n.configureValue)||{},onFinish:e=>{var l;const n=JSON.parse(JSON.stringify(null==M||null===(l=M.widget)||void 0===l?void 0:l.configuration));S({type:"MODIFY_WIDGET",data:{configuration:{...n,configureValue:{...n.configureValue,...e}}}})}}):"element"===e?t.createElement(o.Kp,{element:null==z?void 0:z.element,configureValue:(null==z?void 0:z.configuration.configureValue)||{},onFinish:e=>{var l;const n=JSON.parse(JSON.stringify(null==M||null===(l=M.widget)||void 0===l?void 0:l.elements.find((e=>e.elementId===M.elementId))));n&&S({type:"MODIFY_ELEMENT",data:{...n,configuration:{...n.configuration,configureValue:{...n.configuration.configureValue,...e}}}})}}):"data"===e?t.createElement(o.$X,{widgetDataValue:null==M||null===(i=M.widget)||void 0===i||null===(a=i.configuration)||void 0===a?void 0:a.dataValue,widgetOnFinish:e=>{var l;const n=null==M?void 0:M.widget;S({type:"MODIFY_WIDGET",data:{...n,configuration:{...null==n?void 0:n.configuration,dataValue:{...null==n||null===(l=n.configuration)||void 0===l?void 0:l.dataValue,...e}}}})},elementDataValue:null==z?void 0:z.configuration.dataValue,elementOnFinish:e=>{var l;const n=JSON.parse(JSON.stringify(null==M||null===(l=M.widget)||void 0===l?void 0:l.elements.find((e=>e.elementId===M.elementId))));n&&S({type:"MODIFY_ELEMENT",data:{...n,configuration:{...n.configuration,dataValue:{...n.configuration.dataValue,...e}}}})}}):null;var l,n,i,a}})),t.createElement(g.Z,{open:_,onClose:()=>N(!1),data:null==M?void 0:M.widget}),t.createElement(w.Z,{open:!O,title:"发布微件",footer:null,width:400,maskClosable:!1,onCancel:()=>k(!0)},t.createElement(y.Z,{autoComplete:"off",initialValues:null==M?void 0:M.widget,labelCol:{flex:"60px"},onFinish:e=>{p.ZP.success("发布成功"),S({type:"SELECT_ELEMENT",id:""}),Z(-1)}},t.createElement(y.Z.Item,{name:"name",label:"微件名称"},t.createElement(y.Z.Item,{noStyle:!0},null==M||null===(C=M.widget)||void 0===C?void 0:C.name)),t.createElement(y.Z.Item,{name:"url",label:"缩略图"},t.createElement(y.Z.Item,{noStyle:!0},t.createElement("img",{src:null==M||null===(D=M.widget)||void 0===D?void 0:D.url,alt:"缩略图",style:{borderRadius:"5px",width:"100%"}}))),t.createElement(y.Z.Item,{name:"type",label:"类型",rules:[{required:!0,message:"请选择类型"}]},t.createElement(I.default,{showSearch:!0,placeholder:"请选择类型",options:J})),t.createElement(y.Z.Item,null,t.createElement(h.ZP,{type:"primary",htmlType:"submit",block:!0},"发布")))))}}}]);
//# sourceMappingURL=5465.39721e719a.chunk.js.map