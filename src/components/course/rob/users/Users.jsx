import { useState } from "react";
import "../Style.scss";
import { UsersList } from "./UsersList";

export const Users = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Gael",
      profession: "Web Dev trainer",
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
const [newUser, setNewUser]=useState({})

const addUser=() => {
  const userNewState={
    id: new Date().toString(),
    name: newUser.name,
    profession: newUser.profession,
    hobby: newUser.hobby,
    email: newUser.email,
    city: newUser.city,
  }
  setUsers([...users, userNewState])
}


  return (
    <div>
      <h2>Create Users</h2>

    <UsersList
    users={users}
    />
    </div>
  );
};
