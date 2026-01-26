import React from "react";

function App() {
  const Skills = [
    {
      course: "HTML + CSS",
      level: "advance",
      emoji: "💪",
      color: "blue",
    },
    {
      course: "Javascript",
      level: "advance",
      emoji: "😊",
      color: "red",
    },
    {
      course: "React",
      level: "intermediate",
      emoji: "🚀",
      color: "yellow",
    },
    {
      course: "Cloud",
      level: "beginner",
      emoji: "😎",
      color: "orange",
    },
    {
      course: "AWS",
      level: "beginner",
      emoji: "🔥",
      color: "pink",
    },
    {
      course: "Meteorologist",
      level: "intermediate",
      emoji: "🌎",
      color: "green",
    },
  ];
  return (
    <main>
      <Card />
      <Intro />
      <Skillset courses={Skills} />
    </main>
  );
}
function Card() {
  return (
    <section>
      <img src="/pic1.png" alt="uktha" />
    </section>
  );
}
function Intro() {
  return (
    <>
      <h2>Yukthamukhi</h2>
      <p>
        Full-stack Web Development and teacher at Udemy.When not coding or
        preparing a course,I Like to play board games, to cook,or to just enjoy
        the portuguese sun at beach
      </p>
    </>
  );
}

function Skillset() {
  return (
    <div>
      {Skills.map((skill) => (
        <Skill
          skillObj={skill}
          key={skill.course}
          course={skill.course}
          level={skill.level}
          emoji={skill.emoji}
        />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div>
      <span style={{ color: "white", backgroundColor: "skillObj.color" }}>
        {skillObj.course + skillObj.emoji}
      </span>
    </div>
  );
}

export default App;
