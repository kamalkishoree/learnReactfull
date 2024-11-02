function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">{todoName}</div>
        <div className="col-md-4">{todoDate}</div>
        <div className="col-md-2">
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
