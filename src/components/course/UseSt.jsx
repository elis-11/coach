import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const UseSt = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Guide to Happiness", author: "Gael" },
    { id: 3, title: "Guide to Coaching", author: "Rob" },
  ]);
  //   const [book, setBook] = useState("");


  return (
    <div className="Robapp">
      <header>
        <h1>Book App</h1>
      </header>
      <main>
        <div className="container">
          <div className="search">
            <input type="text" name="search" placeholder="Search" />
          </div>
          <div className="book-list">
            {books.map((book) => (
              <div key={book.id} className="book">
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div className="icons">
                  <FaEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt className="icon" role="button" tabIndex="0" />
                </div>
              </div>
            ))}
          </div>
          <div className="add" >
              <input
                type="text"
                name="title"
                placeholder="Create a new book"
              />
            <div>
              <button type="submit">Add</button>
            </div>
          </div>
        </div>
      </main>
      <footer>&copy; Rob Books Unlimited</footer>
    </div>
  );
};
