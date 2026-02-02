import React, { useState } from "react";
import logo from "./practice topics/far_away_pt3/logo";
import form from "./practice topics/far_away_pt3/form";
import Item from "./practice topics/far_away_pt3/Item";

import "./styles/far_away.css";
import PackingList from "./practice topics/far_away_pt3/packingLIst";
import Stats from "./practice topics/far_away_pt3/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    /*  in React ,things r "Immutable" ,so manipulation of data like 
     add,update,delete we use spread operater with array for adding,filter & slice for deleting 
    and map for Updating */
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are u sure want to clear items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return (
    <div className="header">
      <h1>🌴Far Away🧳</h1>
    </div>
  );
}

export default App;
