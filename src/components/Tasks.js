import {useContext} from 'react'
import TaskContext from '../context/TaskContext'
import TaskItem from './TaskItem'

const Tasks = () => {
    const {tasks} = useContext(TaskContext) 

    return tasks.map((item, index) => (
        <TaskItem item={item} key={index}/>
    ))
}

export default Tasks