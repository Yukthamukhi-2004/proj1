/*useEffect can't use async-because,useEffect either return ntg or
cleanup function,async always returns a promise.
.useEffect should be synchronus

// Returns Promise<pending> →never reaches synchronous-> React confused!
So, use .then() */
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [counter]);

  return (
    <div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increase count:{counter}
      </button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default App;
