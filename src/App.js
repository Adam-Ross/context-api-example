import {useState} from 'react'
import TaskInput from './components/TaskInput'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {TaskProvider} from './context/TaskContext'

function App() {
  return (

      <TaskProvider>
        <Header />
        <TaskInput />
        <Tasks />
      </TaskProvider>

    
  );
}

export default App;
