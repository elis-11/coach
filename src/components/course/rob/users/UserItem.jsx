import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


export const UserItem = ({ user }) => {
  return (
    <>
      <div className="user">
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.email}</div>
        <div>{user.city}</div>
        <div className="icons">
          <FaEdit className="icon" role="button" tabIndex="0" />
          <FaTrashAlt className="icon" role="button" tabIndex="0" />
        </div>
      </div>
    </>
  );
};
