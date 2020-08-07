import React from 'react';
import '../assets/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export const TaskBanner = props => (
     <h4 className="p-4 banner-text m-2">
        <FontAwesomeIcon icon={faList}/> Tareas pendientes  {props.taskDoIt.filter(t => !t.done).length}
    </h4>
)