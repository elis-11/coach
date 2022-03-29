import React from "react";
import "./Books.scss";

export const Books = () => {
  const books = [
    { _id: "b1", title: "Guide to Happines", author: "Gael" },
    { _id: "b2", title: "Guide to JavaScript", author: "Elisa" },
    { _id: "b3", title: "Guide to Coaching", author: "Robert" },
  ];

  const jsxBooks = books.map((book) => (
    <div key={book._id} className="book">
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div className="icons">
        <button type="button"></button>
      </div>
    </div>
  ));

  return (
    <div className="Books">
      <div>
        <h2>Book List</h2>
      </div>
      <main>
        <div className="container">
          <div className="search">Search</div>
          <div className="book-list">{jsxBooks}</div>
          <div className="add-book"></div>
        </div>
      </main>
      <footer>&copy; Copyright 2022</footer>
    </div>
  );
};
