import React, { useState } from "react";
import "./EBook.scss";

export const EBook = () => {
  const [books, setBooks] = useState([]);

  const [book, setBook] = useState("");

  const handleBookChange = (e) => {
    setBook(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (book !== "") {
      setBooks([...books, { 
        id: books.length + 1, 
        text: book.trim() 
      }]);
    }
    setBook("");
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
          <div key={book.id}>{book.text}</div>
        ))}
      </div>
    </div>
  );
};
