import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export const UserItem = ({user}) => {
  return (
    <div className="user">
    <div className="item">{user.name}</div>
    <div className="item">{user.profession}</div>
    <div className="item">{user.hobby}</div>
    <div className="item">{user.email}</div>
    <div className="item">{user.city}</div>
    <div className="icon">
    <FaEdit className="icon" role="button" tabIndex="0" />
    <FaTrashAlt className="icon" role="button" tabIndex="0" />
    </div>
  </div>

  )
}
