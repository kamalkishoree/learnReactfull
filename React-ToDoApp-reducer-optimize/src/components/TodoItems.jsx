import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./Todoitem1";

function TodoItems() {
  const { ListToDo, deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="list-container">
      {ListToDo.map((item) => (
        <TodoItem
          key={item.todoName}
          todoName={item.todoName}
          todoDate={item.todoDate}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
