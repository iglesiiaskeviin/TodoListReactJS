import React, {useState} from 'react';
import '../assets/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const TaskCreator = props => {

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);
    
    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName("");
    }

    return (
        <div className="my-1 p-5 newTask-container-input">
            <input 
            type="text" 
            className="form-control m-2 w-25 h-25 p-3 "
            value={newTaskName}
            onChange={updateNewTaskValue}
            placeholder="Ingresa aquí tu tarea"
            />  
            <div className="btn-container">
                <button className="p-2 m-2 add-btn btn-primary btn text-center" onClick={createNewTask}>
                    Agregar <FontAwesomeIcon icon={faPlusCircle} />
                </button>
            </div>
        </div>
    )

}