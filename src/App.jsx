import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(async() => {
    fetch("https://sum-server.100xdevs.com/todos")
  }, [counter]);

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter++);
        }}
      >
        Increase count
      </button>
    </div>
  );
}

function Todo{(title,description)}{
  <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}

export default App;
