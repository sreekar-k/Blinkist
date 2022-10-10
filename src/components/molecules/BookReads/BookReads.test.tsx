import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import BookReads from './BookReads'

test("to check book reads", () => {
  render(<BookReads>1w-minutes read</BookReads>);
  const subtitleElement = screen.getByTestId("bookReads");
  expect(subtitleElement).toBeInTheDocument();
});