type Classes = {
  parent: string
  input: {
    arrow: string
    base: string
    bottom: string
    clear: string
    edit: string
    focused: string
    opened: string
    tags: string
    tagsElement: string
    top: string
  }
  list: {
    base: string
    bottom: string
    bottomToBody: string
    empty: string
    item: string
    itemArrow: string
    itemChecked: string
    itemDisabled: string
    itemFocused: string
    itemGroup: string
    itemHidden: string
    itemPartialChecked: string
    itemScrollNotVisible: string
    itemNonSelectableGroup: string
    slot: string
    top: string
    topToBody: string
    static: string
  }
  shadowRoot: {
    parent: string
  }
}

export const classes: Classes = {
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
    bottomToBody: 'treeselect-list--bottom-to-body',
    empty: 'treeselect-list__empty',
    item: 'treeselect-list__item',
    itemArrow: 'treeselect-list__item-icon',
    itemChecked: 'treeselect-list__item--checked',
    itemDisabled: 'treeselect-list__item--disabled',
    itemFocused: 'treeselect-list__item--focused',
    itemGroup: 'treeselect-list__item--group',
    itemHidden: 'treeselect-list__item--hidden',
    itemPartialChecked: 'treeselect-list__item--partial-checked',
    itemScrollNotVisible: 'treeselect-list__item--scroll-not-visible',
    itemNonSelectableGroup: 'treeselect-list__item--non-selectable-group',
    slot: 'treeselect-list__slot',
    top: 'treeselect-list--top',
    topToBody: 'treeselect-list--top-to-body',
    static: 'treeselect-list--static'
  },
  shadowRoot: {
    parent: 'treeselect-shadow-root'
  }
}

export const classesSelectors: Classes = {
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
    bottomToBody: `.${classes.list.bottomToBody}`,
    empty: `.${classes.list.empty}`,
    item: `.${classes.list.item}`,
    itemArrow: `.${classes.list.itemArrow}`,
    itemChecked: `.${classes.list.itemChecked}`,
    itemDisabled: `.${classes.list.itemDisabled}`,
    itemFocused: `.${classes.list.itemFocused}`,
    itemGroup: `.${classes.list.itemGroup}`,
    itemHidden: `.${classes.list.itemHidden}`,
    itemPartialChecked: `.${classes.list.itemPartialChecked}`,
    itemScrollNotVisible: `.${classes.list.itemScrollNotVisible}`,
    itemNonSelectableGroup: `.${classes.list.itemNonSelectableGroup}`,
    slot: `.${classes.list.slot}`,
    top: `.${classes.list.top}`,
    topToBody: `.${classes.list.topToBody}`,
    static: `.${classes.list.static}`
  },
  shadowRoot: {
    parent: `.${classes.shadowRoot.parent}`
  }
}
