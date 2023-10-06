import React from "react";

function Type({item}){
    const obj = document.getElementsByClassName('pokemon-type');
    var color;
    switch(item.type.name){
        case 'bug':
            color = '#A8B820'
            break
        case 'water':
            color = '#3899F8'
            break
        default:
            color = '#ffffff'
            
    }
    obj.style = `background-color: ${color}`
    return(
        <li className="pokemon-type">
            <span className="type-name">{item.type.name}</span>
        </li>
    )
}

export default Type