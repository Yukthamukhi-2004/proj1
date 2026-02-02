import React, { useState } from "react";

function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("30 January 2026");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(0);
    setCount(0);
  }

  return (
    <div className="slider-container">
      <label>Step :{step}</label>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />
      <p>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <input type="numbers" value={count} />
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </p>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
            ? `${count} days from Today is `
            : `${Math.abs(count)} days ago Today was `}
      </span>
      <span>{date.toDateString()}</span>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
