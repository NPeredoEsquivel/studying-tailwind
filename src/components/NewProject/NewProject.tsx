import React from 'react'
import Input from '../../UI/Input';
import Textarea from '../../UI/Textarea';
import Button from '../../UI/Button';
import { TProject } from '../../types/types';
import Modal, {ModalRef} from '../../UI/Modal';

type Props = {
  handleStartProject: (arg0: TProject) => void
  handleCancelAddProject: () => void
}

const NewProject: React.FC<Props> = ({ handleStartProject, handleCancelAddProject }) =>  {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const dueDateRef = React.useRef<HTMLInputElement>(null);
  const errorModalRef = React.useRef<ModalRef>(null);

  const validateInput = (input: string) => {
    return input.trim().length > 0 || input === null || input === undefined;
  }

  const handleSaveProject = () => { 
    const title = titleRef.current!.value;
    const description = descriptionRef.current!.value;
    const dueDate = dueDateRef.current!.value;

    if (validateInput(title) || validateInput(description) || validateInput(dueDate)) {
      errorModalRef.current!.open();
      return;
    }

    const projectInformation = {
      id: Date.now().toString(),
      title,
      description,
      dueDate
    }

    handleStartProject(projectInformation);
  }

  return (
    <>
      <Modal ref={errorModalRef}>
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h2 className="text-2xl font-bold text-stone-800">Error</h2>
          <p className="text-stone-800">Please fill out all fields</p>
          <Button onClick={() => errorModalRef.current!.close()} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Close</Button>        </div>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li><Button onClick={handleCancelAddProject}className="text-stone-800 hover:text-stone-950">Cancel</Button></li>
          <li><Button onClick={handleSaveProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</Button></li>
        </menu>
        <div>
            <Input ref={titleRef} type="text" label={"Title"} />
            <Textarea ref={descriptionRef} label={"Description"} />
            <Input ref={dueDateRef} type="date" label="Due Date" />
        </div>
      </div>
    </>
  )
}

export default NewProject;