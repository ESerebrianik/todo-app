import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import * as rtl from "@testing-library/react";

test("renders header", () => {
  const { getByText } = rtl.render(<App />);
  const headerElement = getByText(/todos/i);
  expect(headerElement).toBeInTheDocument();
});