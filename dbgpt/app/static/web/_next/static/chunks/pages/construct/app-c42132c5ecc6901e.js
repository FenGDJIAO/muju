(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4731],{69274:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(42096),r=n(38497),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=n(75651),i=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,a.Z)({},e,{ref:t,icon:o}))})},72097:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(42096),r=n(38497),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},l=n(75651),i=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,a.Z)({},e,{ref:t,icon:o}))})},35732:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(42096),r=n(38497),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},l=n(75651),i=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,a.Z)({},e,{ref:t,icon:o}))})},47019:function(e,t,n){"use strict";var a=n(33587),r=n(85551),o=n.n(r),l=n(38497),i=n(22785),s=n(5655),c=n(60654),d=n(14206);t.Z=function(e,t){d.Z&&!(0,c.mf)(e)&&console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e));var n,r=(0,i.Z)(e),u=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,p=(0,l.useMemo)(function(){return o()(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.current.apply(r,(0,a.ev)([],(0,a.CR)(e),!1))},u,t)},[]);return(0,s.Z)(function(){p.cancel()}),{run:p,cancel:p.cancel,flush:p.flush}}},42041:function(e,t,n){"use strict";function a(e){return["small","middle","large"].includes(e)}function r(e){return!!e&&"number"==typeof e&&!Number.isNaN(e)}n.d(t,{T:function(){return r},n:function(){return a}})},87674:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(38497),r=n(26869),o=n.n(r),l=n(63346),i=n(72178),s=n(60848),c=n(90102),d=n(74934);let u=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:a,lineWidth:r,textPaddingInline:o,orientationMargin:l,verticalMarginInline:c}=e;return{[t]:Object.assign(Object.assign({},(0,s.Wf)(e)),{borderBlockStart:`${(0,i.bf)(r)} solid ${a}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,i.bf)(r)} solid ${a}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,i.bf)(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,i.bf)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${a}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,i.bf)(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:o},"&-dashed":{background:"none",borderColor:a,borderStyle:"dashed",borderWidth:`${(0,i.bf)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:a,borderStyle:"dotted",borderWidth:`${(0,i.bf)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}};var p=(0,c.I$)("Divider",e=>{let t=(0,d.IX)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[u(t)]},e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),{unitless:{orientationMargin:!0}}),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},f=e=>{let{getPrefixCls:t,direction:n,divider:r}=a.useContext(l.E_),{prefixCls:i,type:s="horizontal",orientation:c="center",orientationMargin:d,className:u,rootClassName:f,children:g,dashed:h,variant:b="solid",plain:v,style:x}=e,y=m(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),w=t("divider",i),[_,j,k]=p(w),C=!!g,$="left"===c&&null!=d,O="right"===c&&null!=d,N=o()(w,null==r?void 0:r.className,j,k,`${w}-${s}`,{[`${w}-with-text`]:C,[`${w}-with-text-${c}`]:C,[`${w}-dashed`]:!!h,[`${w}-${b}`]:"solid"!==b,[`${w}-plain`]:!!v,[`${w}-rtl`]:"rtl"===n,[`${w}-no-default-orientation-margin-left`]:$,[`${w}-no-default-orientation-margin-right`]:O},u,f),S=a.useMemo(()=>"number"==typeof d?d:/^\d+$/.test(d)?Number(d):d,[d]),Z=Object.assign(Object.assign({},$&&{marginLeft:S}),O&&{marginRight:S});return _(a.createElement("div",Object.assign({className:N,style:Object.assign(Object.assign({},null==r?void 0:r.style),x)},y,{role:"separator"}),g&&"vertical"!==s&&a.createElement("span",{className:`${w}-inner-text`,style:Z},g)))}},80335:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(749),r=n(38497),o=n(52896),l=n(26869),i=n.n(l),s=n(27691),c=n(63346),d=n(10755),u=n(80214),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};let m=e=>{let{getPopupContainer:t,getPrefixCls:n,direction:l}=r.useContext(c.E_),{prefixCls:m,type:f="default",danger:g,disabled:h,loading:b,onClick:v,htmlType:x,children:y,className:w,menu:_,arrow:j,autoFocus:k,overlay:C,trigger:$,align:O,open:N,onOpenChange:S,placement:Z,getPopupContainer:E,href:I,icon:P=r.createElement(o.Z,null),title:z,buttonsRender:T=e=>e,mouseEnterDelay:M,mouseLeaveDelay:B,overlayClassName:R,overlayStyle:H,destroyPopupOnHide:L,dropdownRender:D}=e,V=p(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),W=n("dropdown",m),A=`${W}-button`,F={menu:_,arrow:j,autoFocus:k,align:O,disabled:h,trigger:h?[]:$,onOpenChange:S,getPopupContainer:E||t,mouseEnterDelay:M,mouseLeaveDelay:B,overlayClassName:R,overlayStyle:H,destroyPopupOnHide:L,dropdownRender:D},{compactSize:q,compactItemClassnames:G}=(0,u.ri)(W,l),K=i()(A,G,w);"overlay"in e&&(F.overlay=C),"open"in e&&(F.open=N),"placement"in e?F.placement=Z:F.placement="rtl"===l?"bottomLeft":"bottomRight";let U=r.createElement(s.ZP,{type:f,danger:g,disabled:h,loading:b,onClick:v,htmlType:x,href:I,title:z},y),J=r.createElement(s.ZP,{type:f,danger:g,icon:P}),[X,Q]=T([U,J]);return r.createElement(d.Z.Compact,Object.assign({className:K,size:q,block:!0},V),X,r.createElement(a.Z,Object.assign({},F),Q))};m.__ANT_BUTTON=!0;let f=a.Z;f.Button=m;var g=f},10755:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(38497),r=n(26869),o=n.n(r),l=n(10469),i=n(42041),s=n(63346),c=n(80214);let d=a.createContext({latestIndex:0}),u=d.Provider;var p=e=>{let{className:t,index:n,children:r,split:o,style:l}=e,{latestIndex:i}=a.useContext(d);return null==r?null:a.createElement(a.Fragment,null,a.createElement("div",{className:t,style:l},r),n<i&&o&&a.createElement("span",{className:`${t}-split`},o))},m=n(26578),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};let g=a.forwardRef((e,t)=>{var n,r,c;let{getPrefixCls:d,space:g,direction:h}=a.useContext(s.E_),{size:b=null!==(n=null==g?void 0:g.size)&&void 0!==n?n:"small",align:v,className:x,rootClassName:y,children:w,direction:_="horizontal",prefixCls:j,split:k,style:C,wrap:$=!1,classNames:O,styles:N}=e,S=f(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[Z,E]=Array.isArray(b)?b:[b,b],I=(0,i.n)(E),P=(0,i.n)(Z),z=(0,i.T)(E),T=(0,i.T)(Z),M=(0,l.Z)(w,{keepEmpty:!0}),B=void 0===v&&"horizontal"===_?"center":v,R=d("space",j),[H,L,D]=(0,m.Z)(R),V=o()(R,null==g?void 0:g.className,L,`${R}-${_}`,{[`${R}-rtl`]:"rtl"===h,[`${R}-align-${B}`]:B,[`${R}-gap-row-${E}`]:I,[`${R}-gap-col-${Z}`]:P},x,y,D),W=o()(`${R}-item`,null!==(r=null==O?void 0:O.item)&&void 0!==r?r:null===(c=null==g?void 0:g.classNames)||void 0===c?void 0:c.item),A=0,F=M.map((e,t)=>{var n,r;null!=e&&(A=t);let o=(null==e?void 0:e.key)||`${W}-${t}`;return a.createElement(p,{className:W,key:o,index:t,split:k,style:null!==(n=null==N?void 0:N.item)&&void 0!==n?n:null===(r=null==g?void 0:g.styles)||void 0===r?void 0:r.item},e)}),q=a.useMemo(()=>({latestIndex:A}),[A]);if(0===M.length)return null;let G={};return $&&(G.flexWrap="wrap"),!P&&T&&(G.columnGap=Z),!I&&z&&(G.rowGap=E),H(a.createElement("div",Object.assign({ref:t,className:V,style:Object.assign(Object.assign(Object.assign({},G),null==g?void 0:g.style),C)},S),a.createElement(u,{value:q},F)))});g.Compact=c.ZP;var h=g},36647:function(e,t){"use strict";t.Z=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}})},33445:function(e,t,n){"use strict";n.d(t,{Fm:function(){return f}});var a=n(72178),r=n(60234);let o=new a.E4("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),l=new a.E4("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),i=new a.E4("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),s=new a.E4("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),c=new a.E4("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),d=new a.E4("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),u=new a.E4("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),p=new a.E4("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),m={"move-up":{inKeyframes:u,outKeyframes:p},"move-down":{inKeyframes:o,outKeyframes:l},"move-left":{inKeyframes:i,outKeyframes:s},"move-right":{inKeyframes:c,outKeyframes:d}},f=(e,t)=>{let{antCls:n}=e,a=`${n}-${t}`,{inKeyframes:o,outKeyframes:l}=m[t];return[(0,r.R)(a,o,l,e.motionDurationMid),{[`
        ${a}-enter,
        ${a}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${a}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]}},49030:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(38497),r=n(26869),o=n.n(r),l=n(55598),i=n(55853),s=n(35883),c=n(55091),d=n(37243),u=n(63346),p=n(72178),m=n(51084),f=n(60848),g=n(74934),h=n(90102);let b=e=>{let{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:a,componentCls:r,calc:o}=e,l=o(a).sub(n).equal(),i=o(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},(0,f.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,p.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:i,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},v=e=>{let{lineWidth:t,fontSizeIcon:n,calc:a}=e,r=e.fontSizeSM,o=(0,g.IX)(e,{tagFontSize:r,tagLineHeight:(0,p.bf)(a(e.lineHeightSM).mul(r).equal()),tagIconSize:a(n).sub(a(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg});return o},x=e=>({defaultBg:new m.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var y=(0,h.I$)("Tag",e=>{let t=v(e);return b(t)},x),w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};let _=a.forwardRef((e,t)=>{let{prefixCls:n,style:r,className:l,checked:i,onChange:s,onClick:c}=e,d=w(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:p,tag:m}=a.useContext(u.E_),f=p("tag",n),[g,h,b]=y(f),v=o()(f,`${f}-checkable`,{[`${f}-checkable-checked`]:i},null==m?void 0:m.className,l,h,b);return g(a.createElement("span",Object.assign({},d,{ref:t,style:Object.assign(Object.assign({},r),null==m?void 0:m.style),className:v,onClick:e=>{null==s||s(!i),null==c||c(e)}})))});var j=n(86553);let k=e=>(0,j.Z)(e,(t,n)=>{let{textColor:a,lightBorderColor:r,lightColor:o,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:a,background:o,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var C=(0,h.bk)(["Tag","preset"],e=>{let t=v(e);return k(t)},x);let $=(e,t,n)=>{let a=function(e){if("string"!=typeof e)return e;let t=e.charAt(0).toUpperCase()+e.slice(1);return t}(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${a}Bg`],borderColor:e[`color${a}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var O=(0,h.bk)(["Tag","status"],e=>{let t=v(e);return[$(t,"success","Success"),$(t,"processing","Info"),$(t,"error","Error"),$(t,"warning","Warning")]},x),N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};let S=a.forwardRef((e,t)=>{let{prefixCls:n,className:r,rootClassName:p,style:m,children:f,icon:g,color:h,onClose:b,bordered:v=!0,visible:x}=e,w=N(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:_,direction:j,tag:k}=a.useContext(u.E_),[$,S]=a.useState(!0),Z=(0,l.Z)(w,["closeIcon","closable"]);a.useEffect(()=>{void 0!==x&&S(x)},[x]);let E=(0,i.o2)(h),I=(0,i.yT)(h),P=E||I,z=Object.assign(Object.assign({backgroundColor:h&&!P?h:void 0},null==k?void 0:k.style),m),T=_("tag",n),[M,B,R]=y(T),H=o()(T,null==k?void 0:k.className,{[`${T}-${h}`]:P,[`${T}-has-color`]:h&&!P,[`${T}-hidden`]:!$,[`${T}-rtl`]:"rtl"===j,[`${T}-borderless`]:!v},r,p,B,R),L=e=>{e.stopPropagation(),null==b||b(e),e.defaultPrevented||S(!1)},[,D]=(0,s.Z)((0,s.w)(e),(0,s.w)(k),{closable:!1,closeIconRender:e=>{let t=a.createElement("span",{className:`${T}-close-icon`,onClick:L},e);return(0,c.wm)(e,t,e=>({onClick:t=>{var n;null===(n=null==e?void 0:e.onClick)||void 0===n||n.call(e,t),L(t)},className:o()(null==e?void 0:e.className,`${T}-close-icon`)}))}}),V="function"==typeof w.onClick||f&&"a"===f.type,W=g||null,A=W?a.createElement(a.Fragment,null,W,f&&a.createElement("span",null,f)):f,F=a.createElement("span",Object.assign({},Z,{ref:t,className:H,style:z}),A,D,E&&a.createElement(C,{key:"preset",prefixCls:T}),I&&a.createElement(O,{key:"status",prefixCls:T}));return M(V?a.createElement(d.Z,{component:"Tag"},F):F)});S.CheckableTag=_;var Z=S},29726:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construct/app",function(){return n(84300)}])},26953:function(e,t,n){"use strict";var a=n(96469),r=n(67901),o=n(42834),l=n(38497);t.Z=e=>{let{width:t,height:n,scene:i}=e,s=(0,l.useCallback)(()=>{switch(i){case"chat_knowledge":return r.je;case"chat_with_db_execute":return r.zM;case"chat_excel":return r.DL;case"chat_with_db_qa":case"chat_dba":return r.RD;case"chat_dashboard":return r.In;case"chat_agent":return r.si;case"chat_normal":return r.O7;default:return}},[i]);return(0,a.jsx)(o.Z,{className:"w-".concat(t||7," h-").concat(n||7),component:s()})}},52903:function(e,t,n){"use strict";n.d(t,{TH:function(){return g},ZS:function(){return h}});var a=n(96469),r=n(52896),o=n(60205),l=n(87674),i=n(21840),s=n(80335),c=n(26869),d=n.n(c),u=n(83930),p=n(23852),m=n.n(p);n(38497);var f=n(26953);n(96768);let g=e=>{let{onClick:t,Icon:n="/pictures/card_chat.png",text:r=(0,u.t)("start_chat")}=e;return"string"==typeof n&&(n=(0,a.jsx)(m(),{src:n,alt:n,width:17,height:15})),(0,a.jsxs)("div",{className:"flex items-center gap-1 text-default",onClick:e=>{e.stopPropagation(),t&&t()},children:[n,(0,a.jsx)("span",{children:r})]})},h=e=>{let{menu:t}=e;return(0,a.jsx)(s.Z,{menu:t,getPopupContainer:e=>e.parentNode,placement:"bottomRight",autoAdjustOverflow:!1,children:(0,a.jsx)(r.Z,{className:"p-2 hover:bg-white hover:dark:bg-black rounded-md"})})};t.ZP=e=>{let{RightTop:t,Tags:n,LeftBottom:r,RightBottom:s,onClick:c,rightTopHover:u=!0,logo:p,name:g,description:h,className:b,scene:v,code:x}=e;return"string"==typeof h&&(h=(0,a.jsx)("p",{className:"line-clamp-2 relative bottom-4 text-ellipsis min-h-[42px] text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)]",children:h})),(0,a.jsx)("div",{className:d()("hover-underline-gradient flex justify-center mt-6 relative group w-1/3 px-2 mb-6",b),children:(0,a.jsxs)("div",{onClick:c,className:"backdrop-filter backdrop-blur-lg cursor-pointer  bg-white bg-opacity-70 border-2 border-white rounded-lg shadow p-4 relative w-full h-full dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",children:[(0,a.jsxs)("div",{className:"flex items-end relative bottom-8 justify-between w-full",children:[(0,a.jsxs)("div",{className:"flex items-end gap-4 w-11/12",children:[(0,a.jsx)("div",{className:"bg-white rounded-lg shadow-sm w-14 h-14 flex items-center p-3",children:v?(0,a.jsx)(f.Z,{scene:v,width:14,height:14}):p&&(0,a.jsx)(m(),{src:p,width:44,height:44,alt:g,className:"w-8 min-w-8 rounded-full"})}),(0,a.jsx)("div",{children:g.length>6?(0,a.jsx)(o.Z,{title:g,children:(0,a.jsx)("span",{className:"truncate font-semibold text-base",style:{maxWidth:"60%"},children:g})}):(0,a.jsx)("span",{className:"truncate font-semibold text-base",style:{maxWidth:"60%"},children:g})})]}),(0,a.jsx)("span",{className:d()({hidden:u,"group-hover:block":u}),onClick:e=>{e.stopPropagation()},children:t})]}),h,(0,a.jsx)("div",{className:"relative bottom-2",children:n}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{children:r}),(0,a.jsx)("div",{children:s})]}),x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"my-3"}),(0,a.jsx)(i.Z.Text,{copyable:!0,className:"absolute bottom-1 right-4 text-xs text-gray-500",children:x})]})]})})}},86059:function(e,t,n){"use strict";var a=n(96469);n(38497);var r=n(42518),o=n(5996),l=n(83930),i=n(31183),s=n(51382),c=n(42834),d=n(43738),u=n(92026),p=n(94918),m=n(61760),f=n(67901),g=n(87313);n(41748),t.Z=function(e){let{children:t}=e,n=[{key:"app",name:(0,l.t)("App"),path:"/app",icon:(0,a.jsx)(i.Z,{})},{key:"flow",name:(0,l.t)("awel_flow"),icon:(0,a.jsx)(s.Z,{}),path:"/flow"},{key:"models",name:(0,l.t)("model_manage"),path:"/models",icon:(0,a.jsx)(c.Z,{component:f.IN})},{key:"database",name:(0,l.t)("Database"),icon:(0,a.jsx)(d.Z,{}),path:"/database"},{key:"knowledge",name:(0,l.t)("Knowledge_Space"),icon:(0,a.jsx)(u.Z,{}),path:"/knowledge"},{key:"agent",name:(0,l.t)("Plugins"),path:"/agent",icon:(0,a.jsx)(p.Z,{})},{key:"prompt",name:(0,l.t)("Prompt"),icon:(0,a.jsx)(m.Z,{}),path:"/prompt"}],h=(0,g.useRouter)(),b=h.pathname.split("/")[2];return window.matchMedia("(prefers-color-scheme: dark)").matches,(0,a.jsx)("div",{className:"flex flex-col h-full w-full  dark:bg-gradient-dark bg-gradient-light bg-cover bg-center",children:(0,a.jsx)(r.ZP,{theme:{components:{Button:{},Segmented:{itemSelectedBg:"#2867f5",itemSelectedColor:"white"}}},children:(0,a.jsx)(o.Z,{activeKey:b,items:n.map(e=>({key:e.key,label:e.name,children:t,icon:e.icon})),onTabClick:e=>{h.push("/construct/".concat(e))}})})})}},2997:function(e,t,n){"use strict";n.r(t);var a=n(96469),r=n(27623),o=n(16602),l=n(95891),i=n(55360),s=n(42518),c=n(79839),d=n(42786),u=n(41999),p=n(87674),m=n(26869),f=n.n(m),g=n(23852),h=n.n(g),b=n(87313),v=n(38497),x=n(56841),y=n(80017),w=n.n(y);let _=e=>{let{disable:t=!1,options:n=[],value:r,onChange:o}=e,[l,i]=(0,v.useState)(r||{}),{i18n:s}=(0,x.$G)(),c=e=>t?f()("flex items-center p-4 border rounded-lg border-[#d9d9d9]  cursor-not-allowed relative transition-all duration-500 ease-in-out",{"bg-[rgba(0,0,0,0.04)] dark:bg-[#606264]":e.value===(null==l?void 0:l.value)}):"flex items-center p-4  border dark:border-[rgba(217,217,217,0.85)] rounded-lg cursor-pointer hover:border-[#0c75fc] hover:bg-[#f5faff] dark:hover:border-[rgba(12,117,252,0.85)] dark:hover:bg-[#606264] relative transition-all duration-300 ease-in-out ".concat(e.value===(null==l?void 0:l.value)?"border-[#0c75fc] bg-[#f5faff] dark:bg-[#606264] dark:border-[#0c75fc]":"border-[#d9d9d9]"," "),d="en"===s.language;return(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:n.map(e=>(0,a.jsxs)("div",{className:c(e),onClick:()=>{t||(i(e),null==o||o({...r,...e}))},children:[(0,a.jsx)(h(),{src:"/icons/app/".concat(e.value,".png"),width:48,height:48,alt:e.value}),(0,a.jsxs)("div",{className:"flex flex-col ml-3",children:[(0,a.jsx)("span",{className:"text-xs font-medium text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)] first-line:leading-6",children:d?e.name_en:e.name_cn}),(0,a.jsx)("span",{className:"text-xs text-[rgba(0,0,0,0.45)] dark:text-[rgba(255,255,255,0.85)]",children:d?e.description_en:e.description})]}),e.value===(null==l?void 0:l.value)&&(0,a.jsx)("div",{className:"w-3 h-3 rounded-tr-md absolute top-[1px] right-[1px] transition-all duration-300 ease-in-out",style:{background:"linear-gradient(to right top, transparent 50%, transparent 50%, ".concat(t?"#d0d0d0":"#0c75fc"," 0)")}})]},e.value))})};t.default=e=>{let{open:t,onCancel:n,type:m="add",refresh:f}=e,{t:g,i18n:h}=(0,x.$G)(),y=JSON.parse(localStorage.getItem("new_app_info")||"{}"),{message:j}=l.Z.useApp(),[k]=i.default.useForm(),C=i.default.useWatch("team_mode",k),$=(0,b.useRouter)(),O="en"===h.language,{data:N,loading:S}=(0,o.Z)(async()=>{let[e,t]=await (0,r.Vx)((0,r.lz)());return null!=t?t:[]}),{run:Z,loading:E}=(0,o.Z)(async e=>"edit"===m?await (0,r.Vx)((0,r.KT)({app_code:null==y?void 0:y.app_code,language:"zh",...e})):await (0,r.Vx)((0,r.L5)({language:"zh",...e})),{manual:!0,onSuccess:async e=>{let[t,a]=e;if(t)j.error("edit"===m?g("Update_failure"):g("Create_failure"));else if("edit"===m){var o;let[,e]=await (0,r.Vx)((0,r.yk)({})),t=null==e?void 0:null===(o=e.app_list)||void 0===o?void 0:o.find(e=>e.app_code===(null==y?void 0:y.app_code));localStorage.setItem("new_app_info",JSON.stringify({...t,isEdit:!0})),j.success(g("Update_successfully"))}else j.success(g("Create_successfully")),localStorage.setItem("new_app_info",JSON.stringify(a)),$.push("/construct/app/extra");await (null==f?void 0:f()),n()}}),I=(0,v.useMemo)(()=>{var e;return null===(e=null==N?void 0:N.filter(e=>e.value===(null==y?void 0:y.team_mode)))||void 0===e?void 0:e[0]},[y,N]);return S?null:(0,a.jsx)(s.ZP,{theme:{components:{Button:{defaultBorderColor:"#d9d9d9"}}},children:(0,a.jsx)(c.default,{className:w()["create-app-modal-container"],title:g("create_app"),width:900,open:t,onOk:async()=>{k.validateFields().then(async e=>{var t;await Z({app_name:null==e?void 0:e.app_name,app_describe:null==e?void 0:e.app_describe,team_mode:null==e?void 0:null===(t=e.team_mode)||void 0===t?void 0:t.value})})},onCancel:n,centered:!0,children:(0,a.jsx)(d.Z,{spinning:E,children:(0,a.jsxs)("div",{className:"flex flex-1",children:[(0,a.jsxs)(i.default,{layout:"vertical",className:"w-3/5",form:k,initialValues:{team_mode:I||(null==N?void 0:N[0]),app_name:null==y?void 0:y.app_name,app_describe:null==y?void 0:y.app_describe},children:[(0,a.jsx)(i.default.Item,{label:g("team_modal"),name:"team_mode",required:!0,rules:[{required:!0,message:g("Please_input_the_work_modal")}],children:(0,a.jsx)(_,{disable:"edit"===m,options:N||[]})}),(0,a.jsx)(i.default.Item,{label:"".concat(g("app_name"),"："),name:"app_name",required:!0,rules:[{required:!0,message:g("input_app_name")}],children:(0,a.jsx)(u.default,{placeholder:g("input_app_name"),autoComplete:"off",className:"h-8"})}),(0,a.jsx)(i.default.Item,{label:"".concat(g("Description"),"："),name:"app_describe",required:!0,rules:[{required:!0,message:g("Please_input_the_description")}],children:(0,a.jsx)(u.default.TextArea,{autoComplete:"off",placeholder:g("Please_input_the_description"),autoSize:{minRows:2.5}})})]}),(0,a.jsx)(p.Z,{type:"vertical",className:"h-auto mx-6 bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.5)] "}),(0,a.jsxs)("div",{className:"flex flex-col w-2/5 pl-6 pt-8 ",children:[(0,a.jsx)("span",{className:"text-base text-[rgba(0,0,0,0.85)] font-medium mb-6 dark:text-[rgba(255,255,255,0.85)]",children:O?null==C?void 0:C.name_en:null==C?void 0:C.name_cn}),(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("span",{className:"flex flex-shrink-0 w-1 h-1 rounded-full bg-[rgba(0,0,0,0.45)] mt-2 mr-1 dark:bg-[rgba(255,255,255,0.65)]"}),(0,a.jsx)("span",{className:"text-xs leading-5 text-[rgba(0,0,0,0.45)] dark:text-[rgba(255,255,255,0.65)]",children:O?null==C?void 0:C.remark_en:null==C?void 0:C.remark})]})]})]})})})})}},84300:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var a=n(96469),r=n(52903),o=n(86059),l=n(45277),i=n(27623),s=n(35732),c=n(29766),d=n(97511),u=n(42096),p=n(38497),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"}}]},name:"bulb",theme:"outlined"},f=n(75651),g=p.forwardRef(function(e,t){return p.createElement(f.Z,(0,u.Z)({},e,{ref:t,icon:m}))}),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z"}}]},name:"dingding",theme:"outlined"},b=p.forwardRef(function(e,t){return p.createElement(f.Z,(0,u.Z)({},e,{ref:t,icon:h}))}),v=n(16602),x=n(47019),y=n(95891),w=n(79839),_=n(42786),j=n(197),k=n(41999),C=n(27691),$=n(62971),O=n(49030),N=n(16156),S=n(93486),Z=n.n(S),E=n(61671),I=n.n(E),P=n(87313),z=n(56841),T=n(2997);function M(){let{t:e}=(0,z.$G)(),[t,n]=(0,p.useState)(!1),[u,m]=(0,p.useState)(!1),[f,h]=(0,p.useState)("all"),[S,E]=(0,p.useState)([]),[M,B]=(0,p.useState)("add"),{model:R,setAgent:H,setCurrentDialogInfo:L,adminList:D}=(0,p.useContext)(l.p),V=(0,P.useRouter)(),{openModal:W=""}=V.query,[A,F]=(0,p.useState)(""),[q,G]=(0,p.useState)(),[K,U]=(0,p.useState)(!1),[J,X]=(0,p.useState)([]),[Q,Y]=(0,p.useState)(null),{message:ee,modal:et}=y.Z.useApp(),en=e=>{localStorage.setItem("new_app_info",JSON.stringify({...e,isEdit:!0})),V.push("/construct/app/extra")},ea=(0,p.useCallback)(()=>{let e;"published"===f&&(e="true"),"unpublished"===f&&(e="false"),eo({app_name:A,published:e})},[f,A]),{run:er}=(0,v.Z)(async e=>"true"===e.published?await (0,i.Vx)((0,i.Fq)(e.app_code)):await (0,i.Vx)((0,i.b1)(e.app_code)),{manual:!0,onSuccess:e=>{var t;(null===(t=e[2])||void 0===t?void 0:t.success)&&ee.success("操作成功"),ea()}}),eo=(0,x.Z)(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(!0);let[t,n]=await (0,i.Vx)((0,i.yk)(e));if(t){m(!1);return}n&&(E((null==n?void 0:n.app_list)||[]),m(!1))},{wait:500}).run,el=t=>{w.default.confirm({title:e("Tips"),icon:(0,a.jsx)(s.Z,{}),content:"do you want delete the application?",okText:"Yes",okType:"danger",cancelText:"No",async onOk(){await (0,i.Vx)((0,i.Nl)({app_code:t.app_code})),ea()}})};(0,p.useEffect)(()=>{W&&(B("add"),n(!0))},[W]);let ei={en:e("English"),zh:e("Chinese")},es=async e=>{if("native_app"===e.team_mode){let{chat_scene:t=""}=e.team_context,[,n]=await (0,i.Vx)((0,i.sW)({chat_mode:t}));n&&(null==L||L({chat_scene:n.chat_mode,app_code:e.app_code}),localStorage.setItem("cur_dialog_info",JSON.stringify({chat_scene:n.chat_mode,app_code:e.app_code})),V.push("/chat?scene=".concat(t,"&id=").concat(n.conv_uid).concat(R?"&model=".concat(R):"")))}else{let[,t]=await (0,i.Vx)((0,i.sW)({chat_mode:"chat_agent"}));t&&(null==L||L({chat_scene:t.chat_mode,app_code:e.app_code}),localStorage.setItem("cur_dialog_info",JSON.stringify({chat_scene:t.chat_mode,app_code:e.app_code})),null==H||H(e.app_code),V.push("/chat/?scene=chat_agent&id=".concat(t.conv_uid).concat(R?"&model=".concat(R):"")))}},ec=[{value:"all",label:e("apps")},{value:"published",label:e("published")},{value:"unpublished",label:e("unpublished")}],ed=async e=>{F(e.target.value)},{run:eu,loading:ep}=(0,v.Z)(async e=>{let[,t]=await (0,i.Vx)((0,i.GQ)(e));return null!=t?t:[]},{manual:!0,onSuccess:e=>{X(e)}}),{run:em,loading:ef}=(0,v.Z)(async e=>await (0,i.Vx)((0,i.p$)(e)),{manual:!0,onSuccess:()=>{ee.success("更新成功")}}),eg=async e=>{X(e),await em({app_code:(null==q?void 0:q.app_code)||"",admins:e}),await eo()};(0,p.useEffect)(()=>{q&&eu(q.app_code)},[q,eu]),(0,p.useEffect)(()=>{ea()},[ea]);let eh=e=>{Q&&(clearTimeout(Q),Y(null));let t=setTimeout(()=>{var t;let n="".concat(location.origin,"/mobile/chat/?chat_scene=").concat((null==e?void 0:null===(t=e.team_context)||void 0===t?void 0:t.chat_scene)||"chat_agent","&app_code=").concat(e.app_code),a="dingtalk://dingtalkclient/page/link?url=".concat(encodeURIComponent(n),"&pc_slide=true"),r=Z()(a);r?ee.success("复制成功"):ee.error("复制失败"),Y(null)},300);Y(t)},eb=e=>{var t;Q&&(clearTimeout(Q),Y(null));let n="".concat(location.origin,"/mobile/chat/?chat_scene=").concat((null==e?void 0:null===(t=e.team_context)||void 0===t?void 0:t.chat_scene)||"chat_agent","&app_code=").concat(e.app_code),a="dingtalk://dingtalkclient/page/link?url=".concat(encodeURIComponent(n),"&pc_slide=true");window.open(a)};return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(_.Z,{spinning:u,children:(0,a.jsxs)("div",{className:"h-screen w-full p-4 md:p-6 overflow-y-auto",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(j.Z,{className:"backdrop-filter h-10 backdrop-blur-lg bg-white bg-opacity-30 border border-white rounded-lg shadow p-1 dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",options:ec,onChange:e=>{h(e)},value:f}),(0,a.jsx)(k.default,{variant:"filled",value:A,prefix:(0,a.jsx)(c.Z,{}),placeholder:e("please_enter_the_keywords"),onChange:ed,onPressEnter:ed,allowClear:!0,className:"w-[230px] h-[40px] border-1 border-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60"})]}),(0,a.jsx)("div",{className:"flex items-center gap-4 h-10",children:(0,a.jsx)(C.ZP,{className:"border-none text-white bg-button-gradient h-full flex items-center",icon:(0,a.jsx)(d.Z,{className:"text-base"}),onClick:()=>{B("add"),n(!0),localStorage.removeItem("new_app_info")},children:e("create_app")})})]}),(0,a.jsx)("div",{className:" w-full flex flex-wrap pb-12 mx-[-8px]",children:S.map(t=>{var n;return(0,a.jsx)(r.ZP,{code:t.app_code,name:t.app_name,description:t.app_describe,RightTop:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)($.Z,{content:(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(g,{style:{color:"rgb(252,204,96)",fontSize:12}}),(0,a.jsx)("span",{className:"text-sm text-gray-500",children:e("copy_url")})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(g,{style:{color:"rgb(252,204,96)",fontSize:12}}),(0,a.jsx)("span",{className:"text-sm text-gray-500",children:e("double_click_open")})]})]}),children:(0,a.jsx)(b,{className:"cursor-pointer text-[#0069fe] hover:bg-white hover:dark:bg-black p-2 rounded-md",onClick:()=>eh(t),onDoubleClick:()=>eb(t)})}),(0,a.jsx)(r.ZS,{menu:{items:[{key:"publish",label:(0,a.jsx)("span",{onClick:e=>{e.stopPropagation(),er(t)},children:"true"===t.published?e("unpublish"):e("publish")})},{key:"del",label:(0,a.jsx)("span",{className:"text-red-400",onClick:e=>{e.stopPropagation(),el(t)},children:e("Delete")})}]}})]}),Tags:(0,a.jsxs)("div",{children:[(0,a.jsx)(O.Z,{children:ei[t.language]}),(0,a.jsx)(O.Z,{children:t.team_mode}),(0,a.jsx)(O.Z,{children:"true"===t.published?e("published"):e("unpublished")})]}),rightTopHover:!1,LeftBottom:(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("span",{children:t.owner_name}),(0,a.jsx)("span",{children:"•"}),(null==t?void 0:t.updated_at)&&(0,a.jsx)("span",{children:I()(null==t?void 0:t.updated_at).fromNow()+" "+e("update")})]}),RightBottom:(0,a.jsx)(r.TH,{onClick:()=>{es(t)}}),onClick:()=>{en(t)},scene:(null==t?void 0:null===(n=t.team_context)||void 0===n?void 0:n.chat_scene)||"chat_agent"},t.app_code)})}),t&&(0,a.jsx)(T.default,{open:t,onCancel:()=>{n(!1)},refresh:eo,type:M})]})}),(0,a.jsx)(w.default,{title:"权限管理",open:K,onCancel:()=>U(!1),footer:null,children:(0,a.jsx)(_.Z,{spinning:ep,children:(0,a.jsxs)("div",{className:"py-4",children:[(0,a.jsx)("div",{className:"mb-1",children:"管理员（工号，去前缀0）："}),(0,a.jsx)(N.default,{mode:"tags",value:J,style:{width:"100%"},onChange:eg,tokenSeparators:[","],options:null==J?void 0:J.map(e=>({label:e,value:e})),loading:ef})]})})})]})}},96768:function(){},41748:function(){},80017:function(e){e.exports={"create-app-modal-container":"styles_create-app-modal-container___tIEs"}}},function(e){e.O(0,[2768,2994,2003,5677,1999,2786,5722,749,6156,5360,1840,5996,5444,9774,2888,179],function(){return e(e.s=29726)}),_N_E=e.O()}]);