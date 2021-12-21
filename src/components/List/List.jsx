import { useState } from "react";

import Item from "../Item/Item";

const List = ({ list = []}) => {
  const [pokemonSearch, setPokemonSearch] = useState("");

  if (list.length === 0) {
    return <div>Aucun pokemon trouvé</div>;
  }

  const handleChange = (e) => {
    const value = (e.target.value);
    setPokemonSearch(value); 
  }

  return (
    <div>
    <input
        type="text"
        placeholder="Choissisez un pokemon"
        onChange={handleChange}
      />
      <button>chercher</button>
      {list
      .filter(({ ...pokemon }) => {
        return pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase());
      })
      .map(({ ...pokemon }, index) => (
        <Item key={index} {...pokemon}>
        </Item>
      ))}
    </div>
  );
};

export default List;