import "./Refs.scss";
import { useState } from "react";
import { UserList } from "./UserList";

export const Refs = () => {
  const [users, setUsers] = useState([
    { username: "Gael", age: 28 },
    { username: "Ed", age: 29 },
  ]);

  const updateUser = (id, userData) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? {...user,...userData} : user
    );
    setUsers(updatedUsers)
  }; 
 
  return (
    <div className="Refs">
      <div className="list">
        <h2>Edit Training List</h2>
        <UserList users={users} updateUser={updateUser} />
      </div>
    </div>
  );
};
