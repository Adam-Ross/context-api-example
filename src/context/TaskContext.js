import {useState, createContext} from 'react'

// create your context
const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    // state
    const [tasks, setTask] = useState(['task from context'])
    

    // functionality / functions
    const addTask = (text) => {

        setTask([text, ...tasks])
    }

    return <TaskContext.Provider value={{
        tasks,
        addTask
    }}>
        {children}
    </TaskContext.Provider>
}

export default TaskContext 