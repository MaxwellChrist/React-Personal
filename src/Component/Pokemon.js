import React from "react";

const Pokemon = (props) => {
    
    const { poke, setPoke } = props

    return (
        <>
            {poke.map(x => {
                return (
                <li key={x.id}>
                    {x.name} is a {x.stage} pokemon with a type of {x.type}
                </li>  
                )
            })}
        </>
    )
}

export default Pokemon