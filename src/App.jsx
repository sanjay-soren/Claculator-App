import styles from "./App.module.css";
import Button from "../Components/Button";
import DisplayInputs from "../Components/DisplayInputs";
import React, { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "C") {
      setCalVal((calVal) => calVal.slice(0, -1));
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <>
      <center>
        <div className={styles.calcontainor}>
          <DisplayInputs displayValue={calVal} />
          <Button onButtonClick={onButtonClick} />
        </div>
      </center>
    </>
  );
}

export default App;
