import React, { FC } from 'react'
import s from './Modal.module.css'

type ModalPropsType = {
   visible: boolean
   setVisible: (visible: boolean) => void
}

export const Modal: FC<ModalPropsType> = ({ children, visible, setVisible }) => {

   const modalClasses = visible ? `${s.modal} ${s.active}` : `${s.modal}`
   const contentClasses = visible ? `${s.content} ${s.active}` : `${s.content}`

   const onClickHandler = () => {
      setVisible(false)
   }

   return (
      <div className={modalClasses} onClick={onClickHandler}>
         <div className={contentClasses} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}