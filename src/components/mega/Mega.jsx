import "./Mega.css"
import React, {useState} from "react";

export default props => {

    function generateNumberNotObtained(min, max, array){

        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ?
        generateNumberNotObtained(min, max, array) : random
    }

    function generateNumbers(qtde) {
        const numbers = Array(qtde)
        .fill(0)
        .reduce((nums)=>{
            const newNumber = generateNumberNotObtained(1,60,nums)
            return [...nums, newNumber]
        },[])
        .sort((n1,n2)=>n1-n2)

        return numbers
    }

        const [qtde, setQtde] = useState(props.qtde || 6)
        const initialNumbers = generateNumbers(qtde)
        const [numbers, setNumbers] = useState(initialNumbers)

    return (

        <div className="Mega">

            <h2>Mega</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input
                    min="6"
                    max="10"
                    type="number" value={qtde}
                    onChange={e => {
                        setQtde(+e.target.value)
                        setNumbers(generateNumbers(+e.target.value))
                    }}/>
            </div>
                <button onClick={_ => setNumbers(generateNumbers(qtde))}>Gerar Números</button>
            </div>
    )
}