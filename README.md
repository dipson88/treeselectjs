# Treeselect JS component

A multi-select js component with nested options.

- Full key support (ArrowUp, ArrowDown, Space, ArrowLeft, ArrowRight, Enter)
- Screen sensitive direction
- Typescript support

**Live Demo:** https://dipson88.github.io/treeselectjs/

![Example img](https://github.com/dipson88/treeselectjs/blob/main/treeselectjs.png?raw=true)

### Getting Started
```bash
npm install --save treeselectjs
```
Import treeselectjs (ES)
```
import { Treeselect } from 'treeselectjs'
```
Import treeselectjs (CommonJS)
```
const { Treeselect } = require('treeselectjs')
```
Import css file with styles
```
@import 'treeselectjs/dist/treeselectjs.css'
```

Example
```
import { Treeselect } from 'treeselectjs'

const options = [
  {
    name: 'England',
    value: 'England',
    children: [
      {
        name: 'London',
        value: 'London',
        children: [
          {
            name: 'Chelsea',
            value: 'Chelsea',
            children: []
          },
          {
            name: 'West End',
            value: 'West End',
            children: []
          }
        ]
      },
      {
        name: 'Brighton',
        value: 'Brighton',
        children: []
      }
    ]
  },
  {
    name: 'France',
    value: 'France',
    children: [
      {
        name: 'Paris',
        value: 'Paris',
        children: []
      },
      {
        name: 'Lyon',
        value: 'Lyon',
        children: []
      }
    ]
  }
]

// Use slot if you need
const slot = document.createElement('div')
slot.innerHTML='<a class="treeselect-demo__slot" href="">Click!</a>'

const domElement = document.querySelector('.treeselect-demo')
const treeselect = new Treeselect({
  parentHtmlContainer: domElement,
  value: ['West End', 'Paris', 'Lyon'],
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
```

### Props
Name  | Type (default) | Description
------------- | ------------- | -------------
**parentHtmlContainer**  | HTMLElement (required!) | It should be a HTML element (div), it will be changed to the list container.
**value**  | Array[String \| Number] ([]) | An array of `value` from `options` prop. This value will be selected on load of the treeselect. You can call `updateValue` to update prop or set value `treeselect.value` and call `mount`. The `value` changes if you check/uncheck checkboxes or remove tags from the input.
**options**  | Array[Object] ([]) | It is an array of objects ```{ name: String, value: String, children: [] }```, where children are the same array of objects. Do not use duplicated values.
**openLevel**  | Number (0) | All groups will be opened to this level.
**appendToBody**  | Boolean (false) | List will be appended to the body instead of the input container.
**alwaysOpen**  | Boolean (false) | List will be always opened. You can use it for comfortable style changing. If you what to use it as an opened list, turn `staticList` to `true`.
**showTags**  | Boolean (true) | Selected values look like tags. The false value shows results as '{count} elements selected'. You can change text if you use `tagsCountText` prop. For one selected element, you will see a name of this element.
**tagsCountText**  | String ('elements selected') | This text will be shown if you use 'showTags'. This text will be inserted after the count of the selected elements - ```'{count} {tagsCountText}'```.
**showCount** | Boolean (false) | Shows count of children near the group's name.
**clearable**  | Boolean (true) | Clear icon is available.
**searchable**  | Boolean (true) | Search is available.
**placeholder**  | String ('Search...') | Placeholder text.
**grouped** | Boolean (true) | Show groups in the input and group leafs if all group selected.
**listSlotHtmlComponent** | HTMLElement (null) | It should be a HTML element, it will be append to the end of the list.
**disabled** | Boolean (false) | List will be disabled.
**emptyText** | String ('No results found...') | A empty list text.
**staticList** | Boolean (false) | Add the list as a static DOM element. List doesn't overlap content. This prop will be ignored if you use `appendToBody`.
**id** | String ('') | id attribute for the accessibility.
**isSingleSelect** | Boolean (false) | Converts multi-select to the single value select. Checkboxes will be removed. You should pass only one id instead of array of values. Also you can set **showTags** to false. It helps to show treeselect as a dropdown.
**isGroupedValue** | Boolean (false) | Return groups if they selected instead of separate ids. Treeselect returns only leaves ids by default.
**disabledBranchNode** | Boolean (false) | It is impossible to select groups. You can select only leaves.
**direction** | String (auto) | A force direction for the list. Supported values: `auto`, `top`, `bottom`.
**iconElements** | Object({ arrowUp, ... }) | Object contains all svg icons. You can use HTMLElement or a String to reset values from the default Object. Object: ```iconElements: { arrowUp, arrowDown, arrowRight, attention, clear, cross, check, partialCheck }```. After reset of icon you have to update styles if it is necessary, use `alwaysOpen` prop for more comfortable work with styles changes.
**inputCallback** | (value) => void (undefined) | Callback method for `input` if you don't what use eventListener.
**openCallback** | (value) => void (undefined) | Callback method for `open` if you don't what use eventListener.
**closeCallback** | (value) => void (undefined) | Callback method for `close` if you don't what use eventListener.

### Emits
Name  | Return Type | Description
------------- | ------------- | -------------
**input**  | Array[String \| Number] | Returns selected ids, action is triggered on change the list value. Add `eventListener` or use `inputCallback` prop to get value.
**open**  | Array[String \| Number] | Returns selected ids, action is triggered on opening the list. Add `eventListener` or use `openCallback` prop to get value.
**close**  | Array[String \| Number] | Returns selected ids, action is triggered on closing the list. Add `eventListener` or use `closeCallback` prop to get value.

### Methods
Name  | Params | Description
------------- | ------------- | -------------
**updateValue**  | Array[String \| Number] | Update selected values.
**mount**  | None | Helps to remount and update settings. Change settings that you need (treeselect.appendToBody = true), then call mount().
**destroy**  | None | Deletes elements from the DOM. Call mount() to add treeselect to the DOM with previously saved internal data. If you need to recreate treeselect with default params - call ```new Treeselect(options)```.
**focus**  | None | Focuses treeselect input without open/close state changes.
**toggleOpenClose**  | None | Open or close treeselect list and focus treeselect input.

### Notes
1) If you want to change the padding of the element you can use CSS selector. I've added **'group'** and **'level'** attributes, but you have to use **!important**.
2) If you want to update props, set props to the entity of the class and then call **mount()** method.
3) Use **updateValue()** method to update only the value.
4) If you need to delete List from the DOM when you don't need treeselect anymore - call **destroy()**.
5) Do not use **duplicated** values for the options. You will see a error with duplicated values.
6) **Value** prop inside the **options** prop should be a **String** or **Number**.
7) If you use **isSingleSelect** prop, you should pass only a single **id** as a value.
8) If you use **isSingleSelect** prop, you can set **showTags** to false. It helps to show treeselect as a dropdown. Also you can disable selecting of group's nodes with help of **disabledBranchNode**.