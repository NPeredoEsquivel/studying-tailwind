import React from 'react'
import Button from '../../UI/Button'
import { TProject } from '../../types/types'

type Props = {
  handleShowForm: () => void
  projectList: TProject[]
}

type TProjectValues = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

const ProjectSideBar: React.FC<Props> = ({ projectList,  handleShowForm }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
      <div>
        <Button onClick={handleShowForm}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        { projectList.length !== 0 ? projectList.map((project: TProjectValues, index: number) => {
          const projectIndex = index + 1 
          return (
            <li key={project.id} className="my-4">
              <Button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</Button>
            </li>
          )
        })
        : <></>
      }
      </ul>
    </aside>
  )
}

export default ProjectSideBar