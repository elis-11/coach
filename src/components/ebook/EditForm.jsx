import React from 'react'
import "./EBook.scss";


export const EditForm = ({
    currentBook, 
    setIsEditing, 
    handleEditInputChange, 
    handleEditFormSubmit
}) => {
  return (
    <form
    className="edit-form"
    onSubmit={handleEditFormSubmit}>
    {/* <h2>Edit Book</h2> */}
    <label htmlFor="editBook"></label>
    <input
    // className="input"
      name="editBook"
      type="text"
      placeholder="Edit Book"
      value={currentBook.text}
      onChange={handleEditInputChange}
    />
    <button className="update" type="submit" onClick={handleEditFormSubmit}>Update</button>
    <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
  </form>
  )
}
