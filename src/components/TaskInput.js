import {useState} from 'react'
import {useContext} from 'react'
import TaskContext from '../context/TaskContext'
const TaskInput = () => {
    const {addTask} = useContext(TaskContext)

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(text)
        setText('')
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={text}></input>
            <input type="submit"></input>
        </form>
    )
}

export default TaskInput