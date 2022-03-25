import React, { ChangeEvent, FC, useEffect } from 'react'
import { Button } from '../UI/Button/Button'
import s from './Settings.module.css'

type SettingsPropsType = {
   maxValue: number
   startValue: number
   error: string
   setMaxValue: (maxValue: number) => void
   setError: (error: string) => void
   setStartValue: (startValue: number) => void
   setCount: (count: number) => void
   setVisibleModal: (visibleModal: boolean) => void
}

export const Settings: FC<SettingsPropsType> = ({ maxValue, startValue, setVisibleModal, error, setMaxValue, setError, setStartValue, setCount }) => {

   const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.valueAsNumber >= 0) {
         setMaxValue(e.currentTarget.valueAsNumber)
         setError('')
      } else {
         setError('Incorrect value!')
      }
   }

   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.valueAsNumber >= 0) {
         setStartValue(e.currentTarget.valueAsNumber)
         setError('')
      } else {
         setError('Incorrect value!')
      }
   }

   const applyHandler = () => {
      if (maxValue !== startValue && startValue < maxValue) {
         setCount(startValue)
         setMaxValue(maxValue)
         localStorage.setItem('maxValue', JSON.stringify(maxValue))
         localStorage.setItem('startValue', JSON.stringify(startValue))
         setVisibleModal(false)
      } else {
         setError('Incorrect value!')
      }
   }

   useEffect(() => {
      let initStartValue = localStorage.getItem('startValue')
      if (initStartValue) {
         let newStartValue = JSON.parse(initStartValue)
         setStartValue(newStartValue)
      }

      let initMaxValue = localStorage.getItem('maxValue')
      if (initMaxValue) {
         let newMaxValue = JSON.parse(initMaxValue)
         setMaxValue(newMaxValue)
      }
   }, [])

   return (
      <div>
         <div>
            max value:<input
               type='number'
               className={error ? s.errorInput : ''}
               value={maxValue}
               onChange={onChangeMaxValueHandler} />
         </div>
         <div>
            start value:<input
               type='number'
               className={error ? s.errorInput : ''}
               value={startValue}
               onChange={onChangeStartValueHandler} />
         </div>
         <Button disabled={!!error} onClick={applyHandler}>apply</Button>
         <div className={s.errorMessage}>{error}</div>
      </div>
   )
}