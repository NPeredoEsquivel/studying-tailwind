import React from 'react';
import ProjectSideBar from './components/ProjectSideBar/ProjectSideBar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
import { TProject, ProjectState } from './types/types';

function App() {
  const [projectsState, setProjectsState] = React.useState<ProjectState>({
    selectedProjectId: undefined,
    projects: []
  });

  const handleAddProject = (projectInformation: TProject) => {
    setProjectsState(prevState => {
      const projects = [...prevState.projects, {
        ...projectInformation}]
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects
      }
    })
  }

  const handleSelectProject = (projectId: string) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject handleStartProject={handleAddProject} handleCancelAddProject={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
        projectState={projectsState}
        handleStartAddProject={handleStartAddProject}
        handleSelectProject={handleSelectProject}
      />
      { content }
    </main>
  );
}

export default App;
