import {useState} from 'react'

export const HW71 = () => {

const [blogs, setBlogs]= useState([
  { id: "1", title: "Blog 1", author: "Gael" },
  { id: "2", title: "Blog 2", author: "Rob" },
  { id: "3", title: "Blog 3", author: "Elisa" },
])
const [newTitle, setNewTitle] =useState('')
const [newAuthor, setNewAuthor]= useState('')

const onNewTitle =(e)=>{
  setNewTitle(e.target.value);
}
const onNewAuthor =(e)=>{
  setNewAuthor(e.target.value);
}

const addNewBlog =() => {
  const newId = Date.now().toString();
  const newBlog={id:newId, title: newTitle, author: newAuthor}
  setBlogs([...blogs, newBlog]);
  setNewTitle('')
  setNewAuthor('')
}

  return (
    <div>
{blogs.map(blog => (
  <div key={blog.id}>{blog.title} {blog.author}</div>
))}
<div>
  <input value={newTitle} onChange={onNewTitle} />
  <input value={newAuthor} onChange={onNewAuthor} />
  <button onClick={addNewBlog}>Add</button>
</div>
    </div>
  )
}
