import "./Style.scss";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Update = () => {
  const [devs, setDevs] = useState([
    { id: "b1", name: "Gael", city: "Berlin" },
    { id: "b2", name: "Rob", city: "Berlin" },
  ]);
const [newDev, setNewDev]= useState({
  name:'',
  city:'',
})


  //Add
const addDev=() => {
  const addNewDev={
id:Date.now().toString(),
name: newDev.name,
city: newDev.city,
  }
  setDevs([...devs, addNewDev])
  setNewDev({...newDev, name:'', city:'',})
}
const handleAddDev=(e) => {
setNewDev({...newDev, [e.target.name]: e.target.value})
}



  //Edit

  //Delete
  const handleDelete = (id) => {
    const deleteDev=devs.filter(dev=>dev.id!==id)
    setDevs(deleteDev);
  }

  return (
    <div className="people">
      <h2>Update</h2>
      <div className="container">
        <form className="edit">
          <input type="text" name="name" placeholder="Edit Name" />
          <input type="text" name="city" placeholder="Edit City" />
          <button className="update" type="submit">
            Update
          </button>
          <button className="cancel">Cancel</button>
        </form>
        <div className="add">
          <input
            type="text"
            name="name"
            autoFocus
            placeholder="Name"
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
          <button onClick={addDev}>Add</button>
        </div>
        {devs.length ? (
          <div className="users">
            {devs.map((dev) => (
              <div key={dev.id} className="user">
                <div className="item">{dev.name}</div>
                <div className="item">{dev.city}</div>
                <div className="icons">
                  <FaEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt
                  onClick={() =>handleDelete(dev.id)}
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
