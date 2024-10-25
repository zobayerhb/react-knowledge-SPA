import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmarks }) => {
  // console.log(blog);
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <>
      <div>
        <img
          className="w-full rounded-lg"
          src={cover}
          alt={`Cover photo of ${title}`}
        />
        <div className="flex items-center justify-between pt-8">
          <div className="flex">
            <img
              className="w-14"
              src={author_img}
              alt={`This is the image of ${author}`}
            />
            <div className="ml-6">
              <h4 className="text-2xl font-bold ">{author}</h4>
              <span className="text-[16px] font-semibold text-gray-500">
                {posted_date}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>{reading_time} min read</span>
            <button
              onClick={() => handleBookmarks(blog)}
              className="text-xl text-green-600"
            >
              <CiBookmark></CiBookmark>
            </button>
          </div>
        </div>
        <h2 className="font-bold text-[40px] max-w-[737px] pt-4">{title}</h2>
        <div>
          {hashtags.map((hash, idx) => (
            <span className="py-4" key={idx}>
              <a className="font-medium text-xl mr-4 text-gray-500" href="">
                #{hash}
              </a>
            </span>
          ))}
        </div>
        <button className=" font-semibold pb-8 pt-3 text-[#6047EC] underline">
          Mark as read
        </button>
      </div>
      <hr className="pb-8" />
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
};

export default Blog;
