class Treeselect {
  #checkedNodes = []
  #uncheckedNodes = []
  #groupIds = []
  #listHTML = null

  constructor ({
    DOMelement,
    options,
    value,
    openLevel,
    isGroupSelectable,
    emitOnInit,
    appendToBody
  }) {
    // User props
    this.DOMelement = DOMelement
    this.value = value
    this.options = options

    // Additional user settings props
    this.isGroupSelectable = isGroupSelectable ?? false
    this.openLevel = openLevel ?? 0
    this.emitOnInit = emitOnInit ?? false

    // State props
    this.#checkedNodes = []
    this.#uncheckedNodes = []
    this.#groupIds = []
    this.#listHTML = null

    this.render()
  }

  render () {
    const isValid = this.#validateProps()

    if (isValid) {
      this.#createTreeselect()
      this.#updateComponentOnInit()
    }
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

  // Create Treeselect component and attach to the DOM
  #createTreeselect () {
    // TODO add clear dom element
    const input = this.#createInput()
    const list = this.#createList()

    this.#listHTML = list
    this.DOMelement.append(input, lsitCoordnates)
  }

  // Create input coponent
  #createInput () {
    const input = document.createElement('input')
    input.classList.add('treeselect-input')
    input.setAttribute('type', 'text')

    input.addEventListener('focus', (event) => {
      const spaceTop = input.getBoundingClientRect().y
      const spaceBottom = window.innerHeight - input.getBoundingClientRect().y
      const listHeight = this.#listHTML.clientHeight
      const directionClass = spaceTop > spaceBottom && window.innerHeight - spaceTop < listHeight
        ? 'top'
        : 'bottom'
      const directionRemoveClass = directionClass === 'top' ? 'bottom' : 'top'
      this.#listHTML.classList.add(`treeselect-list-${directionClass}`)
      this.#listHTML.classList.remove(`treeselect-list-${directionRemoveClass}`)
      this.#listHTML.classList.remove('treeselect-list-hidden')

      this.DOMelement.appendChild(this.#listHTML)

      console.log(directionClass)
    })
  
    this.DOMelement.addEventListener('focusout', (e) => {
      const isOutsideClick = !this.DOMelement.contains(e.relatedTarget)

      if (isOutsideClick) {
        this.#listHTML.classList.add('treeselect-list-hidden')
        this.DOMelement.removeChild(this.#listHTML)
      }
    })
    return input
  }

  // Create list container component
  #createList () {
    const list = document.createElement('div')
    list.classList.add('treeselect-list')
    const htmlTreeList = this.#getListHTML(this.options)
    list.append(...htmlTreeList)
  
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
    itemElement.classList.add(clsassName)
  
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
  
    itemElement.append(checkbox, label)
  
    return itemElement
  }

  // Create a group's arrow component
  #createArrow (option) {
    const arrow = document.createElement('span')
    arrow.setAttribute('tabindex', '0')
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
    checkbox.classList.add('treeselect-checkbox')
    checkbox.addEventListener('input', (event) => {
      this.#checkboxClickEvent(event, option)
    })
    checkbox.checked = this.value.includes(option.value.toString())
  
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
    this.#emitInput()
  }
  
  // Event on arrow click (show/hide group)
  #arrowClickEvent (event, option) {
    const closedClassName = 'treeselect-group-closed'
    const groupItem = event.target.parentNode
    const isClosed = groupItem.classList.contains(closedClassName)
  
    if (isClosed) {
      groupItem.classList.remove(closedClassName)
    } else {
      groupItem.classList.add(closedClassName)
    }
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
  
    return {
      nodeId,
      checked: input.checked,
      isGroup: !!groupId
    }
  }
  
  // There we call all method that we need call after render
  #updateComponentOnInit = () => {
    const allChilrenInputs = Array.from(this.DOMelement.querySelectorAll('input[type=checkbox]:checked.treeselect-checkbox'))
    allChilrenInputs.forEach(input => this.#updateCheckbox(input))
    this.#updateValue()

    if (this.emitOnInit) {
      this.#emitInput()
    }
  }

  // Updeate checked/unchecked state
  // it will help when updateValue method is called
  // We can move all manipulations inide updateValue
  // But it is too many array itirations
  #updateCheckedStateByInput = (input) => {
    const { nodeId, checked } = this.#getNodeInfoByInput(input)
  
    if (checked) {
      this.#checkedNodes.push(nodeId)
      input.parentNode.classList.add('treeselect-group-item-checked')
    } else {
      this.#uncheckedNodes.push(nodeId)
      input.parentNode.classList.remove('treeselect-group-item-checked')
    }
  }

  // Emit this.value from state
  #updateValue () {
    const value = [...this.value]
    let newValue = value.concat([...this.#checkedNodes])
    let filteredIds = this.#uncheckedNodes
    
    if (!this.isGroupSelectable) {
      // TODO strange rule. Maybe we can use this prop for result leafs in input
      // And disable a groups selection by value prop
      filteredIds = filteredIds.concat(this.#groupIds)
    }

    newValue = newValue.filter(id => !filteredIds.includes(id))
    this.value = [...new Set(newValue)]
    this.#checkedNodes = []
    this.#uncheckedNodes = []
  }

  // Emit this.value
  #emitInput () {
    // TODO add emit
    console.log(this.value)
  }
}


export default Treeselect
