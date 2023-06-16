
import logo from './logo.svg';
import './App.css';
import Input from './InputField/Input';
import { useState } from 'react';
import { Todo } from './InputField/model';
import Todolist from './InputField/todolist';

 
const initialState = [ {
  id:Date.now(),
  todo:'',
  isDone:false
}
]

const App : React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {

    e.preventDefault();
    if(todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone: false} ]  )
      setTodo('')
    }

  }
  console.log(todos)

  return (

    

    <div className='App'>
      <div className='Task'>
      <span className='heading'>Task</span>

      </div>

      
   <Input todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}  />
 <Todolist todos={todos} setTodos={setTodos}/>    
   </div>

   
    
  );
}

export default App








