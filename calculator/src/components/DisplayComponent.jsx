import React, {useEffect, useContext} from "react";
import {MainContext} from '../pages/main'

const DisplayComponent = () => {
    const {firstVal, currentVal} = useContext(MainContext);
    return (
        <main className='calculator-display'>
            <p>{currentVal > 0? currentVal: firstVal}</p>
        </main>
    )
}
export default DisplayComponent;