import React from 'react'
import Input from '../../UI/Input';
import Textarea from '../../UI/Textarea';
import Button from '../../UI/Button';

type Props = {}

const NewProject: React.FC <Props> = ({}: Props) =>  {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><Button className="text-stone-800 hover:text-stone-950">Cancel</Button></li>
        <li><Button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</Button></li>
      </menu>
      <div>
          <Input label={"Title"} />
          <Textarea label={"Description"} />
          <Input label="Due Date" />
      </div>
    </div>
  )
}

export default NewProject;