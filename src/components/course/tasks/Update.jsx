import React from "react";
import { useState } from "react";

export const Update = () => {
  const [devs, setDevs] = useState([
    { id: "b1", name: "Inna", experience: 65 },
    { id: "b2", name: "Anne", experience: 95 },
    { id: "b3", name: "Rici", experience: 1 },
  ]);

  const experUpdate = (id) => {
    const devsCopy = devs.map((dev) =>
      dev.id !== id ? dev : { ...dev, experience: dev.experience + 1 }
    );
    console.log(devsCopy);
    setDevs(devsCopy);
  };

  return (
    <div className="people">
      <div className="container">
        <h2>Update</h2>
        <div className="users">
        {devs.map((dev) => (
          <div key={dev.id} className="user">
              {dev.name} {dev.experience}
              <button onClick={() => experUpdate(dev.id)}>+</button>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};
