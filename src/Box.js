import React from "react";

const Box = ({ id, width = 6, height = 6, backgroundColor, remove }) => {
  const removeBox = () => remove(id);
  return (
    <div className="Box-container">
      <div
        className="Box"
        style={{
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor,
        }}
      ></div>
      <button className="Box-btn" onClick={removeBox}>
        X
      </button>
    </div>
  );
};

export default Box;
