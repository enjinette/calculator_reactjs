import React, {createContext, useState, useCallback} from "react";
import NumberBtn from '../components/NumberBtn';
import DisplayComponent from '../components/DisplayComponent';
import OperationsBtn from '../components/OperationsBtn';

export const MainContext = createContext({});

const Main = () => {
    const [firstVal, setfirstVal] = useState(0);
    const [currentVal, setcurrentVal] = useState(0);
    const [operation, setoperation] = useState(null);
    const values = {firstVal, currentVal, operation};

    return (
        <MainContext.Provider value={values}>
            <main>
                <DisplayComponent/>
                <OperationsBtn/>
                <NumberBtn/>
            </main>
        </MainContext.Provider>
    )
};

export default Main;