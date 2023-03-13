"use strict";(self.webpackChunkflow_chart=self.webpackChunkflow_chart||[]).push([[540,124,262,601,664,32,428],{84805:function(e,a,n){n.r(a);var t=n(1413),r=n(29439),l=n(72791),i=n(84124),o=n(89733),d=n(80184);a.default=function(){var e=(0,l.useContext)(o.CardConfigurationContext),a=(0,l.useState)(i.CONTROL_DATAS),n=(0,r.Z)(a,1)[0],c=(0,l.useCallback)((function(a){var n=e.data,r=e.dispatch,l=n.card;if(!a.disabled&&e&&r){var i=l?l.inParams.filter((function(e){return e.formType===a.data.formType})):[];r({type:"ADD_CARD_FROM_ITEM",data:(0,t.Z)((0,t.Z)({},a.data),{},{label:"".concat(a.name).concat(i.length),field:"".concat(a.data.formType.toLocaleLowerCase()).concat(i.length)})})}}),[e]);return(0,d.jsxs)("ul",{className:"app-card-configuration-form__composite",children:[(0,d.jsx)("div",{className:"app-card-configuration-form__composite--header",children:"\u7ec4\u4ef6"}),(0,d.jsx)("div",{className:"app-card-configuration-form__composite--list",children:n.map((function(e){return(0,d.jsx)("li",{onClick:function(){return c(e)},className:"app-card-configuration-form__composite--item ".concat(e.disabled?"is-disabled":""),children:e.value},e.value)}))})]})}},84124:function(e,a,n){n.r(a),n.d(a,{CONTROL_DATAS:function(){return i}});var t=n(1413),r={field:"test",formType:"Input",label:"label",placeholder:"\u8bf7\u8f93\u5165",value:"",disabled:!1,required:!1,tooltip:""},l={dataType:"mock",mock:[{label:"",value:""}],url:"",method:"GET",isHeader:!1,headerField:"",headerValue:"",correspondField:"",dependency:void 0},i=[{value:"Input",name:"\u8f93\u5165\u6846",disabled:!1,data:(0,t.Z)((0,t.Z)({},r),{},{formType:"Input"})},{value:"TextArea",name:"\u591a\u884c\u8f93\u5165",data:(0,t.Z)((0,t.Z)({},r),{},{formType:"TextArea"})},{value:"Number",name:"\u6570\u5b57\u8f93\u5165",data:(0,t.Z)((0,t.Z)({},r),{},{formType:"InputNumber"})},{value:"Password",name:"\u5bc6\u7801\u8f93\u5165",data:(0,t.Z)((0,t.Z)({},r),{},{formType:"Password"})},{value:"Select",name:"\u9009\u62e9\u6846",data:(0,t.Z)((0,t.Z)((0,t.Z)({},r),{},{formType:"Select"},l),{},{correspondField:"datas",mock:[{label:"\u9009\u62e9\u68461",value:"select1"}]})},{value:"Checkbox Group",name:"\u590d\u9009\u6846",data:(0,t.Z)((0,t.Z)((0,t.Z)({},r),{},{formType:"CheckboxGroup"},l),{},{correspondField:"datas",mock:[{label:"\u590d\u9009\u68461",value:"checkbox1"}]})},{value:"Radio Group",name:"\u5355\u9009\u6846",data:(0,t.Z)((0,t.Z)((0,t.Z)({},r),{},{formType:"RadioGroup"},l),{},{correspondField:"datas",mock:[{label:"\u5355\u9009\u68461",value:"radio1"}]})},{value:"Cascader",name:"\u8054\u7ea7\u6846",data:(0,t.Z)((0,t.Z)((0,t.Z)({},r),{},{formType:"Cascader"},l),{},{dataType:"dynamic",url:window.location.href.split("#")[0]+"/temporary-tree",mock:[],correspondField:"datas",expandTrigger:"click",changeOnSelect:!1,multiple:!1,fieldNames:{label:"label",value:"value",children:"children"}})},{value:"Date",name:"\u65e5\u671f\u9009\u62e9",disabled:!0,data:(0,t.Z)((0,t.Z)({},r),{},{formType:"Input"})},{value:"Date Range",name:"\u65e5\u671f\u8303\u56f4",disabled:!0,data:(0,t.Z)((0,t.Z)({},r),{},{formType:"Input"})},{value:"Time",name:"\u65f6\u95f4\u9009\u62e9",disabled:!0,data:(0,t.Z)((0,t.Z)({},r),{},{formType:"Input"})},{value:"Time Range",name:"\u65f6\u95f4\u8303\u56f4",disabled:!0,data:(0,t.Z)((0,t.Z)({},r),{},{formType:"Input"})},{value:"Switch",name:"\u5f00\u5173",data:(0,t.Z)((0,t.Z)({},r),{},{formType:"Switch"})},{value:"TreeSelect",name:"\u6811\u9009\u62e9",disabled:!0,data:(0,t.Z)((0,t.Z)({},r),{},{formType:"Input"})}]},66262:function(e,a,n){n.r(a);var t=n(1413),r=n(29439),l=n(72791),i=n(6362),o=n(80184);a.default=function(e){var a=e.drawerConf,n=e.setDrawerConf,d=i.l0.useForm(),c=(0,r.Z)(d,1)[0];return(0,l.useEffect)((function(){a.details&&c.setFieldsValue(a.details)}),[a.details,c]),(0,l.useEffect)((function(){c&&n((function(e){return(0,t.Z)((0,t.Z)({},e),{},{form:c})}))}),[n,c]),(0,o.jsxs)(i.l0,{style:{padding:10},name:"dynamic_form_item",form:c,labelCol:{span:7},wrapperCol:{span:17},colon:!1,labelAlign:"left",children:[(0,o.jsx)(i.l0.Item,{name:"label",label:"label",rules:[{required:!0,message:"\u8bf7\u8f93\u5165label"}],children:(0,o.jsx)(i.II,{placeholder:"\u8bf7\u8f93\u5165label"})}),(0,o.jsx)(i.l0.Item,{name:"value",label:"value",rules:[{required:!0,message:"\u8bf7\u8f93\u5165value"}],children:(0,o.jsx)(i.II,{placeholder:"\u8bf7\u8f93\u5165value"})}),(0,o.jsx)(i.l0.Item,{name:"children",label:"children",rules:[{required:!0,message:"\u8bf7\u8f93\u5165children"}],children:(0,o.jsx)(i.II,{placeholder:"\u8bf7\u8f93\u5165children"})})]})}},18892:function(e,a,n){n.r(a);n(72791),n(65601);var t=n(84805),r=n(21210),l=n(14628),i=n(80184);a.default=function(){return(0,i.jsxs)("div",{className:"app-card-configuration-form",children:[(0,i.jsx)(t.default,{}),(0,i.jsx)(r.default,{}),(0,i.jsx)(l.default,{})]})}},24199:function(e,a,n){n.r(a);var t=n(1413),r=n(29439),l=n(72791),i=n(6362),o=n(59044),d=n(80184);a.default=function(e){var a=e.drawerConf,n=e.setDrawerConf,c=i.l0.useForm(),s=(0,r.Z)(c,1)[0];return(0,l.useEffect)((function(){a.details&&a.details.length&&s.setFieldsValue({mock:a.details})}),[a.details,s]),(0,l.useEffect)((function(){s&&n((function(e){return(0,t.Z)((0,t.Z)({},e),{},{form:s})}))}),[n,s]),(0,d.jsx)(i.l0,{name:"dynamic_form_item",form:s,children:(0,d.jsx)(i.l0.List,{name:"mock",children:function(e,a,n){var t=a.add,r=a.remove;n.errors;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.X2,{style:{background:"#eee",lineHeight:"30px",color:"#999",fontWeight:"bold",marginBottom:20},children:[(0,d.jsx)(i.JX,{span:11,style:{padding:"0 10px"},children:"\u952e\u540d"}),(0,d.jsx)(i.JX,{span:11,style:{padding:"0 10px"},children:"\u952e\u503c"}),(0,d.jsx)(i.JX,{span:2,style:{padding:"0 10px"},children:"\u64cd\u4f5c"})]}),e.map((function(a){return(0,d.jsxs)(i.X2,{children:[(0,d.jsx)(i.JX,{span:11,style:{paddingLeft:10},children:(0,d.jsx)(i.l0.Item,{name:[a.name,"label"],validateTrigger:["onBlur"],rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u952e\u540d"}],children:(0,d.jsx)(i.II,{placeholder:"\u8bf7\u8f93\u5165\u952e\u540d"})})}),(0,d.jsx)(i.JX,{span:11,style:{paddingLeft:10},children:(0,d.jsx)(i.l0.Item,{name:[a.name,"value"],validateTrigger:["onBlur"],rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u952e\u503c"}],children:(0,d.jsx)(i.II,{placeholder:"\u8bf7\u8f93\u5165\u952e\u503c"})})}),(0,d.jsx)(i.JX,{span:2,style:{padding:"5px 0 0 10px"},children:e.length>1?(0,d.jsx)(o.MinusCircleOutlined,{className:"dynamic-delete-button",onClick:function(){return r(a.name)}}):null})]},a.key)})),(0,d.jsx)(i.l0.Item,{style:{padding:"0 10px"},children:(0,d.jsx)(i.zx,{type:"dashed",onClick:function(){return t()},block:!0,icon:(0,d.jsx)(o.PlusOutlined,{}),children:"\u6dfb\u52a0"})})]})}})})}},14628:function(e,a,n){n.r(a),n.d(a,{default:function(){return I}});var t=n(1413),r=n(4942),l=n(29439),i=n(72791),o=n(6362),d=n(93433),c=[{componentName:"Input",label:"\u6807\u7b7e\u540d",name:"label",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e\u540d"},{componentName:"Input",label:"\u5b57\u6bb5\u540d",name:"field",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u5b57\u6bb5\u540d"},{componentName:"Input",label:"\u5b57\u6bb5\u503c",name:"value",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u5b57\u6bb5\u503c"},{componentName:"Input",label:"\u5360\u4f4d\u63d0\u793a",name:"placeholder",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u63d0\u793a"},{componentName:"Switch",label:"\u662f\u5426\u5fc5\u586b",name:"required",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u9009\u62e9"},{componentName:"Switch",label:"\u662f\u5426\u7981\u7528",name:"disabled",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u9009\u62e9"},{componentName:"TextArea",label:"\u63d0\u793a\u4fe1\u606f",name:"tooltip",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u63d0\u793a\u4fe1\u606f"}],s={configureValue:{useInterface:!1,dataType:"mock",mock:{value:"\u6587\u672c\u6846"},url:"",method:"get",field:"value"},configure:[{componentName:"Select",label:"\u8bf7\u6c42\u7c7b\u578b",name:"dataType",required:!1,placeholder:"",options:[{code:"mock",name:"mock\u6570\u636e"},{code:"dynamic",name:"\u63a5\u53e3\u6570\u636e"}]},{componentName:"MockButton",label:"mock\u6570\u636e",name:"mock",required:!1,placeholder:"",relationFields:"dataType",relationValues:"mock"},{componentName:"TextArea",label:"\u63a5\u53e3\u5730\u5740",name:"url",required:!1,placeholder:"\u8bf7\u8f93\u5165\u63a5\u53e3\u5730\u5740",relationFields:"dataType",relationValues:"dynamic"},{componentName:"Dependency",label:"\u4f9d\u8d56\u9879",name:"dependency",required:!1,placeholder:"\u8bf7\u9009\u62e9",relationFields:"dataType",relationValues:"dynamic"},{componentName:"Select",label:"\u8bf7\u6c42\u65b9\u5f0f",name:"method",required:!1,placeholder:"",relationFields:"dataType",relationValues:"dynamic",options:[{code:"GET",name:"GET"},{code:"POST",name:"POST"}]},{componentName:"Switch",label:"\u8bf7\u6c42\u5934",name:"isHeader",required:!1,disabled:!1,tooltip:"",relationFields:"dataType",relationValues:"dynamic",placeholder:"\u8bf7\u9009\u62e9"},{componentName:"Input",label:"\u5934\u5b57\u6bb5\u540d",name:"headerField",required:!1,relationFields:"dataType,isHeader",relationValues:"dynamic,true",placeholder:"\u8bf7\u8f93\u5165"},{componentName:"Input",label:"\u5934\u5b57\u6bb5\u503c",name:"headerValue",required:!1,relationFields:"dataType,isHeader",relationValues:"dynamic,true",placeholder:"\u8bf7\u8f93\u5165"},{componentName:"Input",label:"\u5bf9\u5e94\u5b57\u6bb5",name:"correspondField",required:!1,relationFields:"dataType",relationValues:"dynamic",placeholder:"\u8bf7\u8f93\u5165"}]},u={Input:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:[].concat((0,d.Z)(c),[{componentName:"Switch",label:"\u5c55\u793a\u5b57\u6570",name:"showCount",required:!1,disabled:!1,tooltip:"",placeholder:""},{componentName:"InputNumber",label:"\u6700\u5927\u957f\u5ea6",name:"maxLength",required:!1,disabled:!1,min:0,max:20,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u6700\u5927\u957f\u5ea6"}])}]]},InputNumber:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:[].concat((0,d.Z)(c),[{componentName:"InputNumber",label:"\u6700\u5c0f\u503c",name:"min",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u6700\u5c0f\u503c"},{componentName:"InputNumber",label:"\u6700\u5927\u503c",name:"max",required:!1,disabled:!1,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u6700\u5c0f\u503c"}])}]]},TextArea:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:[].concat((0,d.Z)(c),[{componentName:"Switch",label:"\u5c55\u793a\u5b57\u6570",name:"showCount",required:!1,disabled:!1,tooltip:"",placeholder:""},{componentName:"InputNumber",label:"\u6700\u5927\u957f\u5ea6",name:"maxLength",required:!1,disabled:!1,min:0,max:20,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u6700\u5927\u957f\u5ea6"}])}]]},Password:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:[].concat((0,d.Z)(c),[{componentName:"InputNumber",label:"\u6700\u5927\u957f\u5ea6",name:"maxLength",required:!1,disabled:!1,min:0,max:20,tooltip:"",placeholder:"\u8bf7\u8f93\u5165\u6700\u5927\u957f\u5ea6"}])}]]},Switch:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:(0,d.Z)(c)}]]},Select:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:(0,d.Z)(c.filter((function(e){return"value"!==e.name})))}],[{name:"\u6570\u636e",list:(0,d.Z)(s.configure.map((function(e){return"url"===e.name?(0,t.Z)((0,t.Z)({},e),{},{tooltip:"\u6d4b\u8bd5\u5730\u5740\uff1a".concat(window.location.href.split("#")[0],"temporary-list")}):e})))}]]},CheckboxGroup:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:(0,d.Z)(c.filter((function(e){return"value"!==e.name&&"placeholder"!==e.name})))}],[{name:"\u6570\u636e",list:(0,d.Z)(s.configure.map((function(e){return"url"===e.name?(0,t.Z)((0,t.Z)({},e),{},{tooltip:"\u6d4b\u8bd5\u5730\u5740\uff1a".concat(window.location.href.split("#")[0],"temporary-list")}):e})))}]]},RadioGroup:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:(0,d.Z)(c.filter((function(e){return"value"!==e.name&&"placeholder"!==e.name})))}],[{name:"\u6570\u636e",list:(0,d.Z)(s.configure.map((function(e){return"url"===e.name?(0,t.Z)((0,t.Z)({},e),{},{tooltip:"\u6d4b\u8bd5\u5730\u5740\uff1a".concat(window.location.href.split("#")[0],"temporary-list")}):e})))}]]},Cascader:{configure:[[{name:"\u5b57\u6bb5\u5c5e\u6027",list:[].concat((0,d.Z)(c.filter((function(e){return"value"!==e.name}))),[{componentName:"Select",label:"\u5c55\u5f00\u65b9\u5f0f",name:"expandTrigger",required:!1,placeholder:"",allowClear:!1,tooltip:"\u6b21\u7ea7\u83dc\u5355\u7684\u5c55\u5f00\u65b9\u5f0f\uff0c\u53ef\u9009 'click' \u548c 'hover'",options:[{code:"click",name:"click"},{code:"hover",name:"hover"}]},{componentName:"Switch",label:"\u5355\u9009\u751f\u6548",name:"changeOnSelect",required:!1,disabled:!1,tooltip:"\uff08\u5355\u9009\u65f6\u751f\u6548\uff09\u5f53\u6b64\u9879\u4e3a true \u65f6\uff0c\u70b9\u9009\u6bcf\u7ea7\u83dc\u5355\u9009\u9879\u503c\u90fd\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u5177\u4f53\u89c1\u4e0a\u9762\u7684\u6f14\u793a",placeholder:"\u8bf7\u9009\u62e9",relationFields:"expandTrigger",relationValues:"click"},{componentName:"Switch",label:"\u662f\u5426\u591a\u9009",name:"multiple",required:!1,disabled:!1,tooltip:"\u652f\u6301\u591a\u9009\u8282\u70b9",placeholder:"\u8bf7\u9009\u62e9"},{componentName:"FieldNamesButton",label:"\u81ea\u5b9a\u4e49",name:"fieldNames",tooltip:"\u81ea\u5b9a\u4e49 options \u4e2d label value children \u7684\u5b57\u6bb5",required:!1,placeholder:""}])}],[{name:"\u6570\u636e",list:(0,d.Z)(s.configure.map((function(e){return"dataType"===e.name?(0,t.Z)((0,t.Z)({},e),{},{disabled:!0}):"url"===e.name?(0,t.Z)((0,t.Z)({},e),{},{tooltip:"\u6d4b\u8bd5\u5730\u5740\uff1a".concat(window.location.href.split("#")[0],"temporary-tree")}):e})))}]]}},m=n(89733),p=n(24199),f=n(66262),h=n(80184),x=o.II.TextArea,v=o.Ph.Option,b=o.UO.Panel,I=function(){var e=(0,i.useContext)(m.CardConfigurationContext),a=o.l0.useForm(),n=(0,l.Z)(a,1)[0],d=(0,i.useState)({title:"",width:600,visible:!1,type:"mock",details:[]}),c=(0,l.Z)(d,2),s=c[0],I=c[1];(0,i.useEffect)((function(){var a=e.data,t=a.card,r=a.selectFormItemId;if(a&&r&&t){var l=null===t||void 0===t?void 0:t.inParams.findIndex((function(e){return e.id===r}));-1!==l&&n.setFieldsValue(null===t||void 0===t?void 0:t.inParams[l])}}),[e,n]);var _=(0,i.useCallback)((function(a,n){e.dispatch({type:"MODIFY_CARD_FROM_ITEM",data:(0,r.Z)({},a,n)})}),[e]),g=function(a,r){var l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,h.jsxs)(h.Fragment,{children:["Input"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,rules:[{required:a.require}],children:(0,h.jsx)(o.II,{allowClear:!0,disabled:a.disabled,onBlur:function(e){return l&&_(a.name,e.target.value)},placeholder:a.placeholder})}),"InputNumber"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,rules:[{required:a.require}],children:(0,h.jsx)(o.Rn,{disabled:a.disabled,min:a.min,max:a.max,onBlur:function(e){return l&&_(a.name,e.target.value?Number(e.target.value):0)},style:{width:"100%"},placeholder:a.placeholder})}),"TextArea"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,rules:[{required:a.require}],children:(0,h.jsx)(x,{allowClear:!0,disabled:a.disabled,onBlur:function(e){return l&&_(a.name,e.target.value)},rows:8,placeholder:a.placeholder})}),"Switch"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,valuePropName:"checked",rules:[{required:a.require}],children:(0,h.jsx)(o.rs,{onChange:function(e){return l&&_(a.name,e)}})}),"Slider"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,rules:[{required:a.require}],children:(0,h.jsx)(o.iR,{min:a.min||0,max:a.max||100,disabled:a.disabled,step:a.step||1,onAfterChange:function(e){return l&&_(a.name,e)}})}),"Select"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,rules:[{required:a.require}],children:(0,h.jsx)(o.Ph,{allowClear:"undefined"===typeof a.allowClear||a.allowClear,disabled:a.disabled,onChange:function(e){return l&&_(a.name,e)},placeholder:a.placeholder,children:a.options.map((function(e){return(0,h.jsx)(v,{value:e.code,children:e.name},e.code)}))})}),"Dependency"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,rules:[{required:a.require}],children:(0,h.jsx)(o.Ph,{allowClear:!0,disabled:a.disabled,onChange:function(e){return l&&_(a.name,e)},mode:"multiple",placeholder:a.placeholder,children:e.data&&e.data.card&&e.data.card.inParams?e.data.card.inParams.map((function(a,n){return a.id!==e.data.selectFormItemId?(0,h.jsx)(v,{value:a.field,children:a.label},n):null})):null})}),"MockButton"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,rules:[{required:a.require}],children:(0,h.jsx)(o.zx,{type:"primary",style:{width:"100%"},onClick:function(){return I((function(e){return(0,t.Z)((0,t.Z)({},e),{},{title:"\u914d\u7f6emock\u6570\u636e",width:600,type:"mock",visible:!0,details:n.getFieldValue("mock")})}))},children:"\u914d\u7f6emock\u6570\u636e"})}),"FieldNamesButton"===a.componentName&&(0,h.jsx)(o.l0.Item,{label:a.label,name:a.name,tooltip:a.tooltip,rules:[{required:a.require}],children:(0,h.jsx)(o.zx,{type:"primary",style:{width:"100%"},onClick:function(){return I((function(e){return(0,t.Z)((0,t.Z)({},e),{},{title:"\u914d\u7f6e\u81ea\u5b9a\u4e49\u5b57\u6bb5",width:300,type:"fieldNames",visible:!0,details:n.getFieldValue("fieldNames")})}))},children:"\u81ea\u5b9a\u4e49\u5b57\u6bb5"})})]})},j=function(e,a){return Object.prototype.toString.call(e)===a},C=(0,i.useMemo)((function(){var a=e.data,n=a.card,t=a.selectFormItemId,r="";if(n&&t){var l=n.inParams.findIndex((function(e){return e.id===t}));-1!==l&&(r=n.inParams[l].formType)}return r}),[e.data]);return(0,h.jsxs)("div",{className:"app-card-configuration-form__settings",children:[(0,h.jsx)("div",{className:"header",children:"\u5c5e\u6027\u914d\u7f6e"}),(0,h.jsx)("div",{className:"body",children:e.data.selectFormItemId?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.l0,{form:n,labelCol:{span:8},wrapperCol:{span:16},autoComplete:"off",colon:!1,labelAlign:"left",children:C&&u[C]?function e(a,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.map((function(a,r){if(j(a,"[object Object]")){var l=void 0!==a.relationFields?a.relationFields.split(","):[];return(0,h.jsx)("div",{children:l.length?(0,h.jsx)(o.l0.Item,{noStyle:!0,shouldUpdate:!0,children:function(e){var r=e.getFieldValue;if(l.every((function(e){return a.relationValues.includes(String(r(e)))})))return g(a,n,t)}}):g(a,n,t)},r)}if(j(a,"[object Array]"))return(0,h.jsx)("div",{children:a.map((function(a,r){var l=void 0!==a.relationFields?a.relationFields.split(","):[];return(0,h.jsx)(o.UO,{defaultActiveKey:0,accordion:!0,children:void 0===a.relationFields?(0,h.jsx)(b,{header:a.name,children:e(a.list,n,t)},r):(0,h.jsx)(o.l0.Item,{noStyle:!0,shouldUpdate:!0,children:function(i){var d=i.getFieldValue;if(l.every((function(e){return a.relationValues.includes(String(d(e)))})))return(0,h.jsx)(o.UO,{accordion:!0,children:(0,h.jsx)(b,{header:a.name,children:e(a.list,n,t)},a+r)},r)}})},r)}))},r)}))}(u[C].configure,n,!0):null}),(0,h.jsxs)(o.dy,{title:s.title,width:s.width,bodyStyle:{padding:0},headerStyle:{borderBottom:"1px solid #ddd",padding:"10px"},onClose:function(){return I((function(e){return(0,t.Z)((0,t.Z)({},e),{},{visible:!1})}))},extra:(0,h.jsx)(o.T,{children:(0,h.jsx)(o.zx,{type:"primary",onClick:function(){s.form&&s.form.validateFields().then((function(e){switch(I((function(e){return(0,t.Z)((0,t.Z)({},e),{},{visible:!1})})),s.type){case"mock":_("mock",e.mock);break;case"fieldNames":_("fieldNames",e)}}))},children:"\u786e\u5b9a"})}),open:s.visible,children:["mock"===s.type?(0,h.jsx)(p.default,{drawerConf:s,setDrawerConf:I}):null,"fieldNames"===s.type?(0,h.jsx)(f.default,{drawerConf:s,setDrawerConf:I}):null]})]}):(0,h.jsx)(o.HY,{image:o.HY.PRESENTED_IMAGE_SIMPLE})})]})}},21210:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});var t=n(1413),r=n(29439),l=n(72791),i=n(6362),o=n(89733),d=n(25925),c=n(92403),s=n.n(c),u=(n(93059),n(80184)),m=function(e){var a=e.value,n=e.onChange,r=e.options,i=void 0===r?{}:r,o=(0,l.useRef)(null),d=(0,l.useRef)(null),c=(0,l.useCallback)((function(){if(!d.current){var e=(0,t.Z)({mode:"code",onChange:function(){var e;n&&n(null===(e=d.current)||void 0===e?void 0:e.get())}},i);d.current=new(s())(o.current,e,a)}}),[n,i,a]);return(0,l.useEffect)((function(){c()}),[c]),(0,l.useEffect)((function(){return d.current,function(){d.current&&d.current.destroy()}}),[d,a]),(0,u.jsx)("div",{ref:o,className:"app-json-editor"})},p=function(){var e,a,n,c,s,p,f,h=(0,l.useContext)(o.CardConfigurationContext),x=(0,l.useState)({top:!0,bottom:!0,moveUp:!0,moveDown:!0,copy:!0,delete:!0}),v=(0,r.Z)(x,2),b=v[0],I=v[1],_=(0,l.useState)(0),g=(0,r.Z)(_,2),j=g[0],C=g[1];(0,l.useEffect)((function(){var e=h.data,a=e.card,n=e.selectFormItemId;if(a&&n){var r=a.inParams.findIndex((function(e){return e.id===n}));-1!==r&&I((function(e){return(0,t.Z)((0,t.Z)({},e),{},{top:0===r,bottom:r===a.inParams.length-1,moveUp:0===r||!a.inParams.length,moveDown:r===a.inParams.length-1||!a.inParams.length})})),I((function(e){return(0,t.Z)((0,t.Z)({},e),{},{copy:!1,delete:!1})}))}n||I({top:!0,bottom:!0,moveUp:!0,moveDown:!0,copy:!0,delete:!0})}),[h]);var y=(0,l.useCallback)((function(e,a){var n=a.target.dataset.type,t=h.dispatch,r=h.data,l=r.card,i=r.selectFormItemId;if(l)switch(n){case"wrap":i!==e&&t({type:"SELECT_CARD_FROM_ITEM",id:e});break;case"top":!b.top&&t({type:"TOP_CARD_FROM_ITEM"});break;case"bottom":!b.bottom&&t({type:"BOTTOM_CARD_FROM_ITEM"});break;case"moveUp":!b.moveUp&&t({type:"MOVEUP_CARD_FROM_ITEM"});break;case"moveDown":!b.moveDown&&t({type:"MOVEDOWN_CARD_FROM_ITEM"});break;case"copy":!b.copy&&t({type:"COPY_CARD_FROM_ITEM"});break;case"delete":!b.delete&&t({type:"DELETE_CARD_FROM_ITEM"})}}),[h,b]);return(0,u.jsxs)("div",{className:"app-card-configuration-form__workspace",children:[(0,u.jsxs)("div",{className:"app-card-configuration-form__workspace--menu",onClick:function(e){return y(h.data.selectFormItemId,e)},children:[(0,u.jsxs)("div",{className:"left",children:[(0,u.jsx)(i.u,{placement:"top",title:"\u64a4\u9500",children:(0,u.jsx)("span",{className:"app-icon is-disabled",children:"\ue61e"})}),(0,u.jsx)(i.u,{placement:"top",title:"\u91cd\u505a",children:(0,u.jsx)("span",{className:"app-icon is-disabled",children:"\ue60f"})}),(0,u.jsx)(i.u,{placement:"top",title:"\u7f6e\u9876",children:(0,u.jsx)("span",{"data-type":"top",className:"app-icon ".concat(b.top?"is-disabled":""),children:"\ue786"})}),(0,u.jsx)(i.u,{placement:"top",title:"\u7f6e\u5e95",children:(0,u.jsx)("span",{"data-type":"bottom",className:"app-icon ".concat(b.bottom?"is-disabled":""),children:"\ue742"})}),(0,u.jsx)(i.u,{placement:"top",title:"\u4e0a\u79fb",children:(0,u.jsx)("span",{"data-type":"moveUp",className:"app-icon ".concat(b.moveUp?"is-disabled":""),children:"\ue7ef"})}),(0,u.jsx)(i.u,{placement:"top",title:"\u4e0b\u79fb",children:(0,u.jsx)("span",{"data-type":"moveDown",className:"app-icon ".concat(b.moveDown?"is-disabled":""),children:"\ue7f1"})}),(0,u.jsx)(i.u,{placement:"top",title:"\u590d\u5236",children:(0,u.jsx)("span",{"data-type":"copy",className:"app-icon ".concat(b.copy?"is-disabled":""),children:"\ue765"})}),(0,u.jsx)(i.u,{placement:"top",title:"\u5220\u9664",children:(0,u.jsx)("span",{"data-type":"delete",className:"app-icon ".concat(b.delete?"is-disabled":""),children:"\ue7c3"})})]}),(0,u.jsxs)("div",{className:"right",children:[(0,u.jsx)(i.u,{placement:"top",title:"\u7f16\u8f91",children:(0,u.jsx)("span",{className:"app-icon ".concat(0===j?"is-selected":""),onClick:function(){return C(0)},children:"\uec88"})}),(0,u.jsx)(i.u,{placement:"top",title:"JSON",children:(0,u.jsx)("span",{className:"app-icon ".concat(1===j?"is-selected":""),onClick:function(){return C(1)},children:"\ue7bd"})}),(0,u.jsx)(i.u,{placement:"top",title:"\u8fd0\u884c",children:(0,u.jsx)("span",{className:"app-icon ".concat(2===j?"is-selected":""),onClick:function(){return C(2)},children:"\ue65d"})})]})]}),(0,u.jsx)("div",{className:"app-card-configuration-form__workspace--body",children:null!==(e=h.data.card)&&void 0!==e&&e.inParams&&0===(null===(a=h.data.card)||void 0===a?void 0:a.inParams.length)?(0,u.jsx)(i.x4,{style:{paddingTop:100},status:"404",title:"\u6682\u65e0\u6570\u636e",subTitle:"\u8bf7\u70b9\u51fb\u5de6\u4fa7\u7684\u7ec4\u4ef6\u6dfb\u52a0\u8868\u5355\u5143\u7d20"}):(0,u.jsxs)(u.Fragment,{children:[0===j?(0,u.jsx)(d.Z,{list:(null===(n=h.data.card)||void 0===n?void 0:n.inParams)||[],selectHandler:y,selectId:h.data.selectFormItemId}):null,1===j?(0,u.jsx)(m,{value:null!==(c=h.data)&&void 0!==c&&c.card&&null!==(s=h.data)&&void 0!==s&&s.card.inParams?null===(p=h.data)||void 0===p?void 0:p.card.inParams:{}}):null,2===j?(0,u.jsx)(d.Z,{list:(null===(f=h.data.card)||void 0===f?void 0:f.inParams)||[]}):null]})})]})}},59599:function(e,a,n){n.r(a);var t=n(72791),r=n(6362),l=n(10133),i=n(80542),o=n(89733),d=n(28101),c=n(80184);a.default=function(){var e=(0,t.useContext)(o.CardConfigurationContext),a=(0,i.k6)(),n=(0,t.useCallback)((function(){var n;e&&(null!==(n=e.data.card)&&void 0!==n&&n.ports.some((function(e){return e.visible}))?d.Z.cardAddOrEdit({id:e.data.card.id||(0,l.M8)()}).then((function(){r.yw.success("\u4fdd\u5b58\u6210\u529f"),a.goBack()})):r.yw.error("\u5fc5\u987b\u9009\u62e9\u4e00\u4e2a\u8fde\u63a5\u70b9"))}),[e,a]);return(0,c.jsxs)("div",{className:"app-card-configuration__header",children:[(0,c.jsxs)("div",{className:"left",children:[(0,c.jsx)(r.u,{placement:"bottom",title:"\u8fd4\u56de",children:(0,c.jsx)("div",{className:"return app-icon",onClick:function(){return a.goBack()},children:"\ue720"})}),(0,c.jsx)("div",{className:"app-icon logo",children:"\ue605"}),(0,c.jsx)("div",{className:"title",children:(0,l.Gr)("id")?"\u7f16\u8f91\u5361\u7247":"\u65b0\u589e\u5361\u7247"})]}),(0,c.jsx)("div",{className:"right",children:(0,c.jsx)(r.zx,{type:"primary",onClick:n,children:"\u4fdd\u5b58"})})]})}},73669:function(e,a,n){n.r(a);var t=n(29439),r=n(72791),l=n(6362),i=n(18892),o=n(89733),d=n(80184);a.default=function(){var e=l.l0.useForm(),a=(0,t.Z)(e,1)[0],n=(0,r.useContext)(o.CardConfigurationContext),c=(0,r.useState)(!1),s=(0,t.Z)(c,2),u=s[0],m=s[1];(0,r.useEffect)((function(){if(n.data.card){var e=n.data.card,t=e.title,r=e.width,l=e.ports;a.setFieldsValue({title:t,width:r,ports:l.filter((function(e){return e.visible})).map((function(e){return e.group}))})}}),[n.data.card,a]);var p=(0,r.useCallback)((function(e,a){switch(a){case"title":n.dispatch({type:"MODIFY_CARD_TITLE",title:e});break;case"ports":n.dispatch({type:"MODIFY_CARD_PORTS",data:e})}}),[n]);return(0,d.jsxs)("div",{className:"app-card-configuration__aside",children:[(0,d.jsx)("div",{className:"header",children:"\u5361\u7247\u914d\u7f6e"}),(0,d.jsx)("div",{className:"body",children:(0,d.jsxs)(l.l0,{form:a,name:"basic",labelAlign:"left",colon:!1,labelCol:{span:9},wrapperCol:{span:15},requiredMark:!1,autoComplete:"off",children:[(0,d.jsx)(l.l0.Item,{label:"\u5361\u7247\u540d\u79f0",name:"title",children:(0,d.jsx)(l.II,{onBlur:function(e){return p(e.target.value,"title")}})}),(0,d.jsx)(l.l0.Item,{label:"\u5361\u7247\u5bbd\u5ea6",name:"width",children:(0,d.jsx)(l.II,{disabled:!0})}),(0,d.jsx)(l.l0.Item,{name:"ports",label:"\u8fde\u63a5\u70b9",children:(0,d.jsxs)(l.XZ.Group,{onChange:function(e){return p(e,"ports")},children:[(0,d.jsx)(l.XZ,{value:"left",style:{lineHeight:"32px"},children:"\u5de6\u8fde\u63a5\u70b9"}),(0,d.jsx)(l.XZ,{value:"right",style:{lineHeight:"32px"},children:"\u53f3\u8fde\u63a5\u70b9"})]})}),(0,d.jsx)(l.l0.Item,{name:"inParams",label:"\u5165\u53c2\u914d\u7f6e",children:(0,d.jsx)(l.zx,{type:"primary",style:{width:"100%"},onClick:function(){return m(!0)},children:"\u914d\u7f6e"})})]})}),(0,d.jsx)(l.dy,{title:"\u53c2\u6570\u914d\u7f6e",width:"70%",open:u,maskClosable:!1,closable:!1,bodyStyle:{padding:0},headerStyle:{borderBottom:"1px solid #ddd",padding:"10px"},extra:(0,d.jsx)(l.T,{children:(0,d.jsx)(l.zx,{type:"primary",onClick:function(){return m(!1)},children:"\u5173\u95ed"})}),children:(0,d.jsx)(i.default,{})})]})}},89733:function(e,a,n){n.r(a),n.d(a,{CardConfigurationContext:function(){return f}});var t=n(1413),r=n(29439),l=n(72791),i=n(89982),o=(n(39032),n(30256)),d=n(10133),c=n(59599),s=n(73669),u=n(28101),m=n(48893),p=n(80184),f=l.createContext({data:m.initialState,dispatch:function(){}}),h={x:0,y:0,width:window.innerWidth-300,height:window.innerHeight-62};a.default=function(){var e=(0,l.useReducer)(m.counter,m.initialState),a=(0,r.Z)(e,2),n=a[0],x=a[1];return(0,l.useEffect)((function(){(0,d.Gr)("id")?u.Z.cardDetails().then((function(e){return x({type:"CARD",data:e})})):x({type:"CARD",data:{id:(0,d.M8)(),width:200,height:80,title:"\u672a\u547d\u540d\u5361\u7247",x:10,y:10,ports:[{id:(0,d.M8)(),group:"left",visible:!0},{id:(0,d.M8)(),group:"right",visible:!0}],inParams:[]}})}),[]),(0,p.jsx)(f.Provider,{value:{dispatch:x,data:n},children:(0,p.jsxs)("div",{className:"app-card-configuration",children:[(0,p.jsx)(c.default,{}),(0,p.jsxs)("div",{className:"app-card-configuration__body",children:[(0,p.jsx)("div",{className:"app-card-configuration__container",id:"js_stage",children:(0,p.jsx)(i.Stage,(0,t.Z)((0,t.Z)({},h),{},{draggable:!0,children:(0,p.jsx)(i.Layer,{children:n.card?(0,p.jsx)(o.Z,{config:n.card}):null})}))}),(0,p.jsx)(s.default,{})]}),(0,p.jsx)("div",{className:"app-card-configuration__footer"})]})})}},48893:function(e,a,n){n.r(a),n.d(a,{counter:function(){return s},initialState:function(){return c}});var t=n(93433),r=n(1413),l=n(10133),i=n(39233),o=n(29428),d=function(e){var a=i.Qf;return e.ports.some((function(e){return e.visible}))&&(a+=i.cu+i.eE),e.inParams.forEach((function(){a+=i.cu})),a+=i.eE},c={card:null,selectFormItemId:""},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,a=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(a.type){case o.CARD:return{card:(0,r.Z)((0,r.Z)({},a.data),{},{height:d(a.data)}),selectFormItemId:""};case o.MODIFY_CARD_TITLE:return n.card.title=a.title,n;case o.MODIFY_CARD_PORTS:return n.card.ports=n.card.ports.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{visible:a.data.includes(e.group)})})),n.card.height=d(n.card),n;case o.ADD_CARD_FROM_ITEM:var i=(0,l.M8)();return n.card.inParams=[].concat((0,t.Z)(n.card.inParams),[(0,r.Z)((0,r.Z)({},a.data),{},{id:i})]),n.card.height=d(n.card),n.selectFormItemId=i,n;case o.MODIFY_CARD_FROM_ITEM:if(n.selectFormItemId){var s=n.card.inParams.findIndex((function(e){return e.id===n.selectFormItemId}));-1!==s&&n.card.inParams.splice(s,1,(0,r.Z)((0,r.Z)({},n.card.inParams[s]),a.data))}return n;case o.SELECT_CARD_FROM_ITEM:return n.selectFormItemId=a.id,n;case o.DELETE_CARD_FROM_ITEM:if(n.selectFormItemId){var u=n.card.inParams.findIndex((function(e){return e.id===n.selectFormItemId}));-1!==u&&(n.card.inParams.splice(u,1),n.card.inParams.length?n.selectFormItemId=n.card.inParams[0].id:n.selectFormItemId="",n.card.height=d(n.card))}return n;case o.COPY_CARD_FROM_ITEM:if(n.selectFormItemId){var m=n.card.inParams.findIndex((function(e){return e.id===n.selectFormItemId}));if(-1!==m){var p=(0,l.M8)();n.card.inParams.push((0,r.Z)((0,r.Z)({},n.card.inParams[m]),{},{id:p})),n.selectFormItemId=p,n.card.height=d(n.card)}}return n;case o.TOP_CARD_FROM_ITEM:if(n.selectFormItemId){var f=n.card.inParams.findIndex((function(e){return e.id===n.selectFormItemId}));if(-1!==f){var h=n.card.inParams.splice(f,1);n.card.inParams.unshift(h[0])}}return n;case o.BOTTOM_CARD_FROM_ITEM:if(n.selectFormItemId){var x=n.card.inParams.findIndex((function(e){return e.id===n.selectFormItemId}));if(-1!==x){var v=n.card.inParams.splice(x,1);n.card.inParams.push(v[0])}}return n;case o.MOVEUP_CARD_FROM_ITEM:if(n.selectFormItemId){var b=n.card.inParams.findIndex((function(e){return e.id===n.selectFormItemId}));if(b>0){var I,_=n.card.inParams.splice(b,1);(I=n.card.inParams).splice.apply(I,[b-1,0].concat((0,t.Z)(_)))}}return n;case o.MOVEDOWN_CARD_FROM_ITEM:if(n.selectFormItemId){var g=n.card.inParams.findIndex((function(e){return e.id===n.selectFormItemId}));if(-1!==g&&g<n.card.inParams.length-1){var j,C=n.card.inParams.splice(g,1);(j=n.card.inParams).splice.apply(j,[g+1,0].concat((0,t.Z)(C)))}}return n;default:return e}}},29428:function(e,a,n){n.r(a),n.d(a,{ADD_CARD_FROM_ITEM:function(){return i},BOTTOM_CARD_FROM_ITEM:function(){return m},CARD:function(){return t},COPY_CARD_FROM_ITEM:function(){return s},DELETE_CARD_FROM_ITEM:function(){return c},MODIFY_CARD_FROM_ITEM:function(){return o},MODIFY_CARD_PORTS:function(){return l},MODIFY_CARD_TITLE:function(){return r},MOVEDOWN_CARD_FROM_ITEM:function(){return f},MOVEUP_CARD_FROM_ITEM:function(){return p},SELECT_CARD_FROM_ITEM:function(){return d},TOP_CARD_FROM_ITEM:function(){return u}});var t="CARD",r="MODIFY_CARD_TITLE",l="MODIFY_CARD_PORTS",i="ADD_CARD_FROM_ITEM",o="MODIFY_CARD_FROM_ITEM",d="SELECT_CARD_FROM_ITEM",c="DELETE_CARD_FROM_ITEM",s="COPY_CARD_FROM_ITEM",u="TOP_CARD_FROM_ITEM",m="BOTTOM_CARD_FROM_ITEM",p="MOVEUP_CARD_FROM_ITEM",f="MOVEDOWN_CARD_FROM_ITEM"},65601:function(e,a,n){n.r(a),a.default={}},39032:function(e,a,n){n.r(a),a.default={}}}]);