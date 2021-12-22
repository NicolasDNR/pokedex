import React, { useState, useEffect } from 'react';

import { getPokemon, getAllPokemon } from '../components/GetPokemon/GetPokemon.jsx';
import CardList from '../components/Card/CardList.jsx';

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const [pokemonSearch, setPokemonSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      let res = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      await loadPokemon(res.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  const handleChange = (e) => {
    const value = (e.target.value);
    setPokemonSearch(value); 
  }

  return (
    <>
      <div>
      {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <input
            type="text"
            placeholder="Enter pokemon name"
            onChange={handleChange}
            className="search__bar"
            />
            <div className="grid-container">
              {pokemonData
              .filter(({ ...pokemon }) => {
                return pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase());
              })
              .map((pokemon, index) => {
                return <CardList key={index} pokemon={pokemon} />
              })}
            </div>
          </>
      )}
      </div>
    </>
  );
}

export default Pokedex;