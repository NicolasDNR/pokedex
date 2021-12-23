import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getAllPokemon } from '../components/GetPokemon/GetPokemon.jsx';
import Card from '../components/Card/Card';
import Loader from '../components/Loader/Loader.jsx';

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