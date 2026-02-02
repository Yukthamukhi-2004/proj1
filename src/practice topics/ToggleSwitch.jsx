//Toggle Switch
/* Goal: Prove you understand basic State and Event Handling (Section 6).
The Task: "The Secret Password" Create a component with:
A button that says "Show Secret".
A text paragraph that says "The secret code is: REACT-ROCKS".
Logic: The text should be hidden by default. When the user clicks the button, 
the text appears, and the button text changes to "Hide Secret".
The Trap: Do not use two different state variables (like show and hide). Use one boolean state (isOpen). */

//previously the button is "show secret",when we click the button,that shows up the text
//"the secret code is: REACT-ROCKS".then button changes to "Hide Secret".
//use only boolean state (isOpen).should not use 2 states.

//when we click on button "show secret",the state changes to true and value becomes hide secret and text para expands,
//if text opens,the again click on button ,text hides and value changes .

import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handlebtn() {
    setIsOpen((current) => !current);
  }
  return (
    <div>
      {isOpen ? <p>The secret code is: REACT_ROCKS</p> : null}
      <button onClick={handlebtn}>
        {isOpen ? "Show Secret" : "Hide Secret"}
      </button>
    </div>
  );
}

export default App;
