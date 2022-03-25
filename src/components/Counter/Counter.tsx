import React, { FC, useEffect } from 'react'
import { Button } from '../UI/Button/Button'
import s from './Counter.module.css'

type CounterPropsType = {
   count: number
   maxValue: number
   startValue: number
   setCount: (count: number) => void
   setMaxValue: (maxValue: number) => void
   setStartValue: (startValue: number) => void
   setVisibleModal: (visibleModal: boolean) => void
}

export const Counter: FC<CounterPropsType> = ({ count, setCount, maxValue, setVisibleModal, startValue, setMaxValue, setStartValue }) => {

   const incHandler = () => {
      setCount(count + 1)
   }

   const resetHandler = () => {
      setCount(startValue)
   }

   const settingsHandler = () => {
      setVisibleModal(true)
   }

   useEffect(() => {
      let initMaxValue = localStorage.getItem('maxValue')
      if (initMaxValue) {
         let newMaxValue = JSON.parse(initMaxValue)
         setMaxValue(newMaxValue)
      }

      let initStartValue = localStorage.getItem('startValue')
      if (initStartValue) {
         let newStartValue = JSON.parse(initStartValue)
         setCount(newStartValue)
         setStartValue(newStartValue)
      }
   }, [])

   return (
      <div>
         <div className={count === maxValue ? s.errorMessage : s.count}>{count}</div>

         <Button disabled={count === maxValue} onClick={incHandler}>inc</Button>
         <Button disabled={count === startValue} onClick={resetHandler}>reset</Button>
         <Button onClick={settingsHandler}>settings</Button>
      </div>
   )
}