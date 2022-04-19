import React from "react";
import { useState } from "react";

export const Update = () => {
  const [devs, setDevs] = useState([
    { id: "b1", name: "Gael", experience: 15 },
    { id: "b2", name: "Rob", experience: 19 },
    { id: "b3", name: "Elisa", experience: 1 },
  ]);

  const experUpdate = (id) => {
    const devsCopy = devs.map(dev=> dev.id!==id ? dev :{...dev, experience: dev.experience+1})  
    console.log(devsCopy);
    setDevs(devsCopy)
  };  

  return (
    <div className="people">
      <div className="container">
        <h2>Update</h2>
        {devs.map((dev) => (
          <div key={dev.id} className="users">
            <div className="user">
              {dev.name} {dev.experience}
              <button  onClick={()=>experUpdate(dev.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
