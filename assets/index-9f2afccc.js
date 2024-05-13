import{a7 as N,j as s,s as d,k as j,_ as n,bo as I,o as R,g as A,h as _,T as v,e as p,n as E,a4 as L,w as U,x as H,a as W,S as O}from"./index-22305d82.js";const q=N(s("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),V=["slots","slotProps"],D=d(j)(({theme:e})=>n({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":n({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":n({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:I(e.palette.grey[200],.12)}:{backgroundColor:I(e.palette.grey[600],.12)})})),F=d(q)({width:24,height:16});function G(e){const{slots:r={},slotProps:a={}}=e,l=R(e,V),t=e;return s("li",{children:s(D,n({focusRipple:!0},l,{ownerState:t,children:s(F,n({as:r.CollapsedIcon,ownerState:t},a.collapsedIcon))}))})}function J(e){return _("MuiBreadcrumbs",e)}const K=A("MuiBreadcrumbs",["root","ol","li","separator"]),Q=K,X=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Y=e=>{const{classes:r}=e;return H({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},J,r)},Z=d(v,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Q.li}`]:r.li},r.root]})({}),ee=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function oe(e,r,a,l){return e.reduce((t,u,c)=>(c<e.length-1?t=t.concat(u,s(re,{"aria-hidden":!0,className:r,ownerState:l,children:a},`separator-${c}`)):t.push(u),t),[])}const se=p.forwardRef(function(r,a){const l=E({props:r,name:"MuiBreadcrumbs"}),{children:t,className:u,component:c="nav",slots:x={},slotProps:k={},expandText:y="Show path",itemsAfterCollapse:g=1,itemsBeforeCollapse:f=1,maxItems:b=8,separator:B="/"}=l,M=R(l,X),[S,T]=p.useState(!1),i=n({},l,{component:c,expanded:S,expandText:y,itemsAfterCollapse:g,itemsBeforeCollapse:f,maxItems:b,separator:B}),m=Y(i),$=L({elementType:x.CollapsedIcon,externalSlotProps:k.collapsedIcon,ownerState:i}),w=p.useRef(null),z=o=>{const C=()=>{T(!0);const P=w.current.querySelector("a[href],button,[tabindex]");P&&P.focus()};return f+g>=o.length?o:[...o.slice(0,f),s(G,{"aria-label":y,slots:{CollapsedIcon:x.CollapsedIcon},slotProps:{collapsedIcon:$},onClick:C},"ellipsis"),...o.slice(o.length-g,o.length)]},h=p.Children.toArray(t).filter(o=>p.isValidElement(o)).map((o,C)=>s("li",{className:m.li,children:o},`child-${C}`));return s(Z,n({ref:a,component:c,color:"text.secondary",className:U(m.root,u),ownerState:i},M,{children:s(ee,{className:m.ol,ref:w,ownerState:i,children:oe(S||b&&h.length<=b?h:z(h),m.separator,B,i)})}))}),ae=se;function le({children:e,title:r,sx:a={}}){return W(O,{component:"header",my:3,direction:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",textTransform:"uppercase",sx:a,children:[s(v,{variant:"h5",fontSize:18,textTransform:"inherit",borderLeft:5,borderColor:"primary.400",pl:1.5,height:"fit-content",children:r}),e]})}export{ae as B,le as P};
