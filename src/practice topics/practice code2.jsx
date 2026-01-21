import React from "react";
import { useState } from "react";

function App() {
  const [activeTodo, setActiveTodo] = useState([]);
  const [todos, setTodos] = useState([
    {
      id: 1,
      items: ["milk", "bread", "eggs", "sugar"],
    },
    {
      id: 2,
      items: ["carrots", "cucumber", "beetroot", "avacado"],
    },
    {
      id: 3,
      items: ["tomato", "potato", "ladies finger", "bottle gaurd"],
    },
    {
      id: 4,
      items: ["pasta", "maggie", "burger", "pizza"],
    },
  ]);

  function getGrocery(id) {
    const selected = todos.filter((todos) => todos.id === id);
    setActiveTodo(selected[0]);
  }

  const currentItems = activeTodo ? activeTodo.items : [];

  return (
    <div>
      <button onClick={() => getGrocery(1)}>1</button>
      <button onClick={() => getGrocery(2)}>2</button>
      <button onClick={() => getGrocery(3)}>3</button>
      <button onClick={() => getGrocery(4)}>4</button>

      <h2>Grocery Shopping</h2>

      <Todo items={currentItems} />
    </div>
  );
}

function Todo({ items }) {
  return (
    <div>
      <h3>{items}</h3>
    </div>
  );
}

export default App;
