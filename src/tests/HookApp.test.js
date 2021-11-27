import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas en <HookAppp />", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
