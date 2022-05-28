class Treeselect {
  constructor (DOMelement, options, value) {
    this.DOMelement = DOMelement
    this.value = value
    this.options = options
    this.htmlList = this.getListHTML(options)
    this.isGroupSelectable = false

    this.render()
  }

  checkUncheckChildren (groupContainerElement, value) {
    const allChilrenInputs = Array.from(groupContainerElement.querySelectorAll('.treeselect-checkbox'))
    allChilrenInputs.forEach(input => {
      input.checked = value

      if (!value) {
        input.classList.remove('treeselect-checkbox-partial-checked')
      }
    })

    // SELECT children
    const values = allChilrenInputs
      .filter(item => value ? item.checked : !item.checked)
      .map(item => {
        const groupId = item.parentNode.getAttribute('group-id')
        const itemId = item.parentNode.getAttribute('item-id')

        return groupId || itemId
      })
    
    if (!value) {
      this.value = this.value.filter(item => !values.includes(item))
    } else {
      const filteredValues = values.filter(item => !this.value.includes(item))
      this.value = this.value.concat(filteredValues)
    }
  }

  checkUncheckParent (groupContainerElement) {
    const groupContainerId = groupContainerElement.getAttribute('group-container-id')

    if (groupContainerId === null) {
      return
    }

    const allChilrenCheckboxes = Array.from(groupContainerElement.querySelectorAll('.treeselect-checkbox'))
    const inputsWithoutGroup = allChilrenCheckboxes.filter(input => {
      const groupId = input.parentNode.getAttribute('group-id')

      return groupId !== groupContainerId
    })
    const groupCheckbox = allChilrenCheckboxes.find(input => input.parentNode.getAttribute('group-id') === groupContainerId)

    const isAllSelected = inputsWithoutGroup.every(checkbox => checkbox.checked)
    const isAllUnchecked = inputsWithoutGroup.every(checkbox => !checkbox.checked)

    if (isAllSelected) {
      groupCheckbox.checked = true

      const groupId = groupCheckbox.parentNode.getAttribute('group-id')

      if (!this.value.includes(groupId)) {
        this.value.push(groupId)
      }
    }

    if (isAllUnchecked) {
      groupCheckbox.checked = false
      groupCheckbox.classList.remove('treeselect-checkbox-partial-checked')

      const groupId = groupCheckbox.parentNode.getAttribute('group-id')
      this.value = this.value.filter(v => v !== groupId)
      console.log(groupId, 'filter')
    }

    if (!isAllSelected && !isAllUnchecked) {
      groupCheckbox.checked = false
      groupCheckbox.classList.add('treeselect-checkbox-partial-checked')

      const groupId = groupCheckbox.parentNode.getAttribute('group-id')
      this.value = this.value.filter(v => v !== groupId)
    }

    this.checkUncheckParent(groupContainerElement.parentNode)
  }

  // checkUncheckParent (itemElement) {
  //   const parentElement = itemElement.parentNode

  //   if (parentElement.classList.contains('treeselect-list')) {
  //     return
  //   }

  //   const allChilrenCheckboxes = Array.from(parentElement.querySelectorAll('.treeselect-checkbox'))
  //   const parentCheckboxId = `${parentElement.id}--input`
  //   const onlySubInuts = allChilrenCheckboxes.filter(checkbox => checkbox.id !== parentCheckboxId)
  //   const parentCheckbox = allChilrenCheckboxes.find(checkbox => checkbox.id === parentCheckboxId)

  //   const isAllSelected = onlySubInuts.every(checkbox => checkbox.checked)
  //   const isAllUnchecked = onlySubInuts.every(checkbox => !checkbox.checked)

  //   if (isAllSelected) {
  //     parentCheckbox.checked = true
  //   }

  //   if (isAllUnchecked) {
  //     parentCheckbox.checked = false
  //     parentCheckbox.classList.remove('treeselect-checkbox-partial-checked')
  //   }

  //   if (!isAllSelected && !isAllUnchecked) {
  //     parentCheckbox.checked = false
  //     parentCheckbox.classList.add('treeselect-checkbox-partial-checked')
  //   }

  //   if (!parentElement.parentNode.classList.contains('treeselect-list')) {
  //     this.checkUncheckParent(parentElement)
  //   }
  // }

  showHideGroup (itemElement) {
    const closedClassName = 'treeselect-group-closed'
    const isClosed = itemElement.classList.contains(closedClassName)

    if (isClosed) {
      itemElement.classList.remove(closedClassName)
    } else {
      itemElement.classList.add(closedClassName)
    }
  }

  getListHTML (options, sublevel = 0) {
    const items = []

    options.forEach(option => {
      items.push(this.getItemHTML(option, sublevel))
    })

    return items
  }

  getItemHTML (option, sublevel) {
    if (option.children?.length) {
      // Create div
      const groupContainerElement = document.createElement('div')
      groupContainerElement.setAttribute('group-container-id', option.value)
      groupContainerElement.classList.add('treeselect-group-container')
      // Add innerHtml
      const itemElement = this.getInnerItemHtml(option, true, sublevel)
      groupContainerElement.appendChild(itemElement)

      // if (!option.isOpened) {
      //   // groupElement.classList.add('treeselect-item-closed')
      // }

      const otherGroupElements = this.getListHTML(option.children, sublevel + 1)

      otherGroupElements.forEach(elem => {
        groupContainerElement.appendChild(elem)
      })

      return groupContainerElement
    }

    const itemElement = this.getInnerItemHtml(option, false, sublevel)

    return itemElement
  }

  createArrow (option) {
    const span = document.createElement('span')
    span.setAttribute('tabindex', '0')
    span.classList.add('treeselect-group-icon')
    span.addEventListener('click', (e) => {
      console.log('arrow click', option.value)
      this.showHideGroup(e.target.parentNode)
    })

    return span
  }

  createCheckbox (option) {
    const checkbox = document.createElement('input')
    checkbox.setAttribute('id', `${option.value}--input`)
    checkbox.setAttribute('type', `checkbox`)
    checkbox.classList.add('treeselect-checkbox')
    checkbox.addEventListener('input', (e) => {
      console.log('checkbox input')

      const groupId = e.target.parentNode.getAttribute('group-id')
      const isGroup = groupId || groupId == 0

      if (isGroup) {
        this.checkUncheckChildren(e.target.parentNode.parentNode, e.target.checked)
      } else {
        const itemId = e.target.parentNode.getAttribute('item-id')
        
        if (e.target.checked) {
          this.value.push(itemId)
        } else {
          this.value = this.value.filter(v => v !== itemId)
        }
      }

      this.checkUncheckParent(e.target.parentNode.parentNode)

      console.log('SELECTED', this.value)
    })

    return checkbox
  }

  createCheckboxLabel (option) {
    const label = document.createElement('label')
    label.setAttribute('for', `${option.value}--input`)
    label.innerHTML = option.name
    label.classList.add('treeselect-checkbox-label')

    return label
  }

  getInnerItemHtml (option, isGroup, sublevel) {
    const style = `padding-left:${sublevel * 25}px`
    const elements = []
    const itemElement = document.createElement('div')
    itemElement.setAttribute('style', style)

    if (isGroup) {
      itemElement.setAttribute('group-id', option.value)
      elements.push(this.createArrow(option))
      itemElement.classList.add('treeselect-group')
    } else {
      itemElement.setAttribute('item-id', option.value)
      itemElement.classList.add('treeselect-group-item')
    }

    elements.push(this.createCheckbox(option))
    elements.push(this.createCheckboxLabel(option))

    elements.forEach(item => {
      itemElement.appendChild(item)
    })

    return itemElement
  }

  // getOptionHTMLListItem (option, sublevel) {
  //   const sublevelClass = sublevel ? 'treeselect-sublevel-group' : ''

  //   if (option.children?.length) {
  //     const isClosedClass = !option.isOpened ? 'treeselect-item-closed' : ''

  //     return `
  //       <div id="${option.value}" class="treeselect-item ${sublevelClass} ${isClosedClass}">
  //         <span id="${option.value}--arrow" class="treeselect-item-icon"></span>
  //         <input id="${option.value}--input" class="treeselect-checkbox" type="checkbox" />
  //         <label for="${option.value}--input">${option.name}</label>
  //         ${this.getOptionsHTMLList(option.children, true)}
  //       </div>`
  //   }

  //   const sublevelClassItem  = sublevel ? 'treeselect-sublevel-item' : ''

  //   return `
  //     <div id="${option.value}" class="treeselect-item ${sublevelClassItem}">
  //       <input id="${option.value}--input" class="treeselect-checkbox" type="checkbox" />
  //       <label for="${option.value}--input">${option.name}</label>
  //     </div>`
  // }

  render () {
    if (!this.DOMelement) {
      return console.error('DOMelement wasn\'t provided!')
    }
    
    const input = document.createElement('input')
    input.classList.add('treeselect-input')
    input.setAttribute('type', 'text')
    this.DOMelement.appendChild(input)

    const list = document.createElement('div')
    list.classList.add('treeselect-list')
    this.htmlList.forEach(item => {
      list.appendChild(item)
    })
    this.DOMelement.appendChild(list)
  }
}

// export default Treeselect
