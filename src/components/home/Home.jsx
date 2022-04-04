import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
// import './Course.scss'

export const Home = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Guide to Happiness", author: "Gael" },
    { id: 2, title: "Guide to JavaScript", author: "Eliza" },
    { id: 3, title: "Guide to Coaching", author: "Rob" },
  ]);

  const [newBook, setNewBook] = useState({});

  useEffect(() => {
    console.log("use effect ran");
  });

  const addBook = () => {
    const bookNewState = { title: newBook.title, author: newBook.author };
    setBooks([...books, bookNewState]);
  };
  const handleBookInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

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
                  <FaTrashAlt
                    className="icon"
                    onClick={() => handleDelete(book.id)}
                    role="button"
                    // tabIndex="0"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="add">
            <input
              type="text"
              name="title"
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

//-------1----------
// useState for SEARCH
// const [array, setArray] = useState([]);

// const handleChange = (newValue) => {
//   setArray((array) => [...array, newValue]);
// };

//-------2-----------

// For functional components with hooks

// const [search, setSearch] = useState([]);

// // Using .concat(), wrapper function (recommended)
// setSearch(search => search.concat(query));

// // Spread operator, wrapper function (recommended)
// setSearch(search => [...search, query]);

//--------3--------
// const [value, setValue] = useState([])
// setValue([...value, newvalue])
//------4-------
