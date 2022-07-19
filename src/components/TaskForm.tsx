import {ChangeEvent, FormEvent, useState} from 'react'
import {Task} from '../interfaces/Task'

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Props{
    addNewTask:(task: Task)=>void
    
}
const INITIAL_STATE={
    title:'',
    description:''
}
const TaskForm = ({addNewTask}:Props) => {
    const [task, setTask] = useState(INITIAL_STATE)
    const handleChange=({target}:HandleInputChange)=>{
        setTask({...task, [target.name] : target.value})//primero duplicamos task, luego seleccionamos entre corchetes el name y le asignamos el valor
    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        addNewTask(task)
        setTask(INITIAL_STATE)
    }
  return (
    <div className='flex flex-col py-2 px-3 lg:p-10 bg-slate-50 rounded shadow shadow-lg h-fit'>
        <h2 className='text-xl lg:text-3xl text-center mb-4 lg:mb-10 text-stone-700 uppercase'>New task</h2>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2 lg:gap-5">
            <input type="text" placeholder='title' name='title' value={task.title} onChange={handleChange} className=" py-1 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-slate-200"/>
            <textarea placeholder="description" name="description" id="" cols={30} rows={6} value={task.description} onChange={handleChange} className="py-1 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-slate-200"></textarea>
            <button className='bg-cyan-600 py-1 px-2 lg:py-2 lg:px-4 text-lg lg:text-2xl text-sm lg:text-lg text-slate-100 uppercase font-bold hover:bg-cyan-800'>Add task</button>
        </form>
    </div>
  )
}

export default TaskForm