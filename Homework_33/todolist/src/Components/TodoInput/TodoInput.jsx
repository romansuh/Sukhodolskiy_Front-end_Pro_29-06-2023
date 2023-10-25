import './TodoInput.css';
import React, {useState} from "react";
import {connect} from "react-redux";
import {addTodo} from "../../actions";

const TodoInput = ({addTodo}) => {
    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        if (todo !== "") {
            addTodo({text: todo, done: false});
            setTodo("");
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
};

const mapDispatchToProps = {
    addTodo,
};

export default connect(null, mapDispatchToProps)(TodoInput);
