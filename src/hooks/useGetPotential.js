import {useState, useEffect} from 'react';


const useGetPotencial = (m ,v, h) => {
    const [potencial, setPotencial] = useState(1);

    const API = `https://aqueous-brushlands-93108.herokuapp.com/api/EnergiaPotencial/${parseInt(m)}/${parseInt(v)}/${parseInt(h)}`;
    
    useEffect(() => {
        fetch(API)
        .then(resnponse => resnponse.json())
        .then(data => setPotencial(data))
        .catch(error => console.log(error));
    }, [API]);

    return potencial;
}

export default useGetPotencial;