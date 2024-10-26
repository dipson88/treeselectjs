import '../../../src/treeselectjs.css'
import Treeselect from '../../../src/treeselectjs'
import { defaultOptions, largeOptionsList, optionsWithDisabled } from '../../testHelpers'

export const runBaseTest = () => {
  const className = '.treeselect-demo-base'
  const domElement = document.querySelector(className)

  if (!domElement) {
    return
  }

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [4, 7, 8],
    options: defaultOptions
  })
}

export const runSingleTest = () => {
  const className = '.treeselect-demo-single-select'
  const domElement = document.querySelector(className)

  if (!domElement) {
    return
  }

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

  if (!domElement) {
    return
  }

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: optionsWithDisabled
  })
}

export const runLargeDataTest = () => {
  const className = '.treeselect-demo-large-data'
  const domElement = document.querySelector(className)

  if (!domElement) {
    return
  }

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: largeOptionsList,
    saveScrollPosition: true
  })
}

export const runAppendedToBodyTest = () => {
  const className = '.treeselect-demo-appended-to-body'
  const domElement = document.querySelector(className)

  if (!domElement) {
    return
  }

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: defaultOptions,
    appendToBody: true
  })
}

runBaseTest()
runSingleTest()
runDisabledTest()
runLargeDataTest()
runAppendedToBodyTest()
