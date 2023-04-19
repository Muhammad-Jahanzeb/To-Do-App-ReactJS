import React,{useState} from 'react'

const EditForm = ({task, editTask}) => {
  const [value, setValue]=useState(task.task)

    const handleSubmit=(e)=>{
        e.preventDefault()
        editTask(value, task.id)
        setValue("")

    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Enter task here...' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditForm