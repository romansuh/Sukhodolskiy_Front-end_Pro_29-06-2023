import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadTodos} from '../../store/reducers/todosSlice';
import TodoElement from '../TodoElement/TodoElement';
import "./TodoList.css";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    return (
        <div className="todo-list-container">
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <TodoElement key={index} index={index} todo={todo}/>
                ))}
            </ul>
        </div>
    );
};


export default TodoList;
