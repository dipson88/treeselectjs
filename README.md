# Treeselect JS Vue component

It is a wrapper for https://www.npmjs.com/package/treeselectjs

A multi-select js component with nested options.

- Full key support (ArrowUp, ArrowDown, Space, ArrowLeft, ArrowRight, Enter)
- Screen sensitive direction
- Typescript support

Build data:
- vue-treeselectjs.mjs  4.63 kB │ gzip: 1.55 kB
- vue-treeselectjs.umd.js  3.58 kB │ gzip: 1.41 kB
- vue-treeselectjs.css  8.45 kB │ gzip: 1.58 kB

**Live Demo:** https://dipson88.github.io/treeselectjs/

![Example img](https://github.com/dipson88/vue-treeselectjs/blob/main/treeselectjs.png?raw=true)

### Support
You can buy me a coffee if you want to support my work. Thank you!

<a href="https://www.buymeacoffee.com/dipson88" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

### Getting Started
```bash
npm install --save vue-treeselectjs
```
Import vue-treeselectjs (ES)
```
import Treeselect from 'vue-treeselectjs'
import 'vue-treeselectjs/dist/vue-treeselectjs.css'
```

Import vue-treeselectjs (UMD)
```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/treeselectjs@0.14.0/dist/treeselectjs.umd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-treeselectjs@0.9.0/dist/vue-treeselectjs.umd.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-treeselectjs@0.9.0/dist/vue-treeselectjs.css" />
  </head>
  <body>
      <div id="app">
        <vue-treeselect />
      </div>
      
      <script>
        const { createApp } = Vue
        const Treeselect = window.VueTreeselect;

        createApp({
          components: {
            VueTreeselect: Treeselect,
          }
        }).mount('#app')
      </script>
  </body>
</html>
```

All Available Imports
```
import Treeselect, { DirectionType, IconsType, OptionType, TreeselectValue, ... } from 'vue-treeselectjs'
```

Example
```
<template>
  <div class="App">
    <!-- Option 1 -->
    <Treeselect
      :model-value="modelValue"
      :options="options"
      @update:modelValue="onInput"
    >
      <div>Slot Content</div>
    </Treeselect>

    <!-- Option 2 -->
    <Treeselect
      v-model="modelValue"
      :options="options"
    >
      <div>Slot Content</div>
    </Treeselect>

    <!-- Option 3 -->
    <Treeselect
      :model-value="modelValue"
      :options="options"
      @input="onInput"
    >
      <div>Slot Content</div>
    </Treeselect>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Treeselect, { TreeselectValue } from 'vue-treeselectjs'
import 'vue-treeselectjs/dist/vue-treeselectjs.css'

export default defineComponent({
  name: 'App',
  components: {
    Treeselect
  },
  setup() {
    const options = ref([
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
    ])

    const modelValue = ref<TreeselectValue>([3])

    // Also for value type, you can use: string | number | (string | number)[] | null
    const onInput = (value: TreeselectValue) => {
      console.log('onInput', value)
    }

    return {
      onInput,
      options,
      modelValue
    }
  }
})
</script>
```
---

### Props

#### Core props
Name  | Type (default) | Description
------------- | ------------- | -------------
**model-value**  | Array[String \| Number] \| String \| Number \| null ([]) | Selected value(s): array of ids (multi-select) or single id (single-select with `isSingleSelect`). Selected on load; updates when checkboxes/tags change.
**options**  | Array[Object] ([]) | It is an array of objects ```{name: String, value: String \| Number, disabled?: Boolean, htmlAttr?: object, isGroupSelectable?: boolean, children: [] }```, where children are the same array of objects. Do not use duplicated `value` field. But you can use duplicated names. [Read more](#option-description).
**disabled** | Boolean (false) | List will be disabled.
**id** | String ('') | id attribute for the accessibility.
**ariaLabel** | String ('') | aria-label attribute for the accessibility.
**isSingleSelect** | Boolean (false) | Converts multi-select to the single value select. Checkboxes will be removed. You should pass only one id instead of array of values. Also you can set **showTags** to false. It helps to show treeselect as a dropdown.
**isGroupedValue** | Boolean (false) | Return groups if they selected instead of separate ids. Treeselect returns only leaves ids by default.
**isIndependentNodes** | Boolean (false) | All nodes in treeselect work as an independent entity. Check/uncheck action ignore children/parent updates workflow. Disabled nodes ignore children/parent workflow as well.
**rtl** | Boolean (false) | RTL mode.
**isBoostedRendering** | Boolean (false) | ***Experimental*** - Improves list rendering performance by using visibility-based optimizations and IntersectionObserver. Useful for efficiently rendering large lists.

#### List settings props
Name  | Type (default) | Description
------------- | ------------- | -------------
**disabledBranchNode** | Boolean (false) | It is impossible to select groups. You can select only leaves.
**openLevel**  | Number (0) | All groups will be opened to this level.
**appendToBody**  | Boolean (false) | List will be appended to the body instead of the input container.
**alwaysOpen**  | Boolean (false) | List will be always opened. You can use it for comfortable style changing. If you want to use it as an opened list, turn `staticList` to `true`.
**staticList** | Boolean (false) | Add the list as a static DOM element. List doesn't overlap content. This prop will be ignored if you use `appendToBody`.
**emptyText** | String ('No results found...') | Empty list text.
**direction** | String (auto) | A force direction for the list. Supported values: `auto`, `top`, `bottom`.
**expandSelected** | Boolean (false) | All groups which have checked values will be expanded on the init.
**saveScrollPosition** | Boolean (true) | The list saves the last scroll position before close. If you open the list your scroll will be on the previous position. If you set the value to `false` - the scroll will have position 0 and the first item will be focused every time.
**listClassName** | String ('') | A class name for list. Useful to change styles for `appendToBody` mode.

#### Input settings props
Name  | Type (default) | Description
------------- | ------------- | -------------
**showTags**  | Boolean (true) | Selected values look like tags. The false value shows results as '{count} elements selected'. You can change text if you use `tagsCountText` prop. For one selected element, you will see a name of this element.
**tagsCountText**  | String ('elements selected') | Shown when `showTags` is false, after the count: `'{count} {tagsCountText}'`.
**tagsSortFn** | `(a: TagsSortItem, b: TagsSortItem) => number` \| `null` (null) | Defines the sorting order for tags in the input field.<br>`TagsSortItem` - `{ value: ValueOptionType, name: string }`.
**showCount** | Boolean (false) | Shows count of children near the group's name.
**clearable**  | Boolean (true) | Clear icon is available.
**searchable**  | Boolean (true) | Search is available.
**placeholder**  | String ('Select...') | Placeholder text.
**grouped** | Boolean (true) | Show groups in the input and group leafs if all group selected.

#### Emits
Name  | Type (default) | Description
------------- | ------------- | -------------
**update:modelValue** | (value) => void (undefined) | Emitted when the selection changes (used by `v-model`).
**input** | (value) => void (undefined) | Returns selected values when the list value changes.
**open** | (value) => void (undefined) | Returns selected values when the list is opened.
**close** | (value) => void (undefined) | Returns selected values when the list is closed.
**name-change** | (name) => void (undefined) | Returns the selected name in the input when it changes.
**search**  | (value) => void (undefined) | Returns the search string when the user types. You can build autocomplete with this emit.
**open-close-group** | ({ groupId, isClosed }: { groupId: ValueOptionType, isClosed: boolean }) => void (undefined) | Returns groupId and open/closed status when a group is expanded or collapsed.

#### Additional props
Name  | Type (default) | Description
------------- | ------------- | -------------
**iconElements** | Object({ arrowUp, ... }) | Object contains all svg icons. You can use HTMLElement or a String to reset values from the default Object. Object: ```iconElements: { arrowUp, arrowDown, arrowRight, attention, clear, cross, check, partialCheck }```. After reset of icon you have to update styles if it is necessary, use `alwaysOpen` prop for more comfortable work with styles changes.

---

#### Slots
Name  | Type (default) | Description
------------- | ------------- | -------------
**default** | undefined | The slot's content will be mounted at the end of the list.

---

### Option description
This is the shape of one option in the [`options`](#core-props) prop:
Name  | Type | Description
------------- | ------------- | -------------
**value** | String \| Number (required!) | It is a value of the node. **It should be unique!**
**name** | String (required!) | It is the name of the node. **Can be duplicated.**
**disabled** | Boolean (optional) | The node will be disabled. It is an optional field, you can skip it if no need to work with disabled values.
**htmlAttr** | Object (optional) | The object of the HTML attributes, the value of the object should be a String type. These attributes will be merged into the node HTML tag.
**isGroupSelectable** | Boolean (optional - true) | Determines whether groups are selectable. This behavior is similar to the disabledBranchNode prop but applies specifically to groups. It does not affect regular (non-group) items.
**children** | {name: String, value: String, disabled?: Boolean, htmlAttr?: object, children: [] }[] | Children are the same array of objects.

---

### Customizing colors

The component uses CSS custom properties (variables) for colors. Override them on the `.treeselect` container to match your theme:

| Variable | Default | Description |
|----------|---------|-------------|
| `--treeselect-border-color` | `#d7dde4` | Border color of input and list |
| `--treeselect-bg` | `#ffffff` | Background of the input |
| `--treeselect-border-focus` | `#101010` | Border color when focused |
| `--treeselect-tag-bg` | `#d7dde4` | Background of selected tags |
| `--treeselect-tag-bg-hover` | `#c5c7cb` | Tag background on hover |
| `--treeselect-tag-remove-hover` | `#eb4c42` | Remove (×) icon color on hover |
| `--treeselect-icon` | `#c5c7cb` | Arrow and clear icons |
| `--treeselect-icon-hover` | `#838790` | Icons on hover |
| `--treeselect-item-counter` | `#838790` | Group item count text |
| `--treeselect-item-focus-bg` | `#f0ffff` | List item background when focused |
| `--treeselect-item-selected-bg` | `#e9f1f1` | List item background when selected |
| `--treeselect-item-disabled-text` | `#c5cbca` | Disabled item text color |
| `--treeselect-checkbox-bg` | `#ffffff` | Checkbox background |
| `--treeselect-checkbox-border-color` | `#d7dde4` | Checkbox border color |
| `--treeselect-checkbox-checked-bg` | `#52c67e` | Checkbox fill when checked |
| `--treeselect-checkbox-checked-icon` | `#ffffff` | Checkmark color |

Example:

```css
body {
  .treeselect {
    --treeselect-border-color: #444;
    --treeselect-bg: #1e1e1e;
    --treeselect-border-focus: #6cb6ff;
    --treeselect-tag-bg: #333;
    --treeselect-tag-bg-hover: #444;
    --treeselect-item-focus-bg: #2a2a2a;
    --treeselect-item-selected-bg: #2d3a3a;
    --treeselect-checkbox-checked-bg: #52c67e;
    /* override other variables as needed */
  }
}
```

---

### Notes
1) If you want to change the padding of the element you can use CSS selector. I've added **'group'** and **'level'** attributes, but you have to use **!important**.
2) Do not use **duplicated** values for the options. You will see an error with duplicated values. But you can use duplicated names.
3) **Value** prop inside the **options** prop should be a **String** or **Number**.
4) If you use **isSingleSelect** prop, you should pass only a single **value** without an array.
5) If you use **isSingleSelect** prop, you can set **showTags** to false. It helps to show treeselect as a dropdown. Also you can disable selecting of group's nodes with help of **disabledBranchNode**.
6) If you use a large list of options and see a problem with performance, try to use **isBoostedRendering** prop.
