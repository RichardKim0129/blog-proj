import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "minna", id: 1 },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "richard",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "minna",
      id: 3,
    },
  ]);

  const [name, setName] = useState('minna');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList agood={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName('richard')}>Change Name</button>
      <p>{ name }</p>
    </div>
  );
};

export default Home;
