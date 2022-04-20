import React from 'react'
import { useState } from 'react';

export const AddDev = ({ addDev}) => {

  const [newDev, setNewDev] = useState({
    name: "",
    city: "",
  });

  const handleAddDev = (e) => {
    setNewDev({ ...newDev, [e.target.name]: e.target.value });
  };

  const submitAdd = () => {
    addDev(newDev);
    setNewDev({ ...newDev, name: "", city: "" });
  }

  return (
    <div className="add">
    <input
      type="text"
      name="name"
      placeholder="Name"
      autoFocus
      value={newDev.name}
      onChange={handleAddDev}
    />
    <input
      type="text"
      name="city"
      placeholder="City"
      value={newDev.city}
      onChange={handleAddDev}
    />
    <button onClick={submitAdd}>Add</button>
  </div>
)
}
