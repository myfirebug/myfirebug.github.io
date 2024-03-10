"use strict";(self.webpackChunkcli=self.webpackChunkcli||[]).push([[9836,1195,3873],{3181:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7462),l=a(7294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},r=a(76),c=function(e,t){return l.createElement(r.Z,(0,n.Z)({},e,{ref:t,icon:s}))};var i=l.forwardRef(c)},3319:function(e,t,a){var n=a(7294),l=a(5746),s=a(9293);const r=n.memo((e=>{const{datas:t,loading:a,cardNum:r=4}=e;return n.createElement(n.Fragment,null,a?Array(r).fill(0).map(((e,t)=>n.createElement(l.Z,{span:24/r,key:t},n.createElement("div",{className:"cms-components__card"},n.createElement(s.Z,{active:!0,title:!1}))))):"",t.map(((e,t)=>n.createElement(l.Z,{span:24/r,key:t},n.createElement("div",{className:"cms-components__card"},n.createElement("div",{className:"name"},e.name),n.createElement("div",{className:"total"},n.createElement("b",null,e.total),e.unit),n.createElement("div",{className:"bg-font"},e.bgFont))))))}),((e,t)=>JSON.stringify(e)===JSON.stringify(t)));t.Z=r},3060:function(e,t,a){var n=a(7294),l=a(9293),s=a(3447);const r=(0,n.memo)((e=>{const{datas:t,loading:a}=e,[r,c]=(0,n.useState)([]),[i,m]=(0,n.useState)([]);return(0,n.useEffect)((()=>{let e=[],a=[];for(let n=0;n<t.length;n++)e.push(t[n].name),a.push(t[n].value);c(e),m(a)}),[t]),n.createElement(s.xu,{title:"新增走势"},a?n.createElement(l.Z,{active:!0}):n.createElement(s.tS,{loading:a,option:{color:["#1677ff"],backgroundColor:"rgba(0,0,0,0)",tooltip:{},xAxis:{data:r,boundaryGap:!1},grid:{left:30,top:20,bottom:30,right:0},yAxis:{},series:[{name:"新增组件",type:"line",data:i,smooth:!0,areaStyle:{}}]}}))}),((e,t)=>JSON.stringify(e)===JSON.stringify(t)));t.Z=r},7824:function(e,t,a){var n=a(7294),l=a(9293),s=a(3447);const r=(0,n.memo)((e=>{const{datas:t,loading:a}=e,[r,c]=(0,n.useState)([]),[i,m]=(0,n.useState)([]);return(0,n.useEffect)((()=>{let e=[],a=[];for(let n=0;n<t.length;n++)e.push(t[n].name),a.push(t[n].value);c(e),m(a)}),[t]),n.createElement(s.xu,{title:"使用排行榜TOP8"},a?n.createElement(l.Z,{active:!0}):n.createElement(s.tS,{loading:a,option:{color:["#1677ff"],backgroundColor:"rgba(0,0,0,0)",tooltip:{},xAxis:{type:"value"},yAxis:{data:r,type:"category"},grid:{left:50,top:20,bottom:30,right:20},series:[{name:"使用排行榜TOP8",type:"bar",data:i,itemStyle:{borderRadius:[10,10,10,10]}}]}}))}),((e,t)=>JSON.stringify(e)===JSON.stringify(t)));t.Z=r},1195:function(e,t,a){a.r(t);var n=a(7294);t.default=({select:e,datas:t,label:a,listSearchHandler:l,index:s})=>n.createElement("div",{className:"cms-selector__selectorLine"},n.createElement("div",{className:"cms-selector__selectorLine--name"},a),n.createElement("div",{className:"cms-selector__selectorLine--value"},t.map((t=>n.createElement("span",{className:t.id===e?"is-active":"",key:t.id,onClick:()=>l("type",t.id,s)},t.name)))))},510:function(e,t,a){a.r(t);var n=a(7294),l=a(9293),s=a(8065);t.default=({children:e,datas:t,loading:a})=>{const[r,c]=(0,n.useState)((()=>Math.floor(window.innerWidth/280))),i=(0,n.useCallback)((()=>{const e=window.innerWidth;c(Math.floor(e/280))}),[]);return(0,n.useEffect)((()=>(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)})),[i]),n.createElement("div",{className:"cms-components__list"},e&&n.createElement("div",{className:"cms-selector"},e),n.createElement("div",{className:"cms-components__list--body"},a?n.createElement(l.Z,{active:!0}):t.length?t.map(((e,t)=>n.createElement("div",{key:t,className:"cms-components__item",style:{width:`calc(100% / ${r} - 20px)`}},n.createElement("div",{className:"picture"},n.createElement("img",{src:e.images,alt:""})),n.createElement("div",{className:"name"},e.name),n.createElement("div",{className:"type"},"类型：",e.level2Type||e.level1Type),n.createElement("div",{className:"type"},"使用次数：",e.count,"次"),n.createElement("div",{className:"createtime"},"创建时间：",e.createTime)))):n.createElement(s.Z,{image:s.Z.PRESENTED_IMAGE_SIMPLE})))}},3529:function(e,t,a){a.r(t);var n=a(7294),l=a(1230),s=a(5746),r=a(1496),c=a(3319),i=a(3060),m=a(7824),o=a(510),d=a(1195);t.default=()=>{const{total:e,getTotal:t,getTrend:a,trend:u,leaderboard:p,getLeaderboard:E,types:f,getTypes:g,list:v,getList:y,listSearchHandler:h}=(0,r.jA)();return(0,n.useEffect)((()=>{t(),a(),E(),g(),y()}),[t,a,E,g,y]),console.log(v.searchDatas,"types"),n.createElement("div",{className:"cms-components"},n.createElement(l.Z,{gutter:16},n.createElement(c.Z,{datas:e.datas,loading:e.loading}),n.createElement(s.Z,{span:18},n.createElement(i.Z,{datas:u.datas,loading:u.loading})),n.createElement(s.Z,{span:6},n.createElement(m.Z,{datas:p.datas,loading:p.loading})),n.createElement(s.Z,{span:24},n.createElement(o.default,{loading:v.loading,datas:v.searchDatas},v.params.type.map(((e,t)=>{var a;return 0===t?n.createElement(d.default,{label:`${t+1}级标签：`,key:t,index:t,select:v.params.type[t],datas:f.datas.filter((e=>1===e.level))||[],listSearchHandler:h}):v.params.type[t-1]&&null!==(a=f.datas.filter((e=>e.pid&&e.pid===v.params.type[t-1])))&&void 0!==a&&a.length?n.createElement(d.default,{label:`${t+1}级标签：`,key:t,index:t,select:v.params.type[t],datas:f.datas.filter((e=>e.pid===v.params.type[t-1]))||[],listSearchHandler:h}):null}))))))}}}]);
//# sourceMappingURL=9836.0276e902d2.chunk.js.map