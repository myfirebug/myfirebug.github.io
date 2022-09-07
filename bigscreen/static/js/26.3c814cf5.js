"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[26,431],{1222:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(24082),l=n(58489),r=n(77504),i=n(17856),c=function(e){var a=e.loading,n=e.error,c=e.nodata,o=e.children;return(0,i.jsxs)("div",{className:"app-wrapper",children:[a&&(0,i.jsx)("div",{className:"app-wrapper__loading",children:(0,i.jsx)(t.Z,{})}),n&&!a&&(0,i.jsxs)("div",{className:"app-wrapper__error",children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)("p",{style:{color:"#00000040",margin:"0"},children:"\u52a0\u8f7d\u5931\u8d25"})]}),!a&&!n&&c&&(0,i.jsx)("div",{className:"app-wrapper__nodata",children:(0,i.jsx)(l.Z,{image:l.Z.PRESENTED_IMAGE_SIMPLE})}),!a&&!n&&!c&&o]})}},61026:function(e,a,n){n.r(a),n.d(a,{default:function(){return A}});var t=n(59469),l=n(45308),r=n(33374),i=n(44855),c=(n(78431),n(6897)),o=n(87183),s=n(67507),d=n(67191),u=n(98843),m=n(10036),p=n(13381),h=n(41324),f=n(27367),g=n(76483),x=n(73380),v=n(39746),b=n(1222),j=n(24687),Z=n(19530),y=n(39924),N=n(70437),E=n(56365),w=n(29072),C=n(48836),V=n(89648),S=n.n(V),I=(n(45149),n(17856)),F=function(e){var a=e.value,n=e.onChange,l=e.options,r=void 0===l?{}:l,c=(0,i.useRef)(null),o=(0,i.useRef)(null),s=(0,i.useCallback)((function(){if(!o.current){var e=(0,t.Z)({mode:"code",onChange:function(){var e;n&&n(null===(e=o.current)||void 0===e?void 0:e.get())}},r);o.current=new(S())(c.current,e,a)}}),[n,r,a]);return(0,i.useEffect)((function(){s()}),[s]),(0,i.useEffect)((function(){return function(){o.current&&o.current.destroy()}}),[o]),(0,I.jsx)("div",{ref:c,className:"app-json-editor"})},_=C.Z.widgetTypesConfiguration,P=C.Z.widgetConfiguration,M=C.Z.baseConfiguration,k=c.Z.TextArea,O=o.Z.TabPane,q=s.Z.Option,z=d.Z.Panel,A=function(e){var a=e.screen,n=e.modifyScreen,C=e.currentWidgetId,V=e.currentWidget,S=e.modifyLargeScreenElement,A=e.currentPage,L=e.setRightFlag,H=e.rightFlag,T=e.currentWidgetGroupId,R=e.showOrHideLargeScreenElement,D=e.changeLargeScreenElement,B=(0,i.useState)("1"),J=(0,r.Z)(B,2),U=J[0],G=J[1],W=u.Z.useForm(),K=(0,r.Z)(W,1)[0],Q=u.Z.useForm(),X=(0,r.Z)(Q,1)[0],Y=u.Z.useForm(),$=(0,r.Z)(Y,1)[0],ee=u.Z.useForm(),ae=(0,r.Z)(ee,1)[0];(0,i.useEffect)((function(){V.configureValue&&K.setFieldsValue(V.configureValue),V.coordinateValue&&$.setFieldsValue(V.coordinateValue),V.dataValue&&ae.setFieldsValue(V.dataValue)}),[V]);var ne=function(e,a){return Object.prototype.toString.call(e)==a},te=function(e,a,n,t){if(t){var r=JSON.parse(JSON.stringify(V));r[t][a]=n,e&&e(C,T,r)}else e&&e((0,l.Z)({},a,n))},le=function(e,a,n,t){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return(0,I.jsxs)(I.Fragment,{children:["Input"===e.componentName&&(0,I.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,I.jsx)(c.Z,{allowClear:!0,disabled:e.disabled,onBlur:function(a){return r&&te(n,e.name,a.target.value,t)},placeholder:e.placeholder})}),"InputNumber"===e.componentName&&(0,I.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,I.jsx)(m.Z,{disabled:e.disabled,min:e.min,max:e.max,onBlur:function(a){return r&&te(n,e.name,a.target.value?Number(a.target.value):0,t)},style:{width:"100%"},placeholder:e.placeholder})}),"TextArea"===e.componentName&&(0,I.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,I.jsx)(k,{allowClear:!0,disabled:e.disabled,onBlur:function(a){return r&&te(n,e.name,a.target.value,t)},rows:8,placeholder:e.placeholder})}),"Switch"===e.componentName&&(0,I.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,valuePropName:"checked",rules:[{required:e.require}],children:(0,I.jsx)(p.Z,{disabled:e.disabled||"useInterface"===e.name&&!T,onChange:function(a){return r&&te(n,e.name,a,t)}})}),"Slider"===e.componentName&&(0,I.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,I.jsx)(h.Z,{min:e.min||0,max:e.max||100,disabled:e.disabled,onAfterChange:function(a){return r&&te(n,e.name,a,t)}})}),"Select"===e.componentName&&(0,I.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,I.jsx)(s.Z,{allowClear:!0,disabled:e.disabled,onChange:function(a){return r&&te(n,e.name,a,t)},placeholder:e.placeholder,children:e.options.map((function(e){return(0,I.jsx)(q,{value:e.code,children:e.name},e.code)}))})}),"SketchPicker"===e.componentName&&(0,I.jsx)(u.Z.Item,{label:e.label,children:(0,I.jsxs)(f.Z,{children:[(0,I.jsx)(g.Z,{span:12,children:(0,I.jsx)(u.Z.Item,{noStyle:!0,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,I.jsx)(c.Z,{allowClear:!0,disabled:e.disabled,onBlur:function(a){return r&&te(n,e.name,a.target.value,t)},placeholder:e.placeholder})})}),(0,I.jsx)(g.Z,{span:11,offset:1,children:(0,I.jsx)(u.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(){return(0,I.jsxs)("div",{className:"color-wrapper",style:{background:a.getFieldValue(e.name),width:"100%"},children:["\u83b7\u53d6\u989c\u8272",(0,I.jsx)("div",{className:"color",children:(0,I.jsx)(v.AI,{color:a.getFieldValue(e.name),onChangeComplete:function(i){a.setFieldsValue((0,l.Z)({},e.name,"rgba(".concat(i.rgb.r,",").concat(i.rgb.g,",").concat(i.rgb.b,",").concat(i.rgb.a,")"))),r?te(n,e.name,"rgba(".concat(i.rgb.r,",").concat(i.rgb.g,",").concat(i.rgb.b,",").concat(i.rgb.a,")"),t):a.setFieldValue(e.name,"rgba(".concat(i.rgb.r,",").concat(i.rgb.g,",").concat(i.rgb.b,",").concat(i.rgb.a,")"))}})})]})}})})]})}),"JsonEdit"===e.componentName&&(0,I.jsx)(u.Z.Item,{label:e.label,name:e.name,tooltip:e.tooltip,rules:[{required:e.require}],children:(0,I.jsx)(u.Z.Item,{shouldUpdate:!0,noStyle:!0,children:(0,I.jsx)(F,{value:a.getFieldValue(e.name),onChange:function(l){return r?te(n,e.name,l,t):a.setFieldValue(e.name,l)}})})})]})},re=function e(a,n,t,l){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return a.map((function(a,i){if(ne(a,"[object Object]")){var c=void 0!==a.relationFields?a.relationFields.split(","):[];return(0,I.jsx)("div",{children:c.length?(0,I.jsx)(u.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(e){var i=e.getFieldValue;if(c.every((function(e){return a.relationValues.includes(String(i(e)))})))return le(a,n,t,l,r)}}):le(a,n,t,l,r)},i)}if(ne(a,"[object Array]"))return(0,I.jsx)("div",{children:a.map((function(a,i){var c=void 0!==a.relationFields?a.relationFields.split(","):[];return(0,I.jsx)(d.Z,{children:void 0===a.relationFields?(0,I.jsx)(z,{header:a.name,children:e(a.list,n,t,l,r)},a+i):(0,I.jsx)(u.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(o){var s=o.getFieldValue;if(c.every((function(e){return a.relationValues.includes(String(s(e)))})))return(0,I.jsx)(d.Z,{children:(0,I.jsx)(z,{header:a.name,children:e(a.list,n,t,l,r)},a+i)},i)}})},i)}))},i)}))},ie=function(e,a,n){e.stopPropagation(),e.preventDefault(),a!==C&&D(a,n)},ce=function(e,a,n){e.stopPropagation(),e.preventDefault(),R(a,n)},oe=(0,i.useMemo)((function(){var e=[];if(T){var a=A.widgets.findIndex((function(e){return e.id===T}));if(-1!==a&&A.widgets[a].dataValue&&A.widgets[a].dataValue.params)for(var n in A.widgets[a].dataValue.params)e.push(n)}return e}),[T,A]);return(0,i.useEffect)((function(){G(C?"2":"1")}),[C]),(0,I.jsxs)("div",{className:"app-screen-disign__body--right",style:{right:H?0:-400},children:[(0,I.jsx)("div",{onClick:function(){return L(!H)},className:"operation",children:H?(0,I.jsx)(E.Z,{}):(0,I.jsx)(w.Z,{})}),(0,I.jsxs)(o.Z,{className:"custom-tabs",activeKey:U,onChange:function(e){return G(e)},destroyInactiveTabPane:!0,children:[(0,I.jsx)(O,{tab:"\u56fe\u5c42\u7ba1\u7406",style:{position:"relative"},children:(0,I.jsx)(b.Z,{loading:!1,error:!1,nodata:Boolean(A&&A.widgets&&!A.widgets.length),children:(0,I.jsx)("div",{className:"app-screen-disign__layer",children:function e(a,n){return a.map((function(a){return a.widgets?(0,I.jsxs)("div",{className:"app-screen-disign__layer",children:[(0,I.jsxs)("div",{onClick:function(e){return ie(e,a.id,a.id)},className:"header ".concat(a.id===C?"is-active":""),children:[(0,I.jsx)("span",{onClick:function(e){return ce(e,a.id)},className:"show",children:"block"===a.configureValue.styleDisplay?(0,I.jsx)(j.Z,{}):(0,I.jsx)(Z.Z,{})}),(0,I.jsx)("span",{className:"file",children:(0,I.jsx)(y.Z,{})}),(0,I.jsx)("span",{className:"label",children:a.label})]}),e(a.widgets,a.id)]},a.id):(0,I.jsx)("div",{className:"app-screen-disign__layer--item",children:(0,I.jsxs)("div",{onClick:function(e){return ie(e,a.id,n)},className:"header ".concat(a.id===C?"is-active":""),children:[(0,I.jsx)("span",{onClick:function(e){return ce(e,a.id,n)},className:"show",children:"block"===a.configureValue.styleDisplay?(0,I.jsx)(j.Z,{}):(0,I.jsx)(Z.Z,{})}),(0,I.jsx)("span",{className:"file",children:(0,I.jsx)(N.Z,{})}),(0,I.jsx)("span",{className:"label",children:a.label})]})},a.id)}))}(A.widgets||[])})})},"5"),(0,I.jsx)(O,{tab:"\u9879\u76ee\u914d\u7f6e",children:(0,I.jsx)(u.Z,{preserve:!0,form:X,labelCol:{span:6},wrapperCol:{span:18},autoComplete:"off",labelAlign:"left",initialValues:a,children:re(M.page.configure||[],X,n,"")})},"1"),C&&!C.includes(",")&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(O,{tab:"\u914d\u7f6e",children:(0,I.jsx)(u.Z,{form:K,labelCol:{span:6},wrapperCol:{span:18},autoComplete:"off",labelAlign:"left",children:_[V.code]?re(_[V.code].configure||[],K,S,"configureValue",!0):_[V.type]?re(_[V.type].configure||[],K,S,"configureValue",!0):null})},"2"),_[V.code]&&_[V.code].data||_[V.type]&&_[V.type].data?(0,I.jsx)(O,{tab:"\u6570\u636e",children:(0,I.jsxs)(u.Z,{preserve:!0,form:ae,labelCol:{span:6},wrapperCol:{span:18},autoComplete:"off",labelAlign:"left",onFinish:function(e){var a=JSON.parse(JSON.stringify(V));a.dataValue=e,P[a.code]&&(a.dataValue=(0,t.Z)((0,t.Z)({},P[a.code].dataValue),e),S(C,T,a))},children:[_[V.code]?re(_[V.code].data||[],ae,S,"dataValue",!1):_[V.type]?re(_[V.type].data||[],ae,S,"dataValue",!1):null,"form"===V.type?(0,I.jsx)(u.Z.Item,{label:"\u63a5\u53e3\u5b57\u6bb5",name:"paramName",tooltip:"\u4ece\u7ec4\u7ec4\u4ef6\u7684\u53c2\u6570\u4e2d\u9009\u62e9",children:(0,I.jsx)(s.Z,{placeholder:"\u8bf7\u9009\u62e9",children:oe.map((function(e){return(0,I.jsx)(q,{children:e},e)}))})}):null,(0,I.jsx)(u.Z.Item,{wrapperCol:{offset:6,span:18},children:(0,I.jsx)(x.Z,{type:"primary",htmlType:"submit",block:!0,children:"\u4fdd\u5b58"})})]})},"3"):null,(0,I.jsx)(O,{tab:"\u5750\u6807",children:(0,I.jsx)(u.Z,{preserve:!0,form:$,labelCol:{span:6},wrapperCol:{span:18},autoComplete:"off",labelAlign:"left",children:re(M.coordinate.configure||[],$,S,"coordinateValue",!0)})},"4")]})]})]})}},58489:function(e,a,n){n.d(a,{Z:function(){return g}});var t=n(45308),l=n(13207),r=n(88437),i=n.n(r),c=n(44855),o=n(52471),s=n(69363),d=function(){var e=(0,c.useContext(o.E_).getPrefixCls)("empty-img-default");return c.createElement("svg",{className:e,width:"184",height:"152",viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},c.createElement("g",{fill:"none",fillRule:"evenodd"},c.createElement("g",{transform:"translate(24 31.67)"},c.createElement("ellipse",{className:"".concat(e,"-ellipse"),cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),c.createElement("path",{className:"".concat(e,"-path-1"),d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),c.createElement("path",{className:"".concat(e,"-path-2"),d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",transform:"translate(13.56)"}),c.createElement("path",{className:"".concat(e,"-path-3"),d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),c.createElement("path",{className:"".concat(e,"-path-4"),d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})),c.createElement("path",{className:"".concat(e,"-path-5"),d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),c.createElement("g",{className:"".concat(e,"-g"),transform:"translate(149.65 15.383)"},c.createElement("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),c.createElement("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}))))},u=function(){var e=(0,c.useContext(o.E_).getPrefixCls)("empty-img-simple");return c.createElement("svg",{className:e,width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},c.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},c.createElement("ellipse",{className:"".concat(e,"-ellipse"),cx:"32",cy:"33",rx:"32",ry:"7"}),c.createElement("g",{className:"".concat(e,"-g"),fillRule:"nonzero"},c.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),c.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",className:"".concat(e,"-path")}))))},m=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)a.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]])}return n},p=c.createElement(d,null),h=c.createElement(u,null),f=function(e){var a=e.className,n=e.prefixCls,r=e.image,d=void 0===r?p:r,u=e.description,f=e.children,g=e.imageStyle,x=m(e,["className","prefixCls","image","description","children","imageStyle"]),v=c.useContext(o.E_),b=v.getPrefixCls,j=v.direction;return c.createElement(s.Z,{componentName:"Empty"},(function(e){var r,o=b("empty",n),s="undefined"!==typeof u?u:e.description,m="string"===typeof s?s:"empty",p=null;return p="string"===typeof d?c.createElement("img",{alt:m,src:d}):d,c.createElement("div",(0,l.Z)({className:i()(o,(r={},(0,t.Z)(r,"".concat(o,"-normal"),d===h),(0,t.Z)(r,"".concat(o,"-rtl"),"rtl"===j),r),a)},x),c.createElement("div",{className:"".concat(o,"-image"),style:g},p),s&&c.createElement("div",{className:"".concat(o,"-description")},s),f&&c.createElement("div",{className:"".concat(o,"-footer")},f))}))};f.PRESENTED_IMAGE_DEFAULT=p,f.PRESENTED_IMAGE_SIMPLE=h;var g=f},78431:function(e,a,n){n.r(a),a.default={}}}]);