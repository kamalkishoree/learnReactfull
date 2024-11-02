function AddToDo() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <input type="text" placeholder="enter todo here" />
        </div>
        <div class="col-md-4">
          <input type="Date" placeholder="choose date" />
        </div>
        <div class="col-md-2">
          <button class="btn btn-success">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
