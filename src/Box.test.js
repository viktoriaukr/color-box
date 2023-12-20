import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

test("render", () => {
  render(<Box />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
