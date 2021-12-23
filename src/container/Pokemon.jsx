import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPokemon, getAllPokemon } from '../components/GetPokemon/GetPokemon.jsx';
import Card from '../components/Card/Card';


function Pokemon() {  
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  

  useEffect(() => {
    async function fetchData() {
      let res = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
      console.log(res); 
      setPokemonData(res);   
      setLoading(false);
    }
    fetchData();
  })

  return (
    <>
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <div>
              <Card pokemon={pokemonData} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Pokemon;