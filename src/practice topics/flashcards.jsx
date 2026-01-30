import React, { useState } from "react";
import "./styles/flashcards.css";

function App() {
  return (
    <div className="flashcards">
      <Card />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question:
      "What's the name of the syntax we use to describe to UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "State",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronous with state?",
    answer: "Controlled Elements",
  },
];

function Card() {
  const [selectedId, setSelectedId] = useState(0);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="card">
      {questions.map((card) => (
        <div
          key={card.id}
          onClick={() => handleClick(card.id)}
          className={card.id === selectedId ? "selected" : ""}
        >
          <p>{card.id === selectedId ? card.answer : card.question}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
