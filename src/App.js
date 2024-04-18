import { useState } from "react";
import { Form } from "./Form";
import { ListTodo } from "./ListTodo";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([{ title: "", complete: false, id: 1 }]);

  const addTodo = (title) => {
    const id = Math.max(todo.map((todo) => todo.id));
    const newTodo = {
      title,
      complete: false,
      id: id + 1,
    };

    setTodo((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todoItem) => todoItem.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, complete: !todoItem.complete }
          : todoItem,
      ),
    );
  };

  const handleReset = () => {
    setTodo([]);
  };

  return (
    <div className="App">
      <Form add={addTodo} handleReset={handleReset} />
      <ListTodo
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
