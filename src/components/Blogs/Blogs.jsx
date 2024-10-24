import { useState } from "react";
import Blog from "../Blog/Blog";
import { useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <p>Blogs length: {blogs.length}</p>
      <Blog></Blog>
    </div>
  );
};

export default Blogs;
