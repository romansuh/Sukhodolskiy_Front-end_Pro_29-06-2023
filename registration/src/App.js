import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import EmptyPage from './Components/EmptyPage/EmptyPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/registration" element={<RegistrationForm/>}/>
                <Route path="/empty-page" element={<EmptyPage/>}/>
                <Route path="/" element={<Navigate to="/registration"/>}/>
            </Routes>
        </Router>
    );
};

export default App;
