import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import User from "./User";

test("to check  user logo", () => {
  render(<User />);
  const element = screen.getByTestId("user");
  expect(element).toBeInTheDocument();
});
