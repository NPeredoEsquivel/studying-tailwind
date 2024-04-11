import React from 'react'
import Button from '../../UI/Button'

type Props = {
  handleToggleForm: () => void
}

const ProjectSideBar: React.FC<Props> = ({ handleToggleForm }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
      <div>
        <Button onClick={handleToggleForm}>+ Add Project</Button>
      </div>
      <ul>
      </ul>
    </aside>
  )
}

export default ProjectSideBar