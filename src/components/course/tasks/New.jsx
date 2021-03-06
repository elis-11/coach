import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const getInitialState = () => false;

export const New = () => {

  const [visible, setVisibility] = useState(getInitialState);
  const handleClick = () => {
    setVisibility((currentValue) => !currentValue);
  };
//****NUMBER***** *
  const [num, setNum] = useState(3);
  const increment = () => {
    setNum(num + 5);
  };
  const decrement = () => {
    setNum(num - 4);
  };
  //******STRING****** */
  const [greeting, setGreeting] = useState("Hi");

  const updateGreeting = () => {
    let greeting = "Hi people";
    setGreeting(greeting);
  };
  //******BOOLEAN****** */
  const [plant, setPlant] = useState(true);

  const updatePlantStatus = () => {
    setPlant(!plant);
  };
  //******OBJECT****** */

  const [user, setUser] = useState({
    name: "Luis",
    age: 18,
    city: "Hamburg",
    student: true,
  });

  const updateStudent = () => {
    setUser({ ...user, student: !user.student, age: user.age + 1 });
  };
  //************ */
  const [newUser, setNewUser] = useState("");

  const updateUserName = (e) => {
    setNewUser(e.target.value);
  };
  const updateName= () => {
    setUser({ ...user, name: newUser });
  }

  return (
    <div>
      <hr />
      number
      <div>
        <div>
          {num}
          <div>
          <Button onClick={increment}>+</Button>
          <Button onClick={decrement}>-</Button>
          </div>
        </div>
      </div>
      <hr />
      <div>
        string
        <div onClick={updateGreeting}>{greeting}</div>
      </div>
      <hr />
      <div>
        boolean
        <div onClick={updatePlantStatus}>
          Rose is a {plant ? "plant" : "flower"}
        </div>
      </div>
      <hr />
      <div>
        object
        <div onClick={updateStudent}>
          {user.name} is a {user.student ? "Student" : "Worker"} and he is{" "}
          {user.age}
        </div>
      </div>
      <div>
        <input
          type="text"
          name="user"
          placeholder="Name"
          onChange={updateUserName}
          value={newUser}
        />
        <button onClick={updateName}>Update</button>
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
