import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

import "./styles/far_away.css";

const Items = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    /*  in React ,things r "Immutable" ,so manipulation of data like 
     add,update,delete we use spread operater with array for adding,filter & slice for deleting 
    and map for Updating */
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
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

function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [descriptions, setDescriptions] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!descriptions) return;
    const newItem = { descriptions, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescriptions("");
    setQuantity("1");
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Array.from->creates a array wich accepts 2 arguments, length:20= which creates the length of array, 
        for 2nd argument , _ is ment for current element which initially undefined but alot the slot,i to decide range from 0 to 19 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items"
        value={descriptions}
        onChange={(e) => setDescriptions(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.descriptions}
        <button>❌</button>
      </span>
    </li>
  );
}
export default App;
