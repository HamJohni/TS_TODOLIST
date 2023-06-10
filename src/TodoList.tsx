import React, {ChangeEvent, useState} from 'react';
import {filterTasks} from "./App";


 export type tasksType = {
    id: string,
    name: string,
    isDone: boolean
}

export type propsType = {
    title: string,
    task: Array<tasksType>,
    deleteTask: (id:string) => void,
    isTasks: (value: filterTasks) => void,
    addTask: (newTaskTitle: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}


export const TodoList = (props: propsType) => {

     const [newTaskTitle, setNewTaskTitle] = useState('')

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyPress={(e) => {
                        if(e.charCode === 13) {
                            props.addTask(newTaskTitle)
                            setNewTaskTitle('')
                        }
                    }}

                    type="text" placeholder='Доабвить задачу'/>
                <button onClick={() => {
                    props.addTask(newTaskTitle)
                    setNewTaskTitle('')
                }}>+</button>
            </div>
            <ul>
                {
                    props.task.map(item => {

                        const onClickRemoveHandler = () => props.deleteTask(item.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(item.id, e.currentTarget.checked)
                        }

                        return (
                            <li key={item.id}>
                                <input type="checkbox"
                                       onChange={onChangeHandler}
                                       checked={item.isDone}/>
                                <span>{item.name}</span>
                                <button onClick={onClickRemoveHandler}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={() => props.isTasks('all')}>All</button>
            <button onClick={() => props.isTasks('active')}>Active</button>
            <button onClick={() => props.isTasks('completed')}>Completed</button>
        </div>
    );
};