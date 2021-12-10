import {useState, useEffect} from 'react';


const useGetKinetic = (m ,v) => {
    const [kinetic, setKinetic] = useState(1);

    const API = `https://aqueous-brushlands-93108.herokuapp.com/api/EnergiaCinetica/${parseInt(m)}/${parseInt(v)}`;
    
    useEffect(() => {
        fetch(API)
        .then(resnponse => resnponse.json())
        .then(data => setKinetic(data))
        .catch(error => console.log(error));
    }, [API]);

    return kinetic;
}

export default useGetKinetic;