//keys makes the code clear by giving unique identities and making the ids in array,while rendering

import React, { useState } from "react";
let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "mrng 7'o clock",
    },
    {
      id: 2,
      title: "meditation",
      description: "mrng 8'o clock",
    },
    {
      id: 3,
      title: "tiffin",
      description: "mrng 9 'O clock",
    },
  ]);

  function addTodo() {
    //setTodo([...todo])
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <>
      {todos.map((todo) => (
        /*<UpdateTodo title={todo.title} description={todo.description} /> -->this gives an error,
         Each child in a list should have a unique "key" prop.*/
        <UpdateTodo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}
function UpdateTodo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
