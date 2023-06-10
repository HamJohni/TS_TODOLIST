import React, {useState} from 'react';
import {tasksType, TodoList} from "./TodoList";
import {v1} from "uuid";
export type filterTasks = 'all' | 'active' | 'completed'


function App () {

    const [task,setTask] = useState<Array<tasksType>>([
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

    const [filter,setFilter] = useState<filterTasks>('all')

    const deleteTask = (id : string) => {
        let filterTask = task.filter((item) => item.id !== id)
        setTask(filterTask)
    }

    const addTask = (newTaskTitle: string) => {
        let newTask= {
            id: v1(),
            name: newTaskTitle,
            isDone: false
        }

        let newTasks = [newTask, ...task]

        setTask(newTasks)

    }

    let filterTask = task

    const isTasks = (value: filterTasks) => {
        setFilter(value)
    }

    if(filter === 'completed') {
        filterTask = task.filter((item) => item.isDone === true)
    }
    if(filter === 'active') {
        filterTask = task.filter((item) => item.isDone === false)
    }

    return (
        <div style={{display: 'flex',columnGap: "20px"}}>
          <TodoList isTasks={isTasks}
                    deleteTask={deleteTask}
                    task={filterTask}
                    addTask={addTask}
                    title="What we need to watch ?"/>
        </div>
  );
}

export default App;
