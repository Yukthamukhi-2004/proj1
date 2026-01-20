import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then(function (res) {
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </>
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
