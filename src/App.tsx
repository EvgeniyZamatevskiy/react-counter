import React, { useState } from 'react'
import { Counter } from './newComponents/Counter/Counter'
import { Settings } from './newComponents/Settings/Settings'
import './App.css'

export const App = () => {

  // const [count, setCount] = useState<number>(0)
  // const [maxValue, setMaxValue] = useState<number>(5)
  // const [startValue, setStartValue] = useState<number>(0)
  // const [error, setError] = useState<string>('')
  // const [visibleModal, setVisibleModal] = useState<boolean>(false)

  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(count + 1)
  }

  const resetCounter = () => {
    setCount(0)
  }

  return (
    <div className='App'>
      <Counter
        count={count}
        increment={increment}
        resetCounter={resetCounter}
      />
      <Settings />
      {/* <Counter
        count={count}
        maxValue={maxValue}
        setCount={setCount}
        startValue={startValue}
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
        setVisibleModal={setVisibleModal}
      />
      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        <Settings
          error={error}
          maxValue={maxValue}
          startValue={startValue}
          setCount={setCount}
          setError={setError}
          setMaxValue={setMaxValue}
          setStartValue={setStartValue}
          setVisibleModal={setVisibleModal} />
      </Modal> */}
    </div>
  )
}