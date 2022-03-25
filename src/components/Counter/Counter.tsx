import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './Counter.module.css'

type CounterPropsType = {
   count: number
   maxValue: number
   startValue: number
   setCount: (count: number) => void
   setMaxValue: (maxValue: number) => void
   setStartValue: (startValue: number) => void
}

export const Counter: FC<CounterPropsType> = ({ count, setCount, maxValue, startValue, setMaxValue, setStartValue }) => {

   const navigate = useNavigate()

   const incHandler = () => {
      setCount(count + 1)
   }

   const resetHandler = () => {
      setCount(startValue)
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
         <div className={count === maxValue ? s.errorMessage : ''}>{count}</div>

         <button disabled={count === maxValue} onClick={incHandler}>inc</button>
         <button disabled={count === startValue} onClick={resetHandler}>reset</button>
         <button onClick={() => navigate('/settings')}>set</button>
      </div>
   )
}