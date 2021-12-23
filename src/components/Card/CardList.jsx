import typeColors from "./TypesColor";
import { Link } from "react-router-dom";

import "./cardList.css";

function CardList({ pokemon }) {
    return (
        <>
        <div className="Card">

            <Link to={`/pokemon/${pokemon.name}`}>
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
        </div>
        </>  
    );
}

export default CardList;