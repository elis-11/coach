import "./Style.scss";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Update = () => {
  const [devs, setDevs] = useState([
    { id: "b1", name: "Gael", city: 'Berlin' },
    { id: "b2", name: "Rob", city: 'Berlin' },
  ])


  return (
    <div className="people">
      <h2>Update</h2>
      <div className="container">
        {devs.length ?(
          <div className="users">
            {devs.map(dev=>(
              <div key={dev.id} className="user">
                <div className="item">{dev.name}</div>
                <div className="item">{dev.city}</div>
                <div className="icons">
                  <FaEdit className="icon" role="button" />
                  <FaTrashAlt className="icon" role="button" />
                </div>
              </div>
            ))}
          </div>
            ):(
              <h2>Your List is empty</h2>
            )}
      </div>
      <footer>
        <h3>{devs.length} List {devs.length ===1 ? 'User' : 'Users'}</h3>
        <h3>Copyright &copy;</h3>
      </footer>
    </div>
  );
};
