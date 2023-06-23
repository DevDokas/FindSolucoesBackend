(self.webpackChunkfindsolucoes_api_strapi=self.webpackChunkfindsolucoes_api_strapi||[]).push([[2544],{23341:(Y,Z,r)=>{"use strict";r.r(Z),r.d(Z,{CreatePage:()=>Ce,default:()=>Oe});var e=r(67294),b=r(185),R=r(53979),x=r(11047),I=r(29728),$=r(49066),P=r(41580),A=r(75515),j=r(11276),G=r(67819),a=r(16364),U=r(61467),p=r(91134),T=r(67109),B=r(66115),f=r(41054),C=r(27361),w=r.n(C),pe=r(41609),oe=r.n(pe),ce=r(86896),h=r(16550),de=r(88972),F=r(51319),q=r(87751),re=r(18280),ge=r(87561);const ye=ge.Ry().shape({name:ge.Z_().required(p.I0.required),description:ge.Z_().required(p.I0.required)}),ae=de.ZP.div`
  border: 1px solid ${({theme:z})=>z.colors.primary200};
  background: ${({theme:z})=>z.colors.primary100};
  padding: ${({theme:z})=>`${z.spaces[2]} ${z.spaces[4]}`};
  color: ${({theme:z})=>z.colors.primary600};
  border-radius: ${({theme:z})=>z.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Ce=()=>{const z=(0,p.lm)(),{lockApp:N,unlockApp:X}=(0,p.o1)(),{formatMessage:L}=(0,ce.Z)(),[ee,te]=(0,e.useState)(!1),{replace:fe}=(0,h.k6)(),J=(0,e.useRef)(),{trackUsage:be}=(0,p.rS)(),Ee=(0,h.$B)("/settings/roles/duplicate/:id"),Pe=w()(Ee,"params.id",null),{isLoading:ke,data:he}=(0,F.U_)(),{permissions:Ie,isLoading:Ae}=(0,F.Dq)(Pe),{post:Ze,put:De}=(0,p.kY)(),Be=ie=>{N(),te(!0),be(Pe?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(Ze("/admin/roles",ie)).then(async({data:V})=>{const{permissionsToSend:_}=J.current.getPermissions();return be(Pe?"didDuplicateRole":"didCreateNewRole"),V.data.id&&!oe()(_)&&await De(`/admin/roles/${V.data.id}/permissions`,{permissions:_}),V}).then(V=>{te(!1),z({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),fe(`/settings/roles/${V.data.id}`)}).catch(V=>{console.error(V),te(!1),z({type:"warning",message:{id:"notification.error"}})}).finally(()=>{X()})},Fe=`${L({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,B.Z)(new Date,"PPP")}`;return e.createElement(b.o,null,e.createElement(p.SL,{name:"Roles"}),e.createElement(f.J9,{initialValues:{name:"",description:Fe},onSubmit:Be,validationSchema:ye,validateOnChange:!1},({handleSubmit:ie,values:V,errors:_,handleReset:le,handleChange:xe})=>e.createElement(p.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(R.T,{primaryAction:e.createElement(x.k,{gap:2},e.createElement(I.z,{variant:"secondary",onClick:()=>{le(),J.current.resetForm()},size:"L"},L({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(I.z,{onClick:ie,loading:ee,size:"L"},L({id:"global.save",defaultMessage:"Save"}))),title:L({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:L({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(p.rU,{startIcon:e.createElement(T.Z,null),to:"/settings/roles"},L({id:"global.back",defaultMessage:"Back"}))}),e.createElement($.D,null,e.createElement(x.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(x.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(x.k,{justifyContent:"space-between"},e.createElement(P.x,null,e.createElement(P.x,null,e.createElement(A.Z,{fontWeight:"bold"},L({id:"global.details",defaultMessage:"Details"}))),e.createElement(P.x,null,e.createElement(A.Z,{variant:"pi",textColor:"neutral600"},L({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ae,null,L({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(j.r,{gap:4},e.createElement(G.P,{col:6},e.createElement(a.o,{name:"name",error:_.name&&L({id:_.name}),label:L({id:"global.name",defaultMessage:"Name"}),onChange:xe,value:V.name})),e.createElement(G.P,{col:6},e.createElement(U.g,{label:L({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.description&&L({id:_.description}),onChange:xe},V.description))))),!ke&&!Ae?e.createElement(P.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(re.Z,{isFormDisabled:!1,ref:J,permissions:Ie,layout:he})):e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(p.dO,null))))))))};function Oe(){return e.createElement(p.O4,{permissions:q.Z.settings.roles.create},e.createElement(Ce,null))}},18280:(Y,Z,r)=>{"use strict";r.d(Z,{Z:()=>es});var e=r(67294),b=r(82777),R=r(77296),x=r(42761),I=r(91134),$=r(18721),P=r.n($),A=r(41609),j=r.n(A),G=r(45697),a=r.n(G),U=r(86896),p=r(41580),T=r(89734),B=r.n(T),f=r(88972),C=r(11047),w=r(92155),pe=r(52337),oe=r(66942),ce=r(27361),h=r.n(ce),de=r(57557),F=r.n(de),q=r(51319),re=r(29728),ge=r(78114);const $e=f.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:o})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ye=({onClick:t,className:n,hasConditions:o,variant:s})=>{const{formatMessage:i}=(0,U.Z)();return e.createElement($e,{hasConditions:o,className:n},e.createElement(re.z,{variant:s,startIcon:e.createElement(ge.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};ye.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},ye.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const ae=(0,f.ZP)(ye)``;var Ce=r(42866),Oe=r(24969),z=r(59946),N=r(75515),X=r(36856),L=r(63321),ee=r(36773),te=r(18172),fe=r(7739),J=r.n(fe),be=r(11700),Ee=r.n(be),Pe=r(38953);const ke=t=>Object.values(t).map(n=>Object.entries(n).filter(([,o])=>o).map(([o])=>o)).flat(),he=t=>t.reduce((n,[o,s])=>(n.push({label:Ee()(o),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),Ie=(t,n)=>t.map(([,o])=>o).flat().reduce((o,s)=>({[s.id]:n.includes(s.id),...o}),{}),Ae=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:o,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,U.Z)(),m=u=>{l(i,Ie(t,u))};return e.createElement(C.k,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(C.k,{paddingLeft:6,style:{width:180}},e.createElement(N.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(N.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(N.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(p.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Pe.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:m,value:ke(c),options:he(t),disabled:n})))};Ae.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const Ze=Ae,De=(t,n)=>t.reduce((o,s)=>(o[s.id]=h()(n,s.id,!1),o),{}),Be=(t,n)=>t.reduce((o,s)=>{const[i,l]=s,c=De(l,n);return o[i]=c,o},{}),ie=(t,n,o)=>t.reduce((s,i)=>{const l=h()(n,[...i.pathToConditionsObject,"conditions"],{}),c=Be(o,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),V=({actions:t,headerBreadCrumbs:n,isFormDisabled:o,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,U.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:m}=(0,q.$_)(),u=(0,e.useMemo)(()=>Object.entries(J()(c,"category")),[c]),g=t.filter(({isDisplayed:y,hasSomeActionsSelected:D,hasAllActionsSelected:M})=>y&&(D||M)),E=(0,e.useMemo)(()=>ie(g,d,u),[g,d,u]),[S,W]=(0,e.useState)(E),O=(y,D)=>{W((0,te.ZP)(M=>{M[y]||(M[y]={}),M[y].default||(M[y].default={}),M[y].default=D}))},v=()=>{const y=Object.entries(S).reduce((D,M)=>{const[k,ne]=M,K=Object.values(ne).reduce((Q,H)=>({...Q,...H}),{});return D[k]=K,D},{});m(y),i()};return e.createElement(Ce.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Oe.x,null,e.createElement(L.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((y,D,M)=>e.createElement(ee.$,{isCurrent:D===M.length-1,key:y},Ee()(l({id:y,defaultMessage:y})))))),e.createElement(z.f,null,g.length===0&&e.createElement(N.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,g.map(({actionId:y,label:D,pathToConditionsObject:M},k)=>{const ne=M.join("..");return e.createElement(Ze,{key:y,arrayOfOptionsGroupedByCategory:u,label:D,isFormDisabled:o,isGrey:k%2===0,name:ne,onChange:O,value:h()(S,ne,{})})}))),e.createElement(X.m,{startActions:e.createElement(re.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(re.z,{onClick:v},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};V.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const _=V,le=`${120/16}rem`,xe=`${200/16}rem`,He=`${53/16}rem`,Ue=f.ZP.div`
  width: ${le};
`,ot=(0,f.ZP)(C.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ke=({children:t,isCollapsable:n,isActive:o,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:m,value:u})=>{const{formatMessage:g}=(0,U.Z)();return e.createElement(C.k,{alignItems:"center",paddingLeft:6,style:{width:xe,flexShrink:0}},e.createElement(p.x,{paddingRight:2},e.createElement(w.C,{name:d,"aria-label":g({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:E=>l({target:{name:d,value:E}}),indeterminate:m,value:u})),e.createElement(ot,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":o,onKeyDown:({key:E})=>(E==="Enter"||E===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(N.Z,{fontWeight:o?"bold":"",textColor:o?"primary600":"neutral800",ellipsis:!0},Ee()(i)),t))};Ke.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ke.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const rt=(0,e.memo)(Ke);var Ft=r(42348),Nt=r.n(Ft),Wt=r(13218),Re=r.n(Wt);const at=t=>Re()(t)?Nt()(Object.values(t).map(n=>Re()(n)?at(n):n)):[],je=at,ze=t=>t?Object.keys(t).reduce((n,o)=>(o!=="conditions"&&(n[o]=t[o]),n),{}):null,Te=t=>{const n=ze(t),o=je(n);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=o.every(l=>l),i=o.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}};var Vt=r(12645);const Ne=(0,f.ZP)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,We=t=>`
  ${N.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ne} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ht=(t,n,o)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...o.split(".."),s],m=j()(l)?[...d,"properties","enabled"]:d,u=m.join(".."),g=h()(n,[...d,"conditions"],null),E=je(g).some(v=>v);if(j()(l)){const v=h()(n,m,!1);return{actionId:s,checkboxName:u,hasAllActionsSelected:v,hasConditions:E,hasSomeActionsSelected:v,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const S=h()(n,m,null),{hasAllActionsSelected:W,hasSomeActionsSelected:O}=Te(S);return{actionId:s,checkboxName:u,hasAllActionsSelected:W,hasConditions:E,hasSomeActionsSelected:O,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),we=(t,n)=>`
  ${it} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${ct} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
   ${We(t)}
  }

  &:focus-within {
    ${({theme:o,isActive:s})=>we(o,s)}
  }
  
`,it=f.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${He};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Gt=f.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&we(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>we(t,n)}
  }
`,lt=(0,f.ZP)(C.k)`
  width: ${le};
  position: relative;
`,ct=(0,f.ZP)(p.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,dt=f.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Ut=(0,f.ZP)(p.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ut=({availableActions:t,isActive:n,isGrey:o,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,m]=(0,e.useState)(!1),{formatMessage:u}=(0,U.Z)(),{modifiedData:g,onChangeParentCheckbox:E,onChangeSimpleCheckbox:S}=(0,q.$_)(),W=()=>{m(K=>!K)},O=()=>{m(!1)},v=h()(g,c.split(".."),{}),y=(0,e.useMemo)(()=>Object.keys(v).reduce((K,Q)=>(K[Q]=F()(v[Q],"conditions"),K),{}),[v]),{hasAllActionsSelected:D,hasSomeActionsSelected:M}=Te(y),k=(0,e.useMemo)(()=>Ht(t,g,c),[t,g,c]),ne=k.some(({hasConditions:K})=>K);return e.createElement(Gt,{isActive:n},e.createElement(it,{isGrey:o},e.createElement(rt,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:E,onClick:l,someChecked:M,value:D,isActive:n},e.createElement(ct,{paddingLeft:2},n?e.createElement(pe.Z,null):e.createElement(oe.Z,null))),e.createElement(C.k,{style:{flex:1}},k.map(({actionId:K,hasConditions:Q,hasAllActionsSelected:H,hasSomeActionsSelected:me,isDisplayed:Le,isParentCheckbox:se,checkboxName:ve,label:Ve})=>Le?se?e.createElement(lt,{key:K,justifyContent:"center",alignItems:"center"},Q&&e.createElement(dt,null),e.createElement(w.C,{disabled:s,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ve} ${i}`}),onValueChange:Se=>{E({target:{name:ve,value:Se}})},indeterminate:me,value:H})):e.createElement(lt,{key:K,justifyContent:"center",alignItems:"center"},Q&&e.createElement(dt,null),e.createElement(w.C,{disabled:s,indeterminate:Q,name:ve,onValueChange:Se=>{S({target:{name:ve,value:Se}})},value:H})):e.createElement(Ue,{key:K}))),d&&e.createElement(_,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:k,isFormDisabled:s,onClosed:O,onToggle:W})),e.createElement(Ut,null,e.createElement(ae,{onClick:W,hasConditions:ne})))};ut.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const Kt=ut,zt=f.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,mt=()=>e.createElement(zt,null,"*"),wt=(t,n)=>t.map(o=>{const s=Array.isArray(o.subjects)&&o.subjects.indexOf(n)!==-1;return{...o,isDisplayed:s}}),Xt=(0,f.ZP)(p.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Yt=f.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Xe=t=>e.createElement(Xt,null,e.createElement(Yt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Xe.defaultProps={fill:"primary200"},Xe.propTypes={fill:a().string};const Jt=(0,e.memo)(Xe),pt=(0,f.ZP)(C.k)`
  width: ${le};
  position: relative;
`,Qt=(0,f.ZP)(C.k)`
  height: ${He};
`,qt=(0,f.ZP)(p.x)`
  padding-left: ${31/16}rem;
`,_t=(0,f.ZP)(p.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,en=(0,f.ZP)(C.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ne} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${We(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&We(n)};
`,tn=f.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Ye=({childrenForm:t,isFormDisabled:n,recursiveLevel:o,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,U.Z)(),{modifiedData:m,onChangeParentCheckbox:u,onChangeSimpleCheckbox:g}=(0,q.$_)(),[E,S]=(0,e.useState)(null),W=v=>{S(y=>y===v?null:v)},O=(0,e.useMemo)(()=>E?t.find(({value:v})=>v===E):null,[E,t]);return e.createElement(qt,null,e.createElement(tn,null),t.map(({label:v,value:y,required:D,children:M},k)=>{const ne=k+1<t.length,K=Array.isArray(M),Q=E===y;return e.createElement(_t,{key:y,isVisible:ne},e.createElement(Qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(C.k,{style:{flex:1}},e.createElement(en,{level:o,isActive:Q,isCollapsable:K},e.createElement(ot,{alignItems:"center",isCollapsable:K,...K&&{onClick:()=>W(y),"aria-expanded":Q,onKeyDown:({key:H})=>(H==="Enter"||H===" ")&&W(y),tabIndex:0,role:"button"},title:v},e.createElement(N.Z,{ellipsis:!0},Ee()(v)),D&&e.createElement(mt,null),e.createElement(Ne,{$isActive:Q}))),e.createElement(C.k,{style:{flex:1}},i.map(({actionId:H,label:me,isActionRelatedToCurrentProperty:Le})=>{if(!Le)return e.createElement(Ue,{key:H});const se=[...s.split(".."),H,"properties",c,...l.split(".."),y],ve=h()(m,se,!1);if(!M)return e.createElement(pt,{key:me,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:n,name:se.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${v} ${me}`}),onValueChange:Me=>{g({target:{name:se.join(".."),value:Me}})},value:ve}));const{hasAllActionsSelected:Ve,hasSomeActionsSelected:Se}=Te(ve);return e.createElement(pt,{key:me,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{key:me,disabled:n,name:se.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${v} ${me}`}),onValueChange:Me=>{u({target:{name:se.join(".."),value:Me}})},value:Ve,indeterminate:Se}))})))),O&&Q&&e.createElement(p.x,{paddingBottom:2},e.createElement(Ye,{isFormDisabled:n,parentName:`${l}..${y}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:o+1,childrenForm:O.children})))}))};Ye.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const nn=(0,e.memo)(Ye),sn=t=>t.reduce((o,s)=>(s.isActionRelatedToCurrentProperty&&o.push(s.actionId),o),[]),on=(t,n,o,s,i)=>{const c=sn(t).reduce((d,m)=>{const u=[...o.split(".."),m,"properties",s,i],g=h()(n,u,!1);return d[m]=g,d},{});return Te(c)},gt=(0,f.ZP)(C.k)`
  width: ${le};
  position: relative;
`,rn=(0,f.ZP)(C.k)`
  height: ${He};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ne} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${We(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&We(n)};
`,Je=({childrenForm:t,label:n,isFormDisabled:o,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:m})=>{const{formatMessage:u}=(0,U.Z)(),[g,E]=(0,e.useState)(null),{modifiedData:S,onChangeCollectionTypeLeftActionRowCheckbox:W,onChangeParentCheckbox:O,onChangeSimpleCheckbox:v}=(0,q.$_)(),y=g===s,D=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),M=D.length>0,k=(0,e.useCallback)(()=>{M&&E(H=>H===s?null:s)},[M,s]),ne=({target:{value:H}})=>{W(l,d,s,H)},{hasAllActionsSelected:K,hasSomeActionsSelected:Q}=(0,e.useMemo)(()=>on(c,S,l,d,s),[c,S,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(rn,{alignItems:"center",isCollapsable:M,isActive:y,background:m?"neutral100":"neutral0"},e.createElement(C.k,null,e.createElement(rt,{onChange:ne,onClick:k,isCollapsable:M,isFormDisabled:o,label:n,someChecked:Q,value:K,isActive:y},i&&e.createElement(mt,null),e.createElement(Ne,{$isActive:y})),e.createElement(C.k,null,c.map(({label:H,isActionRelatedToCurrentProperty:me,actionId:Le})=>{if(!me)return e.createElement(Ue,{key:H});const se=[...l.split(".."),Le,"properties",d,s];if(!M){const Me=h()(S,se,!1);return e.createElement(gt,{key:Le,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:o,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),onValueChange:ts=>{v({target:{name:se.join(".."),value:ts}})},value:Me}))}const ve=h()(S,se,{}),{hasAllActionsSelected:Ve,hasSomeActionsSelected:Se}=Te(ve);return e.createElement(gt,{key:H,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:o,name:se.join(".."),onValueChange:Me=>{O({target:{name:se.join(".."),value:Me}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),value:Ve,indeterminate:Se}))})))),y&&e.createElement(nn,{childrenForm:D,isFormDisabled:o,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Je.defaultProps={childrenForm:[],required:!1},Je.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const an=(0,e.memo)(Je),ft=(0,f.ZP)(C.k)`
  width: ${le};
  flex-shrink: 0;
`,ln=(0,f.ZP)(C.k)`
  width: ${xe};
  height: ${He};
  flex-shrink: 0;
`,ht=({headers:t,label:n})=>{const{formatMessage:o}=(0,U.Z)(),s=o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(C.k,null,e.createElement(ln,{alignItems:"center",paddingLeft:6},e.createElement(N.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ft,{justifyContent:"center",key:i.label},e.createElement(N.Z,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ft,{key:i.label})))};ht.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const cn=ht,dn=(t,n)=>t.map(o=>{const s=Array.isArray(o.applyToProperties)&&o.applyToProperties.indexOf(n)!==-1&&o.isDisplayed;return{label:o.label,actionId:o.actionId,isActionRelatedToCurrentProperty:s}}),un=f.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,yt=({availableActions:t,childrenForm:n,isFormDisabled:o,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>dn(t,l),[t,l]);return e.createElement(un,null,e.createElement(cn,{label:s,headers:c}),e.createElement(p.x,null,n.map(({children:d,label:m,value:u,required:g},E)=>e.createElement(an,{childrenForm:d,key:u,label:m,isFormDisabled:o,name:u,required:g,propertyActions:c,pathToData:i,propertyName:l,isOdd:E%2===0}))))};yt.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const mn=yt,pn=f.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,Ct=({allActions:t,contentTypeName:n,label:o,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:m})=>{const u=(0,e.useCallback)(()=>{c(n)},[n,c]),g=(0,e.useMemo)(()=>wt(t,n),[t,n]);return e.createElement(pn,{isActive:i},e.createElement(Kt,{availableActions:g,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:o,onClickToggle:u,pathToData:d}),i&&m.map(({label:E,value:S,children:W})=>e.createElement(mn,{availableActions:g,childrenForm:W,isFormDisabled:l,label:E,pathToData:d,propertyName:S,key:S})))};Ct.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const gn=Ct,Qe=({actions:t,isFormDisabled:n,pathToData:o,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:m,properties:u},g)=>e.createElement(gn,{allActions:t,key:d,contentTypeName:d,label:m,isActive:i===d,isFormDisabled:n,index:g,onClickToggleCollapse:c,pathToData:`${o}..${d}`,properties:u}))};Qe.defaultProps={actions:[],subjects:[]},Qe.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const fn=(0,e.memo)(Qe),hn=t=>t.filter(({subjects:n})=>n&&n.length),yn=t=>t.map(({actionId:n})=>n),Cn=(t,n)=>t.reduce((o,s)=>(Object.keys(n).forEach(i=>{const l=h()(n,[i,s],{}),c={[i]:ze(l)};o[s]?o[s]={...o[s],...c}:o[s]=c}),o),{}),En=(t,n)=>{const o=yn(t),s=Cn(o,n);return Object.keys(s).reduce((l,c)=>(l[c]=Te(s[c]),l),{})},vn=(0,f.ZP)(C.k)`
  width: ${le};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:n,kind:o})=>{const{formatMessage:s}=(0,U.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,q.$_)(),c=(0,e.useMemo)(()=>hn(t),[t]),d=(0,e.useMemo)(()=>En(c,i[o]),[i,c,o]);return e.createElement(p.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:xe}},e.createElement(C.k,{gap:0},c.map(({label:m,actionId:u})=>e.createElement(vn,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(N.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})),e.createElement(w.C,{disabled:n,onValueChange:g=>{l(o,u,g)},name:u,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})}),value:h()(d,[u,"hasAllActionsSelected"],!1),indeterminate:h()(d,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const bn=(0,e.memo)(qe),xn=(0,f.ZP)(p.x)`
  overflow-x: auto;
`,Et=({isFormDisabled:t,kind:n,layout:{actions:o,subjects:s}})=>{const i=B()([...s],"label");return e.createElement(xn,{background:"neutral0"},e.createElement(bn,{actions:o,kind:n,isFormDisabled:t}),e.createElement(fn,{actions:o,isFormDisabled:t,pathToData:n,subjects:i}))};Et.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const vt=(0,e.memo)(Et);var Rn=r(47713);const bt=({children:t,value:n})=>e.createElement(Rn.$l.Provider,{value:n},t);bt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const Pn=bt;var An=r(48734),Tn=r(74756),Sn=r(63081),xt=r(36213),Mn=r(11276),$n=r(67819);const On=(t,n,o)=>t.map(s=>{const i=[...o,s.action,"properties","enabled"],l=h()(n,i,!1),c=h()(n,[...o,s.action,"conditions"],{}),d=je(c).some(m=>m);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...o,s.action]}}),Dn=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return je(n).some(s=>s)},jn=f.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,Ln=f.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:o})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Rt=({categoryName:t,isFormDisabled:n,subCategoryName:o,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:m,onChangeSimpleCheckbox:u}=(0,q.$_)(),{formatMessage:g}=(0,U.Z)(),E=h()(d,i,{}),S=(0,e.useMemo)(()=>Object.keys(E).reduce((k,ne)=>(k[ne]=ze(E[ne]),k),{}),[E]),{hasAllActionsSelected:W,hasSomeActionsSelected:O}=Te(S),v=()=>{c(k=>!k)},y=()=>{c(!1)},D=On(s,d,i),M=Dn(h()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(p.x,null,e.createElement(C.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(p.x,{paddingRight:4},e.createElement(N.Z,{variant:"sigma",textColor:"neutral600"},o)),e.createElement(jn,null),e.createElement(p.x,{paddingLeft:4},e.createElement(xt.X,{name:i.join(".."),disabled:n,onValueChange:k=>{m({target:{name:i.join(".."),value:k}})},indeterminate:O,value:W},g({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(C.k,{paddingTop:6,paddingBottom:6},e.createElement(Mn.r,{gap:2,style:{flex:1}},D.map(({checkboxName:k,value:ne,action:K,displayName:Q,hasConditions:H})=>e.createElement($n.P,{col:3,key:K},e.createElement(Ln,{disabled:n,hasConditions:H},e.createElement(xt.X,{name:k,disabled:n,onValueChange:me=>{u({target:{name:k,value:me}})},value:ne},Q))))),e.createElement(ae,{hasConditions:M,onClick:v}))),l&&e.createElement(_,{headerBreadCrumbs:[t,o],actions:D,isFormDisabled:n,onClosed:y,onToggle:v}))};Rt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const kn=Rt,_e=({childrenForm:t,kind:n,name:o,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:m}=(0,U.Z)(),u=()=>{c(o)},g=(0,e.useMemo)(()=>o.split("::").pop(),[o]);return e.createElement(An.U,{expanded:s,onToggle:u,id:`accordion-${o}`,variant:l?"primary":"secondary"},e.createElement(Tn.B,{title:Ee()(g),description:`${m({id:"Settings.permissions.category"},{category:g})} ${n==="plugins"?"plugin":n}`}),e.createElement(Sn.v,null,e.createElement(p.x,{padding:6},t.map(({actions:E,subCategoryName:S,subCategoryId:W})=>e.createElement(kn,{key:S,actions:E,categoryName:g,isFormDisabled:i,subCategoryName:S,pathToData:[...d,W]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const In=_e,Pt=({isFormDisabled:t,kind:n,layout:o})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(p.x,{padding:6,background:"neutral0"},o.map(({category:c,categoryId:d,childrenForm:m},u)=>e.createElement(In,{key:c,childrenForm:m,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:u%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Pt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const At=Pt;var Zn=r(82492),Bn=r.n(Zn),Fn=r(36968),ue=r.n(Fn);const Tt=(t,n,o)=>t.find(s=>s.action===n&&s.subject===o),St=(t,n=[])=>t.reduce((o,s)=>(o[s.id]=n.indexOf(s.id)!==-1,o),{}),Mt=({children:t},n,o="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:Mt(i,n,`${o}${i.value}.`)};const l=n.indexOf(`${o}${i.value}`)!==-1;return s[i.value]=l,s},{}),Nn=(t,n,o)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=h()(o,["properties",l.value],[]),d=Mt(l,c);s.properties[i]=d}return s},{properties:{}}),Wn=(t,n)=>n.reduce((o,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(o[s]=i),o},{}),$t=({subjects:t},n,o,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Wn(t,c);if(j()(d))return i;const m=Object.keys(d).reduce((u,g)=>{const{actionId:E,applyToProperties:S}=l,v=d[g].properties.map(({value:k})=>k).every(k=>(S||[]).indexOf(k)===-1),y=Tt(s,E,g),D=St(o,h()(y,"conditions",[]));if(j()(S)||v)return ue()(u,[g,E],{properties:{enabled:y!==void 0},conditions:D}),u;const M=Nn(S,d[g],y);return ue()(u,[g,E],{...M,conditions:D}),u},{});return Bn()(i,m)},{}),Vn=(t,n,o)=>t.reduce((s,i)=>{const l=Tt(o,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:St(n,l?.conditions??[])},s},{}),Hn=(t,n,o)=>t.reduce((s,i)=>(s[i.subCategoryId]=Vn(i.actions,n,o),s),{}),Ot=(t,n,o=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Hn(l,n,o);return s[i]=c,s},{}),Dt=t=>t.split(" ").join("-"),jt=(t,n)=>Object.entries(J()(t,n)).map(([o,s])=>({category:o,categoryId:Dt(o),childrenForm:Object.entries(J()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Dt(i),actions:l}))})),Gn=(t,n)=>{const{conditions:o,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(c,"category")},m={collectionTypes:$t(s,s.actions||[],o,n),singleTypes:$t(i,i.actions||[],o,n),plugins:Ot(d.plugins,o,n),settings:Ot(d.settings,o,n)};return{initialData:m,modifiedData:m,layouts:d}};var Un=r(50361),et=r.n(Un);const Lt=t=>Object.keys(t).reduce((n,o)=>{const s=t[o];if(Re()(s)&&!P()(s,"conditions"))return{...n,[o]:Lt(s)};if(Re()(s)&&P()(s,"conditions")&&!je(F()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[o]:{...s,conditions:l}}}return n[o]=s,n},{}),tt=Lt,kt=(t,n,o=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!o?(s[i]=l,s):Re()(l)?{...s,[i]:kt(l,n,i==="fields")}:(s[i]=n,s)},{}),Ge=kt,Kn={initialData:{},modifiedData:{},layouts:{}},zn=(t,n)=>(0,te.ZP)(t,o=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(h()(t,c)).forEach(d=>{const m=h()(t,[...c,d,i],void 0);if(m){let u=Ge(m,l);if(!l&&u.conditions){const g=Ge(u.conditions,!1);u={...u,conditions:g}}ue()(o,[...c,d,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=et()(t.modifiedData);const m=s.split(".."),u=h()(d,m,{});Object.keys(u).forEach(g=>{if(P()(u[g],`properties.${i}`)){const E=h()(u,[g,"properties",i,l]),S=[...m,g,"properties",i,l];if(!Re()(E))ue()(d,S,c);else{const W=Ge(E,c);ue()(d,S,W)}}}),c||(d=tt(d)),ue()(o,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;ue()(o,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=et()(t.modifiedData);ue()(s,[...n.keys.split("..")],n.value),n.value||(s=tt(s)),ue()(o,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=et()(t.modifiedData);const d=h()(c,l,{}),m=Ge(d,i);ue()(c,l,m),i||(c=tt(c)),ue()(o,["modifiedData"],c);break}case"RESET_FORM":{o.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=t.modifiedData;break}default:return o}}),nt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),wn=t=>{const[n,{conditions:o}]=t;return{action:n,subject:null,conditions:nt(o),properties:{}}},Xn=t=>Object.values(t).reduce((n,o)=>{const s=Object.entries(o).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=wn(l);return i.push(d),i},[]);return[...n,...s]},[]),It=t=>Object.values(t).reduce((n,o)=>{const s=Xn(o);return[...n,...s]},[]),Zt=(t,n="")=>Object.entries(t).reduce((o,s)=>{const[i,l]=s;return Re()(l)?[...o,...Zt(l,`${n}${i}.`)]:(l&&!Re()(l)&&o.push(`${n}${i}`),o)},[]),Yn=(t,n,{conditions:o,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=Zt(d),i},{action:t,subject:n,conditions:nt(o),properties:{}}),Jn=(t,n,{conditions:o})=>({action:t,subject:n,properties:{},conditions:nt(o)}),Qn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!je(c).some(u=>u))return s;if(!c?.properties?.enabled){const u=Yn(l,t,c);return[...s,u]}if(!c.properties.enabled)return s;const m=Jn(l,t,c);return s.push(m),s},[]),Bt=t=>Object.entries(t).reduce((o,s)=>{const[i,l]=s,c=Qn(i,l);return[...o,...c]},[]),qn=t=>{const n=It(t.plugins),o=It(t.settings),s=Bt(t.collectionTypes),i=Bt(t.singleTypes);return[...n,...o,...s,...i]},_n=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:o},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(zn,Kn,()=>Gn(t,o)),{formatMessage:m}=(0,U.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const O=(0,I.e5)(i.collectionTypes,c.collectionTypes),v=(0,I.e5)(i.singleTypes,c.singleTypes),y={...O,...v};let D;return j()(y)?D=!1:D=Object.values(y).some(M=>Object.values(M).some(k=>P()(k,"conditions"))),{permissionsToSend:qn(c),didUpdateConditions:D}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(O,v,y,D)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:O,propertyName:v,rowName:y,value:D})},g=(O,v,y)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:O,actionId:v,value:y})},E=O=>{d({type:"ON_CHANGE_CONDITIONS",conditions:O})},S=(0,e.useCallback)(({target:{name:O,value:v}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:O,value:v})},[]),W=(0,e.useCallback)(({target:{name:O,value:v}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:O,value:v})},[]);return e.createElement(Pn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:E,onChangeSimpleCheckbox:S,onChangeParentCheckbox:W,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:g}},e.createElement(b.v,{id:"tabs",label:m({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(R.m,null,_n.map(O=>e.createElement(R.O,{key:O.id},m({id:O.labelId,defaultMessage:O.defaultMessage})))),e.createElement(x.n,{style:{position:"relative"}},e.createElement(x.x,null,e.createElement(vt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(x.x,null,e.createElement(vt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(x.x,null,e.createElement(At,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(x.x,null,e.createElement(At,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const es=(0,e.memo)(st)},92100:(Y,Z,r)=>{"use strict";r.r(Z),r.d(Z,{default:()=>z});var e=r(67294),b=r(91134),R=r(16550),x=r(87751),I=r(185),$=r(53979),P=r(11047),A=r(29728),j=r(49066),G=r(41580),a=r(67109),U=r(41054),p=r(27361),T=r.n(p),B=r(86896),f=r(51319),C=r(18280),w=r(75515),pe=r(11276),oe=r(67819),ce=r(16364),h=r(61467),de=r(45697),F=r.n(de);const q=({disabled:N,role:X,values:L,errors:ee,onChange:te,onBlur:fe})=>{const{formatMessage:J}=(0,B.Z)();return e.createElement(G.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(P.k,{justifyContent:"space-between"},e.createElement(G.x,null,e.createElement(G.x,null,e.createElement(w.Z,{fontWeight:"bold"},X?X.name:J({id:"global.details",defaultMessage:"Details"}))),e.createElement(G.x,null,e.createElement(w.Z,{textColor:"neutral500",variant:"pi"},X?X.description:J({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(A.z,{disabled:!0,variant:"secondary"},J({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:X.usersCount}))),e.createElement(pe.r,{gap:4},e.createElement(oe.P,{col:6},e.createElement(ce.o,{disabled:N,name:"name",error:ee.name&&J({id:ee.name}),label:J({id:"global.name",defaultMessage:"Name"}),onChange:te,onBlur:fe,value:L.name||""})),e.createElement(oe.P,{col:6},e.createElement(h.g,{disabled:N,label:J({id:"global.description",defaultMessage:"Description"}),id:"description",error:ee.name&&J({id:ee.name}),onChange:te,onBlur:fe},L.description||"")))))};q.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},q.propTypes={disabled:F().bool,errors:F().object.isRequired,onBlur:F().func.isRequired,onChange:F().func.isRequired,role:F().object,values:F().object};const re=q;var ge=r(87561);const ye=ge.Ry().shape({name:ge.Z_().required(b.I0.required)}),Ce=()=>{const N=(0,b.lm)(),{formatMessage:X}=(0,B.Z)(),{params:{id:L}}=(0,R.$B)("/settings/roles/:id"),[ee,te]=(0,e.useState)(!1),fe=(0,e.useRef)(),{lockApp:J,unlockApp:be}=(0,b.o1)(),{trackUsage:Ee}=(0,b.rS)(),{isLoading:Pe,data:ke}=(0,f.U_)(L),{role:he,permissions:Ie,isLoading:Ae,onSubmitSucceeded:Ze}=(0,f.Dq)(L),{put:De}=(0,b.kY)(),Be=async ie=>{try{J(),te(!0);const{permissionsToSend:V,didUpdateConditions:_}=fe.current.getPermissions();await De(`/admin/roles/${L}`,ie),he.code!=="strapi-super-admin"&&(await De(`/admin/roles/${L}/permissions`,{permissions:V}),_&&Ee("didUpdateConditions")),fe.current.setFormAfterSubmit(),Ze({name:ie.name,description:ie.description}),N({type:"success",message:{id:"notification.success.saved"}})}catch(V){console.error(V.response);const _=T()(V,"response.payload.message","An error occured"),le=T()(V,"response.payload.data.permissions[0]",_);N({type:"warning",message:le})}finally{te(!1),be()}},Fe=he.code==="strapi-super-admin";return e.createElement(I.o,null,e.createElement(b.SL,{name:"Roles"}),e.createElement(U.J9,{enableReinitialize:!0,initialValues:{name:he.name,description:he.description},onSubmit:Be,validationSchema:ye,validateOnChange:!1},({handleSubmit:ie,values:V,errors:_,handleChange:le,handleBlur:xe})=>e.createElement("form",{onSubmit:ie},e.createElement($.T,{primaryAction:e.createElement(P.k,{gap:2},e.createElement(A.z,{disabled:he.code==="strapi-super-admin",onClick:ie,loading:ee,size:"L"},X({id:"global.save",defaultMessage:"Save"}))),title:X({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:X({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(b.rU,{startIcon:e.createElement(a.Z,null),to:"/settings/roles"},X({id:"global.back",defaultMessage:"Back"}))}),e.createElement(j.D,null,e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(re,{isLoading:Ae,disabled:Fe,errors:_,values:V,onChange:le,onBlur:xe,role:he}),!Pe&&!Ae?e.createElement(G.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(C.Z,{isFormDisabled:Fe,permissions:Ie,ref:fe,layout:ke})):e.createElement(G.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(b.dO,null)))))))},z=()=>{const N=(0,e.useMemo)(()=>({read:x.Z.settings.roles.read,update:x.Z.settings.roles.update}),[]),{isLoading:X,allowedActions:{canRead:L,canUpdate:ee}}=(0,b.ss)(N);return X?e.createElement(b.dO,null):!L&&!ee?e.createElement(R.l_,{to:"/"}):e.createElement(Ce,null)}},44174:Y=>{function Z(r,e,b,R){for(var x=-1,I=r==null?0:r.length;++x<I;){var $=r[x];e(R,$,b($),r)}return R}Y.exports=Z},81119:(Y,Z,r)=>{var e=r(89881);function b(R,x,I,$){return e(R,function(P,A,j){x($,P,I(P),j)}),$}Y.exports=b},55189:(Y,Z,r)=>{var e=r(44174),b=r(81119),R=r(67206),x=r(1469);function I($,P){return function(A,j){var G=x(A)?e:b,a=P?P():{};return G(A,$,R(j,2),a)}}Y.exports=I},42348:(Y,Z,r)=>{var e=r(21078),b=1/0;function R(x){var I=x==null?0:x.length;return I?e(x,b):[]}Y.exports=R},7739:(Y,Z,r)=>{var e=r(89465),b=r(55189),R=Object.prototype,x=R.hasOwnProperty,I=b(function($,P,A){x.call($,A)?$[A].push(P):e($,A,[P])});Y.exports=I},48734:(Y,Z,r)=>{"use strict";r.d(Z,{U:()=>U,y:()=>G});var e=r(85893),b=r(67294),R=r(88972),x=r(13819),I=r(2504),$=r(75515),P=r(11047),A=r(41580);const j=({theme:p,expanded:T,variant:B,disabled:f,error:C})=>C?`1px solid ${p.colors.danger600} !important`:f?`1px solid ${p.colors.neutral150}`:T?`1px solid ${p.colors.primary600}`:B==="primary"?`1px solid ${p.colors.neutral0}`:`1px solid ${p.colors.neutral100}`,G=(0,R.ZP)($.Z)``,a=(0,R.ZP)(A.x)`
  border: ${j};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:p})=>p.colors.primary600};

    ${G} {
      color: ${({theme:p,expanded:T})=>T?void 0:p.colors.primary700};
    }

    ${$.Z} {
      color: ${({theme:p,expanded:T})=>T?void 0:p.colors.primary600};
    }

    & > ${P.k} {
      background: ${({theme:p})=>p.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:p})=>p.colors.primary200};
    }
  }
