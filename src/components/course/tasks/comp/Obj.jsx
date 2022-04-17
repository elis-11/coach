import React from "react";

export const Obj = ({ obj }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px" }}>
      {obj.name} is a {obj.title}
    </div>
  );
};
