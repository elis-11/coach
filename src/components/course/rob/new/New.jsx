import React from 'react'
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export const New = () => {

const [users, setUsers]=useState([
  { id: "b1", name: "Gael", hobby: "playing" },
  { id: "b2", name: "Rob", hobby: "reading" },
  { id: "b3", name: "Elisa", hobby: "JS" },
])

const [newUser, setNewUser]=useState({
  id: Date.now().toString(),
  name: '',
  hobby: '',
})

const addUser =()=>{
  const addNewUser={
    id:Date.now().toString(),
    name: newUser.name,
    hobby: newUser.hobby,
  }
  setUsers([...users, addNewUser])
  setNewUser({...newUser, name:'', hobby: '',})
}
const handleAddUser=(e)=>{
  setNewUser({...newUser, [e.target.name]: e.target.value})
}

const handleDelete = (id) => {
  const deleteUser=users.filter(user => user.id!==id)
  setUsers(deleteUser)
}

  return (
<div className="people">
  <div className="container">
    <div className="add">
      <input type="text" name="name" placeholder="Name" autoFocus onChange={handleAddUser} value={newUser.name} />
      <input type="text" name="hobby" placeholder="Hobby" onChange={handleAddUser} value={newUser.hobby} />
      <button onClick={addUser}>Add</button>
    </div>
    <div className="users">
      {users.map((user=>(
        <div className="user" key={user.id}>
          <div className="item">{user.name}</div>
          <div className="item">{user.hobby}</div>
          <div className="icons">
            <FaEdit className="icon" role="button" tabIndex="0" />
            <FaTrashAlt onClick={()=>handleDelete(user.id)} className="icon" role="button" tabIndex="0" />
          </div>
        </div>
      )))}
    </div>
  </div>
</div>  
)
}
