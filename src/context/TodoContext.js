import {useState, createContext} from 'react'

const TodoContext = createContext()

// export provider

export const TodoProvider = ({children}) => {
    // state
    const [todos, setTodos] = useState(['todo from context'])

    const addTodo = (text) => {
        setTodos([text, ...todos])
    
      }

    return <TodoContext.Provider value={{
        todos,
        addTodo

    }}>
        {children}
    </TodoContext.Provider>
}

export default TodoContext