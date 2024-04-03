const options = [
  {
    name: 'England',
    value: 0,
    children: [
      {
        name: 'London',
        value: 1,
        children: [
          {
            name: 'Chelsea',
            value: 2,
            children: []
          },
          {
            name: 'West End',
            value: 3,
            children: []
          }
        ]
      },
      {
        name: 'Brighton',
        value: 4,
        children: []
      }
    ]
  },
  {
    name: 'France',
    value: 5,
    children: [
      {
        name: 'Paris',
        value: 6,
        children: []
      },
      {
        name: 'Lyon',
        value: 7,
        children: []
      }
    ]
  }
]

const className = '.treeselect-demo-single-select'

export const runSingleSelectExample = (Treeselect) => {
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: 0,
    options: options,
    isSingleSelect: true,
    showTags: false
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('singleSelect: Selected value ', e.detail)
  })
}
