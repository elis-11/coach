import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const DevItem = ({dev, handleDelete}) => {
  return (
    <div className="user">
    <div className="item">{dev.name}</div>
    <div className="item">{dev.city}</div>
    <div className="icons">
      <FaEdit className="icon" role="button" />
      <FaTrashAlt
        onClick={() => handleDelete(dev.id)}
        className="icon"
        role="button"
      />
    </div>
  </div>
)
}
