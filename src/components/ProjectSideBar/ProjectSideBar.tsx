import React from 'react'
import Button from '../../UI/Button'
import { TProject } from '../../types/types'

type Props = {
  handleShowForm: () => void
  projectList: TProject[]
}

type TProjectValues = {
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
      <ul>
        { projectList.length !== 0 ? projectList.map((project: TProjectValues) => {
          return (
            <li key={project.title} className="my-4">
              <h3 className="font-bold text-stone-200">{project.title}</h3>
              <p className="text-stone-300">{project.description}</p>
              <p className="text-stone-300">{project.dueDate}</p>
            </li>
          )
        })
        : <p className="text-stone-300">No projects yet</p>
      }
      </ul>
    </aside>
  )
}

export default ProjectSideBar