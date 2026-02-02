//userBadge

import React from "react";
const users = [
  {
    name: "yuktha",
    avatar: "🌎",
    isAdmin: true,
  },
  {
    name: "mukhi",
    avatar: "🚀",
    isAdmin: false,
  },
  {
    name: "React developer",
    avatar: "😎",
    isAdmin: true,
  },
];

function App() {
  return (
    <>
      {users.map((user) => (
        <UserBadge
          name={user.name}
          avatar={user.avatar}
          isAdmin={user.isAdmin}
        />
      ))}
    </>
  );
}

function UserBadge(props) {
  return (
    <div>
      <p>
        {props.name} {props.isAdmin == true ? "⭐Admin" : props.avatar}
      </p>
    </div>
  );
}
export default App;
