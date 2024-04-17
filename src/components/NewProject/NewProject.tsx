import React from 'react'
import Input from '../../UI/Input';
import Textarea from '../../UI/Textarea';
import Button from '../../UI/Button';
import { TProject } from '../../types/types';

type Props = {
  handleStartAddProject: (arg0: React.MouseEvent<HTMLButtonElement>, arg1: TProject) => void
  handleShowForm: () => void
}

const NewProject: React.FC<Props> = ({ handleStartAddProject, handleShowForm }) =>  {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const dueDateRef = React.useRef<HTMLInputElement>(null);

  const validateInput = (input: string) => {
    return input.trim().length > 0;
  }

  const handleSaveProject = (event: React.MouseEvent<HTMLButtonElement>) => { 
    const title = titleRef.current!.value;
    const description = descriptionRef.current!.value;
    const dueDate = dueDateRef.current!.value;

    if (validateInput(title) || validateInput(description) || validateInput(dueDate)) {
      //show modal
      return;
    }

    const projectInformation = {
      id: Date.now().toString(),
      title,
      description,
      dueDate
    }

    handleStartAddProject(event, projectInformation);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><Button onClick={handleShowForm}className="text-stone-800 hover:text-stone-950">Cancel</Button></li>
        <li><Button onClick={handleSaveProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</Button></li>
      </menu>
      <div>
          <Input ref={titleRef} type="text" label={"Title"} />
          <Textarea ref={descriptionRef} label={"Description"} />
          <Input ref={dueDateRef} type="date" label="Due Date" />
      </div>
    </div>
  )
}

export default NewProject;