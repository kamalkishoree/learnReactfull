import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import { useReducer, useState } from "react";
import WelcomeMsg from "./components/welcomeMsg";

const TodoReducer = (CurrentListToDo, action) => {
  console.log(newTodoItem);

  const newTodoItem = CurrentListToDo;
  if (action.type == "NEW_ITEM") {
    newTodoItem = [
      ...CurrentListToDo,
      { todoName: action.payload.itemName, todoDate: action.payload.itemDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItem = CurrentListToDo.filter(
      (item) => item.todoName !== action.payload.itemName
    );
  }
  return newTodoItem;
};

function App() {
  let [ListToDo, dispacthAddToDoItem] = useReducer(TodoReducer, []);
  const addNewItem = (itemName, itemDate) => {
    const addNewItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDate: itemDate,
      },
    };
    dispacthAddToDoItem(addNewItemAction);
  };

  const deleteItem = (itemName) => {
    const addNewItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName,
      },
    };
    dispacthAddToDoItem(addNewItemAction);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={() => addNewItem()}></AddToDo>
      {ListToDo.length == 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems ListToDo={ListToDo} onDeleteClick={deleteItem}></TodoItems>
    </center>
  );
}
export default App;
