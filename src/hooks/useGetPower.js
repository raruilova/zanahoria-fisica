import {useState, useEffect} from 'react';

const useGetPower = (m, a, d, t) => {
    const [power, setPower] = useState(1);

    const API = `http://52.15.59.104/api/potencia?m=${parseFloat(m)}&a=${parseFloat(a)}&d=${parseFloat(d)}&t=${parseFloat(t)}`;

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setPower(data))
        .catch(error => console.log(error));
    },[API]);

    return power;
}

export default useGetPower;