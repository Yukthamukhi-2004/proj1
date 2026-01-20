import React from "react";
function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState([0, 1]);
  function Counter() {
    setCount(count++);
  }
  function fabinocci() {
    let n = 0;
    let fib = [0, 1];
    for (let i = 0; i < n; i++) {
      let sum = fib.push(fib[i - 1] + [i - 2]);
    }
    setNum(sum);
  }
  return (
    <div>
      <input type="integer">{n}</input>
      <h4>Sum is {sum}</h4>
      <button onClick={Counter}>Counter {count}</button>
    </div>
  );
}

export default App;
