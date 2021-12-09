import {useState, useEffect} from 'react';


const useGetForce = (m ,a) => {
    const [force, setForce] = useState(1);

    const API = `http://52.15.59.104/api/fuerza?m=${parseInt(m)}&a=${parseInt(a)}`
    
    useEffect(() => {
        fetch(API)
        .then(resnponse => resnponse.json())
        .then(data => setForce(data))
        .catch(error => console.log(error));
    }, [API]);

    return force;
}

export default useGetForce;