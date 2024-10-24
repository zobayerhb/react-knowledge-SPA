import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <p>Blogs length: {blogs.length}</p>
    </div>
  );
};

export default Blogs;
