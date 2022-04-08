import React, { FC } from 'react'
import { UniversalButton } from '../UniversalButton/UniversalButton'
import { SettingsMenu } from '../SettingsMenu/SettingsMenu'
import s from './Settings.module.css'

type SettingsPropsType = {
   settingsActive: boolean
   maxValue: number
   startValue: number
   onChangeMaxValue: (newMaxValue: number) => void
   onChangeStartValue: (newStartValue: number) => void
   onSetButtonClick: () => void
}

export const Settings: FC<SettingsPropsType> = (props) => {

   let btnDisabled = !props.settingsActive || props.startValue >= props.maxValue || props.startValue < 0

   return (
      <div className={s.settings}>
         <SettingsMenu
            maxValue={props.maxValue}
            startValue={props.startValue}
            onChangeMaxValue={props.onChangeMaxValue}
            onChangeStartValue={props.onChangeStartValue} />
         <div className={s.control}>
            <UniversalButton
               className={btnDisabled ? 'disabled' : ''}
               onClick={props.onSetButtonClick}
               disabled={btnDisabled}>
               set
            </UniversalButton>
         </div>
      </div>
   )
}