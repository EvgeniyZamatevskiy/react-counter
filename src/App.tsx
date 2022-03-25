import React, { useState } from 'react'
import { Counter } from './components/Counter/Counter'
import { Settings } from './components/Settings/Settings'
import { Modal } from './components/UI/Modal/Modal'
import './App.css'

export const App = () => {

  const [count, setCount] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [startValue, setStartValue] = useState<number>(0)
  const [error, setError] = useState<string>('')
  const [visibleModal, setVisibleModal] = useState<boolean>(false)

  return (
    <div className='App'>
      <Counter
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
      </Modal>
    </div>
  )
}