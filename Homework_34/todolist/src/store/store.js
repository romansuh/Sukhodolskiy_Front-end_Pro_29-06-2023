import {configureStore} from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: [thunk],
});

export default store;
