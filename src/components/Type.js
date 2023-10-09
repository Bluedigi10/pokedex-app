import React from "react";

function Type({item}){
    const defineTypeColor= () =>{
        var color;
        switch(item.type.name){
            case 'bug':
                color = '#A8B820'
                break
            case 'water':
                color = '#3899F8'
                break
            case 'steel':
                color = '#A8A8C0'
                break
            case 'dragon':
                color = '#7860E0'
                break
            case 'electric':
                color = '#F8D030'
                break
            case 'ghost':
                color = '#6060B0'
                break
            case 'fire':
                color = '#F05030'
                break
            case 'fairy':
                color = '#E79FE7'
                break
            case 'ice':
                color = '#58C8E0'
                break
            case 'fighting':
                color = '#A05038'
                break
            case 'normal':
                color = '#A8A090'
                break
            case 'grass':
                color = '#78C850'
                break
            case 'psychic':
                color = '#F870A0'
                break
            case 'rock':
                color = '#B8A058'
                break
            case 'dark':
                color = '#7A5848'
                break
            case 'ground':
                color = '#E9D6A4'
                break
            case 'poison':
                color = '#B058A0'
                break
            case 'flying':
                color = '#98A8F0'
                break
            default:
                color = '#ffffff'
        }
        return color
    }
    
    const TypeStyle = {
        backgroundColor: defineTypeColor(),
    };
    return(
        <li className="pokemon-type" style={TypeStyle}>
            <span className="type-name">{item.type.name}</span>
        </li>
    )
}

export default Type