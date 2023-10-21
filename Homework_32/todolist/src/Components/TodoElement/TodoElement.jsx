import React, {useState} from "react";
import './TodoElement.css';

const TodoElement = ({todoText}) => {
    const [isDone, setIsDone] = useState(false);

    const changeTodoState = () => {
        setIsDone(!isDone);
    };

    return (
        <li className={`todo-element ${isDone ? "done-todo" : ""}`} onClick={() => changeTodoState()}>
            <span>{todoText}</span>
        </li>
    );
};

export default TodoElement;