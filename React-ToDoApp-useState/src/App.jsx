import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/welcomeMsg";
function App() {
  let [ListToDo, setListToDo] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
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

  const handleDeleteItem = (itemName) => {
    console.log("item deleted :" + itemName);
    const newToDoItem = ListToDo.filter((item) => item.todoName !== itemName);
    setListToDo(newToDoItem);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem}></AddToDo>
      {ListToDo.length == 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        ListToDo={ListToDo}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}
export default App;
