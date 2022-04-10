import { useState } from "react";

export const HW8 = () => {
  const [blogs, setBlogs] = useState([
    { id: "1", title: "Blog 1", author: "Gael" },
    { id: "2", title: "Blog 2", author: "Rob" },
    { id: "3", title: "Blog 3", author: "Elisa" },
  ]);
  const [blogTitleNew, setBlogTitleNew] = useState(""); 
  const [blogAuthorNew, setBlogAuthorNew] = useState("");
  

  // console.log(blogs);

  const addNewBlogToArray = () => {
    const newId = Date.now().toString();
    const newBlog = { id: newId, title: blogTitleNew, author: blogAuthorNew };
    setBlogs([...blogs, newBlog]); 
    setBlogTitleNew('')
    setBlogAuthorNew('')
  };

  const onTitleChange = (event) => {
    setBlogTitleNew(event.target.value);
  };
  const onAuthorChange = (event) => {
    setBlogAuthorNew(event.target.value);
  }

  return (
    <div>
      <h2>Blog posts</h2>
      <p>hw-8</p>
      <input value={blogTitleNew} onChange={onTitleChange} />
      <input value={blogAuthorNew} onChange={onAuthorChange} />
      <button onClick={addNewBlogToArray}>Add Blog</button>
      <div className="blogs">{blogs.map(blog =>(
        <div key={blog.id}>{blog.title} von {blog.author}</div>
      ))}</div>
    </div>
  );
};
