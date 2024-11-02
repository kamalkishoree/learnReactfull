import { useContext, useRef, useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  //Use REF

  const noOfUpdates = useRef(0);
  const handleOnChangeName = (event) => {
    const getName = event.target.value;
    setTodoName(getName);
    noOfUpdates.current += 1;
  };
  const handleOnChangeDate = (event) => {
    const getDate = event.target.value;
    setTodoDate(getDate);
    console.log("number of updates : " + noOfUpdates.current);
  };
  const { addNewItem } = useContext(TodoItemsContext);

  const handleInputs = (event) => {
    event.preventDefault();
    addNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="container">
      <form onSubmit={handleInputs}>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="enter todo here"
              onChange={handleOnChangeName}
              value={todoName}
            />
          </div>
          <div className="col-md-4">
            <input
              type="Date"
              placeholder="choose date"
              onChange={handleOnChangeDate}
              value={todoDate}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success">ADD</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
