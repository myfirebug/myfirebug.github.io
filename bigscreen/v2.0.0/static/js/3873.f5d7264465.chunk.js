"use strict";(self.webpackChunkcli=self.webpackChunkcli||[]).push([[3873],{3181:function(e,t,a){a.d(t,{Z:function(){return r}});var c=a(7462),n=a(7294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},l=a(76),i=function(e,t){return n.createElement(l.Z,(0,c.Z)({},e,{ref:t,icon:s}))};var r=n.forwardRef(i)},510:function(e,t,a){a.r(t);var c=a(7294),n=a(9293),s=a(8065);t.default=({children:e,datas:t,loading:a})=>{const[l,i]=(0,c.useState)((()=>Math.floor(window.innerWidth/280))),r=(0,c.useCallback)((()=>{const e=window.innerWidth;i(Math.floor(e/280))}),[]);return(0,c.useEffect)((()=>(r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)})),[r]),c.createElement("div",{className:"cms-components__list"},e&&c.createElement("div",{className:"cms-selector"},e),c.createElement("div",{className:"cms-components__list--body"},a?c.createElement(n.Z,{active:!0}):t.length?t.map(((e,t)=>c.createElement("div",{key:t,className:"cms-components__item",style:{width:`calc(100% / ${l} - 20px)`}},c.createElement("div",{className:"picture"},c.createElement("img",{src:e.images,alt:""})),c.createElement("div",{className:"name"},e.name),c.createElement("div",{className:"type"},"类型：",e.level2Type||e.level1Type),c.createElement("div",{className:"type"},"使用次数：",e.count,"次"),c.createElement("div",{className:"createtime"},"创建时间：",e.createTime)))):c.createElement(s.Z,{image:s.Z.PRESENTED_IMAGE_SIMPLE})))}}}]);
//# sourceMappingURL=3873.f5d7264465.chunk.js.map