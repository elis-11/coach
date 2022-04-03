import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import './Course.scss'



export const UseS = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Guide to Happiness", author: "Gael", email: "gael@gmail.com" },
    { id: 2, title: "Guide to JavaScript", author: "Eliza", email: "elisa@gmail.com" },
    { id: 3, title: "Guide to Coaching", author: "Rob", email: "robert@gmail.com" },
]);
  const [bookNew, setBookNew] = useState({
    title: "",
    author: "",
  });

  const addBook = () => {
    const bookNewState = { title: bookNew.title, author: bookNew.author };
    setBooks([...books, bookNewState]);
  };

  const handleBookInput = (e) => {
    setBookNew({ ...bookNew, [e.target.name]: e.target.value });
  };

  return (
    <div className="Book">
      <header>
        <h2>Book App</h2>
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
          <div className="add">
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleBookInput}
                value={bookNew.title}
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                onChange={handleBookInput}
                value={bookNew.author}
              />
            <div>
              <button onClick={addBook}>Add</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
