function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}t(module.exports,"Treeselect",(function(){return ae}),(function(t){return ae=t}));var e={};t(e,"TreeselectInput",(function(){return G}),(function(t){return G=t}));const s={arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',arrowDown:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',attention:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',cross:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',partialCheck:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},i=(t,e)=>{if(e.innerHTML="","string"==typeof t)e.innerHTML=t;else{const s=t.cloneNode(!0);e.appendChild(s)}},n=t=>{const e=t?Object.assign({},t):{};return Object.keys(s).forEach((t=>{e[t]||(e[t]=s[t])})),e};var l,o,c,r,a,h,d,u,m,p,f,v,w,E,g,L,y,b,k,_,x,C,T,O,A,S,H,P,B,M,W,N=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},j=function(t,e,s,i,n){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?n.call(t,s):n?n.value=s:e.set(t,s),s};class G{focus(){N(this,c,"f").focus()}blur(){this.isOpened&&N(this,l,"m",f).call(this)}updateValue(t){this.value=t,N(this,l,"m",d).call(this),N(this,l,"m",p).call(this)}removeItem(t){this.value=this.value.filter((e=>e.id!==t)),N(this,l,"m",P).call(this),N(this,l,"m",d).call(this),N(this,l,"m",p).call(this)}clear(){this.value=[],this.searchText="",N(this,l,"m",B).call(this,""),N(this,l,"m",P).call(this),N(this,l,"m",d).call(this),N(this,l,"m",p).call(this)}openClose(){N(this,l,"m",f).call(this)}constructor({value:t,showTags:e,tagsCountText:s,clearable:i,isAlwaysOpened:n,searchable:d,placeholder:u,disabled:m,id:p,iconElements:f}){l.add(this),o.set(this,void 0),c.set(this,void 0),r.set(this,void 0),a.set(this,void 0),this.value=t,this.showTags=e,this.tagsCountText=s,this.searchable=d,this.placeholder=u,this.clearable=i,this.isAlwaysOpened=n,this.disabled=m,this.id=p,this.iconElements=f,this.isOpened=!1,this.searchText="",j(this,o,N(this,l,"m",E).call(this),"f"),j(this,c,N(this,l,"m",_).call(this),"f"),j(this,r,N(this,l,"m",T).call(this),"f"),j(this,a,null,"f"),this.srcElement=N(this,l,"m",v).call(this,N(this,o,"f"),N(this,c,"f"),N(this,r,"f")),N(this,l,"m",h).call(this)}}o=new WeakMap,c=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakSet,h=function(){N(this,l,"m",d).call(this),N(this,l,"m",p).call(this),N(this,l,"m",u).call(this)},d=function(){N(this,o,"f").innerHTML="",this.showTags?N(this,o,"f").append(...N(this,l,"m",g).call(this)):N(this,o,"f").appendChild(N(this,l,"m",k).call(this))},u=function(){const t=[];N(this,r,"f").innerHTML="",this.clearable&&t.push(N(this,l,"m",O).call(this)),this.isAlwaysOpened||t.push(N(this,l,"m",S).call(this,this.isOpened)),t.length&&N(this,r,"f").append(...t)},m=function(){if(!this.isAlwaysOpened&&N(this,a,"f")){const t=this.isOpened?this.iconElements.arrowUp:this.iconElements.arrowDown;i(t,N(this,a,"f"))}},p=function(){var t;(null===(t=this.value)||void 0===t?void 0:t.length)?N(this,c,"f").removeAttribute("placeholder"):N(this,c,"f").setAttribute("placeholder",this.placeholder),this.searchable?this.srcElement.classList.remove("treeselect-input--unsearchable"):this.srcElement.classList.add("treeselect-input--unsearchable"),N(this,c,"f").value=this.searchText},f=function(){this.isOpened=!this.isOpened,N(this,l,"m",m).call(this),this.isOpened?N(this,l,"m",M).call(this):N(this,l,"m",W).call(this)},v=function(t,e,s){const i=document.createElement("div");return i.classList.add("treeselect-input"),i.setAttribute("tabindex","-1"),i.addEventListener("mousedown",(t=>N(this,l,"m",w).call(this,t))),i.append(t,e,s),i},w=function(t){t.preventDefault(),this.isOpened||N(this,l,"m",f).call(this),this.focus()},E=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__tags"),t},g=function(){return this.value.map((t=>{const e=document.createElement("div");e.classList.add("treeselect-input__tags-element"),e.setAttribute("tabindex","-1"),e.setAttribute("tag-id",t.id.toString()),e.setAttribute("title",t.name);const s=N(this,l,"m",y).call(this,t.name),i=N(this,l,"m",b).call(this);return e.addEventListener("mousedown",(e=>N(this,l,"m",L).call(this,e,t.id))),e.append(s,i),e}))},L=function(t,e){t.preventDefault(),t.stopPropagation(),this.focus(),this.removeItem(e)},y=function(t){const e=document.createElement("span");return e.classList.add("treeselect-input__tags-name"),e.innerHTML=t,e},b=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-cross"),i(this.iconElements.cross,t),t},k=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-count"),this.value.length?(t.innerHTML=1===this.value.length?this.value[0].name:`${this.value.length} ${this.tagsCountText}`,t):(t.innerHTML="",t)},_=function(){const t=document.createElement("input");return t.classList.add("treeselect-input__edit"),t.setAttribute("id",this.id),this.disabled&&t.setAttribute("tabindex","-1"),t.addEventListener("keydown",(t=>N(this,l,"m",x).call(this,t))),t.addEventListener("input",(e=>N(this,l,"m",C).call(this,e,t))),t},x=function(t){"Backspace"!==t.key||this.searchText.length||!this.value.length||this.showTags||this.clear(),"Backspace"===t.key&&!this.searchText.length&&this.value.length&&this.removeItem(this.value[this.value.length-1].id),"Space"!==t.code||this.searchText&&this.searchable||N(this,l,"m",f).call(this)},C=function(t,e){t.stopPropagation();const s=this.searchText,i=e.value.trim();if(0!==s.length||0!==i.length){if(this.searchable){const e=t.target.value;N(this,l,"m",B).call(this,e),this.isOpened||N(this,l,"m",f).call(this)}else e.value="";this.searchText=e.value}else e.value=""},T=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__operators"),t},O=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__clear"),t.setAttribute("tabindex","-1"),i(this.iconElements.clear,t),t.addEventListener("mousedown",(t=>N(this,l,"m",A).call(this,t))),t},A=function(t){var e;t.preventDefault(),t.stopPropagation(),null===(e=N(this,c,"f"))||void 0===e||e.focus(),(this.searchText.length||this.value.length)&&this.clear()},S=function(t){j(this,a,document.createElement("span"),"f"),N(this,a,"f").classList.add("treeselect-input__arrow");const e=t?this.iconElements.arrowUp:this.iconElements.arrowDown;return i(e,N(this,a,"f")),N(this,a,"f").addEventListener("mousedown",(t=>N(this,l,"m",H).call(this,t))),N(this,a,"f")},H=function(t){t.stopPropagation(),t.preventDefault(),this.focus(),N(this,l,"m",f).call(this)},P=function(){this.srcElement.dispatchEvent(new CustomEvent("input",{detail:this.value}))},B=function(t){this.srcElement.dispatchEvent(new CustomEvent("search",{detail:t}))},M=function(){this.srcElement.dispatchEvent(new CustomEvent("open"))},W=function(){this.srcElement.dispatchEvent(new CustomEvent("close"))};var q={};t(q,"TreeselectList",(function(){return jt}),(function(t){return jt=t}));const I=(t,e,s="",i=0)=>t.reduce(((t,n)=>{var l;const o=!!(null===(l=n.children)||void 0===l?void 0:l.length),c=i>=e&&o,r=i>e;if(t.push({id:n.value,name:n.name,childOf:s,isGroup:o,checked:!1,isPartialChecked:!1,level:i,isClosed:c,hidden:r}),o){const s=I(n.children,e,n.value,i+1);t.push(...s)}return t}),[]),D=({id:t,checked:e},s)=>{s.forEach((i=>{i.childOf===t&&(i.checked=null==e||e,i.isPartialChecked=!1,i.isGroup&&D(i,s))}))},V=(t,e)=>{const s=e.find((e=>e.id===t)),i=e.filter((t=>t.childOf===(null==s?void 0:s.id)));if(!s)return;const n=i.every((t=>t.checked)),l=i.some((t=>t.isPartialChecked||t.checked))&&!n,o=!n&&!l;n&&(s.checked=!0,s.isPartialChecked=!1),l&&(s.checked=!1,s.isPartialChecked=!0),o&&(s.checked=!1,s.isPartialChecked=!1),s.childOf&&V(s.childOf,e)},$=({id:t,isGroup:e,childOf:s,checked:i},n)=>{e&&D({id:t,checked:i},n),s&&V(s,n)},R=(t,e)=>e.reduce(((s,i)=>(i.childOf===t&&(s.push(i),i.isGroup&&s.push(...R(i.id,e))),s)),[]),z=(t,e)=>e.reduce(((s,i)=>(i.id===t&&(s.push(i),i.childOf&&s.push(...z(i.childOf,e))),s)),[]),U=t=>{const{onlyGroupsIds:e,allItems:s}=t.reduce(((t,e)=>e.checked?(e.isGroup&&t.onlyGroupsIds.push(e.id),t.allItems.push(e),t):t),{onlyGroupsIds:[],allItems:[]});return s.filter((t=>!e.some((e=>e===t.childOf))))},Y=(t,{id:e,isClosed:s})=>{t.filter((t=>t.childOf===e)).forEach((e=>{e.hidden=null!=s&&s,e.isGroup&&!e.isClosed&&Y(t,{id:e.id,isClosed:s})}))},F=(t,e)=>{const s=((t,e)=>t.reduce(((s,i)=>{if(i.name.toLowerCase().includes(e.toLowerCase())){if(s.push(i),i.isGroup){const e=R(i.id,t);s.push(...e)}if(i.childOf){const e=z(i.childOf,t);s.push(...e)}}return s}),[]))(t,e);t.forEach((e=>{s.some((t=>t.id===e.id))?(e.isGroup&&(e.isClosed=!1,Y(t,e)),e.hidden=!1):e.hidden=!0}))},J=(t,e)=>{(t=>{t.forEach((t=>{t.checked=!1,t.isPartialChecked=!1}))})(e);e.filter((e=>t.some((t=>t===e.id)))).forEach((t=>{t.checked=!0,t.isPartialChecked=!1,$(t,e)}))};var K,X,Q,Z,tt,et,st,it,nt,lt,ot,ct,rt,at,ht,dt,ut,mt,pt,ft,vt,wt,Et,gt,Lt,yt,bt,kt,_t=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},xt=function(t,e,s,i,n){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?n.call(t,s):n?n.value=s:e.set(t,s),s};const Ct=(t,e,s,i)=>{J(t,e),Tt(e,s,i)},Tt=(t,e,s)=>{t.forEach((i=>{const n=e.querySelector(`[input-id="${i.id}"]`),l=Wt(n);n.checked=i.checked,Ot(i,l),At(i,l),St(i,l,s),Ht(i,l),Bt(i,l,t),Pt(i,n,s)})),Mt(t,e)},Ot=(t,e)=>{t.checked?e.classList.add("treeselect-list__item--checked"):e.classList.remove("treeselect-list__item--checked")},At=(t,e)=>{t.isPartialChecked?e.classList.add("treeselect-list__item--partial-checked"):e.classList.remove("treeselect-list__item--partial-checked")},St=(t,e,s)=>{if(t.isGroup){const n=e.querySelector(".treeselect-list__item-icon"),l=t.isClosed?s.arrowRight:s.arrowDown;i(l,n),t.isClosed?e.classList.add("treeselect-list__item--closed"):e.classList.remove("treeselect-list__item--closed")}},Ht=(t,e)=>{t.hidden?e.classList.add("treeselect-list__item--hidden"):e.classList.remove("treeselect-list__item--hidden")},Pt=(t,e,s)=>{const n=e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");t.checked?i(s.check,n):t.isPartialChecked?i(s.partialCheck,n):n.innerHTML=""},Bt=(t,e,s)=>{if(0===t.level){const i=s.some((e=>e.isGroup&&e.level===t.level)),n=!t.isGroup&&i?"20px":"5px";e.style.paddingLeft=t.isGroup?"0":n}else e.style.paddingLeft=t.isGroup?20*t.level+"px":20*t.level+20+"px";e.setAttribute("level",t.level.toString()),e.setAttribute("group",t.isGroup.toString())},Mt=(t,e)=>{const s=t.some((t=>!t.hidden)),i=e.querySelector(".treeselect-list__empty");s?i.classList.add("treeselect-list__empty--hidden"):i.classList.remove("treeselect-list__empty--hidden")},Wt=t=>t.parentNode.parentNode,Nt=(t,e)=>e.find((e=>e.id.toString()===t));class jt{updateValue(t){Ct(t,this.flattedOptions,this.srcElement,this.iconElements),_t(this,K,"m",yt).call(this)}updateSearchValue(t){if(t===this.searchText)return;const e=""===this.searchText&&""!==t;this.searchText=t,e&&(this.flattedOptionsBeforeSearch=JSON.parse(JSON.stringify(this.flattedOptions))),""===this.searchText&&(this.flattedOptions=this.flattedOptionsBeforeSearch.map((t=>{const e=this.flattedOptions.find((e=>e.id===t.id));return e.isClosed=t.isClosed,e.hidden=t.hidden,e})),this.flattedOptionsBeforeSearch=[]),this.searchText&&F(this.flattedOptions,t),Tt(this.flattedOptions,this.srcElement,this.iconElements),this.focusFirstListElement()}callKeyAction(t){xt(this,Q,!1,"f");const e=this.srcElement.querySelector(".treeselect-list__item--focused");"Enter"===t&&e&&e.dispatchEvent(new Event("mousedown")),"ArrowLeft"!==t&&"ArrowRight"!==t||_t(this,K,"m",Z).call(this,e,t),"ArrowDown"!==t&&"ArrowUp"!==t||_t(this,K,"m",tt).call(this,e,t)}focusFirstListElement(){const t="treeselect-list__item--focused",e=this.srcElement.querySelector(`.${t}`),s=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Wt(t)).display));if(!s.length)return;e&&e.classList.remove(t);Wt(s[0]).classList.add(t)}constructor({options:t,value:e,openLevel:s,listSlotHtmlComponent:i,emptyText:n,iconElements:l}){K.add(this),X.set(this,null),Q.set(this,!0),this.options=t,this.value=e,this.openLevel=null!=s?s:0,this.listSlotHtmlComponent=null!=i?i:null,this.emptyText=null!=n?n:"No results found...",this.iconElements=l,this.searchText="",this.flattedOptions=I(this.options,this.openLevel),this.flattedOptionsBeforeSearch=this.flattedOptions,this.selectedNodes={nodes:[],groupedNodes:[]},this.srcElement=_t(this,K,"m",et).call(this),this.updateValue(this.value),(t=>{const{duplications:e}=t.reduce(((t,e)=>(t.allItems.some((t=>t.toString()===e.id.toString()))&&t.duplications.push(e.id),t.allItems.push(e.id),t)),{duplications:[],allItems:[]});e.length&&console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`)})(this.flattedOptions)}}X=new WeakMap,Q=new WeakMap,K=new WeakSet,Z=function(t,e){if(!t)return;const s=t.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"),i=Nt(s,this.flattedOptions),n=t.querySelector(".treeselect-list__item-icon");"ArrowLeft"!==e||i.isClosed||n.dispatchEvent(new Event("mousedown")),"ArrowRight"===e&&i.isClosed&&n.dispatchEvent(new Event("mousedown"))},tt=function(t,e){var s;const i=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Wt(t)).display));if(i.length)if(t){const t=i.findIndex((t=>Wt(t).classList.contains("treeselect-list__item--focused")));Wt(i[t]).classList.remove("treeselect-list__item--focused");const n="ArrowDown"===e?t+1:t-1,l="ArrowDown"===e?0:i.length-1,o=null!==(s=i[n])&&void 0!==s?s:i[l],c=!i[n],r=Wt(o);r.classList.add("treeselect-list__item--focused");const a=this.srcElement.getBoundingClientRect(),h=r.getBoundingClientRect();if(c&&"ArrowDown"===e)return void this.srcElement.scroll(0,0);if(c&&"ArrowUp"===e)return void this.srcElement.scroll(0,this.srcElement.scrollHeight);if(a.y+a.height<h.y+h.height)return void this.srcElement.scroll(0,this.srcElement.scrollTop+h.height);if(a.y>h.y)return void this.srcElement.scroll(0,this.srcElement.scrollTop-h.height)}else{Wt(i[0]).classList.add("treeselect-list__item--focused")}},et=function(){const t=_t(this,K,"m",st).call(this),e=_t(this,K,"m",lt).call(this,this.options);t.append(...e);const s=_t(this,K,"m",ot).call(this);s&&t.append(s);const i=_t(this,K,"m",ct).call(this);return t.append(i),t},st=function(){const t=document.createElement("div");return t.classList.add("treeselect-list"),t.addEventListener("mouseout",(t=>_t(this,K,"m",it).call(this,t))),t.addEventListener("mousemove",(()=>_t(this,K,"m",nt).call(this))),t},it=function(t){t.stopPropagation(),_t(this,X,"f")&&_t(this,Q,"f")&&_t(this,X,"f").classList.add("treeselect-list__item--focused")},nt=function(){xt(this,Q,!0,"f")},lt=function t(e){return e.reduce(((e,s)=>{var i;if(null===(i=s.children)||void 0===i?void 0:i.length){const i=_t(this,K,"m",rt).call(this,s),n=_t(this,K,"m",t).call(this,s.children);return i.append(...n),e.push(i),e}const n=_t(this,K,"m",at).call(this,s,!1);return e.push(n),e}),[])},ot=function(){if(!this.listSlotHtmlComponent)return null;const t=document.createElement("div");return t.classList.add("treeselect-list__slot"),t.appendChild(this.listSlotHtmlComponent),t},ct=function(){const t=document.createElement("div");t.classList.add("treeselect-list__empty"),t.setAttribute("title",this.emptyText);const e=document.createElement("span");e.classList.add("treeselect-list__empty-icon"),i(this.iconElements.attention,e);const s=document.createElement("span");return s.classList.add("treeselect-list__empty-text"),s.innerHTML=this.emptyText,t.append(e,s),t},rt=function(t){const e=document.createElement("div");e.setAttribute("group-container-id",t.value.toString()),e.classList.add("treeselect-list__group-container");const s=_t(this,K,"m",at).call(this,t,!0);return e.appendChild(s),e},at=function(t,e){const s=_t(this,K,"m",ht).call(this,t);if(e){const t=_t(this,K,"m",pt).call(this);s.appendChild(t)}const i=_t(this,K,"m",vt).call(this,t),n=_t(this,K,"m",wt).call(this,t);return s.append(i,n),s},ht=function(t){const e=document.createElement("div");return e.setAttribute("tabindex","-1"),e.setAttribute("title",t.name),e.classList.add("treeselect-list__item"),e.addEventListener("mouseover",(()=>_t(this,K,"m",dt).call(this,e)),!0),e.addEventListener("mouseout",(()=>_t(this,K,"m",ut).call(this,e)),!0),e.addEventListener("mousedown",(e=>_t(this,K,"m",mt).call(this,e,t))),e},dt=function(t){_t(this,Q,"f")&&_t(this,K,"m",Lt).call(this,!0,t)},ut=function(t){_t(this,Q,"f")&&(_t(this,K,"m",Lt).call(this,!1,t),xt(this,X,t,"f"))},mt=function(t,e){t.stopPropagation();const s=t.target.querySelector(".treeselect-list__item-checkbox");s.checked=!s.checked,_t(this,K,"m",Et).call(this,s,e)},pt=function(){const t=document.createElement("span");return t.setAttribute("tabindex","-1"),t.classList.add("treeselect-list__item-icon"),i(this.iconElements.arrowDown,t),t.addEventListener("mousedown",(t=>_t(this,K,"m",ft).call(this,t))),t},ft=function(t){t.stopPropagation(),_t(this,K,"m",gt).call(this,t)},vt=function(t){const e=document.createElement("div");e.classList.add("treeselect-list__item-checkbox-container");const s=document.createElement("span");s.classList.add("treeselect-list__item-checkbox-icon"),s.innerHTML="";const i=document.createElement("input");return i.setAttribute("tabindex","-1"),i.setAttribute("type","checkbox"),i.setAttribute("input-id",t.value.toString()),i.classList.add("treeselect-list__item-checkbox"),e.append(s,i),e},wt=function(t){const e=document.createElement("label");return e.innerHTML=t.name,e.classList.add("treeselect-list__item-label"),e},Et=function(t,e){const s=this.flattedOptions.find((t=>t.id===e.value));s&&(s.checked=t.checked,s.isPartialChecked=!1,$(s,this.flattedOptions),Tt(this.flattedOptions,this.srcElement,this.iconElements),_t(this,K,"m",kt).call(this))},gt=function(t){var e,s,i;const n=null===(s=null===(e=t.target)||void 0===e?void 0:e.parentNode)||void 0===s?void 0:s.querySelector("[input-id]"),l=null!==(i=null==n?void 0:n.getAttribute("input-id"))&&void 0!==i?i:null,o=Nt(l,this.flattedOptions);o&&(o.isClosed=!o.isClosed,Y(this.flattedOptions,o),Tt(this.flattedOptions,this.srcElement,this.iconElements),_t(this,K,"m",bt).call(this))},Lt=function(t,e){const s="treeselect-list__item--focused";if(t){const t=Array.from(this.srcElement.querySelectorAll(`.${s}`));t.length&&t.forEach((t=>t.classList.remove(s))),e.classList.add(s)}else e.classList.remove(s)},yt=function(){var t;this.selectedNodes={nodes:(t=this.flattedOptions,t.filter((t=>t.checked&&!t.isGroup))),groupedNodes:U(this.flattedOptions)}},bt=function(){this.srcElement.dispatchEvent(new CustomEvent("arrow-click"))},kt=function(){_t(this,K,"m",yt).call(this),this.srcElement.dispatchEvent(new CustomEvent("input",{detail:this.selectedNodes}))};var Gt,qt,It,Dt,Vt,$t,Rt,zt,Ut,Yt,Ft,Jt,Kt,Xt,Qt,Zt,te,ee,se,ie,ne,le,oe=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},ce=function(t,e,s,i,n){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?n.call(t,s):n?n.value=s:e.set(t,s),s};const re=t=>t.map((t=>t.id));class ae{mount(){var t;this.destroy();const{container:e,list:s,input:i}=oe(this,Gt,"m",Ut).call(this);this.srcElement=e,ce(this,qt,s,"f"),ce(this,It,i,"f"),ce(this,Vt,this.scrollWindowHandler.bind(this),"f"),ce(this,$t,this.scrollWindowHandler.bind(this),"f"),ce(this,Rt,this.focusWindowHandler.bind(this),"f"),ce(this,zt,this.blurWindowHandler.bind(this),"f"),this.alwaysOpen&&(null===(t=oe(this,It,"f"))||void 0===t||t.openClose()),this.disabled&&this.srcElement.classList.add("treeselect--disabled")}updateValue(t){var e;const s=oe(this,qt,"f");if(s){s.updateValue(t);const{groupedNodes:i,nodes:n}=s.selectedNodes,l=this.grouped?i:n;null===(e=oe(this,It,"f"))||void 0===e||e.updateValue(l)}}destroy(){this.srcElement&&(oe(this,Gt,"m",te).call(this),this.srcElement.innerHTML="",this.srcElement=null,oe(this,Gt,"m",ne).call(this,!0))}focus(){oe(this,It,"f")&&oe(this,It,"f").focus()}toggleOpenClose(){oe(this,It,"f")&&(oe(this,It,"f").openClose(),oe(this,It,"f").focus())}scrollWindowHandler(){this.updateListPosition()}focusWindowHandler(t){var e,s,i;(null===(e=this.srcElement)||void 0===e?void 0:e.contains(t.target))||(null===(s=oe(this,qt,"f"))||void 0===s?void 0:s.srcElement.contains(t.target))||(null===(i=oe(this,It,"f"))||void 0===i||i.blur(),oe(this,Gt,"m",ne).call(this,!1),oe(this,Gt,"m",se).call(this,!1))}blurWindowHandler(){var t;null===(t=oe(this,It,"f"))||void 0===t||t.blur(),oe(this,Gt,"m",ne).call(this,!1),oe(this,Gt,"m",se).call(this,!1)}updateListPosition(){var t;const e=this.srcElement,s=null===(t=oe(this,qt,"f"))||void 0===t?void 0:t.srcElement;if(!e||!s)return;s.style.transform="";const{y:i,height:n}=s.getBoundingClientRect(),{x:l,y:o,height:c,width:r}=e.getBoundingClientRect(),a=window.innerHeight-o-c,h=o>a&&o>=n&&a<n;this.appendToBody&&(s.style.transform=h?`translateY(${o-i-n}px)`:`translateY(${o+c-i}px)`,s.style.width=`${r}px`,s.style.left=`${l+window.scrollX}px`);const d=h?"top":"bottom";s.getAttribute("direction")!==d&&(s.setAttribute("direction",d),oe(this,Gt,"m",ee).call(this,h,this.appendToBody))}constructor({parentHtmlContainer:t,value:e,options:s,openLevel:i,appendToBody:l,alwaysOpen:o,showTags:c,tagsCountText:r,clearable:a,searchable:h,placeholder:d,grouped:u,listSlotHtmlComponent:m,disabled:p,emptyText:f,staticList:v,id:w,iconElements:E,inputCallback:g}){Gt.add(this),qt.set(this,null),It.set(this,null),Dt.set(this,null),Vt.set(this,null),$t.set(this,null),Rt.set(this,null),zt.set(this,null),(({parentHtmlContainer:t,staticList:e,appendToBody:s})=>{t||console.error("Validation: parentHtmlContainer prop is required!"),e&&s&&console.error("Validation: You should set staticList to false if you use appendToBody!")})({parentHtmlContainer:t,staticList:v,appendToBody:l}),this.parentHtmlContainer=t,this.value=null!=e?e:[],this.options=null!=s?s:[],this.openLevel=null!=i?i:0,this.appendToBody=null==l||l,this.alwaysOpen=!(!o||p),this.showTags=null==c||c,this.tagsCountText=null!=r?r:"elements selected",this.clearable=null==a||a,this.searchable=null==h||h,this.placeholder=null!=d?d:"Search...",this.grouped=null==u||u,this.listSlotHtmlComponent=null!=m?m:null,this.disabled=null!=p&&p,this.emptyText=null!=f?f:"No results found...",this.staticList=!(!v||this.appendToBody),this.id=null!=w?w:"",this.iconElements=n(E),this.inputCallback=g,this.isListOpened=!1,this.srcElement=null,this.mount()}}qt=new WeakMap,It=new WeakMap,Dt=new WeakMap,Vt=new WeakMap,$t=new WeakMap,Rt=new WeakMap,zt=new WeakMap,Gt=new WeakSet,Ut=function(){const t=this.parentHtmlContainer;t.classList.add("treeselect");const s=new(0,q.TreeselectList)({options:this.options,value:this.value,openLevel:this.openLevel,listSlotHtmlComponent:this.listSlotHtmlComponent,emptyText:this.emptyText,iconElements:this.iconElements}),{groupedNodes:i,nodes:n}=s.selectedNodes,l=new(0,e.TreeselectInput)({value:this.grouped?i:n,showTags:this.showTags,tagsCountText:this.tagsCountText,clearable:this.clearable,isAlwaysOpened:this.alwaysOpen,searchable:this.searchable,placeholder:this.placeholder,disabled:this.disabled,id:this.id,iconElements:this.iconElements});return this.appendToBody&&ce(this,Dt,new ResizeObserver((()=>this.updateListPosition())),"f"),l.srcElement.addEventListener("input",(t=>oe(this,Gt,"m",Yt).call(this,t,s))),l.srcElement.addEventListener("open",(()=>oe(this,Gt,"m",Zt).call(this))),l.srcElement.addEventListener("keydown",(t=>oe(this,Gt,"m",Ft).call(this,t,s))),l.srcElement.addEventListener("search",(t=>oe(this,Gt,"m",Jt).call(this,t,s))),l.srcElement.addEventListener("focus",(()=>oe(this,Gt,"m",Kt).call(this)),!0),this.alwaysOpen||l.srcElement.addEventListener("close",(()=>oe(this,Gt,"m",te).call(this))),s.srcElement.addEventListener("mouseup",(()=>l.focus()),!0),s.srcElement.addEventListener("input",(t=>oe(this,Gt,"m",Xt).call(this,t,l))),s.srcElement.addEventListener("arrow-click",(()=>oe(this,Gt,"m",Qt).call(this,l))),t.append(l.srcElement),{container:t,list:s,input:l}},Yt=function(t,e){const s=re(t.detail);e.updateValue(s);const{nodes:i}=e.selectedNodes;this.value=re(i),oe(this,Gt,"m",le).call(this)},Ft=function(t,e){this.isListOpened&&e.callKeyAction(t.key)},Jt=function(t,e){e.updateSearchValue(t.detail),this.updateListPosition()},Kt=function(){oe(this,Gt,"m",se).call(this,!0),oe(this,Rt,"f")&&oe(this,Rt,"f")&&oe(this,zt,"f")&&(document.addEventListener("mousedown",oe(this,Rt,"f"),!0),document.addEventListener("focus",oe(this,Rt,"f"),!0),window.addEventListener("blur",oe(this,zt,"f")))},Xt=function(t,e){const{groupedNodes:s,nodes:i}=t.detail,n=this.grouped?s:i;e.updateValue(n),this.value=re(i),e.focus(),oe(this,Gt,"m",le).call(this)},Qt=function(t){t.focus(),this.updateListPosition()},Zt=function(){var t;this.isListOpened=!0,oe(this,Vt,"f")&&oe(this,$t,"f")&&(window.addEventListener("scroll",oe(this,Vt,"f"),!0),window.addEventListener("resize",oe(this,$t,"f"))),oe(this,qt,"f")&&this.srcElement&&(this.appendToBody?(document.body.appendChild(oe(this,qt,"f").srcElement),null===(t=oe(this,Dt,"f"))||void 0===t||t.observe(this.srcElement)):this.srcElement.appendChild(oe(this,qt,"f").srcElement),this.updateListPosition(),oe(this,Gt,"m",ie).call(this,!0),oe(this,qt,"f").focusFirstListElement())},te=function(){var t;if(this.isListOpened=!1,oe(this,Vt,"f")&&oe(this,$t,"f")&&(window.removeEventListener("scroll",oe(this,Vt,"f"),!0),window.removeEventListener("resize",oe(this,$t,"f"))),!oe(this,qt,"f")||!this.srcElement)return;(this.appendToBody?document.body.contains(oe(this,qt,"f").srcElement):this.srcElement.contains(oe(this,qt,"f").srcElement))&&(this.appendToBody?(document.body.removeChild(oe(this,qt,"f").srcElement),null===(t=oe(this,Dt,"f"))||void 0===t||t.disconnect()):this.srcElement.removeChild(oe(this,qt,"f").srcElement),oe(this,Gt,"m",ie).call(this,!1))},ee=function(t,e){if(!oe(this,qt,"f")||!oe(this,It,"f"))return;const s=e?"treeselect-list--top-to-body":"treeselect-list--top",i=e?"treeselect-list--bottom-to-body":"treeselect-list--bottom";t?(oe(this,qt,"f").srcElement.classList.add(s),oe(this,qt,"f").srcElement.classList.remove(i),oe(this,It,"f").srcElement.classList.add("treeselect-input--top"),oe(this,It,"f").srcElement.classList.remove("treeselect-input--bottom")):(oe(this,qt,"f").srcElement.classList.remove(s),oe(this,qt,"f").srcElement.classList.add(i),oe(this,It,"f").srcElement.classList.remove("treeselect-input--top"),oe(this,It,"f").srcElement.classList.add("treeselect-input--bottom"))},se=function(t){oe(this,It,"f")&&oe(this,qt,"f")&&(t?(oe(this,It,"f").srcElement.classList.add("treeselect-input--focused"),oe(this,qt,"f").srcElement.classList.add("treeselect-list--focused")):(oe(this,It,"f").srcElement.classList.remove("treeselect-input--focused"),oe(this,qt,"f").srcElement.classList.remove("treeselect-list--focused")))},ie=function(t){var e,s,i,n;t?null===(e=oe(this,It,"f"))||void 0===e||e.srcElement.classList.add("treeselect-input--opened"):null===(s=oe(this,It,"f"))||void 0===s||s.srcElement.classList.remove("treeselect-input--opened"),this.staticList?null===(i=oe(this,qt,"f"))||void 0===i||i.srcElement.classList.add("treeselect-list--static"):null===(n=oe(this,qt,"f"))||void 0===n||n.srcElement.classList.remove("treeselect-list--static")},ne=function(t){oe(this,Vt,"f")&&oe(this,$t,"f")&&oe(this,Rt,"f")&&oe(this,zt,"f")&&(this.alwaysOpen&&!t||(window.removeEventListener("scroll",oe(this,Vt,"f"),!0),window.removeEventListener("resize",oe(this,$t,"f"))),document.removeEventListener("click",oe(this,Rt,"f"),!0),document.removeEventListener("focus",oe(this,Rt,"f"),!0),window.removeEventListener("blur",oe(this,zt,"f")))},le=function(){var t;null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("input",{detail:this.value})),this.inputCallback&&this.inputCallback(this.value)};