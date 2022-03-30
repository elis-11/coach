import { useEffect, useState } from "react";
import { AddForm } from "./AddForm";
import { BookItem } from "./BookItem";
import { EditForm } from "./EditForm";
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
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddInputChange = (e) => {
    setBook(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setCurrentBook({ ...currentBook, text: e.target.value });
    console.log(currentBook);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (book !== "") {
      setBooks([
        ...books,
        {
          id: new Date(),
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

  const handleDeleteClick = (id) => {
    const removeItem = books.filter((book) => book.id !== id);
    setBooks(removeItem);
  };

  const handleUpdateBook = (id, updatedBook) => {
    const updatedItem = books.map((book) => {
      return book.id === id ? updatedBook : book;
    });
    setIsEditing(false);
    setBooks(updatedItem);
  };

  const handleEditClick = (book) => {
    setIsEditing(true);
    setCurrentBook({ ...book });
  };

  return (
    <div className="EBook">
      <h2>Book App</h2>
      <div className="container">
      {isEditing ? (
        <EditForm
          currentBook={currentBook}
          setIsEditing={setIsEditing}
          handleEditInputChange={handleEditInputChange}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddForm
          book={book}
          handleAddInputChange={handleAddInputChange}
          handleAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <div className="book-list">
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            />
        ))}
      </div>
    </div>    
   </div>
  );
};
