import './App.css'
import React from 'react'


import Card from './components/layout/Card'
import First from './components/basics/First'
import OnParams from './components/basics/OnParams'
import Fragmento from './components/basics/Fragment'
import NumRandom from './components/basics/GetRandom'
import Familia from './components/basics/Familia'

export default  () =>{

    return (

    <div className="App">
        <h1>Fundaments React</h1>

    <div className="Cards">

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
            <Familia></Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
            <NumRandom></NumRandom>
        </Card>

        <Card titulo="#03 - Fragment" color="#E94C6F">
            <Fragmento></Fragmento>
        </Card>

        <Card titulo="#02 - OnParams" color="#E8B71A">
            <OnParams 
                titulo="Situação do Aluno" 
                aluno="Pedro" 
                nota={5.3}>
            </OnParams>
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#588C73">
            <First></First>
        </Card>
    </div>
    
    </div>

    )

}