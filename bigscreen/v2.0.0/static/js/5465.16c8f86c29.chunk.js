"use strict";(self.webpackChunklarge_screen_configuration=self.webpackChunklarge_screen_configuration||[]).push([[5465,1316,5461],{95465:function(e,a,l){l.r(a);var t=l(67294),n=l(89250),o=l(93956),i=l(52741),r=l(52269),u=l(240),d=l(83309),s=l(46020),c=l.n(s),g=l(24404),m=l(2639),f=l(48093),V=l(34041),p=l(34002),v=l(79849),y=l(53525),b=l(32008);a.default=()=>{var e,a,l,s,E,h,T,I,S,w,M,B,k;let L=(0,n.TH)();const x=(0,n.s0)(),[C,R]=(0,t.useReducer)(r.widgetReducer,r.initialState),[F,Y]=(0,t.useState)(!1),[D,N]=(0,t.useState)(!0),{widgetsList:W,getWidgets:P}=(0,b.DA)();(0,t.useEffect)((()=>{const e=new URLSearchParams(L.search);if(e.size)if(W.length){const a=e.get("widgetId"),l=W.findIndex((e=>e.id===a));l>=0&&R({type:"WIDGET",data:W[l]})}else P();else R({type:"WIDGET",data:{name:"未命名微件",url:"",id:"",createTime:"",type:"text",count:0,x:0,y:0,column:1,row:1,widgetId:(0,u.M8)(),configuration:{configureValue:i.X3.configureValue,dataValue:i.X3.dataValue},elements:[]}})}),[P,L.search,W]);const j=(0,t.useCallback)((e=>{R({type:"MODIFY_ELEMENT",data:{x:e.x,y:e.y,elementId:e.i}})}),[]),O=(0,t.useCallback)((e=>{R({type:"MODIFY_ELEMENT",data:{row:e.w,column:e.h,elementId:e.i}})}),[]),A=(0,t.useCallback)(((e,a,l)=>{R({type:"ADD_ELEMENT",data:{...a,x:e.x,y:e.y,position:l,elementId:(0,u.M8)()}})}),[]),_=(0,t.useMemo)((()=>{let e=[];return e=null!=C&&C.widgetId?null!=C&&C.elementId?["layer","element","widget","data"]:["layer","widget","data"]:["layer","widget"],e}),[null==C?void 0:C.elementId,null==C?void 0:C.widgetId]),Z=(0,t.useCallback)(((e,a)=>{"element"===e&&a&&(null==C?void 0:C.elementId)!==a&&R({type:"SELECT_ELEMENT",id:a})}),[null==C?void 0:C.elementId]),U=(0,t.useMemo)((()=>{let e=[];for(let a in d.JN)e.push({label:d.JN[a],value:a});return e}),[]),z=(0,t.useMemo)((()=>null==C?void 0:C.widget),[null==C?void 0:C.widget]),J=(0,t.useMemo)((()=>null==z?void 0:z.elements.find((e=>e.elementId===(null==C?void 0:C.elementId)))),[null==C?void 0:C.elementId,z]),G=(0,t.useCallback)((e=>{R({type:"DELETE_ELEMENT",id:e.elementId})}),[]),H=(0,t.useCallback)(((e,a,l)=>{"element"===e&&R({type:"DELETE_ELEMENT",id:a})}),[]),X=(0,t.useCallback)(((e,a,l,t)=>{"element"===e&&R({type:"MODIFY_ELEMENT",data:{name:l,elementId:a}})}),[]),$=(0,t.useMemo)((()=>{var e,a;const l=null==z||null===(e=z.configuration)||void 0===e||null===(a=e.dataValue)||void 0===a?void 0:a.params;let t=[];try{for(let e in l)t.push(e)}catch(e){}return t}),[null==z||null===(e=z.configuration)||void 0===e||null===(a=e.dataValue)||void 0===a?void 0:a.params]);return t.createElement("div",{className:"cms-config-layout"},t.createElement(o.G6,{logo:"",name:null==C?void 0:C.widget.name,pageType:"widget",modifyNameSuccessHander:e=>{R({type:"MODIFY_WIDGET",data:{name:e}})},previewHandler:()=>Y(!0),publishHandler:()=>{N(!1),setTimeout((()=>{c()(document.getElementById("js_widget"),{allowTaint:!0,scale:.5,backgroundColor:"rgb(9, 5, 72)"}).then((e=>{try{R({type:"MODIFY_WIDGET",data:{url:null==e?void 0:e.toDataURL()}})}catch(e){g.ZP.error("存在跨域资源，缩略图获取失败")}}))}),10)}}),t.createElement("div",{className:"cms-config-layout__content"},t.createElement(o.Gd,{navs:["element"],render:e=>"element"===e?t.createElement(o.My,null):null}),t.createElement(o.JE,{style:{position:"relative",width:`${(null==z||null===(l=z.configuration)||void 0===l||null===(s=l.configureValue)||void 0===s?void 0:s.widgetConfigWidth)||600}px`,height:`${(null==z||null===(E=z.configuration)||void 0===E||null===(h=E.configureValue)||void 0===h?void 0:h.widgetConfigHeight)||400}px`},id:"js_widget"},t.createElement(v.Z,{data:z,configureValue:null==z||null===(T=z.configuration)||void 0===T?void 0:T.configureValue,onDrop:A,onDragStop:j,onResizeStop:O,isDroppable:D,isResizable:D,staticed:!D,onClose:G,selectedId:null==C?void 0:C.elementId,onChangeParams:e=>{}})),t.createElement(o.yO,{navs:_,render:e=>{return"layer"===e?t.createElement(o.TC,{datas:null!=C&&C.widget?[null==C?void 0:C.widget]:[],widgetId:null==C?void 0:C.widgetId,elementId:null==C?void 0:C.elementId,onSelected:Z,pageType:"element",onDeleteHandler:H,onEditHandler:X}):"widget"===e?t.createElement(o.hp,{configureValue:(null==C||null===(a=C.widget)||void 0===a||null===(l=a.configuration)||void 0===l?void 0:l.configureValue)||{},onFinish:e=>{var a;const l=JSON.parse(JSON.stringify(null==C||null===(a=C.widget)||void 0===a?void 0:a.configuration));R({type:"MODIFY_WIDGET",data:{configuration:{...l,configureValue:{...l.configureValue,...e}}}})}}):"element"===e?t.createElement(o.Kp,{element:null==J?void 0:J.element,configureValue:(null==J?void 0:J.configuration.configureValue)||{},onFinish:e=>{var a;const l=JSON.parse(JSON.stringify(null==C||null===(a=C.widget)||void 0===a?void 0:a.elements.find((e=>e.elementId===C.elementId))));l&&R({type:"MODIFY_ELEMENT",data:{...l,configuration:{...l.configuration,configureValue:{...l.configuration.configureValue,...e}}}})}}):"data"===e?t.createElement(o.$X,{isShowWidgetDataConfig:!0,paramFields:"form"===(null==J?void 0:J.type)?$:[],widgetDataValue:null==C||null===(n=C.widget)||void 0===n||null===(i=n.configuration)||void 0===i?void 0:i.dataValue,widgetOnFinish:e=>{var a;const l=null==C?void 0:C.widget;R({type:"MODIFY_WIDGET",data:{...l,configuration:{...null==l?void 0:l.configuration,dataValue:{...null==l||null===(a=l.configuration)||void 0===a?void 0:a.dataValue,...e}}}})},elementDataValue:null==J?void 0:J.configuration.dataValue,elementOnFinish:e=>{var a;const l=JSON.parse(JSON.stringify(null==C||null===(a=C.widget)||void 0===a?void 0:a.elements.find((e=>e.elementId===C.elementId))));l&&R({type:"MODIFY_ELEMENT",data:{...l,configuration:{...l.configuration,dataValue:{...l.configuration.dataValue,...e}}}})}}):null;var a,l,n,i}})),t.createElement(y.Z,{open:F,data:z,pageType:"widget",onClose:()=>Y(!1),title:"微件预览",width:(null==z||null===(I=z.configuration)||void 0===I||null===(S=I.configureValue)||void 0===S?void 0:S.pageConfigWidth)||600,height:(null==z||null===(w=z.configuration)||void 0===w||null===(M=w.configureValue)||void 0===M?void 0:M.pageConfigHeight)||400}),t.createElement(m.Z,{open:!D,title:"发布微件",footer:null,width:400,maskClosable:!1,onCancel:()=>N(!0)},t.createElement(f.Z,{autoComplete:"off",initialValues:null==C?void 0:C.widget,labelCol:{flex:"60px"},onFinish:e=>{g.ZP.success("发布成功"),R({type:"SELECT_ELEMENT",id:""}),x(-1)}},t.createElement(f.Z.Item,{name:"name",label:"微件名称"},t.createElement(f.Z.Item,{noStyle:!0},null==C||null===(B=C.widget)||void 0===B?void 0:B.name)),t.createElement(f.Z.Item,{name:"url",label:"缩略图"},t.createElement(f.Z.Item,{noStyle:!0},t.createElement("img",{src:null==C||null===(k=C.widget)||void 0===k?void 0:k.url,alt:"缩略图",style:{borderRadius:"5px",width:"100%"}}))),t.createElement(f.Z.Item,{name:"type",label:"类型",rules:[{required:!0,message:"请选择类型"}]},t.createElement(V.default,{showSearch:!0,placeholder:"请选择类型",options:U})),t.createElement(f.Z.Item,null,t.createElement(p.ZP,{type:"primary",htmlType:"submit",block:!0},"发布")))))}},52269:function(e,a,l){l.r(a),l.d(a,{initialState:function(){return D},widgetReducer:function(){return N}});var t=l(15461),n=l(52741);const o={code:"baseText",configureValue:{iconStyleFontSize:12,...n.c2.configureValue,...n.r.configureValue},dataValue:n.R.configureValue},i={code:"iconText",configureValue:{iconStyleFontSize:12,iconStyleSelect:"&#xe62e",...n.c2.configureValue,...n.r.configureValue},dataValue:n.R.configureValue},r={code:"countUp",configureValue:{styleJustifyContent:"center",styleAlignItems:"center",countUpStyleFontSize:20,countUpStyleColor:"#fff",countUpStyleFontFamily:"Microsoft YaHei",countUpStyleFontWeight:"bolder",addonBeforeStyleFontSize:12,addonBeforeStyleColor:"#fff",addonAfterStyleFontSize:12,addonAfterStyleColor:"#fff",styleLineHeight:40},dataValue:{...n.R.configureValue,mock:{value:1000.12}}},u={code:"messageText",configureValue:{iconStyleFontSize:14,iconStyleColor:"rgba(255,255,255,.5)",...n.c2.configureValue,styleBackgroundColor:"rgba(255,255,255,.1)",styleFontSize:14,styleLineHeight:36,styleFontFamily:"Microsoft YaHei",styleFontWeight:"normal",stylePaddingLeft:5,stylePaddingRight:5,styleBorderTopRightRadius:5,styleBorderTopLeftRadius:5,styleBorderBottomRightRadius:5,styleBorderBottomLeftRadius:5},dataValue:{...n.R.configureValue,mock:{value:"我是滚动文本"}}},d={code:"dateText",configureValue:{fmtDate:"yyyy-MM-dd hh:mm:ss",iconStyleFontSize:12,...n.r.configureValue}};var s={type:"line",configureValue:{...n.hV.configureValue,...n.YM.titleValue,...n.YM.legendValue,...n.YM.gridValue,...n.YM.xAxisValue,...n.YM.yAxisValue,...n.YM.echartColorValue,...n.YM.lineValue,...n.YM.seriesLabelValue,...n.YM.seriesStackValue,...n.YM.symbolValue},dataValue:{...n.R.configureValue,field:"series",mock:{series:[{seriesName:"Email",data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]}]}}};const c={code:"baseLine",...s},g={code:"baseSmoothLine",...s,configureValue:{...s.configureValue,lineSmooth:!0}},m={code:"baseAreaLine",...s,configureValue:{...s.configureValue,lineAreaStyle:!0}},f={code:"stackedLine",...s,configureValue:{...s.configureValue,seriesStackValue:"total"},dataValue:{...s.dataValue,field:"series",mock:{series:[{seriesName:"Email",data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]},{seriesName:"Union Ads",data:[{name:"Mon",value:220},{name:"Tue",value:182},{name:"Wed",value:191},{name:"Thu",value:234},{name:"Fri",value:290},{name:"Sat",value:330},{name:"Sun",value:310}]}]}}},V={code:"stackedAreaLine",...s,configureValue:{...s.configureValue,seriesStackValue:"total",lineAreaStyle:!0},dataValue:{...s.dataValue,field:"series",mock:{series:[{seriesName:"Email",data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]},{seriesName:"Union Ads",data:[{name:"Mon",value:220},{name:"Tue",value:182},{name:"Wed",value:191},{name:"Thu",value:234},{name:"Fri",value:290},{name:"Sat",value:330},{name:"Sun",value:310}]}]}}},p={code:"lengthwaysLine",...s,configureValue:{...s.configureValue,xAxisType:"value",yAxisType:"category"}};var v={type:"bar",configureValue:{...n.hV.configureValue,...n.YM.titleValue,...n.YM.legendValue,...n.YM.gridValue,...n.YM.xAxisValue,...n.YM.yAxisValue,...n.YM.echartColorValue,...n.YM.barValue,...n.YM.seriesLabelValue,...n.YM.seriesStackValue,xAxisBoundaryGap:!0,yAxisBoundaryGap:!0},coordinateValue:{left:0,top:0,width:467,height:346},dataValue:{...n.R.configureValue,field:"series",mock:{series:[{seriesName:"Email",data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]}]}}};const y={code:"baseBar",...v},b={code:"axisAlignWithTickBar",...v,configureValue:{...v.configureValue,xAxisAlignWithLabel:!0,xAxisBoundaryGap:!1}},E={code:"backgroundColorBar",...v,configureValue:{...v.configureValue,barShowBackground:!0}},h={code:"radiusBar",...v,configureValue:{...v.configureValue,barWidth:20,barBorderRadius:20}},T={code:"stackBar",...v,configureValue:{...v.configureValue,seriesStackValue:"total",seriesLabelShow:!0,seriesLabelPosition:"inside",seriesLabelColor:"#fff"},dataValue:{...v.dataValue,mock:{series:[{seriesName:"Email",data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]},{seriesName:"Direct",data:[{name:"Mon",value:220},{name:"Tue",value:182},{name:"Wed",value:191},{name:"Thu",value:234},{name:"Fri",value:290},{name:"Sat",value:330},{name:"Sun",value:310}]}]}}},I={code:"lengthwaysBar",...v,configureValue:{...v.configureValue,barWidth:15,barBorderRadius:20,xAxisType:"value",yAxisType:"category"}},S={code:"gradationBar",...v,configureValue:{...v.configureValue,barGradation:!0,barBorderRadius:4}};var w={type:"pie",configureValue:{...n.hV.configureValue,...n.YM.titleValue,...n.YM.legendValue,...n.YM.echartColorValue,...n.YM.pieValue,...n.YM.seriesItemStyleValue,...n.YM.emphasisValue,xAxisShow:!1,yAxisShow:!1,seriesLabelShow:!0,seriesLabelPosition:"outside",seriesLabelColor:"",xAxisType:"category",yAxisType:"value"},dataValue:{...n.R.configureValue,field:"series",mock:{series:[{seriesName:"Email",data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]}]}}};const M={code:"basePie",...w,configureValue:{...w.configureValue},dataValue:w.dataValue},B={code:"rosetypePie",...w,configureValue:{...w.configureValue,seriesInsideRadius:40,seriesAutsideRadius:80,...n.YM.seriesItemStyleValue,...n.YM.emphasisValue,seriesRoseType:!0},dataValue:w.dataValue},k={code:"doughnutPie",...w,configureValue:{...w.configureValue,seriesInsideRadius:40,seriesAutsideRadius:80,...n.YM.seriesItemStyleValue,...n.YM.emphasisValue,seriesLabelPosition:"center",seriesLabelShow:!1,emphasisLabelFontSize:40,emphasisLabelFontWeight:"bold"},dataValue:w.dataValue},L={code:"doughnuRoundedCornerPie",...w,configureValue:{...w.configureValue,seriesInsideRadius:40,seriesAutsideRadius:80,...n.YM.seriesItemStyleValue,...n.YM.emphasisValue,seriesLabelPosition:"center",seriesLabelShow:!1,emphasisLabelFontSize:40,emphasisLabelFontWeight:"bold",seriesItemStyleBorderColor:"",seriesItemStyleColorBorderWidth:2,seriesItemStyleColorBorderRadius:10},dataValue:w.dataValue},x={code:"legentTotalPie",...w,configureValue:{...w.configureValue,seriesInsideRadius:40,seriesAutsideRadius:60,...n.YM.seriesItemStyleValue,...n.YM.emphasisValue,seriesLabelPosition:"center",seriesLabelShow:!1,emphasisLabelFontSize:40,emphasisLabelFontWeight:"bold",seriesItemStyleBorderColor:"",seriesItemStyleColorBorderWidth:0,seriesItemStyleColorBorderRadius:0,seriesHorizontalPosition:30,seriesVerticalPosition:50,legendLeft:void 0,legendTop:"center",legendOrient:"vertical",legendRight:15,legendTotal:!0,legendIcon:"circle"},dataValue:w.dataValue},C={code:"baseImage",configureValue:{...n.c2.configureValue},dataValue:{...n.R.configureValue,mock:{value:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}}},R={code:"baseBanner",configureValue:{...n.O$.configureValue,...n.c2.configureValue},dataValue:{...n.R.configureValue,field:"list",mock:{list:[{name:"01",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{name:"02",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{name:"03",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{name:"04",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{name:"05",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{name:"06",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{name:"07",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{name:"08",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{name:"09",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]}}},F={type:"table",configureValue:{...n.O$.configureValue,tableHeaderBackgroudColor:"#4a8cff",tableHeaderColor:"#fff",tableShowBorderColor:"rgba(230,30,30,1)",tableShowHeader:!0,tableTbodyColor:"#fff",slidesPerView:9,tableColumn:[{title:"序号",dataIndex:"index",align:"left",width:30},{title:"公司名称",dataIndex:"name",align:"left"},{title:"用电量",dataIndex:"data",align:"left",width:100}]},dataValue:{...n.R.configureValue,field:"table",mock:{table:[{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"},{name:"朔州市工业自动化股份有限公司",data:"902,381",progressBar:"50%"}]}}};var Y={baseText:o,iconText:i,messageText:u,baseLine:c,baseSmoothLine:g,baseAreaLine:m,stackedLine:f,stackedAreaLine:V,lengthwaysLine:p,baseBar:y,axisAlignWithTickBar:b,backgroundColorBar:E,radiusBar:h,stackBar:T,lengthwaysBar:I,countUp:r,basePie:M,rosetypePie:B,doughnutPie:k,doughnuRoundedCornerPie:L,legentTotalPie:x,gradationBar:S,baseImage:C,baseBanner:R,dateText:d,baseTable:{code:"baseTable",...F},interlacingTable:{code:"interlacingTable",...F,configureValue:{...F.configureValue,tableTbodyOddBackgroundColor:"rgba(74, 140, 255, 0.18)"}},borderTable:{code:"borderTable",...F,configureValue:{...F.configureValue,tableTbodyOddBorderStyle:"solid",tableTbodyOddBorderWidth:1,tableTbodyOddBorderColor:"rgba(0, 178, 255, 0.24)",tableTbodyOddBoxInset:!0,tableTbodyOddBoxShadowX:0,tableTbodyOddBoxShadowY:0,tableTbodyOddBoxShadowF:23,tableTbodyOddBoxShadowC:"rgba(0, 178, 255, 0.24)",spaceBetween:5,tableTbodyEvenBorderStyle:"solid",tableTbodyEvenBorderWidth:1,tableTbodyEvenBorderColor:"rgba(0, 178, 255, 0.24)",tableTbodyEvenBoxInset:!0,tableTbodyEvenBoxShadowX:0,tableTbodyEvenBoxShadowY:0,tableTbodyEvenBoxShadowF:23,tableTbodyEvenBoxShadowC:"rgba(0, 178, 255, 0.24)"}},rankingTable:{code:"rankingTable",...F,configureValue:{...F.configureValue,serialNumberRank:!0,tableTbodyOddBackgroundColor:"rgba(74, 140, 255, 0.18)",serialNumberBackgroundColor:"rgb(74, 140, 255)",serialNumberFontSize:12}},progressTable:{code:"progressTable",...F,configureValue:{...F.configureValue,serialNumberRank:!0,tableTbodyOddBackgroundColor:"",serialNumberBackgroundColor:"rgb(74, 140, 255)",serialNumberFontSize:12,progressForegroundColor:"#4abbff",progressBackgroundColor:"rgba(74, 187, 255, 0.1)",tableShowHeader:!1,tableColumn:[{title:"序号",dataIndex:"index",align:"left",width:30},{title:"地区",dataIndex:"name",align:"left",width:60},{title:"占比",dataIndex:"progressBar",align:"left",components:"progress"},{title:"用电量",dataIndex:"data",align:"right",width:80}]},dataValue:{...n.R.configureValue,field:"table",mock:{table:[{name:"右玉县",data:"902,381",progressBar:"50%"},{name:"逆城区",data:"902,381",progressBar:"50%"},{name:"平鲁工",data:"902,381",progressBar:"50%"},{name:"怀仁市",data:"902,381",progressBar:"50%"},{name:"山阴县",data:"902,381",progressBar:"50%"},{name:"应县",data:"902,381",progressBar:"50%"},{name:"武侯区",data:"902,381",progressBar:"50%"},{name:"高新区",data:"902,381",progressBar:"50%"},{name:"双流区",data:"902,381",progressBar:"50%"},{name:"青羊区",data:"902,381",progressBar:"50%"}]}}},formRadio:{code:"formRadio",configureValue:{radioSize:"small",radioOptionType:"default",radioTextAlign:"flex-end"},dataValue:{useInterface:!1,mock:{formRadio:[{value:"year",label:"年度"},{value:"quarter",label:"季度"},{value:"monthly",label:"月度"}]},field:"formRadio"}}};const D={widget:{name:"未命名微件",url:"",id:"",createTime:"",type:"text",count:0,x:0,y:0,column:1,row:1,configuration:{},elements:[],widgetId:""},elementId:void 0,widgetId:void 0},N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;const l=JSON.parse(JSON.stringify(e));switch(a.type){case t.WIDGET:var o,i,r,u;return l.widget={...a.data,configuration:{configureValue:(null===(o=a.data)||void 0===o||null===(i=o.configuration)||void 0===i?void 0:i.configureValue)||n.X3.configureValue,dataValue:(null===(r=a.data)||void 0===r||null===(u=r.configuration)||void 0===u?void 0:u.dataValue)||n.X3.dataValue}},l.widgetId=a.data.widgetId,l;case t.MODIFY_WIDGET:return l.widget={...l.widget,...a.data},l;case t.ADD_ELEMENT:return Y[a.data.code]&&(l.widget.elements.push({...a.data,configuration:{configureValue:Y[a.data.code].configureValue,dataValue:Y[a.data.code].dataValue}}),l.elementId=a.data.elementId),l;case t.DELETE_ELEMENT:return l.widget.elements=l.widget.elements.filter((e=>e.elementId!==a.id)),a.id===l.elementId&&(l.elementId=""),l;case t.MODIFY_ELEMENT:{const e=l.widget.elements.findIndex((e=>e.elementId===a.data.elementId));return-1!==e&&(l.widget.elements[e]={...l.widget.elements[e],...a.data},l.elementId=a.data.elementId),l}case t.SELECT_ELEMENT:return l.elementId=a.id,l}}},15461:function(e,a,l){l.r(a),l.d(a,{ADD_ELEMENT:function(){return o},DELETE_ELEMENT:function(){return i},MODIFY_ELEMENT:function(){return u},MODIFY_WIDGET:function(){return n},SELECT_ELEMENT:function(){return r},WIDGET:function(){return t}});const t="WIDGET",n="MODIFY_WIDGET",o="ADD_ELEMENT",i="DELETE_ELEMENT",r="SELECT_ELEMENT",u="MODIFY_ELEMENT"}}]);
//# sourceMappingURL=5465.16c8f86c29.chunk.js.map