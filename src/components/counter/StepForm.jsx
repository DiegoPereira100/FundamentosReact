import React from "react";

export default props => {
    return (
    <div>
        <div>
            <label htmlFor="InputStep">Passo: </label>
                <input id="InputStep" type="number"
            value={props.step}
            onChange={e => props.setStep(+e.target.value)}/>
        </div>
    </div>
    )
}