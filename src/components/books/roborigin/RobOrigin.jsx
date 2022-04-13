// import { useState, useEffect } from "react";
import { useState } from "react";
import "../robapp/Robapp.scss";
import { AddBook } from "./AddBook";
import { BookList } from "./BookList";

export const RobOrigin = () => {
  const [books, setBooks] = useState([
    { id: "b1", title: "Guide to Coaching", author: "Rob" },
    { id: "b2", title: "Guide to JavaScript", author: "Gael" },
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:5000/books");
  //     const data = await response.json();
  //     setBooks(data);
  //   };

  //   fetchData();
  // }, []);

  const addBook = (bookNew) => {
    const newId = Date.now().toString();
    const bookNewState = {
      id: newId,
      ...bookNew,
    };
    setBooks([...books, bookNewState]);
//! setBookNew({ ...bookNew, title: "", author: "" }); 
  };

  const handleDelete = (id) => {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
  };

  return (
    <div className="Robapp">
      <header>
        <h1>Rob Origin App</h1>
      </header>
      <main>
        <div className="container">
          <div className="search">
            <input type="text" name="search" placeholder="Search" />
          </div>
          <AddBook addBook={addBook} />
          <BookList books={books} handleDelete={handleDelete} />
        </div>
      </main>
      <footer>&copy; Books Unlimited</footer>
    </div>
  );
};
