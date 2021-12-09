import React from 'react'
import {Link} from "react-router-dom";
import Home from './Home';

const SideBar = () => {
    return (
        <>
            <div className="col-auto px-0"
                style={
                    {backgroundColor: "black"}
            }>
                <div id="sidebar" className="collapse collapse-horizontal show border-end">
                    <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                        <Link to="/" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"
                            style={
                                {backgroundColor: "black"}
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16"
                                style={
                                    {color: "orange"}
                            }>
                                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg>
                            <span class="home">Home</span>
                        </Link>
                        <div className="dropdown list-group-item" id="fondo2">
                            <button className="dropdown-toggle btn1" type="button" id="dropdownMenuButton1 titulo" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-sitemap fa-3x"></i>
                                <b>Grupo 1</b>
                            </button>
                            <ul className="dropdown-menu" id="men">
                                <li>
                                    <Link className="dropdown-item stil" to="/prueba" id="mean">Calculo de densidad</Link>
                                </li>
                                <li>
                                    <a className="dropdown-item stil" href="#" id="mean">Calculo de volumen</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown list-group-item" id="fondo2">
                            <button className="dropdown-toggle btn1" type="button" id="dropdownMenuButton1 titulo" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-sitemap fa-3x"></i>
                                <b>Grupo 2</b>
                            </button>
                            <ul class="dropdown-menu" id="men">
                                <li>
                                    <Link className="dropdown-item stil" to="/frecuencia" id="mean">Frecuencia</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item stil" to="/longitudOnda" id="mean">Longitud de onda</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown list-group-item" id="fondo2">
                            <button className="dropdown-toggle btn1" type="button" id="dropdownMenuButton1 titulo" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-sitemap fa-3x"></i>
                                <b>Grupo 3</b>
                            </button>
                            <ul className="dropdown-menu" id="men">
                                <li>
                                    <Link className="dropdown-item stil" to="/fuerza" id="mean">Cálculos de fuerzas</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item stil" to="/potencia" id="mean">Potencia mecánica</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown list-group-item" id="fondo2">
                            <button className="dropdown-toggle btn1" type="button" id="dropdownMenuButton1 titulo" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-sitemap fa-3x"></i>
                                <b>Grupo 4</b>
                            </button>
                            <ul className="dropdown-menu" id="men">
                                <li>
                                    <Link className="dropdown-item stil" to="/energiaPotencial" id="mean">Energia Potencial</Link>
                                </li>
                                <li>
                                <Link className="dropdown-item stil" to="/energiaCinetica" id="mean">Energia Cinetica</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown list-group-item" id="fondo2">
                            <button className="dropdown-toggle btn1" type="button" id="dropdownMenuButton1 titulo" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-sitemap fa-3x"></i>
                                <b>Grupo 5</b>
                            </button>
                            <ul className="dropdown-menu" id="men">
                                <li>
                                    <a className="dropdown-item stil" href="#" id="mean">Calculo de frecuencia</a>
                                </li>
                                <li>
                                    <a className="dropdown-item stil" href="#" id="mean">Diferencia de la altura</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown list-group-item" id="fondo2">
                            <button className="dropdown-toggle btn1" type="button" id="dropdownMenuButton1 titulo" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-sitemap fa-3x"></i>
                                <b>Grupo 6</b>
                            </button>
                            <ul className="dropdown-menu" id="men">
                                <li>
                                    <a className="dropdown-item stil" href="#" id="mean">Movimiento Parabólico</a>
                                </li>
                                <li>
                                    <a className="dropdown-item stil" href="#" id="mean">Caida libre</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default SideBar;
