import React, {useState} from 'react';
import {tasksType, TodoList} from "./TodoList";

export type filterTasks = 'all' | 'active' | 'completed'


function App () {

    const [task,setTask] = useState<Array<tasksType>>([
        {
            id: 1,
            name: "Harry Porter",
            isDone: false
        },
        {
            id: 2,
            name: "Doctor Strange",
            isDone: true
        },
        {
            id: 3,
            name: "HULK",
            isDone: false
        }
    ])

    const [filter,setFilter] = useState<filterTasks>('all')

    const deleteTask = (id : number) => {
        let filterTask = task.filter((item) => item.id !== id)

        setTask(filterTask)
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
                    title="What we need to watch ?"/>
        </div>
  );
}

export default App;
