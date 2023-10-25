import './TodoElement.css';
import React from "react";
import {connect} from "react-redux";
import {toggleTodo} from "../../actions";

const TodoElement = ({todo, index, toggleTodo}) => {
    return (
        <li
            className={`todo-element ${todo.done ? "done-todo" : ""}`}
            onClick={() => toggleTodo(index)}
        >
            <span>{todo.text}</span>
        </li>
    );
};

const mapDispatchToProps = {
    toggleTodo,
};

export default connect(null, mapDispatchToProps)(TodoElement);
