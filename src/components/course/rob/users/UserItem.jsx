import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export const UserItem = ({user}) => {
  return (
    <div className="user">
    <div>{user.name}</div>
    <div>{user.profession}</div>
    <div>{user.hobby}</div>
    <div>{user.email}</div>
    <div>{user.city}</div>
    <div className="icon">
    <FaEdit className="icon" role="button" tabIndex="0" />
    <FaTrashAlt className="icon" role="button" tabIndex="0" />
    </div>
  </div>

  )
}
