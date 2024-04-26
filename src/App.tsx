import React from 'react';
import ProjectSideBar from './components/ProjectSideBar/ProjectSideBar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
import { TProject, ProjectState } from './types/types';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  const [projectsState, setProjectsState] = React.useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (task: string) => {
    setProjectsState(prevState => {
      const taskId = Date.now().toString();
      const newTask = {
        id: taskId,
        taskName: task,
        projectId: prevState.selectedProjectId!
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  const handleDeleteTask = (taskId: string) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId)
      }
    })
  }

  const handleDeleteProject = (projectId: string) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== projectId)
      }
    })
  }

  const handleAddProject = (projectInformation: TProject) => {
    setProjectsState(prevState => {
      const projects = [...prevState.projects, {
        ...projectInformation
      }]
      return {
        ...prevState,
        selectedProjectId: projectInformation.id,
        projects
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


  const handleSelectProject = (projectId: string) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject handleStartProject={handleAddProject} handleCancelAddProject={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleStartAddProject={handleStartAddProject} />
  } else {
    const projectSelected = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)!

    content = <ProjectDetail project={projectSelected} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>
  } 
  
  

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        projectState={projectsState}
        handleStartAddProject={handleStartAddProject}
        handleSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
