import typeColors from "./TypesColor";
import "./card.css";

function Card({ pokemon }) {
    return (
        <div className="card__container">

            <div className="card__containers">
                <div className="card__div">
                    <div>
                        <img className="card__img" src={pokemon.sprites.front_default} alt="" />
                    </div>
                    <div className="card__name">
                        {pokemon.name}     
                    </div>
                    <div className="card__types">
                        {pokemon.types.map(type => {
                                return (
                                    <div className="card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                        {type.type.name}
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>

            <div className="card__containers">
                <div className="card__div">
                    <div>
                        <p>Height: {Math.round(pokemon.height * 3.9)}"</p>
                    </div>
                    <div>
                        <p>Weight: {Math.round(pokemon.weight / 4.3)} lbs</p>
                    </div>
                </div>
            </div>
            
            <div className="card__containers">
                <div className="card__div">
                    <p>Moves</p>
                        <div className="card__moves">
                            <div>
                                {pokemon.moves[0].move.name}
                            </div>
                            <div>
                                {pokemon.moves[1].move.name}
                            </div>
                            <div>
                                {pokemon.moves[2].move.name}
                            </div>
                        </div>
                </div>
            </div>
            
            
            <div className="card__containers">
                <div className="card__div">
                    <p>Base Stats</p>
                    <div className="card__stats">
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
                </div>
            </div>
            
        </div>
    );
}

export default Card;