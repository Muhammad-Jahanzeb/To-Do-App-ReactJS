import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import EditForm from './EditForm'
import {v4 as uuidv4 } from 'uuid'
import ToDo from './ToDo'
uuidv4()

const ToDoWrapper = () => {
  const[todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos([...todos,{id: uuidv4(), task:todo, completed:false, isEditing:false}])
  }

  const toggle=(id)=>{
    setTodos(todos.map((todo=>todo.id===id?{...todo, completed:!todo.completed}:todo)))
  }

  const deleteItem=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  const editTodo=(id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo, isEditing: !todo.isEditing}:todo))
  }

  const editTask=(task, id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,task:task,isEditing:!todo.isEditing}:todo))
  }

  return (
    <div className='todo-wrapper'>
      <h1>Get things done!</h1>
      <ToDoForm addTodo={addTodo}/>
      <div className='mini-container'>
        {
          todos.map((todo,index)=>(
            todo.isEditing? <EditForm editTask={editTask} task={todo}/>:
            <ToDo task={todo} key={index} toggle={toggle} deleteItem={deleteItem} editTodo={editTodo}/>)
          )
        
        }
      </div> 
    </div>
  )
}

export default ToDoWrapper