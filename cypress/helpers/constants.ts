export const titleSelectors = {
  EnglandGroup: '[title="England"]',
  LondonGroup: '[title="London"]',
  ChelseaItem: '[title="Chelsea"]',
  WestEndItem: '[title="West End"]',
  BrightonItem: '[title="Brighton"]',
  FranceGroup: '[title="France"]',
  ParisItem: '[title="Paris"]',
  LyonItem: '[title="Lyon"]'
}

export const classes = {
  parent: 'treeselect',
  input: {
    arrow: 'treeselect-input__arrow',
    base: 'treeselect-input',
    bottom: 'treeselect-input--bottom',
    clear: 'treeselect-input__clear',
    focused: 'treeselect-input--focused',
    opened: 'treeselect-input--opened',
    tagsElement: 'treeselect-input__tags-element',
    top: 'treeselect-input--top'
  },
  list: {
    base: 'treeselect-list',
    bottom: 'treeselect-list--bottom',
    itemArrow: 'treeselect-list__item-icon',
    itemChecked: 'treeselect-list__item--checked',
    itemDisabled: 'treeselect-list__item--disabled',
    itemFocused: 'treeselect-list__item--focused',
    itemGroup: 'treeselect-list__item--group',
    itemHidden: 'treeselect-list__item--hidden',
    itemPartialChecked: 'treeselect-list__item--partial-checked',
    top: 'treeselect-list--top'
  }
}

export const classesSelectors = {
  parent: `.${classes.parent}`,
  input: {
    arrow: `.${classes.input.arrow}`,
    base: `.${classes.input.base}`,
    bottom: `.${classes.input.bottom}`,
    clear: `.${classes.input.clear}`,
    focused: `.${classes.input.focused}`,
    opened: `.${classes.input.opened}`,
    tagsElement: `.${classes.input.tagsElement}`,
    top: `.${classes.input.top}`
  },
  list: {
    base: `.${classes.list.base}`,
    bottom: `.${classes.list.bottom}`,
    itemArrow: `.${classes.list.itemArrow}`,
    itemChecked: `.${classes.list.itemChecked}`,
    itemDisabled: `.${classes.list.itemDisabled}`,
    itemFocused: `.${classes.list.itemFocused}`,
    itemGroup: `.${classes.list.itemGroup}`,
    itemHidden: `.${classes.list.itemHidden}`,
    itemPartialChecked: `.${classes.list.itemPartialChecked}`,
    top: `.${classes.list.top}`
  }
}
