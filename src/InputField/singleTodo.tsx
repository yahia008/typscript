import React from 'react'
import { Todo } from './model'
import './style.css'


type props = {
    todo:Todo,
    todos:Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({todo, todos, setTodos}:props) => {
  return (
    <div>
      <form>
<div className='spani'>
<span >{todo.todo}</span>

</div>
           
      </form>
    </div>
  )
}

export default SingleTodo
