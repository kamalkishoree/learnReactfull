import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./components/Items.jsx";
import ErrorMsg from "./components/ErrorMsg.jsx";
import Container from "./components/Container.jsx";
import TextComponent from "./components/TextComponent.jsx";
// const AllItems = [];

function App() {
  // const AllItems = ["sabji", "roti", "salad"];

  let [textToshow, setTextState] = useState("This Typed by User");
  let [AllItems, setItemArray] = useState([]);

  const handleOnEnterText = (event) => {
    setTextState(event.target.value);
    if (event.code == "Enter") {
      //AllItems.push(event.target.value);
      //we can do this but ideally we must have do not alter use state variables instead we crwate new and then set
      if (event.target.value) {
        let newAddedItem = event.target.value;
        let newItesmArr = [...AllItems, newAddedItem];
        setItemArray(newItesmArr);
      }
      event.target.value = "";
    }
  };
  // const testAction = (event) => {};
  return (
    <Container>
      <h2 className="text-center">Healty Food Items</h2>
      <ErrorMsg Items={AllItems}></ErrorMsg>
      <TextComponent
        handleOnEnterText={(event) => handleOnEnterText(event)}
      ></TextComponent>
      <p>{textToshow}</p>
      <Items
        AllItems={AllItems}
        // testAction={(event) => testAction(event)}
      ></Items>
    </Container>
  );
}
export default App;
