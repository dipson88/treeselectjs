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
import Treeselect, { TreeselectValue } from './Treeselect.vue'
import 'treeselectjs/dist/treeselectjs.css'

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

    // Also for value type, you can use value: string | number | (string | number)[] | null
    const onInput = (value: TreeselectValue) => {
      modelValue.value = value
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
