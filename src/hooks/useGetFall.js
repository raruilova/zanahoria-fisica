import {useState, useEffect} from 'react';
import axios from 'axios';

const useGetFall = (pi, vi, t) => {
    const [fall, setFall] = useState(1);

    const API = `https://api-grupo6.herokuapp.com/caida_libre?posicion_inicial=${parseInt(pi)}&velocidad_inicial=${parseInt(vi)}&tiempo_caidalibre=${parseInt(t)}`;

    useEffect(async() => {
        /*fetch(API)
        .then(response => response.json())
        .then(data => setFall(data))
        .catch(error => console.log(error));*/
        const response = await axios(API);
        setFall(response);
    },[API]);

    return fall;
}

export default useGetFall;