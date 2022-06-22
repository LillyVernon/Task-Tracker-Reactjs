import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTask]=useState([
    {id: 1,
    text: 'Complete assignemnt 1',
    day: 'Feb 5th at 2:30',
    reminder:'true'
    },
    {  
    id: 2,
    text: 'Doctor',
    day: 'Feb 6th at 2:30',
    reminder:'true'
    },
    {  
    id: 3,
    text: 'Complete assignemnt 1',
    day: 'Feb 7th at 2:30',
    reminder:'false'
    }
])

//add task
const addTask = (task)=>{
  const id=Math.floor(Math.random()*100000)+1
  const newTask={id,...task}
  setTask([...tasks,newTask])
}
/// Delete Task
const deleteTask =(id)=>{
  console.log('delete this ',id)
  setTask(tasks.filter((task)=>task.id!==id))
}

//Toggle reminder

const toggleReminder =(id)=>{
  console.log('clicked double clicked', id)
  setTask(tasks.map((task)=> task.id==id? {...task, reminder: !task.reminder} : task))

}
  return (
    <div className="container">
     
     <Header title="Task Tracker" onAdd={()=> setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 'There are no tasks'}
     
    </div>
  );
}

export default App;
