import PropTypes from 'prop-types'

const Blog = ({blog}) => {
    console.log(blog)
  return (
    <div>
      <h4>blog box</h4>
      
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object,
}

export default Blog;
