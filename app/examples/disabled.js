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
            children: [],
            disabled: true
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
  },
  {
    name: 'France',
    value: 6,
    disabled: true,
    children: [
      {
        name: 'Paris',
        value: 7,
        children: []
      },
      {
        name: 'Lyon',
        value: 8,
        children: []
      }
    ]
  }
]

const value = []

const treeselectId = 'treeselect-demo-disabled'

export const runDisabledExample = (Treeselect) => {
  renderExampleSection({ sectionId: 'disabled-section', options, value, treeselectId })

  const domElement = document.getElementById(treeselectId)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value,
    options
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('disabled: Selected value ', e.detail)
  })
}
