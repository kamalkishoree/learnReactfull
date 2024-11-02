import styles from "./Display.module.css";
const Display = ({ calVal }) => {
  return (
    <input className={styles.display} type="text" value={calVal} id="display" />
  );
};
export default Display;
