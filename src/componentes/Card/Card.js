import react from 'react';
import './style.css';

function Card({ pokemon }) {
    return(
        <div className="Card">
            <div className="Card__img">
             <img src={pokemon.sprites.front_default} alt=""/>
             </div>  

                <div className="card__Name">
                     {pokemon.name}
                </div>

                <div className="card__types">
                    {pokemon.types.map(type => {

                        return(
                            <div className="Card__type">
                                {type.type.name} 
                            </div>
                        )
                    })}
                </div>
                <div className="card__info">
                    <div className="card__data Card__data--weight">
                        <p className="title">weight</p>
                        <p> {pokemon.weight}</p>
                    </div>

                    <div className="card__data Card__data--height">
                        <p className="title">height</p>
                        <p> {pokemon.height}</p>
                    </div>

                    <div className="card__data Card__data--ability">
                        <p className="title">Ability</p>
                        <p> {pokemon.abilities[0].ability.name}</p>
                    </div>
                </div>
        </div>
    )
}
export default Card;