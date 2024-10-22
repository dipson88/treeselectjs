import '../../../src/treeselectjs.css'
import Treeselect from '../../../src/treeselectjs'

export const options = [
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
  },
  {
    name: 'France',
    value: 6,
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

const optionsWithDisabled = [
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

const largeOptions = Array.from({ length: 50 }, (_, i) => ({
  name: `Option ${i}`,
  value: i,
  children: []
}))

export const runBaseTest = () => {
  const className = '.treeselect-demo-base'
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [4, 7, 8],
    options: options
  })
}

export const runSingleTest = () => {
  const className = '.treeselect-demo-single-select'
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: 4,
    options: options,
    isSingleSelect: true,
    showTags: false
  })
}

export const runDisabledTest = () => {
  const className = '.treeselect-demo-disabled'
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: optionsWithDisabled
  })
}

export const runLargeDataTest = () => {
  const className = '.treeselect-demo-large-data'
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: largeOptions,
    saveScrollPosition: true
  })
}
