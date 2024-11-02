import styles from "./Button.module.css";
const Buttons = ({ calculation }) => {
  const Allbutton = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.btnContainer}>
      {Allbutton.map((BtnName) => (
        <button
          key={BtnName}
          className={styles.button}
          onClick={(event) => calculation(event)}
        >
          {BtnName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
