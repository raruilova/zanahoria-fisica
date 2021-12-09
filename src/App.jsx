import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "../src/index.css";
import Home from './components/Home';
import Prueba from './components/Prueba';
import Fuerza from './components/Fuerza';
import Potencia from './components/Potencia'
import Layout from './container/Layout';
import Frecuencia from './components/Frecuencia';
import LongitudOnda from './components/LongitudOnda';
import EnergiaPotencial from './components/EnergiaPotencial';
import EnergiaCinetica from './components/EnergiaCinetica';


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
                    <Route path="/potencia"
                    element={<Potencia/>}/>
                    <Route path="/frecuencia"
                    element={<Frecuencia/>}/>
                    <Route path="/longitudOnda"
                    element={<LongitudOnda/>}/>
                    <Route path="/energiaPotencial"
                    element={<EnergiaPotencial/>}/>
                     <Route path="/energiaCinetica"
                    element={<EnergiaCinetica/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default App
