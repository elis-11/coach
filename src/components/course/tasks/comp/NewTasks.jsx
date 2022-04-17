import React from 'react'
import { NewItem } from './NewItem'

export const NewTasks = ({tasks}) => {
  return (
    <div>NewTasks: {tasks.map((task=>(
<NewItem key={task.id} task={task} />
        )))}</div>
  )
}
