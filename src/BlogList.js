const BlogList = ({ agood, title }) => {
  // const blogs = props.agood;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {agood.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;