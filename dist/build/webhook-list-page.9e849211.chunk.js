"use strict";(self.webpackChunkfindsolucoes_api_strapi=self.webpackChunkfindsolucoes_api_strapi||[]).push([[4121],{59657:(I,g,t)=>{t.r(g),t.d(g,{default:()=>ce});var e=t(67294),s=t(91134),c=t(87751),E=t(14087),f=t(17034),T=t(185),D=t(53979),S=t(36989),m=t(75515),r=t(29728),P=t(49066),C=t(41580),q=t(38939),_=t(49386),ee=t(8060),U=t(79031),i=t(37909),K=t(92155),te=t(63237),ae=t(15234),k=t(11047),b=t(85893),V=t(88972);const j=V.ZP.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,ne=V.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${j} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${j}:before {
    transform: translateX(1rem);
  }
`,se=e.forwardRef(({label:o,onChange:h,onLabel:v="On",offLabel:d="Off",selected:n,visibleLabels:u=!1,...x},O)=>(0,b.jsx)(ne,{ref:O,role:"switch","aria-checked":n,"aria-label":o,onClick:h,visibleLabels:u,type:"button",...x,children:(0,b.jsxs)(k.k,{children:[(0,b.jsxs)(j,{children:[(0,b.jsx)("span",{children:v}),(0,b.jsx)("span",{children:d})]}),u&&(0,b.jsx)(C.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:n?"success600":"danger600",children:n?v:d})]})}));var F=t(12028),oe=t(89722),w=t(96315),z=t(20022),le=t(4585),re=t(86031),ie=t(86896),$=t(88767),H=t(16550);const de=()=>{const[o,h]=(0,e.useState)(!1),[v,d]=(0,e.useState)([]),{formatMessage:n}=(0,ie.Z)(),{formatAPIError:u}=(0,s.So)(),x=(0,s.lm)();(0,s.go)();const{push:O}=(0,H.k6)(),{pathname:N}=(0,H.TH)(),{isLoading:me,allowedActions:{canCreate:Z,canUpdate:Q,canDelete:Y}}=(0,s.ss)(c.Z.settings.webhooks),{get:he,post:ue,put:ge}=(0,s.kY)(),{notifyStatus:G}=(0,E.G)(),Ee="webhooks",{isLoading:fe,data:p,error:A,refetch:X}=(0,$.useQuery)(Ee,async()=>{const{data:{data:a}}=await he("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(A){x({type:"warning",message:u(A)});return}p&&G(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[p,A,x,n,G,u]);const J=(0,$.useMutation)(async()=>{await ue("/admin/webhooks/batch-delete",{ids:v})},{onError(a){x({type:"warning",message:u(a)}),h(!1)},onSuccess(){d([]),h(!1),X()}}),be=(0,$.useMutation)(async({isEnabled:a,id:l})=>{const{id:L,...R}=p.find(Ce=>Ce.id===l)??{},Me={...R,isEnabled:a};await ge(`/admin/webhooks/${l}`,Me)},{onError(a){x({type:"warning",message:u(a)})},onSuccess(){X()}}),ve=()=>J.mutate(),xe=a=>d(a?p.map(l=>l.id):[]),pe=(a,l)=>d(a?L=>[...L,l]:L=>L.filter(R=>R!==l)),B=a=>O(`${N}/${a}`),W=me||fe,y=p?.length??0,M=v.length;return e.createElement(f.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(T.o,{"aria-busy":W},e.createElement(D.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:Z&&!W&&e.createElement(s.Qj,{startIcon:e.createElement(w.Z,null),variant:"default",to:`${N}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),M>0&&Y&&e.createElement(S.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(m.Z,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:M})),e.createElement(r.z,{onClick:()=>h(!0),startIcon:e.createElement(z.Z,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(P.D,null,W?e.createElement(C.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):y>0?e.createElement(q.i,{colCount:5,rowCount:y+1,footer:e.createElement(_.c,{onClick:()=>Z?B("create"):{},icon:e.createElement(w.Z,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(ee.h,null,e.createElement(U.Tr,null,e.createElement(i.Th,null,e.createElement(K.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:M>0&&M<y,value:M===y,onValueChange:xe})),e.createElement(i.Th,{width:"20%"},e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(te.T,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,p.map(a=>e.createElement(U.Tr,{key:a.id,...(0,s.X7)({fn:()=>B(a.id),condition:Q})},e.createElement(i.Td,{...s.UW},e.createElement(K.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:v?.includes(a.id),onValueChange:l=>pe(l,a.id),name:"select"})),e.createElement(i.Td,null,e.createElement(m.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(i.Td,null,e.createElement(m.Z,{textColor:"neutral800"},a.url)),e.createElement(i.Td,null,e.createElement(k.k,null,e.createElement(se,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:l=>{l.stopPropagation(),be.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(k.k,{gap:1},Q&&e.createElement(F.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(le.Z,null),noBorder:!0}),Y&&e.createElement(F.h,{onClick:l=>{l.stopPropagation(),d([a.id]),h(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(z.Z,null),noBorder:!0}))))))):e.createElement(oe.x,{icon:e.createElement(re.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(r.z,{variant:"secondary",startIcon:e.createElement(w.Z,null),onClick:()=>Z?B("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:o,onToggleDialog:()=>h(a=>!a),onConfirm:ve,isConfirmButtonLoading:J.isLoading}))},ce=()=>e.createElement(s.O4,{permissions:c.Z.settings.webhooks.main},e.createElement(de,null))},36989:(I,g,t)=>{t.d(g,{Z:()=>c});var e=t(85893),s=t(11047);const c=({startActions:E,endActions:f})=>!E&&!f?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:E}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:f})]})},49386:(I,g,t)=>{t.d(g,{c:()=>m});var e=t(85893),s=t(88972),c=t(41580),E=t(70004),f=t(11047),T=t(75515);const D=(0,s.ZP)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:r})=>r.colors.primary600};
  }
`,S=(0,s.ZP)(c.x)`
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,m=({children:r,icon:P,...C})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(E.i,{}),(0,e.jsx)(S,{as:"button",background:"primary100",padding:5,...C,children:(0,e.jsxs)(f.k,{children:[(0,e.jsx)(D,{"aria-hidden":!0,background:"primary200",children:P}),(0,e.jsx)(c.x,{paddingLeft:3,children:(0,e.jsx)(T.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:r})})]})})]})}}]);
