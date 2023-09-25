import "./App.css";
import React from "react";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shirts", quantity: 12, packed: false },
];

function App() {
  function Logo() {
    return <h1>🏄‍♀️ Far Away 🌴</h1>;
  }

  function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
      e.preventDefault();

      if(!description) return

      const newItem = { description, quantity, packed: false, id: Date.now() };
      
      setDescription('')
      setQuantity(1)
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

  function Item({ item }) {
    return (
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    );
  }
  function PackingList() {
    return (
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
  function Stats() {
    return (
      <footer className="stats">
        <em>
          💼 You have x items on your list, and you already packed X (x%) 💼
        </em>
      </footer>
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
