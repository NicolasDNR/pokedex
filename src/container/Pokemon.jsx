import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPokemon, getAllPokemon } from '../components/GetPokemon/GetPokemon.jsx';
import Card from '../components/Card/Card';


function Pokemon() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const { pokemonID } = useParams();

  useEffect(() => {
    async function fetchData() {
      let res = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      await loadPokemon(res.results);
      setLoading(false);
    }
    fetchData(pokemonID);
  })

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }


  return (
    <>
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <div className="grid-container">
              {pokemonData
              .map((pokemon, index) => {
                return <Card key={index}>{pokemon.results}</Card>
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Pokemon;