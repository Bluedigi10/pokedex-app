import React from  'react';
import Stat from './Stat';

function PokedexScreen({pokemon, loading, error}){
    return (
        <div className="pokedex-screen">
            <div className='pokemon-info'>
                <h2 className='pokemon-name'>No. {pokemon.id} {pokemon.name}</h2>
                <img
                  className="pokemon-img"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <ul className='pokemon-stats'>
                    {pokemon.stats.map(item => (
                        <Stat key={item.stat.name} item={item}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PokedexScreen