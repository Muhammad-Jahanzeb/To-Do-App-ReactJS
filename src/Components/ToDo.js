import React from 'react'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({task, deleteItem, toggle, editTodo}) => {
  return (
    <div className='todo-item'>
      <p onClick={()=>toggle(task.id)} className={task.completed?'done':'not-done'}>{task.task}</p>
      <div className='icons'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(task.id)}/>
      </div>
    </div>
  )
}

export default ToDo