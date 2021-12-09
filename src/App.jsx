import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "../src/index.css";
import Home from './components/Home';
import Prueba from './components/Prueba';
import Fuerza from './components/Fuerza';

import Layout from './container/Layout';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/"
                        element={<Home/>}/>
                    <Route path="/prueba"
                        element={<Prueba/>}/>
                    <Route path="/fuerza"
                    element={<Fuerza/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default App
