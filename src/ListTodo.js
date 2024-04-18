export const ListTodo = ({ todo, deleteTodo, toggleComplete }) => {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleToggle = (id) => {
    toggleComplete(id);
  };

  return (
    <div>
      <ul>
        {todo.map((element) => (
          <li key={element.id}>
            {element.title}{" "}
            {element.complete ? "is-completed" : "is-not-completed"}{" "}
            <button onClick={() => handleDelete(element.id)}>Delete</button>{" "}
            <button onClick={() => handleToggle(element.id)}>
              {!element.complete ? "Completed" : "Not - completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
