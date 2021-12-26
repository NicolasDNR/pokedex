import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPokemon, getAllPokemon } from '../services';

import { Loader, useBookmarks, typeColors } from '../components';

import "./pokedex.css";
import "../components/Card/cardList.css"

function PokedexFav() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const [bookmarksOnly, setBookmarksOnly] = useState(false);
  const [pokemonFav, setPokemonFav] = useState(pokemonData);
  const [bookmarks, toggleBookmark] = useBookmarks();

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

  const changeBookMarksOnly = (e) => {
    setBookmarksOnly(e.target.checked);
  };

  useEffect(() => {
    setPokemonFav(pokemonData.filter((s) => (bookmarksOnly ? bookmarks.includes(s.id) : s)));
  }, [pokemonData, bookmarksOnly, bookmarks]);

  return (
    <>
      <div>
      {loading ? <Loader /> : (
          <>
            <label htmlFor="check">Favorites only</label>
            <input id={"check"} type="checkbox" value={bookmarksOnly} onChange={changeBookMarksOnly} />
            <div className={"pokemon"}>
                <div className='grid__container'>
                {pokemonFav.map((pokemon) => {
                    const isBookmarked = bookmarks.includes(pokemon.id);
                    return (
                        <div key={pokemon.id} className={`pokemon ${isBookmarked ? "bookmarked" : ""}`}>
                            <div className="Card">

                                <Link to={`/pokemon/${pokemon.name}`} className="Card__link">
                                    <div className="Card__img">
                                        <img src={pokemon.sprites.front_default} alt="" />
                                    </div>
                                    <div className="Card__name">
                                        {pokemon.name}   
                                    </div>
                                </Link>  

                                <div className="Card__types">
                                    {pokemon.types
                                        .map(type => {
                                            return (
                                                <div 
                                                className="Card__type" 
                                                style={{ backgroundColor: typeColors[type.type.name] }}>
                                                    {type.type.name}
                                                </div>
                                            )
                                        })}
                                </div>

                                <div>
                                    <button onClick={toggleBookmark(pokemon.id)}>
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