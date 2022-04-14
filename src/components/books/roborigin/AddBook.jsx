import { useState } from "react";

export const AddBook = ({ addBook }) => {
  const [bookNew, setBookNew] = useState({
    title: "",
    author: "",
  });

  const handleBookInput = (event) => {
    setBookNew({ ...bookNew, [event.target.name]: event.target.value });
  };

  const submitAdd = () => {
    addBook(bookNew);
    setBookNew({ ...bookNew, title: "", author: "" });
  };

  return (
    <div>
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
          <button onClick={submitAdd}>Add</button>
        </div>
      </div>
    </div>
  );
};
