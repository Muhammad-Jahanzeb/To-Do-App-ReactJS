import React, {useState} from 'react'

const ToDoForm = ({addTodo}) => {
    const [value, setValue]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (value!=="")
        {
          addTodo(value)
          setValue("")
        }
    }



  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Enter task here...' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm