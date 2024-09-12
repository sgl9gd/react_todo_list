export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        {title}
      </label>
      <button
        // need to pass the function that will call deleteTodo(). This is why the () => is needed
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
        // onChange={(e) => deleteTodo(id, e.target.)}
      >
        Delete
      </button>
    </li>
  );
}
