import React from "react";
import './TodoList.css';
import TodoElement from '../TodoElement/TodoElement';

const TodoList = ({todoList}) => {
    return (
        <>
            <ul className="todo-list">
                {todoList.map((todo) => (
                    <TodoElement todoText={todo}/>
                ))}
            </ul>
        </>
    );
};

export default TodoList;