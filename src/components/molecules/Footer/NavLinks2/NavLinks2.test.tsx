import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import NavLinks2 from "./NavLinks2";

test(" to check ExploreMenu ", () => {
  render(<NavLinks2 />);
  const navLinks1 = screen.getByTestId("navLink2");
  expect(navLinks1).toBeInTheDocument();
});