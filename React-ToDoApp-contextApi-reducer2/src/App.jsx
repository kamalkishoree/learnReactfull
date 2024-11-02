import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import { useReducer, useState } from "react";
import WelcomeMsg from "./components/welcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";

const TodoReducer = (CurrentListToDo, action) => {
  let newTodoItem = CurrentListToDo;
  if (action.type == "NEW_ITEM") {
    newTodoItem = [
      ...CurrentListToDo,
      {
        todoName: action.payload.itemName,
        todoDate: action.payload.itemDate,
      },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItem = CurrentListToDo.filter(
      (item) => item.todoName !== action.payload.itemName
    );
  }
  console.log(newTodoItem);
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
    <TodoItemsContext.Provider
      value={{
        ListToDo: ListToDo,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddToDo></AddToDo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
