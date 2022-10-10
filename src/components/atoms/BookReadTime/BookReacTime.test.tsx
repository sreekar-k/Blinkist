import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookReadTime from './BookReadTime'

test(" to check Timer name ", () => {
  render(<BookReadTime>12-minutes read</BookReadTime>);
  const bodyElement = screen.getByText(/12-minutes read/i);
  expect(bodyElement).toBeInTheDocument();
});
