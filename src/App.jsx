import React, { useState } from "react";
function App() {
  const [initialValue, setInitialValue] = useState(0);
  const [option, setOption] = useState(0);

  function handleCost(e) {
    e.preventDefault();
    setInitialValue();
  }
  return (
    <div>
      <Details
        initval={initialValue}
        setinitval={setInitialValue}
        opt={option}
        setopt={setOption}
      />
      <Calculate
        initval={initialValue}
        setinitval={setInitialValue}
        opt={option}
        setopt={setOption}
      />
      <Reset initval={initialValue} opt={option} />
    </div>
  );
}

function Details({ initval, setinitval, opt, setopt }) {
  return (
    <div>
      <Question />
    </div>
  );
}

function Question() {
  const reviews = [
    "Dissatisfied(0%)",
    "it was good(10%)",
    "it was good(10%)",
    "Absolutely amazing!(20%)",
  ];
  const ratings = [
    "Dissatisfied (0%)",
    "it was okay(5%)",
    "it was good(10%)",
    "Absolutely amazing!(20%)",
  ];

  return (
    <div>
      <form onSubmit={handleCost()}>
        <label>How much was the bill?</label>
        <input
          type="number"
          value={initval}
          onChange={(e) => setinit(Number(e.target.value))}
        />
        <label>How did u like the service?</label>
        <select val={opt} onChange={(e) => setOpt(e.target.value)}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((review) => (
            <option value={review}>{review}</option>
          ))}
        </select>
        <label>How did your friend like the service?</label>
        <select val={opt} onChange={(e) => setOpt(e.target.value)}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((rating) => (
            <option>{rating}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
function Calculate() {
  return <div>{`You pay ${Total} (${cost} + ${(his + frnd) / 2} tip)`}</div>;
}
function Reset() {
  return <div></div>;
}

export default App;
