import React from "react";

function Type({item}){
    const defineTypeColor= () =>{
        var color;
        const tipo = item.type.name
        const tipos = {
            'bug': () => {
                color = '#A8B820'
            },
            'water': () => {
                color = '#3899F8'
            },
            'steel': () => {
                color = '#A8A8C0'
            },
            'dragon': () => {
                color = '#7860E0'
            },
            'electric': () => {
                color = '#F8D030'
            },
            'ghost': () => {
                color = '#6060B0'
            },
            'fire': () => {
                color = '#F05030'
            },
            'fairy': () => {
                color = '#E79FE7'
            },
            'ice': () => {
                color = '#58C8E0'
            },
            'fighting': () => {
                color = '#A05038'
            },
            'normal': () => {
                color = '#A8A090'
            },
            'grass': () => {
                color = '#78C850'
            },
            'psychic': () => {
                color = '#F870A0'
            },
            'rock': () => {
                color = '#B8A058'
            },
            'dark': () => {
                color = '#7A5848'
            },
            'ground': () => {
                color = '#E9D6A4'
            },
            'poison': () => {
                color = '#B058A0'
            },
            'flying': () => {
                color = '#98A8F0'
            }
        }
        if(tipos[tipo]){
            tipos[tipo]();
        }else{
            color = '#FFFFFF'
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