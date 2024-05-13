import{o as fe,e as d,a2 as qe,a3 as ht,j as o,_ as u,g as Pe,h as He,s as q,k as mt,n as Le,u as Ae,a4 as Fe,w as k,x as Ve,a5 as Xe,a as c,a6 as It,a1 as _e,G as le,S as N,T as y,L as Ye,a7 as bt,a8 as Tt,a9 as $t,aa as vt,ab as Ft,ac as Et,t as Pt,r as xe,i as Ce,b as we,d as Ht,F as Ke,B as Se,ad as Lt,C as At,D as Ee,c as it}from"./index-22305d82.js";import{C as Je}from"./index-c5320ac4.js";import{_ as gt,g as yt}from"./getDefaultChartsColors-5843b21a.js";import{K as Vt,a as _t}from"./KeyboardArrowRight-9c5cb9e3.js";import"./index-4d501b15.js";let pe;function St(){if(pe)return pe;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),pe="reverse",e.scrollLeft>0?pe="default":(e.scrollLeft=1,e.scrollLeft===0&&(pe="negative")),document.body.removeChild(e),pe}function at(e,t){const n=e.scrollLeft;if(t!=="rtl")return n;switch(St()){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}function kt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Nt(e,t,n,i={},s=()=>{}){const{ease:a=kt,duration:h=300}=i;let b=null;const m=t[e];let w=!1;const A=()=>{w=!0},S=R=>{if(w){s(new Error("Animation cancelled"));return}b===null&&(b=R);const x=Math.min(1,(R-b)/h);if(t[e]=a(x)*(n-m)+m,x>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(S)};return m===n?(s(new Error("Element already at target position")),A):(requestAnimationFrame(S),A)}const Wt=["onChange"],Dt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Ot(e){const{onChange:t}=e,n=fe(e,Wt),i=d.useRef(),s=d.useRef(null),a=()=>{i.current=s.current.offsetHeight-s.current.clientHeight};return d.useEffect(()=>{const h=qe(()=>{const m=i.current;a(),m!==i.current&&t(i.current)}),b=ht(s.current);return b.addEventListener("resize",h),()=>{h.clear(),b.removeEventListener("resize",h)}},[t]),d.useEffect(()=>{a(),t(i.current)},[t]),o("div",u({style:Dt,ref:s},n))}function jt(e){return He("MuiTabScrollButton",e)}const Xt=Pe("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Ut=Xt,Gt=["className","slots","slotProps","direction","orientation","disabled"],qt=e=>{const{classes:t,orientation:n,disabled:i}=e;return Ve({root:["root",n,i&&"disabled"]},jt,t)},Yt=q(mt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.orientation&&t[n.orientation]]}})(({ownerState:e})=>u({width:40,flexShrink:0,opacity:.8,[`&.${Ut.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Kt=d.forwardRef(function(t,n){var i,s;const a=Le({props:t,name:"MuiTabScrollButton"}),{className:h,slots:b={},slotProps:m={},direction:w}=a,A=fe(a,Gt),R=Ae().direction==="rtl",x=u({isRtl:R},a),Y=qt(x),M=(i=b.StartScrollButtonIcon)!=null?i:Vt,C=(s=b.EndScrollButtonIcon)!=null?s:_t,W=Fe({elementType:M,externalSlotProps:m.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x}),H=Fe({elementType:C,externalSlotProps:m.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x});return o(Yt,u({component:"div",className:k(Y.root,h),ref:n,role:null,ownerState:x,tabIndex:null},A,{children:w==="left"?o(M,u({},W)):o(C,u({},H))}))}),Jt=Kt;function Qt(e){return He("MuiTabs",e)}const Zt=Pe("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Ue=Zt,eo=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],st=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,ct=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,Te=(e,t,n)=>{let i=!1,s=n(e,t);for(;s;){if(s===e.firstChild){if(i)return;i=!0}const a=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||a)s=n(e,s);else{s.focus();return}}},to=e=>{const{vertical:t,fixed:n,hideScrollbar:i,scrollableX:s,scrollableY:a,centered:h,scrollButtonsHideMobile:b,classes:m}=e;return Ve({root:["root",t&&"vertical"],scroller:["scroller",n&&"fixed",i&&"hideScrollbar",s&&"scrollableX",a&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},Qt,m)},oo=q("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Ue.scrollButtons}`]:t.scrollButtons},{[`& .${Ue.scrollButtons}`]:n.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,n.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>u({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${Ue.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),no=q("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.scroller,n.fixed&&t.fixed,n.hideScrollbar&&t.hideScrollbar,n.scrollableX&&t.scrollableX,n.scrollableY&&t.scrollableY]}})(({ownerState:e})=>u({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),ro=q("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.flexContainer,n.vertical&&t.flexContainerVertical,n.centered&&t.centered]}})(({ownerState:e})=>u({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),lo=q("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>u({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),io=q(Ot,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),dt={},ao=d.forwardRef(function(t,n){const i=Le({props:t,name:"MuiTabs"}),s=Ae(),a=s.direction==="rtl",{"aria-label":h,"aria-labelledby":b,action:m,centered:w=!1,children:A,className:S,component:R="div",allowScrollButtonsMobile:x=!1,indicatorColor:Y="primary",onChange:M,orientation:C="horizontal",ScrollButtonComponent:W=Jt,scrollButtons:H="auto",selectionFollowsFocus:B,slots:T={},slotProps:Q={},TabIndicatorProps:V={},TabScrollButtonProps:_={},textColor:D="primary",value:K,variant:E="standard",visibleScrollbar:O=!1}=i,ke=fe(i,eo),z=E==="scrollable",I=C==="vertical",j=I?"scrollTop":"scrollLeft",X=I?"top":"left",ie=I?"bottom":"right",he=I?"clientHeight":"clientWidth",ae=I?"height":"width",Z=u({},i,{component:R,allowScrollButtonsMobile:x,indicatorColor:Y,orientation:C,vertical:I,scrollButtons:H,textColor:D,variant:E,visibleScrollbar:O,fixed:!z,hideScrollbar:z&&!O,scrollableX:z&&!I,scrollableY:z&&I,centered:w&&!z,scrollButtonsHideMobile:!x}),J=to(Z),me=Fe({elementType:T.StartScrollButtonIcon,externalSlotProps:Q.startScrollButtonIcon,ownerState:Z}),Re=Fe({elementType:T.EndScrollButtonIcon,externalSlotProps:Q.endScrollButtonIcon,ownerState:Z}),[ze,Ne]=d.useState(!1),[ee,be]=d.useState(dt),[ne,We]=d.useState({start:!1,end:!1}),[Me,De]=d.useState({overflow:"hidden",scrollbarWidth:0}),ve=new Map,$=d.useRef(null),L=d.useRef(null),v=()=>{const r=$.current;let l;if(r){const f=r.getBoundingClientRect();l={clientWidth:r.clientWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollLeftNormalized:at(r,s.direction),scrollWidth:r.scrollWidth,top:f.top,bottom:f.bottom,left:f.left,right:f.right}}let p;if(r&&K!==!1){const f=L.current.children;if(f.length>0){const F=f[ve.get(K)];p=F?F.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:p}},g=Xe(()=>{const{tabsMeta:r,tabMeta:l}=v();let p=0,f;if(I)f="top",l&&r&&(p=l.top-r.top+r.scrollTop);else if(f=a?"right":"left",l&&r){const G=a?r.scrollLeftNormalized+r.clientWidth-r.scrollWidth:r.scrollLeft;p=(a?-1:1)*(l[f]-r[f]+G)}const F={[f]:p,[ae]:l?l[ae]:0};if(isNaN(ee[f])||isNaN(ee[ae]))be(F);else{const G=Math.abs(ee[f]-F[f]),ue=Math.abs(ee[ae]-F[ae]);(G>=1||ue>=1)&&be(F)}}),P=(r,{animation:l=!0}={})=>{l?Nt(j,$.current,r,{duration:s.transitions.duration.standard}):$.current[j]=r},se=r=>{let l=$.current[j];I?l+=r:(l+=r*(a?-1:1),l*=a&&St()==="reverse"?-1:1),P(l)},te=()=>{const r=$.current[he];let l=0;const p=Array.from(L.current.children);for(let f=0;f<p.length;f+=1){const F=p[f];if(l+F[he]>r){f===0&&(l=r);break}l+=F[he]}return l},re=()=>{se(-1*te())},U=()=>{se(te())},oe=d.useCallback(r=>{De({overflow:null,scrollbarWidth:r})},[]),ge=()=>{const r={};r.scrollbarSizeListener=z?o(io,{onChange:oe,className:k(J.scrollableX,J.hideScrollbar)}):null;const l=ne.start||ne.end,p=z&&(H==="auto"&&l||H===!0);return r.scrollButtonStart=p?o(W,u({slots:{StartScrollButtonIcon:T.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:me},orientation:C,direction:a?"right":"left",onClick:re,disabled:!ne.start},_,{className:k(J.scrollButtons,_.className)})):null,r.scrollButtonEnd=p?o(W,u({slots:{EndScrollButtonIcon:T.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Re},orientation:C,direction:a?"left":"right",onClick:U,disabled:!ne.end},_,{className:k(J.scrollButtons,_.className)})):null,r},rt=Xe(r=>{const{tabsMeta:l,tabMeta:p}=v();if(!(!p||!l)){if(p[X]<l[X]){const f=l[j]+(p[X]-l[X]);P(f,{animation:r})}else if(p[ie]>l[ie]){const f=l[j]+(p[ie]-l[ie]);P(f,{animation:r})}}}),ce=Xe(()=>{if(z&&H!==!1){const{scrollTop:r,scrollHeight:l,clientHeight:p,scrollWidth:f,clientWidth:F}=$.current;let G,ue;if(I)G=r>1,ue=r<l-p-1;else{const Ie=at($.current,s.direction);G=a?Ie<f-F-1:Ie>1,ue=a?Ie>1:Ie<f-F-1}(G!==ne.start||ue!==ne.end)&&We({start:G,end:ue})}});d.useEffect(()=>{const r=qe(()=>{$.current&&(g(),ce())}),l=ht($.current);l.addEventListener("resize",r);let p;return typeof ResizeObserver<"u"&&(p=new ResizeObserver(r),Array.from(L.current.children).forEach(f=>{p.observe(f)})),()=>{r.clear(),l.removeEventListener("resize",r),p&&p.disconnect()}},[g,ce]);const Oe=d.useMemo(()=>qe(()=>{ce()}),[ce]);d.useEffect(()=>()=>{Oe.clear()},[Oe]),d.useEffect(()=>{Ne(!0)},[]),d.useEffect(()=>{g(),ce()}),d.useEffect(()=>{rt(dt!==ee)},[rt,ee]),d.useImperativeHandle(m,()=>({updateIndicator:g,updateScrollButtons:ce}),[g,ce]);const lt=o(lo,u({},V,{className:k(J.indicator,V.className),ownerState:Z,style:u({},ee,V.style)}));let Be=0;const Mt=d.Children.map(A,r=>{if(!d.isValidElement(r))return null;const l=r.props.value===void 0?Be:r.props.value;ve.set(l,Be);const p=l===K;return Be+=1,d.cloneElement(r,u({fullWidth:E==="fullWidth",indicator:p&&!ze&&lt,selected:p,selectionFollowsFocus:B,onChange:M,textColor:D,value:l},Be===1&&K===!1&&!r.props.tabIndex?{tabIndex:0}:{}))}),Bt=r=>{const l=L.current,p=It(l).activeElement;if(p.getAttribute("role")!=="tab")return;let F=C==="horizontal"?"ArrowLeft":"ArrowUp",G=C==="horizontal"?"ArrowRight":"ArrowDown";switch(C==="horizontal"&&a&&(F="ArrowRight",G="ArrowLeft"),r.key){case F:r.preventDefault(),Te(l,p,ct);break;case G:r.preventDefault(),Te(l,p,st);break;case"Home":r.preventDefault(),Te(l,null,st);break;case"End":r.preventDefault(),Te(l,null,ct);break}},je=ge();return c(oo,u({className:k(J.root,S),ownerState:Z,ref:n,as:R},ke,{children:[je.scrollButtonStart,je.scrollbarSizeListener,c(no,{className:J.scroller,ownerState:Z,style:{overflow:Me.overflow,[I?`margin${a?"Left":"Right"}`:"marginBottom"]:O?void 0:-Me.scrollbarWidth},ref:$,onScroll:Oe,children:[o(ro,{"aria-label":h,"aria-labelledby":b,"aria-orientation":C==="vertical"?"vertical":null,className:J.flexContainer,ownerState:Z,onKeyDown:Bt,ref:L,role:"tablist",children:Mt}),ze&&lt]}),je.scrollButtonEnd]}))}),so=ao;function co(e){return He("MuiTab",e)}const uo=Pe("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),de=uo,po=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],fo=e=>{const{classes:t,textColor:n,fullWidth:i,wrapped:s,icon:a,label:h,selected:b,disabled:m}=e,w={root:["root",a&&h&&"labelIcon",`textColor${_e(n)}`,i&&"fullWidth",s&&"wrapped",b&&"selected",m&&"disabled"],iconWrapper:["iconWrapper"]};return Ve(w,co,t)},ho=q(mt,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.label&&n.icon&&t.labelIcon,t[`textColor${_e(n.textColor)}`],n.fullWidth&&t.fullWidth,n.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>u({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${de.iconWrapper}`]:u({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${de.selected}`]:{opacity:1},[`&.${de.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${de.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${de.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${de.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${de.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),mo=d.forwardRef(function(t,n){const i=Le({props:t,name:"MuiTab"}),{className:s,disabled:a=!1,disableFocusRipple:h=!1,fullWidth:b,icon:m,iconPosition:w="top",indicator:A,label:S,onChange:R,onClick:x,onFocus:Y,selected:M,selectionFollowsFocus:C,textColor:W="inherit",value:H,wrapped:B=!1}=i,T=fe(i,po),Q=u({},i,{disabled:a,disableFocusRipple:h,selected:M,icon:!!m,iconPosition:w,label:!!S,fullWidth:b,textColor:W,wrapped:B}),V=fo(Q),_=m&&S&&d.isValidElement(m)?d.cloneElement(m,{className:k(V.iconWrapper,m.props.className)}):m,D=E=>{!M&&R&&R(E,H),x&&x(E)},K=E=>{C&&!M&&R&&R(E,H),Y&&Y(E)};return c(ho,u({focusRipple:!h,className:k(V.root,s),ref:n,role:"tab","aria-selected":M,disabled:a,onClick:D,onFocus:K,ownerState:Q,tabIndex:M?0:-1},T,{children:[w==="top"||w==="start"?c(d.Fragment,{children:[_,S]}):c(d.Fragment,{children:[S,_]}),A]}))}),$e=mo;function bo(){return o("section",{children:c(le,{container:!0,spacing:2,children:[o(le,{item:!0,xs:12,sm:12,md:4,children:c(N,{spacing:2,height:"100%",justifyContent:"center",children:[o(y,{variant:"subtitle1",fontSize:65,children:"34,100"}),o(y,{variant:"subtitle1",children:"Total hours spent (7 days)"}),o(y,{variant:"body2",color:"text.tertiary",children:"Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem"}),c(N,{direction:"row",spacing:3,children:[o(Ye,{href:"#!",underline:"none",children:"View Details"}),o(Ye,{href:"#!",underline:"none",children:"Edit Settings"})]})]})}),o(le,{item:!0,xs:12,sm:12,md:8,children:o(vo,{})})]})})}const ut=e=>({options:{colors:yt(5),chart:{...(e==null?void 0:e.mode)==="dark"&&{foreColor:"#fff"},toolbar:{show:!0},zoom:{enabled:!0}},...(e==null?void 0:e.mode)==="dark"&&{tooltip:{theme:"dark"}},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},yaxis:{seriesName:"hours cuantity",min:0,max:80,tickAmount:8},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},series:[{name:"Hours",data:[12,39,20,10,25,18,12,39,20,10,25,18]}]});function vo(){var t,n;const e=Ae();return o(gt,{options:(t=ut({mode:e.palette.mode}))==null?void 0:t.options,series:(n=ut())==null?void 0:n.series,type:"bar",width:"100%"})}const go=bt(o("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),yo=bt(o("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function So(e){return He("MuiRating",e)}const xo=Pe("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),ye=xo,Co=["value"],wo=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Ro(e,t,n){return e<t?t:e>n?n:e}function zo(e){const t=e.toString().split(".")[1];return t?t.length:0}function Ge(e,t){if(e==null)return e;const n=Math.round(e/t)*t;return Number(n.toFixed(zo(t)))}const Mo=e=>{const{classes:t,size:n,readOnly:i,disabled:s,emptyValueFocused:a,focusVisible:h}=e,b={root:["root",`size${_e(n)}`,s&&"disabled",h&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[a&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ve(b,So,t)},Bo=q("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${ye.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${_e(n.size)}`],n.readOnly&&t.readOnly]}})(({theme:e,ownerState:t})=>u({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${ye.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${ye.focusVisible} .${ye.iconActive}`]:{outline:"1px solid #999"},[`& .${ye.visuallyHidden}`]:Tt},t.size==="small"&&{fontSize:e.typography.pxToRem(18)},t.size==="large"&&{fontSize:e.typography.pxToRem(30)},t.readOnly&&{pointerEvents:"none"})),xt=q("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})(({ownerState:e})=>u({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Io=q("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.iconEmpty&&t.iconEmpty,n.iconFilled&&t.iconFilled,n.iconHover&&t.iconHover,n.iconFocus&&t.iconFocus,n.iconActive&&t.iconActive]}})(({theme:e,ownerState:t})=>u({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),To=q("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>$t(e)&&e!=="iconActive",overridesResolver:(e,t)=>{const{iconActive:n}=e;return[t.decimal,n&&t.iconActive]}})(({iconActive:e})=>u({position:"relative"},e&&{transform:"scale(1.2)"}));function $o(e){const t=fe(e,Co);return o("span",u({},t))}function pt(e){const{classes:t,disabled:n,emptyIcon:i,focus:s,getLabelText:a,highlightSelectedOnly:h,hover:b,icon:m,IconContainerComponent:w,isActive:A,itemValue:S,labelProps:R,name:x,onBlur:Y,onChange:M,onClick:C,onFocus:W,readOnly:H,ownerState:B,ratingValue:T,ratingValueRounded:Q}=e,V=h?S===T:S<=T,_=S<=b,D=S<=s,K=S===Q,E=vt(),O=o(Io,{as:w,value:S,className:k(t.icon,V?t.iconFilled:t.iconEmpty,_&&t.iconHover,D&&t.iconFocus,A&&t.iconActive),ownerState:u({},B,{iconEmpty:!V,iconFilled:V,iconHover:_,iconFocus:D,iconActive:A}),children:i&&!V?i:m});return H?o("span",u({},R,{children:O})):c(d.Fragment,{children:[c(xt,u({ownerState:u({},B,{emptyValueFocused:void 0}),htmlFor:E},R,{children:[O,o("span",{className:t.visuallyHidden,children:a(S)})]})),o("input",{className:t.visuallyHidden,onFocus:W,onBlur:Y,onChange:M,onClick:C,disabled:n,value:S,id:E,type:"radio",name:x,checked:K})]})}const Fo=o(go,{fontSize:"inherit"}),Eo=o(yo,{fontSize:"inherit"});function Po(e){return`${e} Star${e!==1?"s":""}`}const Ho=d.forwardRef(function(t,n){const i=Le({name:"MuiRating",props:t}),{className:s,defaultValue:a=null,disabled:h=!1,emptyIcon:b=Eo,emptyLabelText:m="Empty",getLabelText:w=Po,highlightSelectedOnly:A=!1,icon:S=Fo,IconContainerComponent:R=$o,max:x=5,name:Y,onChange:M,onChangeActive:C,onMouseLeave:W,onMouseMove:H,precision:B=1,readOnly:T=!1,size:Q="medium",value:V}=i,_=fe(i,wo),D=vt(Y),[K,E]=Ft({controlled:V,default:a,name:"Rating"}),O=Ge(K,B),ke=Ae(),[{hover:z,focus:I},j]=d.useState({hover:-1,focus:-1});let X=O;z!==-1&&(X=z),I!==-1&&(X=I);const{isFocusVisibleRef:ie,onBlur:he,onFocus:ae,ref:Z}=Et(),[J,me]=d.useState(!1),Re=d.useRef(),ze=Pt(Z,Re,n),Ne=v=>{H&&H(v);const g=Re.current,{right:P,left:se}=g.getBoundingClientRect(),{width:te}=g.firstChild.getBoundingClientRect();let re;ke.direction==="rtl"?re=(P-v.clientX)/(te*x):re=(v.clientX-se)/(te*x);let U=Ge(x*re+B/2,B);U=Ro(U,B,x),j(oe=>oe.hover===U&&oe.focus===U?oe:{hover:U,focus:U}),me(!1),C&&z!==U&&C(v,U)},ee=v=>{W&&W(v);const g=-1;j({hover:g,focus:g}),C&&z!==g&&C(v,g)},be=v=>{let g=v.target.value===""?null:parseFloat(v.target.value);z!==-1&&(g=z),E(g),M&&M(v,g)},ne=v=>{v.clientX===0&&v.clientY===0||(j({hover:-1,focus:-1}),E(null),M&&parseFloat(v.target.value)===O&&M(v,null))},We=v=>{ae(v),ie.current===!0&&me(!0);const g=parseFloat(v.target.value);j(P=>({hover:P.hover,focus:g}))},Me=v=>{if(z!==-1)return;he(v),ie.current===!1&&me(!1);const g=-1;j(P=>({hover:P.hover,focus:g}))},[De,ve]=d.useState(!1),$=u({},i,{defaultValue:a,disabled:h,emptyIcon:b,emptyLabelText:m,emptyValueFocused:De,focusVisible:J,getLabelText:w,icon:S,IconContainerComponent:R,max:x,precision:B,readOnly:T,size:Q}),L=Mo($);return c(Bo,u({ref:ze,onMouseMove:Ne,onMouseLeave:ee,className:k(L.root,s,T&&"MuiRating-readOnly"),ownerState:$,role:T?"img":null,"aria-label":T?w(X):null},_,{children:[Array.from(new Array(x)).map((v,g)=>{const P=g+1,se={classes:L,disabled:h,emptyIcon:b,focus:I,getLabelText:w,highlightSelectedOnly:A,hover:z,icon:S,IconContainerComponent:R,name:D,onBlur:Me,onChange:be,onClick:ne,onFocus:We,ratingValue:X,ratingValueRounded:O,readOnly:T,ownerState:$},te=P===Math.ceil(X)&&(z!==-1||I!==-1);if(B<1){const re=Array.from(new Array(1/B));return o(To,{className:k(L.decimal,te&&L.iconActive),ownerState:$,iconActive:te,children:re.map((U,oe)=>{const ge=Ge(P-1+(oe+1)*B,B);return o(pt,u({},se,{isActive:!1,itemValue:ge,labelProps:{style:re.length-1===oe?{}:{width:ge===X?`${(oe+1)*B*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),ge)})},P)}return o(pt,u({},se,{isActive:te,itemValue:P}),P)}),!T&&!h&&c(xt,{className:k(L.label,L.labelEmptyValue),ownerState:$,children:[o("input",{className:L.visuallyHidden,value:"",id:`${D}-empty`,type:"radio",name:D,checked:O==null,onFocus:()=>ve(!0),onBlur:()=>ve(!1),onChange:be}),o("span",{className:L.visuallyHidden,children:m})]})]}))}),Lo=Ho;var Qe={},Ao=Ce;Object.defineProperty(Qe,"__esModule",{value:!0});var Ze=Qe.default=void 0,Vo=Ao(xe()),_o=we,ko=(0,Vo.default)((0,_o.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonthOutlined");Ze=Qe.default=ko;var et={},No=Ce;Object.defineProperty(et,"__esModule",{value:!0});var Ct=et.default=void 0,Wo=No(xe()),Do=we,Oo=(0,Wo.default)((0,Do.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");Ct=et.default=Oo;var tt={},jo=Ce;Object.defineProperty(tt,"__esModule",{value:!0});var wt=tt.default=void 0,Xo=jo(xe()),Uo=we,Go=(0,Xo.default)((0,Uo.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"}),"AccessTimeOutlined");wt=tt.default=Go;var ot={},qo=Ce;Object.defineProperty(ot,"__esModule",{value:!0});var Rt=ot.default=void 0,Yo=qo(xe()),Ko=we,Jo=(0,Yo.default)((0,Ko.jsx)("path",{d:"M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"AccessibilityNew");Rt=ot.default=Jo;var nt={},Qo=Ce;Object.defineProperty(nt,"__esModule",{value:!0});var zt=nt.default=void 0,Zo=Qo(xe()),en=we,tn=(0,Zo.default)((0,en.jsx)("path",{d:"M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"}),"Inventory2");zt=nt.default=tn;const on=[{total:420,type:"employee",Icon:Rt,series:[{name:"Female",percentage:66,color:"cuaternary"},{name:"Male",percentage:34,color:"error"}]},{total:55,type:"products",Icon:zt,series:[{name:"Digital products",percentage:85,color:"warning"},{name:"Non-digital products",percentage:15,color:"success"}]},{total:30,type:"franchise",Icon:Ct,series:[{name:"Local",percentage:75,color:"tertiary"},{name:"International",percentage:25,color:"secondary"}]}];function nn(){return c("section",{children:[o(an,{}),c(le,{container:!0,columns:{xs:12,md:13},sx:{borderRadius:1,overflow:"hidden",bgcolor:"background.paper",boxShadow:26,"--Grid-borderWidth":"1px",borderTop:"var(--Grid-borderWidth) solid",borderLeft:"var(--Grid-borderWidth) solid",borderColor:"border","& > div":{borderRight:"var(--Grid-borderWidth) solid",borderBottom:"var(--Grid-borderWidth) solid",borderColor:"border"}},children:[on.map((e,t)=>o(le,{item:!0,xs:12,sm:6,md:3,children:o(rn,{report:e})},t)),o(le,{item:!0,xs:12,sm:6,md:4,children:o(ln,{})})]})]})}function rn({report:e}){const{total:t,type:n,Icon:i,series:s}=e;return c(N,{direction:"column",height:"100%",spacing:2,p:3,justifyContent:"center",alignItems:"center",children:[o(y,{variant:"subtitle1",fontSize:65,lineHeight:1,children:t}),c(y,{variant:"subtitle2",textTransform:"uppercase",color:"text.tertiary",pb:3,children:["Total ",n]}),o(Lo,{name:"read-only",value:Math.floor(Math.random()*(8-1)+1),readOnly:!0,max:8,size:"medium",icon:o(i,{fontSize:"inherit",color:"action"}),emptyIcon:o(i,{fontSize:"inherit",color:"disabled"})}),s.map(({percentage:a,name:h,color:b},m)=>c("div",{style:{width:"100%"},children:[c(y,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:[h," ",a,"%"]}),o(Ht,{variant:"determinate",color:b,value:a,sx:{height:5,backgroundColor:"background.default"}})]},m))]})}const ft={options:{fill:{opacity:0,type:"solid"},chart:{toolbar:{show:!1},sparkline:{enabled:!0},parentHeightOffset:0},stroke:{width:2,colors:yt(3)},markers:{size:0},grid:{show:!1},xaxis:{show:!1},tooltip:{enabled:!1},yaxis:{show:!1}},series:[{name:"series-1",data:[5,7,10,11,12,10,9,7,6,8,9,10,7,10]}]};function ln(){return c(N,{direction:"column",spacing:1,p:3,children:[o(y,{variant:"h5",fontSize:20,children:"Monthly Revenue"}),o(y,{variant:"body2",color:"text.secondary",children:"Monthly Revenue"}),c(y,{variant:"subtitle1",fontSize:35,children:["$32,500",o(y,{variant:"caption",color:"success.main",children:"1.4% up"})]}),o(gt,{options:ft.options,series:ft.series,type:"area",width:"100%",height:"30%"}),c(y,{variant:"body1",color:"text.secondary",align:"center",children:["Last month:  ",o(y,{variant:"body2",component:"span",children:"$79,554"})]})]})}function an(){return o(Je,{size:"large",title:"Overall Report Summary",subtitle:c(Ke,{children:[o(Ze,{fontSize:"small"})," January 01, 2023 - January 31, 2023"]}),children:c(N,{direction:"row",alignItems:"center",spacing:1,children:[o(Se,{variant:"contained",size:"medium",color:"primary",startIcon:o(wt,{}),children:"Activity logs"}),o(Se,{variant:"contained",size:"medium",color:"primary",startIcon:o(Lt,{}),children:"Edit Settings"})]})})}const sn=[{id:"PD-1754",name:"US 360 Home Security IP Camera Night",earnings:1885,expenses:"12,056"},{id:"PD-1753",name:"US KS-5 Junior Lite DVD Karaoke 9500",earnings:1862,expenses:"13,113"},{id:"PD-1752",name:"US 360 Home Security IP Camera Night",earnings:1799,expenses:"11,091"}];function cn(){return c("section",{children:[o(un,{}),o(le,{container:!0,spacing:2,children:sn.map(e=>o(le,{item:!0,xs:12,sm:6,md:4,children:o(dn,{product:e})},e.id))})]})}function dn({product:e}){const{id:t,name:n,earnings:i,expenses:s}=e;return o(At,{children:c(N,{children:[c(y,{variant:"caption",children:["Product ID: #",t]}),c(y,{variant:"subtitle1",children:[n," "]}),c(y,{variant:"caption",children:["By:",o(Ye,{href:"!#",underline:"none",children:" AY Dev Company"})]}),c(N,{mt:2,divider:o(Ee,{orientation:"vertical",flexItem:!0}),direction:"row",spacing:2,children:[c("div",{children:[o(y,{variant:"subtitle1",fontSize:30,children:i}),o(y,{variant:"body2",color:"text.secondary",children:"Earnings for today"})]}),c("div",{children:[c(y,{variant:"subtitle1",fontSize:30,children:["$",s]}),o(y,{variant:"body2",color:"text.secondary",children:"Expenses for today"})]})]})]})})}function un(){return o(Je,{size:"large",title:"Most Popular Products",subtitle:c(Ke,{children:[o(Ze,{fontSize:"small"})," January 01, 2023 - January 31, 2023"]}),children:c(N,{direction:"row",alignItems:"center",spacing:1,children:[o(Se,{variant:"contained",size:"medium",color:"primary",children:"Top Rated Products"}),o(Se,{variant:"contained",size:"medium",color:"primary",children:"View All Products"})]})})}function yn(){return c(Ke,{children:[o(pn,{}),o(fn,{}),o(bo,{}),o(Ee,{sx:{my:8}}),o(nn,{}),o(Ee,{sx:{my:8}}),o(cn,{})]})}function pn(){return o(Je,{sx:{mt:4},size:"large",title:"Good morning, Katherine!",subtitle:`Today is ${new Date().toLocaleDateString("default",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}`,children:c(N,{pt:{xs:5,sm:0},divider:o(Ee,{orientation:"vertical",flexItem:!0}),direction:"row",alignItems:"center",spacing:3,children:[c(N,{direction:"row",spacing:2,alignItems:"center",children:[o(y,{variant:"subtitle1",fontSize:35,display:"inline",children:"$1,433"}),c(y,{variant:"caption",textTransform:"uppercase",children:["Earnings ",o("br",{}),"for today"]})]}),c(N,{direction:"row",spacing:2,alignItems:"center",children:[o(y,{variant:"subtitle1",fontSize:35,display:"inline",children:"$296"}),c(y,{variant:"caption",textTransform:"uppercase",children:["Expenses ",o("br",{}),"for today"]})]})]})})}function fn(){const[e,t]=d.useState(0),[n,i]=d.useState("Today");return o(it,{sx:{borderBottom:1,borderColor:"divider"},children:c(so,{value:e,onChange:(a,h)=>{t(h)},variant:"scrollable","aria-label":"grap type",scrollButtons:"auto",allowScrollButtonsMobile:!0,children:[o($e,{label:"Overview"}),o($e,{label:"Employee"}),o($e,{label:"Products"}),o($e,{label:"Misc"}),o(it,{flexGrow:1}),o(N,{direction:"row",alignItems:"center",spacing:0,children:["Today","This Week","This Month"].map((a,h)=>o(Se,{size:"small",onClick:()=>i(a),variant:n===a?"outlined":"text",sx:{color:n===a?"primary.main":"text.secondary"},children:a},h))})]})})}export{yn as default};
