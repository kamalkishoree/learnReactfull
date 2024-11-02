import { useRef, useState } from "react";

function AddToDo({ onNewItem }) {
  //Use REF
  const noOfUpdates = useRef(0);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleInputs = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    onNewItem(todoName, todoDate);
  };

  return (
    <div className="container">
      <form onSubmit={handleInputs}>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="enter todo here"
              ref={todoNameElement}
            />
          </div>
          <div className="col-md-4">
            <input
              type="Date"
              placeholder="choose date"
              ref={todoDateElement}
            />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-success" // onClick={handleInputs}
            >
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
