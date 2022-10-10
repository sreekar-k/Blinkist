import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TrendingGrid from "./Entrepreneurship";
import { BrowserRouter } from "react-router-dom";

const MockTrendingGrid = () => {
  return (
    
      <BrowserRouter>
        <TrendingGrid />
      </BrowserRouter>
    
  );
};
test("to check trending grid ",  () => {
   render(<MockTrendingGrid />);
});