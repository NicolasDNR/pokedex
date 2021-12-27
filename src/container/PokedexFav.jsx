import React, { useState, useEffect } from 'react';

import { getPokemon, getAllPokemon } from '../services';

import { Loader, useFavorites, CardList } from '../components';

import "./pokedex.css";
import "../components/Card/cardList.css"

function PokedexFav() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const [favoritesOnly, setfavoritesOnly] = useState(false);
  const [pokemonFav, setPokemonFav] = useState(pokemonData);
  const [favorites, togglefavorites] = useFavorites();

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

  const changefavoritesOnly = (e) => {
    setfavoritesOnly(e.target.checked);
  };

  useEffect(() => {
    setPokemonFav(pokemonData.filter((s) => (favoritesOnly ? favorites.includes(s.id) : s)));
  }, [pokemonData, favoritesOnly, favorites]);

  return (
    <>
      <div>
      {loading ? <Loader /> : (
          <>
            <div className='favoritesOnly'>
                <label htmlFor="check">Favorites only</label>
                <input id={"check"} type="checkbox" value={favoritesOnly} onChange={changefavoritesOnly} />
            </div>
            <div className={"pokemon"}>
                <div className='grid__container'>
                {pokemonFav.map((pokemon) => {
                    const isBookmarked = favorites.includes(pokemon.id);
                    return (
                        <div key={pokemon.id} className={`pokemon ${isBookmarked ? "bookmarked" : ""}`}>
                            <div className="Card">

                                <CardList pokemon={pokemon} />

                                <div>
                                    <button className='favorites__button' onClick={togglefavorites(pokemon.id)}>
                                        {isBookmarked ? "Remove from favorites" : "Add to favorites"}
                                    </button>
                                </div>

                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
          </>
      )}
      </div>
    </>
  );
}

export default PokedexFav;