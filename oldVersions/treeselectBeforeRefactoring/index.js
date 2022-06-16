// import RootTreeselect from "./root.js";
import TreeselectList from "./list2.0.js";
import TreeselectInput from "./input.2.0.js";
import Treeselect from "./treeselect2.0.js";

const options = [
{
  value: '1',
  name: '1',
  children: [
    {
      value: '2',
      name: '2',
      children: []
    }
  ]
},
{
  value: '3',
  name: '3',
  children: [
    {
      value: '4',
      name: '4',
      children: [
        {
          name: '5',
          value: '5',
          children: [
            {
              name: '6',
              value: '6',
              children: []
            },
            {
              name: '7',
              value: '7',
              children: []
            }
          ]
        }
      ]
    }
  ]
},
{
  value: '8',
  name: '8',
  children: [
    {
      value: '9',
      name: '9',
      children: [{
        value: '10',
        name: '1032ce2c21ce2c312c21c3213'
      }]
    },
    {
      value: '11',
      name: '11',
      children: [{
        value: '12',
        name: '12'
      }]
    }
  ]
},
]

// const DOMelementInput = document.querySelector('.treeselect-input-test')
// const input = new TreeselectInput({
//   DOMelement: DOMelementInput,
//   value: [{ id: '1', name: 'test name' }, { id: '2', name: 'test name 2' }]
// })
// DOMelementInput.appendChild(input.srcElement)

// const DOMelementList = document.querySelector('.treeselect-list-test')
// const list = new TreeselectList({
//   options,
//   value: ['7', '9']
// })
// DOMelementList.appendChild(list.srcElement)

// setTimeout (() => {
//   list.updateValue(['2', '6'])
// }, 2000)

// const DOMelementRoot = document.querySelector('.treeselect-root-test')
// const root = new RootTreeselect({
//   options,
//   value: ['7', '9', '2']
// })

// root.srcElement.addEventListener('input', (event) => {
//   console.log(event.detail, 'INPUT')
// })

// DOMelementRoot.appendChild(root.srcElement)


const doomNewList = document.querySelector('.treeselect-list-test')

const list = new TreeselectList({
  options,
  value: ['7', '9', '2']
})

doomNewList.appendChild(list.srcElement)

list.srcElement.addEventListener('input', (e) => {
  console.log(e.detail)
})
list.srcElement.addEventListener('arrow-click', (e) => {
  console.log(e.detail)
})

list.updateValue(['6', '7'])

// list.updateSearchValue('7')
// setTimeout(() => {
//   list.updateSearchValue('')
// }, 2000)

// list.callKeyAction('ArrowUp')

// setTimeout(() => {
//   list.callKeyAction('Enter')
// }, 3000)

const doomNewInput = document.querySelector('.treeselect-input-test')

const input = new TreeselectInput({
  value: [{ name: 'first', id: '1' }, { name: 'second', id: '2' }]
})

doomNewInput.appendChild(input.srcElement)

input.srcElement.addEventListener('close', () => {
  console.log('close')
})
input.srcElement.addEventListener('open', () => {
  console.log('open')
})
input.srcElement.addEventListener('search', (e) => {
  console.log('search', e.detail)
})
input.srcElement.addEventListener('input', (e) => {
  console.log('input', e.detail)
})

// input.updateValue([{ name: '4', id: '4' }])

const dom = document.querySelector('.treeselect-2')
const tr = new Treeselect({
  value: ['2', '3'],
  options
})

dom.appendChild(tr.srcElement)
