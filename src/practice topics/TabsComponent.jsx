import React, { useState } from "react";

//initially ,3 buttons with no matter on page
//when we click on each button,that particular button details display
//each button should have different colors,which is active should be highlight that button.

const content = [
  { summary: "React is a library...", details: "It manages views." },
  { summary: "Props pass data...", details: "They are read-only." },
  { summary: "State is memory...", details: "It triggers re-renders." },
];

function App() {
  return <MainComponent content={content} />;
}

function MainComponent({ content }) {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div>
      {content.map((tab, i) => (
        <Button
          actab={activeTab}
          setactab={setActiveTab}
          summary={tab.summary}
          details={tab.details}
          key={tab.summary}
          i={i}
        >
          Tab {i + 1}
        </Button>
      ))}
      <CommonCompo actab={activeTab} content={content} />
    </div>
  );
}

function Button({ setactab, children, i }) {
  return (
    <div>
      <button onClick={() => setactab(i)}>{children}</button>
    </div>
  );
}
function CommonCompo({ actab, content }) {
  const isOpen = actab !== null;

  return (
    <div>
      {isOpen && (
        <div>
          <p>{content[actab].summary}</p>
          <p>{content[actab].details}</p>
        </div>
      )}
    </div>
  );
}
export default App;
