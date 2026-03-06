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
          },
          {
            name: 'West End',
            value: 4,
            children: [],
          },
        ],
      },
      {
        name: 'Brighton',
        value: 5,
        children: [],
      },
    ],
  },
  {
    name: 'France',
    value: 6,
    children: [
      {
        name: 'Paris',
        value: 7,
        children: [],
      },
      {
        name: 'Lyon',
        value: 8,
        children: [],
      },
    ],
  },
]

const value = [4, 7, 8]

const treeselectId = 'treeselect-demo-default'

export const runDefaultExample = (Treeselect) => {
  renderExampleSection({ sectionId: 'default-section', value, options, treeselectId })

  const domElement = document.getElementById(treeselectId)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value,
    options,
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('default: Selected value ', e.detail)
  })
}
