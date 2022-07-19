import {Task} from '../interfaces/Task'
interface Props{
    task: Task
    deleteTask:(id: number)=>void
}
const TaskCard = ({task, deleteTask}:Props) => {
  return (
    <div className='flex flex-col gap-5 bg-slate-50 shadow  py-4 px-5'>
        <h2>TITLE: {task.title}</h2>
        <p>DESCRIPTION: {task.description}</p>
        <button className='bg-red-600 py-1 px-3 text-white uppercase text-sm font-bold' onClick={()=>{task.id && deleteTask(task.id)}}>Delete</button>
    </div>
  )
}

export default TaskCard