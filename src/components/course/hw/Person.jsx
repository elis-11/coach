import React, { useState } from "react";
import {FaEdit, FaTrashAlt } from "react-icons/fa";

import "./Style.scss";

const Person = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "Luis",
      lastname: "Pahl",
      age: 36,
      email: "luis@gmail.com",
    },
    {
      id: 2,
      firstname: "Jenny",
      lastname: "Richter",
      age: 40,
      email: "jenny@gmail.com",
    },
  ]);
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newAge, setNewAge] = useState();
  const [newEmail, setNewEmail] = useState("");

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
  const onNewPerson = () => {
    const newId = Date.now().toString();
    const newPerson = {
      ...users,
      id: newId,
      firstname: newFirstname,
      lastname: newLastname,
      age: newAge,
      email: newEmail,
    };
    // const newPerson={...users, id:newId, firstname: 'Edward', lastname: 'Tanguay', age: 23}
    setUsers([...users, newPerson]);
    setNewFirstname("");
    setNewLastname("");
    setNewEmail("");
    setNewAge("");
  };
  console.log(users);

  // delete
  const handleDelete = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
  };

  return (
    <div className="person">
      Person
      <div className='container'>
      <div className="inputs">
        <input
          type="text"
          placeholder="firstname"
          value={newFirstname}
          onChange={onNewFirstname}
        />
        <input
          type="text"
          placeholder="lastname"
          value={newLastname}
          onChange={onNewLastname}
        />
        <input
          type="number"
          placeholder="age"
          value={newAge}
          onChange={onNewAge}
        />
        <input
          type="text"
          placeholder="email"
          value={newEmail}
          onChange={onNewEmail}
        />
        <button onClick={onNewPerson}>Add</button>
      </div>
      <div className="users">
        {users.map((user) => (
          <div className="user" key={user.id}>
            <div className='item'>{user.firstname}</div>
            <div className='item'>{user.lastname}</div>
            <div className='item'>{user.age}</div>
            <div className='item'>{user.email}</div>
            <div className="icons">
              <FaEdit className="icon" />
              <FaTrashAlt
                className="icon"
                onClick={() => handleDelete(user.id)}
                role="button"
                tabIndex="0"
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
export default Person;
