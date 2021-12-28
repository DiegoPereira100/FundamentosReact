import React from 'react'

export default props => {

    const cb = props.onClick
    const min = 50
    const max = 70
    const generateAge = () => parseInt(Math.random() * (20)) + 50
    const generateNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('João', generateAge(), generateNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}