import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleDelet }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i}
          handleToggle={handleToggle}
          handleDelet={handleDelet}
        />
      ))}
    </ul>
  );
};
