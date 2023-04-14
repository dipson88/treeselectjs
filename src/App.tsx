import Treeselect from './Treeselect'
import React, { useState } from 'react'
import 'treeselectjs/dist/treeselectjs.css'

const App = () => {
  const options = [
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
  ]

  const [isSingleSelect, setIsSingleSelect] = useState(false)
  const [value, setValue] = useState([1])

  const onClickValue = () => {
    setValue([2])
  }

  const onClickSingleSelect = () => {
    setIsSingleSelect(true)
  }

  return (
    <div>
      <button onClick={onClickSingleSelect}>isSingleSelect</button>
      <button onClick={onClickValue}>value</button>
      <Treeselect
        isSingleSelect={isSingleSelect}
        options={options}
        value={value}
        onInput={(value) => {
          console.log(value)
        }}
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
