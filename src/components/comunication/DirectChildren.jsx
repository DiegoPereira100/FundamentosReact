import React from "react";

export default props => {

    return (
        <div>
            <span>({props.name}) </span>
            <span>{props.age} anos </span>
            <span> = {props.nerd ? 'True' : 'False'}!</span>
        </div>
    )
}