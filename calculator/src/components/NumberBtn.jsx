import React, {useContext} from "react";
import {MainContext} from '../pages/main'

/*
Function name: NumberBtn
Description: Displays calculator's buttons
*/
const NumberBtn = (props) => {
    const context_values = useContext(MainContext);
    return (
        <div
            className={`${props.className}`}
            onClick={context_values.operations[props.onClick]}
            >
            {props.keyValue}
        </div>
    )
}

export default NumberBtn;