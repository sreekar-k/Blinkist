import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import CurrentlyReading from "./CurrentlyReading";

beforeEach(() => {
  const el = jest.mock("../../../__mocks__/axios");
});

test("to check currently reading grid", async () => {
  render(<CurrentlyReading />);

  const bookElement = await screen.findAllByRole("button", {
    name: "Finished",
  });
  expect(bookElement.length).not.toBe(0);
});