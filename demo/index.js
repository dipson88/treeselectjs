import Treeselect from '../dist/js/index.js';

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
slot.innerHTML='<a class="test" href="">Add new element</a>'

const domEl = document.querySelector('.treeselect-test')
const treeselect = new Treeselect({
  parentHtmlContainer: domEl,
  value: [],
  options: options,
  alwaysOpen: false,
  appendToBody: true,
  listSlotHtmlComponent: null,
  disabled: false,
  emptyText: 'No data text'
})

treeselect.srcElement.addEventListener('input', (e) => {
  console.log(e.detail)
})
