import React from "react";
// import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ConfirmationPopup from "./index";

test("renders learn react link", () => {
  // const { getByText } = render(<ConfirmationPopup show/>);
  const ConfirmationPopupComponent = renderer
    .create(<ConfirmationPopup show />)
    .toJSON();
  expect(ConfirmationPopupComponent).toMatchSnapshot();

  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
