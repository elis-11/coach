import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./EBook.scss";



export const BookItem = ({book, handleEditClick, handleDeleteClick}) => {

  return (

    <div key={book.id} className="book">
    {book.text}
    <div>{book.title}</div>
    <div>{book.author}</div>
    <div className="icons">
      <FaEdit
        onClick={() => handleEditClick(book)}
        className="icon"
        role="button"
        tabIndex="0"
      />
      <FaTrashAlt
        onClick={() => handleDeleteClick(book.id)}
        className="icon"
        role="button"
        tabIndex="0"
      />
    </div>
  </div>

  )
}
