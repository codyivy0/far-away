
import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

function App() {
  const [list, setList] = useState([]);

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setList([]);
  }

  function handleToggleItem(id) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleAdd(item) {
    setList((prevList) => {
      return [...prevList, item];
    });
  }

  function deleteItem(id) {
    setList((prevList) => {
      return prevList.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAdd={handleAdd} />
      <PackingList
        list={list}
        onClear={handleClear}
        onToggleItem={handleToggleItem}
        deleteItem={deleteItem}
      />
      <Stats list={list} />
    </div>
  );
}

export default App;
