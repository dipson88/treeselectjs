const mergeIds = (options, selectedIds) => {
  return options.reduce((acc, curr) => {
    const isSelected = selectedIds.includes(curr.value)

    if (isSelected) {
      acc.push({ id: curr.value, name: curr.name })

      return acc
    }

    const isGroup = curr?.children?.length

    if (isGroup) {
      const childrenMergedIds = mergeIds(curr.children, selectedIds)
      acc = acc.concat(childrenMergedIds)
    }

    return acc
  }, [])
}

const unmergeIds = (options, mergedIds) => {
  return options.reduce((acc, curr) => {
    const isSelected = mergedIds.includes(curr.value)
    const isGroup = curr?.children?.length
    
    if (isSelected) {
      acc.push({ id: curr.value, name: curr.name })

      if (isGroup) {
        const allChildren = getAllChildrenNodes(curr.children)
        acc = acc.concat(allChildren)
      }
    } else {
      if (isGroup) {
        const childrenUnmergedIds = unmergeIds(curr.children, mergedIds)
        acc = acc.concat(childrenUnmergedIds)
      }
    }


    return acc
  }, [])
}

const getAllChildrenNodes = (children) => {
  return children.reduce((acc, curr) => {
    acc.push({ id: curr.value, name: curr.name })
    const isGroup = curr.children?.length

    if (isGroup) {
      const allChildren = getAllChildrenNodes(curr.children)
      acc = acc.concat(allChildren)
    }

    return acc
  }, [])
}

const getFlatOptons = (options, groupId = 0, level = 1) => {
  return options.reduce((acc, curr) => {
    const isGroup = !!curr.children?.length
    acc.push({ id: curr.value, name: curr.name, childOf: groupId, isGroup, checked: false, level })

    if (isGroup) {
      const children = getFlatOptons(curr.children, curr.value, level + 1)
      acc = acc.concat(children)
    }

    return acc
  }, [])
}

const checkAllChildrenInputs = ({ id, checked }, flatOptions) => {
  flatOptions.forEach(option => {
    if (option.childOf === id) {
      option.checked = checked

      if (option.isGroup) {
        checkAllChildrenInputs(option, flatOptions)
      }
    }
  })
}

const checkAllParentInputs = (childOf, flatOptions) => {
  const parent = flatOptions.find(option => option.id === childOf)
  const allParentChildren = flatOptions.filter(option => option.childOf === parent.id)

  const isAllChecked = allParentChildren.every(option => option.checked)
  const isAnyChecked = allParentChildren.some(option => option.checked) && !isAllChecked
  const isPartialChecked = allParentChildren.some(option => option.isPartialChecked)
  const isUnchecked = !isAllChecked && !isAnyChecked && !isPartialChecked

  if (isAllChecked) {
    parent.checked = true
    parent.isPartialChecked = false
  }

  if (isAnyChecked || isPartialChecked) {
    parent.checked = false
    parent.isPartialChecked = true
  }

  if (isUnchecked) {
    parent.checked = false
    parent.isPartialChecked = false
  }

  if (parent.childOf) {
    checkAllParentInputs(parent.childOf, flatOptions)
  }
}

const checkInput = ({ id, isGroup, childOf, checked }, flatOptions) => {
  if (isGroup) {
    checkAllChildrenInputs({ id, checked }, flatOptions)
  }

  if (childOf) {
    checkAllParentInputs(childOf, flatOptions)
  }
}

const getMerged = (flatOptions) => {
  const { onlyGroupsIds, allItems } = flatOptions.reduce((acc, curr) => {
    if (!curr.checked) {
      return acc
    }

    if (curr.isGroup) {
      acc.onlyGroupsIds.push(curr.id)
    }
  
    acc.allItems.push(curr)

    return acc
  }, {
    onlyGroupsIds: [],
    allItems: []
  })

  return allItems.filter(item => !onlyGroupsIds.includes(item.childOf))
}

