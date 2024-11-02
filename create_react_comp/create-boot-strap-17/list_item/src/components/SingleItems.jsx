import { useState } from "react";
import styles from "./SingleItems.module.css";
import Items from "./Items";

const SingleItems = ({ itemName, checkActive, myAction }) => {
  return (
    <li
      className={`${styles["list-color"]} list-group-item ${
        checkActive && "active"
      }`}
    >
      {itemName}
      <button
        className={`${styles.button} btn btn-success`}
        onClick={(event) => myAction(itemName, event)}
      >
        {`${checkActive ? "Remove" : "Add"}`}
      </button>
    </li>
  );
};
export default SingleItems;
