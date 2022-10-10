import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import CopyRight from "./CopyRight";


test("to check copyright", () => {
  render(<CopyRight></CopyRight>);
  const subtitleElement = screen.getByTestId('copyright');
  expect(subtitleElement).toBeInTheDocument();
});
