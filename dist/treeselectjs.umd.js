(function(C,m){typeof exports=="object"&&typeof module<"u"?module.exports=m():typeof define=="function"&&define.amd?define(m):(C=typeof globalThis<"u"?globalThis:C||self,C.Treeselect=m())})(this,function(){var O,y,H,x,he,jt,G,oe,ue,qt,pe,$t,M,ae,P,j,me,Wt,fe,Rt,Ce,Ut,be,zt,ge,Yt,we,Kt,ke,Xt,ve,Jt,Ee,Zt,Le,Qt,ye,es,xe,ts,Se,ss,_e,is,Ae,ls,Te,ns,Y,Et,F,B,_,K,Ne,os,Oe,as,Pe,rs,Be,cs,Ve,ds,De,hs,X,Lt,Ie,us,He,ps,Ge,ms,J,yt,Me,fs,Fe,Cs,je,bs,qe,gs,$e,ws,We,ks,Re,vs,Ue,Es,ze,Ls,Ye,ys,Ke,xs,Z,xt,Q,St,Xe,Ss,h,p,q,ee,$,A,T,S,V,te,_t,W,mt,Je,_s,Ze,As,Qe,Ts,et,Ns,tt,Os,st,Ps,it,Bs,lt,Vs,nt,Ds,ot,Is,se,At,at,Hs,R,ft,ie,Tt,U,Ct,rt,Gs,le,Nt,ct,Ms,dt,Fs,ht,js;"use strict";var Si=Object.defineProperty;var _i=(C,m,f)=>m in C?Si(C,m,{enumerable:!0,configurable:!0,writable:!0,value:f}):C[m]=f;var c=(C,m,f)=>(_i(C,typeof m!="symbol"?m+"":m,f),f),vt=(C,m,f)=>{if(!m.has(C))throw TypeError("Cannot "+f)};var n=(C,m,f)=>(vt(C,m,"read from private field"),f?f.call(C):m.get(C)),r=(C,m,f)=>{if(m.has(C))throw TypeError("Cannot add the same private member more than once");m instanceof WeakSet?m.add(C):m.set(C,f)},b=(C,m,f,z)=>(vt(C,m,"write to private field"),z?z.call(C,f):m.set(C,f),f);var a=(C,m,f)=>(vt(C,m,"access private method"),f);const C="",m={arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',arrowDown:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',attention:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',cross:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',partialCheck:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},f=(l,e)=>{if(e.innerHTML="",typeof l=="string")e.innerHTML=l;else{const t=l.cloneNode(!0);e.appendChild(t)}},z=l=>{const e=l?{...l}:{};return Object.keys(m).forEach(t=>{e[t]||(e[t]=m[t])}),e},qs=l=>l.reduce((e,{name:t},s)=>(e+=t,s<l.length-1&&(e+=", "),e),"");class $s{constructor({value:e,showTags:t,tagsCountText:s,clearable:i,isAlwaysOpened:o,searchable:d,placeholder:u,disabled:g,isSingleSelect:w,id:k,iconElements:v,inputCallback:E,searchCallback:L,openCallback:D,closeCallback:I,keydownCallback:ne,focusCallback:ut,blurCallback:kt,nameChangeCallback:pt}){r(this,he);r(this,G);r(this,ue);r(this,pe);r(this,M);r(this,P);r(this,me);r(this,fe);r(this,Ce);r(this,be);r(this,ge);r(this,we);r(this,ke);r(this,ve);r(this,Ee);r(this,Le);r(this,ye);r(this,xe);r(this,Se);r(this,_e);r(this,Ae);r(this,Te);r(this,Y);c(this,"value");c(this,"showTags");c(this,"tagsCountText");c(this,"clearable");c(this,"isAlwaysOpened");c(this,"searchable");c(this,"placeholder");c(this,"disabled");c(this,"isSingleSelect");c(this,"id");c(this,"iconElements");c(this,"isOpened");c(this,"searchText");c(this,"srcElement");r(this,O,void 0);r(this,y,void 0);r(this,H,void 0);r(this,x,void 0);c(this,"inputCallback");c(this,"searchCallback");c(this,"openCallback");c(this,"closeCallback");c(this,"keydownCallback");c(this,"focusCallback");c(this,"blurCallback");c(this,"nameChangeCallback");this.value=e,this.showTags=t,this.tagsCountText=s,this.searchable=d,this.placeholder=u,this.clearable=i,this.isAlwaysOpened=o,this.disabled=g,this.isSingleSelect=w,this.id=k,this.iconElements=v,this.isOpened=!1,this.searchText="",b(this,O,a(this,Ce,Ut).call(this)),b(this,y,a(this,Ee,Zt).call(this)),b(this,H,a(this,xe,ts).call(this)),b(this,x,null),this.inputCallback=E,this.searchCallback=L,this.openCallback=D,this.closeCallback=I,this.keydownCallback=ne,this.focusCallback=ut,this.blurCallback=kt,this.nameChangeCallback=pt,this.srcElement=a(this,me,Wt).call(this,n(this,O),n(this,y),n(this,H)),a(this,he,jt).call(this)}focus(){setTimeout(()=>n(this,y).focus(),0)}blur(){this.isOpened&&a(this,P,j).call(this),this.clearSearch(),n(this,y).blur()}updateValue(e){this.value=e,a(this,G,oe).call(this),a(this,M,ae).call(this)}removeItem(e){this.value=this.value.filter(t=>t.id!==e),a(this,Y,Et).call(this),a(this,G,oe).call(this),a(this,M,ae).call(this)}clear(){this.value=[],a(this,Y,Et).call(this),a(this,G,oe).call(this),this.clearSearch()}openClose(){a(this,P,j).call(this)}clearSearch(){this.searchText="",this.searchCallback(""),a(this,M,ae).call(this)}}O=new WeakMap,y=new WeakMap,H=new WeakMap,x=new WeakMap,he=new WeakSet,jt=function(){a(this,G,oe).call(this),a(this,M,ae).call(this),a(this,ue,qt).call(this)},G=new WeakSet,oe=function(){if(n(this,O).innerHTML="",this.showTags){n(this,O).append(...a(this,be,zt).call(this));const e=qs(this.value);this.nameChangeCallback(e)}else{const e=a(this,ve,Jt).call(this);n(this,O).appendChild(e),this.nameChangeCallback(e.innerText)}n(this,O).appendChild(n(this,y))},ue=new WeakSet,qt=function(){const e=[];n(this,H).innerHTML="",this.clearable&&e.push(a(this,Se,ss).call(this)),this.isAlwaysOpened||e.push(a(this,Ae,ls).call(this,this.isOpened)),e.length&&n(this,H).append(...e)},pe=new WeakSet,$t=function(){if(!this.isAlwaysOpened&&n(this,x)){const e=this.isOpened?this.iconElements.arrowUp:this.iconElements.arrowDown;f(e,n(this,x))}},M=new WeakSet,ae=function(){var e;(e=this.value)!=null&&e.length?(n(this,y).removeAttribute("placeholder"),this.srcElement.classList.remove("treeselect-input--value-not-selected")):(n(this,y).setAttribute("placeholder",this.placeholder),this.srcElement.classList.add("treeselect-input--value-not-selected")),this.searchable?this.srcElement.classList.remove("treeselect-input--unsearchable"):this.srcElement.classList.add("treeselect-input--unsearchable"),this.isSingleSelect?this.srcElement.classList.add("treeselect-input--is-single-select"):this.srcElement.classList.remove("treeselect-input--is-single-select"),n(this,y).value=this.searchText},P=new WeakSet,j=function(){this.isOpened=!this.isOpened,a(this,pe,$t).call(this),this.isOpened?this.openCallback():this.closeCallback()},me=new WeakSet,Wt=function(e,t,s){const i=document.createElement("div");return i.classList.add("treeselect-input"),i.setAttribute("tabindex","-1"),i.addEventListener("mousedown",o=>a(this,fe,Rt).call(this,o)),i.addEventListener("focus",()=>this.focusCallback(),!0),i.addEventListener("blur",()=>this.blurCallback(),!0),e.appendChild(t),i.append(e,s),i},fe=new WeakSet,Rt=function(e){e.stopPropagation(),this.isOpened||a(this,P,j).call(this),this.focus()},Ce=new WeakSet,Ut=function(){const e=document.createElement("div");return e.classList.add("treeselect-input__tags"),e},be=new WeakSet,zt=function(){return this.value.map(e=>{const t=document.createElement("div");t.classList.add("treeselect-input__tags-element"),t.setAttribute("tabindex","-1"),t.setAttribute("tag-id",e.id.toString()),t.setAttribute("title",e.name);const s=a(this,we,Kt).call(this,e.name),i=a(this,ke,Xt).call(this);return t.addEventListener("mousedown",o=>a(this,ge,Yt).call(this,o,e.id)),t.append(s,i),t})},ge=new WeakSet,Yt=function(e,t){e.preventDefault(),e.stopPropagation(),this.removeItem(t),this.focus()},we=new WeakSet,Kt=function(e){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-name"),t.textContent=e,t},ke=new WeakSet,Xt=function(){const e=document.createElement("span");return e.classList.add("treeselect-input__tags-cross"),f(this.iconElements.cross,e),e},ve=new WeakSet,Jt=function(){const e=document.createElement("span");if(e.classList.add("treeselect-input__tags-count"),!this.value.length)return e.textContent="",e.setAttribute("title",""),e;const t=this.value.length===1?this.value[0].name:`${this.value.length} ${this.tagsCountText}`;return e.textContent=t,e.setAttribute("title",t),e},Ee=new WeakSet,Zt=function(){const e=document.createElement("input");return e.classList.add("treeselect-input__edit"),this.id&&e.setAttribute("id",this.id),(!this.searchable||this.disabled)&&e.setAttribute("readonly","readonly"),this.disabled&&e.setAttribute("tabindex","-1"),e.addEventListener("keydown",t=>a(this,Le,Qt).call(this,t)),e.addEventListener("input",t=>a(this,ye,es).call(this,t,e)),e},Le=new WeakSet,Qt=function(e){e.stopPropagation();const t=e.key;t==="Backspace"&&!this.searchText.length&&this.value.length&&!this.showTags&&this.clear(),t==="Backspace"&&!this.searchText.length&&this.value.length&&this.removeItem(this.value[this.value.length-1].id),e.code==="Space"&&(!this.searchText||!this.searchable)&&a(this,P,j).call(this),(t==="Enter"||t==="ArrowDown"||t==="ArrowUp")&&e.preventDefault(),this.keydownCallback(e),t!=="Tab"&&this.focus()},ye=new WeakSet,es=function(e,t){e.stopPropagation();const s=this.searchText,i=t.value.trim();if(s.length===0&&i.length===0){t.value="";return}if(this.searchable){const o=e.target.value;this.searchCallback(o),this.isOpened||a(this,P,j).call(this)}else t.value="";this.searchText=t.value},xe=new WeakSet,ts=function(){const e=document.createElement("div");return e.classList.add("treeselect-input__operators"),e},Se=new WeakSet,ss=function(){const e=document.createElement("span");return e.classList.add("treeselect-input__clear"),e.setAttribute("tabindex","-1"),f(this.iconElements.clear,e),e.addEventListener("mousedown",t=>a(this,_e,is).call(this,t)),e},_e=new WeakSet,is=function(e){e.preventDefault(),e.stopPropagation(),(this.searchText.length||this.value.length)&&this.clear(),this.focus()},Ae=new WeakSet,ls=function(e){b(this,x,document.createElement("span")),n(this,x).classList.add("treeselect-input__arrow");const t=e?this.iconElements.arrowUp:this.iconElements.arrowDown;return f(t,n(this,x)),n(this,x).addEventListener("mousedown",s=>a(this,Te,ns).call(this,s)),n(this,x)},Te=new WeakSet,ns=function(e){e.stopPropagation(),e.preventDefault(),this.focus(),a(this,P,j).call(this)},Y=new WeakSet,Et=function(){this.inputCallback(this.value)};const Ot=(l,e,t)=>{zs(e);const s=e.filter(i=>!i.disabled&&l.some(o=>o===i.id));if(t&&s.length){s[0].checked=!0;return}s.forEach(i=>{i.checked=!0;const o=bt(i,e);i.checked=o})},bt=({id:l,checked:e},t)=>{const s=t.find(o=>o.id===l);if(!s)return!1;const i=Pt(!!e,s,t);return Bt(s,t),i},Pt=(l,e,t)=>{if(!e.isGroup)return e.checked=e.disabled?!1:!!l,e.isPartialChecked=!1,e.checked;const s=t.filter(u=>u.childOf===e.id);return!l||e.disabled||e.isPartialChecked?(e.checked=!1,e.isPartialChecked=!1,gt(e,s,t),e.checked):Vt(s,t)?Dt(s)?(e.checked=!1,e.isPartialChecked=!1,e.disabled=!0,e.checked):(e.checked=!1,e.isPartialChecked=!0,s.forEach(u=>{Pt(l,u,t)}),e.checked):(e.checked=!0,e.isPartialChecked=!1,gt(e,s,t),e.checked)},Bt=(l,e)=>{const t=e.find(s=>s.id===l.childOf);t&&(Ws(t,e),Bt(t,e))},Ws=(l,e)=>{const t=re(l,e);if(Dt(t)){l.checked=!1,l.isPartialChecked=!1,l.disabled=!0;return}if(Rs(t)){l.checked=!0,l.isPartialChecked=!1;return}if(Us(t)){l.checked=!1,l.isPartialChecked=!0;return}l.checked=!1,l.isPartialChecked=!1},gt=({checked:l,disabled:e},t,s)=>{t.forEach(i=>{i.disabled=!!e||!!i.disabled,i.checked=!!l&&!i.disabled,i.isPartialChecked=!1;const o=re(i,s);gt({checked:l,disabled:e},o,s)})},Vt=(l,e)=>l.some(i=>i.disabled)?!0:l.some(i=>{if(i.isGroup){const o=re(i,e);return Vt(o,e)}return!1}),Dt=l=>l.every(e=>!!e.disabled),Rs=l=>l.every(e=>!!e.checked),Us=l=>l.some(e=>!!e.checked||!!e.isPartialChecked),zs=l=>{l.forEach(e=>{e.checked=!1,e.isPartialChecked=!1})},Ys=(l,e,t="",s=0)=>{const i=It(l,e,t,s);return Xs(i)},It=(l,e,t,s)=>l.reduce((i,o)=>{var w;const d=!!((w=o.children)!=null&&w.length),u=s>=e&&d,g=s>e;if(i.push({id:o.value,name:o.name,childOf:t,isGroup:d,checked:!1,isPartialChecked:!1,level:s,isClosed:u,hidden:g,disabled:o.disabled??!1}),d){const k=It(o.children,e,o.value,s+1);i.push(...k)}return i},[]),re=({id:l},e)=>e.filter(t=>t.childOf===l),Ks=l=>{const{ungroupedNodes:e,allGroupedNodes:t,allNodes:s}=l.reduce((o,d)=>(d.checked&&(o.allNodes.push(d),d.isGroup?o.allGroupedNodes.push(d):o.ungroupedNodes.push(d)),o),{ungroupedNodes:[],allGroupedNodes:[],allNodes:[]}),i=s.filter(o=>!t.some(({id:d})=>d===o.childOf));return{ungroupedNodes:e,groupedNodes:i,allNodes:s}},Xs=l=>(l.filter(t=>!!t.disabled).forEach(({id:t})=>bt({id:t,checked:!1},l)),l),ce=(l,{id:e,isClosed:t})=>{re({id:e},l).forEach(i=>{i.hidden=t??!1,i.isGroup&&!i.isClosed&&ce(l,{id:i.id,isClosed:t})})},Js=l=>{l.filter(e=>e.isGroup&&!e.disabled&&(e.checked||e.isPartialChecked)).forEach(e=>{e.isClosed=!1,ce(l,e)})},Zs=(l,e)=>{const t=Qs(l,e);l.forEach(s=>{t.some(({id:o})=>o===s.id)?(s.isGroup&&(s.isClosed=!1,ce(l,s)),s.hidden=!1):s.hidden=!0})},Qs=(l,e)=>l.reduce((t,s)=>{if(s.name.toLowerCase().includes(e.toLowerCase())){if(t.push(s),s.isGroup){const o=Ht(s.id,l);t.push(...o)}if(s.childOf){const o=Gt(s.childOf,l);t.push(...o)}}return t},[]),Ht=(l,e)=>e.reduce((t,s)=>(s.childOf===l&&(t.push(s),s.isGroup&&t.push(...Ht(s.id,e))),t),[]),Gt=(l,e)=>e.reduce((t,s)=>(s.id===l&&(t.push(s),s.childOf&&t.push(...Gt(s.childOf,e))),t),[]),ei=l=>{const{duplications:e}=l.reduce((t,s)=>(t.allItems.some(i=>i.toString()===s.id.toString())&&t.duplications.push(s.id),t.allItems.push(s.id),t),{duplications:[],allItems:[]});e.length&&console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`)},ti=(l,e,t,s,i,o,d,u)=>{Ot(l,e,i),u&&d&&Js(e),de(e,t,s,o)},de=(l,e,t,s)=>{l.forEach(i=>{const o=e.querySelector(`[input-id="${i.id}"]`),d=N(o);o.checked=i.checked,si(i,d,s),ii(i,d),li(i,d),ni(i,d,t),oi(i,d),ri(i,d,l),ai(i,o,t)}),ci(l,e)},si=(l,e,t)=>{l.checked?e.classList.add("treeselect-list__item--checked"):e.classList.remove("treeselect-list__item--checked"),Array.isArray(t)&&t[0]===l.id&&!l.disabled?e.classList.add("treeselect-list__item--single-selected"):e.classList.remove("treeselect-list__item--single-selected")},ii=(l,e)=>{l.isPartialChecked?e.classList.add("treeselect-list__item--partial-checked"):e.classList.remove("treeselect-list__item--partial-checked")},li=(l,e)=>{l.disabled?e.classList.add("treeselect-list__item--disabled"):e.classList.remove("treeselect-list__item--disabled")},ni=(l,e,t)=>{if(l.isGroup){const s=e.querySelector(".treeselect-list__item-icon"),i=l.isClosed?t.arrowRight:t.arrowDown;f(i,s),l.isClosed?e.classList.add("treeselect-list__item--closed"):e.classList.remove("treeselect-list__item--closed")}},oi=(l,e)=>{l.hidden?e.classList.add("treeselect-list__item--hidden"):e.classList.remove("treeselect-list__item--hidden")},ai=(l,e,t)=>{const i=e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");l.checked?f(t.check,i):l.isPartialChecked?f(t.partialCheck,i):i.innerHTML=""},ri=(l,e,t)=>{const s=l.level===0,i=20,o=5;if(s){const d=t.some(g=>g.isGroup&&g.level===l.level),u=!l.isGroup&&d?`${i}px`:`${o}px`;e.style.paddingLeft=l.isGroup?"0":u}else e.style.paddingLeft=l.isGroup?`${l.level*i}px`:`${l.level*i+i}px`;e.setAttribute("level",l.level.toString()),e.setAttribute("group",l.isGroup.toString())},ci=(l,e)=>{const t=l.some(i=>!i.hidden),s=e.querySelector(".treeselect-list__empty");t?s.classList.add("treeselect-list__empty--hidden"):s.classList.remove("treeselect-list__empty--hidden")},N=l=>l.parentNode.parentNode,Mt=(l,e)=>e.find(t=>t.id.toString()===l),di=l=>N(l).querySelector(".treeselect-list__item-icon"),hi=(l,e)=>{e&&Object.keys(e).forEach(t=>{const s=e[t];typeof s=="string"&&l.setAttribute(t,s)})};class ui{constructor({options:e,value:t,openLevel:s,listSlotHtmlComponent:i,emptyText:o,isSingleSelect:d,iconElements:u,showCount:g,disabledBranchNode:w,expandSelected:k,inputCallback:v,arrowClickCallback:E,mouseupCallback:L}){r(this,Ne);r(this,Oe);r(this,Pe);r(this,Be);r(this,Ve);r(this,De);r(this,X);r(this,Ie);r(this,He);r(this,Ge);r(this,J);r(this,Me);r(this,Fe);r(this,je);r(this,qe);r(this,$e);r(this,We);r(this,Re);r(this,Ue);r(this,ze);r(this,Ye);r(this,Ke);r(this,Z);r(this,Q);r(this,Xe);c(this,"options");c(this,"value");c(this,"openLevel");c(this,"listSlotHtmlComponent");c(this,"emptyText");c(this,"isSingleSelect");c(this,"showCount");c(this,"disabledBranchNode");c(this,"expandSelected");c(this,"iconElements");c(this,"searchText");c(this,"flattedOptions");c(this,"flattedOptionsBeforeSearch");c(this,"selectedNodes");c(this,"srcElement");c(this,"inputCallback");c(this,"arrowClickCallback");c(this,"mouseupCallback");r(this,F,null);r(this,B,!0);r(this,_,[]);r(this,K,!0);this.options=e,this.value=t,this.openLevel=s??0,this.listSlotHtmlComponent=i??null,this.emptyText=o??"No results found...",this.isSingleSelect=d??!1,this.showCount=g??!1,this.disabledBranchNode=w??!1,this.expandSelected=k??!1,this.iconElements=u,this.searchText="",this.flattedOptions=Ys(this.options,this.openLevel),this.flattedOptionsBeforeSearch=this.flattedOptions,this.selectedNodes={nodes:[],groupedNodes:[]},this.srcElement=a(this,Pe,rs).call(this),this.inputCallback=v,this.arrowClickCallback=E,this.mouseupCallback=L,ei(this.flattedOptions)}updateValue(e){this.value=e,b(this,_,this.isSingleSelect?this.value:[]),ti(e,this.flattedOptions,this.srcElement,this.iconElements,this.isSingleSelect,n(this,_),this.expandSelected,n(this,K)),b(this,K,!1),a(this,Q,St).call(this)}updateSearchValue(e){if(e===this.searchText)return;const t=this.searchText===""&&e!=="";this.searchText=e,t&&(this.flattedOptionsBeforeSearch=JSON.parse(JSON.stringify(this.flattedOptions))),this.searchText===""&&(this.flattedOptions=this.flattedOptionsBeforeSearch.map(s=>{const i=this.flattedOptions.find(o=>o.id===s.id);return i.isClosed=s.isClosed,i.hidden=s.hidden,i}),this.flattedOptionsBeforeSearch=[]),this.searchText&&Zs(this.flattedOptions,e),de(this.flattedOptions,this.srcElement,this.iconElements,n(this,_)),this.focusFirstListElement()}callKeyAction(e){b(this,B,!1);const t=this.srcElement.querySelector(".treeselect-list__item--focused");if(t==null?void 0:t.classList.contains("treeselect-list__item--hidden"))return;const i=e.key;i==="Enter"&&t&&t.dispatchEvent(new Event("mousedown")),(i==="ArrowLeft"||i==="ArrowRight")&&a(this,Ne,os).call(this,t,e),(i==="ArrowDown"||i==="ArrowUp")&&a(this,Oe,as).call(this,t,i)}focusFirstListElement(){const e="treeselect-list__item--focused",t=this.srcElement.querySelector(`.${e}`),s=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(o=>window.getComputedStyle(N(o)).display!=="none");if(!s.length)return;t&&t.classList.remove(e),N(s[0]).classList.add(e)}isLastFocusedElementExist(){return!!n(this,F)}}F=new WeakMap,B=new WeakMap,_=new WeakMap,K=new WeakMap,Ne=new WeakSet,os=function(e,t){if(!e)return;const s=t.key,o=e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"),d=Mt(o,this.flattedOptions),u=e.querySelector(".treeselect-list__item-icon");s==="ArrowLeft"&&!d.isClosed&&d.isGroup&&(u.dispatchEvent(new Event("mousedown")),t.preventDefault()),s==="ArrowRight"&&d.isClosed&&d.isGroup&&(u.dispatchEvent(new Event("mousedown")),t.preventDefault())},Oe=new WeakSet,as=function(e,t){var i;const s=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(o=>window.getComputedStyle(N(o)).display!=="none");if(s.length)if(!e)N(s[0]).classList.add("treeselect-list__item--focused");else{const o=s.findIndex(I=>N(I).classList.contains("treeselect-list__item--focused"));N(s[o]).classList.remove("treeselect-list__item--focused");const u=t==="ArrowDown"?o+1:o-1,g=t==="ArrowDown"?0:s.length-1,w=s[u]??s[g],k=!s[u],v=N(w);v.classList.add("treeselect-list__item--focused");const E=this.srcElement.getBoundingClientRect(),L=v.getBoundingClientRect();if(k&&t==="ArrowDown"){this.srcElement.scroll(0,0);return}if(k&&t==="ArrowUp"){this.srcElement.scroll(0,this.srcElement.scrollHeight);return}const D=((i=this.listSlotHtmlComponent)==null?void 0:i.clientHeight)??0;if(E.y+E.height<L.y+L.height+D){this.srcElement.scroll(0,this.srcElement.scrollTop+L.height);return}if(E.y>L.y){this.srcElement.scroll(0,this.srcElement.scrollTop-L.height);return}}},Pe=new WeakSet,rs=function(){const e=a(this,Be,cs).call(this),t=a(this,X,Lt).call(this,this.options);e.append(...t);const s=a(this,He,ps).call(this);e.append(s);const i=a(this,Ie,us).call(this);return i&&e.append(i),e},Be=new WeakSet,cs=function(){const e=document.createElement("div");return e.classList.add("treeselect-list"),this.isSingleSelect&&e.classList.add("treeselect-list--single-select"),this.disabledBranchNode&&e.classList.add("treeselect-list--disabled-branch-node"),e.addEventListener("mouseout",t=>a(this,Ve,ds).call(this,t)),e.addEventListener("mousemove",()=>a(this,De,hs).call(this)),e.addEventListener("mouseup",()=>this.mouseupCallback(),!0),e},Ve=new WeakSet,ds=function(e){e.stopPropagation(),n(this,F)&&n(this,B)&&n(this,F).classList.add("treeselect-list__item--focused")},De=new WeakSet,hs=function(){b(this,B,!0)},X=new WeakSet,Lt=function(e){return e.reduce((t,s)=>{var o;if((o=s.children)!=null&&o.length){const d=a(this,Ge,ms).call(this,s),u=a(this,X,Lt).call(this,s.children);return d.append(...u),t.push(d),t}const i=a(this,J,yt).call(this,s,!1);return t.push(i),t},[])},Ie=new WeakSet,us=function(){if(!this.listSlotHtmlComponent)return null;const e=document.createElement("div");return e.classList.add("treeselect-list__slot"),e.appendChild(this.listSlotHtmlComponent),e},He=new WeakSet,ps=function(){const e=document.createElement("div");e.classList.add("treeselect-list__empty"),e.setAttribute("title",this.emptyText);const t=document.createElement("span");t.classList.add("treeselect-list__empty-icon"),f(this.iconElements.attention,t);const s=document.createElement("span");return s.classList.add("treeselect-list__empty-text"),s.textContent=this.emptyText,e.append(t,s),e},Ge=new WeakSet,ms=function(e){const t=document.createElement("div");t.setAttribute("group-container-id",e.value.toString()),t.classList.add("treeselect-list__group-container");const s=a(this,J,yt).call(this,e,!0);return t.appendChild(s),t},J=new WeakSet,yt=function(e,t){const s=a(this,Me,fs).call(this,e);if(t){const d=a(this,$e,ws).call(this);s.appendChild(d),s.classList.add("treeselect-list__item--group")}const i=a(this,Re,vs).call(this,e),o=a(this,Ue,Es).call(this,e,t);return s.append(i,o),s},Me=new WeakSet,fs=function(e){const t=document.createElement("div");return hi(t,e.htmlAttr),t.setAttribute("tabindex","-1"),t.setAttribute("title",e.name),t.classList.add("treeselect-list__item"),t.addEventListener("mouseover",()=>a(this,Fe,Cs).call(this,t),!0),t.addEventListener("mouseout",()=>a(this,je,bs).call(this,t),!0),t.addEventListener("mousedown",s=>a(this,qe,gs).call(this,s,e)),t},Fe=new WeakSet,Cs=function(e){n(this,B)&&a(this,Z,xt).call(this,!0,e)},je=new WeakSet,bs=function(e){n(this,B)&&(a(this,Z,xt).call(this,!1,e),b(this,F,e))},qe=new WeakSet,gs=function(e,t){var o;if(e.preventDefault(),e.stopPropagation(),(o=this.flattedOptions.find(d=>d.id===t.value))==null?void 0:o.disabled)return;const i=e.target.querySelector(".treeselect-list__item-checkbox");i.checked=!i.checked,a(this,Ye,ys).call(this,i,t)},$e=new WeakSet,ws=function(){const e=document.createElement("span");return e.setAttribute("tabindex","-1"),e.classList.add("treeselect-list__item-icon"),f(this.iconElements.arrowDown,e),e.addEventListener("mousedown",t=>a(this,We,ks).call(this,t)),e},We=new WeakSet,ks=function(e){e.preventDefault(),e.stopPropagation(),a(this,Ke,xs).call(this,e)},Re=new WeakSet,vs=function(e){const t=document.createElement("div");t.classList.add("treeselect-list__item-checkbox-container");const s=document.createElement("span");s.classList.add("treeselect-list__item-checkbox-icon"),s.innerHTML="";const i=document.createElement("input");return i.setAttribute("tabindex","-1"),i.setAttribute("type","checkbox"),i.setAttribute("input-id",e.value.toString()),i.classList.add("treeselect-list__item-checkbox"),t.append(s,i),t},Ue=new WeakSet,Es=function(e,t){const s=document.createElement("label");if(s.textContent=e.name,s.classList.add("treeselect-list__item-label"),t&&this.showCount){const i=a(this,ze,Ls).call(this,e);s.appendChild(i)}return s},ze=new WeakSet,Ls=function(e){const t=document.createElement("span"),s=this.flattedOptions.filter(i=>i.childOf===e.value);return t.textContent=`(${s.length})`,t.classList.add("treeselect-list__item-label-counter"),t},Ye=new WeakSet,ys=function(e,t){const s=this.flattedOptions.find(i=>i.id===t.value);if(s){if(s!=null&&s.isGroup&&this.disabledBranchNode){const i=di(e);i==null||i.dispatchEvent(new Event("mousedown"));return}if(this.isSingleSelect){const[i]=n(this,_);if(s.id===i)return;b(this,_,[s.id]),Ot([s.id],this.flattedOptions,this.isSingleSelect)}else{s.checked=e.checked;const i=bt(s,this.flattedOptions);e.checked=i}de(this.flattedOptions,this.srcElement,this.iconElements,n(this,_)),a(this,Xe,Ss).call(this)}},Ke=new WeakSet,xs=function(e){var o,d;const t=(d=(o=e.target)==null?void 0:o.parentNode)==null?void 0:d.querySelector("[input-id]"),s=(t==null?void 0:t.getAttribute("input-id"))??null,i=Mt(s,this.flattedOptions);i&&(i.isClosed=!i.isClosed,ce(this.flattedOptions,i),de(this.flattedOptions,this.srcElement,this.iconElements,n(this,_)),this.arrowClickCallback())},Z=new WeakSet,xt=function(e,t){const s="treeselect-list__item--focused";if(e){const i=Array.from(this.srcElement.querySelectorAll(`.${s}`));i.length&&i.forEach(o=>o.classList.remove(s)),t.classList.add(s)}else t.classList.remove(s)},Q=new WeakSet,St=function(){const{ungroupedNodes:e,groupedNodes:t}=Ks(this.flattedOptions);this.selectedNodes={nodes:e,groupedNodes:t}},Xe=new WeakSet,Ss=function(){a(this,Q,St).call(this),this.inputCallback(this.selectedNodes),this.value=this.selectedNodes.nodes.map(e=>e.id)};const Ft=({parentHtmlContainer:l,staticList:e,appendToBody:t,isSingleSelect:s,value:i,direction:o})=>{l||console.error("Validation: parentHtmlContainer prop is required!"),e&&t&&console.error("Validation: You should set staticList to false if you use appendToBody!"),s&&Array.isArray(i)&&console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"),!s&&!Array.isArray(i)&&console.error("Validation: you should pass an array as a value!"),o&&o!=="auto"&&o!=="bottom"&&o!=="top"&&console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!")},wt=l=>l.map(e=>e.id),pi=l=>l?Array.isArray(l)?l:[l]:[],mi=(l,e)=>{if(e){const[t]=l;return t??null}return l};class fi{constructor({parentHtmlContainer:e,value:t,options:s,openLevel:i,appendToBody:o,alwaysOpen:d,showTags:u,tagsCountText:g,clearable:w,searchable:k,placeholder:v,grouped:E,isGroupedValue:L,listSlotHtmlComponent:D,disabled:I,emptyText:ne,staticList:ut,id:kt,isSingleSelect:pt,showCount:Ci,disabledBranchNode:bi,direction:gi,expandSelected:wi,saveScrollPosition:ki,iconElements:vi,inputCallback:Ei,openCallback:Li,closeCallback:yi,nameChangeCallback:xi}){r(this,te);r(this,W);r(this,Je);r(this,Ze);r(this,Qe);r(this,et);r(this,tt);r(this,st);r(this,it);r(this,lt);r(this,nt);r(this,ot);r(this,se);r(this,at);r(this,R);r(this,ie);r(this,U);r(this,rt);r(this,le);r(this,ct);r(this,dt);r(this,ht);c(this,"parentHtmlContainer");c(this,"value");c(this,"options");c(this,"openLevel");c(this,"appendToBody");c(this,"alwaysOpen");c(this,"showTags");c(this,"tagsCountText");c(this,"clearable");c(this,"searchable");c(this,"placeholder");c(this,"grouped");c(this,"isGroupedValue");c(this,"listSlotHtmlComponent");c(this,"disabled");c(this,"emptyText");c(this,"staticList");c(this,"id");c(this,"isSingleSelect");c(this,"showCount");c(this,"disabledBranchNode");c(this,"direction");c(this,"expandSelected");c(this,"saveScrollPosition");c(this,"iconElements");c(this,"inputCallback");c(this,"openCallback");c(this,"closeCallback");c(this,"nameChangeCallback");c(this,"ungroupedValue");c(this,"groupedValue");c(this,"isListOpened");c(this,"selectedName");c(this,"srcElement");r(this,h,null);r(this,p,null);r(this,q,null);r(this,ee,0);r(this,$,0);r(this,A,null);r(this,T,null);r(this,S,null);r(this,V,null);Ft({parentHtmlContainer:e,value:t,staticList:ut,appendToBody:o,isSingleSelect:pt}),this.parentHtmlContainer=e,this.value=[],this.options=s??[],this.openLevel=i??0,this.appendToBody=o??!1,this.alwaysOpen=!!(d&&!I),this.showTags=u??!0,this.tagsCountText=g??"elements selected",this.clearable=w??!0,this.searchable=k??!0,this.placeholder=v??"Search...",this.grouped=E??!0,this.isGroupedValue=L??!1,this.listSlotHtmlComponent=D??null,this.disabled=I??!1,this.emptyText=ne??"No results found...",this.staticList=!!(ut&&!this.appendToBody),this.id=kt??"",this.isSingleSelect=pt??!1,this.showCount=Ci??!1,this.disabledBranchNode=bi??!1,this.direction=gi??"auto",this.expandSelected=wi??!1,this.saveScrollPosition=ki??!0,this.iconElements=z(vi),this.inputCallback=Ei,this.openCallback=Li,this.closeCallback=yi,this.nameChangeCallback=xi,this.ungroupedValue=[],this.groupedValue=[],this.isListOpened=!1,this.selectedName="",this.srcElement=null,a(this,te,_t).call(this,t)}mount(){Ft({parentHtmlContainer:this.parentHtmlContainer,value:this.value,staticList:this.staticList,appendToBody:this.appendToBody,isSingleSelect:this.isSingleSelect}),this.iconElements=z(this.iconElements),a(this,te,_t).call(this,this.value)}updateValue(e){var s;const t=n(this,h);if(t){const i=pi(e);t.updateValue(i);const{groupedNodes:o,nodes:d}=t.selectedNodes,u=this.grouped||this.isSingleSelect?o:d;(s=n(this,p))==null||s.updateValue(u),a(this,W,mt).call(this,{groupedNodes:o,nodes:d})}}destroy(){this.srcElement&&(a(this,se,At).call(this),this.srcElement.innerHTML="",this.srcElement=null,a(this,U,Ct).call(this,!0))}focus(){n(this,p)&&n(this,p).focus()}toggleOpenClose(){n(this,p)&&(n(this,p).openClose(),n(this,p).focus())}scrollWindowHandler(){this.updateListPosition()}focusWindowHandler(e){var s,i,o;((s=this.srcElement)==null?void 0:s.contains(e.target))||((i=n(this,h))==null?void 0:i.srcElement.contains(e.target))||((o=n(this,p))==null||o.blur(),a(this,U,Ct).call(this,!1),a(this,R,ft).call(this,!1))}blurWindowHandler(){var e;(e=n(this,p))==null||e.blur(),a(this,U,Ct).call(this,!1),a(this,R,ft).call(this,!1)}updateListPosition(){var D;const e=this.srcElement,t=(D=n(this,h))==null?void 0:D.srcElement;if(!e||!t)return;const{height:s}=t.getBoundingClientRect(),{x:i,y:o,height:d,width:u}=e.getBoundingClientRect(),g=window.innerHeight,w=o,k=g-o-d;let v=w>k&&w>=s&&k<s;if(this.direction!=="auto"&&(v=this.direction==="top"),this.appendToBody){(t.style.top!=="0px"||t.style.left!=="0px")&&(t.style.top="0px",t.style.left="0px");const I=i+window.scrollX,ne=v?o+window.scrollY-s:o+window.scrollY+d;t.style.transform=`translate(${I}px,${ne}px)`,t.style.width=`${u}px`}const E=v?"top":"bottom";t.getAttribute("direction")!==E&&(t.setAttribute("direction",E),a(this,at,Hs).call(this,v,this.appendToBody))}}return h=new WeakMap,p=new WeakMap,q=new WeakMap,ee=new WeakMap,$=new WeakMap,A=new WeakMap,T=new WeakMap,S=new WeakMap,V=new WeakMap,te=new WeakSet,_t=function(e){var o;this.destroy();const{container:t,list:s,input:i}=a(this,Je,_s).call(this);this.srcElement=t,b(this,h,s),b(this,p,i),b(this,A,this.scrollWindowHandler.bind(this)),b(this,T,this.scrollWindowHandler.bind(this)),b(this,S,this.focusWindowHandler.bind(this)),b(this,V,this.blurWindowHandler.bind(this)),this.alwaysOpen&&((o=n(this,p))==null||o.openClose()),this.disabled?this.srcElement.classList.add("treeselect--disabled"):this.srcElement.classList.remove("treeselect--disabled"),this.updateValue(e??this.value)},W=new WeakSet,mt=function({groupedNodes:e,nodes:t}){this.ungroupedValue=t?wt(t):[],this.groupedValue=e?wt(e):[];const s=this.isGroupedValue||this.isSingleSelect?this.groupedValue:this.ungroupedValue;this.value=mi(s,this.isSingleSelect)},Je=new WeakSet,_s=function(){const e=this.parentHtmlContainer;e.classList.add("treeselect");const t=new ui({options:this.options,value:this.ungroupedValue,openLevel:this.openLevel,listSlotHtmlComponent:this.listSlotHtmlComponent,emptyText:this.emptyText,isSingleSelect:this.isSingleSelect,showCount:this.showCount,disabledBranchNode:this.disabledBranchNode,expandSelected:this.expandSelected,iconElements:this.iconElements,inputCallback:d=>a(this,it,Bs).call(this,d),arrowClickCallback:()=>a(this,lt,Vs).call(this),mouseupCallback:()=>{var d;return(d=n(this,p))==null?void 0:d.focus()}}),{groupedNodes:s,nodes:i}=t.selectedNodes,o=new $s({value:this.grouped||this.isSingleSelect?s:i,showTags:this.showTags,tagsCountText:this.tagsCountText,clearable:this.clearable,isAlwaysOpened:this.alwaysOpen,searchable:this.searchable,placeholder:this.placeholder,disabled:this.disabled,isSingleSelect:this.isSingleSelect,id:this.id,iconElements:this.iconElements,inputCallback:d=>a(this,Ze,As).call(this,d),searchCallback:d=>a(this,et,Ns).call(this,d),openCallback:()=>a(this,ot,Is).call(this),closeCallback:()=>a(this,se,At).call(this),keydownCallback:d=>a(this,Qe,Ts).call(this,d),focusCallback:()=>a(this,tt,Os).call(this),blurCallback:()=>a(this,st,Ps).call(this),nameChangeCallback:d=>a(this,nt,Ds).call(this,d)});return this.appendToBody&&b(this,q,new ResizeObserver(()=>this.updateListPosition())),e.append(o.srcElement),{container:e,list:t,input:o}},Ze=new WeakSet,As=function(e){var o,d,u,g,w;const t=wt(e);(o=n(this,h))==null||o.updateValue(t);const s=(u=(d=n(this,h))==null?void 0:d.selectedNodes)==null?void 0:u.nodes,i=(w=(g=n(this,h))==null?void 0:g.selectedNodes)==null?void 0:w.groupedNodes;a(this,W,mt).call(this,{groupedNodes:i,nodes:s}),a(this,le,Nt).call(this)},Qe=new WeakSet,Ts=function(e){var t;this.isListOpened&&((t=n(this,h))==null||t.callKeyAction(e))},et=new WeakSet,Ns=function(e){n(this,$)&&clearTimeout(n(this,$)),b(this,$,setTimeout(()=>{var t;(t=n(this,h))==null||t.updateSearchValue(e),this.updateListPosition()},350))},tt=new WeakSet,Os=function(){a(this,R,ft).call(this,!0),n(this,S)&&n(this,S)&&n(this,V)&&(document.addEventListener("mousedown",n(this,S),!0),document.addEventListener("focus",n(this,S),!0),window.addEventListener("blur",n(this,V)))},st=new WeakSet,Ps=function(){setTimeout(()=>{var s,i;const e=(s=n(this,p))==null?void 0:s.srcElement.contains(document.activeElement),t=(i=n(this,h))==null?void 0:i.srcElement.contains(document.activeElement);!e&&!t&&this.blurWindowHandler()},1)},it=new WeakSet,Bs=function(e){var o,d,u,g;const{groupedNodes:t,nodes:s}=e,i=this.grouped||this.isSingleSelect?t:s;(o=n(this,p))==null||o.updateValue(i),a(this,W,mt).call(this,{groupedNodes:t,nodes:s}),this.isSingleSelect&&!this.alwaysOpen&&((d=n(this,p))==null||d.openClose(),(u=n(this,p))==null||u.clearSearch()),(g=n(this,p))==null||g.focus(),a(this,le,Nt).call(this)},lt=new WeakSet,Vs=function(){var e;(e=n(this,p))==null||e.focus(),this.updateListPosition()},nt=new WeakSet,Ds=function(e){this.selectedName!==e&&(this.selectedName=e,a(this,ct,Ms).call(this))},ot=new WeakSet,Is=function(){var e;this.isListOpened=!0,n(this,A)&&n(this,T)&&(window.addEventListener("scroll",n(this,A),!0),window.addEventListener("resize",n(this,T))),!(!n(this,h)||!this.srcElement)&&(this.appendToBody?(document.body.appendChild(n(this,h).srcElement),(e=n(this,q))==null||e.observe(this.srcElement)):this.srcElement.appendChild(n(this,h).srcElement),this.updateListPosition(),a(this,ie,Tt).call(this,!0),a(this,rt,Gs).call(this),a(this,dt,Fs).call(this))},se=new WeakSet,At=function(){var t;this.alwaysOpen||(this.isListOpened=!1,n(this,A)&&n(this,T)&&(window.removeEventListener("scroll",n(this,A),!0),window.removeEventListener("resize",n(this,T))),!n(this,h)||!this.srcElement)||!(this.appendToBody?document.body.contains(n(this,h).srcElement):this.srcElement.contains(n(this,h).srcElement))||(b(this,ee,n(this,h).srcElement.scrollTop),this.appendToBody?(document.body.removeChild(n(this,h).srcElement),(t=n(this,q))==null||t.disconnect()):this.srcElement.removeChild(n(this,h).srcElement),a(this,ie,Tt).call(this,!1),a(this,ht,js).call(this))},at=new WeakSet,Hs=function(e,t){if(!n(this,h)||!n(this,p))return;const s=t?"treeselect-list--top-to-body":"treeselect-list--top",i=t?"treeselect-list--bottom-to-body":"treeselect-list--bottom";e?(n(this,h).srcElement.classList.add(s),n(this,h).srcElement.classList.remove(i),n(this,p).srcElement.classList.add("treeselect-input--top"),n(this,p).srcElement.classList.remove("treeselect-input--bottom")):(n(this,h).srcElement.classList.remove(s),n(this,h).srcElement.classList.add(i),n(this,p).srcElement.classList.remove("treeselect-input--top"),n(this,p).srcElement.classList.add("treeselect-input--bottom"))},R=new WeakSet,ft=function(e){!n(this,p)||!n(this,h)||(e?(n(this,p).srcElement.classList.add("treeselect-input--focused"),n(this,h).srcElement.classList.add("treeselect-list--focused")):(n(this,p).srcElement.classList.remove("treeselect-input--focused"),n(this,h).srcElement.classList.remove("treeselect-list--focused")))},ie=new WeakSet,Tt=function(e){var t,s,i,o;e?(t=n(this,p))==null||t.srcElement.classList.add("treeselect-input--opened"):(s=n(this,p))==null||s.srcElement.classList.remove("treeselect-input--opened"),this.staticList?(i=n(this,h))==null||i.srcElement.classList.add("treeselect-list--static"):(o=n(this,h))==null||o.srcElement.classList.remove("treeselect-list--static")},U=new WeakSet,Ct=function(e){!n(this,A)||!n(this,T)||!n(this,S)||!n(this,V)||((!this.alwaysOpen||e)&&(window.removeEventListener("scroll",n(this,A),!0),window.removeEventListener("resize",n(this,T))),document.removeEventListener("mousedown",n(this,S),!0),document.removeEventListener("focus",n(this,S),!0),window.removeEventListener("blur",n(this,V)))},rt=new WeakSet,Gs=function(){var t,s,i;const e=(t=n(this,h))==null?void 0:t.isLastFocusedElementExist();this.saveScrollPosition&&e?(s=n(this,h))==null||s.srcElement.scroll(0,n(this,ee)):(i=n(this,h))==null||i.focusFirstListElement()},le=new WeakSet,Nt=function(){var e;console.log("emit input",this.value),(e=this.srcElement)==null||e.dispatchEvent(new CustomEvent("input",{detail:this.value})),this.inputCallback&&this.inputCallback(this.value)},ct=new WeakSet,Ms=function(){var e;(e=this.srcElement)==null||e.dispatchEvent(new CustomEvent("name-change",{detail:this.selectedName})),this.nameChangeCallback&&this.nameChangeCallback(this.selectedName)},dt=new WeakSet,Fs=function(){var e;this.alwaysOpen||((e=this.srcElement)==null||e.dispatchEvent(new CustomEvent("open",{detail:this.value})),this.openCallback&&this.openCallback(this.value))},ht=new WeakSet,js=function(){var e;this.alwaysOpen||((e=this.srcElement)==null||e.dispatchEvent(new CustomEvent("close",{detail:this.value})),this.closeCallback&&this.closeCallback(this.value))},fi});
