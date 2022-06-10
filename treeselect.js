import TreeselectInput from "./input.js"

class Treeselect {
  // Inner State props
  #checkedNodes = []
  #uncheckedNodes = []
  #groupIds = []
  #isFocused = false
  #transform = { top: null, bottom: null }
  #treeselectInitPosition = null
  #isMouseEventAvailable = false
  #containerResizer = null

  // Components
  #containerHTML = null
  #listHTML = null
  #emptyListHTML = null

  constructor ({
    DOMelement,
    options,
    value,
    openLevel,
    isGroupSelectable,
    emitOnInit,
    appendToBody,
    alwaysOpen
  }) {
    // User props
    this.DOMelement = DOMelement
    this.value = value
    this.options = options
    this.selectedNodes = []
    this.inputElement = null

    // Additional user settings props
    this.isGroupSelectable = isGroupSelectable ?? false
    this.openLevel = openLevel ?? 0
    this.emitOnInit = emitOnInit ?? false
    this.appendToBody = appendToBody ?? false
    this.alwaysOpen = alwaysOpen ?? false

    // Outside listeners
    this.blurEvent = this.blurWindowHandler.bind(this)
    this.focusEvent = this.focusWindowHandler.bind(this)
    this.scrollEvent = this.scrollWindowHandler.bind(this)

    this.render()
  }

  render () {
    const isValid = this.#validateProps()

    if (isValid) {
      this.#createTreeselect()
      this.#updateComponentOnInit()
    }
  }

  upadeValue (value) {
    // TODO
  }

  updateParams (params) {
    // TODO
  }

  // Create Treeselect component and attach to the DOM
  #createTreeselect () {
    this.DOMelement.innerHTML = ''
    const container = this.#createInput()
    const list = this.#createList()

    this.#containerHTML = container
    this.#listHTML = list
    
