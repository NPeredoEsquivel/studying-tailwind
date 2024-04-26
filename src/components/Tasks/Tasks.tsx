import React from 'react'
import NewTask from '../NewTask/NewTask';
import { TTask } from '@/types/types';

type Props = {
  onAddTask: (task: string) => void;
  onDeleteTask: (id: string) => void;
  tasks: TTask[];
}

const Tasks: React.FC<Props> = ({ onAddTask, onDeleteTask, tasks }) => {
  let content = <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>;

  if(tasks.length > 0) {
    content = (
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((singleTask) => {
          return (
            <li key={singleTask.id} className="flex justify-between my-4">
              <p className="text-stone-700">{singleTask.taskName}</p>
              <button onClick={() => onDeleteTask(singleTask.id)} className="text-stone-700 hover:text-red-500">Delete</button>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      { content }
    </section>
  )
}

export default Tasks;