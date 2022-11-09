import {useContext} from 'react'
import TodoContext from '../context/TodoContext'
import TodoItem from './TodoItem'

const Todos = () => {
    const {todos} = useContext(TodoContext)


    return todos.map((item, index) => (
        <TodoItem item={item} key={index}/>
    ))
}

export default Todos