const icons = {
  check: 'ico-check',
  shield: 'ico-shield'
}

const options = [
  {
    name: 'England',
    value: 1,
    htmlAttr: { ico: icons.check },
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
            children: [],
            htmlAttr: { ico: icons.check }
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
    htmlAttr: { ico: icons.shield },
    children: [
      {
        name: 'Paris',
        value: 7,
        children: [],
        htmlAttr: { ico: icons.shield }
      },
      {
        name: 'Lyon',
        value: 8,
        children: []
      }
    ]
  }
]

const svgCheck = `<svg style="position: absolute;top:0;left: 2px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 229.5 229.5" xml:space="preserve">
  <path d="M214.419,32.12c-0.412-2.959-2.541-5.393-5.419-6.193L116.76,0.275c-1.315-0.366-2.704-0.366-4.02,0L20.5,25.927  c-2.878,0.8-5.007,3.233-5.419,6.193c-0.535,3.847-12.74,94.743,18.565,139.961c31.268,45.164,77.395,56.738,79.343,57.209  c0.579,0.14,1.169,0.209,1.761,0.209s1.182-0.07,1.761-0.209c1.949-0.471,48.076-12.045,79.343-57.209  C227.159,126.864,214.954,35.968,214.419,32.12z M174.233,85.186l-62.917,62.917c-1.464,1.464-3.384,2.197-5.303,2.197  s-3.839-0.732-5.303-2.197l-38.901-38.901c-1.407-1.406-2.197-3.314-2.197-5.303s0.791-3.897,2.197-5.303l7.724-7.724  c2.929-2.928,7.678-2.929,10.606,0l25.874,25.874l49.89-49.891c1.406-1.407,3.314-2.197,5.303-2.197s3.897,0.79,5.303,2.197  l7.724,7.724C177.162,77.508,177.162,82.257,174.233,85.186z"/>
  </svg>`
const svgShield = `<svg style="position: absolute;top:0;left: 2px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 229.5 229.5" xml:space="preserve">
  <path d="M214.419,32.12c-0.412-2.959-2.541-5.393-5.419-6.193l-92.24-25.652c-1.314-0.366-2.704-0.366-4.019,0l-92.24,25.652  c-2.879,0.8-5.008,3.233-5.419,6.193c-0.535,3.847-12.74,94.744,18.565,139.961c31.268,45.165,77.395,56.739,79.343,57.209  c0.579,0.14,1.169,0.209,1.761,0.209s1.182-0.07,1.761-0.209c1.949-0.471,48.076-12.045,79.343-57.209  C227.159,126.864,214.954,35.967,214.419,32.12z M182.383,162.719c-27.12,39.174-67.744,48.986-67.744,48.986V114.75H30.918  c-4.861-36.388,0.334-73.765,0.334-73.765l83.386-23.19v96.955h83.721C195.996,132.443,191.256,149.903,182.383,162.719z"/>
  </svg>`

const className = '.treeselect-demo-icons'

export const runIconsExample = (Treeselect) => {
  let isIconsWereInserted = false

  const domElement = document.querySelector(className)
  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [1, 4, 7, 8],
    options: options,
    openLevel: 3,
    openCallback: () => {
      // We need to insert icons on open, only first time to avoid duplicates
      if (isIconsWereInserted) {
        return
      }

      isIconsWereInserted = true

      Array.from(domElement.querySelectorAll('[ico]')).forEach((item) => {
        const ico = item.getAttribute('ico')
        const countOfChildNodes = item.childNodes.length
        let iconToInsert = null

        if (ico === icons.check) {
          iconToInsert = svgCheck
        }

        if (ico === icons.shield) {
          iconToInsert = svgShield
        }

        if (iconToInsert) {
          const iconElement = document.createElement('div')
          iconElement.setAttribute('style', 'height: 20px; width: 25px; position: relative;')
          iconElement.innerHTML = iconToInsert
          item.insertBefore(iconElement, item.childNodes[countOfChildNodes - 1])
        }
      })
    }
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('independentNodes: Selected value ', e.detail)
  })
}
