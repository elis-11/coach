// import { useState, useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./Robapp.scss";

export const App = () => {
  const [books, setBooks] = useState([
    { id: "b1", title: "Guide to Happiness", author: "Gael" },
    { id: "b2", title: "Guide to Coaching", author: "Rob" },
    { id: "b3", title: "Guide to JavaScript", author: "Eliza" },
  ]);
  const [bookNew, setBookNew] = useState({
    title: "",
    author: "",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:5000/books");
  //     const data = await response.json();
  //     setBooks(data);
  //   };

  //   fetchData();
  // }, []);

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
  const handleBookInput = (event) => {
    setBookNew({ ...bookNew, [event.target.name]: event.target.value });
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
      <footer>Copyright &copy; 2022</footer>

    </div>
  );
};
