import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const DevItem = ({dev, handleDelete}) => {
  return (
    <div className="user">
    <div className="item">{dev.name}</div>
    <div className="item">{dev.experience}</div>
    <div className="icons">
      <FaEdit className="icon" role="button" tabIndex="0" />
      <FaTrashAlt
        onClick={() => handleDelete(dev.id)}
        className="icon"
        role="button"
        tabIndex="0"
      />
    </div>
  </div>
  )
}
