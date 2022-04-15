import React from "react";
import { UserItem } from "./UserItem";

export const UsersList = ({ users }) => {
  return (
    <>
      <div className="users">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
