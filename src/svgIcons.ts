import { IconsType } from './treeselectTypes'

export const icons: IconsType = {
  arrowUp:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
  arrowDown:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowRight:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  attention:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  clear:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  cross:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  check:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  partialCheck:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
}

export const appendIconToElement = (icon: string | HTMLElement, element: HTMLElement) => {
  element.innerHTML = ''

  if (typeof icon === 'string') {
    element.innerHTML = icon
  } else {
    const insertedIcon = icon.cloneNode(true)
    element.appendChild(insertedIcon)
  }
}

export const getDefaultIcons = (iconsFromProps: Partial<IconsType> | undefined) => {
  const newIcons = iconsFromProps ? { ...iconsFromProps } : {}

  Object.keys(icons).forEach((key) => {
    const iconValue = newIcons[key as keyof IconsType]

    if (!iconValue) {
      newIcons[key as keyof IconsType] = icons[key as keyof IconsType]
    }
  })

  return newIcons as IconsType
}
