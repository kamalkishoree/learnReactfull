import style from "./TextComponent.module.css";

const TextComponent = ({ handleOnEnterText }) => {
  return (
    <>
      <input
        className={style.input_adjust}
        type="text"
        onKeyDown={(event) => handleOnEnterText(event)}
      />
    </>
  );
};
export default TextComponent;
