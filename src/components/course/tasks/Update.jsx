import React from "react";
import { useState } from "react";

export const Update = () => {
  const [devs, setDevs] = useState([
    { id: "b1", name: "Gael", experience: 65 },
    { id: "b2", name: "Rob", experience: 95 },
    { id: "b3", name: "Elisa", experience: 1 },
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
