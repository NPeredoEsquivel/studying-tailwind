import React from 'react'
import Button from '../../UI/Button'
import { ProjectState } from '../../types/types'

type Props = {
  handleSelectProject: (projectId: string) => void
  handleStartAddProject: () => void
  projectState: ProjectState
}

type TProjectValues = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

const ProjectSideBar: React.FC<Props> = ({ projectState, handleStartAddProject, handleSelectProject }) => {
  const { projects, selectedProjectId } = projectState
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
      <div>
        <Button onClick={handleStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        { projects.length !== 0 ? projects.map((project: TProjectValues, index: number) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1"

          if (selectedProjectId === project.id) {
            cssClasses += " bg-stone-800 text-stone-200"
          } else {
            cssClasses += " text-stone-400"
          }

          return (
            <li key={project.id} className="my-4">
              <Button className={cssClasses} onClick={(_) => handleSelectProject(project.id)}>{project.title}</Button>
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