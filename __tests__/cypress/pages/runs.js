import '../../../src/treeselectjs.css'
import Treeselect from '../../../src/treeselectjs'
import { defaultOptions, largeOptionsList, optionsWithDisabled } from '../../testHelpers'

export const runBaseTest = () => {
  const className = '.treeselect-demo-base'
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [4, 7, 8],
    options: defaultOptions
  })
}

export const runSingleTest = () => {
  const className = '.treeselect-demo-single-select'
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: 4,
    options: defaultOptions,
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
    options: largeOptionsList,
    saveScrollPosition: true
  })
}
