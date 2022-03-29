// import React, { useState } from 'react'
import './EBook.scss'

export const EBook = () => {

  // const [books, setBooks]=useState([])

  // const [book, setBook]=useState('')



  return (
    <div className="EBook">
      <h2>EBook App</h2>
      <form>

        <input
        name="book"
        type="text"
        placeholder="Create a new Book "
        />
      </form>
      <div className="book-list">
        {/* {books.map((book)=>(
          <div>{book}</div>
        ))} */}
      </div>
      
      </div>
  )
}
