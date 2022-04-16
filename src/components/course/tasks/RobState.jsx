import { useState } from "react";

export const RobState = () => {
  //! number
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };
  //**************
  //! string
  const [message, setMessage] = useState("hey");

  const updateMessage = () => {
    let messageNew = "hallo";
    setMessage(messageNew);
  };
  //**************
  //! boolean (true / false)
  const [online, setOnline] = useState(true);

  const updateOnlineStatus = () => {
    setOnline(!online);
  };
  //**************
  //! object user
  const [user, setUser] = useState({
     name: "Eliza", admin: true 
    });
  const updateUserRole = () => {
    const userUpdate = { ...user, admin: !user.admin };
    setUser(userUpdate);
  };
  //**************
  //! INPUT field state
  const [username, setUsername] = useState("");

  const updateUserName = (event) => {
    setUsername(event.target.value);
  };
  const updateUserObjectName = () => {
    setUser({ ...user, name: username });
  };
  //***************
  return (
    <div className="App">
      <header className="App-header">
        <h2>UseState Training camp</h2>

        <div onClick={increaseNumber}>Number: {number} </div>
        <hr />
        <div onClick={updateMessage}>String: {message} </div>
        <hr />
        <div onClick={updateOnlineStatus}>Online: {online ? "Ja" : "Nein"}</div>
        <hr />
        {/* object  user  */}
        <div onClick={updateUserRole}>
          Object: {user.name} is {user.admin ? "Admin" : "User"}{" "}
        </div>
          <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={updateUserName}
          />
          <button onClick={updateUserObjectName}>Update name</button>
        </div>
      </header>
    </div>
  );
};
