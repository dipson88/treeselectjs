import svg from './svgIcons.js'

const getFlatOptons = (options, openLevel, groupId = 0, level = 0) => {
  return options.reduce((acc, curr) => {
    const isGroup = !!curr.children?.length
    const isClosed = level >= openLevel && isGroup
    const hidden = level > openLevel
    acc.push({ id: curr.value, name: curr.name, childOf: groupId, isGroup, checked: false, level, isClosed, hidden })

    if (isGroup) {
      const children = getFlatOptons(curr.children, openLevel, curr.value, level + 1)
      acc.push(...children)
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
  const isPartialChecked = allParentChildren.some(option => option.isPartialChecked || option.checked) && !isAllChecked
  const isUnchecked = !isAllChecked && !isPartialChecked

  if (isAllChecked) {
    parent.checked = true
    parent.isPartialChecked = false
  }

  if (isPartialChecked) {
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

const updateValue = (newValue, flatOptions, srcElement) => {
  flatOptions.forEach(option => option.checked = false)
  const toCheck = flatOptions.filter(option => newValue.includes(option.id))
  toCheck.forEach(option => {
    option.checked = true
    option.isPartialChecked = false
    checkInput(option, flatOptions)
  })
  updateDOM(flatOptions, srcElement)
}

const hideShowChildren = (flattedOptions, { id, isClosed }) => {
  const allChildrenOptions = flattedOptions.filter(fo => fo.childOf === id)

  allChildrenOptions.forEach(option => {
    option.hidden = isClosed
    
    if (option.isGroup && !option.isClosed) {
      hideShowChildren(flattedOptions, { id: option.id, isClosed })
    }
  })
}

const updateDOM = (flatOptions, srcElement) => {
  flatOptions.forEach(option => {
    const input = srcElement.querySelector(`[input-id="${option.id}"]`)
    const listItem = getListItemByCheckbox(input)
    input.checked = option.checked

    if (option.checked) {
      listItem.classList.add('treeselect-list__item--checked')
    } else {
      listItem.classList.remove('treeselect-list__item--checked')
    }

    if (option.isPartialChecked) {
      listItem.classList.add('treeselect-list__item--partial-checked')
    } else {
      listItem.classList.remove('treeselect-list__item--partial-checked')
    }

    if (option.isGroup) {
      const icon = listItem.querySelector('.treeselect-list__item-icon')

      if (option.isClosed) {
        listItem.classList.add('treeselect-list__item--closed')
        icon.innerHTML = svg.arrowRight
      } else {
        listItem.classList.remove('treeselect-list__item--closed')
        icon.innerHTML = svg.arrowDown
      }
    }

    if (option.hidden) {
      listItem.classList.add('treeselect-list__item--hidden')
    } else {
      listItem.classList.remove('treeselect-list__item--hidden')
    }

    updateLeftPaddingItems(option, listItem, flatOptions)
    updateCheckboxClasses(option, input)
  })

  const isNotEmpty = flatOptions.some(option => !option.hidden)
  const emptyList = srcElement.querySelector('.treeselect-list__empty')

  if(isNotEmpty) {
    emptyList.classList.add('treeselect-list__empty--hidden')
  } else {
    emptyList.classList.remove('treeselect-list__empty--hidden')
  }
}

const updateLeftPaddingItems = (option, listItem, flatOptions) => {
  const isZeroLevel = option.level === 0
  const defaultPadding = 20

  if (isZeroLevel) {
    const isGroupsExistOnLevel = flatOptions.some(item => item.isGroup && item.level === option.level)
    const itemPadding = !option.isGroup && isGroupsExistOnLevel ? `${defaultPadding}px` : '0'
    listItem.style.paddingLeft = option.isGroup ? '0' : itemPadding
  } else {
    listItem.style.paddingLeft = option.isGroup
      ? `${option.level * defaultPadding}px`
      : `${(option.level * defaultPadding) + defaultPadding}px`
  }

  // You can use css selectors to reset params with !important
  listItem.setAttribute('level', option.level)
  listItem.setAttribute('group', option.isGroup)
}

// Updates classes
const updateCheckboxClasses = (option, input) => {
  const inputContainer = input.parentNode
  const icon = inputContainer.querySelector('.treeselect-list__item-checkbox-icon')
  
  if (option.checked)  {
    icon.innerHTML = svg.check
  } else if (option.isPartialChecked) {
    icon.innerHTML = svg.partialCheck
  } else {
    icon.innerHTML = ''
  }
}

const getAllFlattedChildren = (childOf, flattedOption) => {
  return flattedOption.reduce((acc, curr) => {
    if (curr.childOf === childOf) {
      acc.push(curr)

      if (curr.isGroup) {
        acc.push(...getAllFlattedChildren(curr.id, flattedOption))
      }
    }

    return acc
  }, [])
}

const getAllFlattendParents = (childOf, flatOptions) => {
  return flatOptions.reduce((acc, curr) => {
    if (curr.id === childOf) {
      acc.push(curr)

      if (curr.childOf) {
        acc.push(...getAllFlattendParents(curr.childOf, flatOptions))
      }
    }

    return acc
  }, [])
}

const getGroupedValues = (flatOptions) => {
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

const getCheckedValues = (flatOptions) => {
  return flatOptions.filter(option => option.checked && !option.isGroup)
}

const getListItemByCheckbox = (checkbox) => {
  const checkboxContainer = checkbox.parentNode
  const listItem = checkboxContainer.parentNode

  return listItem
}

class TreeselectList {
  #lastFocusedItem = null
  #isMouseActionsAvailable = true

  constructor({
    options,
    value,
    openLevel,
    listSlotHtmlComponent,
    emptyText
  }) {
    this.options = options
    this.value = value
    this.searchText = ''
    this.openLevel = openLevel ?? 0
    this.listSlotHtmlComponent = listSlotHtmlComponent
    this.emptyText = emptyText ?? 'No results found...'

    this.flattedOptions = getFlatOptons(this.options, this.openLevel)
    this.flattedOptionsBeforeSearch = this.flattedOptions
    this.selectedNodes = { ids: [], groupedIds: [] }
    this.srcElement = this.#createList()

    this.updateValue(this.value)
  }

  // Public methods
  updateValue (value) {
    updateValue(value, this.flattedOptions, this.srcElement)
    this.#updateSelectedNodes()
  }

  updateSearchValue (searchText) {
    const isStartOfSearching = this.searchText === '' && searchText !== ''
    this.searchText = searchText

    if (isStartOfSearching) {
      this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))
    }

    if (this.searchText === '') {
      // This loop need to save a isClose state before searching
      this.flattedOptions = this.flattedOptionsBeforeSearch.map(option => {
        const newOptionData = this.flattedOptions.find(newOption => newOption.id === option.id)
        newOptionData.isClosed = option.isClosed
        newOptionData.hidden = option.hidden
        
        return newOptionData
      })

      this.flattedOptionsBeforeSearch = []
      updateDOM(this.flattedOptions, this.srcElement)
      this.focusFirstListElement()

      return
    }

    const allOptions = this.flattedOptions.reduce((acc, curr) => {
      const isSerched = curr.name.toLowerCase().includes(searchText.toLowerCase())

      if (isSerched) {
        acc.push(curr)

        if (curr.isGroup) {
          const flattedChildren = getAllFlattedChildren(curr.id, this.flattedOptions)
          acc.push(...flattedChildren)
        }

        if (curr.childOf) {
          const flattedParents = getAllFlattendParents(curr.childOf, this.flattedOptions)
          acc.push(...flattedParents)
        }
      }

      return acc
    }, [])
    this.flattedOptions.forEach(option => {
      const isVisible = allOptions.some(ao => ao.id === option.id)

      if (isVisible) {
        if (option.isGroup) {
          option.isClosed = false
          hideShowChildren(this.flattedOptions, option)
        }

        option.hidden = false
      } else {
        option.hidden = true
      }
    })
    updateDOM(this.flattedOptions, this.srcElement)
    this.focusFirstListElement()
  }

  callKeyAction (key) {
    this.#isMouseActionsAvailable = false
    const itemFocused = this.srcElement.querySelector('.treeselect-list__item--focused')

    if (key === 'Enter' && itemFocused) {
      itemFocused.dispatchEvent(new Event('click'))
    }

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      if (!itemFocused) {
        return
      }

      const checkbox = itemFocused.querySelector('.treeselect-list__item-checkbox')
      const inputId = checkbox.getAttribute('input-id')
      const option = this.flattedOptions.find(option => option.id === inputId)
      const arrow = itemFocused.querySelector('.treeselect-list__item-icon')

      if (key === 'ArrowLeft' && !option.isClosed) {
        arrow.dispatchEvent(new Event('click'))
      }

      if (key === 'ArrowRight' && option.isClosed) {
        arrow.dispatchEvent(new Event('click'))
      }
    }

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      const allCheckboxes = Array.from(this.srcElement.querySelectorAll('.treeselect-list__item-checkbox'))
        .filter(checkbox => window.getComputedStyle(getListItemByCheckbox(checkbox)).display !== 'none')

      if (!allCheckboxes.length) {
        return
      }

      if (!itemFocused) {
        const firstNode = getListItemByCheckbox(allCheckboxes[0])
        firstNode.classList.add('treeselect-list__item--focused')
      } else {
        const focusedCheckboxIndex = allCheckboxes.findIndex(el => getListItemByCheckbox(el).classList.contains('treeselect-list__item--focused'))
        const focusedNode = getListItemByCheckbox(allCheckboxes[focusedCheckboxIndex])
        focusedNode.classList.remove('treeselect-list__item--focused')
  
        const nextNodeIndex = key === 'ArrowDown' ? focusedCheckboxIndex + 1 : focusedCheckboxIndex - 1
        const defaultNodeIndex = key === 'ArrowDown' ? 0 : allCheckboxes.length - 1
        const nextCheckbox = allCheckboxes[nextNodeIndex] ?? allCheckboxes[defaultNodeIndex]
        const isDefaultIndex = !allCheckboxes[nextNodeIndex]
        const nextNodeToFocus = getListItemByCheckbox(nextCheckbox)
        nextNodeToFocus.classList.add('treeselect-list__item--focused')

        const listCoord = this.srcElement.getBoundingClientRect()
        const nextCoord = nextNodeToFocus.getBoundingClientRect()

        if (isDefaultIndex && key === 'ArrowDown') {
          this.srcElement.scroll(0, 0)
          
          return
        }

        if (isDefaultIndex && key === 'ArrowUp') {
          this.srcElement.scroll(0, this.srcElement.scrollHeight)

          return
        }

        if (listCoord.y + listCoord.height < nextCoord.y + nextCoord.height) {
          this.srcElement.scroll(0, this.srcElement.scrollTop + nextCoord.height)

          return
        }

        if (listCoord.y > nextCoord.y) {
          this.srcElement.scroll(0, this.srcElement.scrollTop - nextCoord.height)

          return
        }
      }
    }
  }

  focusFirstListElement () {
    const focusedCalss = 'treeselect-list__item--focused'
    const itemFocused = this.srcElement.querySelector(`.${focusedCalss}`)
    const allCheckboxes = Array.from(this.srcElement.querySelectorAll('.treeselect-list__item-checkbox'))
      .filter(checkbox => window.getComputedStyle(getListItemByCheckbox(checkbox)).display !== 'none')
  
    if (!allCheckboxes.length) {
      return
    }
  
    if (itemFocused) {
      itemFocused.classList.remove(focusedCalss)
    }
  
    const firstItem = getListItemByCheckbox(allCheckboxes[0])
    firstItem.classList.add(focusedCalss)
  }

  // Private methods
  #createList () {
    const elementsToCreate = []

    const list = document.createElement('div')
    list.classList.add('treeselect-list')
    const htmlTreeList = this.#getListHTML(this.options)
    elementsToCreate.push(...htmlTreeList)
    

    if (this.listSlotHtmlComponent) {
      const slot = document.createElement('div')
      slot.classList.add('treeselect-list__slot')
      slot.appendChild(this.listSlotHtmlComponent)
      elementsToCreate.push(slot)
    }

    const emptyList = this.#createEmptyList()
    elementsToCreate.push(emptyList)

    list.addEventListener('mouseout', (e) => {
      e.stopPropagation()

      if (this.#lastFocusedItem && this.#isMouseActionsAvailable) {
        this.#lastFocusedItem.classList.add('treeselect-list__item--focused')
      }
    })
    list.addEventListener('mousemove', () => {
      this.#isMouseActionsAvailable = true
    })

    list.append(...elementsToCreate)

    return list
  }

  #getListHTML (options) {  
    return options.reduce((acc, option) => {
      if (option.children?.length) {
        const groupContainer = this.#createGroupContainer(option)
        const innerGroupsAndElements = this.#getListHTML(option.children)
  
        groupContainer.append(...innerGroupsAndElements)
        acc.push(groupContainer)

        return acc
      }
      
      const itemGroupElement = this.#createGroupItem(option, false)
      acc.push(itemGroupElement)

      return acc
    }, [])
  }

  #createGroupContainer (option) {
    const groupContainerElement = document.createElement('div')
    groupContainerElement.setAttribute('group-container-id', option.value)
    groupContainerElement.classList.add('treeselect-list__group-container')
  
    const groupItemElement = this.#createGroupItem(option, true)
    groupContainerElement.appendChild(groupItemElement)
  
    return groupContainerElement
  }

  #createGroupItem (option, isGroup) {
    const itemElement = document.createElement('div')
    itemElement.setAttribute('tabindex', '-1')
    itemElement.setAttribute('title', option.name)
    itemElement.classList.add('treeselect-list__item')
  
    if (isGroup) {
      const arrow = this.#createArrow()
      itemElement.appendChild(arrow)
    }

    itemElement.addEventListener('mouseover', () => {
      if (this.#isMouseActionsAvailable) {
        this.#groupMouseAction(true, itemElement)
      }
    }, true)
    itemElement.addEventListener('mouseout', () => {
      if (this.#isMouseActionsAvailable) {
        this.#groupMouseAction(false, itemElement)
        this.#lastFocusedItem = itemElement
      }
    }, true)
    itemElement.addEventListener('click', (e) => {
      e.stopPropagation()
      const checkbox = e.target.querySelector('.treeselect-list__item-checkbox')
      checkbox.checked = !checkbox.checked
      this.#checkboxClickEvent(checkbox, option)
    })
    
    const checkbox = this.#createCheckbox(option)
    const label = this.#createCheckboxLabel(option)
    itemElement.append(checkbox, label)
  
    return itemElement
  }

  #createArrow () {
    const arrow = document.createElement('span')
    arrow.setAttribute('tabindex', '-1')
    arrow.classList.add('treeselect-list__item-icon')
    arrow.innerHTML = svg.arrowDown

    arrow.addEventListener('click', (e) => {
      e.stopPropagation()
      this.#arrowClickEvent(e)
    })
  
    return arrow
  }

  #createCheckbox (option) {
    const checkboxContainer = document.createElement('div')
    checkboxContainer.classList.add('treeselect-list__item-checkbox-container')
    const ico = document.createElement('span')
    ico.classList.add('treeselect-list__item-checkbox-icon')
    ico.innerHTML = ''

    const checkbox = document.createElement('input')
    checkbox.setAttribute('tabindex', '-1')
    checkbox.setAttribute('type', `checkbox`)
    checkbox.setAttribute('input-id', option.value)
    checkbox.classList.add('treeselect-list__item-checkbox')

    checkboxContainer.append(ico, checkbox)
  
    return checkboxContainer
  }

  #createCheckboxLabel (option) {
    const label = document.createElement('label')
    label.innerHTML = option.name
    label.classList.add('treeselect-list__item-label')
  
    return label
  }

  #createEmptyList () {
    const emptyList = document.createElement('div')
    emptyList.classList.add('treeselect-list__empty')
    emptyList.setAttribute('title', this.emptyText)

    const icon = document.createElement('span')
    icon.classList.add('treeselect-list__empty-icon')
    icon.innerHTML = svg.attention

    const text = document.createElement('span')
    text.classList.add('treeselect-list__empty-text')
    text.innerHTML = this.emptyText

    emptyList.append(icon, text)

    return emptyList
  }

  // Actions
  #checkboxClickEvent(target, option) {
    const flattedOption = this.flattedOptions.find(fo => fo.id === option.value)
    flattedOption.checked = target.checked
    flattedOption.isPartialChecked = false
    checkInput(flattedOption, this.flattedOptions)
    updateDOM(this.flattedOptions, this.srcElement)

    this.#emitInput()
  }

  #arrowClickEvent (e) {
    const input = e.target.parentNode.querySelector('[input-id]')
    const id = input.getAttribute('input-id')
    const flattedOption = this.flattedOptions.find(fo => fo.id === id)
    flattedOption.isClosed = !flattedOption.isClosed
    hideShowChildren(this.flattedOptions, flattedOption)
    updateDOM(this.flattedOptions, this.srcElement)

    this.#emitArrrowClick()
  }

  #groupMouseAction (isMouseOver, itemElement) {
    const focusedClassName = 'treeselect-list__item--focused'

    if (isMouseOver) {
      const itemsFocused = Array.from(this.srcElement.querySelectorAll(`.${focusedClassName}`))

      if (itemsFocused.length) {
        itemsFocused.forEach(el => el.classList.remove(focusedClassName))
      }

      itemElement.classList.add(focusedClassName)
    } else {
      itemElement.classList.remove(focusedClassName)
    }
  }

  #updateSelectedNodes () {
    this.selectedNodes = {
      ids: getCheckedValues(this.flattedOptions),
      groupedIds: getGroupedValues(this.flattedOptions)
    }
  }

  // Emits
  #emitArrrowClick () {
    this.srcElement.dispatchEvent(new CustomEvent('arrow-click'))
  }

  #emitInput () {
    this.#updateSelectedNodes()
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.selectedNodes}))
  }
}

export default TreeselectList