import React, { useEffect, useState } from "react";
import { AddForm } from "./AddForm";
import { BookItem } from "./BookItem";
import "./EBook.scss";
import { EditForm } from "./EditForm";

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
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleBookChange = (e) => {
    setBook(e.target.value);
  };

  const handleEditBookChange = (e) => {
    setCurrentBook({ ...currentBook, text: e.target.value });
    console.log(currentBook);
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

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateBook(currentBook.id, currentBook);
  };

  const handleDeleteBook = (id) => {
    const removeBook = books.filter((book) => book.id !== id);
    setBooks(removeBook);
  };

  const handleUpdateBook = (id, updatedBook) => {
    const updatedItem = books.map((book) => {
      return book.id === id ? updatedBook : book;
    });
    setIsEditing(false);
    setBooks(updatedItem);
  };

  const handleEditBook = (book) => {
    setIsEditing(true);
    setCurrentBook({ ...book });
  };

  return (
    <div className="EBook">
      <h2>Book App</h2>
      {isEditing ? (
    <EditForm
    currentBook={currentBook}
    setIsEditing={setIsEditing}
    handleEditBookChange={handleEditBookChange}
    handleEditFormSubmit={handleEditFormSubmit}
    />
      ) : (
      <AddForm
      book={book}
       handleBookChange={handleBookChange}
      handleFormSubmit={handleFormSubmit}
      />
      )}

      <div className="book-list">
        {books.map((book) => (
          <BookItem
          book={book}
          handleEditClick={handleEditBook}
          handleDeleteBook={handleDeleteBook}
          />
        ))}
      </div>
    </div>
  );
};
