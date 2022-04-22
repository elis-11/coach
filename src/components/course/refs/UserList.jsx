import React from 'react'
import { UserItem } from './UserItem'

export const UserList = ({ users, updateUser}) => {
  return (
    <>
    {users.map((user) => (
      <UserItem user={user} updateUser={updateUser} />
    ))}
  </>
)
}
