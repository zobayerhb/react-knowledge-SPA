import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  console.log(bookmark);
  return (
    <div className="bg-white rounded-xl p-4 border-2 m-5">
      <h4 className="text-2xl font-bold">{title}</h4>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
