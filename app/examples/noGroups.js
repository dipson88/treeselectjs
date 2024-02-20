const options = [
  {
    name: 'England',
    value: 1,
  },
  {
    name: 'London',
    value: 2,
  },
  {
    name: 'Chelsea',
    value: 3
  },
  {
    name: 'West End',
    value: 4
  },
  {
    name: 'Brighton',
    value: 5
  },
  {
    name: 'France',
    value: 6
  },
  {
    name: 'Paris',
    value: 7
  },
  {
    name: 'Lyon',
    value: 8
  },
]

const className = '.treeselect-demo-no-groups'

export const runNoGroupsExample = (Treeselect) => {
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: 4,
    options: options,
    isSingleSelect: true,
    showTags: false,
    zeroLevelItemPadding: 20
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('singleSelect: Selected value ', e.detail)
  })
}
