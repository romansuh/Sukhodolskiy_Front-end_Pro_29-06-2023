import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import LoginForm from './Components/LoginForm/LoginForm';
import WelcomePage from "./Components/WelcomePage/WelcomePage";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/welcome" element={<WelcomePage/>}/>
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
