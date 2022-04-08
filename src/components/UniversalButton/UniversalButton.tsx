import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import s from './UniversalButton.module.css'

type DefaultSuperButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type UniversalButtonPropsType = Omit<DefaultSuperButtonPropsType, 'type'> & {

}

export const UniversalButton: FC<UniversalButtonPropsType> = ({ className, ...props }) => {

   const universalButtonClasses = `${s.universalButton} ${className ? className : ''}`

   return (
      <button className={universalButtonClasses} {...props} />
   )
}