`,U=({children:p,disabled:T=!1,error:B,expanded:f=!1,hasErrorMessage:C=!0,id:w,onToggle:pe,toggle:oe,size:ce="M",variant:h="primary",shadow:de})=>{const F=(0,I.M)(w),q=b.useMemo(()=>({expanded:f,onToggle:pe,toggle:oe,id:F,size:ce,variant:h,disabled:T}),[T,f,F,pe,ce,oe,h]);return(0,e.jsxs)(x.S.Provider,{value:q,children:[(0,e.jsx)(a,{"data-strapi-expanded":f,disabled:T,"aria-disabled":T,expanded:f,hasRadius:!0,variant:h,error:B,shadow:de,children:p}),B&&C&&(0,e.jsx)(A.x,{paddingTop:1,children:(0,e.jsx)($.Z,{variant:"pi",textColor:"danger600",children:B})})]})}},63081:(Y,Z,r)=>{"use strict";r.d(Z,{v:()=>x});var e=r(85893),b=r(13819),R=r(41580);const x=({children:I,...$})=>{const{expanded:P,id:A}=(0,b.A)();if(!P)return null;const j=`accordion-content-${A}`,G=`accordion-label-${A}`,a=`accordion-desc-${A}`;return(0,e.jsx)(R.x,{role:"region",id:j,"aria-labelledby":G,"aria-describedby":a,...$,children:I})}},13819:(Y,Z,r)=>{"use strict";r.d(Z,{A:()=>R,S:()=>b});var e=r(67294);const b=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),R=()=>(0,e.useContext)(b)},74756:(Y,Z,r)=>{"use strict";r.d(Z,{B:()=>p});var e=r(85893),b=r(12645),R=r(88972),x=r(48734),I=r(13819);const $=({expanded:T,disabled:B,variant:f})=>{let C="neutral100";return T?C="primary100":B?C="neutral150":f==="primary"&&(C="neutral0"),C};var P=r(39785),A=r(52624),j=r(11047),G=r(75515);const a=(0,R.ZP)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:T,expanded:B})=>B?T.colors.primary600:T.colors.neutral500};
    }
  }
`,U=(0,R.ZP)(j.k)`
  min-height: ${({theme:T,size:B})=>T.sizes.accordions[B]};
  border-radius: ${({theme:T,expanded:B})=>B?`${T.borderRadius} ${T.borderRadius} 0 0`:T.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:T})=>T.colors.primary600};
      }
    }
  }
`,p=({title:T,description:B,as:f="span",togglePosition:C="right",action:w,...pe})=>{const{onToggle:oe,toggle:ce,expanded:h,id:de,size:F,variant:q,disabled:re}=(0,I.A)(),ge=`accordion-content-${de}`,$e=`accordion-label-${de}`,ye=`accordion-desc-${de}`,ae=F==="M"?6:4,Ce=F==="M"?ae:ae-2,Oe=$({expanded:h,disabled:re,variant:q}),z={as:f,fontWeight:F==="S"?"bold":void 0,id:$e,textColor:h?"primary600":"neutral700",ellipsis:!0,variant:F==="M"?"delta":void 0},N=h?"primary600":"neutral600",X=h?"primary200":"neutral200",L=F==="M"?`${32/16}rem`:`${24/16}rem`,ee=()=>{re||(ce&&!oe?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ce()):oe&&oe())},te=(0,e.jsx)(j.k,{justifyContent:"center",borderRadius:"50%",height:L,width:L,transform:h?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:X,cursor:re?"not-allowed":"pointer",onClick:ee,shrink:0,children:(0,e.jsx)(A.J,{as:b.Z,width:F==="M"?`${11/16}rem`:`${8/16}rem`,color:h?"primary600":"neutral600"})});return(0,e.jsx)(U,{paddingBottom:Ce,paddingLeft:ae,paddingRight:ae,paddingTop:Ce,background:Oe,expanded:h,size:F,justifyContent:"space-between",cursor:re?"not-allowed":"",children:(0,e.jsxs)(j.k,{gap:3,flex:1,maxWidth:"100%",children:[C==="left"&&te,(0,e.jsx)(a,{onClick:ee,"aria-disabled":re,"aria-expanded":h,"aria-controls":ge,"aria-labelledby":$e,"data-strapi-accordion-toggle":!0,expanded:h,type:"button",flex:1,minWidth:0,...pe,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.y,{...z,children:T}),B&&(0,e.jsx)(G.Z,{as:"p",id:ye,textColor:N,children:B})]})}),C==="right"&&(0,e.jsxs)(j.k,{gap:3,children:[te,w]}),C==="left"&&w]})})}},38953:(Y,Z,r)=>{"use strict";r.d(Z,{Q:()=>x});var e=r(85893),b=r(88972),R=r(67730);const x=({options:$,...P})=>(0,e.jsx)(R.NU,{...P,children:$.map(A=>"children"in A?(0,e.jsx)(R.Ab,{label:A.label,values:A.children.map(j=>j.value.toString()),children:A.children.map(j=>(0,e.jsx)(I,{value:j.value,children:j.label},j.value))},A.label):(0,e.jsx)(R.ML,{value:A.value,children:A.label},A.value))}),I=(0,b.ZP)(R.ML)`
  padding-left: ${({theme:$})=>$.spaces[7]};
`}}]);
