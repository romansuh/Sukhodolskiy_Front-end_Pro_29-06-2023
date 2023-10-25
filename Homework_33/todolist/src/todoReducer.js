const initialState = {
    todos: [
        { text: "Create react TODO web app", done: true },
        { text: "Create react TODO web app using redux (with thunk)", done: false },
        { text: "Create react TODO web app using redux (without thunk)", done: true },
    ],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "TOGGLE_TODO":
            const updatedTodos = state.todos.map((todo, index) =>
                index === action.payload ? {text: todo.text, done: !todo.done} : todo
            );
            return {
                ...state,
                todos: updatedTodos,
            };
        default:
            return state;
    }
};

export default todoReducer;