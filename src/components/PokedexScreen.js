import React, {Component} from  'react';
import ErrorPokemon from '../imgs/error.gif';

class PokedexScreen extends Component{
    render(){
        return (
            <div className="pokedex-screen">
                <img src={ErrorPokemon}
                alt="Hubo un error buscando tu pokemon"
                className="pokedex-no-screen"
                />
            </div>
        )
    }
}

export default PokedexScreen