const getUnmerged = (flatOptions) => {
  return flatOptions.filter(option => option.checked && !option.isGroup)
}

const updateDOM = (flatOptions, srcElement) => {
  flatOptions.forEach(option => {
    const input = srcElement.querySelector(`[input-id="${option.id}"]`)
    const listItem = input.parentNode
    input.checked = option.checked

    if (option.checked) {
      listItem.classList.add('treeselect-list-item--checked')
    } else {
      listItem.classList.remove('treeselect-list-item--checked')
    }

    if (option.isPartialChecked) {
      listItem.classList.add('treeselect-item--partial-checked')
    } else {
      listItem.classList.add('treeselect-item--partial-checked')
    }
  })
}

class TreeselectList {
  // Checkboxes value state
  #checkedNodes = []
  #uncheckedNodes = []
  #groupIds = []

  // Search state
  #searchText = ''
  #closedCheckboxesBeforeSearch = []

  constructor ({
    options,
    value,
    openLevel
  }) {
    // User props
    this.options = options
    this.value = value
    this.openLevel = openLevel

    // Inner State
    this.selectedNodes = []

    // Element
    this.srcElement = this.#createList()

    // Init calls
    this.updateValue(value)

    // TEST
    const ids = ['8', '12', '11', '10', '9', '6']
    const mIds = mergeIds(this.options, ids)
    const unmIds = unmergeIds(this.options, mIds.map(i => i.id))

    console.log(ids, mIds, unmIds, 'm/unm ids')

    const flat = getFlatOptons(this.options)

    console.log(flat, 'flat')

    const checkNodes = flat.filter(option => ids.includes(option.id))
    checkNodes.forEach(node => {
      node.checked = true
      checkInput(node, flat)
    })

    console.log(flat)

    console.log(getMerged(flat), getUnmerged(flat), 'MER/UNMER')
  }

  // Public Methods
  updateValue (value) {
    const groupIds = value.filter(v => this.#groupIds.includes(v))
    const itmesIds = value.filter(v => !this.#groupIds.includes(v))

    itmesIds.forEach(id => {
      const elem = this.srcElement.querySelector(`[item-id="${id}"]`)
      const input = elem.querySelector('.treeselect-checkbox')
      input.checked = value.includes(id)
      this.#updateCheckbox(input)
      this.#updateValue()
    })
    groupIds.forEach(id => {
      const elem = this.srcElement.querySelector(`[group-id="${id}"]`)
      const input = elem.querySelector('.treeselect-checkbox')
      input.checked = value.includes(id)
      this.#updateCheckbox(input)
      this.#updateValue()
    })

    const allChilrenInputs = Array.from(this.srcElement.querySelectorAll('.treeselect-checkbox'))
    allChilrenInputs.forEach(input => {
      const { nodeId } = this.#getNodeInfoByInput(input)
      input.checked = value.includes(nodeId)
      this.#updateCheckbox(input)
      this.#updateValue()
    })
  }

  updateSearchValue (searchText) {
    if (!this.#searchText) {
      this.#closedCheckboxesBeforeSearch = Array.from(this.srcElement.querySelectorAll('.treeselect-group-closed'))
    }

    this.#filterSearch(searchText)
    this.#searchText = searchText

    if (!this.#searchText) {
      this.#closedCheckboxesBeforeSearch.forEach(checkbox => {
        if (!checkbox.classList.contains('treeselect-group-closed')) {
          checkbox.classList.add('treeselect-group-closed')
        }
      })

      this.#closedCheckboxesBeforeSearch = []
    }
  }

