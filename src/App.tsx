import React, { useEffect, useState } from 'react'
import { Counter } from './components/Counter/Counter'
import { Settings } from './components/Settings/Settings'
import './App.css'

export const App = () => {

  useEffect(() => {
    let counterSettings = localStorage.getItem('counterSettings')
    if (counterSettings) {
      let values = JSON.parse(counterSettings)
      setStartValue(values.startValue)
      setCounterValue(values.startValue)
      setMaxValue(values.maxValue)
    }
  }, [])

  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(5)
  const [counterValue, setCounterValue] = useState(startValue)
  const [settingsActive, setSettingsActive] = useState(false)

  const increaseCounterValue = () => {
    setCounterValue(counterValue + 1)
  }

  const resetCounterValue = () => {
    setCounterValue(startValue)
  }

  const onChangeMaxValue = (newMaxValue: number) => {
    setCounterValue(0)
    setSettingsActive(true)
    setMaxValue(newMaxValue)
  }

  const onChangeStartValue = (newStartValue: number) => {
    setStartValue(newStartValue)
    setSettingsActive(true)
  }

  const onSetButtonClick = () => {
    localStorage.setItem('counterSettings', JSON.stringify({ startValue: startValue, maxValue: maxValue }))
    setCounterValue(startValue)
    setSettingsActive(false)
  }

  return (
    <div className='App'>
      <Settings
        startValue={startValue}
        maxValue={maxValue}
        settingsActive={settingsActive}
        onChangeMaxValue={onChangeMaxValue}
        onChangeStartValue={onChangeStartValue}
        onSetButtonClick={onSetButtonClick} />
      <Counter
        increaseCounterValue={increaseCounterValue}
        resetCounterValue={resetCounterValue}
        counterValue={counterValue}
        maxValue={maxValue}
        startValue={startValue}
        settingsActive={settingsActive} />
    </div>
  )
}