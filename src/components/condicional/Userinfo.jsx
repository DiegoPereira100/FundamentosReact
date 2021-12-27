import React from "react";
import If from "./If";

export default props => {

    const user = props.user || {}

    return  (

        <div>
            <If test={user && user.name}>
                Seja Bem vindo <strong>{props.user.name}</strong>!
            </If>
            <If test={!user || !user.name}>
                Seja Bem vindo <strong>Amigão</strong>!
            </If>
        </div>
    )
}