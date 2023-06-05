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

const className = '.treeselect-demo-independent-nodes'

export const runIndependentNodesExample = (Treeselect) => {
  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [1, 4, 7, 8],
    options: options,
    isIndependentNodes: true
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('independentNodes: Selected value ', e.detail)
  })
}
