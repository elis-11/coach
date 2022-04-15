import { useState } from "react";
import { HW72 } from "./HW72";

export const Create = () => {
  const [users, setUsers] = useState([
    { id: "", firstname: "", lastname: "", age: "", email: "", password: "" },
  ]);
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onNewFirstname = (e) => {
    setNewFirstname(e.target.value);
  };
  const onNewLastname = (e) => {
    setNewLastname(e.target.value);
  };
  const onNewAge = (e) => {
    setNewAge(e.target.value);
  };
  const onNewEmail = (e) => {
    setNewEmail(e.target.value);
  };
  const onNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const addNewUser = () => {
    const newId = Date.now().toString();
    const newUser = {
      id: newId,
      firstname: newFirstname,
      lastname: newLastname,
      age: newAge,
      email: newEmail,
      password: newPassword,
    };
    setUsers([...users, newUser]);
    setNewFirstname("");
    setNewLastname("");
    setNewAge("");
    setNewEmail("");
    setNewPassword("");
  };

  return (
    <div>
      <p>CreateUsers ✨</p>
      <div>
        <div>
          <input
            type="text"
            placeholder="Firstname"
            value={newFirstname}
            onChange={onNewFirstname}
            autoFocus={true}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Lastname"
            value={newLastname}
            onChange={onNewLastname}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Age"
            value={newAge}
            onChange={onNewAge}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={newEmail}
            onChange={onNewEmail}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            value={newPassword}
            onChange={onNewPassword}
          />
        </div>
        <button onClick={addNewUser}>Submit</button>
      </div>
      {users.map((user) => (
        <HW72
          key={user.id}
          user={user}
          firstname={user.firstname}
          lastname={user.lastname}
          age={user.age}
          email={user.email}
          password={user.password}
        />
      ))}
    </div>
  );
};
