import React, {useState} from 'react'
import IndirectChildren from './IndirectChildren'


export default props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(name, age, nerd){
       
        setName(name)
        setAge(age)
        setNerd(nerd)
    
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
                <IndirectChildren onClick={fornecerInformacoes}></IndirectChildren>         
        </div>
    )
}