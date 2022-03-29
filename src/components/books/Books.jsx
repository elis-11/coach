// import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./Books.scss";

export const Books = (props) => {
  const books = [
    { id: "1", title: "Guide to Happines", author: "Gael" },
    { id: "2", title: "Guide to JavaScript", author: "Elisa" },
    { id: "3", title: "Guide to Coaching", author: "Robert" },
  ];
  // const [name, setName] = useState('')

const addBook=(props)=> {
alert(books)
}
const handleSubmit=(e)=>{
  e.preventDefault();
props.addBook('hallo')

}

  return (
    <div className="Books">
      <div>
        <h2>Book App</h2>
      </div>
      <main>
        {books.length ? (
          <div className="container">
            <div className="add">{addBook}</div>
            <form 
              onSubmit={handleSubmit}
              >Add new Book</form>
            <div className="search">Search</div>
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
            <div className="add-book"></div>
          </div>
        ) : (
          <p style={{ marginTop: "2rem" }}> Your list is empty.</p>
        )}
      </main>
      <footer>&copy; Copyright 2022</footer>
    </div>
  );
};
