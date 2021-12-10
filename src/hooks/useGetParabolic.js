import {useState, useEffect} from 'react';


const useGetParabolic = (vi ,a, t) => {
    const [parabolic, setParabolic] = useState(1);

    const API = `https://api-grupo6.herokuapp.com/movimiento_parabolico?velinicial=${parseInt(vi)}&aceleracion=${parseInt(a)}&tiempo=${parseInt(t)}`
    
    useEffect(() => {
        fetch(API)
        .then(resnponse => resnponse.json())
        .then(data => setParabolic(data))
        .catch(error => console.log(error));
    }, [API]);

    return parabolic;
}

export default useGetParabolic;