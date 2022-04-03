import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const Home = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Guide to Happiness", author: "Gael" },
    { id: 2, title: "Guide to JavaScript", author: "Eliza" },
    { id: 3, title: "Guide to Coaching", author: "Rob" },
  ]);
const [newBook, setNewBook]= useState({})

const addBook= () => {
  const bookNewState={title: newBook.title, author: newBook.author}
  setBooks([...books, bookNewState])
}
const handleBookInput = (e)=>{
  setNewBook({...newBook, [e.target.name]: e.target.value})
}



  return (
    <div className="Robapp">
      <h2>Books App</h2>
      <main>
        <div className="container">
          <div className="search">
            <input type="text" name="search" placeholder="Search.." />
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
              autoComplete="off"
              placeholder="Create a new book"
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

