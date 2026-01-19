import React from "react";
//real wrapper
function App() {
  return (
    <div>
      <CardWrapper>
        <CardWrapper>
          <div>holaaaaa</div>
        </CardWrapper>
      </CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        Flexdirection: "column",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
}

function TextComponent() {
  return (
    <div>
      <h3>Yuktha is a React Developer</h3>
    </div>
  );
}

export default App;
