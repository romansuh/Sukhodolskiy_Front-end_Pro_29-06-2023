import './TodoInput.css';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/reducers/todosSlice';

function TodoInput() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');

    const handleAddTodo = () => {
        if (todo.trim() !== '') {
            dispatch(addTodo({text: todo, done: false}));
            setTodo('');
        }
    };

    return (
        <>
            <input
                type="text"
                name="todo"
                value={todo}
                placeholder="Add new todo"
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="add-todo-button" onClick={handleAddTodo}>
                Add
            </button>
        </>
    );
}

export default TodoInput;

