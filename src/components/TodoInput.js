import {useState, useContext} from 'react'
import TodoContext from '../context/TodoContext'

const TodoInput = () => {
    const {addTodo} = useContext(TodoContext)
    const [text, setText] = useState('')


    const handleChange = (e) => {
        setText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={text}></input>
            <input type="submit"></input>
        </form>
    )
}

export default TodoInput