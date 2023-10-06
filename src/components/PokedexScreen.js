import React from  'react';
import Stat from './Stat';
import Type from './Type'
import ErrorPoke from '../imgs/error.gif'
import LoadingPokemon from '../imgs/LoadingPokemon.gif'

function PokedexScreen({pokemon, loading, error}){
    if(error){
        return (
          <div className="pokedex-screen">
            <img
              src={ErrorPoke}
              alt="Hubo un error buscando tu pokemon"
              className="pokedex-no-screen"
            />
          </div>
        )
      }
    return (
        <div className="pokedex-screen">
          { !pokemon || loading ? // Si no hay pokemon o si esta cargando
            <img
              src={LoadingPokemon}
              alt="Aún no hay ningun pokemon"
              className="pokedex-no-screen"
            /> : // Todo cool, entonces devuelve un lindo pokemon
            <div className="pokemon-info">
              <h2 className="pokemon-name">{pokemon.id} {pokemon.name}</h2>
              <ul className='pokemon-types'>
                {pokemon.types.map(item => <Type key={item.type.name} item={item}/>)}
              </ul>
              <img
                className="pokemon-img"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <ul className="pokemon-stats">
                {pokemon.stats.map(item => <Stat key={item.stat.name} item={item}/>)}
              </ul>
            </div>
          }
        </div>
    )
}

export default PokedexScreen