import Treeselect from './Treeselect'
import React, { useCallback, useState } from 'react'
import 'treeselectjs/dist/treeselectjs.css'

const App = () => {
  const [options, setOptions] = useState([
    {
      name: 'test',
      value: 1,
      children: []
    },
    {
      name: 'test2',
      value: 2,
      children: []
    }
  ])

  const [isSingleSelect, setIsSingleSelect] = useState(false)
  const [value, setValue] = useState([1])

  const onClickValue = () => {
    setValue([2])
  }

  const onClickSingleSelect = () => {
    setIsSingleSelect(true)
  }

  const onNameChange = useCallback((name: string) => {
    console.log('onNameChange', name)
  }, [])

  const onChangeOptions = () => {
    setOptions((prev) => [...prev, { name: 'test3', value: 3, children: [] }])
  }

  const onInput = useCallback((value: string | number | (string | number)[] | null) => {
    console.log('onInput', value)
  }, [])

  return (
    <div>
      <button onClick={onClickSingleSelect}>isSingleSelect</button>
      <button onClick={onClickValue}>value</button>
      <button onClick={onChangeOptions}>options</button>
      <Treeselect
        isSingleSelect={isSingleSelect}
        options={options}
        value={value}
        onInput={onInput}
        onNameChange={onNameChange}
      >
        <a
          style={{
            width: '100%',
            display: 'block',
            textAlign: 'center'
          }}
          href=""
        >
          Click
        </a>
      </Treeselect>
    </div>
  )
}

export default App
