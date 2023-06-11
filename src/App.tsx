import React, {useState} from 'react';
import {tasksType, TodoList} from "./TodoList";
import {v1} from "uuid";
import './App.css'
export type filterTasks = 'all' | 'active' | 'completed'


function App () {

    const [tasks,setTasks] = useState<Array<tasksType>>([
        {
            id: v1(),
            name: "Harry Porter",
            isDone: false
        },
        {
            id: v1(),
            name: "Doctor Strange",
            isDone: true
        },
        {
            id: v1(),
            name: "HULK",
            isDone: false
        }
    ])

    function changeStatus (taskId: string, isDone: boolean){
        let task = tasks.find(t => t.id === taskId)

        if(task){
            task.isDone = isDone
        }

        setTasks([...tasks])
    }

    const [filter,setFilter] = useState<filterTasks>('all')

    const deleteTask = (id : string) => {
        let filterTask = tasks.filter((item) => item.id !== id)
        setTasks(filterTask)
    }

    const addTask = (newTaskTitle: string) => {
        let newTask= {
            id: v1(),
            name: newTaskTitle,
            isDone: false
        }

        let newTasks = [newTask, ...tasks]

        setTasks(newTasks)

    }

    let filterTask = tasks

    const isTasks = (value: filterTasks) => {
        setFilter(value)
    }

    if(filter === 'completed') {
        filterTask = tasks.filter((item) => item.isDone === true)
    }
    if(filter === 'active') {
        filterTask = tasks.filter((item) => item.isDone === false)
    }

    return (
        <div style={{display: 'flex',columnGap: "20px"}}>
          <TodoList isTasks={isTasks}
                    deleteTask={deleteTask}
                    task={filterTask}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    title="What we need to watch ?"
                    filter={filter}
          />
        </div>
  );
}

export default App;
