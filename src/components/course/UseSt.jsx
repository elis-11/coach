import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const getInitialState = () => false;

export const UseSt = () => {
  const [visible, setVisibility] = useState(getInitialState);
  const handleClick = () => {
    setVisibility((currentValue) => !currentValue);
  };
//***************************** *
  //! NUMBER
  const [number, setNumber] = useState(10);
  // NUMBER
  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    setNumber(number - 1);
  };
  //****************************** */
  //! STRING
  const [message, setMessage] = useState("Hi");
  // STRING
  const updateMessage = () => {
    let newMmessage = "Hallo";
    setMessage(newMmessage);
  };
  //***************************** */
  // BOOLEAN
  const [online, setOnline] = useState(true);
  // BOOLEAN
  const updateOnlineStatus = () => {
    setOnline(!online);
  };
  //***************************** */
  //! user OBJECT
  const [user, setUser] = useState({ name: "Elisa", admin: true });
  //! INPUT field state
  // const [userName, setUserName] = useState("");

  const updateUserRole = () => {
    const userUpdate = { ...user, admin: !user.admin };
    setUser(userUpdate);
  };
  //******************************* */


  //! Array

  return (
    <div>
      <div>
        Number: {number}
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>
      </div>
      <hr />
      <div onClick={updateMessage}>String: {message}</div>
      <hr />
      <hr />
      <div onClick={updateOnlineStatus}>Online: {online ? "Ja" : "Nein"}</div>
      <hr />
      <div onClick={updateOnlineStatus}>Shi is {online ? "Online" : "Offline"}</div>
      <hr />
      <hr />
      <div>Array: </div>
      <hr />
      <hr />
      <div onClick={updateUserRole}>
        Object: {user.name} {user.admin ? "Admin" : "User"}
      </div>
      <hr />
      <hr />
      <div>
        <h2>What is React ?</h2>
        <Button variant="primary" onClick={handleClick}>
          Show answer
        </Button>
        {visible && (
          <Card>
            <Card.Body>
              A JavaScript library for building user interfaces
            </Card.Body>
          </Card>
        )}
      </div>
      <hr />
    </div>
  );
};
