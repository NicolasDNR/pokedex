import React, { useState, useEffect } from 'react';

import { getPokemon, getAllPokemon } from '../services';

import { Loader, CardList } from '../components';

import "./pokedex.css";

function Pokedex({ addSearch }) {
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
    let pokemonDatas = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(pokemonDatas);
  }

  const handleChange = (e) => {
    const value = (e.target.value);
    setPokemonSearch(value); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addSearch(pokemonData);
  }

  return (
    <>
      <div>
      {loading ? <Loader /> : (
         <>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter pokemon name"
            onChange={handleChange}
            className="search__bar"
            />
            <div className="grid__container">
              {pokemonData
              .filter(({ ...pokemon }) => {
                return pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase());
              })
              .map((pokemon, index) => {
                return <CardList key={index} pokemon={pokemon} />
              })
              }
            </div>
            </form>
         </>
      )}
      </div>
    </>
  );
}

export default Pokedex;