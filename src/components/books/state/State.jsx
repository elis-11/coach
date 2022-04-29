import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "../add/Robapp.scss";

export const State = () => {
  const [books, setBooks] = useState([
    { id: "b1", title: "Guide to Coaching", author: "Rob" },
    { id: "b2", title: "Guide to JavaScript", author: "Gael" },
  ]);
  const [bookNew, setBookNew] = useState({
    title: "",
    author: "",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:5000/books");
  //     const data = await response.json(); // parses the JSON in the response
  //     setBooks(data);
  //   };
  //   fetchData();
  // }, []); // empty arre [] => means: only run this effect ONCE after first render!

  //**Add**/
  const addBook = () => {
    const newId = Date.now().toString();
    const bookNewState = {
      id: newId,
      title: bookNew.title,
      author: bookNew.author,
    };
    setBooks([...books, bookNewState]);
    setBookNew({ ...bookNew, title: "", author: "" });
  };

  const handleBookInput = (event) => {
    console.log(event.target.name, event.target.value);
    setBookNew({ ...bookNew, [event.target.name]: event.target.value });
  };

//**Delete**/
  const handleDelete = (id) => {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
  };

  return (
    <div className="Robapp">
      <header>
        <h1>Use State</h1>
      </header>
      <main>
        <div className="container">
          {/* <div className="search">Search</div> */}
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
        </div>
      </main>
      <footer>&copy; Books Unlimited</footer>
    </div>
  );
};
