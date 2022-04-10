import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import './Books.scss'

export const BookApp = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Guide to Happiness",
      author: "Gael",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    {
      id: 2,
      title: "Guide to JavaScript",
      author: "Elisa",
      email: "elisa@gmail.com",
      city: "Hamburg",
    },
    {
      id: 3,
      title: "Guide to Coaching",
      author: "Rob",
      email: "robert@gmail.com",
      city: "Berlin",
    },
  ]);
const [newBook, setNewBook]= useState({})

const addBook = () => {
  const bookNewState = {
title: newBook.title,
id: new Date()
// id: new Date().toString()
  }
  setBooks([...books, bookNewState])
  setNewBook({ ...newBook, title: ""})
}
const handleBookInput = (e) => {
  setNewBook({ ...newBook, [e.target.name]: e.target.value})
}

//**deleteBook** */
const handleDelete= (id) => {
  const deleteBook=books.filter(book=>book.id !== id)
  setBooks(deleteBook)
}

  return (
    <div className="Book">
      <header>
        <h2>Book App</h2>
      </header>
      <main>
        <div className="container">
          <div className="search">
            <input
              type="search"
              placeholder="Search..."
            />
            {/* <div>
              <button>Search</button>
            </div> */}
          </div>
          <div className="book-list">
            {books.map(book => (
              <div key={book.id} className="book">
                <div>{book.title}</div>
                <div className="icons">
                  <FaEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt className="icon" onClick={() => handleDelete(book.id)} role="button" tabIndex="0" />
                </div>
              </div>
                ))}
          </div>
          <div className="add">
            <input
              type="text"
              name="title"
              placeholder="Create a new Book"
              onChange={handleBookInput}
              value={newBook.title}
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
