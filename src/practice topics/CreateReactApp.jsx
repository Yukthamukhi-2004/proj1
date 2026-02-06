import React, { useState } from "react";

import "./styles/create-react-app.css";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 0) {
      return setStep((s) => s - 1); //its better way to write,when updating state depends on current state.
    }
  }
  function handleNext() {
    if (step < 3) {
      return setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="body">
          <div className="numbers">
            <div className={step == 1 ? "active" : ""} id="btns">
              1
            </div>
            <div className={step == 2 ? "active" : ""} id="btns">
              2
            </div>
            <div className={step == 3 ? "active" : ""} id="btns">
              3
            </div>
          </div>
          <p className="messages">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="directions">
            <Button
              bgColor="rgb(134, 56, 134)"
              txtcolor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              bgColor="rgb(134, 56, 134)"
              txtcolor="#fff"
              onClick={handleNext}
            >
              Next <span>👉</span> /*things between the open and close tags can
              be consider as children and passed as prop in its component*/
            </Button>                               |//called as "Children prop:Making Reusable button"
          </div>                                    |
        </div>                                      |
      )}                                            |
    </div>                                          |
  );                                                |
}                                                   👇
function Button({ bgColor, txtcolor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: "rgb(134, 56, 134)", color: "#fff" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
