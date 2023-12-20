import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("render", () => {
  render(<NewBoxForm />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
