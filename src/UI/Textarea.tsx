import React from 'react'

type Props = {
  label: string
  props?: React.HTMLProps<HTMLTextAreaElement>
}

const Textarea: React.FC<Props> = ({ label, props }) => {
  return (
    <p>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <textarea {...props}></textarea>
    </p>
  )
}

export default Textarea