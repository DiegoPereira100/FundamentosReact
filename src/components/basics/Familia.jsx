import React from "react";
import FamiliaMembro from './FamiliaMembro'

export default props =>{

    return (
        <div>
            <FamiliaMembro nome = "Pedro" sobrenome="Ferreira"></FamiliaMembro>
            <FamiliaMembro nome = "Ana" sobrenome="Ferreira"></FamiliaMembro>
            <FamiliaMembro nome = "Gustavo" sobrenome="Ferreira"></FamiliaMembro>
        </div>
    )

}