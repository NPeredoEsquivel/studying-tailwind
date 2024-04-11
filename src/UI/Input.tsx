import React from 'react'


type Props = {
  label: string
  props?: React.HTMLProps<HTMLInputElement>
}


const Input: React.FC<Props> = ({ label, props }) => {

  return (
    <p>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input {...props} />
    </p>
  )
}


export default Input