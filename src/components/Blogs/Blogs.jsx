import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 pr-6">

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
      
    </div>
  );
};

export default Blogs;
