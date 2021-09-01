import { Link } from "react-router-dom";

const BlogList = ({ agood, title }) => {
  // const BlogList = (props) => {
  // const blogs = props.agood;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {/* From the destructures parameter on line 1 */}
      {agood.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
