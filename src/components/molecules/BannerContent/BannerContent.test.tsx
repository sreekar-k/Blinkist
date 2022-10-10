import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import BannerContent from './BannerContent'

test("to check  Banner Content", () => {
  render(<BannerContent />);
  const element = screen.getByTestId("bannerContent");
  expect(element).toBeInTheDocument();
});
