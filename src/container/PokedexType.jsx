import React, { useState, useEffect } from 'react';

import { getPokemon, getAllPokemon } from '../components/GetPokemon/GetPokemon.jsx';
import Card from '../components/Card/Card';


function PokedexType() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const [pokemonSearch, setPokemonSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      let res = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon`)
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
          <select
          onChange={handleChange}>
              <option value="">Choose...</option>
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
            <div className="grid-container">
              {pokemonData
              .filter(({ ...pokemon }) => {
                return pokemon.types[0].type.name.toLowerCase().includes(pokemonSearch.toLowerCase());
              })
              .map((pokemon, index) => {
                return <Card key={index} pokemon={pokemon} />
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PokedexType;