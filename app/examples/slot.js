import { renderExampleSection } from '../render/renderExampleSection.js'

const options = [
  {
    name: 'England',
    value: 1,
    children: [
      {
        name: 'London',
        value: 2,
        children: [
          {
            name: 'Chelsea',
            value: 3,
            children: []
          },
          {
            name: 'West End',
            value: 4,
            children: []
          }
        ]
      },
      {
        name: 'Brighton',
        value: 5,
        children: []
      }
    ]
  }
]

const value = []

const treeselectId = 'treeselect-demo-slot'

export const runSlotExample = (Treeselect) => {
  renderExampleSection({ sectionId: 'slot-section', options, value, treeselectId })

  const slot = document.createElement('div')
  slot.innerHTML = '<a class="treeselect-demo-slot__slot" href="">Click!</a>'

  const domElement = document.getElementById(treeselectId)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value,
    options,
    listSlotHtmlComponent: slot
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('slot: Selected value', e.detail)
  })

  slot.addEventListener('click', (e) => {
    e.preventDefault()
    alert('Slot click!')
  })
}
