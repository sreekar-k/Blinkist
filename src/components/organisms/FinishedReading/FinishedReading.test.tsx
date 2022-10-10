import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import FinishedReading from "./FinishedReading";

beforeEach(() => {
  jest.mock("../../../__mocks__/axios");
});

test("to check currently reading grid", async () => {
  render(<FinishedReading />);

  const bookElement = await screen.findAllByRole("button", {
    name: "Read Again",
  });
  expect(bookElement.length).not.toBe(0);
});