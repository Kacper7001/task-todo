import { useState } from "react";
import React from "react";

export const Form = ({ add, handleReset }) => {
  const [title, setTitle] = useState("");

  const handleTitle = ({ target: { value } }) => {
    setTitle(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    add(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} type="text" onChange={handleTitle} />{" "}
      <button type="submit" onClick={handleSubmit}>
        Add todo
      </button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};
