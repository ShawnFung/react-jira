import React from 'react';
import './App.less';
import { Login } from './pages/login/index'
import { ProjectListScreen } from './pages/project-list/index'
import { useAuth } from './context/auth-context'

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      { user? <ProjectListScreen/> : <Login />}
    </div>
  );
}

export default App;
