import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import NavLinks3 from "./NavLinks3";

test("to check NavLink3", () => {
  render(<NavLinks3 />);
  const navLinks1 = screen.getByTestId("navLink3");
  expect(navLinks1).toBeInTheDocument();
});