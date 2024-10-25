import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  // console.log(bookmarks)
  return (
    <div className="w-1/3 bg-gray-100 rounded-lg">
      <h3 className="text-2xl font-bold m-5 bg-green-200 rounded-xl text-center p-4">
        Bookmark list: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
