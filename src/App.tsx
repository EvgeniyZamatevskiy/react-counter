import React from 'react'
import { Counter } from './components/Counter/Counter'
import { Settings } from './components/Settings/Settings'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootType } from './redux/store'
import { InitialStateType, onCounterValueChangeAC, onChangeMaxValueAC, onChangeStartValueAC, onSetButtonClickAC } from './redux/counterReducer'
import './App.css'

export const App = () => {

  const dispatch = useDispatch()
  const { counterValue, startValue, maxValue, settingsIsActive } = useSelector<AppRootType, InitialStateType>(state => state.counter)

  const increaseCounterValue = () => {
    dispatch(onCounterValueChangeAC(counterValue + 1))
  }

  const resetCounterValue = () => {
    dispatch(onCounterValueChangeAC(startValue))
  }

  const onChangeMaxValue = (newMaxValue: number) => {
    dispatch(onChangeMaxValueAC(newMaxValue))
  }

  const onChangeStartValue = (newStartValue: number) => {
    dispatch(onChangeStartValueAC(newStartValue))
  }

  const onSetButtonClick = () => {
    dispatch(onSetButtonClickAC())
  }

  return (
    <div className='App'>
      <Settings
        startValue={startValue}
        maxValue={maxValue}
        settingsActive={settingsIsActive}
        onChangeMaxValue={onChangeMaxValue}
        onChangeStartValue={onChangeStartValue}
        onSetButtonClick={onSetButtonClick} />
      <Counter
        increaseCounterValue={increaseCounterValue}
        resetCounterValue={resetCounterValue}
        counterValue={counterValue}
        maxValue={maxValue}
        startValue={startValue}
        settingsActive={settingsIsActive} />
    </div>
  )
}