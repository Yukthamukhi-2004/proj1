import React from "react";
import { useState, useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(1);
  function Counter() {
    let count = 0;
    setCounter((count = count + 1));
  }
  /*
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count = count + i;
  }
  */
  /*
 const [FinalValue,setFinalValue]=useState(0);
 useEffect(()=>{
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count = count + i;
  }
  setFinalValue(finalCount+i)  ,[num]
  works same,where depends on dependency variable and use state variables
 */

  let btn = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i <= num; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [num]);
  //i is an variable which depends on dependency variable.
  return (
    <div>
      <input
        onChange={function (e) {
          setNum(e.target.value);
        }}
        placeholder={"Number"}
      ></input>
      <h4>Sum is {finalCount}</h4>
      <button onClick={Counter}>Counter {counter}</button>
    </div>
  );
}

export default App;
