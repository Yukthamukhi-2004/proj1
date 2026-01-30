import React, { useState } from "react";

function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

const date = new Date();
date.setDate = date.getDate() + count;

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  return (
    <div>
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
      <span>{`{count} from today is `}</span>
      <button>Reset</button>
    </div>
  );
}
