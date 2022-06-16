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

const updateValue = (newValue, flatOptions, srcElement) => {
  flatOptions.forEach(option => option.checked = false)
  const toCheck = flatOptions.filter(option => newValue.includes(option.id))
  toCheck.forEach(option => {
    option.checked = true
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
    const listItem = input.parentNode
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
      const icon = input.parentNode.querySelector('.treeselect-list__item-icon')
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

    listItem.style.paddingLeft = `${option.level * 30}px`
  })

  const isNotEmpty = flatOptions.some(option => !option.hidden)
  const emptyList = srcElement.querySelector('.treeselect-list__empty')

  if(isNotEmpty) {
    emptyList.classList.add('treeselect-list__empty--hidden')
  } else {
    emptyList.classList.remove('treeselect-list__empty--hidden')
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

class TreeselectList {
  constructor({
    options,
    value,
    openLevel
  }) {
    this.options = options
    this.value = value
    this.searchText = ''
    this.openLevel = openLevel ?? 0
    this.flattedOptions = getFlatOptons(this.options, this.openLevel)
    this.flattedOptionsBeforeSearch = this.flattedOptions
    this.srcElement = this.#createList()

    this.updateValue(this.value)
  }

  // Public methods
  updateValue (value) {
    updateValue(value, this.flattedOptions, this.srcElement)
  }

  updateSearchValue (searchText) {
    const isStartOfSearching = this.searchText === '' && searchText !== ''
    this.searchText = searchText

    if (isStartOfSearching) {
      this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))
    }

    if (this.searchText === '') {
      this.flattedOptions = JSON.parse(JSON.stringify(this.flattedOptionsBeforeSearch))
      this.flattedOptionsBeforeSearch = []
      updateDOM(this.flattedOptions, this.srcElement)

      return
    }

    const allOptions = this.flattedOptions.reduce((acc, curr) => {
      const isSerched = curr.name.includes(searchText)

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
  }

  callKeyAction (key) {
    const itemFocused = this.srcElement.querySelector('.treeselect-list__item--focused')

    if (key === 'Enter' && itemFocused) {
      const checkbox = itemFocused.querySelector('.treeselect-list__item-checkbox')
      checkbox.checked = !checkbox.checked
      checkbox.dispatchEvent(new Event('input'))
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
        .filter(checkbox => window.getComputedStyle(checkbox.parentNode).display !== 'none')

      if (!allCheckboxes.length) {
        return
      }

      if (!itemFocused) {
        const firstNode = allCheckboxes[0].parentNode
        firstNode.classList.add('treeselect-list__item--focused')
      } else {
        const focusedCheckboxIndex = allCheckboxes.findIndex(el => el.parentNode.classList.contains('treeselect-list__item--focused'))
        const focusedNode = allCheckboxes[focusedCheckboxIndex].parentNode
        focusedNode.classList.remove('treeselect-list__item--focused')
  
        const nextNodeIndex = key === 'ArrowDown' ? focusedCheckboxIndex + 1 : focusedCheckboxIndex - 1
        const defaultNodeIndex = key === 'ArrowDown' ? 0 : allCheckboxes.length - 1
        const nextCheckbox = allCheckboxes[nextNodeIndex] ?? allCheckboxes[defaultNodeIndex]
        const nextNodeToFocus = nextCheckbox.parentNode
        nextNodeToFocus.classList.add('treeselect-list__item--focused')
      }
    }
  }

  // Private methods
  #createList () {
    const list = document.createElement('div')
    list.classList.add('treeselect-list')
    const htmlTreeList = this.#getListHTML(this.options)
    const emptyList = this.#createEmptyList()

    list.append(...htmlTreeList, emptyList)

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
      this.#groupMouseAction(true, itemElement)
    }, true)
    itemElement.addEventListener('mouseout', () => {
      this.#groupMouseAction(false, itemElement)
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
    const checkbox = document.createElement('input')
    checkbox.setAttribute('tabindex', '-1')
    checkbox.setAttribute('type', `checkbox`)
    checkbox.setAttribute('input-id', option.value)
    checkbox.classList.add('treeselect-list__item-checkbox')
  
    return checkbox
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

    const icon = document.createElement('span')
    icon.classList.add('treeselect-list__empty-icon')
    icon.innerHTML = svg.attention

    const text = document.createElement('span')
    text.classList.add('treeselect-list__empty-text')
    text.innerHTML = 'No results found...'

    emptyList.append(icon, text)

    return emptyList
  }

  // Actions
  #checkboxClickEvent(target, option) {
    const flattedOption = this.flattedOptions.find(fo => fo.id === option.value)
    flattedOption.checked = target.checked
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
      const itemFocused = this.srcElement.querySelector(`.${focusedClassName}`)

      if (itemFocused) {
        itemFocused.classList.remove(focusedClassName)
      }

      itemElement.classList.add(focusedClassName)
    } else {
      itemElement.classList.remove(focusedClassName)
    }
  }

  // Emits
  #emitArrrowClick () {
    this.srcElement.dispatchEvent(new CustomEvent('arrow-click'))
  }

  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: {
      ids: getCheckedValues(this.flattedOptions),
      groupedIds: getGroupedValues(this.flattedOptions)
    }}))
  }
}

export default TreeselectList