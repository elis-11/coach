import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "./Books.scss";

export const DoubleBook = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Guide to Happiness",
      author: "Gael",
      email: "gael@gmail.com",
    },
    {
      id: 2,
      title: "Guide to JavaScript",
      author: "Eliza",
      email: "elisa@gmail.com",
    },
    {
      id: 3,
      title: "Guide to Coaching",
      author: "Rob",
      email: "robert@gmail.com",
    },
  ]);
  const [bookNew, setBookNew] = useState({
    title: "",
    author: "",
  });

  const addBook = () => {
    const newId = Date.now().toString();
    const bookNewState = {
      id: newId,
      title: bookNew.title,
      author: bookNew.author,
    };
    setBooks([...books, bookNewState]);
    setBookNew({ ...books, title: "", author: "" });
  };

  const handleBookInput = (e) => {
    setBookNew({ ...bookNew, [e.target.name]: e.target.value });
  };

  //**delete**/
  const handleDelete = (id) => {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
  };

  return (
    <div className="Book">
      <header>
        <h2>Double Book</h2>
      </header>
      <main>
        <div className="container">
          <div className="search">
            <input type="text" name="search" placeholder="Search..." />
          </div>
          <div className="book-list">
            {books.map((book) => (
              <div key={book.id} className="book">
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div className="icons">
                  <FaEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt
                    className="icon"
                    onClick={() => handleDelete(book.id)}
                    role="button"
                    tabIndex="0"
                  />
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
