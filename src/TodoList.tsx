import React, {ChangeEvent, useState} from 'react';
import {filterTasks} from "./App";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


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
    filter: filterTasks
}


export const TodoList = (props: propsType) => {


     const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState('')

    const addTask = () => {
         if(newTaskTitle.trim() !== '') {
             props.addTask(newTaskTitle)
             setNewTaskTitle('')
             setError('')
         } else{
             setError('Title is required')
         }
    }

    const inputTitle = (e: any) => {
        setError('')
        if(e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyDown ={inputTitle}
                    className={error? "error": ''}
                    placeholder='Добавить задачу'
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error__message">{error}</div>}
            </div>
            <ul>
                {
                    props.task.map(item => {

                        const onClickRemoveHandler = () => props.deleteTask(item.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(item.id, e.currentTarget.checked)
                        }

                        return (
                            <li key={item.id} className={item.isDone ? "is-done" : ''}>
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

            <button className={props.filter === 'all' ? "active__filter": ''} onClick={() => props.isTasks('all')}>All</button>
            <button className={props.filter === 'active' ? "active__filter": ''} onClick={() => props.isTasks('active')}>Active</button>
            <button className={props.filter === 'completed' ? "active__filter": ''} onClick={() => props.isTasks('completed')}>Completed</button>
        </div>
    );
};