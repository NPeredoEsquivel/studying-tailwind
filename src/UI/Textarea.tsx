import React from 'react'

type Props = {
  label: string
  props?: React.HTMLProps<HTMLTextAreaElement>
}

const Textarea: React.FC<Props> = ({ label, props }) => {
  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500" htmlFor={label.toLowerCase()}>{label}</label>
      <textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props}></textarea>
    </p>
  )
}

export default Textarea