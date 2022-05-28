// Checked function start
let TESTVALUES = ['7', '9']
let checkedArr = []
let unCheckedArr = []

const getNodeInfoByInput = (input) => {
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

const emitInput = () => {
  let newValue = TESTVALUES.filter(id => !unCheckedArr.includes(id))
  newValue = newValue.concat([...checkedArr])
  console.log([...new Set(newValue)], 'after')
  // TODO
  TESTVALUES = newValue
  checkedArr = []
  unCheckedArr = []
}

const addInputToCheckedArray = (input) => {
  const { nodeId, checked } = getNodeInfoByInput(input)

  if (checked) {
    checkedArr.push(nodeId)
  } else {
    unCheckedArr.push(nodeId)
  }
}

const changeValue = (input) => {
  const node = input.parentNode
  const groupId = node.getAttribute('group-id')
  const itemId = node.getAttribute('item-id')
  const nodeId = groupId || itemId
  const checked = input.checked

  if (checked) {
    const isAlreadyExist = TESTVALUES.find(value => value === nodeId)

    if (!isAlreadyExist) {
      TESTVALUES.push(nodeId)
    }
  } else {
    TESTVALUES = TESTVALUES.filter(value => value !== nodeId)
  }

  // console.log(TESTVALUES)
}

const updateCheckedOnInit = (DOMelement) => {
  const allChilrenInputs = Array.from(DOMelement.querySelectorAll('input[type=checkbox]:checked.treeselect-checkbox'))
  allChilrenInputs.forEach(input => updateCheckbox(input))
  emitInput()
}

const updateCheckbox = (input) => {
  const isGroup = input.parentNode.getAttribute('group-id')

  if (isGroup) {
    const isPartialSelected = input.classList.contains('treeselect-checkbox-partial-checked')
    const checked = isPartialSelected ? false : input.checked
    checkUncheckChildren(input, checked)
  } else {
    addInputToCheckedArray(input)
  }

  const groupContainerElement = input.parentNode.parentNode
  checkUncheckParent(groupContainerElement)
}

const checkUncheckChildren = (input, value) => {
  const groupContainerElement = input.parentNode.parentNode
  const allChilrenInputs = Array.from(groupContainerElement.querySelectorAll('.treeselect-checkbox'))
  allChilrenInputs.forEach(input => {
    input.checked = value
    addInputToCheckedArray(input)

    if (!value) {
      input.classList.remove('treeselect-checkbox-partial-checked')
    }
  })
}

const checkUncheckParent = (groupContainerElement) => {
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
  }

  if (isAllUnchecked) {
    groupCheckbox.checked = false
    groupCheckbox.classList.remove('treeselect-checkbox-partial-checked')
  }

  if (!isAllSelected && !isAllUnchecked) {
    groupCheckbox.checked = false
    groupCheckbox.classList.add('treeselect-checkbox-partial-checked')
  }

  addInputToCheckedArray(groupCheckbox)
  checkUncheckParent(groupContainerElement.parentNode)
}
// Checked function end

const checkboxClickEvent = (event, option) => {
  console.log('checkbox input', option.value)
  updateCheckbox(event.target)
  emitInput()
}

const arrowClickEvent = (event, option) => {
  const closedClassName = 'treeselect-group-closed'
  const groupItem = event.target.parentNode
  const isClosed = groupItem.classList.contains(closedClassName)

  if (isClosed) {
    groupItem.classList.remove(closedClassName)
  } else {
    groupItem.classList.add(closedClassName)
  }
}

const getLabelInputId = (option) => {
  return `${option.value}--input`
}

const createCheckboxLabel = (option) => {
  const label = document.createElement('label')
  label.setAttribute('for', getLabelInputId(option))
  label.innerHTML = option.name
  label.classList.add('treeselect-checkbox-label')

  return label
}

const createCheckbox = (option) => {
  const checkbox = document.createElement('input')
  checkbox.setAttribute('id', getLabelInputId(option))
  checkbox.setAttribute('type', `checkbox`)
  checkbox.classList.add('treeselect-checkbox')
  checkbox.addEventListener('input', (event) => {
    checkboxClickEvent(event, option)
  })

  // TODO checked
  checkbox.checked = TESTVALUES.includes(option.value.toString())

  return checkbox
}


const createArrow = (option) => {
  const arrow = document.createElement('span')
  arrow.setAttribute('tabindex', '0')
  arrow.classList.add('treeselect-group-icon')
  arrow.addEventListener('click', (event) => {
    arrowClickEvent(event, option)
  })

  return arrow
}

const createGroupItem = (option, isGroup, sublevel) => {
  const itemElement = document.createElement('div')
  const style = `padding-left:${sublevel * 25}px`
  const clsassName = isGroup ? 'treeselect-group' : 'treeselect-group-item'

  itemElement.setAttribute('style', style)
  itemElement.classList.add(clsassName)

  if (isGroup) {
    const arrow = createArrow(option)
    itemElement.appendChild(arrow)
    itemElement.setAttribute('group-id', option.value)
  } else {
    itemElement.setAttribute('item-id', option.value)
  }

  const checkbox = createCheckbox(option)
  const label = createCheckboxLabel(option)

  itemElement.append(checkbox, label)

  return itemElement
}

const createGroupContainer = (option, sublevel) => {
  const groupContainerElement = document.createElement('div')
  groupContainerElement.setAttribute('group-container-id', option.value)
  groupContainerElement.classList.add('treeselect-group-container')

  const groupItemElement = createGroupItem(option, true, sublevel)
  groupContainerElement.appendChild(groupItemElement)

  return groupContainerElement
}

const getListHTML = (options, sublevel = 0) => {
  const items = []

  options.forEach(option => {
    if (option.children?.length) {
      const groupContainer = createGroupContainer(option, sublevel)
      const innerGroupsAndElements = getListHTML(option.children, sublevel + 1)

      groupContainer.append(...innerGroupsAndElements)

      items.push(groupContainer)
    } else {
      const itemGroupElement = createGroupItem(option, false, sublevel)

      items.push(itemGroupElement)
    }
  })

  return items
}

const createInput = () => {
  const input = document.createElement('input')
  input.classList.add('treeselect-input')
  input.setAttribute('type', 'text')

  return input
}

const createList = (htmlNodesList) => {
  const list = document.createElement('div')
  list.classList.add('treeselect-list')
  list.append(...htmlNodesList)

  return list
}

const render = (DOMelement, htmlNodesList) => {
  if (!DOMelement) {
    return console.error('DOMelement wasn\'t provided!')
  }

  const input = createInput()
  const list = createList(htmlNodesList)

  DOMelement.append(input, list)
}

class Treeselect2 {
  constructor (DOMelement, options, value, level) {
    this.DOMelement = DOMelement
    this.value = value
    this.options = options

    this.htmlList = getListHTML(this.options)

    this.isGroupSelectable = false
    this.openLevel = level

    render(this.DOMelement, this.htmlList)
    // TODO
    updateCheckedOnInit(this.DOMelement)
  }
}


export default Treeselect2
