import React from 'react'
import Input from '../../UI/Input';
import Textarea from '../../UI/Textarea';

type Props = {}

const NewProject: React.FC <Props> = ({}: Props) =>  {
  return (
    <div className="w-[35rem]">
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
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