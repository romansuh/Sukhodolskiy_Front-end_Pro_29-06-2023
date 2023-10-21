import React from "react";
import './TodoInput.css';

const TodoInput = ({todo, setTodo, addTodo}) => {
    return (
        <>
            <input type="text"
                   name="todo"
                   value={todo}
                   placeholder="Add new todo"
                   onChange={
                       (e) => setTodo(e.target.value)
                   }

            />
            <button className="add-todo-button" onClick={addTodo}>
                Add
            </button>
        </>
    );
};

export default TodoInput;