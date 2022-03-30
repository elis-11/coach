import React from "react";

export const AddForm = ({ book, handleAddInputChange, handleAddFormSubmit }) => {
  return (
    <form onSubmit={handleAddFormSubmit}>
      {/* <h2>Add Book</h2> */}
      <label htmlFor="addBook"> </label>
      <input
        name="book"
        type="text"
        placeholder="Create a new Book "
        value={book}
        onChange={handleAddInputChange}
      />
    </form>
  );
};
