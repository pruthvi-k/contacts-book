import React from "react";
// import { render } from "@testing-library/react";
// import renderer from "react-test-renderer";
import ContactForm from "./index";

test("Form submit", () => {
  const handleSubmit = jest
    .fn()
    .mockImplementation((cb) => () => cb({ test: "test" }));
  const wrapper = shallow(
    <ContactForm form="test" handleSubmit={handleSubmit} />
  );
  wrapper.find("button").simulate("click");
  expect(handleSubmit).toHaveBeenCalled();
});
