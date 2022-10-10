import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import TagLine from './Tagline'

test("to check  footer  tag", () => {
  render(<TagLine />);
  const Element = screen.getByText(
    /Big ideas in small packages Start learnign now/i
  );
  expect(Element).toBeInTheDocument();
});
