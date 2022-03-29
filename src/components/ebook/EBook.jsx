import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./EBook.scss";

export const EBook = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      return JSON.parse(savedBooks);
    } else {
      return [];
    }
  });

  const [book, setBook] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleBookChange = (e) => {
    setBook(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (book !== "") {
      setBooks([
        ...books,
        {
          id: books.length + 1,
          text: book.trim(),
        },
      ]);
    }
    setBook("");
  };

  const handleDeleteBook = (id) => {
    const removeBook = books.filter((book) => book.id !== id);
    setBooks(removeBook);
  };

  return (
    <div className="EBook">
      <h2>EBook App</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          name="book"
          type="text"
          value={book}
          onChange={handleBookChange}
          placeholder="Create a new Book "
        />
      </form>

      <div className="book-list">
        {books.map((book) => (
          // <div key={book.id}>{book.text}
          <div key={book.id} className="book">
            {book.text}
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div className="icons">
              <FaEdit className="icon" role="button" tabIndex="0" />
              <FaTrashAlt
                onClick={() => handleDeleteBook(book.id)}
                className="icon"
                role="button"
                tabIndex="0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
