import React,{useState} from 'react';
import {Task} from  './interfaces/Task'
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState <Task[]>([{
    id:1,
    title:'Learn React',
    description:'Learn React',
    completed: false
  }])
  const addId=():number=> new Date().getTime() //generamos los id a partir de la fecha
  const addNewTask =(task: Task)=>{setTasks([...tasks, {...task, id:addId(), completed:false}])}
  const deleteTask=(id: number)=>{setTasks(tasks.filter(task=>task.id !== id))}
  
  return (
    <div className="bg-slate-700 min-h-screen">
      <main className='container mx-auto px-4 py-4 static md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2  grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
        <TaskForm addNewTask={addNewTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
      </main>
      
    </div>
  );
}

export default App;
