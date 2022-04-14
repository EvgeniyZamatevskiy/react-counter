import React, { FC } from 'react'
import { UniversalButton } from '../UniversalButton/UniversalButton'
import { CounterOutput } from '../CounterOutput/CounterOutput'
import s from './Counter.module.css'

type CounterPropsType = {
   increaseCounterValue: () => void
   resetCounterValue: () => void
   counterValue: number
   maxValue: number
   startValue: number
   settingsActive: boolean
}

export const Counter: FC<CounterPropsType> = (props) => {

   const btnIncDisabled = props.settingsActive || props.counterValue === props.maxValue

   return (
      <div className={s.counter}>
         <CounterOutput
            counterValue={props.counterValue}
            maxValue={props.maxValue}
            startValue={props.startValue}
            settingsActive={!props.settingsActive} />
         <div className={s.control}>
            <UniversalButton
               className={btnIncDisabled ? 'disabled' : ''}
               disabled={btnIncDisabled}
               onClick={props.increaseCounterValue}>
               inc
            </UniversalButton>
            <UniversalButton
               className={props.settingsActive ? 'disabled' : ''}
               disabled={props.settingsActive}
               onClick={props.resetCounterValue}>
               reset
            </UniversalButton>
         </div>
      </div>
   )
}