import {useState, useEffect} from 'react';


const useGetHeight = (l ,a) => {
    const [height, setHeight] = useState(1);

    const API = `https://movpendular.azurewebsites.net/CalcularAltura?longitud=${parseInt(l)}&angle=${parseInt(a)}`
    
    useEffect(() => {
        fetch(API)
        .then(resnponse => resnponse.json())
        .then(data => setHeight(data))
        .catch(error => console.log(error));
    }, [API]);

    return height;
}

export default useGetHeight;