import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchTodos} from '../../api/todosApi';

export const loadTodos = createAsyncThunk('todos/loadTodos', async () => {
    return fetchTodos();
});

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos[action.payload];
            if (todo) {
                todo.done = !todo.done;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            });
    },
});

export const {addTodo, toggleTodo} = todosSlice.actions;
export default todosSlice.reducer;
