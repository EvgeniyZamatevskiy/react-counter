import React, { FC } from 'react'
import s from './CounterOutput.module.css'

type CounterOutputPropsType = {
   counterValue: number
   maxValue: number
   startValue: number
   settingsActive: boolean
}

export const CounterOutput: FC<CounterOutputPropsType> = (props) => {

   const error = props.startValue >= props.maxValue || props.startValue < 0

   return (
      <div className={`${s.output} ${props.counterValue === props.maxValue ? s.maxWarning : ''}`}>
         {
            error
               ? <div className={!props.settingsActive ? `${s.settingsUpdatingMessage} ${s.maxWarning}` : ''}>
                  {!props.settingsActive ? 'incorrect value!' : props.counterValue}
               </div>
               : <div className={!props.settingsActive ? `${s.settingsUpdatingMessage}` : ''}>
                  {!props.settingsActive ? `enter values and press "set"` : props.counterValue}
               </div>
         }
      </div>
   )
}