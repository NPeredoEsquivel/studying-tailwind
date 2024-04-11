import React from 'react';
import ProjectSideBar from './components/ProjectSideBar/ProjectSideBar';
import NewProject from './components/NewProject/NewProject';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar/>
      <NewProject />
    </main>
  );
}

export default App;
