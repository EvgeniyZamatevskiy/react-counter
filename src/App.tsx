import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Counter } from './components/Counter/Counter'
import { Settings } from './components/Settings/Settings'

export const App = () => {

  const [count, setCount] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [startValue, setStartValue] = useState<number>(0)
  const [error, setError] = useState<string>('')

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Counter
          count={count}
          maxValue={maxValue}
          setCount={setCount}
          startValue={startValue}
        />} />

        <Route path={'/settings'} element={<Settings
          error={error}
          maxValue={maxValue}
          startValue={startValue}
          setCount={setCount}
          setError={setError}
          setMaxValue={setMaxValue}
          setStartValue={setStartValue}
        />} />
      </Routes>
    </>
  )
}