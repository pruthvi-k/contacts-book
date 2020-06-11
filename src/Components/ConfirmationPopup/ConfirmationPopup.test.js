import React from "react";
// import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ConfirmationPopup from "./index";

test("renders confirmation poup correctly", () => {
  const ConfirmationPopupComponent = renderer
    .create(<ConfirmationPopup show />)
    .toJSON();
  expect(ConfirmationPopupComponent).toMatchSnapshot();
});
