//rendering parent element so,automatically childrens render

import React from "react";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Yuktha");

  function updateTitle() {
    setTitle("My name is" + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="yuktha"></Header>
      <Header setTitle={setTitle} title="yuktha"></Header>
      <Header title="yuktha"></Header>
      <Header title="yuktha"></Header>
    </div>
  );
}

function Header({ title }) {
  return (
    <div>
      {title}
      setTitle[]
    </div>
  );
}

export default App;
