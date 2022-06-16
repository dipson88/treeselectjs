import svg from"./svgIcons.js";const getFlatOptons=(e,i,c=0,r=0)=>e.reduce((e,t)=>{var s=!!t.children?.length;return e.push({id:t.value,name:t.name,childOf:c,isGroup:s,checked:!1,level:r,isClosed:i<=r&&s,hidden:i<r}),s&&(s=getFlatOptons(t.children,i,t.value,r+1),e.push(...s)),e},[]),checkAllChildrenInputs=({id:t,checked:s},i)=>{i.forEach(e=>{e.childOf===t&&(e.checked=s,e.isGroup&&checkAllChildrenInputs(e,i))})},checkAllParentInputs=(t,e)=>{const s=e.find(e=>e.id===t),i=e.filter(e=>e.childOf===s.id);var c=i.every(e=>e.checked),r=i.some(e=>e.checked)&&!c,l=i.some(e=>e.isPartialChecked),d=!c&&!r&&!l;c&&(s.checked=!0,s.isPartialChecked=!1),(r||l)&&(s.checked=!1,s.isPartialChecked=!0),d&&(s.checked=!1,s.isPartialChecked=!1),s.childOf&&checkAllParentInputs(s.childOf,e)},checkInput=({id:e,isGroup:t,childOf:s,checked:i},c)=>{t&&checkAllChildrenInputs({id:e,checked:i},c),s&&checkAllParentInputs(s,c)},updateValue=(t,s,e)=>{s.forEach(e=>e.checked=!1);const i=s.filter(e=>t.includes(e.id));i.forEach(e=>{e.checked=!0,checkInput(e,s)}),updateDOM(s,e)},hideShowChildren=(t,{id:s,isClosed:i})=>{const e=t.filter(e=>e.childOf===s);e.forEach(e=>{e.hidden=i,e.isGroup&&!e.isClosed&&hideShowChildren(t,{id:e.id,isClosed:i})})},updateDOM=(e,c)=>{e.forEach(e=>{const t=c.querySelector(`[input-id="${e.id}"]`),s=t.parentNode;if(t.checked=e.checked,e.checked?s.classList.add("treeselect-list__item--checked"):s.classList.remove("treeselect-list__item--checked"),e.isPartialChecked?s.classList.add("treeselect-list__item--partial-checked"):s.classList.remove("treeselect-list__item--partial-checked"),e.isGroup){const i=t.parentNode.querySelector(".treeselect-list__item-icon");e.isClosed?(s.classList.add("treeselect-list__item--closed"),i.innerHTML=svg.arrowRight):(s.classList.remove("treeselect-list__item--closed"),i.innerHTML=svg.arrowDown)}e.hidden?s.classList.add("treeselect-list__item--hidden"):s.classList.remove("treeselect-list__item--hidden"),s.style.paddingLeft=30*e.level+"px"});e=e.some(e=>!e.hidden);const t=c.querySelector(".treeselect-list__empty");e?t.classList.add("treeselect-list__empty--hidden"):t.classList.remove("treeselect-list__empty--hidden")},getAllFlattedChildren=(s,i)=>i.reduce((e,t)=>(t.childOf===s&&(e.push(t),t.isGroup&&e.push(...getAllFlattedChildren(t.id,i))),e),[]),getAllFlattendParents=(s,i)=>i.reduce((e,t)=>(t.id===s&&(e.push(t),t.childOf&&e.push(...getAllFlattendParents(t.childOf,i))),e),[]),getGroupedValues=e=>{const{onlyGroupsIds:t,allItems:s}=e.reduce((e,t)=>(t.checked&&(t.isGroup&&e.onlyGroupsIds.push(t.id),e.allItems.push(t)),e),{onlyGroupsIds:[],allItems:[]});return s.filter(e=>!t.includes(e.childOf))},getCheckedValues=e=>e.filter(e=>e.checked&&!e.isGroup);class TreeselectList{constructor({options:e,value:t,openLevel:s}){this.options=e,this.value=t,this.searchText="",this.openLevel=s??0,this.flattedOptions=getFlatOptons(this.options,this.openLevel),this.flattedOptionsBeforeSearch=this.flattedOptions,this.srcElement=this.#createList(),this.updateValue(this.value)}updateValue(e){updateValue(e,this.flattedOptions,this.srcElement)}updateSearchValue(i){var e=""===this.searchText&&""!==i;if(this.searchText=i,e&&(this.flattedOptionsBeforeSearch=JSON.parse(JSON.stringify(this.flattedOptions))),""===this.searchText)return this.flattedOptions=JSON.parse(JSON.stringify(this.flattedOptionsBeforeSearch)),this.flattedOptionsBeforeSearch=[],void updateDOM(this.flattedOptions,this.srcElement);const s=this.flattedOptions.reduce((e,t)=>{var s;return t.name.includes(i)&&(e.push(t),t.isGroup&&(s=getAllFlattedChildren(t.id,this.flattedOptions),e.push(...s)),t.childOf&&(s=getAllFlattendParents(t.childOf,this.flattedOptions),e.push(...s))),e},[]);this.flattedOptions.forEach(t=>{s.some(e=>e.id===t.id)?(t.isGroup&&(t.isClosed=!1,hideShowChildren(this.flattedOptions,t)),t.hidden=!1):t.hidden=!0}),updateDOM(this.flattedOptions,this.srcElement)}callKeyAction(e){const t=this.srcElement.querySelector(".treeselect-list__item--focused");if("Enter"===e&&t){const c=t.querySelector(".treeselect-list__item-checkbox");c.checked=!c.checked,c.dispatchEvent(new Event("input"))}if("ArrowLeft"===e||"ArrowRight"===e){if(!t)return;const r=t.querySelector(".treeselect-list__item-checkbox"),l=r.getAttribute("input-id");var s=this.flattedOptions.find(e=>e.id===l);const d=t.querySelector(".treeselect-list__item-icon");"ArrowLeft"!==e||s.isClosed||d.dispatchEvent(new Event("click")),"ArrowRight"===e&&s.isClosed&&d.dispatchEvent(new Event("click"))}if("ArrowDown"===e||"ArrowUp"===e){const n=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(e=>"none"!==window.getComputedStyle(e).display);if(n.length)if(t){s=n.findIndex(e=>e.parentNode.classList.contains("treeselect-list__item--focused"));const o=n[s].parentNode;o.classList.remove("treeselect-list__item--focused");var i="ArrowDown"===e?0:n.length-1;const a=(n["ArrowDown"===e?s+1:s-1]??n[i]).parentNode;a.classList.add("treeselect-list__item--focused")}else{const h=n[0].parentNode;h.classList.add("treeselect-list__item--focused")}}}#createList(){const e=document.createElement("div");e.classList.add("treeselect-list");var t=this.#getListHTML(this.options),s=this.#createEmptyList();return e.append(...t,s),e}#getListHTML(e){return e.reduce((e,t)=>{if(t.children?.length){const i=this.#createGroupContainer(t);var s=this.#getListHTML(t.children);return i.append(...s),e.push(i),e}s=this.#createGroupItem(t,!1);return e.push(s),e},[])}#createGroupContainer(e){const t=document.createElement("div");t.setAttribute("group-container-id",e.value),t.classList.add("treeselect-list__group-container");e=this.#createGroupItem(e,!0);return t.appendChild(e),t}#createGroupItem(e,t){const s=document.createElement("div");s.setAttribute("tabindex","-1"),s.setAttribute("title",e.name),s.classList.add("treeselect-list__item"),t&&(t=this.#createArrow(),s.appendChild(t)),s.addEventListener("mouseover",()=>{this.#groupMouseAction(!0,s)},!0),s.addEventListener("mouseout",()=>{this.#groupMouseAction(!1,s)},!0);t=this.#createCheckbox(e),e=this.#createCheckboxLabel(e);return s.append(t,e),s}#createArrow(){const e=document.createElement("span");return e.setAttribute("tabindex","-1"),e.classList.add("treeselect-list__item-icon"),e.innerHTML=svg.arrowDown,e.addEventListener("click",e=>{e.stopPropagation(),this.#arrowClickEvent(e)}),e}#createCheckbox(t){const e=document.createElement("input");return e.setAttribute("tabindex","-1"),e.setAttribute("type","checkbox"),e.setAttribute("input-id",t.value),e.classList.add("treeselect-list__item-checkbox"),e.addEventListener("input",e=>{e.stopPropagation(),this.#checkboxClickEvent(e,t)}),e}#createCheckboxLabel(e){const t=document.createElement("label");return t.innerHTML=e.name,t.classList.add("treeselect-list__item-label"),t}#createEmptyList(){const e=document.createElement("div"),t=(e.classList.add("treeselect-list__empty"),document.createElement("span")),s=(t.classList.add("treeselect-list__empty-icon"),t.innerHTML=svg.attention,document.createElement("span"));return s.classList.add("treeselect-list__empty-text"),s.innerHTML="No results found...",e.append(t,s),e}#checkboxClickEvent(e,t){const s=this.flattedOptions.find(e=>e.id===t.value);s.checked=e.target.checked,checkInput(s,this.flattedOptions),updateDOM(this.flattedOptions,this.srcElement),this.#emitInput()}#arrowClickEvent(e){const t=e.target.parentNode.querySelector("[input-id]"),s=t.getAttribute("input-id"),i=this.flattedOptions.find(e=>e.id===s);i.isClosed=!i.isClosed,hideShowChildren(this.flattedOptions,i),updateDOM(this.flattedOptions,this.srcElement),this.#emitArrrowClick()}#groupMouseAction(e,t){var s="treeselect-list__item--focused";if(e){const i=this.srcElement.querySelector("."+s);i&&i.classList.remove(s),t.classList.add(s)}else t.classList.remove(s)}#emitArrrowClick(){this.srcElement.dispatchEvent(new CustomEvent("arrow-click"))}#emitInput(){this.srcElement.dispatchEvent(new CustomEvent("input",{detail:{ids:getCheckedValues(this.flattedOptions),groupedIds:getGroupedValues(this.flattedOptions)}}))}}export default TreeselectList;