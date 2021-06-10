import React from 'react'
import { FilledButton, OutlinedButton } from './button.styles'

interface IButtonProps {
  theme?: 'filled' | 'outlined';
  text: string;
  className?: string;
}

export const Button = (props: IButtonProps) => {
  const { theme, text, className } = props

  if (theme === 'filled') {
    return <FilledButton className={className}>{text}</FilledButton>
  }
  return <OutlinedButton className={className}>{text}</OutlinedButton>
}
