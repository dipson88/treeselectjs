# Treeselect JS component

A multi-select js component with nested options.

- Full key support (ArrowUp, ArrowDown, Space, ArrowLeft, ArrowRight, Enter)
- Screen sensitive direction

**Live Demo:** https://dipson88.github.io/treeselectjs/

![Example img](https://github.com/dipson88/treeselectjs/blob/main/treeselectjs.png?raw=true)

### Getting Started
It is a js module.

```bash
npm install --save treeselectjs
```
You should import treeselectjs
```
import Treeselect from 'treeselectjs'
```
and css file with styles
```
@import 'treeselectjs/dist/treeselect-js.css'
```

Example
```
import Treeselect from 'treeselectjs'

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

const slot = document.createElement('div')
slot.innerHTML='<a class="test" href="">Slot example text</a>'

const domElement = document.querySelector('.treeselect-demo')
const treeselect = new Treeselect({
  parentHtmlContainer: domElement,
  value: ['West End', 'Paris', 'Lyon'],
  options: options,
  alwaysOpen: true,
  appendToBody: true,
  listSlotHtmlComponent: slot,
  disabled: false,
  emptyText: 'No data text'
})

treeselect.srcElement.addEventListener('input', (e) => {
  console.log(e.detail)
})
```

### Props
Name  | Type (default) | Description
------------- | ------------- | -------------
parentHtmlContainer  | HTMLElement (required!) | It should be a HTML element (div), it will be changed to the list container.
value  | Array[String] ([]) | It is an array with ids.
options  | Array[Object] ([]) | It is an array of objects { name: String, value: String, children: [] }, where children are the same array of objects. Do not use duplicated values.
openLevel  | Number (0) | All groups will be opened to this level.
appendToBody  | Boolean (false) | List will be appended to the body instead of the input container.
alwaysOpen  | Boolean (false) | List will be always opened.
showTags  | Boolean (true) | Selected values look like tags. The false value shows results as '{count} elements selected'.
clearable  | Boolean (true) | Clear icon is available.
searchable  | Boolean (true) | Search is available.
placeholder  | String ('Search...') | Placeholder text.
grouped | Boolean (true) | Show groups in the input and group leafs if all group selected.
listSlotHtmlComponent | HTMLElement (null) | It should be a HTML element, it will be append to the end of the list.
disabled | Boolean (false) | List will be disabled.
emptyText | String ('No results found...') | A empty list text.
staticList | Boolean (false) | Add the list as a static DOM element. List doesn't overlap content. This prop will be ignored if you use `appendToBody`.

### Emits
Name  | Return Type | Description
------------- | ------------- | -------------
input  | Array[String] | Returns selected ids without groups, only leafs.

### Methods
Name  | Params | Description
------------- | ------------- | -------------
updateValue  | Array[String] | Update selected values.
mount  | None | Helps to remount and update settings. Change settings that you need (treeselect.appendToBody = true), then call mount().
destroy  | None | Deletes elements from the DOM. Call mount() to add treeselect to the DOM with previously saved internal data. If you need to recreate treeselect with default params - call **new Treeselect(options)**.

### Notes
1) If you want to change the padding of the element you can use CSS selector. I've added **'group'** and **'level'** attributes, but you have to use **!important**.
2) If you want to update props, set props to the entity of the class and then call **mount()** method.
3) Use **updateValue()** method to update only the value.
4) If you need to delete List from the DOM when you don't need treeselect anymore - call **destroy()**.
5) Do not use **duplicated** values for the options. You will see a error with duplicated values.
6) **Value** inside the **options** prop should be a **String**.