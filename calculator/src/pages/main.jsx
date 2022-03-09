import React, {createContext, useState} from "react";
import NumberBtn from '../components/NumberBtn'

export const MainContext = createContext({});

const Main = () => {
    const number_one = 1;
    const values = {number_one};

    return (
        <MainContext.Provider value={values}>
            <main>
                <NumberBtn/>
            </main>
        </MainContext.Provider>
    )
};

export default Main;