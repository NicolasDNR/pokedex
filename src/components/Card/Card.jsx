import typeColors from "./TypesColor";
import "./card.css";

function Card({ pokemon }) {
    return (
        <div>
            <div>
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div>
                {pokemon.name}     
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
            <div>
                <div>
                    <p>Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div>
                    <p>Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div>
                    <p>Moves</p>
                    {pokemon.moves[0].move.name}<br />
                    {pokemon.moves[1].move.name}<br />
                    {pokemon.moves[2].move.name}
                </div>
            </div>
            <div>
                hp: {pokemon.stats[0].base_stat}
            </div>
            <div>
                attack: {pokemon.stats[1].base_stat}
            </div>
            <div>
                defense: {pokemon.stats[2].base_stat}
            </div>
            <div>
                spe-attack: {pokemon.stats[3].base_stat}
            </div>
            <div>
                spe-defense: {pokemon.stats[4].base_stat}
            </div>
            <div>
                speed: {pokemon.stats[5].base_stat}
            </div>
        </div>
    );
}

export default Card;