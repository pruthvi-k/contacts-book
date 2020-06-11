import React from "react";
// import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ConfirmationPopup from "./index";

test("renders learn react link", () => {
  const ConfirmationPopupComponent = renderer
    .create(<ConfirmationPopup show />)
    .toJSON();
  expect(ConfirmationPopupComponent).toMatchSnapshot();
});
