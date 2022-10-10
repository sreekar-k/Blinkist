import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import BannerContent from './BannerContent'

test(" to check Explorecontent name ", () => {
  render(<BannerContent></BannerContent> );
  const subtitleElement = screen.getByTestId("exploreContent");
  expect(subtitleElement).toBeInTheDocument();
});
