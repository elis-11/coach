import { useState } from "react";

export const HW77 = () => {
  const [blogs, setBlogs] = useState([
    { id: "1", title: "Blog 1", author: "Gael" },
    { id: "2", title: "Blog 2", author: "Rob" },
    { id: "3", title: "Blog 3", author: "Elisa" },
  ]);
  const [titleNew, setTitleNew] = useState("");
  const [authorNew, setAuthorNew] = useState("");

  const onTitleChange = (event) => {
    setTitleNew(event.target.value);
  };

  const onAuthorChange= (event) => {
    setAuthorNew(event.target.value);
  }

  const addNewBlog = () => {
    const newId = new Date().toString();
    const newTitle = { id: newId, title: titleNew, author:authorNew };
    setBlogs([...blogs, newTitle], );
    setTitleNew("")
    setAuthorNew("")
  };

  return (
    <div>
      <h2>Blogs posts</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          {blog.title} {blog.author}
        </div>
      ))}
      <input value={titleNew} onChange={onTitleChange} />
      <input value={authorNew} onChange={onAuthorChange} />
      <button onClick={addNewBlog}>Add</button>
    </div>
  );
};
