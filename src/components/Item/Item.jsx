import { Link } from "react-router-dom";

const Item = ({ url, name }) => {
  return (
    <Link to={`/zoomPokemon/${url.split('/')[6]}`}>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/')[6]}.png`}
        />
        <h3>
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default Item;