import React from 'react';
import {tasksType, TodoList} from "./TodoList";

function App() {

    let task1: Array<tasksType> = [
        {
            id: 1,
            name: "CSS",
            isDone: true
        },
        {
            id: 2,
            name: "HTML",
            isDone: true
        },
        {
            id: 3,
            name: "REACT",
            isDone: true
        }
    ]

    let task2: Array<tasksType> = [
        {
            id: 1,
            name: "Go to shop",
            isDone: true
        },
        {
            id: 2,
            name: "do housework",
            isDone: false
        },
        {
            id: 3,
            name: "Go to gym",
            isDone: false
        }
    ]

    let task3: Array<tasksType> = [
        {
            id: 1,
            name: "Harry Porter",
            isDone: true
        },
        {
            id: 2,
            name: "Doctor Strange",
            isDone: true
        },
        {
            id: 3,
            name: "HULK",
            isDone: true
        }
    ]

    return (
        <div style={{display: 'flex',columnGap: "20px"}}>
          <TodoList task={task1} title="What we need to learn ? "/>
          <TodoList task={task2} title="What we need to do ?"/>
          <TodoList task={task3} title="What we need to watch ?"/>
        </div>
  );
}

export default App;
