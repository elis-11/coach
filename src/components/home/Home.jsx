import { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "./Home.scss";

export const Home = () => {
  const [newBooks, setNBooks] = useState(() => {
    const savedBooksInLS = localStorage.getItem("newBooks");
    if (savedBooksInLS) {
      return JSON.parse(savedBooksInLS);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("newBooks", JSON.stringify(newBooks));
  }, [newBooks]);

  // const [newBooks, setNBooks] = useState([
  // { id: 1, title: "Guide to Happiness", author: "Anne Cords" },
  // { id: 2, title: "Guide to JavaScript", author: "Ricci Roy" },
  // { id: 3, title: "Guide to Coaching", author: "Sarah Richter" },
  // ]);

  const [newBook, setNewBook] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState("");
  const [search, setSearch] = useState("");

  // ADD BOOK
  const addBook = () => {
    const bookNewState = {
      title: newBook.title,
      author: newBook.author,
      id: new Date().toString(),
    };
    setNBooks([...newBooks, bookNewState]);
    setNewBook({ ...newBook, title: "", author: "" });
  };
  const handleBookInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  // EDIT BOOK
  const handleEditBook = (e) => {
    setCurrentBook({ ...currentBook, title: e.target.value });
    console.log(currentBook);
  };
  const handleUpdateBook = (id, updatedBook) => {
    const updatedItem = newBooks.map((book) => {
      return book.id === id ? updatedBook : book;
    });
    setIsEditing(false);
    setNBooks(updatedItem);
  };
  const handleEditForm = (e) => {
    e.preventDefault();
    handleUpdateBook(currentBook.id, currentBook);
  };
  const handleEditClick = (book) => {
    setIsEditing(true);
    setCurrentBook({ ...book });
  };

  const searchBook = newBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Delete book
  const handleDelete = (id) => {
    const deleteBook = newBooks.filter((book) => book.id !== id);
    setNBooks(deleteBook);
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

          {isEditing ? (
            <form className="edit" onSubmit={handleEditForm}>
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
                Update
              </button>
              <button className="cancel" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form>
          ) : (
            <div className="add">
              <input
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
            {searchBook.map((book) => (
              <div key={book.id} className="book">
                <div>{book.author}</div>
                <div>{book.title}</div>
                <div className="icons">
                  <FaEdit
                    className="icon"
                    onClick={() => handleEditClick(book)}
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
            </h2>
          </footer>
        </div>
      </main>
    </div>
  );
};
