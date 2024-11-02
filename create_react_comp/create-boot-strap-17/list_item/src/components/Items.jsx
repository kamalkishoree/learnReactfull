import { useState } from "react";
import styles from "./Items.module.css";
import SingleItems from "./SingleItems.jsx";

const Items = ({ AllItems, testAction }) => {
  // function act() {
  //   alert();
  // }
  let checkActive = false;
  let [activeItems, setActiveItems] = useState([]);
  const myAction = (event, itemName) => {
    if (activeItems.includes(itemName)) {
    } else {
      let clickItem = [...activeItems, itemName];
      setActiveItems(clickItem);
    }
  };

  return (
    <ul className="list-group">
      {AllItems.map((itemName) => (
        <SingleItems
          key={itemName}
          itemName={itemName}
          checkActive={activeItems.includes(itemName)}
          myAction={(event) => myAction(event, itemName)}
        ></SingleItems>
      ))}
    </ul>
  );
};
export default Items;
