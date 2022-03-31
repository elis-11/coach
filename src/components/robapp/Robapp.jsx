import './Robapp.scss';

export const Robapp=()=> {

  const books = [
    { _id: "b1", title: "Guide to Happiness", author: "Gael" },
    { _id: "b2", title: "Guide to JavaScript", author: "Eliza" },
    { _id: "b3", title: "Guide to Coaching", author: "Rob" },
  ]

  //  create book list HTML from data
  const jsxBooks = books.map( book => (
    <div key={book._id} className="book"> 
      <div>{ book.title }</div>
      <div>{ book.author }</div>
      <div className="icons">Icons</div>
    </div>
  ))

  return (
    <div className="App">
      <header>
        <h1>Book App</h1>
      </header>
      <main>
        <div className="container">
          <div className="search"></div>
          <div className="book-list">
            {  jsxBooks }
          </div>
          <div className="book-add-form"></div>
        </div>
      </main>
      <footer>&copy; Rob Books Unlimited</footer>
    </div>
  );
}
