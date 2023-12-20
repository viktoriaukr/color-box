import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="Background Color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <br />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
