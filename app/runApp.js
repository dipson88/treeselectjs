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

export const runApp = (Treeselect) => {
  const slot = document.createElement('div')
  slot.innerHTML = '<a class="treeselect-demo__slot" href="">Click!</a>'

  const domElement = document.querySelector('.treeselect-demo')
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [4, 7, 8],
    options: options,
    listSlotHtmlComponent: slot
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('Selected value:', e.detail)
  })

  slot.addEventListener('click', (e) => {
    e.preventDefault()
    alert('Slot click!')
  })
}
