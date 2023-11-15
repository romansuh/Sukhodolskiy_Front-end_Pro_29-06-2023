import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        password: '',
    },
    reducers: {
        loginUser: (state, action) => {
            const {username, email, password} = action.payload;
            state.username = username;
            state.email = email;
            state.password = password;
            localStorage.setItem(state.email, JSON.stringify(state));
        },
    },
});

export const {loginUser} = userSlice.actions;

export default userSlice.reducer;
