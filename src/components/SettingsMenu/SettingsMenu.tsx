import React, { ChangeEvent, FC } from 'react'
import s from './SettingsMenu.module.css'

type SettingsMenuPropsType = {
   maxValue: number
   startValue: number
   onChangeMaxValue: (newMaxValue: number) => void
   onChangeStartValue: (newStartValue: number) => void
}

export const SettingsMenu: FC<SettingsMenuPropsType> = (props) => {

   const error = props.startValue >= props.maxValue || props.startValue < 0

   const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.onChangeMaxValue(+e.currentTarget.value)
   }

   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.onChangeStartValue(+e.currentTarget.value)
   }

   return (
      <div className={`${s.settingsWrapper} ${props.startValue === props.maxValue ? s.maxWarning : ''}`}>
         <div className={s.inputItem}>
            <span>max value: </span>
            <input
               className={error ? `${s.error}` : ''}
               type='number'
               value={props.maxValue}
               onChange={onChangeMaxValueHandler} />
         </div>
         <div className={s.inputItem}>
            <span>start value: </span>
            <input
               className={error ? `${s.error}` : ''}
               type='number'
               value={props.startValue}
               onChange={onChangeStartValueHandler} />
         </div>
      </div>
   )
}