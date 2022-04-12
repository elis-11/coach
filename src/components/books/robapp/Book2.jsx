// // import { useState, useEffect } from "react";
// import { useState } from "react";
// import "../robapp/Robapp.scss";
// import { AddBook } from "./AddBook";
// import { BookList } from "./BookList";

// export const RobOrigin = () => {
//   const [books, setBooks] = useState([
//     { id: "b1", title: "Guide to Coaching", author: "Rob" },
//     { id: "b2", title: "Guide to JavaScript", author: "Gael" },
//   ]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const response = await fetch("http://localhost:5000/books");
//   //     const data = await response.json();
//   //     setBooks(data);
//   //   };

//   //   fetchData();
//   // }, []);

//   const addBook = (bookNew) => {
//     const newId = Date.now().toString();
//     const bookNewState = {
//       id: newId,
//       ...bookNew,
//     };
//     setBooks([...books, bookNewState]);
//     //! setBookNew({ ...bookNew, title: "", author: "" });
//   };

//   const handleDelete = (id) => {
//     const deleteBook = books.filter((book) => book.id !== id);
//     setBooks(deleteBook);
//   };

//   return (
//     <div className="Robapp">
//       <header>
//         <h1>Rob Origin App</h1>
//       </header>
//       <main>
//         <div className="container">
//           <div className="search">
//             <input type="text" name="search" placeholder="Search" />
//           </div>
//           <AddBook addBook={addBook} />
//           <BookList books={books} handleDelete={handleDelete} />
//         </div>
//       </main>
//       <footer>&copy; Rob Books Unlimited</footer>
//     </div>
//   );
// };
// //***********BookList.jsx*************** */
// import React from "react";
// import { FaEdit } from "react-icons/fa";
// import { FaTrashAlt } from "react-icons/fa";

// export const BookList = ({ books, handleDelete }) => {
//   const jsxBooks = books.map((book) => (
//     <div key={book.id} className="book">
//       <div>{book.title}</div>
//       <div>{book.author}</div>
//       <div className="icons">
//         <FaEdit className="icon" role="button" tabIndex="0" />
//         <FaTrashAlt
//           className="icon"
//           onClick={() => handleDelete(book.id)}
//           role="button"
//           tabIndex="0"
//         />
//       </div>
//     </div>
//   ));

//   return (
//     <div>
//       <div className="book-list">{jsxBooks}</div>
//     </div>
//   );
// };
// //***********AddBook.jsx*********/
// import { useState } from "react";

// export const AddBook = ({ addBook }) => {
//   const [bookNew, setBookNew] = useState({
//     title: "",
//     author: "",
//   });

//   const handleBookInput = (event) => {
//     setBookNew({ ...bookNew, [event.target.name]: event.target.value });
//   };

//   const submitAdd = () => {
//     addBook(bookNew);
//   };

//   return (
//     <div>
//       <div className="add">
//         <div>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             onChange={handleBookInput}
//             value={bookNew.title}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="author"
//             placeholder="Author"
//             onChange={handleBookInput}
//             value={bookNew.author}
//           />
//         </div>
//         <div>
//           <button onClick={submitAdd}>Add</button>
//         </div>
//       </div>
//     </div>
//   );
// };
