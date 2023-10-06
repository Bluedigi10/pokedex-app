import React from "react";

function Type({item}){
    return(
        <li className="pokemon-type">
            <span className="type-name">{item.type.name}</span>
        </li>
    )
}

export default Type