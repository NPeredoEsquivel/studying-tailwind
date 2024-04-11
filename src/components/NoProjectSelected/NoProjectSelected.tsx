import React from 'react'
import noProject from '../../assets/no-projects.png';

type Props = {}

const NoProjectSelected = (props: Props) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProject} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a projet or get started with a new one</p>
      <p className="mt-8">
        <button>
          Create New Project
        </button>
      </p>
    </div>
  )
}

export default NoProjectSelected;

