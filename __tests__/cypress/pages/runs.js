import '../../../src/treeselectjs.css'
import Treeselect from '../../../src/treeselectjs'
import { defaultOptions, largeOptionsList, largeNestedOptionsList, optionsWithDisabled } from '../../testHelpers'

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

export const runBoostRenderingTest = () => {
  const className = '.treeselect-demo-boost-rendering'
  const domElement = document.querySelector(className)

  if (!domElement) {
    return
  }

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: largeNestedOptionsList,
    isBoostedRendering: true
  })
}

export const runSlotTest = () => {
  const className = '.treeselect-demo-slot'
  const domElement = document.querySelector(className)

  if (!domElement) {
    return
  }

  const slot = document.createElement('div')
  slot.classList.add('treeselect-demo-slot__slot')
  const btn = document.createElement('button')
  btn.className = 'treeselect-demo-slot__slot-btn'
  btn.innerText = 'Click!'
  slot.appendChild(btn)

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: defaultOptions,
    listSlotHtmlComponent: slot
  })
}

runBaseTest()
runSingleTest()
runDisabledTest()
runLargeDataTest()
runAppendedToBodyTest()
runBoostRenderingTest()
runSlotTest()
