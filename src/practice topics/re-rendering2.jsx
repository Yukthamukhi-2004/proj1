//React.memo
//memo let u skip re-rendering a component when its props are unchanged

import React, { Fragment } from "react";
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
      <Header title="yuktha"></Header>
      <Header title="yuktha"></Header>
    </div>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
