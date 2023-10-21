import './App.css';
import TodoList from './Components/TodoList/TodoList';
import TodoInput from "./Components/TodoInput/TodoInput";
import React, {useState} from "react";

function App() {
    const [todos, setTodos] = useState(
        ["Create react TODO web app",
            "Create react TODO web app using redux",
            "Create react TODO web app using redux-thunk"]
    );
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    return (
        <div className="App">
            <h1>React todo app</h1>
            <TodoList todoList={todos}/>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        </div>
    );
}

export default App;
