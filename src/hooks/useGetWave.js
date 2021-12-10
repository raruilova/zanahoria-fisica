import { useEffect, useState } from 'react';

const useGetWave = (medium, fr) => {
    const [wave, setWave] = useState(1);
    const API = `https://api-calculos.herokuapp.com/api/sonido?tipo=longitud_onda&medio=${medium}&frecuencia=${parseFloat(fr)}`;
    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => setWave(data))
            .catch(err => console.log(err));
    },[API]);

    return wave;

}

export default useGetWave;