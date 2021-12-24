import React, { useState, useEffect } from 'react';

import { getPokemon, getAllPokemon } from '../services';

import { Loader, CardList } from '../components';


function PokedexType({ pokemon }) {
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
        {loading ? <Loader /> : (
          <>
          <div className="dropdown">
          <select
          onChange={handleChange}>
              <option value="">Choose type...</option>
              <option value="normal">Normal</option>
              <option value="grass">Grass</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option> 
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="steel">Steel</option>
              <option value="fairy">Fairy</option>
            </select>
            </div>
            <div className="grid-container">
              {pokemonData
              .filter(({ ...pokemon }) => {
                return pokemon.types[0].type.name.includes(pokemonSearch);
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

export default PokedexType;