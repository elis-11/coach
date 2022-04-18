import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const BookList = ({books, handleDelete}) => {
  return (
    <div className="book-list">
    {books.map((book) => (
      <div key={book.id} className="book">
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
    ))}
  </div>

  )
}
