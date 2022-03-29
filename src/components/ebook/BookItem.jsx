import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


export const BookItem = ({book, handleEditBook, handleDeleteBook}) => {

  return (

    <div key={book.id} className="book">
    {book.text}
    <div>{book.title}</div>
    <div>{book.author}</div>
    <div className="icons">
      <FaEdit
        onClick={() => handleEditBook(book)}
        className="icon"
        role="button"
        tabIndex="0"
      />
      <FaTrashAlt
        onClick={() => handleDeleteBook(book.id)}
        className="icon"
        role="button"
        tabIndex="0"
      />
    </div>
  </div>

  )
}
