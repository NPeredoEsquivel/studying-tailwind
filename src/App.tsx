import React from 'react';
import ProjectSideBar from './components/ProjectSideBar/ProjectSideBar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';

function App() {
  const [toggleForm, setToggleForm] = React.useState<boolean>(false);

  const handleToggleForm = () => {
    setToggleForm(!toggleForm);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar handleToggleForm={handleToggleForm}/>
      {toggleForm ? <NewProject/> : <NoProjectSelected/> }
    </main>
  );
}

export default App;
