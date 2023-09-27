import { useState } from "react";

export default function Form({ handleAdd }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const item = { description, quantity, packed: false, id: Date.now() };
    handleAdd(item);
    setDescription("");
    setQuantity(1);
  }

  function handleChange(e) {
    setDescription(e.target.value);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?😍</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        type="text"
        placeholder="Item..."
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
