import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
function App() {
  let [calVal, setCalVal] = useState("");
  let calculation = (event) => {
    let inputVal = event.target.innerText;
    if (inputVal == "C") {
      setCalVal("");
    } else if (inputVal == "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + inputVal;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className="container">
      <div className={styles.calculator}>
        <Display calVal={calVal}></Display>
        <Buttons calculation={(event) => calculation(event)}></Buttons>
      </div>
    </div>
  );
}
export default App;
