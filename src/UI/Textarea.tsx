import React from 'react'

type Props = {
  label: string
  ref: React.Ref<HTMLTextAreaElement>
  props?: React.HTMLProps<HTMLTextAreaElement>
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(({ label, props }, ref) => {
  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500" htmlFor={label.toLowerCase()}>{label}</label>
      <textarea ref={ref} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props}></textarea>
    </p>
  )
})

export default Textarea