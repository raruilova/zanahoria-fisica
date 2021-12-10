import { useState, useEffect } from "react";

const useGetVolume = (v, p, t, p2, t2) => {
  const [volumeState, setVolumeState] = useState(1);

  const API = `https://mysterious-river-04485.herokuapp.com/api/volumen/${parseInt(
    v
  )}/${parseInt(p)}/${parseInt(t)}/${parseInt(p2)}/${parseInt(t2)}`;

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setVolumeState(data))
    .catch(err => console.log(err));
  }, [API]);

  return volumeState;
};

export default useGetVolume;
