import React from 'react';
import './styles/App.css'
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
