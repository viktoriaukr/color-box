import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (color) => {
    setBoxes((boxes) => [...boxes, color]);
  };
  const remove = (id) =>
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  const newBox = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      backgroundColor={box.backgroundColor}
      remove={remove}
    />
  ));
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <br />
      {newBox}
    </div>
  );
};

export default BoxList;
