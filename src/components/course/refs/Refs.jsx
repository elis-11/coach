import "./Refs.scss";
import { useState } from "react";
import { UserList } from "./UserList";

export const Refs = () => {
  const [users, setUsers] = useState([
    { username: "Ricci", age: 28 },
    { username: "Anne", age: 29 },
  ]);

 
  return (
    <div className="Refs">
      <div className="list">
        <h2>Edit Training List</h2>
        <UserList users={users} setUsers={setUsers} />
      </div>
    </div>
  );
};
