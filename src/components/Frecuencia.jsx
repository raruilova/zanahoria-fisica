import React from 'react';
import {Link} from 'react-router-dom';
import SideBar from './SideBar';

const Frecuencia = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar/>
                <main className="col ps-md-2 pt-2">
                    <Link to="/" data-bs-target="#sidebar" data-bs-toggle="collapse" className="mens border rounded-3 p-1 text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
                            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <b>Menú</b>
                    </Link>
                    <div className="page-header pt-3">
                        <h2 className="tit">
                            <b>Frecuencia</b>
                        </h2>
                    </div>
                    <p className="subtit1">
                        <b></b>
                    </p>
                    <hr/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <form action="">
                                    <div className="form-group">
                                        <label for="uname1" className="tit">
                                            <b>Medio</b>
                                        </label>
                                        <select className="form-control" id="selec">
                                            <option value="hidrogeno">Hidrógeno</option>
                                            <option value="helio">Helio</option>
                                            <option value="aire20">Aire 20</option>
                                            <option value="oxigeno">Oxígeno</option>
                                            <option value="dioxidoazufre">Dióxido de Azufre</option>
                                            <option value="aguamar20">Agua mar 20</option>
                                            <option value="aguadestilada20">Agua destilada 20</option>
                                            <option value="etanol">Etanol</option>
                                            <option value="metanol">Metanol</option>
                                            <option value="aluminio">Aluminio</option>
                                            <option value="acero">Acero</option>
                                            <option value="laton">Latón</option>
                                            <option value="vidio">Vidio</option>
                                            <option value="diamante">Diamante</option>
                                        </select>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label for="uname1" className="tit">
                                            <b>Longitud de Onda</b>
                                        </label>
                                        <input type="text" className="form-control form-control-md" name="" id="seltexto" required=""/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary" required="" value="Calcular" id="boton"/>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col">
                                <div className="card" id="tarjeta">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" id="res">
                                            <h2 className="subtit">
                                                <b>F= v &#47; λ</b>
                                            </h2>
                                        </li>
                                        <li className="list-group-item">
                                            <br/>
                                            <h4>
                                                <b>Res:</b>
                                            </h4>
                                            <br/>
                                            <h4 className="centro">sdccsc</h4>
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

export default Frecuencia
