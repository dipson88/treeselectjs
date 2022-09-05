function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}t(module.exports,"Treeselect",(function(){return oe}),(function(t){return oe=t}));var e={};t(e,"TreeselectInput",(function(){return W}),(function(t){return W=t}));const s={arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',arrowDown:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',attention:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',cross:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',partialCheck:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},i=(t,e)=>{if(e.innerHTML="","string"==typeof t)e.innerHTML=t;else{const s=t.cloneNode(!0);e.appendChild(s)}},l=t=>{const e=t?Object.assign({},t):{};return Object.keys(s).forEach((t=>{e[t]||(e[t]=s[t])})),e};var n,o,c,a,r,h,d,u,p,m,f,v,w,g,E,b,k,y,L,C,_,x,T,S,O,A,H,P,B=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},M=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};class W{focus(){B(this,c,"f").focus()}blur(){this.isOpened&&B(this,n,"m",f).call(this),this.clearSearch(),B(this,c,"f").blur()}updateValue(t){this.value=t,B(this,n,"m",d).call(this),B(this,n,"m",m).call(this)}removeItem(t){this.value=this.value.filter((e=>e.id!==t)),B(this,n,"m",P).call(this),B(this,n,"m",d).call(this),B(this,n,"m",m).call(this)}clear(){this.value=[],B(this,n,"m",P).call(this),B(this,n,"m",d).call(this),this.clearSearch()}openClose(){B(this,n,"m",f).call(this)}clearSearch(){this.searchText="",this.searchCallback(""),B(this,n,"m",m).call(this)}constructor({value:t,showTags:e,tagsCountText:s,clearable:i,isAlwaysOpened:l,searchable:d,placeholder:u,disabled:p,id:m,iconElements:f,inputCallback:w,searchCallback:E,openCallback:b,closeCallback:k,keydownCallback:y,focusCallback:L}){n.add(this),o.set(this,void 0),c.set(this,void 0),a.set(this,void 0),r.set(this,void 0),this.value=t,this.showTags=e,this.tagsCountText=s,this.searchable=d,this.placeholder=u,this.clearable=i,this.isAlwaysOpened=l,this.disabled=p,this.id=m,this.iconElements=f,this.isOpened=!1,this.searchText="",M(this,o,B(this,n,"m",g).call(this),"f"),M(this,c,B(this,n,"m",C).call(this),"f"),M(this,a,B(this,n,"m",T).call(this),"f"),M(this,r,null,"f"),this.inputCallback=w,this.searchCallback=E,this.openCallback=b,this.closeCallback=k,this.keydownCallback=y,this.focusCallback=L,this.srcElement=B(this,n,"m",v).call(this,B(this,o,"f"),B(this,c,"f"),B(this,a,"f")),B(this,n,"m",h).call(this)}}o=new WeakMap,c=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakSet,h=function(){B(this,n,"m",d).call(this),B(this,n,"m",m).call(this),B(this,n,"m",u).call(this)},d=function(){B(this,o,"f").innerHTML="",this.showTags?B(this,o,"f").append(...B(this,n,"m",E).call(this)):B(this,o,"f").appendChild(B(this,n,"m",L).call(this)),B(this,o,"f").appendChild(B(this,c,"f"))},u=function(){const t=[];B(this,a,"f").innerHTML="",this.clearable&&t.push(B(this,n,"m",S).call(this)),this.isAlwaysOpened||t.push(B(this,n,"m",A).call(this,this.isOpened)),t.length&&B(this,a,"f").append(...t)},p=function(){if(!this.isAlwaysOpened&&B(this,r,"f")){const t=this.isOpened?this.iconElements.arrowUp:this.iconElements.arrowDown;i(t,B(this,r,"f"))}},m=function(){var t;(null===(t=this.value)||void 0===t?void 0:t.length)?(B(this,c,"f").removeAttribute("placeholder"),this.srcElement.classList.remove("treeselect-input--value-not-selected")):(B(this,c,"f").setAttribute("placeholder",this.placeholder),this.srcElement.classList.add("treeselect-input--value-not-selected")),this.searchable?this.srcElement.classList.remove("treeselect-input--unsearchable"):this.srcElement.classList.add("treeselect-input--unsearchable"),B(this,c,"f").value=this.searchText},f=function(){this.isOpened=!this.isOpened,B(this,n,"m",p).call(this),this.isOpened?this.openCallback():this.closeCallback()},v=function(t,e,s){const i=document.createElement("div");return i.classList.add("treeselect-input"),i.setAttribute("tabindex","-1"),i.addEventListener("mousedown",(t=>B(this,n,"m",w).call(this,t))),i.addEventListener("focus",(()=>this.focusCallback()),!0),t.appendChild(e),i.append(t,s),i},w=function(t){t.preventDefault(),this.isOpened||B(this,n,"m",f).call(this),this.focus()},g=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__tags"),t},E=function(){return this.value.map((t=>{const e=document.createElement("div");e.classList.add("treeselect-input__tags-element"),e.setAttribute("tabindex","-1"),e.setAttribute("tag-id",t.id.toString()),e.setAttribute("title",t.name);const s=B(this,n,"m",k).call(this,t.name),i=B(this,n,"m",y).call(this);return e.addEventListener("mousedown",(e=>B(this,n,"m",b).call(this,e,t.id))),e.append(s,i),e}))},b=function(t,e){t.preventDefault(),t.stopPropagation(),this.removeItem(e),this.focus()},k=function(t){const e=document.createElement("span");return e.classList.add("treeselect-input__tags-name"),e.innerHTML=t,e},y=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-cross"),i(this.iconElements.cross,t),t},L=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-count"),this.value.length?(t.innerHTML=1===this.value.length?this.value[0].name:`${this.value.length} ${this.tagsCountText}`,t):(t.innerHTML="",t)},C=function(){const t=document.createElement("input");return t.classList.add("treeselect-input__edit"),t.setAttribute("id",this.id),this.disabled&&t.setAttribute("tabindex","-1"),t.addEventListener("keydown",(t=>B(this,n,"m",_).call(this,t))),t.addEventListener("input",(e=>B(this,n,"m",x).call(this,e,t))),t},_=function(t){"Backspace"!==t.key||this.searchText.length||!this.value.length||this.showTags||this.clear(),"Backspace"===t.key&&!this.searchText.length&&this.value.length&&this.removeItem(this.value[this.value.length-1].id),"Space"!==t.code||this.searchText&&this.searchable||B(this,n,"m",f).call(this),this.keydownCallback(t.key),this.focus()},x=function(t,e){t.stopPropagation();const s=this.searchText,i=e.value.trim();if(0!==s.length||0!==i.length){if(this.searchable){const e=t.target.value;this.searchCallback(e),this.isOpened||B(this,n,"m",f).call(this)}else e.value="";this.searchText=e.value}else e.value=""},T=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__operators"),t},S=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__clear"),t.setAttribute("tabindex","-1"),i(this.iconElements.clear,t),t.addEventListener("mousedown",(t=>B(this,n,"m",O).call(this,t))),t},O=function(t){t.preventDefault(),t.stopPropagation(),(this.searchText.length||this.value.length)&&this.clear(),this.focus()},A=function(t){M(this,r,document.createElement("span"),"f"),B(this,r,"f").classList.add("treeselect-input__arrow");const e=t?this.iconElements.arrowUp:this.iconElements.arrowDown;return i(e,B(this,r,"f")),B(this,r,"f").addEventListener("mousedown",(t=>B(this,n,"m",H).call(this,t))),B(this,r,"f")},H=function(t){t.stopPropagation(),t.preventDefault(),this.focus(),B(this,n,"m",f).call(this)},P=function(){this.inputCallback(this.value)};var N={};t(N,"TreeselectList",(function(){return Bt}),(function(t){return Bt=t}));const G=(t,e,s="",i=0)=>t.reduce(((t,l)=>{var n;const o=!!(null===(n=l.children)||void 0===n?void 0:n.length),c=i>=e&&o,a=i>e;if(t.push({id:l.value,name:l.name,childOf:s,isGroup:o,checked:!1,isPartialChecked:!1,level:i,isClosed:c,hidden:a}),o){const s=G(l.children,e,l.value,i+1);t.push(...s)}return t}),[]),j=({id:t,checked:e},s)=>{s.forEach((i=>{i.childOf===t&&(i.checked=null==e||e,i.isPartialChecked=!1,i.isGroup&&j(i,s))}))},q=(t,e)=>{const s=e.find((e=>e.id===t)),i=e.filter((t=>t.childOf===(null==s?void 0:s.id)));if(!s)return;const l=i.every((t=>t.checked)),n=i.some((t=>t.isPartialChecked||t.checked))&&!l,o=!l&&!n;l&&(s.checked=!0,s.isPartialChecked=!1),n&&(s.checked=!1,s.isPartialChecked=!0),o&&(s.checked=!1,s.isPartialChecked=!1),s.childOf&&q(s.childOf,e)},I=({id:t,isGroup:e,childOf:s,checked:i},l)=>{e&&j({id:t,checked:i},l),s&&q(s,l)},V=(t,e)=>e.reduce(((s,i)=>(i.childOf===t&&(s.push(i),i.isGroup&&s.push(...V(i.id,e))),s)),[]),D=(t,e)=>e.reduce(((s,i)=>(i.id===t&&(s.push(i),i.childOf&&s.push(...D(i.childOf,e))),s)),[]),$=t=>{const{onlyGroupsIds:e,allItems:s}=t.reduce(((t,e)=>e.checked?(e.isGroup&&t.onlyGroupsIds.push(e.id),t.allItems.push(e),t):t),{onlyGroupsIds:[],allItems:[]});return s.filter((t=>!e.some((e=>e===t.childOf))))},R=(t,{id:e,isClosed:s})=>{t.filter((t=>t.childOf===e)).forEach((e=>{e.hidden=null!=s&&s,e.isGroup&&!e.isClosed&&R(t,{id:e.id,isClosed:s})}))},z=(t,e)=>{const s=((t,e)=>t.reduce(((s,i)=>{if(i.name.toLowerCase().includes(e.toLowerCase())){if(s.push(i),i.isGroup){const e=V(i.id,t);s.push(...e)}if(i.childOf){const e=D(i.childOf,t);s.push(...e)}}return s}),[]))(t,e);t.forEach((e=>{s.some((t=>t.id===e.id))?(e.isGroup&&(e.isClosed=!1,R(t,e)),e.hidden=!1):e.hidden=!0}))},U=(t,e)=>{(t=>{t.forEach((t=>{t.checked=!1,t.isPartialChecked=!1}))})(e);e.filter((e=>t.some((t=>t===e.id)))).forEach((t=>{t.checked=!0,t.isPartialChecked=!1,I(t,e)}))};var Y,F,J,K,X,Q,Z,tt,et,st,it,lt,nt,ot,ct,at,rt,ht,dt,ut,pt,mt,ft,vt,wt,gt,Et,bt,kt=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},yt=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};const Lt=(t,e,s)=>{t.forEach((i=>{const l=e.querySelector(`[input-id="${i.id}"]`),n=Ht(l);l.checked=i.checked,Ct(i,n),_t(i,n),xt(i,n,s),Tt(i,n),Ot(i,n,t),St(i,l,s)})),At(t,e)},Ct=(t,e)=>{t.checked?e.classList.add("treeselect-list__item--checked"):e.classList.remove("treeselect-list__item--checked")},_t=(t,e)=>{t.isPartialChecked?e.classList.add("treeselect-list__item--partial-checked"):e.classList.remove("treeselect-list__item--partial-checked")},xt=(t,e,s)=>{if(t.isGroup){const l=e.querySelector(".treeselect-list__item-icon"),n=t.isClosed?s.arrowRight:s.arrowDown;i(n,l),t.isClosed?e.classList.add("treeselect-list__item--closed"):e.classList.remove("treeselect-list__item--closed")}},Tt=(t,e)=>{t.hidden?e.classList.add("treeselect-list__item--hidden"):e.classList.remove("treeselect-list__item--hidden")},St=(t,e,s)=>{const l=e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");t.checked?i(s.check,l):t.isPartialChecked?i(s.partialCheck,l):l.innerHTML=""},Ot=(t,e,s)=>{if(0===t.level){const i=s.some((e=>e.isGroup&&e.level===t.level)),l=!t.isGroup&&i?"20px":"5px";e.style.paddingLeft=t.isGroup?"0":l}else e.style.paddingLeft=t.isGroup?20*t.level+"px":20*t.level+20+"px";e.setAttribute("level",t.level.toString()),e.setAttribute("group",t.isGroup.toString())},At=(t,e)=>{const s=t.some((t=>!t.hidden)),i=e.querySelector(".treeselect-list__empty");s?i.classList.add("treeselect-list__empty--hidden"):i.classList.remove("treeselect-list__empty--hidden")},Ht=t=>t.parentNode.parentNode,Pt=(t,e)=>e.find((e=>e.id.toString()===t));class Bt{updateValue(t){var e,s,i,l;this.value=t,e=t,s=this.flattedOptions,i=this.srcElement,l=this.iconElements,U(e,s),Lt(s,i,l),kt(this,Y,"m",Et).call(this)}updateSearchValue(t){if(t===this.searchText)return;const e=""===this.searchText&&""!==t;this.searchText=t,e&&(this.flattedOptionsBeforeSearch=JSON.parse(JSON.stringify(this.flattedOptions))),""===this.searchText&&(this.flattedOptions=this.flattedOptionsBeforeSearch.map((t=>{const e=this.flattedOptions.find((e=>e.id===t.id));return e.isClosed=t.isClosed,e.hidden=t.hidden,e})),this.flattedOptionsBeforeSearch=[]),this.searchText&&z(this.flattedOptions,t),Lt(this.flattedOptions,this.srcElement,this.iconElements),this.focusFirstListElement()}callKeyAction(t){yt(this,J,!1,"f");const e=this.srcElement.querySelector(".treeselect-list__item--focused");"Enter"===t&&e&&e.dispatchEvent(new Event("mousedown")),"ArrowLeft"!==t&&"ArrowRight"!==t||kt(this,Y,"m",K).call(this,e,t),"ArrowDown"!==t&&"ArrowUp"!==t||kt(this,Y,"m",X).call(this,e,t)}focusFirstListElement(){const t="treeselect-list__item--focused",e=this.srcElement.querySelector(`.${t}`),s=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Ht(t)).display));if(!s.length)return;e&&e.classList.remove(t);Ht(s[0]).classList.add(t)}constructor({options:t,value:e,openLevel:s,listSlotHtmlComponent:i,emptyText:l,isSingleSelect:n,iconElements:o,showCount:c,inputCallback:a,arrowClickCallback:r,mouseupCallback:h}){Y.add(this),F.set(this,null),J.set(this,!0),this.options=t,this.value=e,this.openLevel=null!=s?s:0,this.listSlotHtmlComponent=null!=i?i:null,this.emptyText=null!=l?l:"No results found...",this.isSingleSelect=null!=n&&n,this.showCount=null!=c&&c,this.iconElements=o,this.searchText="",this.flattedOptions=G(this.options,this.openLevel),this.flattedOptionsBeforeSearch=this.flattedOptions,this.selectedNodes={nodes:[],groupedNodes:[]},this.srcElement=kt(this,Y,"m",Q).call(this),this.inputCallback=a,this.arrowClickCallback=r,this.mouseupCallback=h,this.updateValue(this.value),(t=>{const{duplications:e}=t.reduce(((t,e)=>(t.allItems.some((t=>t.toString()===e.id.toString()))&&t.duplications.push(e.id),t.allItems.push(e.id),t)),{duplications:[],allItems:[]});e.length&&console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`)})(this.flattedOptions)}}F=new WeakMap,J=new WeakMap,Y=new WeakSet,K=function(t,e){if(!t)return;const s=t.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"),i=Pt(s,this.flattedOptions),l=t.querySelector(".treeselect-list__item-icon");"ArrowLeft"!==e||i.isClosed||l.dispatchEvent(new Event("mousedown")),"ArrowRight"===e&&i.isClosed&&l.dispatchEvent(new Event("mousedown"))},X=function(t,e){var s;const i=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Ht(t)).display));if(i.length)if(t){const t=i.findIndex((t=>Ht(t).classList.contains("treeselect-list__item--focused")));Ht(i[t]).classList.remove("treeselect-list__item--focused");const l="ArrowDown"===e?t+1:t-1,n="ArrowDown"===e?0:i.length-1,o=null!==(s=i[l])&&void 0!==s?s:i[n],c=!i[l],a=Ht(o);a.classList.add("treeselect-list__item--focused");const r=this.srcElement.getBoundingClientRect(),h=a.getBoundingClientRect();if(c&&"ArrowDown"===e)return void this.srcElement.scroll(0,0);if(c&&"ArrowUp"===e)return void this.srcElement.scroll(0,this.srcElement.scrollHeight);if(r.y+r.height<h.y+h.height)return void this.srcElement.scroll(0,this.srcElement.scrollTop+h.height);if(r.y>h.y)return void this.srcElement.scroll(0,this.srcElement.scrollTop-h.height)}else{Ht(i[0]).classList.add("treeselect-list__item--focused")}},Q=function(){const t=kt(this,Y,"m",Z).call(this),e=kt(this,Y,"m",st).call(this,this.options);t.append(...e);const s=kt(this,Y,"m",it).call(this);s&&t.append(s);const i=kt(this,Y,"m",lt).call(this);return t.append(i),t},Z=function(){const t=document.createElement("div");return t.classList.add("treeselect-list"),this.isSingleSelect&&t.classList.add("treeselect-list--single-select"),t.addEventListener("mouseout",(t=>kt(this,Y,"m",tt).call(this,t))),t.addEventListener("mousemove",(()=>kt(this,Y,"m",et).call(this))),t.addEventListener("mouseup",(()=>this.mouseupCallback()),!0),t},tt=function(t){t.stopPropagation(),kt(this,F,"f")&&kt(this,J,"f")&&kt(this,F,"f").classList.add("treeselect-list__item--focused")},et=function(){yt(this,J,!0,"f")},st=function t(e){return e.reduce(((e,s)=>{var i;if(null===(i=s.children)||void 0===i?void 0:i.length){const i=kt(this,Y,"m",nt).call(this,s),l=kt(this,Y,"m",t).call(this,s.children);return i.append(...l),e.push(i),e}const l=kt(this,Y,"m",ot).call(this,s,!1);return e.push(l),e}),[])},it=function(){if(!this.listSlotHtmlComponent)return null;const t=document.createElement("div");return t.classList.add("treeselect-list__slot"),t.appendChild(this.listSlotHtmlComponent),t},lt=function(){const t=document.createElement("div");t.classList.add("treeselect-list__empty"),t.setAttribute("title",this.emptyText);const e=document.createElement("span");e.classList.add("treeselect-list__empty-icon"),i(this.iconElements.attention,e);const s=document.createElement("span");return s.classList.add("treeselect-list__empty-text"),s.innerHTML=this.emptyText,t.append(e,s),t},nt=function(t){const e=document.createElement("div");e.setAttribute("group-container-id",t.value.toString()),e.classList.add("treeselect-list__group-container");const s=kt(this,Y,"m",ot).call(this,t,!0);return e.appendChild(s),e},ot=function(t,e){const s=kt(this,Y,"m",ct).call(this,t);if(e){const t=kt(this,Y,"m",dt).call(this);s.appendChild(t)}const i=kt(this,Y,"m",pt).call(this,t),l=kt(this,Y,"m",mt).call(this,t,e);return s.append(i,l),s},ct=function(t){const e=document.createElement("div");return e.setAttribute("tabindex","-1"),e.setAttribute("title",t.name),e.classList.add("treeselect-list__item"),e.addEventListener("mouseover",(()=>kt(this,Y,"m",at).call(this,e)),!0),e.addEventListener("mouseout",(()=>kt(this,Y,"m",rt).call(this,e)),!0),e.addEventListener("mousedown",(e=>kt(this,Y,"m",ht).call(this,e,t))),e},at=function(t){kt(this,J,"f")&&kt(this,Y,"m",gt).call(this,!0,t)},rt=function(t){kt(this,J,"f")&&(kt(this,Y,"m",gt).call(this,!1,t),yt(this,F,t,"f"))},ht=function(t,e){t.stopPropagation();const s=t.target.querySelector(".treeselect-list__item-checkbox");s.checked=!s.checked,kt(this,Y,"m",vt).call(this,s,e)},dt=function(){const t=document.createElement("span");return t.setAttribute("tabindex","-1"),t.classList.add("treeselect-list__item-icon"),i(this.iconElements.arrowDown,t),t.addEventListener("mousedown",(t=>kt(this,Y,"m",ut).call(this,t))),t},ut=function(t){t.stopPropagation(),kt(this,Y,"m",wt).call(this,t)},pt=function(t){const e=document.createElement("div");e.classList.add("treeselect-list__item-checkbox-container");const s=document.createElement("span");s.classList.add("treeselect-list__item-checkbox-icon"),s.innerHTML="";const i=document.createElement("input");return i.setAttribute("tabindex","-1"),i.setAttribute("type","checkbox"),i.setAttribute("input-id",t.value.toString()),i.classList.add("treeselect-list__item-checkbox"),e.append(s,i),e},mt=function(t,e){const s=document.createElement("label");if(s.innerHTML=t.name,s.classList.add("treeselect-list__item-label"),e&&this.showCount){const e=kt(this,Y,"m",ft).call(this,t);s.appendChild(e)}return s},ft=function(t){const e=document.createElement("span"),s=this.flattedOptions.filter((e=>e.childOf===t.value));return e.innerHTML=`(${s.length})`,e.classList.add("treeselect-list__item-label-counter"),e},vt=function(t,e){const s=this.flattedOptions.find((t=>t.id===e.value)),i=(null==s?void 0:s.isGroup)&&this.isSingleSelect;if(s&&!i){if(this.isSingleSelect){const[t]=this.value;if(s.id===t)return;U([s.id],this.flattedOptions)}else s.checked=t.checked,s.isPartialChecked=!1,I(s,this.flattedOptions);Lt(this.flattedOptions,this.srcElement,this.iconElements),kt(this,Y,"m",bt).call(this)}},wt=function(t){var e,s,i;const l=null===(s=null===(e=t.target)||void 0===e?void 0:e.parentNode)||void 0===s?void 0:s.querySelector("[input-id]"),n=null!==(i=null==l?void 0:l.getAttribute("input-id"))&&void 0!==i?i:null,o=Pt(n,this.flattedOptions);o&&(o.isClosed=!o.isClosed,R(this.flattedOptions,o),Lt(this.flattedOptions,this.srcElement,this.iconElements),this.arrowClickCallback())},gt=function(t,e){const s="treeselect-list__item--focused";if(t){const t=Array.from(this.srcElement.querySelectorAll(`.${s}`));t.length&&t.forEach((t=>t.classList.remove(s))),e.classList.add(s)}else e.classList.remove(s)},Et=function(){var t;this.selectedNodes={nodes:(t=this.flattedOptions,t.filter((t=>t.checked&&!t.isGroup))),groupedNodes:$(this.flattedOptions)}},bt=function(){kt(this,Y,"m",Et).call(this),this.inputCallback(this.selectedNodes),this.value=this.selectedNodes.nodes.map((t=>t.id))};var Mt,Wt,Nt,Gt,jt,qt,It,Vt,Dt,$t,Rt,zt,Ut,Yt,Ft,Jt,Kt,Xt,Qt,Zt,te,ee,se=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},ie=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};const le=t=>t.map((t=>t.id)),ne=t=>t?Array.isArray(t)?t:[t]:[];class oe{mount(){var t;this.destroy();const{container:e,list:s,input:i}=se(this,Mt,"m",Dt).call(this);this.srcElement=e,ie(this,Wt,s,"f"),ie(this,Nt,i,"f"),ie(this,jt,this.scrollWindowHandler.bind(this),"f"),ie(this,qt,this.scrollWindowHandler.bind(this),"f"),ie(this,It,this.focusWindowHandler.bind(this),"f"),ie(this,Vt,this.blurWindowHandler.bind(this),"f"),this.alwaysOpen&&(null===(t=se(this,Nt,"f"))||void 0===t||t.openClose()),this.disabled&&this.srcElement.classList.add("treeselect--disabled")}updateValue(t){var e;const s=se(this,Wt,"f");if(s){const i=ne(t);s.updateValue(i);const{groupedNodes:l,nodes:n}=s.selectedNodes,o=this.grouped?l:n;null===(e=se(this,Nt,"f"))||void 0===e||e.updateValue(o)}}destroy(){this.srcElement&&(se(this,Mt,"m",Kt).call(this),this.srcElement.innerHTML="",this.srcElement=null,se(this,Mt,"m",te).call(this,!0))}focus(){se(this,Nt,"f")&&se(this,Nt,"f").focus()}toggleOpenClose(){se(this,Nt,"f")&&(se(this,Nt,"f").openClose(),se(this,Nt,"f").focus())}scrollWindowHandler(){this.updateListPosition()}focusWindowHandler(t){var e,s,i;(null===(e=this.srcElement)||void 0===e?void 0:e.contains(t.target))||(null===(s=se(this,Wt,"f"))||void 0===s?void 0:s.srcElement.contains(t.target))||(null===(i=se(this,Nt,"f"))||void 0===i||i.blur(),se(this,Mt,"m",te).call(this,!1),se(this,Mt,"m",Qt).call(this,!1))}blurWindowHandler(){var t;null===(t=se(this,Nt,"f"))||void 0===t||t.blur(),se(this,Mt,"m",te).call(this,!1),se(this,Mt,"m",Qt).call(this,!1)}updateListPosition(){var t;const e=this.srcElement,s=null===(t=se(this,Wt,"f"))||void 0===t?void 0:t.srcElement;if(!e||!s)return;s.style.transform="";const{y:i,height:l}=s.getBoundingClientRect(),{x:n,y:o,height:c,width:a}=e.getBoundingClientRect(),r=window.innerHeight-o-c,h=o>r&&o>=l&&r<l;this.appendToBody&&(s.style.transform=h?`translateY(${o-i-l}px)`:`translateY(${o+c-i}px)`,s.style.width=`${a}px`,s.style.left=`${n+window.scrollX}px`);const d=h?"top":"bottom";s.getAttribute("direction")!==d&&(s.setAttribute("direction",d),se(this,Mt,"m",Xt).call(this,h,this.appendToBody))}constructor({parentHtmlContainer:t,value:e,options:s,openLevel:i,appendToBody:n,alwaysOpen:o,showTags:c,tagsCountText:a,clearable:r,searchable:h,placeholder:d,grouped:u,listSlotHtmlComponent:p,disabled:m,emptyText:f,staticList:v,id:w,isSingleSelect:g,showCount:E,iconElements:b,inputCallback:k}){Mt.add(this),Wt.set(this,null),Nt.set(this,null),Gt.set(this,null),jt.set(this,null),qt.set(this,null),It.set(this,null),Vt.set(this,null),(({parentHtmlContainer:t,staticList:e,appendToBody:s,isSingleSelect:i,value:l})=>{t||console.error("Validation: parentHtmlContainer prop is required!"),e&&s&&console.error("Validation: You should set staticList to false if you use appendToBody!"),i&&Array.isArray(l)&&console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"),i||Array.isArray(l)||console.error("Validation: you should pass an array as a value!")})({parentHtmlContainer:t,value:e,staticList:v,appendToBody:n,isSingleSelect:g}),this.parentHtmlContainer=t,this.value=ne(e),this.options=null!=s?s:[],this.openLevel=null!=i?i:0,this.appendToBody=null==n||n,this.alwaysOpen=!(!o||m),this.showTags=((t,e)=>!e&&(null==t||t))(c,g),this.tagsCountText=null!=a?a:"elements selected",this.clearable=null==r||r,this.searchable=null==h||h,this.placeholder=null!=d?d:"Search...",this.grouped=null==u||u,this.listSlotHtmlComponent=null!=p?p:null,this.disabled=null!=m&&m,this.emptyText=null!=f?f:"No results found...",this.staticList=!(!v||this.appendToBody),this.id=null!=w?w:"",this.isSingleSelect=null!=g&&g,this.showCount=null!=E&&E,this.iconElements=l(b),this.inputCallback=k,this.isListOpened=!1,this.srcElement=null,this.mount()}}Wt=new WeakMap,Nt=new WeakMap,Gt=new WeakMap,jt=new WeakMap,qt=new WeakMap,It=new WeakMap,Vt=new WeakMap,Mt=new WeakSet,Dt=function(){const t=this.parentHtmlContainer;t.classList.add("treeselect");const s=new(0,N.TreeselectList)({options:this.options,value:this.value,openLevel:this.openLevel,listSlotHtmlComponent:this.listSlotHtmlComponent,emptyText:this.emptyText,isSingleSelect:this.isSingleSelect,showCount:this.showCount,iconElements:this.iconElements,inputCallback:t=>se(this,Mt,"m",Yt).call(this,t),arrowClickCallback:()=>se(this,Mt,"m",Ft).call(this),mouseupCallback:()=>{var t;return null===(t=se(this,Nt,"f"))||void 0===t?void 0:t.focus()}}),{groupedNodes:i,nodes:l}=s.selectedNodes,n=new(0,e.TreeselectInput)({value:this.grouped?i:l,showTags:this.showTags,tagsCountText:this.tagsCountText,clearable:this.clearable,isAlwaysOpened:this.alwaysOpen,searchable:this.searchable,placeholder:this.placeholder,disabled:this.disabled,id:this.id,iconElements:this.iconElements,inputCallback:t=>se(this,Mt,"m",$t).call(this,t),searchCallback:t=>se(this,Mt,"m",zt).call(this,t),openCallback:()=>se(this,Mt,"m",Jt).call(this),closeCallback:()=>se(this,Mt,"m",Kt).call(this),keydownCallback:t=>se(this,Mt,"m",Rt).call(this,t),focusCallback:()=>se(this,Mt,"m",Ut).call(this)});return this.appendToBody&&ie(this,Gt,new ResizeObserver((()=>this.updateListPosition())),"f"),t.append(n.srcElement),{container:t,list:s,input:n}},$t=function(t){var e,s,i;const l=le(t);null===(e=se(this,Wt,"f"))||void 0===e||e.updateValue(l);const n=null===(i=null===(s=se(this,Wt,"f"))||void 0===s?void 0:s.selectedNodes)||void 0===i?void 0:i.nodes;this.value=n?le(n):[],se(this,Mt,"m",ee).call(this)},Rt=function(t){var e;this.isListOpened&&(null===(e=se(this,Wt,"f"))||void 0===e||e.callKeyAction(t))},zt=function(t){var e;null===(e=se(this,Wt,"f"))||void 0===e||e.updateSearchValue(t),this.updateListPosition()},Ut=function(){se(this,Mt,"m",Qt).call(this,!0),se(this,It,"f")&&se(this,It,"f")&&se(this,Vt,"f")&&(document.addEventListener("mousedown",se(this,It,"f"),!0),document.addEventListener("focus",se(this,It,"f"),!0),window.addEventListener("blur",se(this,Vt,"f")))},Yt=function(t){var e,s,i;const{groupedNodes:l,nodes:n}=t,o=this.grouped?l:n;null===(e=se(this,Nt,"f"))||void 0===e||e.updateValue(o),this.value=le(n),this.isSingleSelect&&(null===(s=se(this,Nt,"f"))||void 0===s||s.openClose(),null===(i=se(this,Nt,"f"))||void 0===i||i.clearSearch()),setTimeout((()=>{var t;null===(t=se(this,Nt,"f"))||void 0===t||t.focus()}),0),se(this,Mt,"m",ee).call(this)},Ft=function(){var t;null===(t=se(this,Nt,"f"))||void 0===t||t.focus(),this.updateListPosition()},Jt=function(){var t;this.isListOpened=!0,se(this,jt,"f")&&se(this,qt,"f")&&(window.addEventListener("scroll",se(this,jt,"f"),!0),window.addEventListener("resize",se(this,qt,"f"))),se(this,Wt,"f")&&this.srcElement&&(this.appendToBody?(document.body.appendChild(se(this,Wt,"f").srcElement),null===(t=se(this,Gt,"f"))||void 0===t||t.observe(this.srcElement)):this.srcElement.appendChild(se(this,Wt,"f").srcElement),this.updateListPosition(),se(this,Mt,"m",Zt).call(this,!0),se(this,Wt,"f").focusFirstListElement())},Kt=function(){var t;if(this.alwaysOpen)return;if(this.isListOpened=!1,se(this,jt,"f")&&se(this,qt,"f")&&(window.removeEventListener("scroll",se(this,jt,"f"),!0),window.removeEventListener("resize",se(this,qt,"f"))),!se(this,Wt,"f")||!this.srcElement)return;(this.appendToBody?document.body.contains(se(this,Wt,"f").srcElement):this.srcElement.contains(se(this,Wt,"f").srcElement))&&(this.appendToBody?(document.body.removeChild(se(this,Wt,"f").srcElement),null===(t=se(this,Gt,"f"))||void 0===t||t.disconnect()):this.srcElement.removeChild(se(this,Wt,"f").srcElement),se(this,Mt,"m",Zt).call(this,!1))},Xt=function(t,e){if(!se(this,Wt,"f")||!se(this,Nt,"f"))return;const s=e?"treeselect-list--top-to-body":"treeselect-list--top",i=e?"treeselect-list--bottom-to-body":"treeselect-list--bottom";t?(se(this,Wt,"f").srcElement.classList.add(s),se(this,Wt,"f").srcElement.classList.remove(i),se(this,Nt,"f").srcElement.classList.add("treeselect-input--top"),se(this,Nt,"f").srcElement.classList.remove("treeselect-input--bottom")):(se(this,Wt,"f").srcElement.classList.remove(s),se(this,Wt,"f").srcElement.classList.add(i),se(this,Nt,"f").srcElement.classList.remove("treeselect-input--top"),se(this,Nt,"f").srcElement.classList.add("treeselect-input--bottom"))},Qt=function(t){se(this,Nt,"f")&&se(this,Wt,"f")&&(t?(se(this,Nt,"f").srcElement.classList.add("treeselect-input--focused"),se(this,Wt,"f").srcElement.classList.add("treeselect-list--focused")):(se(this,Nt,"f").srcElement.classList.remove("treeselect-input--focused"),se(this,Wt,"f").srcElement.classList.remove("treeselect-list--focused")))},Zt=function(t){var e,s,i,l;t?null===(e=se(this,Nt,"f"))||void 0===e||e.srcElement.classList.add("treeselect-input--opened"):null===(s=se(this,Nt,"f"))||void 0===s||s.srcElement.classList.remove("treeselect-input--opened"),this.staticList?null===(i=se(this,Wt,"f"))||void 0===i||i.srcElement.classList.add("treeselect-list--static"):null===(l=se(this,Wt,"f"))||void 0===l||l.srcElement.classList.remove("treeselect-list--static")},te=function(t){se(this,jt,"f")&&se(this,qt,"f")&&se(this,It,"f")&&se(this,Vt,"f")&&(this.alwaysOpen&&!t||(window.removeEventListener("scroll",se(this,jt,"f"),!0),window.removeEventListener("resize",se(this,qt,"f"))),document.removeEventListener("mousedown",se(this,It,"f"),!0),document.removeEventListener("focus",se(this,It,"f"),!0),window.removeEventListener("blur",se(this,Vt,"f")))},ee=function(){var t;const e=((t,e)=>{if(e){const[e]=t;return e}return t})(this.value,this.isSingleSelect);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("input",{detail:e})),this.inputCallback&&this.inputCallback(e)};