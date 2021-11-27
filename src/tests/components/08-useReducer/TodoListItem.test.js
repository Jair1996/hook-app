import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoListItem />", () => {
  const handleToggle = jest.fn();
  const handleDelet = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleToggle={handleToggle}
      handleDelet={handleDelet}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar la función handleDelet", () => {
    wrapper.find("button").simulate("click");

    expect(handleDelet).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe de llamar la funcion handleToggle", () => {
    wrapper.find("p").simulate("click");

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe de mostrar el texto correctamente", () => {
    const parrafo = wrapper.find("p");

    expect(parrafo.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test("debe de tener la clase complete si el TODO.done = true", () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={0}
        handleToggle={handleToggle}
        handleDelet={handleDelet}
      />
    );

    const parrafo = wrapper.find("p");

    expect(parrafo.hasClass("complete")).toBe(true);
  });
});
