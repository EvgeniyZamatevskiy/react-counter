import React, { FC } from 'react'
import s from './Settings.module.css'

type SettingsPropsType = {

}

export const Settings: FC<SettingsPropsType> = ({ }) => {
   return (
      <div className={s.settings}>
         <div className={s.top}>
            <div className={s.topItem}>max value: <input className={s.myInput} type="number" /></div>
            <div className={s.topItem}>start value: <input className={s.myInput} type="number" /></div>
         </div>

         <div className={s.bottom}>
            <div className={s.bottomItems}>
               <div className={s.bottomItem}>set</div>
            </div>
         </div>
      </div>
   )
}