import { useState } from "react";

export const UseState = () => {
  // NUMBER
  const [number, setNumber] = useState(0);
  // STRING
  const [message, setMessage] = useState("Hi");
  // BOOLEAN
  const [online, setOnline] = useState(true);
  // INPUT field state
  const [userName, setUserName] = useState("");
  // user OBJECT
  const [user, setUser] = useState({ name: "Elisa", admin: true });

  // NUMBER
  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    setNumber(number - 1);
  };
  // STRING
  const updateMessage = () => {
    console.log("Update message...");
    let newMmessage = "Hallo";
    setMessage(newMmessage);
  };
  // BOOLEAN
  const updateOnlineStatus = () => {
    setOnline(!online);
  };
  // OBJECT
  const updateUserRole = (e) => {
    const userUpdate = { ...user, admin: !user.admin };
    setUser(userUpdate);
    setUserName(e.target.value);
  };

  // Array

  return (
    <div>
      <div>
        Number: {number}
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>
      </div>
      <div onClick={updateMessage}>String: {message}</div>
      <div onClick={updateOnlineStatus}>Online: {online ? "Ja" : "Nein"}</div>
      <div onClick={updateOnlineStatus}> {online ? "Online" : "Offline"}</div>
      <div>Array: </div>
      <div onClick={updateUserRole}>
        Object: {user.name} {user.admin ? "Admin" : "User"}
      </div>
    </div>
  );
};
