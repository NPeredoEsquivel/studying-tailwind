import React from 'react'

type Props = {
  onAddTask: (task: string) => void;
}

const NewTask: React.FC<Props> = ({onAddTask}) => {
  const [task, setTask] = React.useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (task.trim() === '') return;
    onAddTask(task);
    setTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input value={task} onChange={handleOnChange} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text"/>
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  )
}

export default NewTask;