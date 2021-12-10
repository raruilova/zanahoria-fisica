import {useState, useEffect} from 'react';

const useGetFrecuency = (medium, lon) => {
    const [frecuency, setFrecuency] = useState(1);

    const API = `https://api-calculos.herokuapp.com/api/sonido?tipo=frecuencia&medio=${medium}&longitud_onda=${lon}`;

    const getFrecuency = async () => {
        const response = await fetch(API);
        const data = await response.json();
        setFrecuency(data);
    }

    useEffect(() => {
        getFrecuency();
    }, [API]);

    return frecuency;
}

export default useGetFrecuency;