import React, { createContext, useState, useEffect } from "react";
import NumberBtn from "../components/NumberBtn";
import DisplayComponent from "../components/DisplayComponent";

export const MainContext = createContext({});

const Main = () => {
  const [firstVal, setFirstVal] = useState("");
  const [currentVal, setCurrentVal] = useState("");
  const [input, setInput] = useState("0");
  const [operation, setOperation] = useState(null);
  const [total, setTotal] = useState(false);

  /*
    Function name: inputNum
    Inparam: e = on select button data
    Description: Updates current value based on selected number
  */
  const inputNum = (e) => {
    if (currentVal.includes(".") && e.target.innerText === ".") return;
    if (total) {
      setFirstVal("");
    }

    currentVal
      ? setCurrentVal((pre) => pre + e.target.innerText)
      : setCurrentVal(e.target.innerText);
    setTotal(false);
  };

  
  useEffect(() => {
    setInput(currentVal);
  }, [currentVal]);

  /*
    Function name: operatorType
    Inparam: e = on select button data
    Description: Updates first value based on selected number previously, 
                and sets operation value
  */
  const operatorType = (e) => {
    setTotal(false);
    setOperation(e.target.innerText);
    if (currentVal === "") return;
    if (firstVal !== "") {
      equals();
    } else {
      setFirstVal(currentVal);
      setCurrentVal("");
    }
  };

  /*
    Function name: equals
    Inparam: e = on select button data
    Description: Calculate two numbers based on the operation selected
  */
  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operation) {
      case "\xB1":
        cal = String(parseFloat(firstVal) / parseFloat(currentVal));
        break;
      case "+":
        cal = String(parseFloat(firstVal) + parseFloat(currentVal));
        break;
      case "*":
        cal = String(parseFloat(firstVal) * parseFloat(currentVal));
        break;
      case "-":
        cal = String(parseFloat(firstVal) - parseFloat(currentVal));
        break;
      default:
        return;
    }
    setInput("");
    setFirstVal(cal);
    setCurrentVal("");
  };

  /*
    Function name: minusPlus
    Description: Updates the displayed number when ± button is selected
  */
  const minusPlus = () => {
    if (currentVal.charAt(0) === "-") {
      setCurrentVal(currentVal.substring(1));
    } else {
      setCurrentVal("-" + currentVal);
    }
  };

  /*
    Function name: percent
    Description: Calculates the percentage of the current value displayed
  */
  const percent = () => {
    firstVal
      ? setCurrentVal(String((parseFloat(currentVal) / 100) * firstVal))
      : setCurrentVal(String(parseFloat(currentVal) / 100));
  };

  /*
    Function name: reset
    Description: Reset all values: firstval, currentval, input and operation
  */
  const reset = () => {
    setFirstVal("");
    setCurrentVal("");
    setInput("0");
    setOperation();
  };

  const operations = {
    inputNum: inputNum,
    operatorType: operatorType,
    equals: equals,
    minusPlus: minusPlus,
    percent: percent,
    reset: reset,
  };

  // Context values
  const values = { firstVal, currentVal, operation, operations, input };

  return (
    <MainContext.Provider value={values}>
      <div className="container">
        <div className="wrapper">
          <DisplayComponent />
          <NumberBtn className="btn light-gray" onClick="reset" keyValue="AC" />
          <NumberBtn
            className="btn light-gray"
            onClick="percent"
            keyValue="%"
          />
          <NumberBtn
            className="btn light-gray"
            onClick="minusPlus"
            keyValue={"\xB1"}
          />
          <NumberBtn
            className="btn orange"
            onClick="operatorType"
            keyValue={"\xF7"}
          />
          <NumberBtn className="btn" onClick="inputNum" keyValue="7" />
          <NumberBtn className="btn" onClick="inputNum" keyValue="8" />
          <NumberBtn className="btn" onClick="inputNum" keyValue="9" />
          <NumberBtn
            className="btn orange"
            onClick="operatorType"
            keyValue="*"
          />
          <NumberBtn className="btn" onClick="inputNum" keyValue="4" />
          <NumberBtn className="btn" onClick="inputNum" keyValue="5" />
          <NumberBtn className="btn" onClick="inputNum" keyValue="6" />
          <NumberBtn
            className="btn orange"
            onClick="operatorType"
            keyValue="-"
          />
          <NumberBtn className="btn" onClick="inputNum" keyValue="1" />
          <NumberBtn className="btn" onClick="inputNum" keyValue="2" />
          <NumberBtn className="btn" onClick="inputNum" keyValue="3" />
          <NumberBtn
            className="btn orange"
            onClick="operatorType"
            keyValue="+"
          />
          <NumberBtn className="btn zero" onClick="inputNum" keyValue="0" />
          <NumberBtn className="btn" onClick="inputNum" keyValue="." />
          <NumberBtn className="btn" onClick="equals" keyValue="=" />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Main;