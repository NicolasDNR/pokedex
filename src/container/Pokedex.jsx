import { useEffect, useState } from "react";

import List from "../components/List/List";

const Pokedex = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState("Loading...");

  const fetchData = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon`
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setPokemon(data);
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <List list={pokemon.results} />
    </>
  );
}; 

export default Pokedex;