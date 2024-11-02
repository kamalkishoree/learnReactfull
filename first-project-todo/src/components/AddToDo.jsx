import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleOnChangeName = (event) => {
    const getName = event.target.value;
    setTodoName(getName);
  };
  const handleOnChangeDate = (event) => {
    const getDate = event.target.value;
    setTodoDate(getDate);
  };

  const handleInputs = (event) => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container">
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
          <button className="btn btn-success" onClick={handleInputs}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
