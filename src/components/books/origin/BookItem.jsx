import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const BookItem = ({ book, handleDelete}) => {
  return (
    <div className="book">
    <div>{book.title}</div>
    <div>{book.author}</div>
    <div className="icons">
      <FaEdit className="icon" role="button" tabIndex="0" />
      <FaTrashAlt
        className="icon"
        onClick={() => handleDelete(book.id)}
        role="button"
        tabIndex="0"
      />
    </div>
  </div>

  )
}
