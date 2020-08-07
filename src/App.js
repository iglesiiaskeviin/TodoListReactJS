import React, { useState, useEffect } from 'react';
import { TaskRow } from "./components/taskRow";
import { TaskBanner } from "./components/taskBanner";
import { TaskCreator } from "./components/taskCreator";
import { VisibilityControl } from "./components/visibilityControl";

function TodoList() {

  const [userName, setUserName] = useState('');
  

  const [taskItems, setTaskItems] = useState([
    {name: 'Tarea de ejemplo 1', done: false},
    {name: 'Tarea de ejemplo 2', done: false},
    {name: 'Tarea de ejemplo 3', done: false},
    {name: 'Tarea de ejemplo 4', done: false},
  ]);


  const [showCompleted, setShowCompleted] = useState(true);


/*   useEffect(() => {
    let data = localStorage.getItem('tasks');
    if(data != null){
      setTaskItems(JSON.parse(date));
    }else{
      setUserName("Ejemplo de lista de tareas")
      setTaskItems([
        {name: 'Tarea 1', done: false},
        {name: 'Tarea 2', done: false},
        {name: 'Tarea 3', done: false},
        {name: 'Tarea 4', done: false},
      ])
      setShowCompleted(true)
    }
  }, []);

  useEffect(() =>{
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]); */

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }


  const toggleTask = task => 
    setTaskItems(taskItems.map(t =>(t.name === task.name ? {...t, done: !t.done} : t)))
  
  const taskTableRow = (doneValue) => {
    return taskItems
    .filter(task => task.done === doneValue)
    .map(task =>(
      <TaskRow task={task} key={task.name} toggleTask={toggleTask}  />
    ))
  }

  return (
    <div>
      <TaskBanner userName={userName} taskDoIt={taskItems} />
      <TaskCreator callback={createNewTask}/>
      <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th>Descripción</th>
          <th>Realizado</th>
        </tr>
        </thead>
        <tbody>
            {taskTableRow(false)}
        </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p2">
        <VisibilityControl desc="Tarea completada" isChecked={showCompleted} callback={checked => setShowCompleted(checked)}/>
      </div>
      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Realizado</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRow(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default TodoList;
