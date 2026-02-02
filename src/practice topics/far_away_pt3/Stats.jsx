import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p>
        <en>Start adding some items to your packing list🚀</en>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div>
      <span>
        {percentage === 100
          ? "You got everything ! Ready to go🥳"
          : `You have ${numItems} items on ur list, and u already packed ${numPacked}(${percentage})%`}
      </span>
    </div>
  );
}
