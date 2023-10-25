import React from "react";
import {connect} from "react-redux";
import TodoElement from "../TodoElement/TodoElement";
import "./TodoList.css";

const TodoList = ({todos}) => {
    return (
        <>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <TodoElement key={index} index={index} todo={todo}/>
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos,
    };
};

export default connect(mapStateToProps)(TodoList);
