import "./Style.scss";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const New = () => {
  const [devs, setDevs] = useState([
    { id: "b1", name: "Gael", hobby: "playing" },
    { id: "b2", name: "Rob", hobby: "reading" },
    { id: "b3", name: "Elisa", hobby: "JS" },
  ]);
  const [newDev, setNewDev] = useState({
    name: "",
    hobby: "",
  });

  // const experUpdate = (id) => {
  //   const devsCopy = devs.map(dev=> dev.id!==id ? dev :{...dev, hobby: dev.hobby+1})
  //   console.log(devsCopy);
  //   setDevs(devsCopy)
  // };

  const addDevs = () => {
    const devsNewState = {
      id: Date.now().toString(),
      name: newDev.name,
      hobby: newDev.hobby,
    };
    setDevs([...devs, devsNewState]);
    setNewDev({ ...newDev, name: "", hobby: "" });
  };
  const handleAddDevs = (e) => {
    setNewDev({ ...newDev, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const deleteItem = devs.filter((dev) => dev.id !== id);
    setDevs(deleteItem);
  };

  return (
    <div className="people">
      <h2>Update</h2>
      <div className="container">
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
            name="hobby"
            placeholder="Experience"
            value={newDev.hobby}
            onChange={handleAddDevs}
          />
          <button onClick={addDevs}>Add</button>
        </div>
        {devs.length ? (
          <div className="users">
            {devs.map((dev) => (
              <div key={dev.id} className="user">
                <div className="item">{dev.name}</div>
                <div className="item">{dev.hobby}</div>
                <div className="icons">
                  <FaEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt
                    onClick={() => handleDelete(dev.id)}
                    className="icon"
                    role="button"
                    tabIndex="0"
                  />
                </div>
              </div>
            ))}
          </div>
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
