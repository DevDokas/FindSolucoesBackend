"use strict";(self.webpackChunkfindsolucoes_api_strapi=self.webpackChunkfindsolucoes_api_strapi||[]).push([[3677],{14928:(p,o,t)=>{t.r(o),t.d(o,{default:()=>O});var e=t(67294),n=t(91134),i=t(64593),d=t(86896),c=t(87751),m=t(14087),a=t(17034),r=t(185),M=t(53979),T=t(49066),y=t(38939),C=t(8060),f=t(79031),u=t(37909),g=t(75515),x=t(15234),L=t(88767);const Z=async()=>{const{get:l}=(0,n.tg)(),{data:s}=await l("/admin/plugins");return s},A=l=>{const s=(0,n.lm)();return(0,L.useQuery)("list-enabled-plugins",()=>Z(),{onSuccess(){l&&l()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},I=()=>{const{formatMessage:l}=(0,d.Z)(),{notifyStatus:s}=(0,m.G)();(0,n.go)();const P=l({id:"global.plugins",defaultMessage:"Plugins"}),D=()=>{s(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:P}))},{status:v,data:h}=A(D);return v!=="success"&&v!=="error"?e.createElement(a.A,null,e.createElement(r.o,{"aria-busy":!0},e.createElement(n.dO,null))):e.createElement(a.A,null,e.createElement(r.o,null,e.createElement(M.T,{title:P,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(T.D,null,e.createElement(y.i,{colCount:2,rowCount:h?.plugins?.length??0+1},e.createElement(C.h,null,e.createElement(f.Tr,null,e.createElement(u.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(u.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),e.createElement(x.p,null,h.plugins.map(({name:E,displayName:B,description:N})=>e.createElement(f.Tr,{key:E},e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${E}`,defaultMessage:B}))),e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800"},l({id:`global.plugins.${E}.description`,defaultMessage:N}))))))))))},O=()=>{const{formatMessage:l}=(0,d.Z)(),s=l({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(n.O4,{permissions:c.Z.marketplace.main},e.createElement(i.q,{title:s}),e.createElement(I,null))}},17034:(p,o,t)=>{t.d(o,{A:()=>m});var e=t(85893),n=t(88972),i=t(41580);const d=(0,n.ZP)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,c=(0,n.ZP)(i.x)`
  overflow-x: hidden;
`,m=({sideNav:a,children:r})=>(0,e.jsxs)(d,{hasSideNav:!!a,children:[a,(0,e.jsx)(c,{paddingBottom:10,children:r})]})}}]);
