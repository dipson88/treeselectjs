<template>
  <main class="demo-page">
    <header>
      <h1>Vue Treeselect examples</h1>
      <p>
        Examples below show the core wrapper mechanics: v-model values, option updates, callbacks, slots, and modes.
      </p>
    </header>

    <section class="demo-card">
      <h2>Controlled multi-select</h2>
      <p>Use array values for multi-select. This example also shows disabled nodes, search, group toggles, and slot content.</p>

      <Treeselect
        id="city-treeselect"
        v-model="multiValue"
        aria-label="Choose cities"
        :options="cityOptions"
        :disabled="isDisabled"
        :open-level="1"
        show-count
        expand-selected
        placeholder="Select cities"
        @input="onMultiInput"
        @open="onOpen"
        @close="onClose"
        @search="onSearch"
        @open-close-group="onOpenCloseGroup"
      >
        <div class="demo-slot">Custom list slot content</div>
      </Treeselect>

      <div class="demo-actions">
        <button
          type="button"
          @click="multiValue = ['berlin', 'new-york']"
        >
          Set Berlin + New York
        </button>
        <button
          type="button"
          @click="multiValue = []"
        >
          Clear value
        </button>
        <button
          type="button"
          :disabled="hasMadrid"
          @click="addMadridOption"
        >
          Add Madrid option
        </button>
        <button
          type="button"
          @click="isDisabled = !isDisabled"
        >
          {{ isDisabled ? 'Enable' : 'Disable' }}
        </button>
      </div>

      <pre class="demo-value">value: {{ formatValue(multiValue) }}</pre>
    </section>

    <section class="demo-card">
      <h2>Single-select dropdown</h2>
      <p>Use a single id value with is-single-select. show-tags=false makes it look like a regular dropdown.</p>

      <Treeselect
        v-model="singleValue"
        :options="cityOptions"
        is-single-select
        :show-tags="false"
        disabled-branch-node
        placeholder="Select one city"
        @input="onSingleInput"
        @name-change="onSingleNameChange"
      />

      <div class="demo-actions">
        <button
          type="button"
          @click="singleValue = 'toronto'"
        >
          Set Toronto
        </button>
        <button
          type="button"
          @click="singleValue = null"
        >
          Clear single value
        </button>
      </div>

      <pre class="demo-value">value: {{ formatValue(singleValue) }}</pre>
    </section>

    <section class="demo-card">
      <h2>Grouped value</h2>
      <p>With is-grouped-value, selecting all children in a group can return the group id instead of every leaf id.</p>

      <Treeselect
        v-model="groupedValue"
        :options="teamOptions"
        is-grouped-value
        :open-level="1"
        :show-tags="false"
        tags-count-text="selected"
        @input="onGroupedInput"
      />

      <div class="demo-actions">
        <button
          type="button"
          @click="groupedValue = ['engineering']"
        >
          Set Engineering group
        </button>
        <button
          type="button"
          @click="groupedValue = ['frontend']"
        >
          Set Frontend leaf
        </button>
      </div>

      <pre class="demo-value">value: {{ formatValue(groupedValue) }}</pre>
    </section>

    <section class="demo-card">
      <h2>Independent static tree</h2>
      <p>Independent nodes do not cascade parent/child selection. static-list + always-open renders the list inline.</p>

      <Treeselect
        v-model="independentValue"
        :options="featureOptions"
        is-independent-nodes
        static-list
        always-open
        :searchable="false"
        :clearable="false"
        :open-level="1"
        @input="onIndependentInput"
      />

      <pre class="demo-value">value: {{ formatValue(independentValue) }}</pre>
    </section>

    <section class="demo-card">
      <h2>Last callback</h2>
      <pre class="demo-value">{{ lastEvent }}</pre>
    </section>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import 'treeselectjs/dist/treeselectjs.css'
import Treeselect, { type OptionType, type TreeselectValue } from './Treeselect.vue'

const baseCityOptions: OptionType[] = [
  {
    name: 'Europe',
    value: 'europe',
    children: [
      { name: 'London', value: 'london', children: [] },
      { name: 'Paris', value: 'paris', children: [] },
      { name: 'Berlin', value: 'berlin', children: [] },
    ],
  },
  {
    name: 'North America',
    value: 'north-america',
    children: [
      { name: 'New York', value: 'new-york', children: [] },
      { name: 'Toronto', value: 'toronto', children: [] },
      { name: 'Disabled city', value: 'disabled-city', disabled: true, children: [] },
    ],
  },
]

