/*.create a component that performs an expensive calculations(finding the factorial) based on a user input
.Use useMemo to ensure that the calculations is only recomputed when the input changes, not on every render.
*/

import React from "react";
import { useState, useMemo } from "react";

function App() {
  const [input, setInput] = useState();

  const expensiveValue = useMemo(() => {
    let value = 1;
    for (let i = 1; i < input; i++) {
      value = value * i;
    }
    return value;
  }, [input]);

  return (
    <>
      <input
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
        showButtons
      />
      <p>Calculated Value:{expensiveValue}</p>
    </>
  );
}

export default App;
