import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import { useReducer, useState } from "react";
import WelcomeMsg from "./components/welcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";
import TotoItemsContextMain from "./store/todo-items-store";

function App() {
  return (
    <TotoItemsContextMain>
      <center className="todo-container">
        <AppName />
        <AddToDo></AddToDo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TotoItemsContextMain>
  );
}
export default App;
