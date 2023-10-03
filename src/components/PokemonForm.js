import React, {Component} from  'react';

class PokemonForm extends Component{
    render(){
        return (
            <div className='pokemon-form'>
                <input type='text' className='pokemon-input' placeholder='Search Pokemon'>
                </input>
                <button className='pokemon-btn'></button>
            </div>
        )
    }
}

export default PokemonForm