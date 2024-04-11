import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &{ children: React.ReactNode }

const Button: React.FC<Props> = ({children, ...rest}) => {
  let className = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
  if (rest.className) { 
    console.log(rest.className)
    className = rest.className
  }

  return (
    <button {...rest} className={className}>{children}</button>
  )
}

export default Button;