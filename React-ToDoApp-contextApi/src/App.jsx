import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/welcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  let [ListToDo, setListToDo] = useState([]);
  const addNewItem = (itemName, itemDate) => {
    // const addNewItem = [
    //   ...ListToDo,
    //   { todoName: itemName, todoDate: itemDate },
    // ];
    // setListToDo(addNewItem);

    //can be write in this way to better handle asynch so that it can not take the old un updated value because of number of request
    // setListToDo = (currentValue) => {
    //   const addNewItem = [
    //     ...currentValue,
    //     { todoName: itemName, todoDate: itemDate },
    //   ];
    //   return addNewItem;
    // };
    //OR
    setListToDo((currentVal) => {
      console.log(currentVal);
      return [...ListToDo, { todoName: itemName, todoDate: itemDate }];
    });
  };

  const deleteItem = (itemName) => {
    console.log("item deleted :" + itemName);
    const newToDoItem = ListToDo.filter((item) => item.todoName !== itemName);
    setListToDo(newToDoItem);
  };

  const defaultvalues = [
    {
      todoName: "kamal",
      todoDate: "23/3/2023",
    },
  ];
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
