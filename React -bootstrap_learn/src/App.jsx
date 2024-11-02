import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
function App() {
  return (
    <div className="container">
      <div className={styles.calculator}>
        <Display></Display>
        <Buttons></Buttons>
      </div>
    </div>
  );
}
export default App;
