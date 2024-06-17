import React from 'react'
import Task from './components/Task';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App">
      <Task />
      <TaskList />
    </div>
  );
}

export default App