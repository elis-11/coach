import React from "react";

export const HW72 = (blog) => {
  return (
    <div>
      <div key={blog.id}>
        {blog.title} {blog.author}
      </div>
    </div>
  );
};
