/*if some of the children are static and some are dynamic ,where rendering 
 is need for some elements,then render lowest common ancesteral parent.*/

import React from "react";
import { useState } from "react";

function App() {
  return (
    <>
      <Headerwithbtn />
      <Header title="Yuktha"></Header>
    </>
  );
}
function Headerwithbtn() {
  const [title, setTitle] = useState("Yuktha1");

  function updateTitle() {
    setTitle("My name is" + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
