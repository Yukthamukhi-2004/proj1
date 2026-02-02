import { Checkbox } from "primereact/checkbox";
import React from "react";

export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <Checkbox
        onChange={() => onToggleItems(item.id)}
        value={item.packed}
      ></Checkbox>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.descriptions}
        <button
          onClick={() => {
            onDeleteItem(item.id);
          }}
        >
          ❌
        </button>
      </span>
    </li>
  );
}
