import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Counter from './components/counter/Counter'
import Input from './components/form/Input'
import IndirectFather from './components/comunication/IndirectFather'
import DirectFather from './components/comunication/DirectFather'
import Userinfo from './components/condicional/Userinfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListStudents from './components/repetição/ListStudents'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Card from './components/layout/Card'
import First from './components/basics/First'
import OnParams from './components/basics/OnParams'
import Fragmento from './components/basics/Fragment'
import NumRandom from './components/basics/GetRandom'
import ProductsTabels from './components/repetição/ProductsTabels'

export default  () => (

    <div className="App"> 
        <h1>Fundaments React</h1>

        <div className="Cards">
            <Card titulo="#13 - Megasena" color="#B9006E">
                 <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                 <Counter initialNumber={100}></Counter>
            </Card>

            <Card titulo="#11 - Componente Controlado (input)" color="#E45F56">
                 <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                 <IndirectFather></IndirectFather>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                 <DirectFather></DirectFather>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <Userinfo user={{ name: 'Fernando'}} />
                    {/* <Userinfo user={{name: 'Fernando'}} />
                    <Userinfo user={{}} /> */}
            </Card>

            <Card titulo="#07 - Products" color="#69e62e">
                    <ProductsTabels></ProductsTabels>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListStudents></ListStudents>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Pereira">
                    <FamiliaMembro name = "Pedro" />
                    <FamiliaMembro name = "Ana"/>
                    <FamiliaMembro name = "Gustavo"/>
                </Familia>
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
