import{e as I,a as i,F as l,j as e,L as o,T as d,G as c,C as s,bh as g,am as m,bi as u,bf as h}from"./index-22305d82.js";import{P as p,B as x}from"./index-9f2afccc.js";import{C as f}from"./index-c5320ac4.js";import{c as T}from"./layoutHeight-dd8f1718.js";import{d as y,a as v,b as L}from"./HandshakeOutlined-ca85f267.js";const P=[{id:1,Icon:h,text:"Seccion 1 ..."},{id:2,Icon:y,text:"Sección 2 lorem"},{id:3,Icon:v,text:"Sección 3 lorem"},{id:4,Icon:L,text:"Sección 4 lorem"}];function C(){const[t,a]=I.useState(1);return i(l,{children:[e(p,{title:"Sample Tabs Page",children:i(x,{"aria-label":"breadcrumb",sx:{textTransform:"uppercase"},children:[e(o,{underline:"hover",href:"#!",children:"Inicio"}),e(d,{color:"text.tertiary",children:"Sample Tab Page"})]})}),i(c,{container:!0,spacing:4,children:[e(c,{item:!0,xs:12,sm:4,md:3,children:e(s,{sx:{position:"sticky",top:`${T("nav",!1)+30}px`},component:"aside",children:i(g,{sx:{"& .MuiMenuItem-root":{borderRadius:2}},children:[P.map(({id:n,Icon:b,text:S})=>e(H,{text:S,Icon:b,onClick:()=>a(n),selected:t===n},n)),i(m,{component:o,href:"#!",children:[e(u,{children:e(h,{fontSize:"medium"})}),"Link"]})]})})}),i(c,{item:!0,xs:12,sm:8,md:9,children:[t===1&&e(r,{text:t}),t===2&&e(r,{text:t}),t===3&&e(r,{text:t}),t===4&&e(r,{text:t})]})]})]})}function H({Icon:t,text:a,...n}){return i(m,{...n,children:[e(u,{children:e(t,{fontSize:"medium"})}),a]})}function r({text:t}){return i(s,{sx:{minHeight:"100vh"},type:"section",children:[e(f,{title:`Section ${t} Title`,subtitle:"Section subtitle",children:"Optional Action"}),t]})}function A(){return i(l,{children:[e(p,{title:"Sample Page",children:i(x,{"aria-label":"breadcrumb",sx:{textTransform:"uppercase"},children:[e(o,{underline:"hover",href:"#!",children:"Inicio"}),e(d,{color:"text.tertiary",children:"Sample"})]})}),e(s,{type:"section",sx:{minHeight:"60vh"},children:e(f,{title:"Section Title",subtitle:"Section subtitle",children:"Optional Action"})}),e(C,{})]})}export{A as default};
