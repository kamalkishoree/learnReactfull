import { useReducer, createContext } from "react";
export const TodoItemsContext = createContext({
  ListToDo: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

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

const TotoItemsContextMain = ({ children }) => {
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
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName,
      },
    };
    dispacthAddToDoItem(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        ListToDo: ListToDo,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TotoItemsContextMain;
