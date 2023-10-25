import './App.css';
import TodoList from './Components/TodoList/TodoList';
import TodoInput from "./Components/TodoInput/TodoInput";
import React from "react";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>React todo app using redux</h1>
                <TodoList/>
                <TodoInput/>
            </div>
        </Provider>
    );
}

export default App;
