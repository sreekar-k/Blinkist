import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import BlinkWithTag from './BlinkWithTag'

test("to check BookTitle name", () => {
  render(<BlinkWithTag></BlinkWithTag>);
  const subtitleElement = screen.getByTestId('blink');
  expect(subtitleElement).toBeInTheDocument();
});
