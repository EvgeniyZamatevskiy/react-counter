import React, { ChangeEvent, FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './Settings.module.css'

type SettingsPropsType = {
   maxValue: number
   startValue: number
   error: string
   setMaxValue: (maxValue: number) => void
   setError: (error: string) => void
   setStartValue: (startValue: number) => void
   setCount: (count: number) => void
}

export const Settings: FC<SettingsPropsType> = ({ maxValue, startValue, error, setMaxValue, setError, setStartValue, setCount }) => {

   const navigate = useNavigate()

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

   const onClickSetHandler = () => {
      if (maxValue !== startValue && startValue < maxValue) {
         setCount(startValue)
         setMaxValue(maxValue)
         navigate('/')
      } else {
         setError('Incorrect value!')
      }
   }

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
         <button disabled={!!error} onClick={onClickSetHandler}>set</button>
         <div className={s.errorMessage}>{error}</div>
      </div>
   )
}