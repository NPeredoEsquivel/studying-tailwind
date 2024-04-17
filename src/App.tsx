import React from 'react';
import ProjectSideBar from './components/ProjectSideBar/ProjectSideBar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
import { TProject } from './types/types';

type ProjectState = {
  projects: TProject[];
  selectedProjectId?: string | null;
}

function App() {
  const [projectsState, setProjectsState] = React.useState<ProjectState>({
    selectedProjectId: null,
    projects: []
  });

  const [showForm, setShowForm] = React.useState<boolean>(false);

  const handleStartAddProject = (_: React.MouseEvent<HTMLButtonElement>, projectInformation: TProject) => {
    setProjectsState(prevState => {
      const projects = [...prevState.projects, {
        ...projectInformation}]
      return {
        ...prevState,
        projects
      }
    })
  }

  const handleSelectProject = (_: React.MouseEvent<HTMLElement>, projectId: string) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }

  const handleShowForm = () => {
    if (!showForm) {
      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }

  let content;

  if (showForm) {
    content = <NewProject handleStartAddProject={handleStartAddProject} handleShowForm={handleShowForm}/>
  } else {
    content = <NoProjectSelected handleShowForm={handleShowForm} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
        projectList={projectsState.projects}
        handleShowForm={handleShowForm}
        handleSelectProject={handleSelectProject}
      />
      { content }
    </main>
  );
}

export default App;
