import React, {useContext} from "react";
import {MainContext} from '../pages/main'

const NumberBtn = () => {
    const {number_one} = useContext(MainContext);

    return (
        <p>THIS IS NUMBER BTN {number_one}</p>
    )
}

export default NumberBtn;