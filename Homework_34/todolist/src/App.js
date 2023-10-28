import './App.css';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadTodos} from './store/reducers/todosSlice';
import TodoList from './Components/TodoList/TodoList';
import TodoInput from './Components/TodoInput/TodoInput';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>React todo app usinf redux-thunk</h1>
            <TodoList/>
            <TodoInput/>
        </div>
    );
}

export default App;
