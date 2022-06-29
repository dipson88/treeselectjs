import TreeselectInput from"./input.js";import TreeselectList from"./list.js";const validateProps=({parentHtmlContainer:e,staticList:t,appendToBody:s})=>{e||console.error("Validation: parentHtmlContainer prop is required!"),t&&s&&console.error("Validation: You should set staticList to false if you use appendToBody!")};class Treeselect{#htmlContainer=null;#treeselectList=null;#treeselectInput=null;#containerResizer=null;#scrollEvent=null;#resizeEvent=null;#focusEvent=null;#blurEvent=null;constructor({parentHtmlContainer:e,value:t,options:s,openLevel:i,appendToBody:n,alwaysOpen:l,showTags:r,clearable:o,searchable:a,placeholder:c,grouped:d,listSlotHtmlComponent:h,disabled:p,emptyText:u,staticList:m}){validateProps({parentHtmlContainer:e,staticList:m,appendToBody:n}),this.parentHtmlContainer=e,this.value=t??[],this.options=s??[],this.openLevel=i??0,this.appendToBody=n??!0,this.alwaysOpen=l&&!p,this.showTags=r??!0,this.clearable=o??!0,this.searchable=a??!0,this.placeholder=c??"Search...",this.grouped=d??!0,this.listSlotHtmlComponent=h??null,this.disabled=p??!1,this.emptyText=u??"No results found...",this.staticList=m&&!this.appendToBody,this.srcElement=null,this.mount()}mount(){this.destroy(),this.srcElement=this.#createTreeselect(),this.#scrollEvent=this.scrollWindowHandler.bind(this),this.#resizeEvent=this.scrollWindowHandler.bind(this),this.#focusEvent=this.focusWindowHandler.bind(this),this.#blurEvent=this.blurWindowHandler.bind(this),this.alwaysOpen&&this.#treeselectInput.openClose(),this.disabled&&this.srcElement.classList.add("treeselect--disabled")}updateValue(e){const t=this.#treeselectList;t.updateValue(e);var{groupedIds:e,ids:s}=t.selectedNodes,e=this.grouped?e:s;this.#treeselectInput.updateValue(e)}destroy(){this.srcElement&&(this.#closeList(),this.srcElement.innerHTML="",this.srcElement=null,this.#removeOutsideListeners(!0))}#createTreeselect(){const e=this.parentHtmlContainer,t=(e.classList.add("treeselect"),new TreeselectList({options:this.options,value:this.value,openLevel:this.openLevel,listSlotHtmlComponent:this.listSlotHtmlComponent,emptyText:this.emptyText}));var{groupedIds:s,ids:i}=t.selectedNodes;const n=new TreeselectInput({value:this.grouped?s:i,showTags:this.showTags,clearable:this.clearable,isAlwaysOpened:this.alwaysOpen,searchable:this.searchable,placeholder:this.placeholder,disabled:this.disabled});return this.appendToBody&&(this.#containerResizer=new ResizeObserver(()=>{this.updateListPosition()})),n.srcElement.addEventListener("input",e=>{e=e.detail.map(({id:e})=>e);this.value=e,t.updateValue(e),this.#emitInput()}),n.srcElement.addEventListener("open",()=>this.#openList()),n.srcElement.addEventListener("keydown",e=>t.callKeyAction(e.key)),n.srcElement.addEventListener("search",e=>{t.updateSearchValue(e.detail),this.updateListPosition()}),n.srcElement.addEventListener("focus",()=>{this.#updateFocusClasses(!0),document.addEventListener("mousedown",this.#focusEvent,!0),document.addEventListener("focus",this.#focusEvent,!0),window.addEventListener("blur",this.#blurEvent)},!0),this.alwaysOpen||n.srcElement.addEventListener("close",()=>{this.#closeList()}),t.srcElement.addEventListener("mouseup",()=>{n.focus()},!0),t.srcElement.addEventListener("input",e=>{const{groupedIds:t,ids:s}=e.detail;e=this.grouped?t:s;n.updateValue(e),this.value=s.map(({id:e})=>e),n.focus(),this.#emitInput()}),t.srcElement.addEventListener("arrow-click",()=>{n.focus(),this.updateListPosition()}),this.#htmlContainer=e,this.#treeselectList=t,this.#treeselectInput=n,e.append(n.srcElement),e}#openList(){window.addEventListener("scroll",this.#scrollEvent,!0),window.addEventListener("resize",this.#resizeEvent),this.appendToBody?(document.body.appendChild(this.#treeselectList.srcElement),this.#containerResizer.observe(this.#htmlContainer)):this.#htmlContainer.appendChild(this.#treeselectList.srcElement),this.updateListPosition(),this.#updateOpenCloseClasses(!0),this.#treeselectList.focusFirstListElement()}#closeList(){window.removeEventListener("scroll",this.#scrollEvent,!0),window.removeEventListener("resize",this.#resizeEvent),(this.appendToBody?document.body:this.#htmlContainer).contains(this.#treeselectList.srcElement)&&(this.appendToBody?(document.body.removeChild(this.#treeselectList.srcElement),this.#containerResizer?.disconnect()):this.#htmlContainer.removeChild(this.#treeselectList.srcElement),this.#updateOpenCloseClasses(!1))}#updateDirectionClasses(e,t){var s=t?"treeselect-list--top-to-body":"treeselect-list--top",t=t?"treeselect-list--bottom-to-body":"treeselect-list--bottom";e?(this.#treeselectList.srcElement.classList.add(s),this.#treeselectList.srcElement.classList.remove(t),this.#treeselectInput.srcElement.classList.add("treeselect-input--top"),this.#treeselectInput.srcElement.classList.remove("treeselect-input--bottom")):(this.#treeselectList.srcElement.classList.remove(s),this.#treeselectList.srcElement.classList.add(t),this.#treeselectInput.srcElement.classList.remove("treeselect-input--top"),this.#treeselectInput.srcElement.classList.add("treeselect-input--bottom"))}#updateFocusClasses(e){e?(this.#treeselectInput.srcElement.classList.add("treeselect-input--focused"),this.#treeselectList.srcElement.classList.add("treeselect-list--focused")):(this.#treeselectInput.srcElement.classList.remove("treeselect-input--focused"),this.#treeselectList.srcElement.classList.remove("treeselect-list--focused"))}#updateOpenCloseClasses(e){e?this.#treeselectInput.srcElement.classList.add("treeselect-input--opened"):this.#treeselectInput.srcElement.classList.remove("treeselect-input--opened"),this.staticList?this.#treeselectList.srcElement.classList.add("treeselect-list--static"):this.#treeselectList.srcElement.classList.remove("treeselect-list--static")}#removeOutsideListeners(e){this.alwaysOpen&&!e||(window.removeEventListener("scroll",this.#scrollEvent,!0),window.removeEventListener("resize",this.#resizeEvent)),document.removeEventListener("click",this.#focusEvent,!0),document.removeEventListener("focus",this.#focusEvent,!0),window.removeEventListener("blur",this.#blurEvent)}scrollWindowHandler(){this.updateListPosition()}focusWindowHandler(e){this.#htmlContainer.contains(e.target)||this.#treeselectList.srcElement.contains(e.target)||(this.#treeselectInput.blur(),this.#removeOutsideListeners(),this.#updateFocusClasses(!1))}blurWindowHandler(){this.#treeselectInput.blur(),this.#removeOutsideListeners(),this.#updateFocusClasses(!1)}updateListPosition(){const e=this.#treeselectList.srcElement,t=(e.style.transform=null,this.#htmlContainer);var{y:s,height:i}=e.getBoundingClientRect(),{x:n,y:l,height:r,width:o}=t.getBoundingClientRect(),a=window.innerHeight-l-r,a=a<l&&i<=l&&a<i,i=(this.appendToBody&&(e.style.transform=a?`translateY(${l-s-i}px)`:`translateY(${l+r-s}px)`,e.style.width=o+"px",e.style.left=n+window.scrollX+"px"),a?"top":"bottom");e.getAttribute("direction")!==i&&(e.setAttribute("direction",i),this.#updateDirectionClasses(a,this.appendToBody))}#emitInput(){this.srcElement.dispatchEvent(new CustomEvent("input",{detail:this.value}))}}export default Treeselect;