import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import PersonIcon from "./PersonIcon";

test("to check  timer icon", () => {
  render(<PersonIcon />);
  const element = screen.getByTestId("personIcon");
  expect(element).toBeInTheDocument();
});
