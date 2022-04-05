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
              <div className="book">
                <div></div>
                <div className="icons">
                  <FaEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt className="icon" role="button" tabIndex="0" />
                </div>
              </div>
          </div>
          <div className="add">
            <input
              type="text"
              name="title"
              placeholder="Create a new Book"
            />
            <div>
              <button>Add</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
