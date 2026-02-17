//project for state Management(state lifting up,children prop,derived state,controlled elements)
import React, { useState } from "react";

function App() {
  return (
    <div>
      <Details />
    </div>
  );
}

function Details() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [percentages1, setPercentages1] = useState(0);

  const tip = bill * ((percentage + percentages1) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage(0);
    setPercentages1(0);
  }

  return (
    <div>
      <Question bill={bill} onsetBill={setBill} />
      <SelectPercentages percentage={percentage} onSelect={setPercentage}>
        How did u like the service?
      </SelectPercentages>
      <SelectPercentages percentages1={percentages1} onSelect={setPercentages1}>
        How did your friend like the service?
      </SelectPercentages>
      {bill > 0 && (
        <>
          <Calculate bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Question({ bill, onsetBill }) {
  return (
    <div>
      <form>
        <label>How much was the bill?</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => onsetBill(Number(e.target.value))}
        />
      </form>
    </div>
  );
}

function SelectPercentages({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="1">It was Okay (5%)</option>
        <option value="2">It was Good (10%)</option>
        <option value="3">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Calculate({ bill, tip }) {
  return (
    <div>
      <h2>
        You pay {bill + tip} (${bill}+${tip} tip)
      </h2>
    </div>
  );
}
function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
