import React from 'react';
import '../assets/styles.css'

export const TaskBanner = props => (
     <h4 className="p-4 banner-text">
         Tareas pendientes {props.taskDoIt.filter(t => !t.done).length}
    </h4>
)