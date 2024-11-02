import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem from "./components/Todoitem1";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <TodoItem />
      <TodoItem />
    </center>
  );
}
export default App;
