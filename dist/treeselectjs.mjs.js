function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}var e={};t(e,"Treeselect",(function(){return me}),(function(t){return me=t}));var s={};t(s,"TreeselectInput",(function(){return G}),(function(t){return G=t}));const i={arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',arrowDown:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',attention:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',cross:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',partialCheck:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},l=(t,e)=>{if(e.innerHTML="","string"==typeof t)e.innerHTML=t;else{const s=t.cloneNode(!0);e.appendChild(s)}},n=t=>{const e=t?Object.assign({},t):{};return Object.keys(i).forEach((t=>{e[t]||(e[t]=i[t])})),e};var o,a,c,r,h,d,u,p,m,f,v,w,g,b,E,k,C,y,L,S,_,T,x,O,A,H,B,N,P=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},M=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};class G{focus(){setTimeout((()=>P(this,c,"f").focus()),0)}blur(){this.isOpened&&P(this,o,"m",v).call(this),this.clearSearch(),P(this,c,"f").blur()}updateValue(t){this.value=t,P(this,o,"m",u).call(this),P(this,o,"m",f).call(this)}removeItem(t){this.value=this.value.filter((e=>e.id!==t)),P(this,o,"m",N).call(this),P(this,o,"m",u).call(this),P(this,o,"m",f).call(this)}clear(){this.value=[],P(this,o,"m",N).call(this),P(this,o,"m",u).call(this),this.clearSearch()}openClose(){P(this,o,"m",v).call(this)}clearSearch(){this.searchText="",this.searchCallback(""),P(this,o,"m",f).call(this)}constructor({value:t,showTags:e,tagsCountText:s,clearable:i,isAlwaysOpened:l,searchable:n,placeholder:u,disabled:p,isSingleSelect:m,id:f,iconElements:v,inputCallback:g,searchCallback:E,openCallback:k,closeCallback:C,keydownCallback:y,focusCallback:L,blurCallback:_,nameChangeCallback:T}){o.add(this),a.set(this,void 0),c.set(this,void 0),r.set(this,void 0),h.set(this,void 0),this.value=t,this.showTags=e,this.tagsCountText=s,this.searchable=n,this.placeholder=u,this.clearable=i,this.isAlwaysOpened=l,this.disabled=p,this.isSingleSelect=m,this.id=f,this.iconElements=v,this.isOpened=!1,this.searchText="",M(this,a,P(this,o,"m",b).call(this),"f"),M(this,c,P(this,o,"m",S).call(this),"f"),M(this,r,P(this,o,"m",x).call(this),"f"),M(this,h,null,"f"),this.inputCallback=g,this.searchCallback=E,this.openCallback=k,this.closeCallback=C,this.keydownCallback=y,this.focusCallback=L,this.blurCallback=_,this.nameChangeCallback=T,this.srcElement=P(this,o,"m",w).call(this,P(this,a,"f"),P(this,c,"f"),P(this,r,"f")),P(this,o,"m",d).call(this)}}a=new WeakMap,c=new WeakMap,r=new WeakMap,h=new WeakMap,o=new WeakSet,d=function(){P(this,o,"m",u).call(this),P(this,o,"m",f).call(this),P(this,o,"m",p).call(this)},u=function(){if(P(this,a,"f").innerHTML="",this.showTags){P(this,a,"f").append(...P(this,o,"m",E).call(this));const e=(t=this.value).reduce(((e,{name:s},i)=>(e+=s,i<t.length-1&&(e+=", "),e)),"");this.nameChangeCallback(e)}else{const t=P(this,o,"m",L).call(this);P(this,a,"f").appendChild(t),this.nameChangeCallback(t.innerHTML)}var t;P(this,a,"f").appendChild(P(this,c,"f"))},p=function(){const t=[];P(this,r,"f").innerHTML="",this.clearable&&t.push(P(this,o,"m",O).call(this)),this.isAlwaysOpened||t.push(P(this,o,"m",H).call(this,this.isOpened)),t.length&&P(this,r,"f").append(...t)},m=function(){if(!this.isAlwaysOpened&&P(this,h,"f")){const t=this.isOpened?this.iconElements.arrowUp:this.iconElements.arrowDown;l(t,P(this,h,"f"))}},f=function(){var t;(null===(t=this.value)||void 0===t?void 0:t.length)?(P(this,c,"f").removeAttribute("placeholder"),this.srcElement.classList.remove("treeselect-input--value-not-selected")):(P(this,c,"f").setAttribute("placeholder",this.placeholder),this.srcElement.classList.add("treeselect-input--value-not-selected")),this.searchable?this.srcElement.classList.remove("treeselect-input--unsearchable"):this.srcElement.classList.add("treeselect-input--unsearchable"),this.isSingleSelect?this.srcElement.classList.add("treeselect-input--is-single-select"):this.srcElement.classList.remove("treeselect-input--is-single-select"),P(this,c,"f").value=this.searchText},v=function(){this.isOpened=!this.isOpened,P(this,o,"m",m).call(this),this.isOpened?this.openCallback():this.closeCallback()},w=function(t,e,s){const i=document.createElement("div");return i.classList.add("treeselect-input"),i.setAttribute("tabindex","-1"),i.addEventListener("mousedown",(t=>P(this,o,"m",g).call(this,t))),i.addEventListener("focus",(()=>this.focusCallback()),!0),i.addEventListener("blur",(()=>this.blurCallback()),!0),t.appendChild(e),i.append(t,s),i},g=function(t){t.preventDefault(),t.stopPropagation(),this.isOpened||P(this,o,"m",v).call(this),this.focus()},b=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__tags"),t},E=function(){return this.value.map((t=>{const e=document.createElement("div");e.classList.add("treeselect-input__tags-element"),e.setAttribute("tabindex","-1"),e.setAttribute("tag-id",t.id.toString()),e.setAttribute("title",t.name);const s=P(this,o,"m",C).call(this,t.name),i=P(this,o,"m",y).call(this);return e.addEventListener("mousedown",(e=>P(this,o,"m",k).call(this,e,t.id))),e.append(s,i),e}))},k=function(t,e){t.preventDefault(),t.stopPropagation(),this.removeItem(e),this.focus()},C=function(t){const e=document.createElement("span");return e.classList.add("treeselect-input__tags-name"),e.innerHTML=t,e},y=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-cross"),l(this.iconElements.cross,t),t},L=function(){const t=document.createElement("span");if(t.classList.add("treeselect-input__tags-count"),!this.value.length)return t.innerHTML="",t.setAttribute("title",""),t;const e=1===this.value.length?this.value[0].name:`${this.value.length} ${this.tagsCountText}`;return t.innerHTML=e,t.setAttribute("title",e),t},S=function(){const t=document.createElement("input");return t.classList.add("treeselect-input__edit"),this.id&&t.setAttribute("id",this.id),this.searchable&&!this.disabled||t.setAttribute("readonly","readonly"),this.disabled&&t.setAttribute("tabindex","-1"),t.addEventListener("keydown",(t=>P(this,o,"m",_).call(this,t))),t.addEventListener("input",(e=>P(this,o,"m",T).call(this,e,t))),t},_=function(t){t.stopPropagation(),"Backspace"!==t.key||this.searchText.length||!this.value.length||this.showTags||this.clear(),"Backspace"===t.key&&!this.searchText.length&&this.value.length&&this.removeItem(this.value[this.value.length-1].id),"Space"!==t.code||this.searchText&&this.searchable||P(this,o,"m",v).call(this),"Enter"===t.key&&t.preventDefault(),this.keydownCallback(t.key),"Tab"!==t.key&&this.focus()},T=function(t,e){t.stopPropagation();const s=this.searchText,i=e.value.trim();if(0!==s.length||0!==i.length){if(this.searchable){const e=t.target.value;this.searchCallback(e),this.isOpened||P(this,o,"m",v).call(this)}else e.value="";this.searchText=e.value}else e.value=""},x=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__operators"),t},O=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__clear"),t.setAttribute("tabindex","-1"),l(this.iconElements.clear,t),t.addEventListener("mousedown",(t=>P(this,o,"m",A).call(this,t))),t},A=function(t){t.preventDefault(),t.stopPropagation(),(this.searchText.length||this.value.length)&&this.clear(),this.focus()},H=function(t){M(this,h,document.createElement("span"),"f"),P(this,h,"f").classList.add("treeselect-input__arrow");const e=t?this.iconElements.arrowUp:this.iconElements.arrowDown;return l(e,P(this,h,"f")),P(this,h,"f").addEventListener("mousedown",(t=>P(this,o,"m",B).call(this,t))),P(this,h,"f")},B=function(t){t.stopPropagation(),t.preventDefault(),this.focus(),P(this,o,"m",v).call(this)},N=function(){this.inputCallback(this.value)};var W={};t(W,"TreeselectList",(function(){return Mt}),(function(t){return Mt=t}));const V=(t,e,s="",i=0)=>t.reduce(((t,l)=>{var n;const o=!!(null===(n=l.children)||void 0===n?void 0:n.length),a=i>=e&&o,c=i>e;if(t.push({id:l.value,name:l.name,childOf:s,isGroup:o,checked:!1,isPartialChecked:!1,level:i,isClosed:a,hidden:c}),o){const s=V(l.children,e,l.value,i+1);t.push(...s)}return t}),[]),j=({id:t,checked:e},s)=>{s.forEach((i=>{i.childOf===t&&(i.checked=null==e||e,i.isPartialChecked=!1,i.isGroup&&j(i,s))}))},q=(t,e)=>{const s=e.find((e=>e.id===t)),i=e.filter((t=>t.childOf===(null==s?void 0:s.id)));if(!s)return;const l=i.every((t=>t.checked)),n=i.some((t=>t.isPartialChecked||t.checked))&&!l,o=!l&&!n;l&&(s.checked=!0,s.isPartialChecked=!1),n&&(s.checked=!1,s.isPartialChecked=!0),o&&(s.checked=!1,s.isPartialChecked=!1),s.childOf&&q(s.childOf,e)},D=({id:t,isGroup:e,childOf:s,checked:i},l,n)=>{e&&j({id:t,checked:i},l),s&&!n&&q(s,l)},I=(t,e)=>e.reduce(((s,i)=>(i.childOf===t&&(s.push(i),i.isGroup&&s.push(...I(i.id,e))),s)),[]),$=(t,e)=>e.reduce(((s,i)=>(i.id===t&&(s.push(i),i.childOf&&s.push(...$(i.childOf,e))),s)),[]),R=t=>{const{onlyGroupsIds:e,allItems:s}=t.reduce(((t,e)=>e.checked?(e.isGroup&&t.onlyGroupsIds.push(e.id),t.allItems.push(e),t):t),{onlyGroupsIds:[],allItems:[]});return s.filter((t=>!e.some((e=>e===t.childOf))))},z=(t,{id:e,isClosed:s})=>{t.filter((t=>t.childOf===e)).forEach((e=>{e.hidden=null!=s&&s,e.isGroup&&!e.isClosed&&z(t,{id:e.id,isClosed:s})}))},U=(t,e)=>{const s=((t,e)=>t.reduce(((s,i)=>{if(i.name.toLowerCase().includes(e.toLowerCase())){if(s.push(i),i.isGroup){const e=I(i.id,t);s.push(...e)}if(i.childOf){const e=$(i.childOf,t);s.push(...e)}}return s}),[]))(t,e);t.forEach((e=>{s.some((t=>t.id===e.id))?(e.isGroup&&(e.isClosed=!1,z(t,e)),e.hidden=!1):e.hidden=!0}))},Y=(t,e,s)=>{(t=>{t.forEach((t=>{t.checked=!1,t.isPartialChecked=!1}))})(e);e.filter((e=>t.some((t=>t===e.id)))).forEach((t=>{t.checked=!0,t.isPartialChecked=!1,D(t,e,s)}))};var F,J,K,X,Q,Z,tt,et,st,it,lt,nt,ot,at,ct,rt,ht,dt,ut,pt,mt,ft,vt,wt,gt,bt,Et,kt,Ct=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},yt=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};let Lt=[];const St=(t,e,s)=>{t.forEach((i=>{const l=e.querySelector(`[input-id="${i.id}"]`),n=Nt(l);l.checked=i.checked,_t(i,n),Tt(i,n),xt(i,n,s),Ot(i,n),Ht(i,n,t),At(i,l,s)})),Bt(t,e)},_t=(t,e)=>{t.checked?e.classList.add("treeselect-list__item--checked"):e.classList.remove("treeselect-list__item--checked"),Array.isArray(Lt)&&Lt[0]===t.id?e.classList.add("treeselect-list__item--single-selected"):e.classList.remove("treeselect-list__item--single-selected")},Tt=(t,e)=>{t.isPartialChecked?e.classList.add("treeselect-list__item--partial-checked"):e.classList.remove("treeselect-list__item--partial-checked")},xt=(t,e,s)=>{if(t.isGroup){const i=e.querySelector(".treeselect-list__item-icon"),n=t.isClosed?s.arrowRight:s.arrowDown;l(n,i),t.isClosed?e.classList.add("treeselect-list__item--closed"):e.classList.remove("treeselect-list__item--closed")}},Ot=(t,e)=>{t.hidden?e.classList.add("treeselect-list__item--hidden"):e.classList.remove("treeselect-list__item--hidden")},At=(t,e,s)=>{const i=e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");t.checked?l(s.check,i):t.isPartialChecked?l(s.partialCheck,i):i.innerHTML=""},Ht=(t,e,s)=>{if(0===t.level){const i=s.some((e=>e.isGroup&&e.level===t.level)),l=!t.isGroup&&i?"20px":"5px";e.style.paddingLeft=t.isGroup?"0":l}else e.style.paddingLeft=t.isGroup?20*t.level+"px":20*t.level+20+"px";e.setAttribute("level",t.level.toString()),e.setAttribute("group",t.isGroup.toString())},Bt=(t,e)=>{const s=t.some((t=>!t.hidden)),i=e.querySelector(".treeselect-list__empty");s?i.classList.add("treeselect-list__empty--hidden"):i.classList.remove("treeselect-list__empty--hidden")},Nt=t=>t.parentNode.parentNode,Pt=(t,e)=>e.find((e=>e.id.toString()===t));class Mt{updateValue(t){var e,s,i,l,n;this.value=t,Lt=this.isSingleSelect?this.value:[],e=t,s=this.flattedOptions,i=this.srcElement,l=this.iconElements,n=this.isSingleSelect,Y(e,s,n),St(s,i,l),Ct(this,F,"m",Et).call(this)}updateSearchValue(t){if(t===this.searchText)return;const e=""===this.searchText&&""!==t;this.searchText=t,e&&(this.flattedOptionsBeforeSearch=JSON.parse(JSON.stringify(this.flattedOptions))),""===this.searchText&&(this.flattedOptions=this.flattedOptionsBeforeSearch.map((t=>{const e=this.flattedOptions.find((e=>e.id===t.id));return e.isClosed=t.isClosed,e.hidden=t.hidden,e})),this.flattedOptionsBeforeSearch=[]),this.searchText&&U(this.flattedOptions,t),St(this.flattedOptions,this.srcElement,this.iconElements),this.focusFirstListElement()}callKeyAction(t){yt(this,K,!1,"f");const e=this.srcElement.querySelector(".treeselect-list__item--focused");"Enter"===t&&e&&e.dispatchEvent(new Event("mousedown")),"ArrowLeft"!==t&&"ArrowRight"!==t||Ct(this,F,"m",X).call(this,e,t),"ArrowDown"!==t&&"ArrowUp"!==t||Ct(this,F,"m",Q).call(this,e,t)}focusFirstListElement(){const t="treeselect-list__item--focused",e=this.srcElement.querySelector(`.${t}`),s=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Nt(t)).display));if(!s.length)return;e&&e.classList.remove(t);Nt(s[0]).classList.add(t)}constructor({options:t,value:e,openLevel:s,listSlotHtmlComponent:i,emptyText:l,isSingleSelect:n,iconElements:o,showCount:a,disabledBranchNode:c,inputCallback:r,arrowClickCallback:h,mouseupCallback:d}){F.add(this),J.set(this,null),K.set(this,!0),this.options=t,this.value=e,this.openLevel=null!=s?s:0,this.listSlotHtmlComponent=null!=i?i:null,this.emptyText=null!=l?l:"No results found...",this.isSingleSelect=null!=n&&n,this.showCount=null!=a&&a,this.disabledBranchNode=null!=c&&c,this.iconElements=o,this.searchText="",this.flattedOptions=V(this.options,this.openLevel),this.flattedOptionsBeforeSearch=this.flattedOptions,this.selectedNodes={nodes:[],groupedNodes:[]},this.srcElement=Ct(this,F,"m",Z).call(this),this.inputCallback=r,this.arrowClickCallback=h,this.mouseupCallback=d,this.updateValue(this.value),(t=>{const{duplications:e}=t.reduce(((t,e)=>(t.allItems.some((t=>t.toString()===e.id.toString()))&&t.duplications.push(e.id),t.allItems.push(e.id),t)),{duplications:[],allItems:[]});e.length&&console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`)})(this.flattedOptions)}}J=new WeakMap,K=new WeakMap,F=new WeakSet,X=function(t,e){if(!t)return;const s=t.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"),i=Pt(s,this.flattedOptions),l=t.querySelector(".treeselect-list__item-icon");"ArrowLeft"===e&&!i.isClosed&&i.isGroup&&l.dispatchEvent(new Event("mousedown")),"ArrowRight"===e&&i.isClosed&&i.isGroup&&l.dispatchEvent(new Event("mousedown"))},Q=function(t,e){var s,i,l;const n=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Nt(t)).display));if(n.length)if(t){const t=n.findIndex((t=>Nt(t).classList.contains("treeselect-list__item--focused")));Nt(n[t]).classList.remove("treeselect-list__item--focused");const o="ArrowDown"===e?t+1:t-1,a="ArrowDown"===e?0:n.length-1,c=null!==(s=n[o])&&void 0!==s?s:n[a],r=!n[o],h=Nt(c);h.classList.add("treeselect-list__item--focused");const d=this.srcElement.getBoundingClientRect(),u=h.getBoundingClientRect();if(r&&"ArrowDown"===e)return void this.srcElement.scroll(0,0);if(r&&"ArrowUp"===e)return void this.srcElement.scroll(0,this.srcElement.scrollHeight);const p=null!==(l=null===(i=this.listSlotHtmlComponent)||void 0===i?void 0:i.clientHeight)&&void 0!==l?l:0;if(d.y+d.height<u.y+u.height+p)return void this.srcElement.scroll(0,this.srcElement.scrollTop+u.height);if(d.y>u.y)return void this.srcElement.scroll(0,this.srcElement.scrollTop-u.height)}else{Nt(n[0]).classList.add("treeselect-list__item--focused")}},Z=function(){const t=Ct(this,F,"m",tt).call(this),e=Ct(this,F,"m",it).call(this,this.options);t.append(...e);const s=Ct(this,F,"m",lt).call(this);s&&t.append(s);const i=Ct(this,F,"m",nt).call(this);return t.append(i),t},tt=function(){const t=document.createElement("div");return t.classList.add("treeselect-list"),this.isSingleSelect&&t.classList.add("treeselect-list--single-select"),this.disabledBranchNode&&t.classList.add("treeselect-list--disabled-branch-node"),t.addEventListener("mouseout",(t=>Ct(this,F,"m",et).call(this,t))),t.addEventListener("mousemove",(()=>Ct(this,F,"m",st).call(this))),t.addEventListener("mouseup",(()=>this.mouseupCallback()),!0),t},et=function(t){t.stopPropagation(),Ct(this,J,"f")&&Ct(this,K,"f")&&Ct(this,J,"f").classList.add("treeselect-list__item--focused")},st=function(){yt(this,K,!0,"f")},it=function t(e){return e.reduce(((e,s)=>{var i;if(null===(i=s.children)||void 0===i?void 0:i.length){const i=Ct(this,F,"m",ot).call(this,s),l=Ct(this,F,"m",t).call(this,s.children);return i.append(...l),e.push(i),e}const l=Ct(this,F,"m",at).call(this,s,!1);return e.push(l),e}),[])},lt=function(){if(!this.listSlotHtmlComponent)return null;const t=document.createElement("div");return t.classList.add("treeselect-list__slot"),t.appendChild(this.listSlotHtmlComponent),t},nt=function(){const t=document.createElement("div");t.classList.add("treeselect-list__empty"),t.setAttribute("title",this.emptyText);const e=document.createElement("span");e.classList.add("treeselect-list__empty-icon"),l(this.iconElements.attention,e);const s=document.createElement("span");return s.classList.add("treeselect-list__empty-text"),s.innerHTML=this.emptyText,t.append(e,s),t},ot=function(t){const e=document.createElement("div");e.setAttribute("group-container-id",t.value.toString()),e.classList.add("treeselect-list__group-container");const s=Ct(this,F,"m",at).call(this,t,!0);return e.appendChild(s),e},at=function(t,e){const s=Ct(this,F,"m",ct).call(this,t);if(e){const t=Ct(this,F,"m",ut).call(this);s.appendChild(t),s.classList.add("treeselect-list__item--group")}const i=Ct(this,F,"m",mt).call(this,t),l=Ct(this,F,"m",ft).call(this,t,e);return s.append(i,l),s},ct=function(t){const e=document.createElement("div");return e.setAttribute("tabindex","-1"),e.setAttribute("title",t.name),e.classList.add("treeselect-list__item"),e.addEventListener("mouseover",(()=>Ct(this,F,"m",rt).call(this,e)),!0),e.addEventListener("mouseout",(()=>Ct(this,F,"m",ht).call(this,e)),!0),e.addEventListener("mousedown",(e=>Ct(this,F,"m",dt).call(this,e,t))),e},rt=function(t){Ct(this,K,"f")&&Ct(this,F,"m",bt).call(this,!0,t)},ht=function(t){Ct(this,K,"f")&&(Ct(this,F,"m",bt).call(this,!1,t),yt(this,J,t,"f"))},dt=function(t,e){t.preventDefault(),t.stopPropagation();const s=t.target.querySelector(".treeselect-list__item-checkbox");s.checked=!s.checked,Ct(this,F,"m",wt).call(this,s,e)},ut=function(){const t=document.createElement("span");return t.setAttribute("tabindex","-1"),t.classList.add("treeselect-list__item-icon"),l(this.iconElements.arrowDown,t),t.addEventListener("mousedown",(t=>Ct(this,F,"m",pt).call(this,t))),t},pt=function(t){t.preventDefault(),t.stopPropagation(),Ct(this,F,"m",gt).call(this,t)},mt=function(t){const e=document.createElement("div");e.classList.add("treeselect-list__item-checkbox-container");const s=document.createElement("span");s.classList.add("treeselect-list__item-checkbox-icon"),s.innerHTML="";const i=document.createElement("input");return i.setAttribute("tabindex","-1"),i.setAttribute("type","checkbox"),i.setAttribute("input-id",t.value.toString()),i.classList.add("treeselect-list__item-checkbox"),e.append(s,i),e},ft=function(t,e){const s=document.createElement("label");if(s.innerHTML=t.name,s.classList.add("treeselect-list__item-label"),e&&this.showCount){const e=Ct(this,F,"m",vt).call(this,t);s.appendChild(e)}return s},vt=function(t){const e=document.createElement("span"),s=this.flattedOptions.filter((e=>e.childOf===t.value));return e.innerHTML=`(${s.length})`,e.classList.add("treeselect-list__item-label-counter"),e},wt=function(t,e){const s=this.flattedOptions.find((t=>t.id===e.value));if(s)if((null==s?void 0:s.isGroup)&&this.disabledBranchNode){const e=Nt(t).querySelector(".treeselect-list__item-icon");null==e||e.dispatchEvent(new Event("mousedown"))}else{if(this.isSingleSelect){const[t]=Lt;if(s.id===t)return;Lt=[s.id],Y([s.id],this.flattedOptions,this.isSingleSelect)}else s.checked=t.checked,s.isPartialChecked=!1,D(s,this.flattedOptions,this.isSingleSelect);St(this.flattedOptions,this.srcElement,this.iconElements),Ct(this,F,"m",kt).call(this)}},gt=function(t){var e,s,i;const l=null===(s=null===(e=t.target)||void 0===e?void 0:e.parentNode)||void 0===s?void 0:s.querySelector("[input-id]"),n=null!==(i=null==l?void 0:l.getAttribute("input-id"))&&void 0!==i?i:null,o=Pt(n,this.flattedOptions);o&&(o.isClosed=!o.isClosed,z(this.flattedOptions,o),St(this.flattedOptions,this.srcElement,this.iconElements),this.arrowClickCallback())},bt=function(t,e){const s="treeselect-list__item--focused";if(t){const t=Array.from(this.srcElement.querySelectorAll(`.${s}`));t.length&&t.forEach((t=>t.classList.remove(s))),e.classList.add(s)}else e.classList.remove(s)},Et=function(){var t;this.selectedNodes={nodes:(t=this.flattedOptions,t.filter((t=>t.checked&&!t.isGroup))),groupedNodes:R(this.flattedOptions)}},kt=function(){Ct(this,F,"m",Et).call(this),this.inputCallback(this.selectedNodes),this.value=this.selectedNodes.nodes.map((t=>t.id))};var Gt,Wt,Vt,jt,qt,Dt,It,$t,Rt,zt,Ut,Yt,Ft,Jt,Kt,Xt,Qt,Zt,te,ee,se,ie,le,ne,oe,ae,ce,re,he=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},de=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};const ue=t=>t.map((t=>t.id)),pe=t=>t?Array.isArray(t)?t:[t]:[];class me{mount(){var t;this.destroy();const{container:e,list:s,input:i}=he(this,Gt,"m",Rt).call(this);this.srcElement=e,de(this,Wt,s,"f"),de(this,Vt,i,"f"),de(this,qt,this.scrollWindowHandler.bind(this),"f"),de(this,Dt,this.scrollWindowHandler.bind(this),"f"),de(this,It,this.focusWindowHandler.bind(this),"f"),de(this,$t,this.blurWindowHandler.bind(this),"f"),this.alwaysOpen&&(null===(t=he(this,Vt,"f"))||void 0===t||t.openClose()),this.disabled?this.srcElement.classList.add("treeselect--disabled"):this.srcElement.classList.remove("treeselect--disabled")}updateValue(t){var e;const s=he(this,Wt,"f");if(s){const i=pe(t);s.updateValue(i);const{groupedNodes:l,nodes:n}=s.selectedNodes,o=this.grouped||this.isSingleSelect?l:n;null===(e=he(this,Vt,"f"))||void 0===e||e.updateValue(o)}}destroy(){this.srcElement&&(he(this,Gt,"m",te).call(this),this.srcElement.innerHTML="",this.srcElement=null,he(this,Gt,"m",le).call(this,!0))}focus(){he(this,Vt,"f")&&he(this,Vt,"f").focus()}toggleOpenClose(){he(this,Vt,"f")&&(he(this,Vt,"f").openClose(),he(this,Vt,"f").focus())}scrollWindowHandler(){this.updateListPosition()}focusWindowHandler(t){var e,s,i;(null===(e=this.srcElement)||void 0===e?void 0:e.contains(t.target))||(null===(s=he(this,Wt,"f"))||void 0===s?void 0:s.srcElement.contains(t.target))||(null===(i=he(this,Vt,"f"))||void 0===i||i.blur(),he(this,Gt,"m",le).call(this,!1),he(this,Gt,"m",se).call(this,!1))}blurWindowHandler(){var t;null===(t=he(this,Vt,"f"))||void 0===t||t.blur(),he(this,Gt,"m",le).call(this,!1),he(this,Gt,"m",se).call(this,!1)}updateListPosition(){var t;const e=this.srcElement,s=null===(t=he(this,Wt,"f"))||void 0===t?void 0:t.srcElement;if(!e||!s)return;s.style.transform="";const{y:i,height:l}=s.getBoundingClientRect(),{x:n,y:o,height:a,width:c}=e.getBoundingClientRect(),r=window.innerHeight-o-a;let h=o>r&&o>=l&&r<l;"auto"!==this.direction&&(h="top"===this.direction),this.appendToBody&&(s.style.transform=h?`translateY(${o-i-l}px)`:`translateY(${o+a-i}px)`,s.style.width=`${c}px`,s.style.left=`${n+window.scrollX}px`);const d=h?"top":"bottom";s.getAttribute("direction")!==d&&(s.setAttribute("direction",d),he(this,Gt,"m",ee).call(this,h,this.appendToBody))}constructor({parentHtmlContainer:t,value:e,options:s,openLevel:i,appendToBody:l,alwaysOpen:o,showTags:a,tagsCountText:c,clearable:r,searchable:h,placeholder:d,grouped:u,isGroupedValue:p,listSlotHtmlComponent:m,disabled:f,emptyText:v,staticList:w,id:g,isSingleSelect:b,showCount:E,disabledBranchNode:k,direction:C,iconElements:y,inputCallback:L,openCallback:S,closeCallback:_,nameChangeCallback:T}){Gt.add(this),Wt.set(this,null),Vt.set(this,null),jt.set(this,null),qt.set(this,null),Dt.set(this,null),It.set(this,null),$t.set(this,null),(({parentHtmlContainer:t,staticList:e,appendToBody:s,isSingleSelect:i,value:l,direction:n})=>{t||console.error("Validation: parentHtmlContainer prop is required!"),e&&s&&console.error("Validation: You should set staticList to false if you use appendToBody!"),i&&Array.isArray(l)&&console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"),i||Array.isArray(l)||console.error("Validation: you should pass an array as a value!"),n&&"auto"!==n&&"bottom"!==n&&"top"!==n&&console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!")})({parentHtmlContainer:t,value:e,staticList:w,appendToBody:l,isSingleSelect:b}),this.parentHtmlContainer=t,this.value=pe(e),this.options=null!=s?s:[],this.openLevel=null!=i?i:0,this.appendToBody=null!=l&&l,this.alwaysOpen=!(!o||f),this.showTags=null==a||a,this.tagsCountText=null!=c?c:"elements selected",this.clearable=null==r||r,this.searchable=null==h||h,this.placeholder=null!=d?d:"Search...",this.grouped=null==u||u,this.isGroupedValue=null!=p&&p,this.listSlotHtmlComponent=null!=m?m:null,this.disabled=null!=f&&f,this.emptyText=null!=v?v:"No results found...",this.staticList=!(!w||this.appendToBody),this.id=null!=g?g:"",this.isSingleSelect=null!=b&&b,this.showCount=null!=E&&E,this.disabledBranchNode=null!=k&&k,this.direction=null!=C?C:"auto",this.iconElements=n(y),this.inputCallback=L,this.openCallback=S,this.closeCallback=_,this.nameChangeCallback=T,this.groupedValue=[],this.isListOpened=!1,this.selectedName="",this.srcElement=null,this.mount()}}Wt=new WeakMap,Vt=new WeakMap,jt=new WeakMap,qt=new WeakMap,Dt=new WeakMap,It=new WeakMap,$t=new WeakMap,Gt=new WeakSet,Rt=function(){const t=this.parentHtmlContainer;t.classList.add("treeselect");const e=new(0,W.TreeselectList)({options:this.options,value:this.value,openLevel:this.openLevel,listSlotHtmlComponent:this.listSlotHtmlComponent,emptyText:this.emptyText,isSingleSelect:this.isSingleSelect,showCount:this.showCount,disabledBranchNode:this.disabledBranchNode,iconElements:this.iconElements,inputCallback:t=>he(this,Gt,"m",Kt).call(this,t),arrowClickCallback:()=>he(this,Gt,"m",Xt).call(this),mouseupCallback:()=>{var t;return null===(t=he(this,Vt,"f"))||void 0===t?void 0:t.focus()}}),{groupedNodes:i,nodes:l}=e.selectedNodes,n=new(0,s.TreeselectInput)({value:this.grouped||this.isSingleSelect?i:l,showTags:this.showTags,tagsCountText:this.tagsCountText,clearable:this.clearable,isAlwaysOpened:this.alwaysOpen,searchable:this.searchable,placeholder:this.placeholder,disabled:this.disabled,isSingleSelect:this.isSingleSelect,id:this.id,iconElements:this.iconElements,inputCallback:t=>he(this,Gt,"m",zt).call(this,t),searchCallback:t=>he(this,Gt,"m",Yt).call(this,t),openCallback:()=>he(this,Gt,"m",Zt).call(this),closeCallback:()=>he(this,Gt,"m",te).call(this),keydownCallback:t=>he(this,Gt,"m",Ut).call(this,t),focusCallback:()=>he(this,Gt,"m",Ft).call(this),blurCallback:()=>he(this,Gt,"m",Jt).call(this),nameChangeCallback:t=>he(this,Gt,"m",Qt).call(this,t)});return this.appendToBody&&de(this,jt,new ResizeObserver((()=>this.updateListPosition())),"f"),t.append(n.srcElement),{container:t,list:e,input:n}},zt=function(t){var e,s,i,l,n;const o=ue(t);null===(e=he(this,Wt,"f"))||void 0===e||e.updateValue(o);const a=null===(i=null===(s=he(this,Wt,"f"))||void 0===s?void 0:s.selectedNodes)||void 0===i?void 0:i.nodes,c=null===(n=null===(l=he(this,Wt,"f"))||void 0===l?void 0:l.selectedNodes)||void 0===n?void 0:n.groupedNodes;this.value=a?ue(a):[],this.groupedValue=c?ue(c):[],he(this,Gt,"m",oe).call(this)},Ut=function(t){var e;this.isListOpened&&(null===(e=he(this,Wt,"f"))||void 0===e||e.callKeyAction(t))},Yt=function(t){var e;null===(e=he(this,Wt,"f"))||void 0===e||e.updateSearchValue(t),this.updateListPosition()},Ft=function(){he(this,Gt,"m",se).call(this,!0),he(this,It,"f")&&he(this,It,"f")&&he(this,$t,"f")&&(document.addEventListener("mousedown",he(this,It,"f"),!0),document.addEventListener("focus",he(this,It,"f"),!0),window.addEventListener("blur",he(this,$t,"f")))},Jt=function(){setTimeout((()=>{var t,e;const s=null===(t=he(this,Vt,"f"))||void 0===t?void 0:t.srcElement.contains(document.activeElement),i=null===(e=he(this,Wt,"f"))||void 0===e?void 0:e.srcElement.contains(document.activeElement);s||i||this.blurWindowHandler()}),1)},Kt=function(t){var e,s,i,l;const{groupedNodes:n,nodes:o}=t,a=this.grouped||this.isSingleSelect?n:o;null===(e=he(this,Vt,"f"))||void 0===e||e.updateValue(a),this.value=ue(o),this.groupedValue=ue(n),this.isSingleSelect&&!this.alwaysOpen&&(null===(s=he(this,Vt,"f"))||void 0===s||s.openClose(),null===(i=he(this,Vt,"f"))||void 0===i||i.clearSearch()),null===(l=he(this,Vt,"f"))||void 0===l||l.focus(),he(this,Gt,"m",oe).call(this)},Xt=function(){var t;null===(t=he(this,Vt,"f"))||void 0===t||t.focus(),this.updateListPosition()},Qt=function(t){this.selectedName!==t&&(this.selectedName=t,he(this,Gt,"m",ae).call(this))},Zt=function(){var t;this.isListOpened=!0,he(this,qt,"f")&&he(this,Dt,"f")&&(window.addEventListener("scroll",he(this,qt,"f"),!0),window.addEventListener("resize",he(this,Dt,"f"))),he(this,Wt,"f")&&this.srcElement&&(this.appendToBody?(document.body.appendChild(he(this,Wt,"f").srcElement),null===(t=he(this,jt,"f"))||void 0===t||t.observe(this.srcElement)):this.srcElement.appendChild(he(this,Wt,"f").srcElement),this.updateListPosition(),he(this,Gt,"m",ie).call(this,!0),he(this,Wt,"f").focusFirstListElement(),he(this,Gt,"m",ce).call(this))},te=function(){var t;if(this.alwaysOpen)return;if(this.isListOpened=!1,he(this,qt,"f")&&he(this,Dt,"f")&&(window.removeEventListener("scroll",he(this,qt,"f"),!0),window.removeEventListener("resize",he(this,Dt,"f"))),!he(this,Wt,"f")||!this.srcElement)return;(this.appendToBody?document.body.contains(he(this,Wt,"f").srcElement):this.srcElement.contains(he(this,Wt,"f").srcElement))&&(this.appendToBody?(document.body.removeChild(he(this,Wt,"f").srcElement),null===(t=he(this,jt,"f"))||void 0===t||t.disconnect()):this.srcElement.removeChild(he(this,Wt,"f").srcElement),he(this,Gt,"m",ie).call(this,!1),he(this,Gt,"m",re).call(this))},ee=function(t,e){if(!he(this,Wt,"f")||!he(this,Vt,"f"))return;const s=e?"treeselect-list--top-to-body":"treeselect-list--top",i=e?"treeselect-list--bottom-to-body":"treeselect-list--bottom";t?(he(this,Wt,"f").srcElement.classList.add(s),he(this,Wt,"f").srcElement.classList.remove(i),he(this,Vt,"f").srcElement.classList.add("treeselect-input--top"),he(this,Vt,"f").srcElement.classList.remove("treeselect-input--bottom")):(he(this,Wt,"f").srcElement.classList.remove(s),he(this,Wt,"f").srcElement.classList.add(i),he(this,Vt,"f").srcElement.classList.remove("treeselect-input--top"),he(this,Vt,"f").srcElement.classList.add("treeselect-input--bottom"))},se=function(t){he(this,Vt,"f")&&he(this,Wt,"f")&&(t?(he(this,Vt,"f").srcElement.classList.add("treeselect-input--focused"),he(this,Wt,"f").srcElement.classList.add("treeselect-list--focused")):(he(this,Vt,"f").srcElement.classList.remove("treeselect-input--focused"),he(this,Wt,"f").srcElement.classList.remove("treeselect-list--focused")))},ie=function(t){var e,s,i,l;t?null===(e=he(this,Vt,"f"))||void 0===e||e.srcElement.classList.add("treeselect-input--opened"):null===(s=he(this,Vt,"f"))||void 0===s||s.srcElement.classList.remove("treeselect-input--opened"),this.staticList?null===(i=he(this,Wt,"f"))||void 0===i||i.srcElement.classList.add("treeselect-list--static"):null===(l=he(this,Wt,"f"))||void 0===l||l.srcElement.classList.remove("treeselect-list--static")},le=function(t){he(this,qt,"f")&&he(this,Dt,"f")&&he(this,It,"f")&&he(this,$t,"f")&&(this.alwaysOpen&&!t||(window.removeEventListener("scroll",he(this,qt,"f"),!0),window.removeEventListener("resize",he(this,Dt,"f"))),document.removeEventListener("mousedown",he(this,It,"f"),!0),document.removeEventListener("focus",he(this,It,"f"),!0),window.removeEventListener("blur",he(this,$t,"f")))},ne=function(){return((t,e)=>{if(e){const[e]=t;return e}return t})(this.isGroupedValue||this.isSingleSelect?this.groupedValue:this.value,this.isSingleSelect)},oe=function(){var t;const e=he(this,Gt,"m",ne).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("input",{detail:e})),this.inputCallback&&this.inputCallback(e)},ae=function(){var t;null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("name-change",{detail:this.selectedName})),this.nameChangeCallback&&this.nameChangeCallback(this.selectedName)},ce=function(){var t;const e=he(this,Gt,"m",ne).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("open",{detail:e})),this.openCallback&&this.openCallback(e)},re=function(){var t;const e=he(this,Gt,"m",ne).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("close",{detail:e})),this.closeCallback&&this.closeCallback(e)};export{me as Treeselect,e as default};