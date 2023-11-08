import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Users from "./Components/Users/Users"
import Albums from "./Components/Albums/Albums"
import Photos from "./Components/Photos/Photos"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/albums" element={<Albums/>}/>
                    <Route path="/photos" element={<Photos/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
