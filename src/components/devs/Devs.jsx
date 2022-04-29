import "./DevList";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Devs = () => {
  const [devs, setDevs] = useState([
    { id: "b1", name: "Gael", city: "Berlin" },
    { id: "b2", name: "Rob", city: "Berlin" },
    { id: "b3", name: "Elisa", city: "Hamburg" },
  ]);
  const [newDev, setNewDev] = useState({
    name: "",
    city: "",
  });
  const [search, setSearch] = useState("");

  const addDevs = () => {
    const devsNewState = {
      id: Date.now().toString(),
      name: newDev.name,
      city: newDev.city,
    };
    setDevs([...devs, devsNewState]);
    setNewDev({ ...newDev, name: "", city: "" });
  };
  const handleAddDevs = (e) => {
    setNewDev({ ...newDev, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const deleteItem = devs.filter((dev) => dev.id !== id);
    setDevs(deleteItem);
  };
  const searchDev = devs.filter(
    (dev) =>
      dev.name.toLowerCase().includes(search.toLowerCase()) ||
      dev.city.includes(search.toLowerCase())
  );

  return (
    <div className="Users">
      <h2>Update</h2>
      <div className="container">
        <div className="search">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              id="search"
              placeholder="Search.."
              role="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
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
            name="city"
            placeholder="City"
            value={newDev.city}
            onChange={handleAddDevs}
          />
          <button onClick={addDevs}>Add</button>
        </div>
        {devs.length ? (
          <div className="users">
            {searchDev.map((dev) => (
              <div key={dev.id} className="user">
                <div className="item">{dev.name}</div>
                <div className="item">{dev.city}</div>
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
          {searchDev.length} List {searchDev.length === 1 ? "User" : "Users"}
        </h3>
        <h3>Copyright &copy;</h3>
      </footer>
    </div>
  );
};
