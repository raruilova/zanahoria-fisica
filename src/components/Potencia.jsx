import React from 'react';
import {Link} from 'react-router-dom';
import SideBar from './SideBar';

const Fuerza = () => {
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <SideBar/>
                <main class="col ps-md-2 pt-2">
                    <Link to="/" data-bs-target="#sidebar" data-bs-toggle="collapse" className="mens border rounded-3 p-1 text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
                            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <b>Menú</b>
                    </Link>
                    <div class="page-header pt-3">
                        <h2 class="tit">
                            <b>Potencia Mecánica</b>
                        </h2>
                    </div>
                    <p class="subtit1">
                        <b>La Potencia mecánica se define como la cantidad de trabajo realizado por unidad de tiempo. 
                                                                                                                                    Se utiliza la unidad de Watt en honor al escocés James Watt, 1736-1819, famoso por la construcción de una máquina de vapor.</b>
                    </p>
                    <hr/>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <form action="">
                                    <div class="form-group">
                                        <label for="uname1" class="tit">
                                            <b>Masa</b>
                                        </label>
                                        <input type="text" class="form-control form-control-md" name="" id="seltexto" required=""/>
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                        <label for="uname1" class="tit">
                                            <b>Aceleración</b>
                                        </label>
                                        <input type="text" class="form-control form-control-md" name="" id="seltexto" required=""/>
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                        <label for="uname1" class="tit">
                                            <b>Distancia</b>
                                        </label>
                                        <input type="text" class="form-control form-control-md" name="" id="seltexto" required=""/>
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                        <label for="uname1" class="tit">
                                            <b>Tiempo</b>
                                        </label>
                                        <input type="text" class="form-control form-control-md" name="" id="seltexto" required=""/>
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                        <input type="submit" class="btn btn-primary" required="" value="Calcular" id="boton"/>
                                    </div>
                                </form>
                                <br/>
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col">
                                <div class="card" id="tarjeta">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item" id="res">
                                            <h2 class="subtit">
                                                <b>P= &#40; m &#42; d &#42; a &#41; &#47; t</b>
                                            </h2>
                                        </li>
                                        <li class="list-group-item">
                                            <br/>
                                            <h4>
                                                <b>Res:</b>
                                            </h4>
                                            <br/>
                                            <h4 class="centro">sdccsc</h4>
                                            <br/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
};

export default Fuerza
