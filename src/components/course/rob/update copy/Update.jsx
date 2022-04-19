import "./Style.scss";
import { useState } from "react";
import { DevList } from "./DevList";
import { AddDev } from "./AddDev";

export const Update = (name, experience) => {
  const [devs, setDevs] = useState([
    { id: "b1", name: "Gael", experience: 15 },
    { id: "b2", name: "Rob", experience: 19 },
    { id: "b3", name: "Elisa", experience: 1 },
  ]);

  // const experUpdate = (id) => {
  //   const devsCopy = devs.map(dev=> dev.id!==id ? dev :{...dev, experience: dev.experience+1})
  //   console.log(devsCopy);
  //   setDevs(devsCopy)
  // };

  const addDev = (newDev) => {
    const devNewState = {
      id: Date.now().toString(), ...newDev};
    setDevs([...devs, devNewState]);
  };

  const handleDelete = (id) => {
    const deleteItem = devs.filter((dev) => dev.id !== id);
    setDevs(deleteItem);
  };

  return (
    <div className="people">
      <h2>Update</h2>
      <div className="container">
        <AddDev addDev={addDev} />
        {devs.length ? (
          <DevList devs={devs} handleDelete={handleDelete} />
        ) : (
          <h2>Your List is empty</h2>
        )}
      </div>
      <footer>
        <h3>
          {devs.length} List {devs.length === 1 ? "User" : "Users"}
        </h3>
        <h3>Copyright &copy;</h3>
      </footer>
    </div>
  );
};
