import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  // console.log(bookmarks)
  return (
    <div className="w-1/3 bg-gray-100 rounded-lg">
      <div>
        <h4 className="text-2xl font-bold rounded-xl p-4 bg-green-100 border-b-2 text-center">
          Reading Time Spent:{readingTime}
        </h4>
      </div>
      <h3 className="text-2xl font-bold m-5">
        Bookmark list: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark
          key={idx}
          bookmark={bookmark}
        ></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;
