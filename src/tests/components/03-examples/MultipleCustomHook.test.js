import { shallow } from "enzyme";
import { MultipleCustomHook } from "../../../components/03-examples/MultipleCustomHook";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
//Implementacion falsa, evita las llamadas al useFetch
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHook />", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  test("debe de mostrarse correctamente", () => {
    //Usamos esto porque nos arrojara un error en el componente ya que no podra
    //llamar al useFetch, ya que hicimos un mock
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHook />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar la información", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Jair",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHook />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Jair");
    console.log(wrapper.html());
  });
});
