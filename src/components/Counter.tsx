import React, { FC } from 'react'
import s from './Counter.module.css'

type CounterPropsType = {
   count: number
   setCount: (count: number) => void
}

export const Counter: FC<CounterPropsType> = ({ count, setCount }) => {

   const onClickIncHandler = () => {
      setCount(count + 1)
   }

   const onClickResetHandler = () => {
      setCount(0)
   }

   return (
      <>
         <div className={count === 5 ? s.red : ''}>{count}</div>
         <button disabled={count === 5} onClick={onClickIncHandler}>inc</button>
         <button disabled={!count} onClick={onClickResetHandler}>reset</button>
      </>
   )
}