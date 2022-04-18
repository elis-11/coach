// import { useState, useEffect } from "react";
import { useState } from "react";
import { AddForm } from "./AddForm";
import { BookList } from "./BookList";
import "./Robapp.scss";

export const Comp = (author, title) => {
// export const Robapp = () => {

  const [books, setBooks] = useState([
    { id: "b1", title: "Guide to Happiness", author: "Gael" },
    { id: "b2", title: "Guide to JavaScript", author: "Eliza" },
    { id: "b3", title: "Guide to Coaching", author: "Rob" },
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:5000/books");
  //     const data = await response.json();
  //     setBooks(data);
  //   };

  //   fetchData();
  // }, []);

  const addBook = (newBook) => {
    const bookNewState = {
      id: Date.now().toString(), ...newBook
    };
    setBooks([...books, bookNewState]);
  };

  const handleDelete = (id) => {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
  };

  return (
    <div className="Robapp">
      <header>
        <h1>Rob App</h1>
      </header>
      <main>
        <div className="container">
          <div className="search">
            <input type="text" name="search" placeholder="Search" />
          </div>
          <BookList books={books} />
          <AddForm addBook={addBook} handleDelete={handleDelete}/>
        </div>
      </main>
      <footer>Copyright &copy; 2022</footer>
    </div>
  );
};
