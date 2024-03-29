import { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "./Home.scss";

export const Home = () => {
  // const [books, setBooks] = useState([
  // { id: 1, title: "Guide to Happiness", author: "Anne Cords" },
  // { id: 2, title: "Guide to JavaScript", author: "Ricci Roy" },
  // { id: 3, title: "Guide to Coaching", author: "Sarah Richter" },
  // ]);
  const [books, setBooks] = useState(() => {
    const savedBooksInLS = localStorage.getItem("books");
    if (savedBooksInLS) {
      return JSON.parse(savedBooksInLS);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const [newBook, setNewBook] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState("");
  const [search, setSearch] = useState("");

  // ADD BOOK
  const handleBookInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    const bookNewState = {
      title: newBook.title,
      author: newBook.author,
      id: new Date().toString(),
    };
    setBooks([...books, bookNewState]);
    setNewBook({ ...newBook, title: "", author: "" });
  };

  // EDIT BOOK
  const handleEditBook = (e) => {
    // input Change
    setCurrentBook({ ...currentBook, title: e.target.value });
    console.log(currentBook);
  };
  const handleUpdateBook = (id, updatedBook) => {
    const updatedItem = books.map((book) => {
      return book.id === id ? updatedBook : book;
    });
    setIsEditing(false);
    setBooks(updatedItem);
  };
  const handleEditSubmitForm = (e) => {
    // Submit form
    e.preventDefault();
    handleUpdateBook(currentBook.id, currentBook);
  };
  const handleEditButton = (book) => {
    // Edit button
    setIsEditing(true);
    setCurrentBook({ ...book });
  };

  const searchBook = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Delete book
  const handleDelete = (id) => {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
    console.log("deleteBook:", deleteBook);
  };
  return (
    <div className="Home">
      <h2>Books App</h2>
      <main>
        <div className="container">
          <div className="search">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                name="search"
                role="search"
                placeholder="Search.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
          {/* EDIT */}
          {isEditing ? (
            <form className="edit" onSubmit={handleEditSubmitForm}>
              <input
                name="editBook"
                type="text"
                placeholder="Edit book title"
                value={currentBook.title}
                onChange={handleEditBook}
              />
              <input
                name="editBook"
                type="text"
                placeholder="Edit book author"
                value={currentBook.author}
                onChange={handleEditBook}
              />
              <button className="update" type="submit">
                Edit
              </button>
              <button className="cancel" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form>
          ) : (
            <div className="add">
              <input
                autoFocus
                type="text"
                name="title"
                autoComplete="off"
                placeholder="Add book title"
                onChange={handleBookInput}
                value={newBook.title}
              />
              <input
                type="text"
                name="author"
                autoComplete="off"
                placeholder="Add book author"
                onChange={handleBookInput}
                value={newBook.author}
              />

              <div>
                <button onClick={addBook}>Add</button>
              </div>
            </div>
          )}

          <div className="book-list">
            {searchBook.map((book, index) => (
            // {books.map((book, index) => (
              <div key={book.id} className="book">
                <div>
                  {index + 1}: &nbsp; {book.author}
                </div>
                <div>{book.title}</div>
                <div className="icons">
                  <FaEdit
                    className="icon"
                    onClick={() => handleEditButton(book)}
                    role="button"
                    tabIndex="0"
                  />
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
          <footer>
            <h2>
              {searchBook.length} List{" "} 
              {searchBook.length === 1 ? "Book" : "Books"}
              {/* {books.length} List{" "}
              {books.length === 1 ? "Book" : "Books"} */}
            </h2>
          </footer>
        </div>
      </main>
    </div>
  );
};
