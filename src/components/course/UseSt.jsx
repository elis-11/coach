import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const UseSt = () => {
  const [books, setBooks] = useState([
    { _id: "b1", title: "Guide to Happiness", author: "Gael" },
    { _id: "b2", title: "Guide to JavaScript", author: "Eliza" },
    { _id: "b3", title: "Guide to Coaching", author: "Rob" },
  ]);
  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  const addBook = () => {
    const bookNewState={
      title:book.title,
      author:book.author}
      setBooks([...books, bookNewState])
  }
  const handleBookInput=(e) => {
    setBook({...book, [e.target.name]:e.target.value})
  }

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
            <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            // placeholder="Create a new book" 
            onChange={handleBookInput}
            value={book.title}
            />
            <input 
            type="text" 
            name="author" 
            placeholder="Author" 
            onChange={handleBookInput}
            value={book.author}
            />
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