  callKeyAction (key) {
    const itemFocused = this.srcElement.querySelector('.treeselect-item-focused')

    if (key === 'Enter' && itemFocused) {
      const checkbox = itemFocused.querySelector('.treeselect-checkbox')
      checkbox.checked = !checkbox.checked
      checkbox.dispatchEvent(new Event('input'))
    }

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      if (!itemFocused || !itemFocused.getAttribute('group-id')) {
        return
      }

      const isClosed = itemFocused.classList.contains('treeselect-group-closed')

      if ((isClosed && key === 'ArrowLeft') || (!isClosed && key === 'ArrowRight')) {
        return
      }
      
      const arrow = itemFocused.querySelector('.treeselect-group-icon')
      arrow.dispatchEvent(new Event('click'))
    }

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      const allCheckboxes = Array.from(this.srcElement.querySelectorAll('.treeselect-checkbox'))
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
  
        const nextNodeIndex = key === 'ArrowDown' ? focusedCheckboxIndex + 1 : focusedCheckboxIndex -1
        const defaultNodeIndex = key === 'ArrowDown' ? 0 : allCheckboxes.length - 1
        const nextCheckbox = allCheckboxes[nextNodeIndex] ?? allCheckboxes[defaultNodeIndex]
        const nextNodeToFocus = nextCheckbox.parentNode
        nextNodeToFocus.classList.add('treeselect-item-focused')
      }
    }
  }

  // Emits
  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: {
      ids: this.value,
      nodes: this.selectedNodes
    }}))
  }

  #emitArrrowClick () {
    this.srcElement.dispatchEvent(new CustomEvent('arrow-click'))
  }

  #createList () {
    const list = document.createElement('div')
    list.classList.add('treeselect-list')
    const htmlTreeList = this.#getListHTML(this.options)
    const emptyList = this.#createEmptyList()

    list.append(...htmlTreeList, emptyList)

    return list
  }

  // Create a all list of html for options
  #getListHTML (options, sublevel = 0) {  
    return options.reduce((acc, option) => {
      if (option.children?.length) {
        this.#groupIds.push(option.value)
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
      const arrow = this.#createArrow()
      itemElement.appendChild(arrow)
      itemElement.setAttribute('group-id', option.value)

      if (sublevel >= this.openLevel) {
        itemElement.classList.add('treeselect-group-closed')
      }
    } else {
      itemElement.setAttribute('item-id', option.value)
    }

    itemElement.addEventListener('mouseover', () => {
      this.#groupMouseAction(true, itemElement)
    }, true)
    itemElement.addEventListener('mouseout', () => {
      this.#groupMouseAction(false, itemElement)
    }, true)
    
    const checkbox = this.#createCheckbox(option)
    const label = this.#createCheckboxLabel(option)
    itemElement.append(checkbox, label)
  
    return itemElement
  }

  // Create a group's arrow component
  #createArrow () {
    const arrow = document.createElement('span')
    arrow.setAttribute('tabindex', '-1')
    arrow.classList.add('treeselect-group-icon')

    arrow.addEventListener('click', (event) => this.#arrowClickEvent(event))
  
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
      event.stopPropagation()
      this.#checkboxClickEvent(event)
    })
    checkbox.checked = this.value.includes(option.value)

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

  // No reults Empty List Component
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

  // Inner methods

  // Event on arrow click (show/hide group)
  #arrowClickEvent (event) {
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

    this.#emitArrrowClick()
  }

  // Event on checkbox input (update checked elements)
  #checkboxClickEvent (event) {
    this.#updateCheckbox(event.target)
    this.#updateValue()
    this.#emitInput()
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
      // filteredIds = filteredIds.concat(this.#groupIds)
    }

    newValue = newValue.filter(node => !filteredIds.includes(node.id))

    this.value = [...new Set(newValue.map(node => node.id))]
    this.selectedNodes = this.value.map(id => newValue.find(node => node.id === id))
    this.#checkedNodes = []
    this.#uncheckedNodes = []
    this.mergedSelectedNodes = this.#getMergedIds(this.options, this.selectedNodes)
    // console.log(this.#getMergedIds(this.options, this.selectedNodes))
  }

  #getMergedIds (options, selectedNodes) {
    // const selectedNodes = []
    // const groupNodes = nodes.filter(node => this.#groupIds.includes(node.id))
    // groupNodes.forEach(node => {
    //   selectedNodes.push(id)
    //   const container = this.srcElement.querySelector(`[group-container-id="${id}"]`)
    //   this.srcElement.querySelectorAll('')
    // })

    return options.reduce((acc, curr) => {
      const isGroup = !!curr.children?.length
      const isSelected = selectedNodes.some(node => node.id === curr.value)

      if (isSelected) {
        acc.checkNodes.push(curr)

        if (isGroup) {
          const children = this.#getChildrenIds(curr.children)
          acc.uncheckNodes = acc.uncheckNodes.concat(children)
        }
      } else {
        acc.uncheckNodes.push(curr)

        if (isGroup) {
          const data = this.#getMergedIds(curr.children, selectedNodes)
          acc.uncheckNodes = acc.uncheckNodes.concat(data.uncheckNodes)
          acc.checkNodes = acc.checkNodes.concat(data.checkNodes)
        }
      }

      return acc
    }, {
      checkNodes: [],
      uncheckNodes: []
    })
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

  // Mouse action. Helps with key naviagation. Helps detect active element
  #groupMouseAction = (isMouseOver, itemElement) => {
    const focusedClassName = 'treeselect-item-focused'

    if (isMouseOver) {
      const itemFocused = this.srcElement.querySelector(`.${focusedClassName}`)

      if (itemFocused) {
        itemFocused.classList.remove(focusedClassName)
      }

      itemElement.classList.add(focusedClassName)
    } else {
      itemElement.classList.remove(focusedClassName)
    }
  }

  // Filters and search
  #filterSearch (searchText) {
    const idsToShow = this.#getFilteredIds(this.options, searchText)
    const emptyList = this.srcElement.querySelector('.treeselect-empty-list')

    if (!idsToShow.length && searchText.length) {
      emptyList.classList.remove('treeselect-empty-list-hidden')
    } else {
      emptyList.classList.add('treeselect-empty-list-hidden')
    }

    this.#showHideFilteredCheckboxes(idsToShow, searchText)
  }

  #getFilteredIds (options, search) {
    return options.reduce((acc, option) => {
      if (option?.children?.length) {
        if (option.name.includes(search)) {
          acc.push(option.value)
          const childrenIds = this.#getChildrenIds(option.children)
          acc = acc.concat(childrenIds)
        } else {
          const childrenVisibleNodes = this.#getFilteredIds(option.children, search)
  
          if (childrenVisibleNodes.length) {
            acc.push(option.value)
          }
  
          acc = acc.concat(childrenVisibleNodes)
        }

        return acc
      }

      if (option.name.includes(search)) {
        acc.push(option.value)
      }

      return acc
    }, [])
  }

  #getChildrenIds (children) {
    return children.reduce((acc, curr) => {
      acc.push(curr.value)

      if (curr?.children?.length) {
        const childrenIds = this.#getChildrenIds(curr.children)
        acc = acc.concat(childrenIds)
      }

      return acc
    }, [])
  }

  #showHideFilteredCheckboxes (idsToShow, searchText) {
    const checkboxes = Array.from(this.srcElement.querySelectorAll('.treeselect-checkbox'))
    checkboxes.forEach(checkbox => {
      const { nodeId, isGroup } = this.#getNodeInfoByInput(checkbox)

      const isVisible = idsToShow.includes(nodeId) || !searchText

      checkbox.style.display = isVisible ? '' : 'none'
      const groupItem = checkbox.parentNode
      groupItem.style.display = isVisible ? '' : 'none'

      if (isVisible) {
        groupItem.classList.remove('treeselect-group-closed')
      }

      if (isGroup) {
        const groupContainer = checkbox.parentNode.parentNode
        groupContainer.style.display = isVisible ? '' : 'none'
      }
    })
  }
}

export default TreeselectList
