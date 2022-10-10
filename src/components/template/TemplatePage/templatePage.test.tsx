import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import Template from "./templatePage";
import Headers from "../../organisms/Header/Headers";

import Footer from "../../organisms/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const fakeProps = {
  header: <Headers />,
  content: <></>,
  footer: <Footer />,
};
const MockTemplate = () => {
  return (
    <BrowserRouter>
      <Template
        header={fakeProps.header}
        content={fakeProps.content}
        footer={fakeProps.footer}
      />
    </BrowserRouter>
  );
};
test("to check template ", () => {
  render(<MockTemplate />);
  const FooterElement = screen.getByTestId("template");
  expect(FooterElement).toBeInTheDocument();
});