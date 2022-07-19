import {Task} from '../interfaces/Task'
import TaskCard from './TaskCard'
interface Props{
    tasks: Task[]
    deleteTask:(id: number)=>void
}
const TaskList = ({tasks, deleteTask}: Props) => {
  return (
    <article>
      <h2 className='text-center text-stone-100 text-xl lg:text-3xl uppercase mb-4 lg:mb-10'>List of tasks</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3  gap-2 lg:gap-5'>
        {tasks.map(task=>(
        <div key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask}/>  
        </div>
      ))}
      </div>
      
    </article>
  )
}

export default TaskList