import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const ListToDo = contextObj.ListToDo;
  return ListToDo.length === 0 && <p> Add Your Todo empty</p>;
};
export default WelcomeMsg;
