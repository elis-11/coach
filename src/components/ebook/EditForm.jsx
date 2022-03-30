import React from 'react'

export const EditForm = ({
    currentBook, 
    setIsEditing, 
    handleEditInputChange, 
    handleEditFormSubmit
}) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
    <h2>Edit Book</h2>
    <label htmlFor="editBook"></label>
    <input
      name="editBook"
      type="text"
      placeholder="Edit Book"
      value={currentBook.text}
      onChange={handleEditInputChange}
    />
    <button type="submit" onClick={handleEditFormSubmit}>Update</button>
    <button onClick={() => setIsEditing(false)}>Cancel</button>
  </form>
  )
}
