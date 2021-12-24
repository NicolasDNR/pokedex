import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getAllPokemon } from '../services';

import { Loader, Card } from '../components';

function Pokemon() {  
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  

  useEffect(() => {
    async function fetchData() {
      let res = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
      setPokemonData(res);   
      setLoading(false);
    }
    fetchData();
  })

  return (
    <>
      <div>
        {loading ?<Loader /> : (
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