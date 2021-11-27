import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("debe de agreagar un TODO", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender Redux",
      done: false,
    };

    const state = todoReducer(demoTodos, { type: "add", payload: newTodo });
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("debe de borrar un todo", () => {
    const action = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.some((todo) => todo.id === 1)).toBe(false);
  });

  test("debe de hacer el TOGGLE del TODO", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);

    const todo = state.find((todo) => todo.id === 1);

    expect(todo.done).toBe(true);
  });
});