    this.DOMelement.append(container)
  }

  // Create input component
  #createInput () {
    const container = document.createElement('div')
    container.classList.add('treeselect-input-container')
    this.inputElement = new TreeselectInput({
      value: this.selectedNodes,
      opened: this.alwaysOpen
    })

    const srcElement = this.inputElement.srcElement

    srcElement.addEventListener('clear', (event) => {
      console.log('clear LIST', event)
    })
    srcElement.addEventListener('input', (event) => {
      this.#updateValueByInput(event)
    })
    srcElement.addEventListener('search', (event) => {
      console.log('search LIST', event)
      this.filterSearch(event.detail)
    })
    // srcElement.addEventListener('focus', (event) => {
    //   this.focusInputHandler(container)
    // }, true)
    srcElement.addEventListener('open', (event) => {
      if (!this.#isFocused) {
        this.focusInputHandler(container)
      }

      this.#listHTML.classList.remove('treeselect-list-hidden')
    }, true)
    srcElement.addEventListener('close', (event) => {
      this.#listHTML.classList.add('treeselect-list-hidden')
    }, true)

    srcElement.addEventListener('keydown', (event) => this.#inputKeyActionsHandler(event))

    container.appendChild(srcElement)

    return container
  }

  #updateValueByInput (event) {
    const value = event.detail.map(node => node.id)
    const valuesToRemove = this.value.filter(nodeId => !value.includes(nodeId))
    const allChilrenInputs = Array.from(this.#listHTML.querySelectorAll('input[type=checkbox]:checked.treeselect-checkbox'))
    const uncheckCeckboxes = allChilrenInputs.filter(checkbox => {
      const { nodeId } = this.#getNodeInfoByInput(checkbox)

      return valuesToRemove.includes(nodeId)
    })

    uncheckCeckboxes.forEach(checkbox => {
      checkbox.checked = false
      this.#updateCheckbox(checkbox)
    })
    this.#updateValue()
    this.#emitInput()

    this.filterSearch('')
  }

  updateInputByValue () {
    this.inputElement.updateValue(this.selectedNodes)
  }

  // Add liteners to the document and window 
  #addOutsideListeners () {
    window.addEventListener('scroll', this.scrollEvent, true)

    if (!this.alwaysOpen) {
      document.addEventListener('click', this.focusEvent, true)
      document.addEventListener('focus', this.focusEvent, true)
      window.addEventListener('blur', this.blurEvent)
    }
  }

  // Remove listeners form document and window.
  #removeOutsideListeners () {
    window.removeEventListener('scroll', this.scrollEvent, true)

    if (!this.alwaysOpen) {
      document.removeEventListener('click', this.focusEvent, true)
      document.removeEventListener('focus', this.focusEvent, true)
      window.removeEventListener('blur', this.blurEvent)
    }
  }

  // Remove list from DOM and reset styles
  blurWindowHandler () {
    if (this.#isFocused) {
      this.#isFocused = false
      this.#listHTML.classList.add('treeselect-list-hidden')
      this.#removeOutsideListeners()

      if (this.appendToBody) {
        document.body.removeChild(this.#listHTML)
        this.#containerResizer?.disconnect()
      } else {
        this.DOMelement.removeChild(this.#listHTML)
      }

      this.#listHTML.style.transform = null;
      this.#listHTML.style.position = null;
      this.#listHTML.style.width = null;

      this.inputElement.blur()
    }
  }

  // Focus handler for the document. Check inside treeselect click
  focusWindowHandler (event) {
    const isInsideClick = this.DOMelement.contains(event.target) || this.#listHTML.contains(event.target)

    if (!isInsideClick) {
      this.blurWindowHandler()
    }
  }

  scrollWindowHandler (event) {
    this.updateListPosition(this.#containerHTML, this.#listHTML)
  }

  // Validate props
  #validateProps () {
    if (!this.DOMelement) {
      console.error('DOMelement wasn\'t provided!')

      return false
    }

    if (!Array.isArray(this.value)) {
      console.error('Value should be an array!')

      return false
    }

    if (!Array.isArray(this.options)) {
      console.error('Options should be an array!')

      return false
    }

    return true
  }

  // Handler for main Input. Helps with key navigation
  #inputKeyActionsHandler (event) {
    this.#isMouseEventAvailable = false
    const itemFocused = this.#listHTML.querySelector('.treeselect-item-focused')

    if (event.key === 'Enter' && itemFocused) {
      const checkbox = itemFocused.querySelector('.treeselect-checkbox')
      checkbox.checked = !checkbox.checked
      checkbox.dispatchEvent(new Event('input'))
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      if (!itemFocused || !itemFocused.getAttribute('group-id')) {
        return
      }

      const isClosed = itemFocused.classList.contains('treeselect-group-closed')

      if ((isClosed && event.key === 'ArrowLeft') || (!isClosed && event.key === 'ArrowRight')) {
        return
      }
      
      const arrow = itemFocused.querySelector('.treeselect-group-icon')
      arrow.dispatchEvent(new Event('click'))
    }

    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return
    }

    const allCheckboxes = Array.from(this.#listHTML.querySelectorAll('.treeselect-checkbox'))
      .filter(checkbox => window.getComputedStyle(checkbox).display !== "none")

    if (!allCheckboxes.length) {
      return
    }
    
    if (!itemFocused) {
      const firstNode = allCheckboxes[0].parentNode
      firstNode.classList.add('treeselect-item-focused')
    } else {
      const focusedCheckboxIndex = allCheckboxes.findIndex(el => el.parentNode.classList.contains('treeselect-item-focused'))
      const focusedNode = allCheckboxes[focusedCheckboxIndex].parentNode
      focusedNode.classList.remove('treeselect-item-focused')

      const nextNodeIndex = event.key === 'ArrowDown' ? focusedCheckboxIndex + 1 : focusedCheckboxIndex -1
      const defaultNodeIndex = event.key === 'ArrowDown' ? 0 : allCheckboxes.length - 1
      const nextCheckbox = allCheckboxes[nextNodeIndex] ?? allCheckboxes[defaultNodeIndex]
      const nextNodeToFocus = nextCheckbox.parentNode
      nextNodeToFocus.classList.add('treeselect-item-focused')
    }
  }

  // Update direction of the list. Support appendToBody and standart mode
  updateListPosition (container, list, isNeedForceUpdate) {
    const spaceTop = container.getBoundingClientRect().y
    const spaceBottom = window.innerHeight - container.getBoundingClientRect().y
    const listHeight = list.clientHeight
    const isTopDirection = spaceTop > spaceBottom && window.innerHeight - spaceTop < listHeight
    const attributeToAdd = isTopDirection ? 'top' : 'buttom'
    const currentAttr = list.getAttribute('direction')

    list.setAttribute('direction', attributeToAdd)

    // Standart class handler handler
    if (!this.appendToBody) {
      const isNoNeedToUpdate = currentAttr === attributeToAdd

      if (isNoNeedToUpdate) {
        return
      }

      const topClassName = 'treeselect-list-top'
      const bottomClassName = 'treeselect-list-bottom'
      const classList = [topClassName, bottomClassName]
      const [currentCalss] = classList.filter(className => list.classList.contains(className))
      const classToAdd = isTopDirection ? topClassName : bottomClassName

      list.classList.remove(currentCalss)
      list.classList.add(classToAdd)

      return
    }

    // Append to body handler
    if (!this.#treeselectInitPosition || isNeedForceUpdate) {
      list.style.transform = null
      const { x: listX, y: listY } = list.getBoundingClientRect()
      const { x: containerX, y: containerY } = container.getBoundingClientRect()

      this.#treeselectInitPosition = { containerX, containerY, listX, listY }
    }

    const { listX, listY, containerX, containerY } = this.#treeselectInitPosition
    const containerHeight = container.clientHeight

    list.style.width = `${container.clientWidth}px`
    list.style.maxHeight = `${window.innerHeight - containerHeight}px`

    if (!currentAttr || isNeedForceUpdate) {
      this.#transform.top = `translate(${containerX - listX}px, ${containerY - listY - listHeight}px)`
      this.#transform.bottom = `translate(${containerX - listX}px, ${containerY + containerHeight - listY}px)`
    }

    list.style.transform = isTopDirection ? this.#transform.top : this.#transform.bottom
  }

  focusInputHandler (container) {
    if (this.appendToBody) {
      document.body.appendChild(this.#listHTML)
    } else {
      this.DOMelement.appendChild(this.#listHTML)
    }

    this.#isFocused = true
    const list = document.querySelector('.treeselect-list')
    this.#listHTML.classList.remove('treeselect-list-hidden')
    this.#addOutsideListeners()
    this.updateListPosition(container, this.#listHTML)

    // We need to check height of the container to update list position
    if (this.appendToBody) {
      this.#containerResizer.observe(container)
    }
  }

  // Create list container component
  #createList () {
    const list = document.createElement('div')
    list.classList.add('treeselect-list')
    list.classList.add('treeselect-list-hidden')
    const htmlTreeList = this.#getListHTML(this.options)
    const emptyList = this.#createEmptyList()
    this.#emptyListHTML = emptyList

    list.append(...htmlTreeList, emptyList)

    list.addEventListener('keydown', () => {
      // TODO
      // const input = this.DOMelement.querySelector('.input-container-edit')
      const input = this.inputElement.srcElement.querySelector('.input-container-edit')
      // this.inputElement.srcElement.focus()
      input.focus()
    })

    return list
  }

  // Create a all list of html for options
  #getListHTML (options, sublevel = 0) {  
    return options.reduce((acc, option) => {
      if (option.children?.length) {
        this.#groupIds.push(option.value.toString())
        const groupContainer = this.#createGroupContainer(option, sublevel)
        const innerGroupsAndElements = this.#getListHTML(option.children, sublevel + 1)
  
        groupContainer.append(...innerGroupsAndElements)
        acc.push(groupContainer)

        return acc
      }
      
      const itemGroupElement = this.#createGroupItem(option, false, sublevel)
      acc.push(itemGroupElement)

      return acc
    }, [])
  }

  // Create a group containter component
  #createGroupContainer (option, sublevel) {
    const groupContainerElement = document.createElement('div')
    groupContainerElement.setAttribute('group-container-id', option.value)
    groupContainerElement.classList.add('treeselect-group-container')
  
    const groupItemElement = this.#createGroupItem(option, true, sublevel)
    groupContainerElement.appendChild(groupItemElement)
  
    return groupContainerElement
  }

  // Create a groupItem component or singleItem component
  #createGroupItem (option, isGroup, sublevel) {
    const itemElement = document.createElement('div')
    const style = `padding-left:${sublevel * 25}px`
    const clsassName = isGroup ? 'treeselect-group' : 'treeselect-group-item'
  
    itemElement.setAttribute('style', style)
    itemElement.setAttribute('tabindex', '-1')
    itemElement.setAttribute('title', option.name)
    itemElement.classList.add(clsassName)
    itemElement.setAttribute('name', option.name)
  
    if (isGroup) {
      const arrow = this.#createArrow(option)
      itemElement.appendChild(arrow)
      itemElement.setAttribute('group-id', option.value)

      if (sublevel >= this.openLevel) {
        itemElement.classList.add('treeselect-group-closed')
      }
    } else {
      itemElement.setAttribute('item-id', option.value)
    }
  
    const checkbox = this.#createCheckbox(option)
    const label = this.#createCheckboxLabel(option)

    itemElement.addEventListener('mouseover', (event) => {
      this.#groupMouseAction(true, itemElement)
    }, true)
    itemElement.addEventListener('mouseout', (event) => {
      this.#groupMouseAction(false, itemElement)
    }, true)
    itemElement.addEventListener('mousemove', (event) => {
      this.#isMouseEventAvailable = true
    }, true)
  
    itemElement.append(checkbox, label)
  
    return itemElement
  }

  // Mouse action. Helps with key naviagation. Helps detect active element
  #groupMouseAction = (isMouseOver, itemElement) => {
    if (!this.#isMouseEventAvailable) {
      return
    }

    const focusedClassName = 'treeselect-item-focused'

    if (isMouseOver) {
      const itemFocused = this.#listHTML.querySelector(`.${focusedClassName}`)

      if (itemFocused) {
        itemFocused.classList.remove(focusedClassName)
      }

      itemElement.classList.add(focusedClassName)
    } else {
      itemElement.classList.remove(focusedClassName)
    }
  }

  // Create a group's arrow component
  #createArrow (option) {
    const arrow = document.createElement('span')
    arrow.setAttribute('tabindex', '-1')
    arrow.classList.add('treeselect-group-icon')
    arrow.addEventListener('click', (event) => {
      this.#arrowClickEvent(event, option)
    })
  
    return arrow
  }

  // Create a checkbox component
  #createCheckbox (option) {
    const checkbox = document.createElement('input')
    checkbox.setAttribute('id', this.#getLabelInputId(option))
    checkbox.setAttribute('type', `checkbox`)
    checkbox.setAttribute('tabindex', '-1')
    checkbox.classList.add('treeselect-checkbox')
    checkbox.addEventListener('input', (event) => {
      this.#checkboxClickEvent(event, option)
    })
    checkbox.checked = this.value.includes(option.value.toString())

    if (checkbox.checked) {
      this.selectedNodes.push({ id: option.value, name: option.name })
    }
  
    return checkbox
  }

  // Create a lable component
  #createCheckboxLabel (option) {
    const label = document.createElement('label')
    label.setAttribute('for', this.#getLabelInputId(option))
    label.innerHTML = option.name
    label.classList.add('treeselect-checkbox-label')
  
    return label
  }

  // Get lable InputId for label and checkbox(input)
  #getLabelInputId (option) {
    return `${option.value}--input`
  }

  // Event on checkbox input (update checked elements)
  #checkboxClickEvent (event, option) {
    this.#updateCheckbox(event.target)
    this.#updateValue()
    this.updateInputByValue()
    this.#emitInput()
  }
  
  // Event on arrow click (show/hide group)
  #arrowClickEvent (event, option) {
    const closedClassName = 'treeselect-group-closed'
    const groupItem = event.target.parentNode
    const isClosed = groupItem.classList.contains(closedClassName)

    const group = event.target.parentNode.parentNode
    const groupContainerId = group.getAttribute('group-container-id')

    const allChilrenCheckboxes = Array.from(group.querySelectorAll('.treeselect-checkbox'))
    const inputsWithoutGroup = allChilrenCheckboxes.filter(input => {
      const { nodeId: groupId } = this.#getNodeInfoByInput(input)
  
      return groupId !== groupContainerId
    })
    
    inputsWithoutGroup.forEach(input => {
      input.style.display = isClosed ? 'inherit' : 'none'
    })
  
    if (isClosed) {
      groupItem.classList.remove(closedClassName)
    } else {
      groupItem.classList.add(closedClassName)
    }

    this.updateListPosition(this.#containerHTML, this.#listHTML, true)
  }

  // Update checkbox tree by checkbox
  #updateCheckbox (input) {
    const { isGroup } = this.#getNodeInfoByInput(input)
  
    if (isGroup) {
      const isPartialSelected = input.classList.contains('treeselect-checkbox-partial-checked')
      const checked = isPartialSelected ? false : input.checked
      this.#checkUncheckChildren(input, checked)
    } else {
      this.#updateCheckedStateByInput(input)
    }
  
    const groupContainerElement = input.parentNode.parentNode
    this.#checkUncheckParent(groupContainerElement)
  }

  // Check or uncheck children elements of current input (checkbox)
  #checkUncheckChildren (input, value) {
    const groupContainerElement = input.parentNode.parentNode
    const allChilrenInputs = Array.from(groupContainerElement.querySelectorAll('.treeselect-checkbox'))
    allChilrenInputs.forEach(input => {
      input.checked = value
      this.#updateCheckedStateByInput(input)
  
      if (!value) {
        input.classList.remove('treeselect-checkbox-partial-checked')
      }
    })
  }
  
  // Check or uncheck parent elements of current input (checkbox)
  #checkUncheckParent (groupContainerElement) {
    const groupContainerId = groupContainerElement.getAttribute('group-container-id')
  
    if (groupContainerId === null) {
      return
    }
  
    const allChilrenCheckboxes = Array.from(groupContainerElement.querySelectorAll('.treeselect-checkbox'))
    const inputsWithoutGroup = allChilrenCheckboxes.filter(input => {
      const { nodeId: groupId } = this.#getNodeInfoByInput(input)
  
      return groupId !== groupContainerId
    })
    const groupCheckbox = allChilrenCheckboxes.find(input => {
      const { nodeId: groupId } = this.#getNodeInfoByInput(input)

      return groupId === groupContainerId
    })
  
    const isAllSelected = inputsWithoutGroup.every(checkbox => checkbox.checked)
    const isAllUnchecked = inputsWithoutGroup.every(checkbox => !checkbox.checked)
  
    if (isAllSelected) {
      groupCheckbox.checked = true
    }
  
    if (isAllUnchecked) {
      groupCheckbox.checked = false
      groupCheckbox.classList.remove('treeselect-checkbox-partial-checked')
    }
  
    if (!isAllSelected && !isAllUnchecked) {
      groupCheckbox.checked = false
      groupCheckbox.classList.add('treeselect-checkbox-partial-checked')
    }
  
    this.#updateCheckedStateByInput(groupCheckbox)
    this.#checkUncheckParent(groupContainerElement.parentNode)
  }

  // Get base info of input (checkbox)
  #getNodeInfoByInput = (input) => {
    const node = input.parentNode
    const groupId = node.getAttribute('group-id')
    const itemId = node.getAttribute('item-id')
    const nodeId = groupId || itemId
    const name = node.getAttribute('name')
  
    return {
      nodeId,
      checked: input.checked,
      isGroup: !!groupId,
      name
    }
  }
  
  // There we call all method that we need call after render
  #updateComponentOnInit = () => {
    const allChilrenInputs = Array.from(this.#listHTML.querySelectorAll('input[type=checkbox]:checked.treeselect-checkbox'))
    allChilrenInputs.forEach(input => this.#updateCheckbox(input))
    this.#updateValue()
    this.updateInputByValue()

    if (this.emitOnInit) {
      this.#emitInput()
    }

    if (this.appendToBody) {
      this.#containerResizer = new ResizeObserver(() => this.updateListPosition(this.#containerHTML, this.#listHTML, true))
    }

    if (this.alwaysOpen) {
      // this.focusInputHandler(this.#containerHTML)
    }
  }

  // Updeate checked/unchecked state
  // it will help when updateValue method is called
  // We can move all manipulations inide updateValue
  // But it is too many array itirations
  #updateCheckedStateByInput = (input) => {
    const { nodeId, checked, name } = this.#getNodeInfoByInput(input)
  
    if (checked) {
      this.#checkedNodes.push({ id: nodeId, name })
      input.parentNode.classList.add('treeselect-group-item-checked')
    } else {
      this.#uncheckedNodes.push({ id: nodeId, name })
      input.parentNode.classList.remove('treeselect-group-item-checked')
    }
  }

  // Emit this.value from state
  #updateValue () {
    const value = [...this.selectedNodes]
    let newValue = value.concat([...this.#checkedNodes])
    let filteredIds = this.#uncheckedNodes.map(node => node.id)
    
    if (!this.isGroupSelectable) {
      // TODO strange rule. Maybe we can use this prop for result leafs in input
      // And disable a groups selection by value prop
      filteredIds = filteredIds.concat(this.#groupIds)
    }

    newValue = newValue.filter(node => !filteredIds.includes(node.id))
    this.value = [...new Set(newValue.map(node => node.id))]
    this.selectedNodes = this.value.map(id => newValue.find(node => node.id === id))
    this.#checkedNodes = []
    this.#uncheckedNodes = []

    // Update InputElement values
    // if (!isNeedToUpdateInput) {
    //   this.inputElement.updateValue(this.selectedNodes)
    // }
  }

  // Emit this.value
  #emitInput () {
    // TODO add emit
    console.log(this.value, 'value emit')
    console.log(this.selectedNodes, 'nodes emit')
  }

  filterSearch (search) {
    const ids = this.getFilteredIds(this.options, search)

    if (!ids.length && search.length) {
      this.#emptyListHTML.classList.remove('treeselect-empty-list-hidden')
    } else {
      this.#emptyListHTML.classList.add('treeselect-empty-list-hidden')
    }

    const checkboxes = Array.from(this.#listHTML.querySelectorAll('.treeselect-checkbox'))

    checkboxes.forEach(checkbox => {
      const { nodeId, isGroup } = this.#getNodeInfoByInput(checkbox)

      const isVisible = ids.includes(nodeId) || !search

      if (isGroup) {
        // group container
        checkbox.parentNode.parentNode.style.display = isVisible ? '' : 'none'

        if (isVisible) {
          checkbox.parentNode.classList.remove('treeselect-group-closed')
        }
      }

      checkbox.style.display = isVisible ? '' : 'none'
      checkbox.parentNode.style.display = isVisible ? '' : 'none'

      // TODO make dispaly none and remove dispaly none 
    })
  }

  getChildrenIds (children) {
    return children.reduce((acc, curr) => {
      if (curr?.children?.length) {
        acc = acc.concat(this.getChildrenIds(curr.children))
      }

      acc.push(curr.value)

      return acc
    }, [])
  }

  getFilteredIds (options, search) {
    let visibleNodes = []

    options.forEach(option => {
      if (option?.children?.length) {
        if (option.name.includes(search)) {
          visibleNodes.push(option.value)
          visibleNodes = visibleNodes.concat(this.getChildrenIds(option.children))
        } else {
          const childrenVisibleNodes = this.getFilteredIds(option.children, search)
          const isAnyVisisble = !!childrenVisibleNodes.length
  
          if (isAnyVisisble) {
            visibleNodes.push(option.value)
          }
  
          visibleNodes = visibleNodes.concat(childrenVisibleNodes)
        }

      } else {
        const isVisible = option.name.includes(search)

        if (isVisible) {
          visibleNodes.push(option.value)
        }
      }
    })

    return visibleNodes
  }

  #createEmptyList () {
    const emptyList = document.createElement('div')
    emptyList.classList.add('treeselect-empty-list')

    if (this.options.length) {
      emptyList.classList.add('treeselect-empty-list-hidden')
    }

    const icon = document.createElement('span')
    icon.classList.add('treeselect-empty-list-icon')
    const text = document.createElement('span')
    text.classList.add('treeselect-empty-list-text')
    text.innerHTML = 'No results found...'

    emptyList.append(icon, text)

    return emptyList
  }
}

export default Treeselect