const teamOptions: OptionType[] = [
  {
    name: 'Engineering',
    value: 'engineering',
    isGroupSelectable: true,
    children: [
      { name: 'Frontend', value: 'frontend', children: [] },
      { name: 'Backend', value: 'backend', children: [] },
    ],
  },
  {
    name: 'Operations',
    value: 'operations',
    isGroupSelectable: true,
    children: [
      { name: 'Support', value: 'support', children: [] },
      { name: 'Success', value: 'success', children: [] },
    ],
  },
]

const featureOptions: OptionType[] = [
  {
    name: 'Product areas',
    value: 'product-areas',
    children: [
      { name: 'Dashboard', value: 'dashboard', children: [] },
      { name: 'Reports', value: 'reports', children: [] },
      { name: 'Billing', value: 'billing', children: [] },
    ],
  },
]

type OpenCloseGroupPayload = {
  groupId: TreeselectValue
  isClosed: boolean
}

const formatValue = (value: TreeselectValue) => {
  return value === undefined ? 'undefined' : JSON.stringify(value, null, 2)
}

export default defineComponent({
  name: 'App',
  components: {
    Treeselect,
  },
  setup() {
    const cityOptions = ref<OptionType[]>(baseCityOptions)
    const multiValue = ref<TreeselectValue>(['london', 'toronto'])
    const singleValue = ref<TreeselectValue>('paris')
    const groupedValue = ref<TreeselectValue>([])
    const independentValue = ref<TreeselectValue>(['product-areas'])
    const isDisabled = ref(false)
    const lastEvent = ref('Interact with a treeselect to see callback output.')

    const hasMadrid = computed(() => {
      return cityOptions.value[0]?.children.some((option) => option.value === 'madrid') ?? false
    })

    const logEvent = (name: string, value: unknown) => {
      lastEvent.value = `${name}: ${typeof value === 'string' ? value : JSON.stringify(value)}`
    }

    const addMadridOption = () => {
      if (cityOptions.value[0]?.children.some((option) => option.value === 'madrid')) {
        return
      }

      const [europeGroup, ...otherGroups] = cityOptions.value

      cityOptions.value = [
        {
          ...europeGroup,
          children: [...europeGroup.children, { name: 'Madrid', value: 'madrid', children: [] }],
        },
        ...otherGroups,
      ]
    }

    const onMultiInput = (value: TreeselectValue) => {
      multiValue.value = value
      logEvent('input', value)
    }

    const onSingleInput = (value: TreeselectValue) => {
      singleValue.value = value
      logEvent('single input', value)
    }

    const onGroupedInput = (value: TreeselectValue) => {
      groupedValue.value = value
      logEvent('grouped input', value)
    }

    const onIndependentInput = (value: TreeselectValue) => {
      independentValue.value = value
      logEvent('independent input', value)
    }

    return {
      addMadridOption,
      cityOptions,
      featureOptions,
      formatValue,
      groupedValue,
      hasMadrid,
      independentValue,
      isDisabled,
      lastEvent,
      multiValue,
      onClose: (value: TreeselectValue) => logEvent('close', value),
      onGroupedInput,
      onIndependentInput,
      onMultiInput,
      onOpen: (value: TreeselectValue) => logEvent('open', value),
      onOpenCloseGroup: (payload: OpenCloseGroupPayload) => logEvent('open-close-group', payload),
      onSearch: (value: string) => logEvent('search', value),
      onSingleInput,
      onSingleNameChange: (name: string) => logEvent('single name-change', name),
      singleValue,
      teamOptions,
    }
  },
})
</script>

<style lang="css">
.demo-page {
  display: grid;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.demo-card {
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid #d7dde4;
  border-radius: 8px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-slot {
  padding: 8px;
  text-align: center;
}

.demo-value {
  padding: 12px;
  margin: 0;
  border-radius: 6px;
  background: #f6f8fa;
  white-space: pre-wrap;
}
</style>
