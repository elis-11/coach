import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const UseS = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "React", author: "Rob" },
    { id: 2, title: "JavaScript", author: "Julia" },
    { id: 3, title: "JavaScript Description", author: "Gael" },
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
          <div className="add">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleBookInput}
                value={bookNew.title}
              />
            </div>
            <div>
              <input
                type="text"
                name="author"
                placeholder="Author"
                onChange={handleBookInput}
                value={bookNew.author}
              />
            </div>
            <div>
              <button onClick={addBook}>Add</button>
            </div>
          </div>
        </div>
      </main>
      <footer>&copy; Rob Books Unlimited</footer>
    </div>
  );
};
