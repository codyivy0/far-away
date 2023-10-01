import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  list,
  onToggleItem,
  onClear,
  deleteItem,
}) {

  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = list;

  if (sortBy === "description")
    sortedItems = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = list
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  
      return (

    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            item={item}
            key={item.id}
            deleteItem={deleteItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort alphabetically</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClear}>Clear list</button>
      </div>
    </div>
  );
}

