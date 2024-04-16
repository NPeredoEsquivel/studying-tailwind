import React, { ForwardedRef } from 'react'


type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string }


const Input = React.forwardRef<HTMLInputElement, Props>(({ label, ...props }, ref) => {

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500" htmlFor={label.toLowerCase()}>{label}</label>
      <input ref={ref} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props} />
    </p>
  )
})


export default Input