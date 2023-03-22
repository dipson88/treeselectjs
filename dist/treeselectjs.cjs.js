function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}e(module.exports,"Treeselect",(function(){return At}),(function(e){return At=e}));var t={};e(t,"TreeselectInput",(function(){return M}),(function(e){return M=e}));const s={arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',arrowDown:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',attention:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',cross:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',partialCheck:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},i=(e,t)=>{if(t.innerHTML="","string"==typeof e)t.innerHTML=e;else{const s=e.cloneNode(!0);t.appendChild(s)}},l=e=>{const t=e?Object.assign({},e):{};return Object.keys(s).forEach((e=>{t[e]||(t[e]=s[e])})),t};var n,o,a,c,r,h,d,u,p,m,f,v,w,g,b,k,E,C,y,L,S,x,_,T,O,A,N,P,B=function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)},H=function(e,t,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!l:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(e,s):l?l.value=s:t.set(e,s),s};class M{focus(){setTimeout((()=>B(this,a,"f").focus()),0)}blur(){this.isOpened&&B(this,n,"m",f).call(this),this.clearSearch(),B(this,a,"f").blur()}updateValue(e){this.value=e,B(this,n,"m",d).call(this),B(this,n,"m",m).call(this)}removeItem(e){this.value=this.value.filter((t=>t.id!==e)),B(this,n,"m",P).call(this),B(this,n,"m",d).call(this),B(this,n,"m",m).call(this)}clear(){this.value=[],B(this,n,"m",P).call(this),B(this,n,"m",d).call(this),this.clearSearch()}openClose(){B(this,n,"m",f).call(this)}clearSearch(){this.searchText="",this.searchCallback(""),B(this,n,"m",m).call(this)}constructor({value:e,showTags:t,tagsCountText:s,clearable:i,isAlwaysOpened:l,searchable:d,placeholder:u,disabled:p,isSingleSelect:m,id:f,iconElements:w,inputCallback:b,searchCallback:k,openCallback:E,closeCallback:C,keydownCallback:y,focusCallback:S,blurCallback:x,nameChangeCallback:T}){n.add(this),o.set(this,void 0),a.set(this,void 0),c.set(this,void 0),r.set(this,void 0),this.value=e,this.showTags=t,this.tagsCountText=s,this.searchable=d,this.placeholder=u,this.clearable=i,this.isAlwaysOpened=l,this.disabled=p,this.isSingleSelect=m,this.id=f,this.iconElements=w,this.isOpened=!1,this.searchText="",H(this,o,B(this,n,"m",g).call(this),"f"),H(this,a,B(this,n,"m",L).call(this),"f"),H(this,c,B(this,n,"m",_).call(this),"f"),H(this,r,null,"f"),this.inputCallback=b,this.searchCallback=k,this.openCallback=E,this.closeCallback=C,this.keydownCallback=y,this.focusCallback=S,this.blurCallback=x,this.nameChangeCallback=T,this.srcElement=B(this,n,"m",v).call(this,B(this,o,"f"),B(this,a,"f"),B(this,c,"f")),B(this,n,"m",h).call(this)}}o=new WeakMap,a=new WeakMap,c=new WeakMap,r=new WeakMap,n=new WeakSet,h=function(){B(this,n,"m",d).call(this),B(this,n,"m",m).call(this),B(this,n,"m",u).call(this)},d=function(){if(B(this,o,"f").innerHTML="",this.showTags){B(this,o,"f").append(...B(this,n,"m",b).call(this));const t=(e=this.value).reduce(((t,{name:s},i)=>(t+=s,i<e.length-1&&(t+=", "),t)),"");this.nameChangeCallback(t)}else{const e=B(this,n,"m",y).call(this);B(this,o,"f").appendChild(e),this.nameChangeCallback(e.innerText)}var e;B(this,o,"f").appendChild(B(this,a,"f"))},u=function(){const e=[];B(this,c,"f").innerHTML="",this.clearable&&e.push(B(this,n,"m",T).call(this)),this.isAlwaysOpened||e.push(B(this,n,"m",A).call(this,this.isOpened)),e.length&&B(this,c,"f").append(...e)},p=function(){if(!this.isAlwaysOpened&&B(this,r,"f")){const e=this.isOpened?this.iconElements.arrowUp:this.iconElements.arrowDown;i(e,B(this,r,"f"))}},m=function(){var e;(null===(e=this.value)||void 0===e?void 0:e.length)?(B(this,a,"f").removeAttribute("placeholder"),this.srcElement.classList.remove("treeselect-input--value-not-selected")):(B(this,a,"f").setAttribute("placeholder",this.placeholder),this.srcElement.classList.add("treeselect-input--value-not-selected")),this.searchable?this.srcElement.classList.remove("treeselect-input--unsearchable"):this.srcElement.classList.add("treeselect-input--unsearchable"),this.isSingleSelect?this.srcElement.classList.add("treeselect-input--is-single-select"):this.srcElement.classList.remove("treeselect-input--is-single-select"),B(this,a,"f").value=this.searchText},f=function(){this.isOpened=!this.isOpened,B(this,n,"m",p).call(this),this.isOpened?this.openCallback():this.closeCallback()},v=function(e,t,s){const i=document.createElement("div");return i.classList.add("treeselect-input"),i.setAttribute("tabindex","-1"),i.addEventListener("mousedown",(e=>B(this,n,"m",w).call(this,e))),i.addEventListener("focus",(()=>this.focusCallback()),!0),i.addEventListener("blur",(()=>this.blurCallback()),!0),e.appendChild(t),i.append(e,s),i},w=function(e){e.preventDefault(),e.stopPropagation(),this.isOpened||B(this,n,"m",f).call(this),this.focus()},g=function(){const e=document.createElement("div");return e.classList.add("treeselect-input__tags"),e},b=function(){return this.value.map((e=>{const t=document.createElement("div");t.classList.add("treeselect-input__tags-element"),t.setAttribute("tabindex","-1"),t.setAttribute("tag-id",e.id.toString()),t.setAttribute("title",e.name);const s=B(this,n,"m",E).call(this,e.name),i=B(this,n,"m",C).call(this);return t.addEventListener("mousedown",(t=>B(this,n,"m",k).call(this,t,e.id))),t.append(s,i),t}))},k=function(e,t){e.preventDefault(),e.stopPropagation(),this.removeItem(t),this.focus()},E=function(e){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-name"),t.textContent=e,t},C=function(){const e=document.createElement("span");return e.classList.add("treeselect-input__tags-cross"),i(this.iconElements.cross,e),e},y=function(){const e=document.createElement("span");if(e.classList.add("treeselect-input__tags-count"),!this.value.length)return e.textContent="",e.setAttribute("title",""),e;const t=1===this.value.length?this.value[0].name:`${this.value.length} ${this.tagsCountText}`;return e.textContent=t,e.setAttribute("title",t),e},L=function(){const e=document.createElement("input");return e.classList.add("treeselect-input__edit"),this.id&&e.setAttribute("id",this.id),this.searchable&&!this.disabled||e.setAttribute("readonly","readonly"),this.disabled&&e.setAttribute("tabindex","-1"),e.addEventListener("keydown",(e=>B(this,n,"m",S).call(this,e))),e.addEventListener("input",(t=>B(this,n,"m",x).call(this,t,e))),e},S=function(e){e.stopPropagation();const t=e.key;"Backspace"!==t||this.searchText.length||!this.value.length||this.showTags||this.clear(),"Backspace"===t&&!this.searchText.length&&this.value.length&&this.removeItem(this.value[this.value.length-1].id),"Space"!==e.code||this.searchText&&this.searchable||B(this,n,"m",f).call(this),"Enter"!==t&&"ArrowDown"!==t&&"ArrowUp"!==t||e.preventDefault(),this.keydownCallback(e),"Tab"!==t&&this.focus()},x=function(e,t){e.stopPropagation();const s=this.searchText,i=t.value.trim();if(0!==s.length||0!==i.length){if(this.searchable){const t=e.target.value;this.searchCallback(t),this.isOpened||B(this,n,"m",f).call(this)}else t.value="";this.searchText=t.value}else t.value=""},_=function(){const e=document.createElement("div");return e.classList.add("treeselect-input__operators"),e},T=function(){const e=document.createElement("span");return e.classList.add("treeselect-input__clear"),e.setAttribute("tabindex","-1"),i(this.iconElements.clear,e),e.addEventListener("mousedown",(e=>B(this,n,"m",O).call(this,e))),e},O=function(e){e.preventDefault(),e.stopPropagation(),(this.searchText.length||this.value.length)&&this.clear(),this.focus()},A=function(e){H(this,r,document.createElement("span"),"f"),B(this,r,"f").classList.add("treeselect-input__arrow");const t=e?this.iconElements.arrowUp:this.iconElements.arrowDown;return i(t,B(this,r,"f")),B(this,r,"f").addEventListener("mousedown",(e=>B(this,n,"m",N).call(this,e))),B(this,r,"f")},N=function(e){e.stopPropagation(),e.preventDefault(),this.focus(),B(this,n,"m",f).call(this)},P=function(){this.inputCallback(this.value)};var W={};e(W,"TreeselectList",(function(){return Je}),(function(e){return Je=e}));const V=(e,t,s)=>{F(t);const i=t.filter((t=>!t.disabled&&e.some((e=>e===t.id))));s&&i.length?i[0].checked=!0:i.forEach((e=>{e.checked=!0;const s=G(e,t);e.checked=s}))},G=({id:e,checked:t},s)=>{const i=s.find((t=>t.id===e));if(!i)return!1;const l=j(!!t,i,s);return D(i,s),l},j=(e,t,s)=>{if(!t.isGroup)return t.checked=!t.disabled&&!!e,t.isPartialChecked=!1,t.checked;const i=s.filter((e=>e.childOf===t.id));if(!e||t.disabled||t.isPartialChecked)return t.checked=!1,t.isPartialChecked=!1,$(t,i,s),t.checked;if(!I(i,s))return t.checked=!0,t.isPartialChecked=!1,$(t,i,s),t.checked;return R(i)?(t.checked=!1,t.isPartialChecked=!1,t.disabled=!0,t.checked):(t.checked=!1,t.isPartialChecked=!0,i.forEach((t=>{j(e,t,s)})),t.checked)},D=(e,t)=>{const s=t.find((t=>t.id===e.childOf));s&&(q(s,t),D(s,t))},q=(e,t)=>{const s=K(e,t);if(R(s))return e.checked=!1,e.isPartialChecked=!1,void(e.disabled=!0);if(U(s))return e.checked=!0,void(e.isPartialChecked=!1);if(z(s))return e.checked=!1,void(e.isPartialChecked=!0);e.checked=!1,e.isPartialChecked=!1},$=({checked:e,disabled:t},s,i)=>{s.forEach((s=>{s.disabled=!!t,s.checked=!!e&&!s.disabled,s.isPartialChecked=!1;const l=K(s,i);$({checked:e,disabled:t},l,i)}))},I=(e,t)=>{if(e.some((e=>e.disabled)))return!0;return e.some((e=>{if(e.isGroup){const s=K(e,t);return I(s,t)}return!1}))},R=e=>e.every((e=>!!e.disabled)),U=e=>e.every((e=>!!e.checked)),z=e=>e.some((e=>!!e.checked||!!e.isPartialChecked)),F=e=>{e.forEach((e=>{e.checked=!1,e.isPartialChecked=!1}))},Y=(e,t,s="",i=0)=>{const l=J(e,t,s,i);return Q(l)},J=(e,t,s,i)=>e.reduce(((e,l)=>{var n,o;const a=!!(null===(n=l.children)||void 0===n?void 0:n.length),c=i>=t&&a,r=i>t;if(e.push({id:l.value,name:l.name,childOf:s,isGroup:a,checked:!1,isPartialChecked:!1,level:i,isClosed:c,hidden:r,disabled:null!==(o=l.disabled)&&void 0!==o&&o}),a){const s=J(l.children,t,l.value,i+1);e.push(...s)}return e}),[]),K=({id:e},t)=>t.filter((t=>t.childOf===e)),X=e=>{const{ungroupedNodes:t,allGroupedNodes:s,allNodes:i}=e.reduce(((e,t)=>t.checked?(e.allNodes.push(t),t.isGroup?e.allGroupedNodes.push(t):e.ungroupedNodes.push(t),e):e),{ungroupedNodes:[],allGroupedNodes:[],allNodes:[]});return{ungroupedNodes:t,groupedNodes:i.filter((e=>!s.some((({id:t})=>t===e.childOf)))),allNodes:i}},Q=e=>(e.filter((e=>!!e.disabled)).forEach((({id:t})=>G({id:t,checked:!1},e))),e),Z=(e,{id:t,isClosed:s})=>{K({id:t},e).forEach((t=>{t.hidden=null!=s&&s,t.isGroup&&!t.isClosed&&Z(e,{id:t.id,isClosed:s})}))},ee=e=>{e.filter((e=>e.isGroup&&!e.disabled&&(e.checked||e.isPartialChecked))).forEach((t=>{t.isClosed=!1,Z(e,t)}))},te=(e,t)=>{const s=se(e,t);e.forEach((t=>{s.some((({id:e})=>e===t.id))?(t.isGroup&&(t.isClosed=!1,Z(e,t)),t.hidden=!1):t.hidden=!0}))},se=(e,t)=>e.reduce(((s,i)=>{if(i.name.toLowerCase().includes(t.toLowerCase())){if(s.push(i),i.isGroup){const t=ie(i.id,e);s.push(...t)}if(i.childOf){const t=le(i.childOf,e);s.push(...t)}}return s}),[]),ie=(e,t)=>t.reduce(((s,i)=>(i.childOf===e&&(s.push(i),i.isGroup&&s.push(...ie(i.id,t))),s)),[]),le=(e,t)=>t.reduce(((s,i)=>(i.id===e&&(s.push(i),i.childOf&&s.push(...le(i.childOf,t))),s)),[]);var ne,oe,ae,ce,re,he,de,ue,pe,me,fe,ve,we,ge,be,ke,Ee,Ce,ye,Le,Se,xe,_e,Te,Oe,Ae,Ne,Pe,Be,He,Me=function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)},We=function(e,t,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!l:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(e,s):l?l.value=s:t.set(e,s),s};const Ve=(e,t,s,i,l,n,o,a)=>{V(e,t,l),a&&o&&ee(t),Ge(t,s,i,n)},Ge=(e,t,s,i)=>{e.forEach((l=>{const n=t.querySelector(`[input-id="${l.id}"]`),o=Fe(n);n.checked=l.checked,je(l,o,i),De(l,o),qe(l,o),$e(l,o,s),Ie(l,o),Ue(l,o,e),Re(l,n,s)})),ze(e,t)},je=(e,t,s)=>{e.checked?t.classList.add("treeselect-list__item--checked"):t.classList.remove("treeselect-list__item--checked"),Array.isArray(s)&&s[0]===e.id&&!e.disabled?t.classList.add("treeselect-list__item--single-selected"):t.classList.remove("treeselect-list__item--single-selected")},De=(e,t)=>{e.isPartialChecked?t.classList.add("treeselect-list__item--partial-checked"):t.classList.remove("treeselect-list__item--partial-checked")},qe=(e,t)=>{e.disabled?t.classList.add("treeselect-list__item--disabled"):t.classList.remove("treeselect-list__item--disabled")},$e=(e,t,s)=>{if(e.isGroup){const l=t.querySelector(".treeselect-list__item-icon"),n=e.isClosed?s.arrowRight:s.arrowDown;i(n,l),e.isClosed?t.classList.add("treeselect-list__item--closed"):t.classList.remove("treeselect-list__item--closed")}},Ie=(e,t)=>{e.hidden?t.classList.add("treeselect-list__item--hidden"):t.classList.remove("treeselect-list__item--hidden")},Re=(e,t,s)=>{const l=t.parentNode.querySelector(".treeselect-list__item-checkbox-icon");e.checked?i(s.check,l):e.isPartialChecked?i(s.partialCheck,l):l.innerHTML=""},Ue=(e,t,s)=>{if(0===e.level){const i=s.some((t=>t.isGroup&&t.level===e.level)),l=!e.isGroup&&i?"20px":"5px";t.style.paddingLeft=e.isGroup?"0":l}else t.style.paddingLeft=e.isGroup?20*e.level+"px":20*e.level+20+"px";t.setAttribute("level",e.level.toString()),t.setAttribute("group",e.isGroup.toString())},ze=(e,t)=>{const s=e.some((e=>!e.hidden)),i=t.querySelector(".treeselect-list__empty");s?i.classList.add("treeselect-list__empty--hidden"):i.classList.remove("treeselect-list__empty--hidden")},Fe=e=>e.parentNode.parentNode,Ye=(e,t)=>t.find((t=>t.id.toString()===e));class Je{updateValue(e){this.value=e,We(this,ce,this.isSingleSelect?this.value:[],"f"),Ve(e,this.flattedOptions,this.srcElement,this.iconElements,this.isSingleSelect,Me(this,ce,"f"),this.expandSelected,Me(this,re,"f")),We(this,re,!1,"f"),Me(this,ne,"m",Be).call(this)}updateSearchValue(e){if(e===this.searchText)return;const t=""===this.searchText&&""!==e;this.searchText=e,t&&(this.flattedOptionsBeforeSearch=JSON.parse(JSON.stringify(this.flattedOptions))),""===this.searchText&&(this.flattedOptions=this.flattedOptionsBeforeSearch.map((e=>{const t=this.flattedOptions.find((t=>t.id===e.id));return t.isClosed=e.isClosed,t.hidden=e.hidden,t})),this.flattedOptionsBeforeSearch=[]),this.searchText&&te(this.flattedOptions,e),Ge(this.flattedOptions,this.srcElement,this.iconElements,Me(this,ce,"f")),this.focusFirstListElement()}callKeyAction(e){We(this,ae,!1,"f");const t=this.srcElement.querySelector(".treeselect-list__item--focused");if(null==t?void 0:t.classList.contains("treeselect-list__item--hidden"))return;const s=e.key;"Enter"===s&&t&&t.dispatchEvent(new Event("mousedown")),"ArrowLeft"!==s&&"ArrowRight"!==s||Me(this,ne,"m",he).call(this,t,e),"ArrowDown"!==s&&"ArrowUp"!==s||Me(this,ne,"m",de).call(this,t,s)}focusFirstListElement(){const e="treeselect-list__item--focused",t=this.srcElement.querySelector(`.${e}`),s=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((e=>"none"!==window.getComputedStyle(Fe(e)).display));if(!s.length)return;t&&t.classList.remove(e);Fe(s[0]).classList.add(e)}isLastFocusedElementExist(){return!!Me(this,oe,"f")}constructor({options:e,value:t,openLevel:s,listSlotHtmlComponent:i,emptyText:l,isSingleSelect:n,iconElements:o,showCount:a,disabledBranchNode:c,expandSelected:r,inputCallback:h,arrowClickCallback:d,mouseupCallback:u}){ne.add(this),oe.set(this,null),ae.set(this,!0),ce.set(this,[]),re.set(this,!0),this.options=e,this.value=t,this.openLevel=null!=s?s:0,this.listSlotHtmlComponent=null!=i?i:null,this.emptyText=null!=l?l:"No results found...",this.isSingleSelect=null!=n&&n,this.showCount=null!=a&&a,this.disabledBranchNode=null!=c&&c,this.expandSelected=null!=r&&r,this.iconElements=o,this.searchText="",this.flattedOptions=Y(this.options,this.openLevel),this.flattedOptionsBeforeSearch=this.flattedOptions,this.selectedNodes={nodes:[],groupedNodes:[]},this.srcElement=Me(this,ne,"m",ue).call(this),this.inputCallback=h,this.arrowClickCallback=d,this.mouseupCallback=u,(e=>{const{duplications:t}=e.reduce(((e,t)=>(e.allItems.some((e=>e.toString()===t.id.toString()))&&e.duplications.push(t.id),e.allItems.push(t.id),e)),{duplications:[],allItems:[]});t.length&&console.error(`Validation: You have duplicated values: ${t.join(", ")}! You should use unique values.`)})(this.flattedOptions)}}oe=new WeakMap,ae=new WeakMap,ce=new WeakMap,re=new WeakMap,ne=new WeakSet,he=function(e,t){if(!e)return;const s=t.key,i=e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"),l=Ye(i,this.flattedOptions),n=e.querySelector(".treeselect-list__item-icon");"ArrowLeft"===s&&!l.isClosed&&l.isGroup&&(n.dispatchEvent(new Event("mousedown")),t.preventDefault()),"ArrowRight"===s&&l.isClosed&&l.isGroup&&(n.dispatchEvent(new Event("mousedown")),t.preventDefault())},de=function(e,t){var s,i,l;const n=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((e=>"none"!==window.getComputedStyle(Fe(e)).display));if(n.length)if(e){const e=n.findIndex((e=>Fe(e).classList.contains("treeselect-list__item--focused")));Fe(n[e]).classList.remove("treeselect-list__item--focused");const o="ArrowDown"===t?e+1:e-1,a="ArrowDown"===t?0:n.length-1,c=null!==(s=n[o])&&void 0!==s?s:n[a],r=!n[o],h=Fe(c);h.classList.add("treeselect-list__item--focused");const d=this.srcElement.getBoundingClientRect(),u=h.getBoundingClientRect();if(r&&"ArrowDown"===t)return void this.srcElement.scroll(0,0);if(r&&"ArrowUp"===t)return void this.srcElement.scroll(0,this.srcElement.scrollHeight);const p=null!==(l=null===(i=this.listSlotHtmlComponent)||void 0===i?void 0:i.clientHeight)&&void 0!==l?l:0;if(d.y+d.height<u.y+u.height+p)return void this.srcElement.scroll(0,this.srcElement.scrollTop+u.height);if(d.y>u.y)return void this.srcElement.scroll(0,this.srcElement.scrollTop-u.height)}else{Fe(n[0]).classList.add("treeselect-list__item--focused")}},ue=function(){const e=Me(this,ne,"m",pe).call(this),t=Me(this,ne,"m",ve).call(this,this.options);e.append(...t);const s=Me(this,ne,"m",we).call(this);s&&e.append(s);const i=Me(this,ne,"m",ge).call(this);return e.append(i),e},pe=function(){const e=document.createElement("div");return e.classList.add("treeselect-list"),this.isSingleSelect&&e.classList.add("treeselect-list--single-select"),this.disabledBranchNode&&e.classList.add("treeselect-list--disabled-branch-node"),e.addEventListener("mouseout",(e=>Me(this,ne,"m",me).call(this,e))),e.addEventListener("mousemove",(()=>Me(this,ne,"m",fe).call(this))),e.addEventListener("mouseup",(()=>this.mouseupCallback()),!0),e},me=function(e){e.stopPropagation(),Me(this,oe,"f")&&Me(this,ae,"f")&&Me(this,oe,"f").classList.add("treeselect-list__item--focused")},fe=function(){We(this,ae,!0,"f")},ve=function e(t){return t.reduce(((t,s)=>{var i;if(null===(i=s.children)||void 0===i?void 0:i.length){const i=Me(this,ne,"m",be).call(this,s),l=Me(this,ne,"m",e).call(this,s.children);return i.append(...l),t.push(i),t}const l=Me(this,ne,"m",ke).call(this,s,!1);return t.push(l),t}),[])},we=function(){if(!this.listSlotHtmlComponent)return null;const e=document.createElement("div");return e.classList.add("treeselect-list__slot"),e.appendChild(this.listSlotHtmlComponent),e},ge=function(){const e=document.createElement("div");e.classList.add("treeselect-list__empty"),e.setAttribute("title",this.emptyText);const t=document.createElement("span");t.classList.add("treeselect-list__empty-icon"),i(this.iconElements.attention,t);const s=document.createElement("span");return s.classList.add("treeselect-list__empty-text"),s.textContent=this.emptyText,e.append(t,s),e},be=function(e){const t=document.createElement("div");t.setAttribute("group-container-id",e.value.toString()),t.classList.add("treeselect-list__group-container");const s=Me(this,ne,"m",ke).call(this,e,!0);return t.appendChild(s),t},ke=function(e,t){const s=Me(this,ne,"m",Ee).call(this,e);if(t){const e=Me(this,ne,"m",Se).call(this);s.appendChild(e),s.classList.add("treeselect-list__item--group")}const i=Me(this,ne,"m",_e).call(this,e),l=Me(this,ne,"m",Te).call(this,e,t);return s.append(i,l),s},Ee=function(e){const t=document.createElement("div");return((e,t)=>{t&&Object.keys(t).forEach((s=>{const i=t[s];"string"==typeof i&&e.setAttribute(s,i)}))})(t,e.htmlAttr),t.setAttribute("tabindex","-1"),t.setAttribute("title",e.name),t.classList.add("treeselect-list__item"),t.addEventListener("mouseover",(()=>Me(this,ne,"m",Ce).call(this,t)),!0),t.addEventListener("mouseout",(()=>Me(this,ne,"m",ye).call(this,t)),!0),t.addEventListener("mousedown",(t=>Me(this,ne,"m",Le).call(this,t,e))),t},Ce=function(e){Me(this,ae,"f")&&Me(this,ne,"m",Pe).call(this,!0,e)},ye=function(e){Me(this,ae,"f")&&(Me(this,ne,"m",Pe).call(this,!1,e),We(this,oe,e,"f"))},Le=function(e,t){var s;e.preventDefault(),e.stopPropagation();if(null===(s=this.flattedOptions.find((e=>e.id===t.value)))||void 0===s?void 0:s.disabled)return;const i=e.target.querySelector(".treeselect-list__item-checkbox");i.checked=!i.checked,Me(this,ne,"m",Ae).call(this,i,t)},Se=function(){const e=document.createElement("span");return e.setAttribute("tabindex","-1"),e.classList.add("treeselect-list__item-icon"),i(this.iconElements.arrowDown,e),e.addEventListener("mousedown",(e=>Me(this,ne,"m",xe).call(this,e))),e},xe=function(e){e.preventDefault(),e.stopPropagation(),Me(this,ne,"m",Ne).call(this,e)},_e=function(e){const t=document.createElement("div");t.classList.add("treeselect-list__item-checkbox-container");const s=document.createElement("span");s.classList.add("treeselect-list__item-checkbox-icon"),s.innerHTML="";const i=document.createElement("input");return i.setAttribute("tabindex","-1"),i.setAttribute("type","checkbox"),i.setAttribute("input-id",e.value.toString()),i.classList.add("treeselect-list__item-checkbox"),t.append(s,i),t},Te=function(e,t){const s=document.createElement("label");if(s.textContent=e.name,s.classList.add("treeselect-list__item-label"),t&&this.showCount){const t=Me(this,ne,"m",Oe).call(this,e);s.appendChild(t)}return s},Oe=function(e){const t=document.createElement("span"),s=this.flattedOptions.filter((t=>t.childOf===e.value));return t.textContent=`(${s.length})`,t.classList.add("treeselect-list__item-label-counter"),t},Ae=function(e,t){const s=this.flattedOptions.find((e=>e.id===t.value));if(s)if((null==s?void 0:s.isGroup)&&this.disabledBranchNode){const t=Fe(e).querySelector(".treeselect-list__item-icon");null==t||t.dispatchEvent(new Event("mousedown"))}else{if(this.isSingleSelect){const[e]=Me(this,ce,"f");if(s.id===e)return;We(this,ce,[s.id],"f"),V([s.id],this.flattedOptions,this.isSingleSelect)}else{s.checked=e.checked;const t=G(s,this.flattedOptions);e.checked=t}Ge(this.flattedOptions,this.srcElement,this.iconElements,Me(this,ce,"f")),Me(this,ne,"m",He).call(this)}},Ne=function(e){var t,s,i;const l=null===(s=null===(t=e.target)||void 0===t?void 0:t.parentNode)||void 0===s?void 0:s.querySelector("[input-id]"),n=null!==(i=null==l?void 0:l.getAttribute("input-id"))&&void 0!==i?i:null,o=Ye(n,this.flattedOptions);o&&(o.isClosed=!o.isClosed,Z(this.flattedOptions,o),Ge(this.flattedOptions,this.srcElement,this.iconElements,Me(this,ce,"f")),this.arrowClickCallback())},Pe=function(e,t){const s="treeselect-list__item--focused";if(e){const e=Array.from(this.srcElement.querySelectorAll(`.${s}`));e.length&&e.forEach((e=>e.classList.remove(s))),t.classList.add(s)}else t.classList.remove(s)},Be=function(){const{ungroupedNodes:e,groupedNodes:t}=X(this.flattedOptions);this.selectedNodes={nodes:e,groupedNodes:t}},He=function(){Me(this,ne,"m",Be).call(this),this.inputCallback(this.selectedNodes),this.value=this.selectedNodes.nodes.map((e=>e.id))};var Ke,Xe,Qe,Ze,et,tt,st,it,lt,nt,ot,at,ct,rt,ht,dt,ut,pt,mt,ft,vt,wt,gt,bt,kt,Et,Ct,yt,Lt,St,xt,_t=function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)},Tt=function(e,t,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!l:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(e,s):l?l.value=s:t.set(e,s),s};const Ot=e=>e.map((e=>e.id));class At{mount(e){var t;this.destroy();const{container:s,list:i,input:l}=_t(this,Ke,"m",at).call(this);this.srcElement=s,Tt(this,Xe,i,"f"),Tt(this,Qe,l,"f"),Tt(this,st,this.scrollWindowHandler.bind(this),"f"),Tt(this,it,this.scrollWindowHandler.bind(this),"f"),Tt(this,lt,this.focusWindowHandler.bind(this),"f"),Tt(this,nt,this.blurWindowHandler.bind(this),"f"),this.alwaysOpen&&(null===(t=_t(this,Qe,"f"))||void 0===t||t.openClose()),this.disabled?this.srcElement.classList.add("treeselect--disabled"):this.srcElement.classList.remove("treeselect--disabled"),this.updateValue(null!=e?e:this.value)}updateValue(e){var t;const s=_t(this,Xe,"f");if(s){const i=(e=>e?Array.isArray(e)?e:[e]:[])(e);s.updateValue(i);const{groupedNodes:l,nodes:n}=s.selectedNodes,o=this.grouped||this.isSingleSelect?l:n;null===(t=_t(this,Qe,"f"))||void 0===t||t.updateValue(o),_t(this,Ke,"m",ot).call(this,{groupedNodes:l,nodes:n})}}destroy(){this.srcElement&&(_t(this,Ke,"m",wt).call(this),this.srcElement.innerHTML="",this.srcElement=null,_t(this,Ke,"m",Et).call(this,!0))}focus(){_t(this,Qe,"f")&&_t(this,Qe,"f").focus()}toggleOpenClose(){_t(this,Qe,"f")&&(_t(this,Qe,"f").openClose(),_t(this,Qe,"f").focus())}scrollWindowHandler(){this.updateListPosition()}focusWindowHandler(e){var t,s,i;(null===(t=this.srcElement)||void 0===t?void 0:t.contains(e.target))||(null===(s=_t(this,Xe,"f"))||void 0===s?void 0:s.srcElement.contains(e.target))||(null===(i=_t(this,Qe,"f"))||void 0===i||i.blur(),_t(this,Ke,"m",Et).call(this,!1),_t(this,Ke,"m",bt).call(this,!1))}blurWindowHandler(){var e;null===(e=_t(this,Qe,"f"))||void 0===e||e.blur(),_t(this,Ke,"m",Et).call(this,!1),_t(this,Ke,"m",bt).call(this,!1)}updateListPosition(){var e;const t=this.srcElement,s=null===(e=_t(this,Xe,"f"))||void 0===e?void 0:e.srcElement;if(!t||!s)return;const{height:i}=s.getBoundingClientRect(),{x:l,y:n,height:o,width:a}=t.getBoundingClientRect(),c=window.innerHeight-n-o;let r=n>c&&n>=i&&c<i;if("auto"!==this.direction&&(r="top"===this.direction),this.appendToBody){"0px"===s.style.top&&"0px"===s.style.left||(s.style.top="0px",s.style.left="0px");const e=l+window.scrollX,t=r?n+window.scrollY-i:n+window.scrollY+o;s.style.transform=`translate(${e}px,${t}px)`,s.style.width=`${a}px`}const h=r?"top":"bottom";s.getAttribute("direction")!==h&&(s.setAttribute("direction",h),_t(this,Ke,"m",gt).call(this,r,this.appendToBody))}constructor({parentHtmlContainer:e,value:t,options:s,openLevel:i,appendToBody:n,alwaysOpen:o,showTags:a,tagsCountText:c,clearable:r,searchable:h,placeholder:d,grouped:u,isGroupedValue:p,listSlotHtmlComponent:m,disabled:f,emptyText:v,staticList:w,id:g,isSingleSelect:b,showCount:k,disabledBranchNode:E,direction:C,expandSelected:y,saveScrollPosition:L,iconElements:S,inputCallback:x,openCallback:_,closeCallback:T,nameChangeCallback:O}){Ke.add(this),Xe.set(this,null),Qe.set(this,null),Ze.set(this,null),et.set(this,0),tt.set(this,0),st.set(this,null),it.set(this,null),lt.set(this,null),nt.set(this,null),(({parentHtmlContainer:e,staticList:t,appendToBody:s,isSingleSelect:i,value:l,direction:n})=>{e||console.error("Validation: parentHtmlContainer prop is required!"),t&&s&&console.error("Validation: You should set staticList to false if you use appendToBody!"),i&&Array.isArray(l)&&console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"),i||Array.isArray(l)||console.error("Validation: you should pass an array as a value!"),n&&"auto"!==n&&"bottom"!==n&&"top"!==n&&console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!")})({parentHtmlContainer:e,value:t,staticList:w,appendToBody:n,isSingleSelect:b}),this.parentHtmlContainer=e,this.value=[],this.options=null!=s?s:[],this.openLevel=null!=i?i:0,this.appendToBody=null!=n&&n,this.alwaysOpen=!(!o||f),this.showTags=null==a||a,this.tagsCountText=null!=c?c:"elements selected",this.clearable=null==r||r,this.searchable=null==h||h,this.placeholder=null!=d?d:"Search...",this.grouped=null==u||u,this.isGroupedValue=null!=p&&p,this.listSlotHtmlComponent=null!=m?m:null,this.disabled=null!=f&&f,this.emptyText=null!=v?v:"No results found...",this.staticList=!(!w||this.appendToBody),this.id=null!=g?g:"",this.isSingleSelect=null!=b&&b,this.showCount=null!=k&&k,this.disabledBranchNode=null!=E&&E,this.direction=null!=C?C:"auto",this.expandSelected=null!=y&&y,this.saveScrollPosition=null==L||L,this.iconElements=l(S),this.inputCallback=x,this.openCallback=_,this.closeCallback=T,this.nameChangeCallback=O,this.ungroupedValue=[],this.groupedValue=[],this.isListOpened=!1,this.selectedName="",this.srcElement=null,this.mount(t)}}Xe=new WeakMap,Qe=new WeakMap,Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,st=new WeakMap,it=new WeakMap,lt=new WeakMap,nt=new WeakMap,Ke=new WeakSet,ot=function({groupedNodes:e,nodes:t}){this.ungroupedValue=t?Ot(t):[],this.groupedValue=e?Ot(e):[];const s=this.isGroupedValue||this.isSingleSelect?this.groupedValue:this.ungroupedValue;this.value=((e,t)=>{if(t){const[t]=e;return t}return e})(s,this.isSingleSelect)},at=function(){const e=this.parentHtmlContainer;e.classList.add("treeselect");const s=new(0,W.TreeselectList)({options:this.options,value:this.ungroupedValue,openLevel:this.openLevel,listSlotHtmlComponent:this.listSlotHtmlComponent,emptyText:this.emptyText,isSingleSelect:this.isSingleSelect,showCount:this.showCount,disabledBranchNode:this.disabledBranchNode,expandSelected:this.expandSelected,iconElements:this.iconElements,inputCallback:e=>_t(this,Ke,"m",pt).call(this,e),arrowClickCallback:()=>_t(this,Ke,"m",mt).call(this),mouseupCallback:()=>{var e;return null===(e=_t(this,Qe,"f"))||void 0===e?void 0:e.focus()}}),{groupedNodes:i,nodes:l}=s.selectedNodes,n=new(0,t.TreeselectInput)({value:this.grouped||this.isSingleSelect?i:l,showTags:this.showTags,tagsCountText:this.tagsCountText,clearable:this.clearable,isAlwaysOpened:this.alwaysOpen,searchable:this.searchable,placeholder:this.placeholder,disabled:this.disabled,isSingleSelect:this.isSingleSelect,id:this.id,iconElements:this.iconElements,inputCallback:e=>_t(this,Ke,"m",ct).call(this,e),searchCallback:e=>_t(this,Ke,"m",ht).call(this,e),openCallback:()=>_t(this,Ke,"m",vt).call(this),closeCallback:()=>_t(this,Ke,"m",wt).call(this),keydownCallback:e=>_t(this,Ke,"m",rt).call(this,e),focusCallback:()=>_t(this,Ke,"m",dt).call(this),blurCallback:()=>_t(this,Ke,"m",ut).call(this),nameChangeCallback:e=>_t(this,Ke,"m",ft).call(this,e)});return this.appendToBody&&Tt(this,Ze,new ResizeObserver((()=>this.updateListPosition())),"f"),e.append(n.srcElement),{container:e,list:s,input:n}},ct=function(e){var t,s,i,l,n;const o=Ot(e);null===(t=_t(this,Xe,"f"))||void 0===t||t.updateValue(o);const a=null===(i=null===(s=_t(this,Xe,"f"))||void 0===s?void 0:s.selectedNodes)||void 0===i?void 0:i.nodes,c=null===(n=null===(l=_t(this,Xe,"f"))||void 0===l?void 0:l.selectedNodes)||void 0===n?void 0:n.groupedNodes;_t(this,Ke,"m",ot).call(this,{groupedNodes:c,nodes:a}),_t(this,Ke,"m",yt).call(this)},rt=function(e){var t;this.isListOpened&&(null===(t=_t(this,Xe,"f"))||void 0===t||t.callKeyAction(e))},ht=function(e){_t(this,tt,"f")&&clearTimeout(_t(this,tt,"f")),Tt(this,tt,setTimeout((()=>{var t;null===(t=_t(this,Xe,"f"))||void 0===t||t.updateSearchValue(e),this.updateListPosition()}),350),"f")},dt=function(){_t(this,Ke,"m",bt).call(this,!0),_t(this,lt,"f")&&_t(this,lt,"f")&&_t(this,nt,"f")&&(document.addEventListener("mousedown",_t(this,lt,"f"),!0),document.addEventListener("focus",_t(this,lt,"f"),!0),window.addEventListener("blur",_t(this,nt,"f")))},ut=function(){setTimeout((()=>{var e,t;const s=null===(e=_t(this,Qe,"f"))||void 0===e?void 0:e.srcElement.contains(document.activeElement),i=null===(t=_t(this,Xe,"f"))||void 0===t?void 0:t.srcElement.contains(document.activeElement);s||i||this.blurWindowHandler()}),1)},pt=function(e){var t,s,i,l;const{groupedNodes:n,nodes:o}=e,a=this.grouped||this.isSingleSelect?n:o;null===(t=_t(this,Qe,"f"))||void 0===t||t.updateValue(a),_t(this,Ke,"m",ot).call(this,{groupedNodes:n,nodes:o}),this.isSingleSelect&&!this.alwaysOpen&&(null===(s=_t(this,Qe,"f"))||void 0===s||s.openClose(),null===(i=_t(this,Qe,"f"))||void 0===i||i.clearSearch()),null===(l=_t(this,Qe,"f"))||void 0===l||l.focus(),_t(this,Ke,"m",yt).call(this)},mt=function(){var e;null===(e=_t(this,Qe,"f"))||void 0===e||e.focus(),this.updateListPosition()},ft=function(e){this.selectedName!==e&&(this.selectedName=e,_t(this,Ke,"m",Lt).call(this))},vt=function(){var e;this.isListOpened=!0,_t(this,st,"f")&&_t(this,it,"f")&&(window.addEventListener("scroll",_t(this,st,"f"),!0),window.addEventListener("resize",_t(this,it,"f"))),_t(this,Xe,"f")&&this.srcElement&&(this.appendToBody?(document.body.appendChild(_t(this,Xe,"f").srcElement),null===(e=_t(this,Ze,"f"))||void 0===e||e.observe(this.srcElement)):this.srcElement.appendChild(_t(this,Xe,"f").srcElement),this.updateListPosition(),_t(this,Ke,"m",kt).call(this,!0),_t(this,Ke,"m",Ct).call(this),_t(this,Ke,"m",St).call(this))},wt=function(){var e;if(this.alwaysOpen)return;if(this.isListOpened=!1,_t(this,st,"f")&&_t(this,it,"f")&&(window.removeEventListener("scroll",_t(this,st,"f"),!0),window.removeEventListener("resize",_t(this,it,"f"))),!_t(this,Xe,"f")||!this.srcElement)return;(this.appendToBody?document.body.contains(_t(this,Xe,"f").srcElement):this.srcElement.contains(_t(this,Xe,"f").srcElement))&&(Tt(this,et,_t(this,Xe,"f").srcElement.scrollTop,"f"),this.appendToBody?(document.body.removeChild(_t(this,Xe,"f").srcElement),null===(e=_t(this,Ze,"f"))||void 0===e||e.disconnect()):this.srcElement.removeChild(_t(this,Xe,"f").srcElement),_t(this,Ke,"m",kt).call(this,!1),_t(this,Ke,"m",xt).call(this))},gt=function(e,t){if(!_t(this,Xe,"f")||!_t(this,Qe,"f"))return;const s=t?"treeselect-list--top-to-body":"treeselect-list--top",i=t?"treeselect-list--bottom-to-body":"treeselect-list--bottom";e?(_t(this,Xe,"f").srcElement.classList.add(s),_t(this,Xe,"f").srcElement.classList.remove(i),_t(this,Qe,"f").srcElement.classList.add("treeselect-input--top"),_t(this,Qe,"f").srcElement.classList.remove("treeselect-input--bottom")):(_t(this,Xe,"f").srcElement.classList.remove(s),_t(this,Xe,"f").srcElement.classList.add(i),_t(this,Qe,"f").srcElement.classList.remove("treeselect-input--top"),_t(this,Qe,"f").srcElement.classList.add("treeselect-input--bottom"))},bt=function(e){_t(this,Qe,"f")&&_t(this,Xe,"f")&&(e?(_t(this,Qe,"f").srcElement.classList.add("treeselect-input--focused"),_t(this,Xe,"f").srcElement.classList.add("treeselect-list--focused")):(_t(this,Qe,"f").srcElement.classList.remove("treeselect-input--focused"),_t(this,Xe,"f").srcElement.classList.remove("treeselect-list--focused")))},kt=function(e){var t,s,i,l;e?null===(t=_t(this,Qe,"f"))||void 0===t||t.srcElement.classList.add("treeselect-input--opened"):null===(s=_t(this,Qe,"f"))||void 0===s||s.srcElement.classList.remove("treeselect-input--opened"),this.staticList?null===(i=_t(this,Xe,"f"))||void 0===i||i.srcElement.classList.add("treeselect-list--static"):null===(l=_t(this,Xe,"f"))||void 0===l||l.srcElement.classList.remove("treeselect-list--static")},Et=function(e){_t(this,st,"f")&&_t(this,it,"f")&&_t(this,lt,"f")&&_t(this,nt,"f")&&(this.alwaysOpen&&!e||(window.removeEventListener("scroll",_t(this,st,"f"),!0),window.removeEventListener("resize",_t(this,it,"f"))),document.removeEventListener("mousedown",_t(this,lt,"f"),!0),document.removeEventListener("focus",_t(this,lt,"f"),!0),window.removeEventListener("blur",_t(this,nt,"f")))},Ct=function(){var e,t,s;const i=null===(e=_t(this,Xe,"f"))||void 0===e?void 0:e.isLastFocusedElementExist();this.saveScrollPosition&&i?null===(t=_t(this,Xe,"f"))||void 0===t||t.srcElement.scroll(0,_t(this,et,"f")):null===(s=_t(this,Xe,"f"))||void 0===s||s.focusFirstListElement()},yt=function(){var e;null===(e=this.srcElement)||void 0===e||e.dispatchEvent(new CustomEvent("input",{detail:this.value})),this.inputCallback&&this.inputCallback(this.value)},Lt=function(){var e;null===(e=this.srcElement)||void 0===e||e.dispatchEvent(new CustomEvent("name-change",{detail:this.selectedName})),this.nameChangeCallback&&this.nameChangeCallback(this.selectedName)},St=function(){var e;this.alwaysOpen||(null===(e=this.srcElement)||void 0===e||e.dispatchEvent(new CustomEvent("open",{detail:this.value})),this.openCallback&&this.openCallback(this.value))},xt=function(){var e;this.alwaysOpen||(null===(e=this.srcElement)||void 0===e||e.dispatchEvent(new CustomEvent("close",{detail:this.value})),this.closeCallback&&this.closeCallback(this.value))};