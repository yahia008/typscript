import React from 'react'
import './style.css'
import { useRef } from 'react';

interface Props {
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e:React.FormEvent)=> void
}

const Input = ({todo, setTodo, handleAdd}:Props) => {
  const inputRef  = useRef<HTMLInputElement>(null)

  return (

    <div>
      <form className='input' onSubmit={(e) =>{
        
        handleAdd(e)
        inputRef.current?.blur()

      }
        
        }>
       <input type='input'
       ref={inputRef}
       value={todo}
       onChange={(e) => setTodo(e.target.value)}
       placeholder='Enter a task ' className='input_box'/>
       <button className= 'input_submit' type='submit' >GO</button>
      </form>
    </div>

  )
}

export default Input
