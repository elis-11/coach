import React from 'react'
import { UserItem } from './UserItem'

export const UserList = ({ users, setUsers}) => {
  return (
    <>
    {users.map((user) => (
      <UserItem user={user} users={users} setUsers={setUsers} />
    ))}
  </>
)
}
