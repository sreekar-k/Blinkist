import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BannerTitle from './BannerTitle'

test(" to check BookTitle name ", () => {
  render(<BannerTitle />);
  const subtitleElement = screen.getByText(
    /Explore Books on entrepreneurship/i
  );
  expect(subtitleElement).toBeInTheDocument();
});
