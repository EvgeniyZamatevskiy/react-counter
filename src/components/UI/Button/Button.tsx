import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import s from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = Omit<DefaultButtonPropsType, 'type'> & {

}

export const Button: FC<ButtonPropsType> = ({ className, ...props }) => {

   const buttonClasses = `${s.button} ${className ? className : ''}`

   return (
      <button className={buttonClasses} {...props} />
   )
}