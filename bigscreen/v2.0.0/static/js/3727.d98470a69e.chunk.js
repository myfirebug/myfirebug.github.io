"use strict";(self.webpackChunklarge_screen_configuration=self.webpackChunklarge_screen_configuration||[]).push([[3727],{13727:function(e,t,i){i.r(t),i.d(t,{waitTime:function(){return c},waitTimePromise:function(){return u}});var n=i(60919),a=i(67294),l=i(34002),o=i(49101),r=i(89250),s=i(32008),d=i(53525);const u=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return new Promise((t=>{setTimeout((()=>{t(!0)}),e)}))},c=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;await u(e)};t.default=()=>{var e,t,i,u;const c=(0,a.useRef)(),g=(0,r.s0)(),[m,p]=(0,a.useState)(!1),[f,h]=(0,a.useState)(),{filterWidgetsList:w,getWidgets:v,filterHandle:y}=(0,s.DA)();(0,a.useEffect)((()=>{v()}),[v]);const x=[{title:"名称",dataIndex:"name",width:250},{title:"图片",dataIndex:"url",search:!1,render:(e,t,i,n)=>a.createElement("img",{src:e,alt:"",width:150})},{title:"类型",dataIndex:"type",onFilter:!0,ellipsis:!0,valueType:"select",width:100,valueEnum:{all:{text:"全部",status:""},text:{text:"文本",status:"text"},image:{text:"图片",status:"image"},table:{text:"表格",status:"table"},line:{text:"折线图",status:"line"},bar:{text:"柱状图",status:"bar"},pie:{text:"饼图",status:"pie"}}},{title:"使用次数",dataIndex:"count",search:!1,width:100},{title:"创建时间",dataIndex:"createTime",valueType:"date",hideInSearch:!0,width:150},{title:"创建时间",dataIndex:"createTime",valueType:"dateRange",hideInTable:!0},{title:"操作",valueType:"option",key:"option",width:120,render:(e,t,i,n)=>a.createElement("div",{className:"option"},a.createElement("span",{key:"view",onClick:()=>{p(!0),h(t)}},"预览"),0===t.count?a.createElement(a.Fragment,null,a.createElement("span",{key:"editable",onClick:()=>{g(`/widgets/configuration?widgetId=${t.widgetId}`)}},"编辑"),a.createElement("span",{key:"delete"},"删除")):null)}];return a.createElement("div",{className:"cms-widgets"},a.createElement(n.Z,{columns:x,actionRef:c,rowKey:"widgetId",dataSource:w,onSubmit:y,onReset:y,options:{setting:{listsHeight:400}},pagination:{pageSize:20,onChange:e=>{}},dateFormatter:"string",headerTitle:"微件列表",toolBarRender:()=>[a.createElement(l.ZP,{key:"button",icon:a.createElement(o.Z,null),onClick:()=>g("/widgets/configuration"),type:"primary"},"新建")]}),a.createElement(d.Z,{open:m,data:f,pageType:"widget",onClose:()=>p(!1),title:"微件预览",width:(null==f||null===(e=f.configuration)||void 0===e||null===(t=e.configureValue)||void 0===t?void 0:t.widgetConfigWidth)||600,height:(null==f||null===(i=f.configuration)||void 0===i||null===(u=i.configureValue)||void 0===u?void 0:u.widgetConfigHeight)||400}))}}}]);
//# sourceMappingURL=3727.d98470a69e.chunk.js.map