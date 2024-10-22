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
    edit: 'treeselect-input__edit',
    focused: 'treeselect-input--focused',
    opened: 'treeselect-input--opened',
    tags: 'treeselect-input__tags',
    tagsElement: 'treeselect-input__tags-element',
    top: 'treeselect-input--top'
  },
  list: {
    base: 'treeselect-list',
    bottom: 'treeselect-list--bottom',
    empty: 'treeselect-list__empty',
    item: 'treeselect-list__item',
    itemArrow: 'treeselect-list__item-icon',
    itemChecked: 'treeselect-list__item--checked',
    itemDisabled: 'treeselect-list__item--disabled',
    itemFocused: 'treeselect-list__item--focused',
    itemGroup: 'treeselect-list__item--group',
    itemHidden: 'treeselect-list__item--hidden',
    itemPartialChecked: 'treeselect-list__item--partial-checked',
    slot: 'treeselect-list__slot',
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
    edit: `.${classes.input.edit}`,
    focused: `.${classes.input.focused}`,
    opened: `.${classes.input.opened}`,
    tags: `.${classes.input.tags}`,
    tagsElement: `.${classes.input.tagsElement}`,
    top: `.${classes.input.top}`
  },
  list: {
    base: `.${classes.list.base}`,
    bottom: `.${classes.list.bottom}`,
    empty: `.${classes.list.empty}`,
    item: `.${classes.list.item}`,
    itemArrow: `.${classes.list.itemArrow}`,
    itemChecked: `.${classes.list.itemChecked}`,
    itemDisabled: `.${classes.list.itemDisabled}`,
    itemFocused: `.${classes.list.itemFocused}`,
    itemGroup: `.${classes.list.itemGroup}`,
    itemHidden: `.${classes.list.itemHidden}`,
    itemPartialChecked: `.${classes.list.itemPartialChecked}`,
    slot: `.${classes.list.slot}`,
    top: `.${classes.list.top}`
  }
}
