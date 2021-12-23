import React from 'react'

export default function GetRandom(max, min) {

max = 20
min = 10

return (

    <div>
        <h1>
            
            Valor aleatório

        </h1>
    <strong>{parseInt(Math.random() * (max - min) + min)}</strong>
        <h3>
            
            Valor Máximo

        </h3>
    <strong>{max}</strong>
        <h3>
            
            Valor Mínimo

        </h3>
    <strong>{min}</strong>

    
    </div>
    
    )

}