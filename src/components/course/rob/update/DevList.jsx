import React from "react";
import { DevItem } from "./DevItem";

export const DevList = ({ devs, handleDelete }) => {
  return (
    <div className="users">
      {devs.map((dev) => (
        <DevItem key={dev.id} dev={dev} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
