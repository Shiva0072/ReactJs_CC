import { useState } from "react";
function App() {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setVal((prev_val) => event.target.value);
  const handleForm = (e) => {
    e.preventDefault();
    if (val === "") return;
    setTodos((todos) => [val, ...todos]);
    setVal((val) => "");
  };

  return (
    <div>
      <p>Todo List</p>
      <form onSubmit={handleForm}>
        <input type="text" value={val} onChange={onChange}></input>
        <button> Add Todo</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
//each item returned by the map is a li-component and hence it is rendered by the react.
