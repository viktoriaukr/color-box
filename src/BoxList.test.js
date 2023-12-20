import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(box, width = "5", height = "5", color = "red") {
  const boxWidth = box.getByLabelText("Width");
  const boxHeight = box.getByLabelText("Height");
  const boxColor = box.getByLabelText("Background Color");
  fireEvent.change(boxWidth, { target: { value: width } });
  fireEvent.change(boxHeight, { target: { value: height } });
  fireEvent.change(boxColor, { target: { value: color } });
  const button = box.getByText("Add Box");
  fireEvent.click(button);
}

test("render", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("adding a box", () => {
  const box = render(<BoxList />);
  expect(box.queryByText("X")).not.toBeInTheDocument();
  addBox(box);
  expect(box.queryByText("X")).toBeInTheDocument();
  expect(box.getAllByDisplayValue("")).toHaveLength(3);
});

test("removing box", () => {
  const box = render(<BoxList />);
  addBox(box);
  const btn = box.getByText("X");
  fireEvent.click(btn);
  expect(btn).not.toBeInTheDocument();
});
