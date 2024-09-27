import Treeselect, { ITreeselectParams } from '../../src/treeselectjs'

export const renderTreeselect = (params: Omit<ITreeselectParams, 'parentHtmlContainer'>) => {
  document.body.innerHTML = '<div id="test-container"></div>'
  const container = document.body.querySelector('#test-container') as HTMLElement

  return new Treeselect({
    parentHtmlContainer: container,
    ...params
  })
}
