import { render, screen } from "@testing-library/react";
import AuthorName from './AuthorName'
import React from "react";
import "@testing-library/jest-dom";

test("to check Author Name", () => {
  render(<AuthorName>SreekarKairika</AuthorName>);
  const bodyElement = screen.getByText(/SreekarKairika/i);
  expect(bodyElement).toBeInTheDocument();
});
