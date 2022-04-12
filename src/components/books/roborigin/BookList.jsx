import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export const BookList = ({books, handleDelete}) => {

  const jsxBooks = books.map((book) => (
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
  ));

  return (
    <div>
      <div className="book-list">{jsxBooks}</div>
    </div>
  );
};
