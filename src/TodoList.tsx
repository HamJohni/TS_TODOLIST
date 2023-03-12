import React from 'react';


 export type tasksType = {
    id: number,
    name: string,
    isDone: boolean
}

type propsType = {
    title: string,
    task: Array<tasksType>
}


export const TodoList = (props: propsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.task[0].isDone}/><span>{props.task[0].name}</span></li>
                <li><input type="checkbox" checked={props.task[0].isDone}/><span>{props.task[1].name}</span></li>
                <li><input type="checkbox" checked={props.task[0].isDone}/><span>{props.task[2].name}</span></li>
            </ul>
        </div>
    );
};