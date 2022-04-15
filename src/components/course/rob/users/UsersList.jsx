import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const UsersList = ({users, handleDelete}) => {
  return (
    <div className="users">
    {users.map((user) => (
      <div key={user.id} className="user">
        <div className="item" autoFocus>{user.name}</div>
        <div className="item">{user.profession}</div>
        <div className="item">{user.hobby}</div>
        <div className="item">{user.email}</div>
        <div className="item">{user.city}</div>
        <div className="icon">
          <FaEdit className="icon" role="button" />
          <FaTrashAlt
            className="icon"
            role="button"
            tabIndex="0"
            onClick={() => handleDelete(user.id)}
          />
        </div>
      </div>
    ))}
  </div>

  )
}
