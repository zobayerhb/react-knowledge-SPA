import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog => {
    console.log('adding blog bookmark');
  }

  return (
    <>
      <div>
        <Header></Header>
      </div>

      {/* main container */}
      <div className="max-w-[1280px] mx-auto md:flex ">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
