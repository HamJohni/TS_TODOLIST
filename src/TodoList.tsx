import React from 'react';
import {filterTasks} from "./App";


 export type tasksType = {
    id: number,
    name: string,
    isDone: boolean
}

export type propsType = {
    title: string,
    task: Array<tasksType>,
    deleteTask: (id:number) => void,
    isTasks: (value: filterTasks) => void
}


export const TodoList = (props: propsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
            </div>
            <ul>
                {
                    props.task.map(item => (
                        <li key={item.id}><input type="checkbox" checked={item.isDone}/>
                            <span>{item.name}</span>
                            <button onClick={() => props.deleteTask(item.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>

            <button onClick={() => props.isTasks('all')}>All</button>
            <button onClick={() => props.isTasks('active')}>Active</button>
            <button onClick={() => props.isTasks('completed')}>Completed</button>
        </div>
    );
};