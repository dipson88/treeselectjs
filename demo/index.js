import { Treeselect } from '../dist/treeselectjs.mjs.js'

const options = [
  {
    name: 'England',
    value: 'England',
    children: [
      {
        name: 'London',
        value: 'London',
        children: [
          {
            name: 'Chelsea',
            value: 'Chelsea',
            children: []
          },
          {
            name: 'West End',
            value: 'West End',
            children: []
          }
        ]
      },
      {
        name: 'Brighton',
        value: 'Brighton',
        children: []
      }
    ]
  },
  {
    name: 'France',
    value: 'France',
    children: [
      {
        name: 'Paris',
        value: 'Paris',
        children: []
      },
      {
        name: 'Lyon',
        value: 'Lyon',
        children: []
      }
    ]
  }
]

const slot = document.createElement('div')
slot.innerHTML = '<a class="treeselect-demo__slot" href="">Click!</a>'

const domElement = document.querySelector('.treeselect-demo')
const treeselect = new Treeselect({
  parentHtmlContainer: domElement,
  value: ['West End', 'Paris', 'Lyon'],
  options: options,
  listSlotHtmlComponent: slot
})

treeselect.srcElement.addEventListener('input', (e) => {
  console.log('Selected value:', e.detail)
})

slot.addEventListener('click', (e) => {
  e.preventDefault()
  alert('Slot click!')
})
