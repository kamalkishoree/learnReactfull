import { createContext } from "react";
export const TodoItemsContext = createContext({
  ListToDo: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
