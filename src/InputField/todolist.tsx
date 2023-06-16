import React from 'react'
import { Todo } from './model'
import './style.css'
import SingleTodo from './singleTodo'

interface props {
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist  = ({todos, setTodos} : props) => {

  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id}
        todos={todos }
        setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default Todolist
