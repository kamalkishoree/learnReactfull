import TodoItem from "./Todoitem1";

function TodoItems({ ListToDo, onDeleteClick }) {
  return (
    <div className="list-container">
      {ListToDo.map((item) => (
        <TodoItem
          key={item.todoName}
          todoName={item.todoName}
          todoDate={item.todoDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
