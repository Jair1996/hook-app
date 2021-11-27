export const TodoListItem = ({ todo, index, handleToggle, handleDelet }) => {
  return (
    <li className={`list-group-item`}>
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && "complete"}`}
      >
        {index + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelet(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
