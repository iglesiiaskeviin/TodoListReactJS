import React, { useState, useEffect } from 'react';
import { TaskRow } from "./components/taskRow";
import { TaskBanner } from "./components/taskBanner";
import { TaskCreator } from "./components/taskCreator";
import { VisibilityControl } from "./components/visibilityControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function TodoList() {

  const [userName, setUserName] = useState('');
  

  const [taskItems, setTaskItems] = useState([
    
  ]);


  const [showCompleted, setShowCompleted] = useState(false);


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
        <thead className="table-thead">
        <tr>
          <th>Tareas por hacer <FontAwesomeIcon icon={faCheckCircle} className="fas-circle-notDoIt" /></th>
          <th>¿Está realizada?</th>
        </tr>
        </thead>
        <tbody className="tBody-notDoIt">
            {taskTableRow(false)}
        </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p2">
        <VisibilityControl desc="tareas ya realizadas" isChecked={showCompleted} callback={checked => setShowCompleted(checked)}/>
      </div>
      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead className="table-thead">
              <tr>
                <th>Tareas ya realizada <FontAwesomeIcon icon={faCheckCircle} className="fas-circle-doIt"/></th>
                <th>Agregar a Tarea por hacer</th>
              </tr>
            </thead>
            <tbody className="tBody-doIt">
              {taskTableRow(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default TodoList;
