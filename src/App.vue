<template>
  <div class="App">
    <Treeselect
      :value="value"
      :options="options"
      @input="onInput"
    >
      <div>Slot Content</div>
    </Treeselect>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Treeselect from './Treeselect.vue'
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

    const value = ref<number[]>([3])

    // Also for value type, you can import { TreeselectValue } from 'react-treeselectjs'
    const onInput = (value: string | number | (string | number)[] | null) => {
      console.log('onInput', value)
    }

    return {
      onInput,
      options,
      value
    }
  }
})
</script>
