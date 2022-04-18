import { useState } from "react";
import "../Style.scss";
import { UsersList } from './UsersList';

export const Users = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Gael",
      profession: "Web Dev consultant",
      hobby: "play computer games",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    {
      id: "2",
      name: "Robert",
      profession: "Web Dev trainer",
      hobby: "read",
      email: "robert@gmail.com",
      city: "Berlin",
    },
    {
      id: "3",
      name: "Elisa",
      profession: "Stydent",
      hobby: "JavaScript",
      email: "elisa@gmail.com",
      city: "Hamburg",
    },
  ]);
  const [newUser, setNewUser] = useState({
    name: "",
    profession: "",
    hobby: "",
    email: "",
    city: "",
  });

  const addUser = () => {
    const newUserState = {
      id: Date.now().toString(),
      name: newUser.name,
      profession: newUser.profession,
      hobby: newUser.hobby,
      email: newUser.email,
      city: newUser.city,
    };
    setUsers([...users, newUserState]);
    setNewUser({
      ...newUser,
      name: "",
      profession: "",
      hobby: "",
      email: "",
      city: "",
    });
  };
  const handleUserInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
  };
  return (
    <div className="people">
      <div className="container">
        <h2>Create Users</h2>

        <div className="add">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleUserInput}
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={newUser.profession}
            onChange={handleUserInput}
          />
          <input
            type="text"
            name="hobby"
            placeholder="Hobby"
            value={newUser.hobby}
            onChange={handleUserInput}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleUserInput}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={newUser.city}
            onChange={handleUserInput}
          />
          <button onClick={addUser}>Add</button>
          
        </div>
      <UsersList users={users} handleDelete={handleDelete}/>
      </div>
    </div>
  );
};
