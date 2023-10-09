import React, {useState} from  'react';

function PokemonForm({ setPokemonId, setLoading, setError }){

    const [ pokemon, setPokemon ] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if(pokemon !== ''){
          // Estara cargando por que hará una petición a la API
          setError(false)
          setLoading(true)
          const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon
          setPokemonId(pokemonID)
          setPokemon('')
          return
        }
        setError(true) //Si manda el formulario vacío, hay un error
      }

    return (
        <form className='pokemon-form' onSubmit={handleSubmit}>
            <input type='text'
              className='pokemon-input'
              name='pokemon' 
              value={pokemon} 
              placeholder='Search Pokemon'
              onChange={e => setPokemon(e.target.value)}
              autoComplete='off'/>
            <button type='submit' className='pokemon-btn' value=""/>
        </form>
    )
}

export default PokemonForm