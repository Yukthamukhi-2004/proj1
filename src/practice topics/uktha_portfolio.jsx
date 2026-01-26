import React from "react";
import "./uktha_portfolio.css";

function App() {
  return (
    <div className="Card">
      <div>
        <Avatar />
      </div>
      <div className="Body">
        <Intro />
        <SkillSet />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="pic1.png" alt="uktha" />;
}

function Intro() {
  return (
    <div>
      <h1>Yukthamukhi</h1>
      <p>
        Full-stack Web Development and teacher at Udemy.When not coding or
        preparing a course,I Like to play board games, to cook,or to just enjoy
        the portuguese sun at beach
      </p>
    </div>
  );
}

function SkillSet() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="red" />
      <Skill skill="React" emoji="🚀" color="yellow" />
      <Skill skill="Cloud" emoji="🔥" color="orange" />
      <Skill skill="AWS" emoji="😎" color="green" />
      <Skill skill="Meteorologist" emoji="🌎" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
