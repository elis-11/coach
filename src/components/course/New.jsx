import React, { useState } from "react";

export const New = () => {
  //! numbers
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 5);
  };

  //! string
  const [message, setMessage] = useState("Hi");
  const newMmessage = () => {
    let message = "Hi people";
    setMessage(message);
  };

  //! boolean
  const [online, setOnline] = useState(true);
  const onlineStatys = () => {
    setOnline(!online);
  };

  //! object
  const [user, setUser] = useState({ name: "Rob", admin: true });
  const updateUserRole = () => {
    const userUpdate = { ...user, admin: !user.admin };
    setUser(userUpdate);
  };
  
  // //! update name
  // const [userName, setUserName] = useState("");
  // const updateUserName = (e) => {
  //   const newUserName = e.target.value;
  //   setUserName(newUserName);
  // };

  // const updateUserObjectName = () => {
  //   setUser({ ...user, name: userName });
  // };

  return (
    <div>
      New
      <hr />
      <div>
        number {number}
        <div onClick={increment}>+</div>
        <div onClick={decrement}>-</div>
      </div>
      <hr />
      <div onClick={newMmessage}> {message}</div>
      <hr />
      <div onClick={onlineStatys}>Elisa is {online ? "online" : "offline"}</div>
      <hr />
      <div onClick={updateUserRole}>
        {user.name} is {user.admin ? "admin" : "user"}
      </div>
      <hr />
      <hr />
      {/* <div>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={updateUserName}
          placeholder="Name"
        />
        <button onClick={updateUserObjectName}>Update Name</button>
      </div> */}
    </div>
  );
};
