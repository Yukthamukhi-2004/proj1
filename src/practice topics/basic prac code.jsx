//create a react app that has a header component thata takes title as a prop
//and renders it inside a div ,the top level app component renders 2 Headers

import React from "react";

function App() {
  return (
    <div>
      <Header title="Header Compo" />
      <Header title="Second Compo" />
    </div>
  );
}

function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
