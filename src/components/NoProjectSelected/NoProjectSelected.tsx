import React from 'react'
import noProject from '../../assets/no-projects.png';

type Props = {}

const NoProjectSelected = (props: Props) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProject}/>
      <h2>No Project Selected</h2>
      <p>Select a projet or get started with a new one</p>
      <p>
        <button>
          Create New Project
        </button>
      </p>
    </div>
  )
}

export default NoProjectSelected;

