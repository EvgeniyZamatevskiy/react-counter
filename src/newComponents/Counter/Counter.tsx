import React, { FC } from 'react'
import s from './Counter.module.css'

type CounterPropsType = {
   increment: () => void
   resetCounter: () => void
   count: number
}

export const Counter: FC<CounterPropsType> = ({ increment, count, resetCounter }) => {

   const incrementHandler = () => {
      increment()
   }

   const resetCounterHandler = () => {
      resetCounter()
   }

   return (
      <div className={s.counter}>
         <div className={s.top}>
            <div className={`${s.topItem} ${count === 5 ? s.topItemError : ''}`}>{count}</div>
         </div>
         <div className={s.bottom}>
            <div className={s.bottomItems}>
               <button className={s.bottomItem} onClick={incrementHandler} disabled={count === 5}>inc</button>
               <button className={s.bottomItem} onClick={resetCounterHandler} disabled={!count}>reset</button>
            </div>
         </div>
      </div>
   )
}