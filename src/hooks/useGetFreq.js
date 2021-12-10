import {useState, useEffect} from 'react';


const useGetFreq = (l) => {
    const [freq, setFreq] = useState(1);

    const API = `https://movpendular.azurewebsites.net/CalcularFrecuencia?longitud=${parseInt(l)}`
    
    useEffect(() => {
        fetch(API)
        .then(resnponse => resnponse.json())
        .then(data => setFreq(data))
        .catch(error => console.log(error));
    }, [API]);

    return freq;
}

export default useGetFreq;