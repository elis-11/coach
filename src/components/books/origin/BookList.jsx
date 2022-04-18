import React from "react";
import { BookItem } from "./BookItem";

export const BookList = ({ books, handleDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
