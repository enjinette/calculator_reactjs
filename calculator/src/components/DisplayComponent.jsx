import React, { useContext } from "react";
import { MainContext } from "../pages/main";
import NumberFormat from "react-number-format";

/*
Function name: DisplayComponent
Description: Displays user's input 
*/
const DisplayComponent = () => {
  const context_values = useContext(MainContext);
  return (
    <div className="screen">
      {/* Displays input value if user has already press a number or in initial state which is 0,
       otherwise, displays the first value when an operation is already selected*/}
      {context_values.input !== "" || context_values.input === "0" ? (
        <NumberFormat
          value={context_values.input}
          displayType={"text"}
          thousandSeparator={true}
        />
      ) : (
        <NumberFormat
          value={context_values.firstVal}
          displayType={"text"}
          thousandSeparator={true}
        />
      )}
    </div>
  );
};
export default DisplayComponent;
