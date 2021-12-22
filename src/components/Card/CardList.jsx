import typeColors from "./TypesColor";

import "./cardList.css";

function CardList({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a>       
            </div>
            <div className="Card__types">
                {pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })}
            </div>
        </div>
    );
}

export default CardList;