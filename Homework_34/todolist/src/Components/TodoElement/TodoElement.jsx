import './TodoElement.css';
import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleTodo} from '../../store/reducers/todosSlice';

function TodoElement({index, todo}) {
    const dispatch = useDispatch();

    const changeTodoState = () => {
        dispatch(toggleTodo(index));
    };

    return (
        <li
            className={`todo-element ${todo.done ? 'done-todo' : ''}`}
            onClick={changeTodoState}
        >
            <span>{todo.text}</span>
        </li>
    );
}

export default TodoElement;