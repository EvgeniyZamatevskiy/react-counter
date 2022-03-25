import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './Counter.module.css'

type CounterPropsType = {
   count: number
   maxValue: number
   startValue: number
   setCount: (count: number) => void
}

export const Counter: FC<CounterPropsType> = ({ count, setCount, maxValue, startValue }) => {

   const navigate = useNavigate()

   const onClickIncHandler = () => {
      setCount(count + 1)
   }

   const onClickResetHandler = () => {
      setCount(startValue)
   }

   return (
      <div>
         <div className={count === maxValue ? s.errorMessage : ''}>{count}</div>

         <button disabled={count === maxValue} onClick={onClickIncHandler}>inc</button>
         <button disabled={!count} onClick={onClickResetHandler}>reset</button>
         <button onClick={() => navigate('/settings')}>set</button>
      </div>
   )
}