import { useState } from "react";
import "../Style.scss";
import { UsersList } from "./UsersList";

export const Users = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      firstName: "Gael",
      lastName: "Smith",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    {
      id: "2",
      firstName: "Robert",
      lastName: "Hartmann",
      email: "robert@gmail.com",
      city: "Berlin",
    },
    {
      id: "3",
      firstName: "Elisa",
      lastName: "Codrs",
      email: "elisa@gmail.com",
      city: "Hamburg",
    },
  ]);


  return (
    <div>
      <h2>Create Users</h2>
    <UsersList
    users={users}
    />
    </div>
  );
};
