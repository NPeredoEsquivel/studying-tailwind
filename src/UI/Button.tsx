import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &{ children: React.ReactNode }

const Button: React.FC<Props> = ({children, ...rest}) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export default Button;