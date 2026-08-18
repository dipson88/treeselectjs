// biome-ignore lint/correctness/noUnusedImports: React may be required by JSX transform or tooling
import React, { type CSSProperties, useCallback, useMemo, useState } from 'react'
import 'treeselectjs/dist/treeselectjs.css'
import Treeselect, { type OptionType, type TreeselectValue } from './Treeselect'

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

const pageStyle: CSSProperties = {
  display: 'grid',
  gap: 24,
  maxWidth: 900,
  margin: '0 auto',
  padding: 24,
  fontFamily: 'Arial, sans-serif',
}

const cardStyle: CSSProperties = {
  display: 'grid',
  gap: 12,
  padding: 16,
  border: '1px solid #d7dde4',
  borderRadius: 8,
}

const rowStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
}

const valueStyle: CSSProperties = {
  padding: 12,
  margin: 0,
  borderRadius: 6,
  background: '#f6f8fa',
  whiteSpace: 'pre-wrap',
}

const formatValue = (value: TreeselectValue) => {
  return value === undefined ? 'undefined' : JSON.stringify(value, null, 2)
}

const App = () => {
  const [cityOptions, setCityOptions] = useState(baseCityOptions)
  const [multiValue, setMultiValue] = useState<TreeselectValue>(['london', 'toronto'])
  const [singleValue, setSingleValue] = useState<TreeselectValue>('paris')
  const [groupedValue, setGroupedValue] = useState<TreeselectValue>([])
  const [independentValue, setIndependentValue] = useState<TreeselectValue>(['product-areas'])
  const [isDisabled, setIsDisabled] = useState(false)
  const [lastEvent, setLastEvent] = useState('Interact with a treeselect to see callback output.')

  const hasMadrid = useMemo(() => {
    return cityOptions[0]?.children.some((option) => option.value === 'madrid') ?? false
  }, [cityOptions])

  const logEvent = useCallback((name: string, value: unknown) => {
    setLastEvent(`${name}: ${typeof value === 'string' ? value : JSON.stringify(value)}`)
  }, [])

  const addMadridOption = useCallback(() => {
    setCityOptions((prevOptions) => {
      if (prevOptions[0]?.children.some((option) => option.value === 'madrid')) {
        return prevOptions
      }

      const [europeGroup, ...otherGroups] = prevOptions

      return [
        {
          ...europeGroup,
          children: [...europeGroup.children, { name: 'Madrid', value: 'madrid', children: [] }],
        },
        ...otherGroups,
      ]
    })
  }, [])

  return (
    <main style={pageStyle}>
      <header>
        <h1>React Treeselect examples</h1>
        <p>
          Examples below show the core wrapper mechanics: controlled values, option updates, callbacks, slots, and
          modes.
        </p>
      </header>

      <section style={cardStyle}>
        <h2>Controlled multi-select</h2>
        <p>
          Use array values for multi-select. This example also shows disabled nodes, search, group toggles, and children
          slot.
        </p>

        <Treeselect
          id="city-treeselect"
          ariaLabel="Choose cities"
          options={cityOptions}
          value={multiValue}
          disabled={isDisabled}
          openLevel={1}
          showCount
          expandSelected
          placeholder="Select cities"
          onInput={(value) => {
            setMultiValue(value)
            logEvent('onInput', value)
          }}
          onOpen={(value) => logEvent('onOpen', value)}
          onClose={(value) => logEvent('onClose', value)}
          onSearch={(value) => logEvent('onSearch', value)}
          onOpenCloseGroup={(groupId, isClosed) => logEvent('onOpenCloseGroup', { groupId, isClosed })}
        >
          <div style={{ padding: 8, textAlign: 'center' }}>Custom list slot content</div>
        </Treeselect>

        <div style={rowStyle}>
          <button type="button" onClick={() => setMultiValue(['berlin', 'new-york'])}>
            Set Berlin + New York
          </button>
          <button type="button" onClick={() => setMultiValue([])}>
            Clear value
          </button>
          <button type="button" onClick={addMadridOption} disabled={hasMadrid}>
            Add Madrid option
          </button>
          <button type="button" onClick={() => setIsDisabled((value) => !value)}>
            {isDisabled ? 'Enable' : 'Disable'}
          </button>
        </div>

        <pre style={valueStyle}>value: {formatValue(multiValue)}</pre>
      </section>

      <section style={cardStyle}>
        <h2>Single-select dropdown</h2>
        <p>Use a single id value with isSingleSelect. showTags=false makes it look like a regular dropdown.</p>

        <Treeselect
          options={cityOptions}
          value={singleValue}
          isSingleSelect
          showTags={false}
          disabledBranchNode
          placeholder="Select one city"
          onInput={(value) => {
            setSingleValue(value)
            logEvent('single onInput', value)
          }}
          onNameChange={(name) => logEvent('single onNameChange', name)}
        />

        <div style={rowStyle}>
          <button type="button" onClick={() => setSingleValue('toronto')}>
            Set Toronto
          </button>
          <button type="button" onClick={() => setSingleValue(null)}>
            Clear single value
          </button>
        </div>

        <pre style={valueStyle}>value: {formatValue(singleValue)}</pre>
      </section>

      <section style={cardStyle}>
        <h2>Grouped value</h2>
        <p>With isGroupedValue, selecting all children in a group can return the group id instead of every leaf id.</p>

        <Treeselect
          options={teamOptions}
          value={groupedValue}
          isGroupedValue
          openLevel={1}
          showTags={false}
          tagsCountText="selected"
          onInput={(value) => {
            setGroupedValue(value)
            logEvent('grouped onInput', value)
          }}
        />

        <div style={rowStyle}>
          <button type="button" onClick={() => setGroupedValue(['engineering'])}>
            Set Engineering group
          </button>
          <button type="button" onClick={() => setGroupedValue(['frontend'])}>
            Set Frontend leaf
          </button>
        </div>

        <pre style={valueStyle}>value: {formatValue(groupedValue)}</pre>
      </section>

      <section style={cardStyle}>
        <h2>Independent static tree</h2>
        <p>Independent nodes do not cascade parent/child selection. staticList + alwaysOpen renders the list inline.</p>

        <Treeselect
          options={featureOptions}
          value={independentValue}
          isIndependentNodes
          staticList
          alwaysOpen
          searchable={false}
          clearable={false}
          openLevel={1}
          onInput={(value) => {
            setIndependentValue(value)
            logEvent('independent onInput', value)
          }}
        />

        <pre style={valueStyle}>value: {formatValue(independentValue)}</pre>
      </section>

      <section style={cardStyle}>
        <h2>Last callback</h2>
        <pre style={valueStyle}>{lastEvent}</pre>
      </section>
    </main>
  )
}

export default App
