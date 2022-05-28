const elem = document.querySelector('#treeselect')

elem.addEventListener('input', function (e) {
  console.log('input!!!', e)
})

const testData = [
  {
    value: 1,
    name: '1',
    children: [
      {
        value: 2,
        name: '2',
        children: []
      }
    ]
  },
  {
    value: 3,
    name: '3',
    children: [
      {
        value: 4,
        name: '4',
        children: [
          {
            name: '5',
            value: 5,
            children: [
              {
                name: '6',
                value: 6,
                children: []
              },
              {
                name: '7',
                value: 7,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
]

const reMap = (array, values = []) => {
  const resArray = []

  array.forEach(element => {
    if (element.children.length) {
      const children = reMap(element.children, values)
      const checked = children.every(node => node.checked)
      resArray.push({
        ...element,
        children,
        checked,
        isOpened: false,
        isGroup: true
      })

      // resArray.push({ ...element, children: reMap(element.children, values), checked: true })
    } else {
      const checked = values.includes(element.value)
      resArray.push({
        ...element,
        checked,
        isGroup: false,
        isOpened: false
      })

      // resArray.push({ ...element, checked: false })
    }
  })

  return resArray
}

const reMapHTML = (array, level = 0) => {
  const resArray = []

  array.forEach(element => {
    const paddingLeft = level ? 20 : 0
    const styleGroup = `padding-left:${paddingLeft}px`
    const isOpenedClass = !element.isOpened ? 'v-treeselect-group--closed' : ''
    // const isOpenedIcon =  element.isOpened ? '&#8743;' : '&#8744;'

    if (element.children.length) {
      resArray.push(`
        <div id="${element.value}" class="v-treeselect-group group-level-${level} ${isOpenedClass}" style="${styleGroup}">
          <span id="${element.value}--arrow" tabindex="0" class="v-treeselect-group-icon" onclick="onClickArrowFunction(event)"></span>
          <input id="${element.value}--input" class="v-treeselect-checkbox" type="checkbox" onclick="onClickCheckboxFunction(event)" />
          <label for="${element.value}--input">${element.name}</label>
          ${reMapHTML(element.children, level + 1)}
        </div>`)
    } else {
      resArray.push(
        `<div id="${element.value}" class="v-treeselect-group group-level-${level}" style="padding-left:35px;">
          <input id="${element.value}--input" class="v-treeselect-checkbox" type="checkbox" onclick="onClickCheckboxFunction(event)" />
          <label for="${element.value}--input">${element.name}</label>
        </div>`)
    }
  })

  return resArray.join('')
}

// bad
// const findEl = (value, array) => {
//   array.forEach(element => {
//     if (element.value === value) {
//       element.finder = true
//       console.log('Find!')

//       return element
//     } else {
//       if (element.children.length) {
//         const result = findEl(value, element.children)

//         if (result) {
//           return result
//         }
//       }
//     }
//   })
// }

// normal
const findElFor = (value, array) => {
  for(let i=0; i < array.length; i++) {
    if (array[i].value === value) {
      array[i].finder = true
      console.log('Find!')

      return array[i]
    } else {
      if (array[i].children.length) {
        const result = findElFor(value, array[i].children)

        if (result) {
          return result
        }
      }
    }
  }
}

// Tests
const selectedValues = [6]
const mapped = reMap(testData, selectedValues)
const mappedHTML = reMapHTML(testData)

console.log(mapped)

// const elem = findEl(4, testData)
const elem2 = findElFor(4, testData)

console.log(elem2)


// Component
class VTreeselect extends HTMLElement {
  constructor () {
    super();

    this.header = ''
    this.entityId = ''
    this.value = []
    this.options = []
  }

  connectedCallback() {
    this.header = this.getAttribute('header')
    this.entityId = this.getAttribute('entity-id')

    this.options = JSON.parse(this.getAttribute('options'))

    try {
      this.value = JSON.parse(this.getAttribute('value'))
    } catch {
      this.value = []
      console.error('Wrong type of value! It should be array!')
    }

    console.log(this.options)

    this.render()

    this.dispatchEvent(new CustomEvent('input', {
      detail: [1, 2, 3]
    }))
  }

  render() {
    this.innerHTML = `<div class="v-treeselect">
      <input class="v-treeselect-input" type="text" />
      <div class="v-treeselect-list">
        ${reMapHTML(testData)}
      </div>
    </div>` 
  }
}

customElements.define('v-treeselect', VTreeselect)

const list = Array.from(document.querySelectorAll('.v-treeselect-group'))
console.log(list)

const checkedParents = (input) => {
  input.parentElement
}

const onClickCheckboxFunction = (e) => {
  const nodeId = e.srcElement.id.split('--')[0]
  const item = list.find(item => item.id === nodeId)
  const allChilrenInputs = Array.from(item.querySelectorAll('.v-treeselect-checkbox'))

  allChilrenInputs.forEach(input => {
    input.checked = e.srcElement.checked
  })

  const inputId = e.srcElement.id
  const input = allChilrenInputs.find(input => input.id === inputId)
  let groupItem = input.parentElement

  console.log(groupItem)

  while (!groupItem.classList.contains('v-treeselect-list')) {
    const allInputs = Array.from(groupItem.querySelectorAll('.v-treeselect-checkbox'))
    const currentInput = allInputs.find(input => input.id === `${groupItem.id}--input`)
    const allInputsFiltered = allInputs.filter(input => input.id !== `${groupItem.id}--input`)

    // console.log(allInputsFiltered)

    if (allInputsFiltered.length) {
      const isAllSelected = allInputsFiltered.every(input => input.checked)
      // const isAllUnSelected = allInputsFiltered.every(input => !input.checked)
      // const isAnySelected = allInputsFiltered.some(input => input.checked)

      currentInput.checked = isAllSelected
    }

    // if (isAllSelected) {
    // currentInput.checked = e.srcElement.checked
    // }

    groupItem = groupItem.parentElement

    // console.log(groupItem)
  }


  // console.log(item)
  // console.log(e)
  // console.log(e.srcElement.id)
}

const onClickArrowFunction = (e) => {
  const nodeId = e.srcElement.id.split('--')[0]
  const item = list.find(item => item.id === nodeId)
  const isClosed = item.classList.contains('v-treeselect-group--closed')

  if (isClosed) {
    item.classList.remove('v-treeselect-group--closed')
  } else {
    item.classList.add('v-treeselect-group--closed')
  }
}
