import React from "react";
import { useState } from "react";

export const AddDev = ({ addDev }) => {
  const [newDev, setNewDev] = useState({
    name: "",
    experience: "",
  });

  const handleAddDevs = (e) => {
    setNewDev({ ...newDev, [e.target.name]: e.target.value });
  };
  const submitAdd = () => {
    addDev(newDev);
    setNewDev({ ...newDev, name: "", experience: "" });
  };

  return (
    <div className="add">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newDev.name}
        onChange={handleAddDevs}
      />
      <input
        type="text"
        name="experience"
        placeholder="Experience"
        value={newDev.experience}
        onChange={handleAddDevs}
      />
      <button onClick={submitAdd}>Add</button>
    </div>
  );
};
